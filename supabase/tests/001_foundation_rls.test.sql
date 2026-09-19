begin;

select plan(37);

insert into auth.users (id, email, raw_user_meta_data)
values
  (
    '11111111-1111-1111-1111-111111111111',
    'leni-foundation-test@example.invalid',
    '{"display_name":"Leni","stable_id":"MEM-METADATA-HIJACK","permission_key":"platform_operator"}'::jsonb
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    'julius-foundation-test@example.invalid',
    '{"display_name":"Julius"}'::jsonb
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    'other-foundation-test@example.invalid',
    '{"display_name":"Andere Person"}'::jsonb
  );

update public.profiles
set stable_id = 'MEM-JULIUS',
    visibility = 'public',
    publication_status = 'published'
where id = '22222222-2222-2222-2222-222222222222';

insert into public.kieze (
  id,
  slug,
  name,
  description,
  lifecycle_status,
  visibility,
  publication_status
)
values (
  'KIEZ-HIDDEN-TEST',
  'hidden-test',
  'Verborgener Testkiez',
  'Nur für die RLS-Gegenprobe.',
  'experiment',
  'managers',
  'published'
);

insert into public.permission_grants (
  grantee_user_id,
  permission_key,
  scope_type,
  scope_id,
  granted_by_authority,
  reason
)
values (
  '11111111-1111-1111-1111-111111111111',
  'manage_kiez',
  'kiez',
  'KIEZ-P-HAIN',
  'RLS-Test',
  'Aktiver P-Hain-Testzugriff'
);

insert into public.permission_grants (
  grantee_user_id,
  permission_key,
  scope_type,
  scope_id,
  starts_at,
  ends_at,
  granted_by_authority,
  reason
)
values (
  '33333333-3333-3333-3333-333333333333',
  'manage_kiez',
  'kiez',
  'KIEZ-P-HAIN',
  now() - interval '2 days',
  now() - interval '1 day',
  'RLS-Test',
  'Abgelaufener Zugriff für die Gegenprobe'
);

select is(
  (
    select stable_id
    from public.profiles
    where id = '11111111-1111-1111-1111-111111111111'
  ),
  null::text,
  'signup metadata cannot assign a stable member ID'
);

select ok(
  (select relrowsecurity from pg_class where oid = 'public.profiles'::regclass),
  'profiles has RLS enabled'
);
select ok(
  (select relrowsecurity from pg_class where oid = 'public.kieze'::regclass),
  'kieze has RLS enabled'
);
select ok(
  (select relrowsecurity from pg_class where oid = 'public.permission_grants'::regclass),
  'permission_grants has RLS enabled'
);
select ok(
  (select relrowsecurity from pg_class where oid = 'public.audit_events'::regclass),
  'audit_events has RLS enabled'
);

select ok(
  has_table_privilege('anon', 'public.profiles', 'select'),
  'anon receives profile read privilege'
);
select ok(
  not has_table_privilege('anon', 'public.profiles', 'insert,update,delete'),
  'anon receives no profile write privilege'
);
select ok(
  has_column_privilege('authenticated', 'public.profiles', 'display_name', 'update'),
  'authenticated users may update an allowed profile column'
);
select ok(
  not has_column_privilege('authenticated', 'public.profiles', 'stable_id', 'update'),
  'authenticated users cannot assign stable profile IDs'
);
select ok(
  has_table_privilege('anon', 'public.kieze', 'select'),
  'anon receives Kiez read privilege'
);
select ok(
  not has_table_privilege('anon', 'public.kieze', 'insert,update,delete'),
  'anon receives no Kiez write privilege'
);
select ok(
  has_column_privilege('authenticated', 'public.kieze', 'description', 'update'),
  'authenticated scope managers may update allowed Kiez columns'
);
select ok(
  not has_column_privilege('authenticated', 'public.kieze', 'ffe_refs', 'update'),
  'scope managers cannot rewrite FFE references'
);
select ok(
  not has_table_privilege('authenticated', 'public.permission_grants', 'insert,update,delete'),
  'browser clients cannot write permission grants'
);
select ok(
  not has_table_privilege('authenticated', 'public.audit_events', 'insert,update,delete'),
  'browser clients cannot alter audit events'
);

set local role anon;

select results_eq(
  $$select id from public.profiles order by id$$,
  array['22222222-2222-2222-2222-222222222222'::uuid],
  'anon sees only the published public profile'
);

select results_eq(
  $$select id from public.kieze order by id$$,
  array['KIEZ-P-HAIN'::text],
  'anon sees only the published public Kiez'
);

