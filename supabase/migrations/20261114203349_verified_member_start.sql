create function ffe_private.start_own_member_profile()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  member_user uuid := auth.uid();
  prefix text[] := array['Neugierige', 'Tanzende', 'Wache', 'Träumende', 'Wilde', 'Flinke'];
  animal text[] := array['Pfote', 'Eule', 'Motte', 'Kröte', 'Elster', 'Hummel'];
begin
  if member_user is null then
    return;
  end if;

  update public.profiles p
  set stable_id = 'MEM-' || upper(replace(gen_random_uuid()::text, '-', '')),
      display_name = case when p.display_name = 'Neues Mitglied'
        then prefix[1 + floor(random() * cardinality(prefix))::integer] || ' '
          || animal[1 + floor(random() * cardinality(animal))::integer]
        else p.display_name end
  where p.id = member_user and p.stable_id is null
    and p.account_status = 'active' and p.visibility = 'private' and p.publication_status = 'draft'
    and exists (
      select 1 from auth.users u
      where u.id = member_user and u.email_confirmed_at is not null
        and u.invited_at is null and u.is_anonymous is false
    );
end;
$$;

revoke all on function ffe_private.start_own_member_profile() from public, anon, authenticated;
grant execute on function ffe_private.start_own_member_profile() to authenticated;

create function public.start_own_member_profile()
returns void
language sql
security invoker
set search_path = ''
as $$ select ffe_private.start_own_member_profile() $$;

revoke all on function public.start_own_member_profile() from public, anon, authenticated;
grant execute on function public.start_own_member_profile() to authenticated;

create function gemden_feedback.require_account_for_synergy_request()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if starts_with(new.body, '[synergy-intro] ')
    and (auth.uid() is null or new.owner_user_id is distinct from auth.uid()) then
    raise exception 'Für eine Schnupperanfrage brauchst du ein Konto.' using errcode = '42501';
  end if;
  return new;
end;
$$;

revoke all on function gemden_feedback.require_account_for_synergy_request() from public, anon, authenticated;

create trigger ticket_synergy_request_requires_account
before insert on gemden_feedback.tickets
for each row execute function gemden_feedback.require_account_for_synergy_request();
