-- Account administration V2 for the protected GemDen member workspace.
--
-- Auth changes stay in the JWT-protected Edge Function. This migration keeps
-- the database side authoritative: paused accounts lose scoped capabilities
-- immediately, account edits are performed only by service_role, and every
-- human administration decision receives an append-only, readable event.

create table public.member_admin_events (
  id bigint generated always as identity primary key,
  actor_user_id uuid,
  target_user_id uuid,
  action text not null,
  reason text not null,
  metadata jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now(),
  constraint member_admin_events_action_values check (
    action in (
      'member_admin_granted',
      'member_invited',
      'stable_id_assigned',
      'display_name_changed',
      'login_link_sent',
      'account_paused',
      'account_reactivated',
      'kiez_permission_granted',
      'kiez_permission_revoked'
    )
  ),
  constraint member_admin_events_reason_length check (
    char_length(btrim(reason)) between 12 and 2000
  ),
  constraint member_admin_events_metadata_object check (
    jsonb_typeof(metadata) = 'object'
  )
);

comment on table public.member_admin_events is
  'Append-only, human-readable decisions made through the protected member administration paths. Auth secrets and email addresses are never stored here.';

create index member_admin_events_target_time
  on public.member_admin_events (target_user_id, occurred_at desc)
  where target_user_id is not null;

create index member_admin_events_actor_time
  on public.member_admin_events (actor_user_id, occurred_at desc)
  where actor_user_id is not null;

alter table public.member_admin_events enable row level security;

revoke all on table public.member_admin_events from public, anon, authenticated;
grant select, insert on table public.member_admin_events to service_role;
grant usage, select on sequence public.member_admin_events_id_seq to service_role;

create or replace function ffe_private.prevent_member_admin_event_mutation()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  raise exception 'Member administration events are append-only.'
    using errcode = '55000';
end;
$$;

revoke all on function ffe_private.prevent_member_admin_event_mutation()
  from public, anon, authenticated;

create trigger member_admin_events_prevent_mutation
  before update or delete on public.member_admin_events
  for each row
  execute function ffe_private.prevent_member_admin_event_mutation();

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
    join public.profiles as account_profile
      on account_profile.id = grant_row.grantee_user_id
    where grant_row.grantee_user_id = (select auth.uid())
      and account_profile.account_status = 'active'
      and grant_row.permission_key = required_permission
      and grant_row.scope_type = required_scope_type
      and grant_row.scope_id = required_scope_id
      and grant_row.starts_at <= now()
      and (grant_row.ends_at is null or grant_row.ends_at > now())
      and grant_row.revoked_at is null
  );
$$;

comment on function ffe_private.has_active_permission(text, text, text) is
  'Checks the current authenticated user, an active account, and a non-expired, non-revoked scoped grant.';

revoke all on function ffe_private.has_active_permission(text, text, text)
  from public;
grant execute on function ffe_private.has_active_permission(text, text, text)
  to authenticated, service_role;

drop policy profiles_self_update on public.profiles;

create policy profiles_self_update
  on public.profiles
  for update
  to authenticated
  using (
    id = (select auth.uid())
    and account_status = 'active'
  )
  with check (
    id = (select auth.uid())
    and account_status = 'active'
  );

