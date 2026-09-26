-- Serialize concurrent permission decisions for the same member. The profile
-- row is the stable lock target, so two browser tabs cannot create duplicate
-- active grants after both observed an empty permission set.

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
  'Serializes per-member changes and manages only documented manage_kiez decisions for an existing Kiez.';

revoke all on function public.set_member_kiez_permission(uuid, text, boolean, text)
  from public, anon;
grant execute on function public.set_member_kiez_permission(uuid, text, boolean, text)
  to authenticated, service_role;
