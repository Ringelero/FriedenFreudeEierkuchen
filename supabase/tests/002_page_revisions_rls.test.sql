begin;

select plan(52);

insert into auth.users (id, email, raw_user_meta_data)
values
  (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'page-owner@example.invalid',
    '{"display_name":"Seiteninhaber"}'::jsonb
  ),
  (
    'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    'kiez-manager@example.invalid',
    '{"display_name":"Kiezverwaltung"}'::jsonb
  ),
  (
    'cccccccc-cccc-cccc-cccc-cccccccccccc',
    'other-member@example.invalid',
    '{"display_name":"Anderes Mitglied"}'::jsonb
  ),
  (
    'dddddddd-dddd-dddd-dddd-dddddddddddd',
    'unconfirmed-member@example.invalid',
    '{"display_name":"Noch ohne ID"}'::jsonb
  );

update public.profiles
set stable_id = case id
  when 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa' then 'MEM-OWNER'
  when 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb' then 'MEM-MANAGER'
  when 'cccccccc-cccc-cccc-cccc-cccccccccccc' then 'MEM-OUTSIDER'
end
where id in (
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'cccccccc-cccc-cccc-cccc-cccccccccccc'
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
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'manage_kiez',
  'kiez',
  'KIEZ-P-HAIN',
  'Page-RLS-Test',
  'Nur innerhalb der zurückgerollten Testtransaktion'
);

insert into public.page_documents (
  id,
  subject_kind,
  subject_id,
  owner_user_id,
  scope_type,
  scope_id,
  slug,
  title,
  visibility,
  publication_status,
  created_by_user_id,
  last_edited_by_user_id
)
values
  (
    'PAGE-MEM-OWNER',
    'member',
    'MEM-OWNER',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'profile',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'owner',
    'Eigene Seite',
    'public',
    'draft',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'
  ),
  (
    'PAGE-KIEZ-P-HAIN-TEST',
    'kiez',
    'KIEZ-P-HAIN',
    null,
    'kiez',
    'KIEZ-P-HAIN',
    'p-hain-test',
    'P-Hain Testseite',
    'private',
    'draft',
    null,
    null
  );

create temporary table page_test_documents (
  name text primary key,
  document jsonb not null
);

insert into page_test_documents (name, document)
values
  (
    'owner-v1',
    jsonb_build_object(
      'schema_version', '1.0.0',
      'id', 'PAGE-MEM-OWNER',
      'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-OWNER'),
      'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-OWNER')),
      'capability_context', jsonb_build_object(),
      'regions', jsonb_build_array(jsonb_build_object('id', 'main', 'layout', 'flow', 'modules', jsonb_build_array())),
      'test_value', 1
    )
  ),
  (
    'owner-v2',
    jsonb_build_object(
      'schema_version', '1.0.0',
      'id', 'PAGE-MEM-OWNER',
      'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-OWNER'),
      'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-OWNER')),
      'capability_context', jsonb_build_object(),
      'regions', jsonb_build_array(jsonb_build_object('id', 'main', 'layout', 'flow', 'modules', jsonb_build_array())),
      'test_value', 2
    )
  ),
  (
    'owner-v3',
    jsonb_build_object(
      'schema_version', '1.0.0',
      'id', 'PAGE-MEM-OWNER',
      'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-OWNER'),
      'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-OWNER')),
      'capability_context', jsonb_build_object(),
      'regions', jsonb_build_array(jsonb_build_object('id', 'main', 'layout', 'flow', 'modules', jsonb_build_array())),
      'test_value', 3
    )
  ),
  (
    'wrong-page',
    jsonb_build_object(
      'schema_version', '1.0.0',
      'id', 'PAGE-WRONG',
      'capability_context', jsonb_build_object(),
      'regions', jsonb_build_array()
    )
  ),
  (
    'wrong-schema',
    jsonb_build_object(
      'schema_version', '2.0.0',
      'id', 'PAGE-MEM-OWNER',
      'capability_context', jsonb_build_object(),
      'regions', jsonb_build_array()
    )
  ),
  (
    'kiez-v1',
    jsonb_build_object(
      'schema_version', '1.0.0',
      'id', 'PAGE-KIEZ-P-HAIN-TEST',
      'subject', jsonb_build_object('kind', 'kiez', 'id', 'KIEZ-P-HAIN'),
      'capability_context', jsonb_build_object(),
      'regions', jsonb_build_array(jsonb_build_object('id', 'main', 'layout', 'flow', 'modules', jsonb_build_array()))
    )
  ),
  (
    'outsider-v1',
    jsonb_build_object(
      'schema_version', '1.0.0',
      'id', 'PAGE-MEM-OUTSIDER',
      'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-OUTSIDER'),
      'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-OUTSIDER')),
      'capability_context', jsonb_build_object(),
      'regions', jsonb_build_array(jsonb_build_object('id', 'main', 'layout', 'flow', 'modules', jsonb_build_array()))
    )
  );