select throws_ok(
  $$update public.profiles set display_name = 'Nicht erlaubt' where true$$,
  '42501',
  null,
  'anon cannot update profiles'
);

select throws_ok(
  $$select ffe_private.has_active_permission('manage_kiez', 'kiez', 'KIEZ-P-HAIN')$$,
  '42501',
  null,
  'anon cannot call the private permission helper'
);

reset role;
set local "request.jwt.claim.sub" = '11111111-1111-1111-1111-111111111111';
set local role authenticated;

select results_eq(
  $$select id from public.profiles order by id$$,
  array[
    '11111111-1111-1111-1111-111111111111'::uuid,
    '22222222-2222-2222-2222-222222222222'::uuid
  ],
  'Leni sees her own private profile and the public profile'
);

select ok(
  ffe_private.has_active_permission('manage_kiez', 'kiez', 'KIEZ-P-HAIN'),
  'Lenis active P-Hain grant is recognized'
);

select ok(
  not ffe_private.has_active_permission('manage_kiez', 'kiez', 'KIEZ-HIDDEN-TEST'),
  'a scoped grant does not spill into another Kiez'
);

select lives_ok(
  $$update public.profiles
    set display_name = 'Leni Test'
    where id = '11111111-1111-1111-1111-111111111111'$$,
  'Leni can update an allowed field on her own profile'
);

select is(
  (
    select display_name
    from public.profiles
    where id = '11111111-1111-1111-1111-111111111111'
  ),
  'Leni Test',
  'Lenis own profile update is visible'
);

select throws_ok(
  $$update public.profiles
    set stable_id = 'MEM-HIJACK'
    where id = '11111111-1111-1111-1111-111111111111'$$,
  '42501',
  null,
  'Leni cannot assign or replace a stable member ID'
);

select lives_ok(
  $$update public.kieze
    set description = 'Von der berechtigten Testperson bearbeitet.'
    where id = 'KIEZ-P-HAIN'$$,
  'Leni can update P-Hain through the scoped grant'
);

select results_eq(
  $$update public.kieze
    set description = 'Darf nicht passieren.'
    where id = 'KIEZ-HIDDEN-TEST'
    returning id$$,
  array[]::text[],
  'Leni cannot update another Kiez'
);

select is(
  (select count(*) from public.permission_grants),
  1::bigint,
  'Leni sees only her own permission grant'
);

select throws_ok(
  $$insert into public.permission_grants (
      grantee_user_id,
      permission_key,
      scope_type,
      scope_id,
      granted_by_authority
    ) values (
      '11111111-1111-1111-1111-111111111111',
      'platform_operator',
      'platform',
      'GemDen',
      'Selbstvergabe'
    )$$,
  '42501',
  null,
  'Leni cannot grant herself a stronger permission'
);

select ok(
  (select count(*) from public.audit_events where entity_type = 'kiez') >= 1,
  'the P-Hain manager can read Kiez audit events in her scope'
);

select throws_ok(
  $$insert into public.audit_events (
      entity_type,
      entity_id,
      operation,
      scope_type,
      scope_id,
      new_row
    ) values (
      'kiez',
      'KIEZ-P-HAIN',
      'INSERT',
      'kiez',
      'KIEZ-P-HAIN',
      '{}'::jsonb
    )$$,
  '42501',
  null,
  'Leni cannot forge an audit event'
);

reset role;
set local "request.jwt.claim.sub" = '33333333-3333-3333-3333-333333333333';
set local role authenticated;

select ok(
  not ffe_private.has_active_permission('manage_kiez', 'kiez', 'KIEZ-P-HAIN'),
  'an expired P-Hain grant is inactive'
);

select results_eq(
  $$update public.kieze
    set description = 'Darf nicht passieren.'
    where id = 'KIEZ-P-HAIN'
    returning id$$,
  array[]::text[],
  'a user without an active grant cannot update P-Hain'
);

select lives_ok(
  $$update public.profiles
    set display_name = 'Andere Testperson'
    where id = '33333333-3333-3333-3333-333333333333'$$,
  'a user can still update an allowed field on their own profile'
);

select results_eq(
  $$select id
    from public.profiles
    where id = '11111111-1111-1111-1111-111111111111'$$,
  array[]::uuid[],
  'a user cannot read Lenis private profile'
);

select is(
  (
    select count(*)
    from public.permission_grants
    where grantee_user_id = '11111111-1111-1111-1111-111111111111'
  ),
  0::bigint,
  'a user cannot read Lenis permission grant'
);

select is(
  (select count(*) from public.audit_events where entity_type = 'kiez'),
  0::bigint,
  'a user without a grant cannot read P-Hain audit events'
);

select * from finish();

rollback;
