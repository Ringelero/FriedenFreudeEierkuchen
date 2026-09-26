const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  buildPublicationItems,
  profileIsLive,
  publicationState,
  setOwnPortfolioPublication,
  setOwnProfilePublication,
  summarizePublication
} = require('../konto/publication-center.js');

function actionClient(calls, resultFactory) {
  return {
    from(table) {
      assert.equal(table, 'publication_actions');
      return {
        insert(payload) {
          calls.push(payload);
          return {
            select(columns) {
              assert.match(columns, /result_publication_status/);
              return {
                single: async () => ({ data: resultFactory(payload), error: null })
              };
            }
          };
        }
      };
    }
  };
}

test('a profile is live only when account, visibility and publication gates are open', () => {
  const open = {
    account_status: 'active',
    visibility: 'public',
    publication_status: 'published'
  };
  assert.equal(profileIsLive(open), true);
  assert.equal(profileIsLive({ ...open, visibility: 'members' }), false);
  assert.equal(profileIsLive({ ...open, publication_status: 'draft' }), false);
  assert.equal(profileIsLive({ ...open, account_status: 'paused' }), false);
});

test('item states distinguish live, staged, ready and excluded content', () => {
  const liveProfile = { account_status: 'active', visibility: 'public', publication_status: 'published' };
  const closedProfile = { ...liveProfile, publication_status: 'draft' };
  assert.equal(publicationState({ visibility: 'public', publication_status: 'published' }, liveProfile), 'live');
  assert.equal(publicationState({ visibility: 'public', publication_status: 'published' }, closedProfile), 'staged');
  assert.equal(publicationState({ visibility: 'public', publication_status: 'draft' }, liveProfile), 'ready');
  assert.equal(publicationState({ visibility: 'private', publication_status: 'draft' }, liveProfile), 'excluded');
  assert.equal(publicationState({ visibility: 'public', publication_status: 'archived' }, liveProfile), 'archived');
});

test('the publication preview model covers fields, skills, evidence, projects and opportunities', () => {
  const items = buildPublicationItems({
    catalog: [{ id: 'SKILL-TEST', name: 'Sicher testen', description: 'Testbeschreibung' }],
    fields: [{ field_key: 'bio', value_text: 'Eine öffentliche Bio', visibility: 'public', publication_status: 'draft', sort_order: 10 }],
    profileSkills: [{ id: '11111111-1111-4111-8111-111111111111', skill_id: 'SKILL-TEST', statement: '', boundaries: '', visibility: 'public', publication_status: 'published', sort_order: 10 }],
    evidence: [{ id: '22222222-2222-4222-8222-222222222222', title: 'Testnachweis', description: 'Kontext', verification_status: 'self_reported', visibility: 'private', publication_status: 'draft' }],
    projects: [{ id: '33333333-3333-4333-8333-333333333333', title: 'Testprojekt', summary: 'Projektkontext', role_summary: '', lifecycle_status: 'active', visibility: 'public', publication_status: 'published', sort_order: 10 }],
    opportunities: [{ id: '44444444-4444-4444-8444-444444444444', title: 'Testmöglichkeit', summary: 'Gemeinsam etwas klären', lifecycle_status: 'open', visibility: 'public', publication_status: 'draft' }]
  });

  assert.deepEqual(items.map(item => item.kind), [
    'profile_field',
    'profile_skill',
    'skill_evidence',
    'project',
    'opportunity'
  ]);
  assert.equal(items[0].title, 'Über mich');
  assert.equal(items[1].title, 'Sicher testen');

  const summary = summarizePublication(items, {
    account_status: 'active',
    visibility: 'public',
    publication_status: 'draft'
  });
  assert.deepEqual(summary, { live: 0, staged: 2, ready: 2, excluded: 1, archived: 0 });
});

test('profile publication appends only a narrow authenticated action', async () => {
  const calls = [];
  const client = actionClient(calls, payload => ({
    ...payload,
    member_id: 'MEM-JULIUS',
    result_visibility: 'public',
    result_publication_status: 'published',
    result_published_at: '2026-09-25T18:00:00Z'
  }));

  const result = await setOwnProfilePublication(client, 'published');
  assert.equal(result.publication_status, 'published');
  assert.deepEqual(calls, [{
    target_kind: 'profile',
    target_key: 'self',
    target_status: 'published'
  }]);
  assert.equal('actor_user_id' in calls[0], false);
  assert.equal('member_id' in calls[0], false);
});

test('portfolio publication appends kind, key and status without an owner identity', async () => {
  const calls = [];
  const client = actionClient(calls, payload => ({
    ...payload,
    member_id: 'MEM-JULIUS',
    result_visibility: 'public',
    result_publication_status: payload.target_status
  }));

  await setOwnPortfolioPublication(client, {
    kind: 'project',
    key: '33333333-3333-4333-8333-333333333333',
    status: 'draft'
  });
  assert.deepEqual(calls, [{
    target_kind: 'project',
    target_key: '33333333-3333-4333-8333-333333333333',
    target_status: 'draft'
  }]);
  assert.equal('owner_member_id' in calls[0], false);
});

test('opportunity publication uses the same narrow action log', async () => {
  const calls = [];
  const client = actionClient(calls, payload => ({
    ...payload,
    member_id: 'MEM-JULIUS',
    result_visibility: 'public',
    result_publication_status: payload.target_status
  }));

  await setOwnPortfolioPublication(client, {
    kind: 'opportunity',
    key: '44444444-4444-4444-8444-444444444444',
    status: 'published'
  });
  assert.deepEqual(calls, [{
    target_kind: 'opportunity',
    target_key: '44444444-4444-4444-8444-444444444444',
    target_status: 'published'
  }]);
});

test('invalid publication commands are blocked before an action write', async () => {
  let calls = 0;
  const client = { from: () => { calls += 1; throw new Error('must not be called'); } };
  await assert.rejects(
    setOwnPortfolioPublication(client, { kind: 'permission_grant', key: 'x', status: 'published' }),
    /Art von Portfolioeintrag/
  );
  await assert.rejects(setOwnProfilePublication(client, 'archived'), /Veröffentlichungsstatus/);
  assert.equal(calls, 0);
});

test('the account loads the publication center before its controller', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'konto', 'index.html'), 'utf8');
  assert.match(html, /id="publication-center"/);
  assert.match(html, /Öffentliche Vorschau/);
  assert.ok(html.indexOf('./publication-center.js') < html.indexOf('./konto.js'));
});

test('the migration keeps privileged logic in an uncallable trigger and revokes direct profile publication', () => {
  const sql = fs.readFileSync(
    path.join(__dirname, '..', 'supabase', 'migrations', '20260925175420_publication_center.sql'),
    'utf8'
  );
  assert.match(sql, /revoke update \(publication_status\).*public\.profiles.*authenticated/is);
  assert.match(sql, /create table public\.publication_actions/i);
  assert.match(sql, /function ffe_private\.process_publication_action[\s\S]+security definer/i);
  assert.match(sql, /revoke all on function ffe_private\.process_publication_action\(\)[\s\S]+authenticated/i);
  assert.doesNotMatch(sql, /function public\.set_own_/i);
  assert.match(sql, /auth\.uid\(\)/);
});
