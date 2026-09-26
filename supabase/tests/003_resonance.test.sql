begin;

select plan(50);

insert into auth.users (id, email, raw_user_meta_data)
values
  (
    '81000000-0000-4000-8000-000000000001',
    'resonance-owner@example.invalid',
    '{"display_name":"Mara Eigentümerin"}'::jsonb
  ),
  (
    '81000000-0000-4000-8000-000000000002',
    'resonance-responder@example.invalid',
    '{"display_name":"Noah Resonanz"}'::jsonb
  ),
  (
    '81000000-0000-4000-8000-000000000003',
    'resonance-outsider@example.invalid',
    '{"display_name":"Oda Außenstehend"}'::jsonb
  );

update public.profiles
set stable_id = 'MEM-RESONANCE-OWNER',
    visibility = 'public',
    publication_status = 'published'
where id = '81000000-0000-4000-8000-000000000001';

update public.profiles
set stable_id = 'MEM-RESONANCE-RESPONDER'
where id = '81000000-0000-4000-8000-000000000002';

update public.profiles
set stable_id = 'MEM-RESONANCE-OUTSIDER'
where id = '81000000-0000-4000-8000-000000000003';

insert into public.opportunities (
  id,
  owner_member_id,
  signal_type,
  relationship_mode,
  title,
  summary,
  visibility
)
values (
  '82000000-0000-4000-8000-000000000001',
  'MEM-RESONANCE-OWNER',
  'need',
  'cooperation',
  'Gemeinsamer Testgarten',
  'Wir möchten den nächsten Schritt gemeinsam klären.',
  'public'
);

select ok(
  (select relrowsecurity from pg_class where oid = 'public.opportunity_responses'::regclass),
  'opportunity responses have RLS enabled'
);
select ok(
  (select relrowsecurity from pg_class where oid = 'public.opportunity_response_actions'::regclass),
  'response actions have RLS enabled'
);
select ok(
  (select relrowsecurity from pg_class where oid = 'public.opportunity_response_messages'::regclass),
  'response messages have RLS enabled'
);
select ok(
  has_table_privilege('authenticated', 'public.opportunity_responses', 'select'),
  'authenticated participants receive response read privilege'
);
select ok(
  has_column_privilege('authenticated', 'public.opportunity_responses', 'opportunity_id', 'insert'),
  'authenticated members can submit the narrow opportunity reference'
);
select ok(
  not has_column_privilege('authenticated', 'public.opportunity_responses', 'responder_member_id', 'insert'),
  'browser clients cannot forge a responder identity'
);
select ok(
  not has_table_privilege('authenticated', 'public.opportunity_responses', 'update,delete'),
  'responses are immutable to browser clients'
);
select ok(
  not has_table_privilege('anon', 'public.opportunity_responses', 'select'),
  'anonymous visitors cannot read private responses'
);
select ok(
  not has_column_privilege('authenticated', 'public.opportunities', 'publication_status', 'update'),
  'opportunity publication status cannot be updated directly'
);
select ok(
  not has_column_privilege('authenticated', 'public.opportunities', 'publication_status', 'insert'),
  'opportunity publication status cannot be supplied during insert'
);

set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000001';
set local role authenticated;

