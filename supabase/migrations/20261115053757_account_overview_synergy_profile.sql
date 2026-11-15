create table public.synergy_memberships (
  user_id uuid not null references auth.users(id) on delete cascade,
  synergy_id text not null check (synergy_id ~ '^SYN-[A-Z0-9-]+$'),
  confirmed_at timestamptz not null default now(),
  primary key (user_id, synergy_id)
);

alter table public.synergy_memberships enable row level security;
revoke all on table public.synergy_memberships from public, anon, authenticated;
grant select on table public.synergy_memberships to authenticated;
grant select, insert, update, delete on table public.synergy_memberships to service_role;

create policy read_own_confirmed_synergies on public.synergy_memberships
  for select to authenticated
  using (
    user_id = (select auth.uid())
    and exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid()) and p.account_status = 'active'
    )
  );

create function gemden_feedback.own_synergy_history()
returns table(id uuid, page_path text, state text, response text, reply_stamp text)
language sql
stable
security definer
set search_path = ''
as $$
  select t.id, t.page_path, t.state, t.response, md5(nullif(t.response, ''))
  from gemden_feedback.tickets t
  where t.owner_user_id = (select auth.uid())
    and starts_with(t.body, '[synergy-intro] ')
    and exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid()) and p.account_status = 'active' and p.stable_id is not null
    )
  order by t.created_at desc, t.id
  limit 30
$$;

revoke all on function gemden_feedback.own_synergy_history() from public, anon, authenticated;
grant execute on function gemden_feedback.own_synergy_history() to authenticated;

create function public.get_own_synergy_history()
returns table(id uuid, page_path text, state text, response text, reply_stamp text)
language sql
stable
security invoker
set search_path = ''
as $$ select * from gemden_feedback.own_synergy_history() $$;

revoke all on function public.get_own_synergy_history() from public, anon, authenticated;
grant execute on function public.get_own_synergy_history() to authenticated;
