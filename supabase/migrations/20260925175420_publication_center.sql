-- Controlled self-publication for profiles and portfolio records.
--
-- Browser users keep the existing draft-only table policies. A publication
-- change is requested by inserting one owner-readable action row. A private
-- trigger validates auth.uid(), ownership, visibility and lifecycle, changes
-- publication metadata only, and records the confirmed result. The browser
-- cannot execute the privileged trigger function directly.

revoke update (publication_status) on table public.profiles from authenticated;

create table public.publication_actions (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid not null default auth.uid()
    references auth.users (id) on delete cascade,
  member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  target_kind text not null,
  target_key text not null,
  target_status text not null,
  result_visibility text not null,
  result_publication_status text not null,
  result_published_at timestamptz,
  created_at timestamptz not null default now(),
  constraint publication_actions_target_kind_values check (
    target_kind in (
      'profile',
      'profile_field',
      'profile_skill',
      'skill_evidence',
      'project'
    )
  ),
  constraint publication_actions_target_key_length check (
    char_length(btrim(target_key)) between 1 and 200
  ),
  constraint publication_actions_target_status_values check (
    target_status in ('draft', 'published')
  ),
  constraint publication_actions_result_visibility_values check (
    result_visibility in ('public', 'members', 'private')
  ),
  constraint publication_actions_result_status_values check (
    result_publication_status in ('draft', 'published')
  )
);

comment on table public.publication_actions is
  'Append-only owner publication log. Inserts are validated and processed by a private trigger; clients cannot forge actor, member or result columns.';

create index publication_actions_owner_timeline
  on public.publication_actions (actor_user_id, created_at desc);

create or replace function ffe_private.process_publication_action()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := auth.uid();
  caller_member_id text;
  normalized_key text := btrim(coalesce(new.target_key, ''));
  changed_visibility text;
  changed_status text;
  changed_published_at timestamptz;
  locked_profile public.profiles%rowtype;
begin
  if caller_user_id is null then
    raise exception 'Authentication required.' using errcode = '42501';
  end if;

  if new.target_kind not in (
    'profile',
    'profile_field',
    'profile_skill',
    'skill_evidence',
    'project'
  ) then
    raise exception 'Unsupported publication target.' using errcode = '22023';
  end if;

  if new.target_status not in ('draft', 'published') then
    raise exception 'Unsupported publication status.' using errcode = '22023';
  end if;

  if normalized_key = '' then
    raise exception 'A publication target key is required.' using errcode = '22023';
  end if;

  select profile.stable_id
    into caller_member_id
  from public.profiles as profile
  where profile.id = caller_user_id
    and profile.account_status = 'active';

  if caller_member_id is null then
    raise exception 'An active profile with a stable member ID is required.'
      using errcode = '42501';
  end if;

  new.actor_user_id := caller_user_id;
  new.member_id := caller_member_id;
  new.target_key := normalized_key;

  if new.target_kind = 'profile' then
    if normalized_key <> 'self' then
      raise exception 'The profile publication target must be self.'
        using errcode = '22023';
    end if;

    select profile.*
      into locked_profile
    from public.profiles as profile
    where profile.id = caller_user_id
    for update;

    if not found
      or locked_profile.account_status <> 'active'
      or locked_profile.stable_id is null
    then
      raise exception 'An active profile with a stable member ID is required.'
        using errcode = '42501';
    end if;

    if locked_profile.publication_status = 'archived' then
      raise exception 'An archived profile cannot be self-published.'
        using errcode = '42501';
    end if;

    if new.target_status = 'published' and locked_profile.visibility <> 'public' then
      raise exception 'Profile visibility must be public before publication.'
        using errcode = '22023';
    end if;

    update public.profiles as profile
    set publication_status = new.target_status
    where profile.id = caller_user_id
    returning
      profile.visibility,
      profile.publication_status,
      profile.published_at
    into changed_visibility, changed_status, changed_published_at;
  else
    if new.target_kind = 'profile_field' then
      update public.profile_fields as field
      set publication_status = new.target_status
      where field.member_id = caller_member_id
        and field.field_key = normalized_key
        and field.publication_status in ('draft', 'published')
        and (new.target_status <> 'published' or field.visibility = 'public')
      returning
        field.visibility,
        field.publication_status,
        field.published_at
      into changed_visibility, changed_status, changed_published_at;
    else
      if normalized_key !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
        raise exception 'A valid portfolio record ID is required.' using errcode = '22023';
      end if;

      if new.target_kind = 'profile_skill' then
        update public.profile_skills as profile_skill
        set publication_status = new.target_status
        where profile_skill.id = normalized_key::uuid
          and profile_skill.member_id = caller_member_id
          and profile_skill.publication_status in ('draft', 'published')
          and (new.target_status <> 'published' or profile_skill.visibility = 'public')
        returning
          profile_skill.visibility,
          profile_skill.publication_status,
          profile_skill.published_at
        into changed_visibility, changed_status, changed_published_at;
      elsif new.target_kind = 'skill_evidence' then
        update public.skill_evidence as evidence
        set publication_status = new.target_status
        where evidence.id = normalized_key::uuid
          and evidence.member_id = caller_member_id
          and evidence.publication_status in ('draft', 'published')
          and (new.target_status <> 'published' or evidence.visibility = 'public')
        returning
          evidence.visibility,
          evidence.publication_status,
          evidence.published_at
        into changed_visibility, changed_status, changed_published_at;
      elsif new.target_kind = 'project' then
        update public.projects as project
        set publication_status = new.target_status
        where project.id = normalized_key::uuid
          and project.owner_member_id = caller_member_id
          and project.publication_status in ('draft', 'published')
          and project.lifecycle_status <> 'archived'
          and (new.target_status <> 'published' or project.visibility = 'public')
        returning
          project.visibility,
          project.publication_status,
          project.published_at
        into changed_visibility, changed_status, changed_published_at;
      end if;
    end if;

    if changed_status is null then
      raise exception 'Portfolio record is unavailable for this publication change.'
        using errcode = '42501';
    end if;
  end if;

  new.result_visibility := changed_visibility;
  new.result_publication_status := changed_status;
  new.result_published_at := changed_published_at;
  return new;
end;
$$;

comment on function ffe_private.process_publication_action() is
  'Private trigger that validates a publication command against auth.uid() and changes publication metadata only.';

revoke all on function ffe_private.process_publication_action()
  from public, anon, authenticated, service_role;

create trigger publication_actions_process_before_insert
before insert on public.publication_actions
for each row execute function ffe_private.process_publication_action();

alter table public.publication_actions enable row level security;

revoke all on table public.publication_actions
  from public, anon, authenticated, service_role;

grant select on table public.publication_actions to authenticated;
grant insert (target_kind, target_key, target_status)
  on table public.publication_actions to authenticated;
grant all on table public.publication_actions to service_role;

create policy publication_actions_owner_read
  on public.publication_actions
  for select
  to authenticated
  using (actor_user_id = (select auth.uid()));

create policy publication_actions_owner_insert
  on public.publication_actions
  for insert
  to authenticated
  with check (
    actor_user_id = (select auth.uid())
    and member_id = (select ffe_private.current_member_id())
  );
