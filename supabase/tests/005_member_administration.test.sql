begin;

select plan(29);

insert into auth.users (id, email, raw_user_meta_data)
values
  (
    '71111111-1111-4111-8111-111111111111',
    'manager-member-admin-test@example.invalid',
    '{"display_name":"Manager"}'::jsonb
  ),
  (
    '72222222-2222-4222-8222-222222222222',
    'target-member-admin-test@example.invalid',
    '{"display_name":"Zielperson"}'::jsonb
  ),
  (
    '73333333-3333-4333-8333-333333333333',
    'stranger-member-admin-test@example.invalid',
    '{"display_name":"Andere Person"}'::jsonb
  ),
  (
    '74444444-4444-4444-8444-444444444444',
    'existing-id-member-admin-test@example.invalid',
    '{"display_name":"Bestehende ID"}'::jsonb
  );

update public.profiles
set stable_id = case id
  when '71111111-1111-4111-8111-111111111111'::uuid then 'MEM-MANAGER'
  when '74444444-4444-4444-8444-444444444444'::uuid then 'MEM-EXISTING'
end
where id in (
  '71111111-1111-4111-8111-111111111111'::uuid,
  '74444444-4444-4444-8444-444444444444'::uuid
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
  '71111111-1111-4111-8111-111111111111',
  'manage_members',
  'platform',
  'GemDen',
  'pgTAP member administration test',
  'Authorizes only the rolled-back member administration test.'
);

select ok(
  not has_function_privilege('anon', 'public.assign_member_identity(uuid,text)', 'execute'),
  'anon cannot execute stable identity assignment'
);

select ok(
  has_function_privilege('authenticated', 'public.assign_member_identity(uuid,text)', 'execute'),
  'authenticated receives execute privilege on the guarded identity function'
);

set local role anon;

select throws_ok(
  $$select * from public.assign_member_identity(
      '72222222-2222-4222-8222-222222222222',
      'MEM-TARGET'
    )$$,
  '42501',
  null,
  'anon cannot call identity assignment'
);

reset role;
set local "request.jwt.claim.sub" = '73333333-3333-4333-8333-333333333333';
set local role authenticated;

select throws_ok(
  $$select * from public.assign_member_identity(
      '72222222-2222-4222-8222-222222222222',
      'MEM-TARGET'
    )$$,
  '42501',
  'Member administration permission required.',
  'an authenticated user without manage_members cannot assign an identity'
);

select throws_ok(
  $$select * from public.set_member_kiez_permission(
      '72222222-2222-4222-8222-222222222222',
      'KIEZ-P-HAIN',
      true,
      'Unauthorized attempt for the test.'
    )$$,
  '42501',
  'Member administration permission required.',
  'an authenticated user without manage_members cannot grant a Kiez permission'
);

reset role;
set local "request.jwt.claim.sub" = '71111111-1111-4111-8111-111111111111';
set local role authenticated;

select lives_ok(
  $$select * from public.assign_member_identity(
      '72222222-2222-4222-8222-222222222222',
      'mem-target'
    )$$,
  'the member manager can assign the first stable identity'
);

reset role;

select is(
  (
    select stable_id
    from public.profiles
    where id = '72222222-2222-4222-8222-222222222222'
  ),
  'MEM-TARGET',
  'the stable identity is normalized and stored'
);

select ok(
  exists (
    select 1
    from public.audit_events
    where entity_type = 'profile'
      and subject_user_id = '72222222-2222-4222-8222-222222222222'
      and operation = 'UPDATE'
      and actor_user_id = '71111111-1111-4111-8111-111111111111'
  ),
  'identity assignment records the authenticated manager as audit actor'
);

set local role authenticated;

select lives_ok(
  $$select * from public.assign_member_identity(
      '72222222-2222-4222-8222-222222222222',
      'MEM-TARGET'
    )$$,
  'repeating the same stable identity is idempotent'
);

select throws_ok(
  $$select * from public.assign_member_identity(
      '72222222-2222-4222-8222-222222222222',
      'MEM-REPLACEMENT'
    )$$,
  '23514',
  'A confirmed stable member ID cannot be replaced.',
  'a confirmed stable identity cannot be replaced through the function'
);

select throws_ok(
  $$select * from public.assign_member_identity(
      '73333333-3333-4333-8333-333333333333',
      'MEM-TARGET'
    )$$,
  '23505',
  'The requested stable member ID is already assigned.',
  'one stable identity cannot be assigned to two members'
);

select throws_ok(
  $$select * from public.assign_member_identity(
      '73333333-3333-4333-8333-333333333333',
      'NOT-A-MEMBER-ID'
    )$$,
  '22023',
  'A valid MEM-* identifier is required.',
  'invalid stable identity formats are rejected'
);

