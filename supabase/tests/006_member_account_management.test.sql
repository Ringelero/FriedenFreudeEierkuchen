begin;

select plan(40);

insert into auth.users (id, email, raw_user_meta_data)
values
  (
    '81111111-1111-4111-8111-111111111111',
    'manager-account-v2-test@example.invalid',
    '{"display_name":"Manager V2"}'::jsonb
  ),
  (
    '82222222-2222-4222-8222-222222222222',
    'target-account-v2-test@example.invalid',
    '{"display_name":"Zielperson V2"}'::jsonb
  ),
  (
    '83333333-3333-4333-8333-333333333333',
    'stranger-account-v2-test@example.invalid',
    '{"display_name":"Andere Person V2"}'::jsonb
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
  '81111111-1111-4111-8111-111111111111',
  'manage_members',
  'platform',
  'GemDen',
  'pgTAP account administration V2',
  'Authorizes only the rolled-back account administration test.'
);

select ok(
  (select relrowsecurity from pg_class where oid = 'public.member_admin_events'::regclass),
  'member administration events have row level security enabled'
);

select ok(
  not has_table_privilege('anon', 'public.member_admin_events', 'select'),
  'anon cannot read the administration history'
);

select ok(
  not has_table_privilege('authenticated', 'public.member_admin_events', 'select'),
  'authenticated browsers cannot read the administration history directly'
);

select ok(
  not has_function_privilege(
    'authenticated',
    'public.administer_member_account(uuid,uuid,text,text,text)',
    'execute'
  ),
  'authenticated browsers cannot execute service-role account administration'
);

select ok(
  has_function_privilege(
    'service_role',
    'public.administer_member_account(uuid,uuid,text,text,text)',
    'execute'
  ),
  'service_role can execute the guarded account administration function'
);

select ok(
  not has_table_privilege('service_role', 'public.member_admin_events', 'update'),
  'service_role cannot rewrite administration history rows'
);

set local role service_role;

select throws_ok(
  $$select * from public.administer_member_account(
      '83333333-3333-4333-8333-333333333333',
      '82222222-2222-4222-8222-222222222222',
      'display_name_changed',
      'Manipulierter Name',
      'Dieser Akteur besitzt kein Verwaltungsrecht.'
    )$$,
  '42501',
  'Member administration permission required.',
  'an explicit actor without manage_members is rejected even through service_role'
);

select throws_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '82222222-2222-4222-8222-222222222222',
      'display_name_changed',
      'Zielperson Neu',
      'zu kurz'
    )$$,
  '22023',
  'A reason with at least 12 characters is required.',
  'every account decision requires a useful reason'
);

select lives_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '82222222-2222-4222-8222-222222222222',
      'display_name_changed',
      'Zielperson Neu',
      'Der Anzeigename wurde gemeinsam berichtigt.'
    )$$,
  'the Edge Function path can change a display name'
);

reset role;

select is(
  (
    select display_name
    from public.profiles
    where id = '82222222-2222-4222-8222-222222222222'
  ),
  'Zielperson Neu',
  'the corrected display name is stored'
);

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and actor_user_id = '81111111-1111-4111-8111-111111111111'
      and action = 'display_name_changed'
      and reason = 'Der Anzeigename wurde gemeinsam berichtigt.'
  ),
  'the name correction keeps actor, target, action and reason'
);

set local role service_role;

select lives_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '82222222-2222-4222-8222-222222222222',
      'display_name_changed',
      'Zielperson Neu',
      'Die wiederholte Anfrage bleibt ohne Nebenwirkung.'
    )$$,
  'repeating the same display name is idempotent'
);

reset role;

select is(
  (
    select count(*)
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'display_name_changed'
  ),
  1::bigint,
  'an idempotent name request does not create a second event'
);

set local role service_role;

select throws_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '81111111-1111-4111-8111-111111111111',
      'account_paused',
      '',
      'Ein Verwaltungskonto darf sich nicht selbst sperren.'
    )$$,
  '22023',
  'The active administration account cannot pause itself.',
  'the active manager cannot pause its own account'
);

reset role;
set local "request.jwt.claim.sub" = '81111111-1111-4111-8111-111111111111';
set local role authenticated;

select lives_ok(
  $$select * from public.set_member_kiez_permission(
      '82222222-2222-4222-8222-222222222222',
      'KIEZ-P-HAIN',
      true,
      'Das Pilotteam bestätigte dieses begrenzte Kiez-Recht.'
    )$$,
  'the active manager can grant the target a scoped Kiez right'
);

reset role;

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'kiez_permission_granted'
      and metadata ->> 'kiez_id' = 'KIEZ-P-HAIN'
  ),
  'the Kiez grant receives a readable administration event'
);

set local role service_role;

select lives_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '82222222-2222-4222-8222-222222222222',
      'account_paused',
      '',
      'Der Zugang wird für die vereinbarte Pause deaktiviert.'
    )$$,
  'service-role account administration can pause another account'
);

reset role;

select is(
  (
    select account_status
    from public.profiles
    where id = '82222222-2222-4222-8222-222222222222'
  ),
  'paused',
  'the target profile is paused'
);

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'account_paused'
  ),
  'the pause decision is retained in the administration history'
);