select lives_ok(
  $$insert into public.opportunities (
      owner_member_id,
      signal_type,
      relationship_mode,
      title,
      summary,
      visibility
    ) values (
      'MEM-RESONANCE-OWNER',
      'need',
      'cooperation',
      'Sicherer Browserentwurf',
      'Dieser zweite Eintrag prüft die sicheren Standardwerte.',
      'private'
    )$$,
  'an owner can create an opportunity without browser-controlled lifecycle fields'
);
select is(
  (select publication_status from public.opportunities where title = 'Sicherer Browserentwurf'),
  'draft',
  'a new opportunity receives the safe draft default'
);
select throws_ok(
  $$update public.opportunities
    set publication_status = 'published'
    where id = '82000000-0000-4000-8000-000000000001'$$,
  '42501',
  null,
  'the owner cannot publish through a direct update'
);
select lives_ok(
  $$insert into public.publication_actions (target_kind, target_key, target_status)
    values ('opportunity', '82000000-0000-4000-8000-000000000001', 'published')$$,
  'the owner can publish through the verified action log'
);
select is(
  (select publication_status from public.opportunities where id = '82000000-0000-4000-8000-000000000001'),
  'published',
  'the verified action publishes the opportunity'
);
select ok(
  (select published_at is not null from public.opportunities where id = '82000000-0000-4000-8000-000000000001'),
  'publishing records its timestamp'
);
select throws_ok(
  $$update public.opportunities
    set title = 'Stille Änderung am veröffentlichten Inhalt'
    where id = '82000000-0000-4000-8000-000000000001'$$,
  '42501',
  null,
  'published opportunity content cannot be silently edited'
);
select lives_ok(
  $$update public.opportunities
    set lifecycle_status = 'paused'
    where id = '82000000-0000-4000-8000-000000000001'$$,
  'the owner can pause a published opportunity'
);
select is(
  (select lifecycle_status from public.opportunities where id = '82000000-0000-4000-8000-000000000001'),
  'paused',
  'the paused lifecycle is stored'
);
select lives_ok(
  $$update public.opportunities
    set lifecycle_status = 'open'
    where id = '82000000-0000-4000-8000-000000000001'$$,
  'the owner can reopen a published opportunity'
);
select throws_ok(
  $$insert into public.opportunity_responses (opportunity_id, response_type, message)
    values ('82000000-0000-4000-8000-000000000001', 'help', 'Ich antworte mir selbst.')$$,
  '42501',
  null,
  'an owner cannot respond to their own opportunity'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000002';
set local role authenticated;

select lives_ok(
  $$insert into public.opportunity_responses (opportunity_id, response_type, message)
    values (
      '82000000-0000-4000-8000-000000000001',
      'participate',
      '  Ich würde gern beim ersten Gartentermin mitmachen.  '
    )$$,
  'another active member can send a private response'
);
select is(
  (select count(*) from public.opportunity_responses),
  1::bigint,
  'the responder sees exactly their own response'
);
select is(
  (select opportunity_owner_member_id from public.opportunity_responses limit 1),
  'MEM-RESONANCE-OWNER',
  'the trigger derives the opportunity owner identity'
);
select is(
  (select responder_member_id from public.opportunity_responses limit 1),
  'MEM-RESONANCE-RESPONDER',
  'the trigger derives the responder identity'
);
select is(
  (select status from public.opportunity_responses limit 1),
  'pending',
  'a new response starts pending'
);
select is(
  (select message from public.opportunity_responses limit 1),
  'Ich würde gern beim ersten Gartentermin mitmachen.',
  'the trigger stores a trimmed response message'
);
select throws_ok(
  $$insert into public.opportunity_responses (opportunity_id, response_type, message)
    values ('82000000-0000-4000-8000-000000000001', 'question', 'Noch eine Antwort')$$,
  '23505',
  null,
  'one member cannot create duplicate responses to one opportunity'
);
select throws_ok(
  $$insert into public.opportunity_response_messages (response_id, body)
    select id, 'Zu früh' from public.opportunity_responses limit 1$$,
  '42501',
  null,
  'the private message room stays closed while a response is pending'
);
select throws_ok(
  $$insert into public.opportunity_response_actions (response_id, target_status)
    select id, 'accepted' from public.opportunity_responses limit 1$$,
  '42501',
  null,
  'a responder cannot accept their own response'
);

reset role;
do $$
declare
  response_id uuid;
begin
  select id into response_id
  from public.opportunity_responses
  where opportunity_id = '82000000-0000-4000-8000-000000000001';
  perform set_config('test.resonance_response_id', response_id::text, true);
end;
$$;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000003';
set local role authenticated;

select is(
  (select count(*) from public.opportunity_responses),
  0::bigint,
  'an unrelated member cannot read the response'
);
select throws_ok(
  $$insert into public.opportunity_response_actions (response_id, target_status)
    values (current_setting('test.resonance_response_id')::uuid, 'declined')$$,
  '42501',
  null,
  'an unrelated member cannot change a response state'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000001';
set local role authenticated;

select is(
  (select count(*) from public.opportunity_responses),
  1::bigint,
  'the opportunity owner can read the incoming response'
);
select lives_ok(
  $$insert into public.opportunity_response_actions (response_id, target_status)
    select id, 'accepted' from public.opportunity_responses limit 1$$,
  'the opportunity owner can accept a pending response'
);
select is(
  (select status from public.opportunity_responses limit 1),
  'accepted',
  'acceptance opens the response state'
);
select is(
  (select actor_member_id from public.opportunity_response_actions limit 1),
  'MEM-RESONANCE-OWNER',
  'the action trigger derives the owner actor identity'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000002';
set local role authenticated;

select is(
  (select status from public.opportunity_responses limit 1),
  'accepted',
  'the responder sees the accepted state'
);
select lives_ok(
  $$insert into public.opportunity_response_messages (response_id, body)
    select id, 'Dienstagabend würde für mich passen.' from public.opportunity_responses limit 1$$,
  'the responder can write in an accepted private room'
);
select is(
  (select sender_member_id from public.opportunity_response_messages limit 1),
  'MEM-RESONANCE-RESPONDER',
  'the message trigger derives the sender identity'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000001';
set local role authenticated;

select is(
  (select count(*) from public.opportunity_response_messages),
  1::bigint,
  'the owner can read the responders private message'
);
select lives_ok(
  $$insert into public.opportunity_response_messages (response_id, body)
    select id, 'Dienstag passt – lass uns die Details hier klären.' from public.opportunity_responses limit 1$$,
  'the owner can answer in the accepted room'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000002';
set local role authenticated;

select is(
  (select count(*) from public.opportunity_response_messages),
  2::bigint,
  'the responder sees the shared private thread'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000003';
set local role authenticated;

select throws_ok(
  $$insert into public.opportunity_response_messages (response_id, body)
    values (current_setting('test.resonance_response_id')::uuid, 'Ich gehöre nicht hierher.')$$,
  '42501',
  null,
  'an unrelated member cannot enter the accepted private room'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000002';
set local role authenticated;

select lives_ok(
  $$insert into public.opportunity_response_actions (response_id, target_status)
    select id, 'withdrawn' from public.opportunity_responses limit 1$$,
  'the responder can withdraw an accepted response'
);
select is(
  (select status from public.opportunity_responses limit 1),
  'withdrawn',
  'withdrawal closes the response state'
);
select throws_ok(
  $$insert into public.opportunity_response_messages (response_id, body)
    select id, 'Diese Nachricht darf nicht mehr hinein.' from public.opportunity_responses limit 1$$,
  '42501',
  null,
  'no new message can be written after withdrawal'
);

reset role;
set local "request.jwt.claim.sub" = '81000000-0000-4000-8000-000000000001';
set local role authenticated;

select is(
  (select status from public.opportunity_responses limit 1),
  'withdrawn',
  'the owner sees the withdrawn state and preserved history'
);
select lives_ok(
  $$insert into public.publication_actions (target_kind, target_key, target_status)
    values ('opportunity', '82000000-0000-4000-8000-000000000001', 'draft')$$,
  'the owner can retract the opportunity through the verified action log'
);
select is(
  (select publication_status from public.opportunities where id = '82000000-0000-4000-8000-000000000001'),
  'draft',
  'the verified retraction restores draft state'
);
select ok(
  (select published_at is null from public.opportunities where id = '82000000-0000-4000-8000-000000000001'),
  'retraction clears the publication timestamp'
);

select * from finish();

rollback;
