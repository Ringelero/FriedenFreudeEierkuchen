create function gemden_feedback.own_synergy_requests()
returns table(id uuid, page_path text, state text, has_response boolean)
language sql
stable
security definer
set search_path = ''
as $$
  select t.id, t.page_path, t.state, t.response <> ''
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

revoke all on function gemden_feedback.own_synergy_requests() from public, anon, authenticated;
grant execute on function gemden_feedback.own_synergy_requests() to authenticated;

create function public.get_own_synergy_requests()
returns table(id uuid, page_path text, state text, has_response boolean)
language sql
stable
security invoker
set search_path = ''
as $$ select * from gemden_feedback.own_synergy_requests() $$;

revoke all on function public.get_own_synergy_requests() from public, anon, authenticated;
grant execute on function public.get_own_synergy_requests() to authenticated;