create or replace function ffe_private.assert_member_manager_actor(
  candidate_actor_user_id uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if candidate_actor_user_id is null then
    raise exception 'A member administration actor is required.'
      using errcode = '42501';
  end if;

  if not exists (
    select 1
    from public.profiles as actor_profile
    where actor_profile.id = candidate_actor_user_id
      and actor_profile.account_status = 'active'
  ) then
    raise exception 'An active member administration actor is required.'
      using errcode = '42501';
  end if;

  if not exists (
    select 1
    from public.permission_grants as grant_row
    where grant_row.grantee_user_id = candidate_actor_user_id
      and grant_row.permission_key = 'manage_members'
      and grant_row.scope_type = 'platform'
      and grant_row.scope_id = 'GemDen'
      and grant_row.starts_at <= now()
      and (grant_row.ends_at is null or grant_row.ends_at > now())
      and grant_row.revoked_at is null
  ) then
    raise exception 'Member administration permission required.'
      using errcode = '42501';
  end if;
end;
$$;

comment on function ffe_private.assert_member_manager_actor(uuid) is
  'Validates an explicit Edge Function actor before a service-role account action is applied.';

revoke all on function ffe_private.assert_member_manager_actor(uuid)
  from public, anon, authenticated;

create or replace function ffe_private.write_member_admin_event(
  event_actor_user_id uuid,
  event_target_user_id uuid,
  event_action text,
  event_reason text,
  event_metadata jsonb default '{}'::jsonb
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  normalized_reason text := btrim(coalesce(event_reason, ''));
  created_event_id bigint;
begin
  perform ffe_private.assert_member_manager_actor(event_actor_user_id);

  if not exists (
    select 1
    from public.profiles as target_profile
    where target_profile.id = event_target_user_id
  ) then
    raise exception 'The target member profile does not exist.'
      using errcode = '22023';
  end if;

  if char_length(normalized_reason) not between 12 and 2000 then
    raise exception 'A reason with at least 12 characters is required.'
      using errcode = '22023';
  end if;

  insert into public.member_admin_events (
    actor_user_id,
    target_user_id,
    action,
    reason,
    metadata
  )
  values (
    event_actor_user_id,
    event_target_user_id,
    event_action,
    normalized_reason,
    coalesce(event_metadata, '{}'::jsonb)
  )
  returning id into created_event_id;

  return created_event_id;
end;
$$;

revoke all on function ffe_private.write_member_admin_event(uuid, uuid, text, text, jsonb)
  from public, anon, authenticated;

create or replace function public.administer_member_account(
  actor_user_id uuid,
  target_user_id uuid,
  requested_action text,
  requested_value text,
  decision_reason text
)
returns table (
  user_id uuid,
  display_name text,
  account_status text,
  event_id bigint
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  normalized_action text := lower(btrim(coalesce(requested_action, '')));
  normalized_value text := btrim(coalesce(requested_value, ''));
  normalized_reason text := btrim(coalesce(decision_reason, ''));
  old_display_name text;
  old_account_status text;
  target_stable_id text;
  created_event_id bigint;
begin
  perform ffe_private.assert_member_manager_actor(actor_user_id);

  if char_length(normalized_reason) not between 12 and 2000 then
    raise exception 'A reason with at least 12 characters is required.'
      using errcode = '22023';
  end if;

  select
    target_profile.display_name,
    target_profile.account_status,
    target_profile.stable_id
  into old_display_name, old_account_status, target_stable_id
  from public.profiles as target_profile
  where target_profile.id = target_user_id
  for update;

  if not found then
    raise exception 'The target member profile does not exist.'
      using errcode = '22023';
  end if;

  if old_account_status = 'archived' then
    raise exception 'Archived member accounts require a separate retention process.'
      using errcode = '22023';
  end if;

  if normalized_action = 'display_name_changed' then
    normalized_value := regexp_replace(normalized_value, '[[:space:]]+', ' ', 'g');
    if char_length(normalized_value) not between 1 and 120
      or normalized_value ~ '[[:cntrl:]]'
    then
      raise exception 'A valid display name is required.'
        using errcode = '22023';
    end if;

    if normalized_value <> old_display_name then
      update public.profiles
      set display_name = normalized_value
      where id = target_user_id;

      created_event_id := ffe_private.write_member_admin_event(
        actor_user_id,
        target_user_id,
        'display_name_changed',
        normalized_reason,
        jsonb_strip_nulls(jsonb_build_object(
          'stable_id', target_stable_id,
          'old_display_name', old_display_name,
          'new_display_name', normalized_value
        ))
      );
    end if;
  elsif normalized_action = 'account_paused' then
    if actor_user_id = target_user_id then
      raise exception 'The active administration account cannot pause itself.'
        using errcode = '22023';
    end if;

    if old_account_status <> 'paused' then
      update public.profiles
      set account_status = 'paused'
      where id = target_user_id;

      created_event_id := ffe_private.write_member_admin_event(
        actor_user_id,
        target_user_id,
        'account_paused',
        normalized_reason,
        jsonb_strip_nulls(jsonb_build_object(
          'stable_id', target_stable_id,
          'previous_status', old_account_status,
          'new_status', 'paused'
        ))
      );
    end if;
  elsif normalized_action = 'account_reactivated' then
    if old_account_status <> 'active' then
      update public.profiles
      set account_status = 'active'
      where id = target_user_id;

      created_event_id := ffe_private.write_member_admin_event(
        actor_user_id,
        target_user_id,
        'account_reactivated',
        normalized_reason,
        jsonb_strip_nulls(jsonb_build_object(
          'stable_id', target_stable_id,
          'previous_status', old_account_status,
          'new_status', 'active'
        ))
      );
    end if;
  elsif normalized_action = 'member_invited' then
    created_event_id := ffe_private.write_member_admin_event(
      actor_user_id,
      target_user_id,
      'member_invited',
      normalized_reason,
      jsonb_strip_nulls(jsonb_build_object(
        'stable_id', target_stable_id,
        'display_name', old_display_name
      ))
    );
  elsif normalized_action = 'login_link_sent' then
    if old_account_status <> 'active' then
      raise exception 'A login link can only be sent to an active member account.'
        using errcode = '22023';
    end if;

    created_event_id := ffe_private.write_member_admin_event(
      actor_user_id,
      target_user_id,
      'login_link_sent',
      normalized_reason,
      jsonb_strip_nulls(jsonb_build_object(
        'stable_id', target_stable_id,
        'display_name', old_display_name
      ))
    );
  else
    raise exception 'This member account action is not available.'
      using errcode = '22023';
  end if;

  return query
  select
    target_profile.id,
    target_profile.display_name,
    target_profile.account_status,
    created_event_id
  from public.profiles as target_profile
  where target_profile.id = target_user_id;
end;
$$;

comment on function public.administer_member_account(uuid, uuid, text, text, text) is
  'Service-role-only account mutations and audit records after an Edge Function has authenticated an active member manager.';

revoke all on function public.administer_member_account(uuid, uuid, text, text, text)
  from public, anon, authenticated;
grant execute on function public.administer_member_account(uuid, uuid, text, text, text)
  to service_role;

create or replace function public.assign_member_identity(
  target_user_id uuid,
  target_stable_id text
)
returns table (
  user_id uuid,
  stable_id text
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid;
  normalized_stable_id text := upper(btrim(coalesce(target_stable_id, '')));
  existing_stable_id text;
begin
  caller_user_id := ffe_private.assert_member_manager();

  if normalized_stable_id !~ '^MEM-[A-Z0-9]+(-[A-Z0-9]+)*$'
    or char_length(normalized_stable_id) > 80
  then
    raise exception 'A valid MEM-* identifier is required.'
      using errcode = '22023';
  end if;

  select profile.stable_id
    into existing_stable_id
  from public.profiles as profile
  where profile.id = target_user_id
  for update;

  if not found then
    raise exception 'The target member profile does not exist.'
      using errcode = '22023';
  end if;

  if existing_stable_id is not null
    and existing_stable_id <> normalized_stable_id
  then
    raise exception 'A confirmed stable member ID cannot be replaced.'
      using errcode = '23514';
  end if;

  if exists (
    select 1
    from public.profiles as other_profile
    where other_profile.stable_id = normalized_stable_id
      and other_profile.id <> target_user_id
  ) then
    raise exception 'The requested stable member ID is already assigned.'
      using errcode = '23505';
  end if;

  if existing_stable_id is null then
    update public.profiles
    set stable_id = normalized_stable_id
    where id = target_user_id;

    perform ffe_private.write_member_admin_event(
      caller_user_id,
      target_user_id,
      'stable_id_assigned',
      'Stabile Mitglieds-ID nach Sichtprüfung dauerhaft vergeben.',
      jsonb_build_object('stable_id', normalized_stable_id)
    );
  end if;

  return query
  select profile.id, profile.stable_id
  from public.profiles as profile
  where profile.id = target_user_id;
end;
$$;

comment on function public.assign_member_identity(uuid, text) is
  'Lets an authorized member manager assign and audit the first and only stable MEM-* identity.';

revoke all on function public.assign_member_identity(uuid, text)
  from public, anon;
grant execute on function public.assign_member_identity(uuid, text)
  to authenticated, service_role;

create or replace function public.set_member_kiez_permission(
  target_user_id uuid,
  target_kiez_id text,
  requested_enabled boolean,
  decision_reason text
)
returns table (
  permission_active boolean,
  changed_rows integer
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid;
  normalized_kiez_id text := upper(btrim(coalesce(target_kiez_id, '')));
  normalized_reason text := btrim(coalesce(decision_reason, ''));
  active_grant_id uuid;
  affected_rows integer := 0;
begin
  caller_user_id := ffe_private.assert_member_manager();

  if char_length(normalized_reason) not between 12 and 2000 then
    raise exception 'A reason with at least 12 characters is required.'
      using errcode = '22023';
  end if;

  perform 1
  from public.profiles as target_profile
  where target_profile.id = target_user_id
  for update;

  if not found then
    raise exception 'The target member profile does not exist.'
      using errcode = '22023';
  end if;

  if not exists (
    select 1
    from public.kieze as target_kiez
    where target_kiez.id = normalized_kiez_id
      and target_kiez.lifecycle_status <> 'archived'
  ) then
    raise exception 'The requested Kiez scope is not available.'
      using errcode = '22023';
  end if;

  if requested_enabled then
    select grant_row.id
      into active_grant_id
    from public.permission_grants as grant_row
    where grant_row.grantee_user_id = target_user_id
      and grant_row.permission_key = 'manage_kiez'
      and grant_row.scope_type = 'kiez'
      and grant_row.scope_id = normalized_kiez_id
      and grant_row.starts_at <= now()
      and (grant_row.ends_at is null or grant_row.ends_at > now())
      and grant_row.revoked_at is null
    order by grant_row.starts_at desc
    limit 1
    for update;

    if active_grant_id is null then
      insert into public.permission_grants (
        grantee_user_id,
        permission_key,
        scope_type,
        scope_id,
        granted_by_user_id,
        granted_by_authority,
        reason
      )
      values (
        target_user_id,
        'manage_kiez',
        'kiez',
        normalized_kiez_id,
        caller_user_id,
        'GemDen-Mitgliederverwaltung',
        normalized_reason
      )
      returning id into active_grant_id;
      affected_rows := 1;

      perform ffe_private.write_member_admin_event(
        caller_user_id,
        target_user_id,
        'kiez_permission_granted',
        normalized_reason,
        jsonb_build_object(
          'kiez_id', normalized_kiez_id,
          'grant_id', active_grant_id,
          'enabled', true
        )
      );
    end if;

    return query select true, affected_rows;
    return;
  end if;

  update public.permission_grants as grant_row
  set revoked_at = now(),
      revoked_by_user_id = caller_user_id,
      revocation_reason = normalized_reason
  where grant_row.grantee_user_id = target_user_id
    and grant_row.permission_key = 'manage_kiez'
    and grant_row.scope_type = 'kiez'
    and grant_row.scope_id = normalized_kiez_id
    and grant_row.starts_at <= now()
    and (grant_row.ends_at is null or grant_row.ends_at > now())
    and grant_row.revoked_at is null;

  get diagnostics affected_rows = row_count;

  if affected_rows > 0 then
    perform ffe_private.write_member_admin_event(
      caller_user_id,
      target_user_id,
      'kiez_permission_revoked',
      normalized_reason,
      jsonb_build_object(
        'kiez_id', normalized_kiez_id,
        'changed_rows', affected_rows,
        'enabled', false
      )
    );
  end if;

  return query select false, affected_rows;
end;
$$;

comment on function public.set_member_kiez_permission(uuid, text, boolean, text) is
  'Serializes and audits documented manage_kiez decisions for one existing Kiez.';

revoke all on function public.set_member_kiez_permission(uuid, text, boolean, text)
  from public, anon;
grant execute on function public.set_member_kiez_permission(uuid, text, boolean, text)
  to authenticated, service_role;

-- Preserve the meaning of the already existing pilot state. These rows are
-- historical snapshots and intentionally contain neither email addresses nor
-- authentication data.
insert into public.member_admin_events (
  actor_user_id,
  target_user_id,
  action,
  reason,
  metadata,
  occurred_at
)
select
  null,
  profile.id,
  'stable_id_assigned',
  'Vor Einführung des Verwaltungsprotokolls bestätigte Mitglieds-ID.',
  jsonb_build_object('stable_id', profile.stable_id, 'backfilled', true),
  profile.updated_at
from public.profiles as profile
where profile.stable_id is not null;

insert into public.member_admin_events (
  actor_user_id,
  target_user_id,
  action,
  reason,
  metadata,
  occurred_at
)
select
  grant_row.granted_by_user_id,
  grant_row.grantee_user_id,
  'member_admin_granted',
  case
    when char_length(btrim(coalesce(grant_row.reason, ''))) between 12 and 2000
      then btrim(grant_row.reason)
    else 'Vor Einführung des Verwaltungsprotokolls legitimiertes Mitgliederverwaltungsrecht.'
  end,
  jsonb_build_object(
    'permission_key', grant_row.permission_key,
    'scope_type', grant_row.scope_type,
    'scope_id', grant_row.scope_id,
    'authority', grant_row.granted_by_authority,
    'backfilled', true
  ),
  grant_row.starts_at
from public.permission_grants as grant_row
where grant_row.permission_key = 'manage_members'
  and grant_row.scope_type = 'platform'
  and grant_row.scope_id = 'GemDen';