create temporary table page_test_state (
  name text primary key,
  id uuid not null,
  revision_number bigint
);

grant select on page_test_documents to authenticated;
grant select, insert, update on page_test_state to authenticated;
grant select on page_test_state to anon;

select ok(
  (select relrowsecurity from pg_class where oid = 'public.page_documents'::regclass),
  'page_documents has RLS enabled'
);
select ok(
  (select relrowsecurity from pg_class where oid = 'public.page_revisions'::regclass),
  'page_revisions has RLS enabled'
);
select ok(
  has_table_privilege('anon', 'public.page_documents', 'select'),
  'anon may query page document metadata through RLS'
);
select ok(
  has_table_privilege('anon', 'public.page_revisions', 'select'),
  'anon may query published revisions through RLS'
);
select ok(
  not has_table_privilege('anon', 'public.page_documents', 'insert,update,delete'),
  'anon receives no page document write privilege'
);
select ok(
  not has_table_privilege('authenticated', 'public.page_documents', 'insert,update,delete'),
  'authenticated clients cannot mutate page document pointers directly'
);
select ok(
  not has_table_privilege('authenticated', 'public.page_revisions', 'insert,update,delete'),
  'authenticated clients cannot mutate revisions directly'
);
select ok(
  has_function_privilege('authenticated', 'public.save_page_revision(text,jsonb,uuid,text)', 'execute'),
  'authenticated users may call the checked save RPC'
);
select ok(
  not has_function_privilege('anon', 'public.save_page_revision(text,jsonb,uuid,text)', 'execute'),
  'anon cannot call the save RPC'
);

set local role anon;

select is(
  (select count(*) from public.page_documents),
  0::bigint,
  'anon cannot see draft pages'
);

reset role;
set local "request.jwt.claim.sub" = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
set local role authenticated;

select results_eq(
  $$select id from public.page_documents order by id$$,
  array['PAGE-MEM-OWNER'::text],
  'a page owner sees the own draft but not an unrelated Kiez draft'
);

select lives_ok(
  $$insert into page_test_state (name, id, revision_number)
    select 'owner-v1', revision_id, revision_number
    from public.save_page_revision(
      'PAGE-MEM-OWNER',
      (select document from page_test_documents where name = 'owner-v1'),
      null,
      'Erste Revision'
    )$$,
  'the owner can save the first immutable revision'
);

