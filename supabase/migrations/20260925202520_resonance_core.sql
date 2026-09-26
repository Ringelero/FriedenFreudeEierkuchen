-- Private, consent-based responses for public GemDen opportunities.
--
-- A response is visible only to the opportunity owner and the responding
-- member. The browser can submit only the opportunity, response type and
-- message; private triggers derive every identity and snapshot. Decisions are
-- append-only actions. A private message room opens only after the opportunity
-- owner accepts the response.

-- Opportunities now use the same narrow publication action log as profiles
-- and portfolio records. Draft inserts rely on database defaults, while
-- direct publication changes are no longer a browser capability.
revoke insert (lifecycle_status, publication_status)
  on table public.opportunities from authenticated;
revoke update (publication_status)
  on table public.opportunities from authenticated;

alter table public.publication_actions
  drop constraint publication_actions_target_kind_values;

alter table public.publication_actions
  add constraint publication_actions_target_kind_values check (
    target_kind in (
      'profile',
      'profile_field',
      'profile_skill',
      'skill_evidence',
      'project',
      'opportunity'
    )
  );

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
    'project',
    'opportunity'
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
      elsif new.target_kind = 'opportunity' then
        update public.opportunities as opportunity
        set publication_status = new.target_status
        where opportunity.id = normalized_key::uuid
          and opportunity.owner_member_id = caller_member_id
          and opportunity.publication_status in ('draft', 'published')
          and opportunity.lifecycle_status <> 'archived'
          and (
            new.target_status <> 'published'
            or (
              opportunity.visibility = 'public'
              and opportunity.lifecycle_status = 'open'
            )
          )
        returning
          opportunity.visibility,
          opportunity.publication_status,
          opportunity.published_at
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

revoke all on function ffe_private.process_publication_action()
  from public, anon, authenticated, service_role;

-- Published opportunities may change lifecycle, but their public content must
-- first be retracted to a draft before it can be edited.
create or replace function ffe_private.guard_published_opportunity_update()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if old.publication_status = 'published'
    and new.publication_status = old.publication_status
    and (
      new.signal_type is distinct from old.signal_type
      or new.relationship_mode is distinct from old.relationship_mode
      or new.title is distinct from old.title
      or new.summary is distinct from old.summary
      or new.location_mode is distinct from old.location_mode
      or new.location_label is distinct from old.location_label
      or new.starts_at is distinct from old.starts_at
      or new.ends_at is distinct from old.ends_at
      or new.duration_note is distinct from old.duration_note
      or new.compensation_type is distinct from old.compensation_type
      or new.compensation_note is distinct from old.compensation_note
      or new.risk_level is distinct from old.risk_level
      or new.risk_note is distinct from old.risk_note
      or new.visibility is distinct from old.visibility
    )
  then
    raise exception 'Retract a published opportunity before editing its content.'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

revoke all on function ffe_private.guard_published_opportunity_update()
  from public, anon, authenticated, service_role;

create trigger opportunities_guard_published_update
before update on public.opportunities
for each row execute function ffe_private.guard_published_opportunity_update();

create table public.opportunity_responses (
  id uuid primary key default gen_random_uuid(),
  stable_id text not null unique default (
    'RES-' || upper(replace(gen_random_uuid()::text, '-', ''))
  ),
  opportunity_id uuid not null references public.opportunities (id)
    on delete restrict,
  opportunity_stable_id text not null,
  opportunity_title text not null,
  opportunity_signal_type text not null,
  opportunity_owner_member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  opportunity_owner_display_name text not null,
  responder_member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  responder_display_name text not null,
  response_type text not null,
  message text not null,
  status text not null default 'pending',
  status_changed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (opportunity_id, responder_member_id),
  constraint opportunity_responses_stable_id_format check (
    stable_id ~ '^RES-[A-Z0-9][A-Z0-9-]*$'
  ),
  constraint opportunity_responses_snapshot_id_length check (
    char_length(btrim(opportunity_stable_id)) between 1 and 120
  ),
  constraint opportunity_responses_snapshot_title_length check (
    char_length(btrim(opportunity_title)) between 1 and 200
  ),
  constraint opportunity_responses_signal_values check (
    opportunity_signal_type in ('have', 'can', 'need', 'time', 'chance')
  ),
  constraint opportunity_responses_owner_name_length check (
    char_length(btrim(opportunity_owner_display_name)) between 1 and 120
  ),
  constraint opportunity_responses_responder_name_length check (
    char_length(btrim(responder_display_name)) between 1 and 120
  ),
  constraint opportunity_responses_type_values check (
    response_type in ('help', 'participate', 'learn', 'question')
  ),
  constraint opportunity_responses_message_length check (
    char_length(btrim(message)) between 1 and 2000
  ),
  constraint opportunity_responses_status_values check (
    status in ('pending', 'accepted', 'declined', 'withdrawn')
  ),
  constraint opportunity_responses_not_self check (
    responder_member_id <> opportunity_owner_member_id
  )
);

