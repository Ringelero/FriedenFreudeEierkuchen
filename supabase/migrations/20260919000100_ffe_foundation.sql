-- GemDen / FFE foundation for Supabase.
--
-- This migration intentionally covers only the Phase-B foundation:
-- profiles, kieze, scoped permission grants, audit events and RLS.
-- It does not create real users, decide the registration model or expose
-- protected P-Hain content.

create schema if not exists ffe_private;

revoke all on schema ffe_private from public;
grant usage on schema ffe_private to authenticated, service_role;

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  stable_id text unique,
  display_name text not null default 'Neues Mitglied',
  bio text not null default '',
  avatar_url text,
  visibility text not null default 'private',
  publication_status text not null default 'draft',
  account_status text not null default 'active',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_stable_id_format check (
    stable_id is null or stable_id ~ '^MEM-[A-Z0-9][A-Z0-9-]*$'
  ),
  constraint profiles_display_name_length check (
    char_length(btrim(display_name)) between 1 and 120
  ),
  constraint profiles_bio_length check (char_length(bio) <= 4000),
  constraint profiles_avatar_url_length check (
    avatar_url is null or char_length(avatar_url) <= 2048
  ),
  constraint profiles_visibility_values check (
    visibility in ('public', 'members', 'private')
  ),
  constraint profiles_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  ),
  constraint profiles_account_status_values check (
    account_status in ('active', 'paused', 'archived')
  )
);

comment on table public.profiles is
  'Application profiles linked one-to-one to auth.users. No email or secret auth data is copied here.';
comment on column public.profiles.stable_id is
  'Optional public MEM-* identifier assigned by an authorized bootstrap or administrative path, never by self-signup.';

create table public.kieze (
  id text primary key,
  slug text not null unique,
  name text not null,
  description text not null default '',
  lifecycle_status text not null default 'experiment',
  visibility text not null default 'private',
  publication_status text not null default 'draft',
  ffe_refs text[] not null default '{}',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint kieze_id_format check (id ~ '^KIEZ-[A-Z0-9][A-Z0-9-]*$'),
  constraint kieze_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  constraint kieze_name_length check (
    char_length(btrim(name)) between 1 and 120
  ),
  constraint kieze_description_length check (char_length(description) <= 8000),
  constraint kieze_lifecycle_status_values check (
    lifecycle_status in ('experiment', 'active', 'inactive', 'archived')
  ),
  constraint kieze_visibility_values check (
    visibility in ('public', 'members', 'scope_members', 'managers', 'private')
  ),
  constraint kieze_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  )
);

comment on table public.kieze is
  'Stable Kiez scopes. Non-public visibility values remain deny-by-default until membership policies are added.';

create table public.permission_grants (
  id uuid primary key default gen_random_uuid(),
  grantee_user_id uuid not null references auth.users (id) on delete cascade,
  permission_key text not null,
  scope_type text not null,
  scope_id text not null,
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  revoked_at timestamptz,
  granted_by_user_id uuid references auth.users (id) on delete set null,
  revoked_by_user_id uuid references auth.users (id) on delete set null,
  granted_by_authority text not null,
  reason text,
  created_at timestamptz not null default now(),
  constraint permission_grants_key_format check (
    permission_key ~ '^[a-z][a-z0-9_]*$'
  ),
  constraint permission_grants_scope_type_values check (
    scope_type in ('profile', 'kiez', 'dynasty', 'platform')
  ),
  constraint permission_grants_scope_id_length check (
    char_length(btrim(scope_id)) between 1 and 160
  ),
  constraint permission_grants_authority_length check (
    char_length(btrim(granted_by_authority)) between 1 and 200
  ),
  constraint permission_grants_reason_length check (
    reason is null or char_length(reason) <= 2000
  ),
  constraint permission_grants_end_after_start check (
    ends_at is null or ends_at > starts_at
  ),
  constraint permission_grants_revocation_after_start check (
    revoked_at is null or revoked_at >= starts_at
  )
);

