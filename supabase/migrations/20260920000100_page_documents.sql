-- GemDen / FFE versioned page documents.
--
-- The browser never updates page JSON in place. Every save creates an
-- immutable revision through a narrowly scoped RPC. Publishing only moves a
-- checked pointer; the previously published revision stays reproducible.

create table public.page_documents (
  id text primary key,
  subject_kind text not null,
  subject_id text not null,
  owner_user_id uuid references auth.users (id) on delete restrict,
  scope_type text not null,
  scope_id text not null,
  slug text not null,
  title text not null,
  visibility text not null default 'private',
  publication_status text not null default 'draft',
  draft_revision_id uuid,
  published_revision_id uuid,
  revision_count bigint not null default 0,
  created_by_user_id uuid references auth.users (id) on delete set null,
  last_edited_by_user_id uuid references auth.users (id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint page_documents_id_format check (id ~ '^PAGE-[A-Z0-9-]+$'),
  constraint page_documents_subject_kind_values check (
    subject_kind in ('member', 'dynasty', 'kiez', 'project', 'system')
  ),
  constraint page_documents_subject_id_format check (
    subject_id ~ '^[A-Z][A-Z0-9-]+$'
  ),
  constraint page_documents_scope_type_values check (
    scope_type in ('profile', 'kiez', 'dynasty', 'platform')
  ),
  constraint page_documents_scope_id_length check (
    char_length(btrim(scope_id)) between 1 and 160
  ),
  constraint page_documents_slug_format check (
    slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint page_documents_title_length check (
    char_length(btrim(title)) between 1 and 160
  ),
  constraint page_documents_visibility_values check (
    visibility in ('public', 'members', 'scope_members', 'managers', 'private')
  ),
  constraint page_documents_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  ),
  constraint page_documents_revision_count_nonnegative check (
    revision_count >= 0
  ),
  constraint page_documents_profile_owner_scope check (
    scope_type <> 'profile'
    or (
      owner_user_id is not null
      and scope_id = owner_user_id::text
    )
  ),
  constraint page_documents_published_pointer check (
    publication_status <> 'published'
    or published_revision_id is not null
  ),
  unique (subject_kind, subject_id, slug)
);

comment on table public.page_documents is
  'Stable page identity and revision pointers. Page composition lives only in immutable page_revisions.';
comment on column public.page_documents.owner_user_id is
  'Direct owner for a personal profile page. Scoped community pages use permission_grants instead.';

create table public.page_revisions (
  id uuid primary key default gen_random_uuid(),
  page_id text not null references public.page_documents (id) on delete restrict,
  revision_number bigint not null,
  schema_version text not null,
  document jsonb not null,
  based_on_revision_id uuid,
  created_by_user_id uuid references auth.users (id) on delete set null,
  created_by_authority text not null,
  change_summary text,
  created_at timestamptz not null default now(),
  constraint page_revisions_number_positive check (revision_number > 0),
  constraint page_revisions_schema_version check (schema_version = '1.0.0'),
  constraint page_revisions_document_object check (jsonb_typeof(document) = 'object'),
  constraint page_revisions_document_identity check (document ->> 'id' = page_id),
  constraint page_revisions_document_schema check (document ->> 'schema_version' = schema_version),
  constraint page_revisions_document_regions check (jsonb_typeof(document -> 'regions') = 'array'),
  constraint page_revisions_document_capabilities check (jsonb_typeof(document -> 'capability_context') = 'object'),
  constraint page_revisions_document_size check (octet_length(document::text) <= 2097152),
  constraint page_revisions_authority_length check (
    char_length(btrim(created_by_authority)) between 1 and 160
  ),
  constraint page_revisions_summary_length check (
    change_summary is null or char_length(change_summary) <= 1000
  ),
  unique (page_id, revision_number),
  unique (page_id, id)
);

comment on table public.page_revisions is
  'Append-only page snapshots. UPDATE and DELETE are blocked even for privileged SQL paths.';
comment on column public.page_revisions.document is
  'Validated GemDen Page Document envelope. Fine-grained module validation also runs in the application contract layer.';

alter table public.page_revisions
  add constraint page_revisions_based_on_same_page
  foreign key (page_id, based_on_revision_id)
  references public.page_revisions (page_id, id)
  deferrable initially deferred;

alter table public.page_documents
  add constraint page_documents_draft_revision_same_page
  foreign key (id, draft_revision_id)
  references public.page_revisions (page_id, id)
  deferrable initially deferred;

alter table public.page_documents
  add constraint page_documents_published_revision_same_page
  foreign key (id, published_revision_id)
  references public.page_revisions (page_id, id)
  deferrable initially deferred;

create index page_documents_public_lookup
  on public.page_documents (visibility, publication_status, slug)
  where published_revision_id is not null;

create index page_documents_owner_lookup
  on public.page_documents (owner_user_id, updated_at desc)
  where owner_user_id is not null;

create index page_documents_scope_lookup
  on public.page_documents (scope_type, scope_id, updated_at desc);

create index page_revisions_page_time
  on public.page_revisions (page_id, revision_number desc);

create or replace function ffe_private.has_page_edit_permission(
  page_scope_type text,
  page_scope_id text,
  page_owner_user_id uuid
)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select (select auth.uid()) is not null
    and (
      page_owner_user_id = (select auth.uid())
      or ffe_private.has_active_permission('manage_page', page_scope_type, page_scope_id)
      or (
        page_scope_type = 'profile'
        and ffe_private.has_active_permission('edit_profile', 'profile', page_scope_id)
      )
      or (
        page_scope_type = 'kiez'
        and ffe_private.has_active_permission('manage_kiez', 'kiez', page_scope_id)
      )
      or (
        page_scope_type = 'dynasty'
        and ffe_private.has_active_permission('manage_dynasty', 'dynasty', page_scope_id)
      )
      or (
        page_scope_type = 'platform'
        and ffe_private.has_active_permission('platform_operator', 'platform', page_scope_id)
      )
    );
$$;

comment on function ffe_private.has_page_edit_permission(text, text, uuid) is
  'Maps a concrete page scope to explicit technical grants. Titles, skills and AI capabilities never enter this decision.';

revoke all on function ffe_private.has_page_edit_permission(text, text, uuid) from public;
grant execute on function ffe_private.has_page_edit_permission(text, text, uuid)
  to authenticated, service_role;

create or replace function ffe_private.touch_page_document()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at := now();

  if new.publication_status = 'published' then
    if new.published_revision_id is null then
      raise exception 'A published page needs a published revision.';
    end if;
    new.published_at := coalesce(new.published_at, now());
  elsif new.publication_status = 'draft' then
    new.published_at := null;
  end if;

  return new;
end;
$$;

revoke all on function ffe_private.touch_page_document() from public, anon, authenticated;

create or replace function ffe_private.block_page_revision_mutation()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  raise exception 'Page revisions are immutable; create a new revision instead.';
end;
$$;

revoke all on function ffe_private.block_page_revision_mutation() from public, anon, authenticated;

create trigger page_documents_touch
  before insert or update on public.page_documents
  for each row execute function ffe_private.touch_page_document();

create trigger page_revisions_block_mutation
  before update or delete on public.page_revisions
  for each row execute function ffe_private.block_page_revision_mutation();

-- Extend the existing audit trigger without copying complete page documents
-- into a second table. Revision audit rows contain provenance metadata only.
create or replace function ffe_private.capture_audit_event()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  before_row jsonb;
  after_row jsonb;
  reference_row jsonb;
  event_entity_type text;
  event_entity_id text;
  event_scope_type text;
  event_scope_id text;
  event_subject_user_id uuid;
begin
  if tg_op = 'INSERT' then
    before_row := null;
    after_row := to_jsonb(new);
    reference_row := after_row;
  elsif tg_op = 'UPDATE' then
    before_row := to_jsonb(old);
    after_row := to_jsonb(new);
    reference_row := after_row;
  else
    before_row := to_jsonb(old);
    after_row := null;
    reference_row := before_row;
  end if;

  if tg_table_name = 'profiles' then
    event_entity_type := 'profile';
    event_entity_id := reference_row ->> 'id';
    event_scope_type := 'profile';
    event_scope_id := event_entity_id;
    event_subject_user_id := event_entity_id::uuid;
  elsif tg_table_name = 'kieze' then
    event_entity_type := 'kiez';
    event_entity_id := reference_row ->> 'id';
    event_scope_type := 'kiez';
    event_scope_id := event_entity_id;
    event_subject_user_id := null;
  elsif tg_table_name = 'permission_grants' then
    event_entity_type := 'permission_grant';
    event_entity_id := reference_row ->> 'id';
    event_scope_type := reference_row ->> 'scope_type';
    event_scope_id := reference_row ->> 'scope_id';
    event_subject_user_id := (reference_row ->> 'grantee_user_id')::uuid;
  elsif tg_table_name = 'page_documents' then
    event_entity_type := 'page_document';
    event_entity_id := reference_row ->> 'id';
    event_scope_type := reference_row ->> 'scope_type';
    event_scope_id := reference_row ->> 'scope_id';
    event_subject_user_id := nullif(reference_row ->> 'owner_user_id', '')::uuid;
  elsif tg_table_name = 'page_revisions' then
    event_entity_type := 'page_revision';
    event_entity_id := reference_row ->> 'id';

    select page_row.scope_type, page_row.scope_id, page_row.owner_user_id
      into event_scope_type, event_scope_id, event_subject_user_id
    from public.page_documents as page_row
    where page_row.id = reference_row ->> 'page_id';

    if tg_op = 'INSERT' then
      after_row := jsonb_build_object(
        'id', reference_row ->> 'id',
        'page_id', reference_row ->> 'page_id',
        'revision_number', reference_row ->> 'revision_number',
        'schema_version', reference_row ->> 'schema_version',
        'based_on_revision_id', reference_row ->> 'based_on_revision_id',
        'created_by_user_id', reference_row ->> 'created_by_user_id',
        'created_by_authority', reference_row ->> 'created_by_authority',
        'change_summary', reference_row ->> 'change_summary',
        'created_at', reference_row ->> 'created_at'
      );
    end if;
  else
    raise exception 'Unsupported audited table: %.%', tg_table_schema, tg_table_name;
  end if;

  insert into public.audit_events (
    actor_user_id,
    subject_user_id,
    entity_type,
    entity_id,
    operation,
    scope_type,
    scope_id,
    old_row,
    new_row
  )
  values (
    auth.uid(),
    event_subject_user_id,
    event_entity_type,
    event_entity_id,
    tg_op,
    event_scope_type,
    event_scope_id,
    before_row,
    after_row
  );

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

revoke all on function ffe_private.capture_audit_event() from public, anon, authenticated;

create trigger page_documents_capture_audit
  after insert or update or delete on public.page_documents
  for each row execute function ffe_private.capture_audit_event();

create trigger page_revisions_capture_audit
  after insert on public.page_revisions
  for each row execute function ffe_private.capture_audit_event();

alter table public.page_documents enable row level security;
alter table public.page_revisions enable row level security;

revoke all on table public.page_documents from anon, authenticated;
revoke all on table public.page_revisions from anon, authenticated;

grant select on table public.page_documents to anon, authenticated;
grant select on table public.page_revisions to anon, authenticated;

grant all on table public.page_documents to service_role;
grant all on table public.page_revisions to service_role;

create policy page_documents_public_read
  on public.page_documents
  for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and published_revision_id is not null
  );