comment on table public.opportunity_responses is
  'Private response shared only by the opportunity owner and responder. Identity and opportunity snapshots are derived by a trigger.';

create table public.opportunity_response_actions (
  id uuid primary key default gen_random_uuid(),
  response_id uuid not null references public.opportunity_responses (id)
    on delete cascade,
  actor_user_id uuid not null default auth.uid()
    references auth.users (id) on delete cascade,
  actor_member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  target_status text not null,
  result_status text not null,
  created_at timestamptz not null default now(),
  constraint opportunity_response_actions_target_values check (
    target_status in ('accepted', 'declined', 'withdrawn')
  ),
  constraint opportunity_response_actions_result_values check (
    result_status in ('accepted', 'declined', 'withdrawn')
  ),
  constraint opportunity_response_actions_result_matches_target check (
    result_status = target_status
  )
);

comment on table public.opportunity_response_actions is
  'Append-only log of owner decisions and responder withdrawals. Actor and result columns cannot be supplied by browser clients.';

create table public.opportunity_response_messages (
  id uuid primary key default gen_random_uuid(),
  stable_id text not null unique default (
    'MSG-' || upper(replace(gen_random_uuid()::text, '-', ''))
  ),
  response_id uuid not null references public.opportunity_responses (id)
    on delete cascade,
  sender_user_id uuid not null default auth.uid()
    references auth.users (id) on delete cascade,
  sender_member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  sender_display_name text not null,
  body text not null,
  created_at timestamptz not null default now(),
  constraint opportunity_response_messages_stable_id_format check (
    stable_id ~ '^MSG-[A-Z0-9][A-Z0-9-]*$'
  ),
  constraint opportunity_response_messages_sender_name_length check (
    char_length(btrim(sender_display_name)) between 1 and 120
  ),
  constraint opportunity_response_messages_body_length check (
    char_length(btrim(body)) between 1 and 4000
  )
);

comment on table public.opportunity_response_messages is
  'Immutable private clarification messages. Inserts are allowed only after a response was accepted and only for its two participants.';

create index opportunity_responses_owner_inbox
  on public.opportunity_responses (
    opportunity_owner_member_id,
    status,
    created_at desc
  );

create index opportunity_responses_responder_outbox
  on public.opportunity_responses (
    responder_member_id,
    status,
    created_at desc
  );

create index opportunity_response_actions_response_timeline
  on public.opportunity_response_actions (response_id, created_at);

create index opportunity_response_actions_actor_user_timeline
  on public.opportunity_response_actions (actor_user_id, created_at desc);

create index opportunity_response_actions_actor_member_timeline
  on public.opportunity_response_actions (actor_member_id, created_at desc);

create index opportunity_response_messages_response_timeline
  on public.opportunity_response_messages (response_id, created_at);

create index opportunity_response_messages_sender_user_timeline
  on public.opportunity_response_messages (sender_user_id, created_at desc);

create index opportunity_response_messages_sender_member_timeline
  on public.opportunity_response_messages (sender_member_id, created_at desc);

create or replace function ffe_private.prepare_opportunity_response()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := auth.uid();
  caller_profile public.profiles%rowtype;
  target_opportunity public.opportunities%rowtype;
  owner_name text;
