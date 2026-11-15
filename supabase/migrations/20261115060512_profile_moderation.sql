create table ffe_private.profile_blocks (
  owner_id uuid not null references public.profiles(id) on delete cascade,
  target_id uuid not null references public.profiles(id) on delete cascade,
  primary key (owner_id, target_id),
  check (owner_id <> target_id)
);
create index profile_blocks_by_target on ffe_private.profile_blocks(target_id, owner_id);
alter table ffe_private.profile_blocks enable row level security;
revoke all on ffe_private.profile_blocks from public, anon, authenticated;

alter table gemden_feedback.tickets
  drop constraint tickets_request_type_check,
  add column reported_member_id text,
  add constraint tickets_request_type_check check (request_type in ('account_deletion', 'profile_report')),
  add constraint tickets_report_target_check check (
    (request_type is not distinct from 'profile_report') = (reported_member_id is not null)
  );

create unique index feedback_one_open_profile_report
  on gemden_feedback.tickets(owner_user_id, reported_member_id)
  where request_type = 'profile_report' and state not in ('done', 'closed');

create or replace function gemden_feedback.item(t gemden_feedback.tickets)
returns jsonb language sql stable set search_path = '' as $$
  select jsonb_build_object(
    'id', t.id, 'kind', t.kind, 'title', t.title, 'body', t.body,
    'page_path', t.page_path, 'state', t.state, 'response', t.response, 'version', t.version,
    'created_at', t.created_at, 'updated_at', t.updated_at, 'request_type', t.request_type,
    'reported_member_id', t.reported_member_id
  )
$$;

create function ffe_private.lock_profile_pair(a uuid, b uuid)
returns void language sql set search_path = '' as $$
  select pg_advisory_xact_lock(hashtextextended(least(a,b)::text || greatest(a,b)::text, 314295))
$$;

create function ffe_private.profile_action(member text, operation text, note text)
returns text language plpgsql security definer set search_path = '' as $$
declare
  actor uuid := auth.uid();
  target public.profiles;
begin
  if actor is null or not exists (
    select 1 from public.profiles p join auth.users u on u.id=p.id
    where p.id=actor and p.account_status='active' and u.email_confirmed_at is not null and not u.is_anonymous
  ) then return 'unavailable'; end if;

  select * into target from public.profiles p where p.stable_id=member;
  if not found then return 'unavailable'; end if;
  if target.id=actor then return 'own'; end if;

  if operation in ('block', 'unblock') then
    perform ffe_private.lock_profile_pair(actor,target.id);
  end if;
  if operation='unblock' then
    delete from ffe_private.profile_blocks where owner_id=actor and target_id=target.id;
    return 'unblocked';
  end if;
  if operation='status' then
    if exists(select 1 from ffe_private.profile_blocks where owner_id=actor and target_id=target.id) then
      return 'blocked';
    end if;
    if exists(select 1 from ffe_private.profile_blocks where owner_id=target.id and target_id=actor) then
      return 'unavailable';
    end if;
  end if;
  if target.visibility <> 'public' or target.publication_status <> 'published' or target.account_status <> 'active' then
    return 'unavailable';
  end if;
  if operation='status' then return 'visible'; end if;
  if operation='block' then
    insert into ffe_private.profile_blocks(owner_id,target_id) values(actor,target.id) on conflict do nothing;
    return 'blocked';
  end if;
  if operation='report' then
    if char_length(btrim(coalesce(note,''))) not between 10 and 2000 then
      raise exception 'Invalid report length' using errcode='22023';
    end if;
    perform pg_advisory_xact_lock(hashtextextended(actor::text,8231));
    if exists (
      select 1 from gemden_feedback.tickets t
      where t.owner_user_id=actor and t.reported_member_id=member
        and t.request_type='profile_report' and t.state not in ('done','closed')
    ) then return 'already_reported'; end if;
    if (select count(*) from gemden_feedback.tickets t where t.owner_user_id=actor and t.created_at>now()-interval '1 day') >= 20 then
      return 'limit';
    end if;
    insert into gemden_feedback.tickets(id,owner_user_id,request_type,reported_member_id,kind,title,body,page_path)
    values(gen_random_uuid(),actor,'profile_report',member,'problem','Mitgliedsprofil gemeldet',' '||btrim(note),'/community/mitglieder/profil/');
    return 'reported';
  end if;
  raise exception 'Invalid profile action' using errcode='22023';
end
$$;

create function ffe_private.own_profile_blocks()
returns table(member_id text, display_name text)
language sql stable security definer set search_path = '' as $$
  select p.stable_id, case when p.visibility='public' and p.publication_status='published'
    and p.account_status='active' then p.display_name end
  from ffe_private.profile_blocks b
  join public.profiles p on p.id=b.target_id
  join public.profiles actor on actor.id=b.owner_id and actor.account_status='active'
  where b.owner_id=(select auth.uid()) and p.stable_id is not null
  order by coalesce(p.display_name,''),p.stable_id
$$;

create function public.moderate_member_profile(member text, operation text default 'status', note text default null)
returns text language sql security invoker set search_path = '' as $$
  select ffe_private.profile_action(member, operation, note)
$$;

create function public.get_own_profile_blocks()
returns table(member_id text, display_name text)
language sql stable security invoker set search_path = '' as $$
  select * from ffe_private.own_profile_blocks()
$$;

revoke all on function ffe_private.lock_profile_pair(uuid,uuid),
  ffe_private.profile_action(text,text,text), ffe_private.own_profile_blocks(),
  public.moderate_member_profile(text,text,text), public.get_own_profile_blocks()
  from public, anon, authenticated;
grant execute on function ffe_private.profile_action(text,text,text), ffe_private.own_profile_blocks(),
  public.moderate_member_profile(text,text,text), public.get_own_profile_blocks() to authenticated;

create function ffe_private.guard_blocked_exchange()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
  owner_member text;
  responder_member text;
  pair_a uuid;
  pair_b uuid;
begin
  if tg_table_name='opportunity_responses' then
    owner_member := new.opportunity_owner_member_id;
    responder_member := new.responder_member_id;
  else
    select r.opportunity_owner_member_id, r.responder_member_id into owner_member,responder_member
    from public.opportunity_responses r where r.id=new.response_id;
  end if;
  select p.id into pair_a from public.profiles p where p.stable_id=owner_member;
  select p.id into pair_b from public.profiles p where p.stable_id=responder_member;
  perform ffe_private.lock_profile_pair(pair_a,pair_b);
  if exists (
    select 1 from ffe_private.profile_blocks
    where (owner_id=pair_a and target_id=pair_b) or (owner_id=pair_b and target_id=pair_a)
  ) then raise exception 'Dieser Austausch ist nicht verfügbar.' using errcode='42501'; end if;
  return new;
end
$$;
revoke all on function ffe_private.guard_blocked_exchange() from public, anon, authenticated;

-- Check after the existing triggers have resolved the participants.
create trigger zz_guard_blocked_exchange before insert on public.opportunity_responses
  for each row execute function ffe_private.guard_blocked_exchange();
create trigger zz_guard_blocked_exchange before insert on public.opportunity_response_messages
  for each row execute function ffe_private.guard_blocked_exchange();
create trigger zz_guard_blocked_exchange before insert or update of response_id,saved_at on gemden_care.contacts
  for each row execute function ffe_private.guard_blocked_exchange();
create trigger zz_guard_blocked_exchange before insert or update on gemden_care.plans
  for each row when (new.cancelled is false) execute function ffe_private.guard_blocked_exchange();