create policy page_documents_authenticated_read
  on public.page_documents
  for select
  to authenticated
  using (
    (
      visibility = 'public'
      and publication_status = 'published'
      and published_revision_id is not null
    )
    or ffe_private.has_page_edit_permission(scope_type, scope_id, owner_user_id)
  );

create policy page_revisions_public_read
  on public.page_revisions
  for select
  to anon
  using (
    exists (
      select 1
      from public.page_documents as page_row
      where page_row.id = page_revisions.page_id
        and page_row.published_revision_id = page_revisions.id
        and page_row.visibility = 'public'
        and page_row.publication_status = 'published'
    )
  );

create policy page_revisions_authenticated_read
  on public.page_revisions
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.page_documents as page_row
      where page_row.id = page_revisions.page_id
        and (
          (
            page_row.published_revision_id = page_revisions.id
            and page_row.visibility = 'public'
            and page_row.publication_status = 'published'
          )
          or ffe_private.has_page_edit_permission(
            page_row.scope_type,
            page_row.scope_id,
            page_row.owner_user_id
          )
        )
    )
  );

drop policy audit_events_scoped_read on public.audit_events;

create policy audit_events_scoped_read
  on public.audit_events
  for select
  to authenticated
  using (
    subject_user_id = (select auth.uid())
    or ffe_private.has_active_permission('manage_page', scope_type, scope_id)
    or (
      scope_type = 'kiez'
      and ffe_private.has_active_permission('manage_kiez', 'kiez', scope_id)
    )
    or (
      scope_type = 'dynasty'
      and ffe_private.has_active_permission('manage_dynasty', 'dynasty', scope_id)
    )
    or (
      scope_type = 'platform'
      and ffe_private.has_active_permission('platform_operator', 'platform', scope_id)
    )
  );

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
  'Creates one immutable revision using optimistic concurrency. It never publishes the revision.';