begin
  if caller_user_id is null then
    raise exception 'Authentication required.' using errcode = '42501';
  end if;

  if new.response_type not in ('help', 'participate', 'learn', 'question') then
    raise exception 'Unsupported response type.' using errcode = '22023';
  end if;

  new.message := btrim(coalesce(new.message, ''));
  if char_length(new.message) not between 1 and 2000 then
    raise exception 'A response message between 1 and 2000 characters is required.'
      using errcode = '22023';
  end if;

  select profile.*
    into caller_profile
  from public.profiles as profile
  where profile.id = caller_user_id
    and profile.account_status = 'active'
    and profile.stable_id is not null;

  if not found then
    raise exception 'An active profile with a stable member ID is required.'
      using errcode = '42501';
  end if;

  select opportunity.*
    into target_opportunity
  from public.opportunities as opportunity
  where opportunity.id = new.opportunity_id
    and opportunity.visibility = 'public'
    and opportunity.publication_status = 'published'
    and opportunity.lifecycle_status = 'open'
    and exists (
      select 1
      from public.profiles as owner_profile
      where owner_profile.stable_id = opportunity.owner_member_id
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  for share;

  if not found then
    raise exception 'This opportunity is not open for responses.'
      using errcode = '42501';
  end if;

  if target_opportunity.owner_member_id = caller_profile.stable_id then
    raise exception 'An opportunity owner cannot respond to their own opportunity.'
      using errcode = '42501';
  end if;

  select profile.display_name
    into owner_name
  from public.profiles as profile
  where profile.stable_id = target_opportunity.owner_member_id;

  new.opportunity_stable_id := target_opportunity.stable_id;
  new.opportunity_title := target_opportunity.title;
  new.opportunity_signal_type := target_opportunity.signal_type;
  new.opportunity_owner_member_id := target_opportunity.owner_member_id;
  new.opportunity_owner_display_name := owner_name;
  new.responder_member_id := caller_profile.stable_id;
  new.responder_display_name := caller_profile.display_name;
  new.status := 'pending';
  new.status_changed_at := now();
  return new;
end;
$$;

revoke all on function ffe_private.prepare_opportunity_response()
  from public, anon, authenticated, service_role;

create or replace function ffe_private.process_opportunity_response_action()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := auth.uid();
  caller_member_id text;
  locked_response public.opportunity_responses%rowtype;
  changed_status text;
begin
  if caller_user_id is null then
    raise exception 'Authentication required.' using errcode = '42501';
  end if;

  select profile.stable_id
    into caller_member_id
  from public.profiles as profile
  where profile.id = caller_user_id
    and profile.account_status = 'active'
    and profile.stable_id is not null;

  if caller_member_id is null then
    raise exception 'An active profile with a stable member ID is required.'
      using errcode = '42501';
  end if;

  select response.*
    into locked_response
  from public.opportunity_responses as response
  where response.id = new.response_id
  for update;

  if not found then
    raise exception 'Response not found.' using errcode = '42501';
  end if;

  if caller_member_id = locked_response.opportunity_owner_member_id then
    if locked_response.status <> 'pending'
      or new.target_status not in ('accepted', 'declined')
    then
      raise exception 'This owner decision is not allowed for the current response state.'
        using errcode = '42501';
    end if;
  elsif caller_member_id = locked_response.responder_member_id then
    if locked_response.status not in ('pending', 'accepted')
      or new.target_status <> 'withdrawn'
    then
      raise exception 'This withdrawal is not allowed for the current response state.'
        using errcode = '42501';
    end if;
  else
    raise exception 'Only response participants can change its state.'
      using errcode = '42501';
  end if;

  update public.opportunity_responses as response
  set
    status = new.target_status,
    status_changed_at = now()
  where response.id = locked_response.id
  returning response.status into changed_status;

  new.actor_user_id := caller_user_id;
  new.actor_member_id := caller_member_id;
  new.result_status := changed_status;
  return new;
end;
$$;

revoke all on function ffe_private.process_opportunity_response_action()
  from public, anon, authenticated, service_role;

create or replace function ffe_private.prepare_opportunity_response_message()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_user_id uuid := auth.uid();
  caller_profile public.profiles%rowtype;
  accepted_response public.opportunity_responses%rowtype;
begin
  if caller_user_id is null then
    raise exception 'Authentication required.' using errcode = '42501';
  end if;

  new.body := btrim(coalesce(new.body, ''));
  if char_length(new.body) not between 1 and 4000 then
    raise exception 'A message between 1 and 4000 characters is required.'
      using errcode = '22023';
  end if;

  select profile.*
    into caller_profile
  from public.profiles as profile
  where profile.id = caller_user_id
    and profile.account_status = 'active'
    and profile.stable_id is not null;

  if not found then
    raise exception 'An active profile with a stable member ID is required.'
      using errcode = '42501';
  end if;

  select response.*
    into accepted_response
  from public.opportunity_responses as response
  where response.id = new.response_id
    and response.status = 'accepted'
  for share;

  if not found
    or caller_profile.stable_id not in (
      accepted_response.opportunity_owner_member_id,
      accepted_response.responder_member_id
    )
  then
    raise exception 'Only participants in an accepted response can write messages.'
      using errcode = '42501';
  end if;

  new.sender_user_id := caller_user_id;
  new.sender_member_id := caller_profile.stable_id;
  new.sender_display_name := caller_profile.display_name;
  return new;
end;
$$;

revoke all on function ffe_private.prepare_opportunity_response_message()
  from public, anon, authenticated, service_role;

create trigger opportunity_responses_prepare_before_insert
before insert on public.opportunity_responses
for each row execute function ffe_private.prepare_opportunity_response();

create trigger opportunity_responses_touch_updated_at
before update on public.opportunity_responses
for each row execute function ffe_private.touch_updated_at();

create trigger opportunity_response_actions_process_before_insert
before insert on public.opportunity_response_actions
for each row execute function ffe_private.process_opportunity_response_action();

create trigger opportunity_response_messages_prepare_before_insert
before insert on public.opportunity_response_messages
for each row execute function ffe_private.prepare_opportunity_response_message();

alter table public.opportunity_responses enable row level security;
alter table public.opportunity_response_actions enable row level security;
alter table public.opportunity_response_messages enable row level security;

revoke all on table public.opportunity_responses
  from public, anon, authenticated, service_role;
revoke all on table public.opportunity_response_actions
  from public, anon, authenticated, service_role;
revoke all on table public.opportunity_response_messages
  from public, anon, authenticated, service_role;

grant select on table public.opportunity_responses to authenticated;
grant insert (opportunity_id, response_type, message)
  on table public.opportunity_responses to authenticated;

grant select on table public.opportunity_response_actions to authenticated;
grant insert (response_id, target_status)
  on table public.opportunity_response_actions to authenticated;

grant select on table public.opportunity_response_messages to authenticated;
grant insert (response_id, body)
  on table public.opportunity_response_messages to authenticated;

grant all on table public.opportunity_responses to service_role;
grant all on table public.opportunity_response_actions to service_role;
grant all on table public.opportunity_response_messages to service_role;

create policy opportunity_responses_participant_read
  on public.opportunity_responses
  for select
  to authenticated
  using (
    responder_member_id = (select ffe_private.current_member_id())
    or opportunity_owner_member_id = (select ffe_private.current_member_id())
  );

create policy opportunity_responses_responder_insert
  on public.opportunity_responses
  for insert
  to authenticated
  with check (
    responder_member_id = (select ffe_private.current_member_id())
    and responder_member_id <> opportunity_owner_member_id
    and status = 'pending'
    and exists (
      select 1
      from public.opportunities as opportunity
      join public.profiles as owner_profile
        on owner_profile.stable_id = opportunity.owner_member_id
      where opportunity.id = opportunity_responses.opportunity_id
        and opportunity.owner_member_id = opportunity_owner_member_id
        and opportunity.visibility = 'public'
        and opportunity.publication_status = 'published'
        and opportunity.lifecycle_status = 'open'
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy opportunity_response_actions_participant_read
  on public.opportunity_response_actions
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.opportunity_responses as response
      where response.id = opportunity_response_actions.response_id
        and (
          response.responder_member_id = (select ffe_private.current_member_id())
          or response.opportunity_owner_member_id = (select ffe_private.current_member_id())
        )
    )
  );

create policy opportunity_response_actions_participant_insert
  on public.opportunity_response_actions
  for insert
  to authenticated
  with check (
    actor_user_id = (select auth.uid())
    and actor_member_id = (select ffe_private.current_member_id())
    and exists (
      select 1
      from public.opportunity_responses as response
      where response.id = opportunity_response_actions.response_id
        and actor_member_id in (
          response.responder_member_id,
          response.opportunity_owner_member_id
        )
    )
  );

create policy opportunity_response_messages_participant_read
  on public.opportunity_response_messages
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.opportunity_responses as response
      where response.id = opportunity_response_messages.response_id
        and (
          response.responder_member_id = (select ffe_private.current_member_id())
          or response.opportunity_owner_member_id = (select ffe_private.current_member_id())
        )
    )
  );

create policy opportunity_response_messages_participant_insert
  on public.opportunity_response_messages
  for insert
  to authenticated
  with check (
    sender_user_id = (select auth.uid())
    and sender_member_id = (select ffe_private.current_member_id())
    and exists (
      select 1
      from public.opportunity_responses as response
      where response.id = opportunity_response_messages.response_id
        and response.status = 'accepted'
        and sender_member_id in (
          response.responder_member_id,
          response.opportunity_owner_member_id
        )
    )
  );
