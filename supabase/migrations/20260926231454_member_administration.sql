-- Narrow member administration for the authenticated GemDen website.
--
-- Invitations stay in a server-side Edge Function because the Auth Admin API
-- requires a secret key. Stable identities and scoped Kiez permissions stay in
-- Postgres so authorization and audit actors are enforced close to the data.

alter table public.permission_grants
  add column revocation_reason text;

alter table public.permission_grants
  add constraint permission_grants_revocation_reason_length check (
    revocation_reason is null
    or char_length(btrim(revocation_reason)) between 12 and 2000
  );

comment on column public.permission_grants.revocation_reason is
  'Human-readable reason captured when an active grant is revoked through the member administration path.';

create or replace function ffe_private.prevent_profile_stable_id_reassignment()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if old.stable_id is not null
    and new.stable_id is distinct from old.stable_id
  then
    raise exception 'A confirmed stable member ID cannot be replaced.'
      using errcode = '23514';
  end if;

  return new;
end;
$$;

comment on function ffe_private.prevent_profile_stable_id_reassignment() is
  'Allows the first MEM-* assignment but blocks later replacement, including privileged direct updates.';

revoke all on function ffe_private.prevent_profile_stable_id_reassignment()
  from public, anon, authenticated;

create trigger profiles_prevent_stable_id_reassignment
  before update of stable_id on public.profiles
  for each row
  execute function ffe_private.prevent_profile_stable_id_reassignment();

create or replace function ffe_private.assert_member_manager()
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := (select auth.uid());
begin
  if caller_user_id is null then
    raise exception 'Authentication required.' using errcode = '42501';
  end if;

  if not exists (
    select 1
    from public.profiles as caller_profile
    where caller_profile.id = caller_user_id
      and caller_profile.account_status = 'active'
  ) then
    raise exception 'An active member profile is required.' using errcode = '42501';
  end if;

  if not ffe_private.has_active_permission(
    'manage_members',
    'platform',
    'GemDen'
  ) then
    raise exception 'Member administration permission required.'
      using errcode = '42501';
  end if;

  return caller_user_id;
end;
$$;

comment on function ffe_private.assert_member_manager() is
  'Returns the current user only when an active manage_members:platform:GemDen grant exists.';

revoke all on function ffe_private.assert_member_manager()
  from public, anon, authenticated;

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
  normalized_stable_id text := upper(btrim(coalesce(target_stable_id, '')));
  existing_stable_id text;
begin
  perform ffe_private.assert_member_manager();

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
  end if;

  return query
  select profile.id, profile.stable_id
  from public.profiles as profile
  where profile.id = target_user_id;
end;
$$;

comment on function public.assign_member_identity(uuid, text) is
  'Lets an authorized member manager assign the first and only stable MEM-* identity to an existing profile.';

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

  if not exists (
    select 1
    from public.profiles as target_profile
    where target_profile.id = target_user_id
  ) then
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
      );
      affected_rows := 1;
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
  return query select false, affected_rows;
end;
$$;

comment on function public.set_member_kiez_permission(uuid, text, boolean, text) is
  'Grants or revokes only manage_kiez for one existing Kiez; it cannot create platform-wide permissions.';

revoke all on function public.set_member_kiez_permission(uuid, text, boolean, text)
  from public, anon;
grant execute on function public.set_member_kiez_permission(uuid, text, boolean, text)
  to authenticated, service_role;