comment on table public.permission_grants is
  'Technical, scoped and time-bounded permissions. Cultural titles and political mandates do not imply a row here.';

create unique index permission_grants_unique_start
  on public.permission_grants (
    grantee_user_id,
    permission_key,
    scope_type,
    scope_id,
    starts_at
  );

create index permission_grants_active_lookup
  on public.permission_grants (
    grantee_user_id,
    permission_key,
    scope_type,
    scope_id,
    starts_at,
    ends_at
  )
  where revoked_at is null;

create table public.audit_events (
  id bigint generated always as identity primary key,
  actor_user_id uuid references auth.users (id) on delete set null,
  subject_user_id uuid references auth.users (id) on delete set null,
  entity_type text not null,
  entity_id text not null,
  operation text not null,
  scope_type text not null,
  scope_id text not null,
  old_row jsonb,
  new_row jsonb,
  occurred_at timestamptz not null default now(),
  constraint audit_events_entity_type_length check (
    char_length(btrim(entity_type)) between 1 and 80
  ),
  constraint audit_events_entity_id_length check (
    char_length(btrim(entity_id)) between 1 and 160
  ),
  constraint audit_events_operation_values check (
    operation in ('INSERT', 'UPDATE', 'DELETE')
  ),
  constraint audit_events_scope_type_length check (
    char_length(btrim(scope_type)) between 1 and 80
  ),
  constraint audit_events_scope_id_length check (
    char_length(btrim(scope_id)) between 1 and 160
  ),
  constraint audit_events_row_shape check (
    (operation = 'INSERT' and old_row is null and new_row is not null)
    or (operation = 'UPDATE' and old_row is not null and new_row is not null)
    or (operation = 'DELETE' and old_row is not null and new_row is null)
  )
);

comment on table public.audit_events is
  'Append-only history written by database triggers. Client roles receive no insert, update or delete grant.';

create index audit_events_scope_time
  on public.audit_events (scope_type, scope_id, occurred_at desc);

create index audit_events_subject_time
  on public.audit_events (subject_user_id, occurred_at desc)
  where subject_user_id is not null;

create or replace function ffe_private.has_active_permission(
  required_permission text,
  required_scope_type text,
  required_scope_id text
)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.permission_grants as grant_row
    where grant_row.grantee_user_id = (select auth.uid())
      and grant_row.permission_key = required_permission
      and grant_row.scope_type = required_scope_type
      and grant_row.scope_id = required_scope_id
      and grant_row.starts_at <= now()
      and (grant_row.ends_at is null or grant_row.ends_at > now())
      and grant_row.revoked_at is null
  );
$$;

comment on function ffe_private.has_active_permission(text, text, text) is
  'Checks only the current authenticated user and only non-expired, non-revoked scoped grants.';

revoke all on function ffe_private.has_active_permission(text, text, text) from public;
grant execute on function ffe_private.has_active_permission(text, text, text)
  to authenticated, service_role;

create or replace function ffe_private.touch_publishable_row()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at := now();

  if new.publication_status = 'published' then
    new.published_at := coalesce(new.published_at, now());
  else
    new.published_at := null;
  end if;

  return new;
end;
$$;

revoke all on function ffe_private.touch_publishable_row() from public, anon, authenticated;

create or replace function ffe_private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  requested_display_name text;
begin
  requested_display_name := left(
    btrim(coalesce(new.raw_user_meta_data ->> 'display_name', '')),
    120
  );

  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(nullif(requested_display_name, ''), 'Neues Mitglied')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

comment on function ffe_private.handle_new_user() is
  'Creates the minimum private draft profile. It deliberately ignores stable IDs and permissions from signup metadata.';

revoke all on function ffe_private.handle_new_user() from public, anon, authenticated;

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

create trigger profiles_touch_publishable
  before insert or update on public.profiles
  for each row execute function ffe_private.touch_publishable_row();

create trigger kieze_touch_publishable
  before insert or update on public.kieze
  for each row execute function ffe_private.touch_publishable_row();

