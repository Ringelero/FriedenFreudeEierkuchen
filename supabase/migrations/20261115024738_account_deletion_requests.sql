alter table gemden_feedback.tickets
  add column request_type text check (request_type in ('account_deletion'));

create unique index feedback_one_pending_deletion_per_account
  on gemden_feedback.tickets (owner_user_id)
  where request_type = 'account_deletion' and state not in ('done', 'closed');

create or replace function gemden_feedback.item(t gemden_feedback.tickets)
returns jsonb
language sql
stable
set search_path = ''
as $$
  select jsonb_build_object(
    'id', t.id, 'kind', t.kind, 'title', t.title, 'body', t.body,
    'page_path', t.page_path, 'state', t.state, 'response', t.response, 'version', t.version,
    'created_at', t.created_at, 'updated_at', t.updated_at, 'request_type', t.request_type
  )
$$;

create function gemden_feedback.own_account_deletion(submit_request boolean)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  requester uuid := auth.uid();
  request_status jsonb;
begin
  if requester is null or not exists (
    select 1 from auth.users
    where id = requester and email_confirmed_at is not null and is_anonymous is false
  ) then
    raise exception 'A verified account is required' using errcode = '42501';
  end if;

  if submit_request is true then
    insert into gemden_feedback.tickets (id, owner_user_id, request_type, kind, title, body, page_path)
    values (
      gen_random_uuid(), requester, 'account_deletion', 'wish',
      'GemDen-Konto löschen',
      'Die angemeldete Person hat die Löschung ihres GemDen-Kontos und der zugehörigen Daten bestätigt.',
      '/konto/'
    )
    on conflict (owner_user_id) where request_type = 'account_deletion' and state not in ('done', 'closed')
    do nothing;
  end if;

  select jsonb_build_object('state', t.state, 'response', t.response)
  into request_status
  from gemden_feedback.tickets t
  where t.owner_user_id = requester and t.request_type = 'account_deletion'
  order by (t.state not in ('done', 'closed')) desc, t.created_at desc, t.id desc
  limit 1;

  return request_status;
end;
$$;

revoke all on function gemden_feedback.own_account_deletion(boolean) from public, anon, authenticated;
grant execute on function gemden_feedback.own_account_deletion(boolean) to authenticated;

create function public.own_account_deletion(submit_request boolean default false)
returns jsonb
language sql
security invoker
set search_path = ''
as $$ select gemden_feedback.own_account_deletion(submit_request) $$;

revoke all on function public.own_account_deletion(boolean) from public, anon, authenticated;
grant execute on function public.own_account_deletion(boolean) to authenticated;