select throws_ok(
  $$select * from public.assign_member_identity(
      '75555555-5555-4555-8555-555555555555',
      'MEM-MISSING'
    )$$,
  '22023',
  'The target member profile does not exist.',
  'identity assignment requires an existing profile'
);

select lives_ok(
  $$select * from public.set_member_kiez_permission(
      '72222222-2222-4222-8222-222222222222',
      'KIEZ-P-HAIN',
      true,
      'The pilot team explicitly approved this scoped test right.'
    )$$,
  'the member manager can grant one existing Kiez permission'
);

reset role;

select is(
  (
    select count(*)
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
      and scope_type = 'kiez'
      and scope_id = 'KIEZ-P-HAIN'
      and revoked_at is null
  ),
  1::bigint,
  'the scoped grant exists exactly once'
);

select is(
  (
    select granted_by_user_id
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
      and revoked_at is null
  ),
  '71111111-1111-4111-8111-111111111111'::uuid,
  'the scoped grant records the authenticated manager'
);

select is(
  (
    select granted_by_authority
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
      and revoked_at is null
  ),
  'GemDen-Mitgliederverwaltung',
  'the scoped grant records its technical administration path'
);

select ok(
  exists (
    select 1
    from public.audit_events
    where entity_type = 'permission_grant'
      and subject_user_id = '72222222-2222-4222-8222-222222222222'
      and operation = 'INSERT'
      and actor_user_id = '71111111-1111-4111-8111-111111111111'
  ),
  'the permission grant audit records the authenticated manager'
);

set local role authenticated;

select lives_ok(
  $$select * from public.set_member_kiez_permission(
      '72222222-2222-4222-8222-222222222222',
      'KIEZ-P-HAIN',
      true,
      'The repeated request remains safely idempotent.'
    )$$,
  'repeating an active scoped grant is idempotent'
);

reset role;

select is(
  (
    select count(*)
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
      and revoked_at is null
  ),
  1::bigint,
  'idempotent grant calls do not duplicate active permissions'
);

set local role authenticated;

select throws_ok(
  $$select * from public.set_member_kiez_permission(
      '72222222-2222-4222-8222-222222222222',
      'KIEZ-P-HAIN',
      false,
      'too short'
    )$$,
  '22023',
  'A reason with at least 12 characters is required.',
  'every permission decision requires a useful reason'
);

select throws_ok(
  $$select * from public.set_member_kiez_permission(
      '72222222-2222-4222-8222-222222222222',
      'KIEZ-MISSING',
      true,
      'This nonexistent scope must not receive a permission.'
    )$$,
  '22023',
  'The requested Kiez scope is not available.',
  'permissions cannot be granted for a nonexistent Kiez'
);

select lives_ok(
  $$select * from public.set_member_kiez_permission(
      '72222222-2222-4222-8222-222222222222',
      'KIEZ-P-HAIN',
      false,
      'The pilot authorization was explicitly withdrawn.'
    )$$,
  'the member manager can revoke the scoped Kiez permission'
);

reset role;

select is(
  (
    select count(*)
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
      and revoked_at is not null
  ),
  1::bigint,
  'the permission row is retained as a revoked audit record'
);

select is(
  (
    select revocation_reason
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
  ),
  'The pilot authorization was explicitly withdrawn.',
  'the revocation reason is retained'
);

select is(
  (
    select revoked_by_user_id
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
  ),
  '71111111-1111-4111-8111-111111111111'::uuid,
  'the revocation records the authenticated manager'
);

select is(
  (
    select count(*)
    from public.permission_grants
    where grantee_user_id = '72222222-2222-4222-8222-222222222222'
      and permission_key = 'manage_kiez'
      and revoked_at is null
  ),
  0::bigint,
  'no active Kiez permission remains after revocation'
);

select ok(
  exists (
    select 1
    from public.audit_events
    where entity_type = 'permission_grant'
      and subject_user_id = '72222222-2222-4222-8222-222222222222'
      and operation = 'UPDATE'
      and actor_user_id = '71111111-1111-4111-8111-111111111111'
  ),
  'the permission revocation audit records the authenticated manager'
);

select throws_ok(
  $$update public.profiles
    set stable_id = 'MEM-DIRECT-REPLACEMENT'
    where id = '72222222-2222-4222-8222-222222222222'$$,
  '23514',
  'A confirmed stable member ID cannot be replaced.',
  'the database trigger also blocks privileged direct stable ID replacement'
);

select * from finish();

rollback;