revoke all on function public.save_page_revision(text, jsonb, uuid, text) from public, anon;
grant execute on function public.save_page_revision(text, jsonb, uuid, text)
  to authenticated, service_role;

create or replace function public.publish_page_revision(
  target_page_id text,
  target_revision_id uuid,
  expected_published_revision_id uuid default null
)
returns table (
  published_revision_id uuid,
  published_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := auth.uid();
  locked_page public.page_documents%rowtype;
  publication_time timestamptz := now();
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
    raise exception 'No publish permission for page %.', target_page_id using errcode = '42501';
  end if;

  if locked_page.published_revision_id is distinct from expected_published_revision_id then
    raise exception 'Published page changed since it was loaded.' using errcode = '40001';
  end if;

  if locked_page.draft_revision_id is distinct from target_revision_id then
    raise exception 'Only the current checked draft can be published.' using errcode = '22023';
  end if;

  if not exists (
    select 1
    from public.page_revisions as revision_row
    where revision_row.page_id = target_page_id
      and revision_row.id = target_revision_id
  ) then
    raise exception 'Revision does not belong to page %.', target_page_id using errcode = '22023';
  end if;

  update public.page_documents
  set published_revision_id = target_revision_id,
      publication_status = 'published',
      published_at = publication_time,
      last_edited_by_user_id = caller_user_id
  where id = target_page_id;

  return query select target_revision_id, publication_time;
end;
$$;

comment on function public.publish_page_revision(text, uuid, uuid) is
  'Publishes only the current draft and uses optimistic concurrency for the previous public pointer.';

revoke all on function public.publish_page_revision(text, uuid, uuid) from public, anon;
grant execute on function public.publish_page_revision(text, uuid, uuid)
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

  if page_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
    or char_length(btrim(page_title)) not between 1 and 160 then
    raise exception 'Invalid page title or slug.' using errcode = '22023';
  end if;

  created_page_id := 'PAGE-' || profile_stable_id;

  if initial_document ->> 'id' <> created_page_id then
    raise exception 'Initial document has the wrong page ID.' using errcode = '22023';
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
  'Creates exactly one personal page derived from the caller''s authorized stable MEM ID.';

revoke all on function public.create_own_profile_page(text, text, jsonb) from public, anon;
grant execute on function public.create_own_profile_page(text, text, jsonb)
  to authenticated, service_role;