set local "request.jwt.claim.sub" = '82222222-2222-4222-8222-222222222222';
set local role authenticated;

select is(
  ffe_private.has_active_permission('manage_kiez', 'kiez', 'KIEZ-P-HAIN'),
  false,
  'a paused account immediately loses the effect of an otherwise active grant'
);

update public.profiles
set display_name = 'Nicht erlaubt'
where id = '82222222-2222-4222-8222-222222222222';

select is(
  (
    select display_name
    from public.profiles
    where id = '82222222-2222-4222-8222-222222222222'
  ),
  'Zielperson Neu',
  'a paused account cannot keep editing its own profile with an existing JWT'
);

reset role;
set local role service_role;

select throws_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '82222222-2222-4222-8222-222222222222',
      'login_link_sent',
      '',
      'Ein neuer Link wäre während der Pause nicht zulässig.'
    )$$,
  '22023',
  'A login link can only be sent to an active member account.',
  'the audit path also refuses login links for paused accounts'
);

select lives_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '82222222-2222-4222-8222-222222222222',
      'account_reactivated',
      '',
      'Das Pilotteam hat die Reaktivierung ausdrücklich bestätigt.'
    )$$,
  'service-role account administration can reactivate the paused account'
);

reset role;

select is(
  (
    select account_status
    from public.profiles
    where id = '82222222-2222-4222-8222-222222222222'
  ),
  'active',
  'the target profile is active again'
);

set local "request.jwt.claim.sub" = '82222222-2222-4222-8222-222222222222';
set local role authenticated;

select is(
  ffe_private.has_active_permission('manage_kiez', 'kiez', 'KIEZ-P-HAIN'),
  true,
  'an existing valid grant becomes effective again after reactivation'
);

reset role;
set local role service_role;

select lives_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '82222222-2222-4222-8222-222222222222',
      'login_link_sent',
      '',
      'Der bisherige Einladungslink ist nachweislich abgelaufen.'
    )$$,
  'the active account can receive a recorded login-link event'
);

reset role;

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'login_link_sent'
  ),
  'the login-link event is retained without storing the email address'
);

set local "request.jwt.claim.sub" = '81111111-1111-4111-8111-111111111111';
set local role authenticated;

select lives_ok(
  $$select * from public.assign_member_identity(
      '82222222-2222-4222-8222-222222222222',
      'MEM-ACCOUNT-V2-TARGET'
    )$$,
  'the active manager can assign a stable member identity'
);

reset role;

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'stable_id_assigned'
      and metadata ->> 'stable_id' = 'MEM-ACCOUNT-V2-TARGET'
  ),
  'stable identity assignment receives an administration event'
);

set local role authenticated;

select lives_ok(
  $$select * from public.set_member_kiez_permission(
      '82222222-2222-4222-8222-222222222222',
      'KIEZ-P-HAIN',
      false,
      'Das begrenzte Pilotrecht wurde ausdrücklich zurückgenommen.'
    )$$,
  'the active manager can revoke the scoped Kiez right'
);

reset role;

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'kiez_permission_revoked'
      and metadata ->> 'kiez_id' = 'KIEZ-P-HAIN'
  ),
  'the Kiez revocation receives a readable administration event'
);

select throws_ok(
  $$update public.member_admin_events
    set reason = 'Dieser Verlauf darf niemals umgeschrieben werden.'
    where target_user_id = '82222222-2222-4222-8222-222222222222'$$,
  '55000',
  'Member administration events are append-only.',
  'even a privileged update cannot rewrite an administration event'
);

select throws_ok(
  $$delete from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'$$,
  '55000',
  'Member administration events are append-only.',
  'even a privileged delete cannot remove an administration event'
);

select ok(
  not exists (
    select 1
    from public.member_admin_events
    where metadata::text like '%@%'
  ),
  'administration event metadata contains no email addresses'
);

set local role service_role;

select lives_ok(
  $$select * from public.administer_member_account(
      '81111111-1111-4111-8111-111111111111',
      '83333333-3333-4333-8333-333333333333',
      'member_invited',
      '',
      'Die kontrollierte Einladung wurde serverseitig versendet.'
    )$$,
  'a completed invitation can receive its own administration event'
);

reset role;

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '83333333-3333-4333-8333-333333333333'
      and action = 'member_invited'
      and actor_user_id = '81111111-1111-4111-8111-111111111111'
  ),
  'the invitation event records actor and target'
);

select is(
  (
    select count(*)
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'account_reactivated'
  ),
  1::bigint,
  'reactivation is recorded exactly once'
);

select ok(
  exists (
    select 1
    from public.member_admin_events
    where target_user_id = '82222222-2222-4222-8222-222222222222'
      and action = 'account_reactivated'
      and reason = 'Das Pilotteam hat die Reaktivierung ausdrücklich bestätigt.'
  ),
  'the reactivation reason remains readable'
);

select ok(
  not exists (
    select 1
    from public.member_admin_events
    where char_length(btrim(reason)) < 12
  ),
  'all administration events retain a useful reason'
);

select ok(
  exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'profiles'
      and policyname = 'profiles_self_update'
      and qual like '%account_status%active%'
      and with_check like '%account_status%active%'
  ),
  'the self-update policy requires an active account on both sides'
);

select * from finish();

rollback;
