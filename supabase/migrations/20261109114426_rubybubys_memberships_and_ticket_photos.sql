create table public.rubybubys_memberships (
  member_id text primary key references public.profiles(stable_id) on update cascade on delete cascade,
  show_public boolean not null default false
);

alter table public.rubybubys_memberships enable row level security;
revoke all on public.rubybubys_memberships from anon, authenticated;
grant select on public.rubybubys_memberships to anon, authenticated;
grant insert(member_id), update(show_public) on public.rubybubys_memberships to authenticated;

create policy rubybubys_public_read on public.rubybubys_memberships
  for select to anon, authenticated using (
    show_public and exists (
      select 1 from public.profiles p where p.stable_id = member_id
        and p.visibility = 'public' and p.publication_status = 'published' and p.account_status = 'active'
    )
  );

create policy rubybubys_owner_read on public.rubybubys_memberships
  for select to authenticated using (
    member_id in (select p.stable_id from public.profiles p where p.id = (select auth.uid()) and p.account_status = 'active')
  );

create function ffe_private.rubybubys_invited_member()
returns text language sql stable security definer set search_path = ''
as $$
  select p.stable_id from public.profiles p join auth.users u on u.id = p.id
  where p.id = (select auth.uid()) and p.account_status = 'active'
    and u.email_confirmed_at is not null
    and u.raw_app_meta_data -> 'gemden_rubybubys_invited' = 'true'::jsonb
$$;
revoke all on function ffe_private.rubybubys_invited_member() from public, anon, authenticated;
grant execute on function ffe_private.rubybubys_invited_member() to authenticated;

create policy rubybubys_owner_enroll on public.rubybubys_memberships
  for insert to authenticated with check (
    member_id = (select ffe_private.rubybubys_invited_member()) and not show_public
  );

create policy rubybubys_owner_visibility on public.rubybubys_memberships
  for update to authenticated
  using (member_id in (select p.stable_id from public.profiles p where p.id = (select auth.uid()) and p.account_status = 'active'))
  with check (member_id in (select p.stable_id from public.profiles p where p.id = (select auth.uid()) and p.account_status = 'active'));

create view public.rubybubys_public_tree with (security_invoker = true) as
select m.member_id, p.display_name
from public.rubybubys_memberships m join public.profiles p on p.stable_id = m.member_id
where m.show_public and p.visibility = 'public' and p.publication_status = 'published' and p.account_status = 'active';

revoke all on public.rubybubys_public_tree from anon, authenticated;
grant select on public.rubybubys_public_tree to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('gemden-ticket-photos', 'gemden-ticket-photos', false, 8388608, array['image/jpeg', 'image/png', 'image/webp']);

create function ffe_private.can_access_ticket_photo(object_name text, owner_only boolean)
returns boolean language sql stable security definer set search_path = ''
as $$
  select auth.uid() is not null and exists (
    select 1 from gemden_feedback.tickets t
    where t.id = case
      when object_name ~ '^[0-9a-f-]{36}/[0-9a-f-]{36}\.(jpg|png|webp)$'
      and split_part(split_part(object_name, '/', 2), '.', 1) ~ '^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$'
      then split_part(split_part(object_name, '/', 2), '.', 1)::uuid
    end
      and t.owner_user_id::text = split_part(object_name, '/', 1)
      and right(t.body, length(object_name) + length(E'\n\n[photo-file] ')) = E'\n\n[photo-file] ' || object_name
      and (
        (t.owner_user_id = (select auth.uid()) and exists (
          select 1 from public.profiles p where p.id = t.owner_user_id and p.account_status = 'active' and p.stable_id is not null
        )) or (not owner_only and gemden_feedback.can_manage())
      )
  )
$$;
revoke all on function ffe_private.can_access_ticket_photo(text, boolean) from public, anon, authenticated;
grant execute on function ffe_private.can_access_ticket_photo(text, boolean) to authenticated;

create policy ticket_photo_owner_upload on storage.objects
  for insert to authenticated with check (
    bucket_id = 'gemden-ticket-photos'
    and ffe_private.can_access_ticket_photo(name, true)
  );

create policy ticket_photo_read on storage.objects
  for select to authenticated using (
    bucket_id = 'gemden-ticket-photos'
    and ffe_private.can_access_ticket_photo(name, false)
  );

create policy ticket_photo_owner_delete on storage.objects
  for delete to authenticated using (
    bucket_id = 'gemden-ticket-photos'
    and ffe_private.can_access_ticket_photo(name, true)
  );
