-- Keep a member page bound to the same stable subject for every revision.
-- The application validates the complete module contract; the database also
-- protects the identity fields that must never drift through a direct RPC.

create or replace function public.save_page_revision(
  target_page_id text,
  page_document jsonb,
  expected_revision_id uuid default null,
  revision_summary text default null
)
returns table (
  revision_id uuid,
  revision_number bigint,
  published_revision_id uuid
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := auth.uid();
  locked_page public.page_documents%rowtype;
  created_revision_id uuid;
  next_revision_number bigint;
begin
  if caller_user_id is null then
    raise exception 'Authentication required.' using errcode = '42501';
  end if;

  select *
    into locked_page
  from public.page_documents
  where id = target_page_id
  for update;

  if not found then
    raise exception 'Unknown page %.', target_page_id using errcode = 'P0002';
  end if;

  if not ffe_private.has_page_edit_permission(
    locked_page.scope_type,
    locked_page.scope_id,
    locked_page.owner_user_id
  ) then
    raise exception 'No edit permission for page %.', target_page_id using errcode = '42501';
  end if;

  if locked_page.draft_revision_id is distinct from expected_revision_id then
    raise exception 'Draft changed since it was loaded.' using errcode = '40001';
  end if;

  if jsonb_typeof(page_document) <> 'object'
    or page_document ->> 'id' <> target_page_id
    or page_document ->> 'schema_version' <> '1.0.0'
    or jsonb_typeof(page_document -> 'regions') <> 'array'
    or jsonb_typeof(page_document -> 'capability_context') <> 'object'
    or octet_length(page_document::text) > 2097152 then
    raise exception 'Invalid GemDen page document envelope.' using errcode = '22023';
  end if;

  if (page_document #>> '{subject,kind}') is distinct from locked_page.subject_kind
    or (page_document #>> '{subject,id}') is distinct from locked_page.subject_id then
    raise exception 'Page document subject does not match its stable page identity.' using errcode = '22023';
  end if;

  if locked_page.subject_kind = 'member'
    and locked_page.scope_type = 'profile'
    and (
      (page_document #>> '{bindings,member,kind}') is distinct from 'entity'
      or (page_document #>> '{bindings,member,id}') is distinct from locked_page.subject_id
    ) then
    raise exception 'Member binding does not match the stable page subject.' using errcode = '22023';
  end if;

  if revision_summary is not null and char_length(revision_summary) > 1000 then
    raise exception 'Revision summary is too long.' using errcode = '22023';
  end if;

  next_revision_number := locked_page.revision_count + 1;

  insert into public.page_revisions (
    page_id,
    revision_number,
    schema_version,
    document,
    based_on_revision_id,
    created_by_user_id,
    created_by_authority,
    change_summary
  )
  values (
    target_page_id,
    next_revision_number,
    '1.0.0',
    page_document,
    locked_page.draft_revision_id,
    caller_user_id,
    'authenticated_user',
    nullif(btrim(revision_summary), '')
  )
  returning id into created_revision_id;

  update public.page_documents
  set draft_revision_id = created_revision_id,
      revision_count = next_revision_number,
      last_edited_by_user_id = caller_user_id
  where id = target_page_id;

  return query
  select created_revision_id, next_revision_number, locked_page.published_revision_id;
end;
$$;

comment on function public.save_page_revision(text, jsonb, uuid, text) is
  'Creates one immutable revision with optimistic concurrency and immutable subject identity. It never publishes.';

revoke all on function public.save_page_revision(text, jsonb, uuid, text) from public, anon;
grant execute on function public.save_page_revision(text, jsonb, uuid, text)
  to authenticated, service_role;

create or replace function public.create_own_profile_page(
  page_slug text,
  page_title text,
  initial_document jsonb
)
returns table (
  page_id text,
  revision_id uuid,
  revision_number bigint
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := auth.uid();
  profile_stable_id text;
  created_page_id text;
  created_revision_id uuid;
  created_revision_number bigint;
begin
  if caller_user_id is null then
    raise exception 'Authentication required.' using errcode = '42501';
  end if;

  select stable_id
    into profile_stable_id
  from public.profiles
  where id = caller_user_id
    and account_status = 'active';

  if profile_stable_id is null then
    raise exception 'A confirmed stable member ID is required.' using errcode = '42501';
  end if;

  if page_slug is null
    or page_title is null
    or page_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
    or char_length(page_slug) > 100
    or char_length(btrim(page_title)) not between 1 and 160 then
    raise exception 'Invalid page title or slug.' using errcode = '22023';
  end if;

  created_page_id := 'PAGE-' || profile_stable_id;

  if initial_document is null
    or jsonb_typeof(initial_document) <> 'object'
    or initial_document ->> 'id' <> created_page_id
    or initial_document ->> 'schema_version' <> '1.0.0'
    or initial_document #>> '{subject,kind}' <> 'member'
    or initial_document #>> '{subject,id}' <> profile_stable_id
    or initial_document #>> '{bindings,member,kind}' <> 'entity'
    or initial_document #>> '{bindings,member,id}' <> profile_stable_id
    or jsonb_typeof(initial_document -> 'regions') <> 'array'
    or jsonb_typeof(initial_document -> 'capability_context') <> 'object' then
    raise exception 'Initial document does not belong to the authenticated member.' using errcode = '22023';
  end if;

  insert into public.page_documents (
    id,
    subject_kind,
    subject_id,
    owner_user_id,
    scope_type,
    scope_id,
    slug,
    title,
    visibility,
    publication_status,
    created_by_user_id,
    last_edited_by_user_id
  )
  values (
    created_page_id,
    'member',
    profile_stable_id,
    caller_user_id,
    'profile',
    caller_user_id::text,
    page_slug,
    btrim(page_title),
    'private',
    'draft',
    caller_user_id,
    caller_user_id
  );

  select saved.revision_id, saved.revision_number
    into created_revision_id, created_revision_number
  from public.save_page_revision(
    created_page_id,
    initial_document,
    null,
    'Erste persönliche Seitenrevision'
  ) as saved;

  return query select created_page_id, created_revision_id, created_revision_number;
end;
$$;

comment on function public.create_own_profile_page(text, text, jsonb) is
  'Creates one personal page whose ID, member subject, member binding and owner are derived from the authenticated caller.';

revoke all on function public.create_own_profile_page(text, text, jsonb) from public, anon;
grant execute on function public.create_own_profile_page(text, text, jsonb)
  to authenticated, service_role;