create trigger profiles_capture_audit
  after insert or update or delete on public.profiles
  for each row execute function ffe_private.capture_audit_event();

create trigger kieze_capture_audit
  after insert or update or delete on public.kieze
  for each row execute function ffe_private.capture_audit_event();

create trigger permission_grants_capture_audit
  after insert or update or delete on public.permission_grants
  for each row execute function ffe_private.capture_audit_event();

create trigger ffe_on_auth_user_created
  after insert on auth.users
  for each row execute function ffe_private.handle_new_user();

-- Existing Auth users, if any, receive the same minimal private draft profile.
-- No email, stable ID or permission is copied or inferred.
insert into public.profiles (id, display_name)
select
  auth_user.id,
  coalesce(
    nullif(
      left(
        btrim(coalesce(auth_user.raw_user_meta_data ->> 'display_name', '')),
        120
      ),
      ''
    ),
    'Neues Mitglied'
  )
from auth.users as auth_user
on conflict (id) do nothing;

alter table public.profiles enable row level security;
alter table public.kieze enable row level security;
alter table public.permission_grants enable row level security;
alter table public.audit_events enable row level security;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.kieze from anon, authenticated;
revoke all on table public.permission_grants from anon, authenticated;
revoke all on table public.audit_events from anon, authenticated;

grant select on table public.profiles to anon, authenticated;
grant update (
  display_name,
  bio,
  avatar_url,
  visibility,
  publication_status
) on table public.profiles to authenticated;

grant select on table public.kieze to anon, authenticated;
grant update (
  description,
  visibility,
  publication_status
) on table public.kieze to authenticated;

grant select on table public.permission_grants to authenticated;
grant select on table public.audit_events to authenticated;

grant all on table public.profiles to service_role;
grant all on table public.kieze to service_role;
grant all on table public.permission_grants to service_role;
grant all on table public.audit_events to service_role;
grant usage, select on sequence public.audit_events_id_seq to service_role;

create policy profiles_public_read
  on public.profiles
  for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and account_status = 'active'
  );

create policy profiles_authenticated_read
  on public.profiles
  for select
  to authenticated
  using (
    id = (select auth.uid())
    or (
      visibility = 'public'
      and publication_status = 'published'
      and account_status = 'active'
    )
  );

create policy profiles_self_update
  on public.profiles
  for update
  to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

create policy kieze_public_read
  on public.kieze
  for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and lifecycle_status <> 'archived'
  );

create policy kieze_authenticated_read
  on public.kieze
  for select
  to authenticated
  using (
    (
      visibility = 'public'
      and publication_status = 'published'
      and lifecycle_status <> 'archived'
    )
    or ffe_private.has_active_permission('manage_kiez', 'kiez', id)
  );

create policy kieze_scoped_manager_update
  on public.kieze
  for update
  to authenticated
  using (ffe_private.has_active_permission('manage_kiez', 'kiez', id))
  with check (ffe_private.has_active_permission('manage_kiez', 'kiez', id));

create policy permission_grants_own_read
  on public.permission_grants
  for select
  to authenticated
  using (grantee_user_id = (select auth.uid()));

create policy audit_events_scoped_read
  on public.audit_events
  for select
  to authenticated
  using (
    subject_user_id = (select auth.uid())
    or (
      entity_type = 'kiez'
      and scope_type = 'kiez'
      and ffe_private.has_active_permission('manage_kiez', 'kiez', scope_id)
    )
  );

insert into public.kieze (
  id,
  slug,
  name,
  description,
  lifecycle_status,
  visibility,
  publication_status,
  ffe_refs,
  published_at
)
values (
  'KIEZ-P-HAIN',
  'p-hain',
  'P-Hain',
  'Ein Kiezraum an der Verbindung von Prenzlauer Berg und Friedrichshain, rund um Straßmannstraße und Richard-Sorge-Straße.',
  'experiment',
  'public',
  'published',
  array['R01', 'W01', 'OP-R01', 'OP-W01'],
  now()
)
on conflict (id) do nothing;