select is(
  (select revision_number from page_test_state where name = 'owner-v1'),
  1::bigint,
  'the first revision receives number one'
);
select is(
  (select draft_revision_id from public.page_documents where id = 'PAGE-MEM-OWNER'),
  (select id from page_test_state where name = 'owner-v1'),
  'the draft pointer moves to the first revision'
);
select is(
  (select created_by_user_id from public.page_revisions where id = (select id from page_test_state where name = 'owner-v1')),
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'::uuid,
  'revision provenance records the authenticated user'
);
select ok(
  not coalesce(
    (
      select new_row ? 'document'
      from public.audit_events
      where entity_type = 'page_revision'
        and entity_id = (select id::text from page_test_state where name = 'owner-v1')
      order by id desc
      limit 1
    ),
    true
  ),
  'the audit event stores revision provenance but not a second content copy'
);
select throws_ok(
  $$update public.page_documents set title = 'Direkt geändert' where id = 'PAGE-MEM-OWNER'$$,
  '42501',
  null,
  'the owner cannot bypass the RPC and update page pointers directly'
);
select throws_ok(
  $$insert into public.page_revisions (
      page_id, revision_number, schema_version, document, created_by_authority
    ) values (
      'PAGE-MEM-OWNER', 99, '1.0.0',
      (select document from page_test_documents where name = 'owner-v1'),
      'browser-bypass'
    )$$,
  '42501',
  null,
  'the owner cannot insert revisions directly'
);
select throws_ok(
  $$select * from public.save_page_revision(
      'PAGE-MEM-OWNER',
      (select document from page_test_documents where name = 'owner-v2'),
      null,
      'Veralteter Stand'
    )$$,
  '40001',
  null,
  'a stale draft pointer is rejected'
);
select throws_ok(
  $$select * from public.save_page_revision(
      'PAGE-MEM-OWNER',
      (select document from page_test_documents where name = 'wrong-page'),
      (select id from page_test_state where name = 'owner-v1'),
      'Falsche Identität'
    )$$,
  '22023',
  null,
  'a document cannot switch its stable page identity'
);
select throws_ok(
  $$select * from public.save_page_revision(
      'PAGE-MEM-OWNER',
      (select document from page_test_documents where name = 'wrong-schema'),
      (select id from page_test_state where name = 'owner-v1'),
      'Falsches Schema'
    )$$,
  '22023',
  null,
  'an unsupported page schema is rejected'
);
select lives_ok(
  $$insert into page_test_state (name, id, revision_number)
    select 'owner-v2', revision_id, revision_number
    from public.save_page_revision(
      'PAGE-MEM-OWNER',
      (select document from page_test_documents where name = 'owner-v2'),
      (select id from page_test_state where name = 'owner-v1'),
      'Zweite Revision'
    )$$,
  'the owner can save a successor revision'
);
select is(
  (select revision_number from page_test_state where name = 'owner-v2'),
  2::bigint,
  'the successor revision is numbered monotonically'
);
select is(
  (select based_on_revision_id from public.page_revisions where id = (select id from page_test_state where name = 'owner-v2')),
  (select id from page_test_state where name = 'owner-v1'),
  'the successor binds to its exact predecessor'
);
select is(
  (select count(*) from public.page_revisions where page_id = 'PAGE-MEM-OWNER'),
  2::bigint,
  'both immutable revisions remain present'
);
select throws_ok(
  $$select * from public.publish_page_revision(
      'PAGE-MEM-OWNER',
      (select id from page_test_state where name = 'owner-v1'),
      null
    )$$,
  '22023',
  null,
  'an older revision cannot be published over the current draft'
);
select lives_ok(
  $$select * from public.publish_page_revision(
      'PAGE-MEM-OWNER',
      (select id from page_test_state where name = 'owner-v2'),
      null
    )$$,
  'the current checked draft can be published'
);
select is(
  (select publication_status from public.page_documents where id = 'PAGE-MEM-OWNER'),
  'published',
  'publishing changes the page status'
);
select is(
  (select published_revision_id from public.page_documents where id = 'PAGE-MEM-OWNER'),
  (select id from page_test_state where name = 'owner-v2'),
  'the public pointer references revision two'
);
select ok(
  (select published_at is not null from public.page_documents where id = 'PAGE-MEM-OWNER'),
  'publishing records its time'
);
select lives_ok(
  $$insert into page_test_state (name, id, revision_number)
    select 'owner-v3', revision_id, revision_number
    from public.save_page_revision(
      'PAGE-MEM-OWNER',
      (select document from page_test_documents where name = 'owner-v3'),
      (select id from page_test_state where name = 'owner-v2'),
      'Neuer unveröffentlichter Entwurf'
    )$$,
  'a new draft can be saved without replacing the public revision'
);
select is(
  (select draft_revision_id from public.page_documents where id = 'PAGE-MEM-OWNER'),
  (select id from page_test_state where name = 'owner-v3'),
  'the draft pointer advances to revision three'
);
select is(
  (select published_revision_id from public.page_documents where id = 'PAGE-MEM-OWNER'),
  (select id from page_test_state where name = 'owner-v2'),
  'the public pointer remains on revision two'
);
select is(
  (select count(*) from public.page_revisions where page_id = 'PAGE-MEM-OWNER'),
  3::bigint,
  'the owner can see all three own revisions'
);

reset role;
set local role anon;

select results_eq(
  $$select id from public.page_documents order by id$$,
  array['PAGE-MEM-OWNER'::text],
  'anon sees the published public page metadata'
);
select results_eq(
  $$select id from public.page_revisions order by revision_number$$,
  array[(select id from page_test_state where name = 'owner-v2')],
  'anon sees exactly the published revision'
);
select is(
  (select count(*) from public.page_revisions),
  1::bigint,
  'anon cannot infer older or newer drafts'
);

reset role;
set local "request.jwt.claim.sub" = 'cccccccc-cccc-cccc-cccc-cccccccccccc';
set local role authenticated;

