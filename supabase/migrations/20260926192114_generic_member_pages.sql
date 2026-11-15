-- Harden the existing personal-page bootstrap for generic member templates.
--
-- The browser may personalize the shared PAGE-MEM-MEMBER template, but the
-- database remains authoritative: page ID, subject and owner must all resolve
-- to the authenticated caller's confirmed MEM-* profile.

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
  'Creates exactly one personal page whose ID, member subject and owner are derived from the authenticated caller.';

revoke all on function public.create_own_profile_page(text, text, jsonb) from public, anon;
grant execute on function public.create_own_profile_page(text, text, jsonb)
  to authenticated, service_role;
