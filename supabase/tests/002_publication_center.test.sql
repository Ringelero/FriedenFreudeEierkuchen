begin;

select plan(34);

insert into auth.users (id, email, raw_user_meta_data)
values
  (
    '44444444-4444-4444-8444-444444444444',
    'publication-owner@example.invalid',
    '{"display_name":"Veröffentlichungstest"}'::jsonb
  ),
  (
    '55555555-5555-4555-8555-555555555555',
    'publication-other@example.invalid',
    '{"display_name":"Andere Person"}'::jsonb
  );

update public.profiles
set stable_id = 'MEM-PUBLICATION-OWNER'
where id = '44444444-4444-4444-8444-444444444444';

update public.profiles
set stable_id = 'MEM-PUBLICATION-OTHER'
where id = '55555555-5555-4555-8555-555555555555';

insert into public.profile_fields (
  member_id,
  field_key,
  value_text,
  visibility,
  publication_status
)
values
  (
    'MEM-PUBLICATION-OWNER',
    'bio',
    'Erster Entwurf',
    'private',
    'draft'
  ),
  (
    'MEM-PUBLICATION-OTHER',
    'bio',
    'Fremder Entwurf',
    'public',
    'draft'
  );

insert into public.projects (
  id,
  stable_id,
  owner_member_id,
  title,
  lifecycle_status,
  visibility,
  publication_status
)
values
  (
    '66666666-6666-4666-8666-666666666666',
    'PROJECT-PUBLICATION-ARCHIVED',
    'MEM-PUBLICATION-OWNER',
    'Archiviertes Projekt',
    'archived',
    'public',
    'draft'
  ),
  (
    '77777777-7777-4777-8777-777777777777',
    'PROJECT-PUBLICATION-OTHER',
    'MEM-PUBLICATION-OTHER',
    'Fremdes Projekt',
    'active',
    'public',
    'draft'
  );

select ok(
  not has_column_privilege(
    'authenticated',
    'public.profiles',
    'publication_status',
    'update'
  ),
  'authenticated users cannot directly update profile publication status'
);

select ok(
  has_column_privilege(
    'authenticated',
    'public.publication_actions',
    'target_kind',
    'insert'
  ),
  'authenticated users can append a publication action target'
);

select ok(
  not has_column_privilege(
    'authenticated',
    'public.publication_actions',
    'actor_user_id',
    'insert'
  ),
  'authenticated users cannot forge a publication actor'
);

select ok(
  not has_column_privilege(
    'anon',
    'public.publication_actions',
    'target_kind',
    'insert'
  ),
  'anonymous users cannot append publication actions'
);

set local "request.jwt.claim.sub" = '44444444-4444-4444-8444-444444444444';
set local role authenticated;

select throws_ok(
  $$update public.profiles
    set publication_status = 'published'
    where id = '44444444-4444-4444-8444-444444444444'$$,
  '42501',
  null,
  'direct profile publication is denied'
);

select throws_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile', 'self', 'published')$$,
  '22023',
  null,
  'a non-public profile cannot be published'
);

select lives_ok(
  $$update public.profiles
    set visibility = 'public'
    where id = '44444444-4444-4444-8444-444444444444'$$,
  'the owner can explicitly choose public profile visibility'
);

select lives_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile', 'self', 'published')$$,
  'the owner can publish a public profile through a verified action'
);

select is(
  (
    select publication_status
    from public.profiles
    where id = '44444444-4444-4444-8444-444444444444'
  ),
  'published',
  'profile publication status changed to published'
);

select ok(
  (
    select published_at is not null
    from public.profiles
    where id = '44444444-4444-4444-8444-444444444444'
  ),
  'profile publication receives a timestamp'
);

select lives_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile', 'self', 'draft')$$,
  'the owner can retract the profile through a verified action'
);

select is(
  (
    select publication_status
    from public.profiles
    where id = '44444444-4444-4444-8444-444444444444'
  ),
  'draft',
  'profile retraction restores draft status'
);

select ok(
  (
    select published_at is null
    from public.profiles
    where id = '44444444-4444-4444-8444-444444444444'
  ),
  'profile retraction clears its publication timestamp'
);

select results_eq(
  $$update public.profile_fields
    set publication_status = 'published'
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
    returning field_key$$,
  array[]::text[],
  'draft-only RLS blocks a direct portfolio publication transition'
);

select is(
  (
    select publication_status
    from public.profile_fields
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
  ),
  'draft',
  'the blocked direct transition leaves the field as a draft'
);

select throws_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile_field', 'bio', 'published')$$,
  '42501',
  null,
  'a private field cannot be published'
);

select lives_ok(
  $$update public.profile_fields
    set visibility = 'public'
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'$$,
  'the owner can mark a draft field for public visibility'
);

select lives_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile_field', 'bio', 'published')$$,
  'the owner can publish a public field through a verified action'
);

select is(
  (
    select publication_status
    from public.profile_fields
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
  ),
  'published',
  'field publication status changed to published'
);

select ok(
  (
    select published_at is not null
    from public.profile_fields
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
  ),
  'field publication receives a timestamp'
);

select results_eq(
  $$update public.profile_fields
    set value_text = 'Unerlaubte stille Änderung'
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
    returning field_key$$,
  array[]::text[],
  'published content remains immutable through ordinary table updates'
);

select is(
  (
    select value_text
    from public.profile_fields
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
  ),
  'Erster Entwurf',
  'the blocked update did not alter published content'
);

select lives_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile_field', 'bio', 'draft')$$,
  'the owner can retract a published field'
);

select is(
  (
    select publication_status
    from public.profile_fields
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
  ),
  'draft',
  'field retraction restores draft status'
);

select ok(
  (
    select published_at is null
    from public.profile_fields
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
  ),
  'field retraction clears its publication timestamp'
);

select lives_ok(
  $$update public.profile_fields
    set value_text = 'Bearbeitbarer Entwurf'
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'$$,
  'retracted content becomes editable as a draft again'
);

select is(
  (
    select value_text
    from public.profile_fields
    where member_id = 'MEM-PUBLICATION-OWNER'
      and field_key = 'bio'
  ),
  'Bearbeitbarer Entwurf',
  'the draft edit was saved'
);

select throws_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values (
      'project',
      '77777777-7777-4777-8777-777777777777',
      'published'
    )$$,
  '42501',
  null,
  'the owner cannot publish a project that belongs to another member'
);

select throws_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values (
      'project',
      '66666666-6666-4666-8666-666666666666',
      'published'
    )$$,
  '42501',
  null,
  'an archived project cannot be published'
);

select lives_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile', 'self', 'published')$$,
  'the profile can be reopened after the owner review'
);

select lives_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile_field', 'bio', 'published')$$,
  'the reviewed field can be republished'
);

reset role;
set local role anon;

select results_eq(
  $$select stable_id
    from public.profiles
    order by stable_id$$,
  array['MEM-PUBLICATION-OWNER'::text],
  'anonymous readers see only the explicitly published public profile'
);

select results_eq(
  $$select field_key
    from public.profile_fields
    order by field_key$$,
  array['bio'::text],
  'anonymous readers see only its explicitly published public field'
);

select throws_ok(
  $$insert into public.publication_actions (
      target_kind,
      target_key,
      target_status
    ) values ('profile', 'self', 'draft')$$,
  '42501',
  null,
  'anonymous readers cannot append a publication action'
);

select * from finish();

rollback;