select results_eq(
  $$select id from public.page_documents order by id$$,
  array['PAGE-MEM-OWNER'::text],
  'another member sees only the published public page'
);
select throws_ok(
  $$select * from public.save_page_revision(
      'PAGE-MEM-OWNER',
      (select document from page_test_documents where name = 'owner-v3'),
      (select id from page_test_state where name = 'owner-v3'),
      'Fremder Versuch'
    )$$,
  '42501',
  null,
  'another member cannot save to the owner page'
);
select is(
  (select count(*) from public.page_documents where id = 'PAGE-KIEZ-P-HAIN-TEST'),
  0::bigint,
  'another member cannot see the private Kiez draft'
);

reset role;
set local "request.jwt.claim.sub" = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';
set local role authenticated;

select is(
  (select count(*) from public.page_documents where id = 'PAGE-KIEZ-P-HAIN-TEST'),
  1::bigint,
  'the scoped Kiez manager can see the Kiez draft'
);
select lives_ok(
  $$insert into page_test_state (name, id, revision_number)
    select 'kiez-v1', revision_id, revision_number
    from public.save_page_revision(
      'PAGE-KIEZ-P-HAIN-TEST',
      (select document from page_test_documents where name = 'kiez-v1'),
      null,
      'Kiezrevision'
    )$$,
  'the scoped Kiez manager can save a Kiez revision'
);
select lives_ok(
  $$select * from public.publish_page_revision(
      'PAGE-KIEZ-P-HAIN-TEST',
      (select id from page_test_state where name = 'kiez-v1'),
      null
    )$$,
  'the scoped Kiez manager can publish the current Kiez draft'
);
select ok(
  (select count(*) > 0 from public.audit_events where entity_type = 'page_revision' and scope_id = 'KIEZ-P-HAIN'),
  'the scoped Kiez manager can read the relevant page revision audit trail'
);

reset role;
set local "request.jwt.claim.sub" = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
set local role authenticated;

select is(
  (select count(*) from public.page_documents where id = 'PAGE-KIEZ-P-HAIN-TEST'),
  0::bigint,
  'a profile owner receives no implicit Kiez page access'
);

reset role;
set local "request.jwt.claim.sub" = 'dddddddd-dddd-dddd-dddd-dddddddddddd';
set local role authenticated;

select throws_ok(
  $$select * from public.create_own_profile_page(
      'unconfirmed',
      'Noch nicht bestätigt',
      jsonb_build_object(
        'schema_version', '1.0.0',
        'id', 'PAGE-MEM-UNCONFIRMED',
        'capability_context', jsonb_build_object(),
        'regions', jsonb_build_array()
      )
    )$$,
  '42501',
  null,
  'a profile without authorized stable ID cannot create a public identity page'
);

reset role;
set local "request.jwt.claim.sub" = 'cccccccc-cccc-cccc-cccc-cccccccccccc';
set local role authenticated;

select lives_ok(
  $$insert into page_test_state (name, id, revision_number)
    select 'outsider-v1', revision_id, revision_number
    from public.create_own_profile_page(
      'outsider',
      'Eigene neue Seite',
      (select document from page_test_documents where name = 'outsider-v1')
    )$$,
  'a confirmed member can create exactly the own profile page and first revision'
);
select results_eq(
  $$select scope_type || ':' || scope_id
    from public.page_documents
    where id = 'PAGE-MEM-OUTSIDER'$$,
  array['profile:cccccccc-cccc-cccc-cccc-cccccccccccc'::text],
  'the created profile page is bound to the caller rather than a claimed title'
);
select is(
  (select revision_count from public.page_documents where id = 'PAGE-MEM-OUTSIDER'),
  1::bigint,
  'profile page creation produces one immutable initial revision'
);
select throws_ok(
  $$select * from public.create_own_profile_page(
      'outsider-two',
      'Zweite Seite',
      (select document from page_test_documents where name = 'outsider-v1')
    )$$,
  '23505',
  null,
  'a member cannot silently create a second page with the same stable identity'
);

reset role;

select throws_ok(
  $$update public.page_revisions
    set change_summary = 'Nachträglich verändert'
    where id = (select id from page_test_state where name = 'owner-v1')$$,
  'P0001',
  null,
  'even a privileged SQL path cannot update an immutable revision'
);
select throws_ok(
  $$delete from public.page_revisions
    where id = (select id from page_test_state where name = 'owner-v1')$$,
  'P0001',
  null,
  'even a privileged SQL path cannot delete an immutable revision'
);

select * from finish();
rollback;
