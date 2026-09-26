begin;

select plan(12);

insert into auth.users (id, email, raw_user_meta_data)
values (
  '91000000-0000-4000-8000-000000000001',
  'generic-member-page@example.invalid',
  '{"display_name":"Leni Test"}'::jsonb
);

update public.profiles
set stable_id = 'MEM-GENERIC-PAGE'
where id = '91000000-0000-4000-8000-000000000001';

select ok(
  has_function_privilege(
    'authenticated',
    'public.create_own_profile_page(text,text,jsonb)',
    'execute'
  ),
  'authenticated members can call the narrowly scoped page bootstrap'
);

select ok(
  not has_function_privilege(
    'anon',
    'public.create_own_profile_page(text,text,jsonb)',
    'execute'
  ),
  'anonymous visitors cannot call the page bootstrap'
);

set local "request.jwt.claim.sub" = '91000000-0000-4000-8000-000000000001';
set local role authenticated;

select throws_ok(
  $$select * from public.create_own_profile_page(
      'leni-test',
      'Leni Test',
      jsonb_build_object(
        'schema_version', '1.0.0',
        'id', 'PAGE-MEM-GENERIC-PAGE',
        'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-OTHER'),
        'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-GENERIC-PAGE')),
        'capability_context', jsonb_build_object(),
        'regions', jsonb_build_array()
      )
    )$$,
  '22023',
  null,
  'a caller cannot create a page document for another member subject'
);

select throws_ok(
  $$select * from public.create_own_profile_page(
      'leni-test',
      'Leni Test',
      jsonb_build_object(
        'schema_version', '1.0.0',
        'id', 'PAGE-MEM-GENERIC-PAGE',
        'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-GENERIC-PAGE'),
        'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-OTHER')),
        'capability_context', jsonb_build_object(),
        'regions', jsonb_build_array()
      )
    )$$,
  '22023',
  null,
  'a caller cannot bootstrap a page bound to another member'
);

select lives_ok(
  $$select * from public.create_own_profile_page(
      'leni-test',
      'Leni Test',
      jsonb_build_object(
        'schema_version', '1.0.0',
        'id', 'PAGE-MEM-GENERIC-PAGE',
        'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-GENERIC-PAGE'),
        'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-GENERIC-PAGE')),
        'capability_context', jsonb_build_object(),
        'regions', jsonb_build_array()
      )
    )$$,
  'a confirmed member can create exactly the own generic profile page'
);

select is(
  (select subject_id from public.page_documents where id = 'PAGE-MEM-GENERIC-PAGE'),
  'MEM-GENERIC-PAGE',
  'the page subject is derived from the authenticated profile'
);

select is(
  (select owner_user_id from public.page_documents where id = 'PAGE-MEM-GENERIC-PAGE'),
  '91000000-0000-4000-8000-000000000001'::uuid,
  'the page owner is derived from auth.uid()'
);

select is(
  (select revision_count from public.page_documents where id = 'PAGE-MEM-GENERIC-PAGE'),
  1::bigint,
  'generic page creation produces one immutable first revision'
);

select is(
  (
    select revision.document #>> '{subject,id}'
    from public.page_revisions as revision
    where revision.page_id = 'PAGE-MEM-GENERIC-PAGE'
  ),
  'MEM-GENERIC-PAGE',
  'the immutable first revision keeps the verified member subject'
);

select throws_ok(
  $$select * from public.save_page_revision(
      'PAGE-MEM-GENERIC-PAGE',
      jsonb_build_object(
        'schema_version', '1.0.0',
        'id', 'PAGE-MEM-GENERIC-PAGE',
        'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-OTHER'),
        'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-GENERIC-PAGE')),
        'capability_context', jsonb_build_object(),
        'regions', jsonb_build_array()
      ),
      (select draft_revision_id from public.page_documents where id = 'PAGE-MEM-GENERIC-PAGE'),
      'Manipuliertes Subjekt'
    )$$,
  '22023',
  null,
  'a later revision cannot replace the stable member subject'
);

select throws_ok(
  $$select * from public.save_page_revision(
      'PAGE-MEM-GENERIC-PAGE',
      jsonb_build_object(
        'schema_version', '1.0.0',
        'id', 'PAGE-MEM-GENERIC-PAGE',
        'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-GENERIC-PAGE'),
        'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-OTHER')),
        'capability_context', jsonb_build_object(),
        'regions', jsonb_build_array()
      ),
      (select draft_revision_id from public.page_documents where id = 'PAGE-MEM-GENERIC-PAGE'),
      'Manipulierte Bindung'
    )$$,
  '22023',
  null,
  'a later revision cannot bind the page to another member'
);

select throws_ok(
  $$select * from public.create_own_profile_page(
      'leni-test-two',
      'Leni Test Zwei',
      jsonb_build_object(
        'schema_version', '1.0.0',
        'id', 'PAGE-MEM-GENERIC-PAGE',
        'subject', jsonb_build_object('kind', 'member', 'id', 'MEM-GENERIC-PAGE'),
        'bindings', jsonb_build_object('member', jsonb_build_object('kind', 'entity', 'id', 'MEM-GENERIC-PAGE')),
        'capability_context', jsonb_build_object(),
        'regions', jsonb_build_array()
      )
    )$$,
  '23505',
  null,
  'a member cannot create a second page for the same stable identity'
);

reset role;
select * from finish();
rollback;
