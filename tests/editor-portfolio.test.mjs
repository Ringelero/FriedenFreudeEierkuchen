import test from 'node:test';
import assert from 'node:assert/strict';
import { loadOwnPortfolio, portfolioCommunity, portfolioCounts, profileIsPublic, emptyPortfolio } from '../editor-src/src/editor-portfolio.mjs';

const memberId = 'MEM-TEST';
const profile = { id: 'verified-user', stable_id: memberId, display_name: 'Testmitglied', account_status: 'active', visibility: 'members', publication_status: 'draft' };
const privateDraft = { member_id: memberId, visibility: 'private', publication_status: 'draft' };
const publicEntry = { member_id: memberId, visibility: 'public', publication_status: 'published' };
function fixture(options = {}) {
  const calls = [];
  const tables = {
    profiles: options.profile === undefined ? profile : options.profile,
    profile_fields: [{ ...privateDraft, field_key: 'bio', value_text: 'Privater Testtext' }, { ...publicEntry, field_key: 'tagline', value_text: 'Freigegebener Testtext' }, { ...privateDraft, field_key: 'location', value_text: 'Archiv', publication_status: 'archived' }],
    profile_skills: [{ ...privateDraft, skill_id: 'SKILL-TEST', statement: 'Private Fähigkeit', boundaries: 'Meine Grenze' }],
    skills: [{ id: 'SKILL-TEST', name: 'Testfähigkeit', description: 'Katalog', branch: 'Kunst' }],
    skill_evidence: [{ ...privateDraft, stable_id: 'EVID-TEST', title: 'Privater Nachweis', description: 'Ein Test', evidence_type: 'work_sample', verification_status: 'self_reported' }],
    projects: [{ owner_member_id: memberId, visibility: 'private', publication_status: 'draft', stable_id: 'PROJECT-TEST', title: 'Privates Projekt', summary: 'Ein Testprojekt' }],
    ...options.tables
  };
  const client = {
    auth: { getUser: async () => options.auth || { data: { user: { id: 'verified-user', user_metadata: { stable_id: 'MEM-FOREIGN' } } }, error: null } },
    from(table) {
      const call = { table, filters: [] }; calls.push(call);
      const chain = {
        select() { return this; }, eq(key, value) { call.filters.push([key, value]); return this; }, order() { return this; },
        maybeSingle() { return this; },
        then(resolve, reject) { return Promise.resolve({ data: tables[table], error: options.failTable === table ? { message: 'offline' } : null }).then(resolve, reject); }
      };
      return chain;
    }
  };
  return { client, calls };
}

test('own portfolio uses verified identity, owner filters and excludes archived entries', async () => {
  const { client, calls } = fixture();
  const portfolio = await loadOwnPortfolio(client, memberId);
  assert.equal(portfolio.fields.length, 2);
  assert.deepEqual(calls[0].filters, [['id', 'verified-user'], ['stable_id', memberId]]);
  for (const call of calls.filter(row => !['profiles', 'skills'].includes(row.table))) {
    assert.deepEqual(call.filters, [[call.table === 'projects' ? 'owner_member_id' : 'member_id', memberId]]);
  }
});

test('signed-out users trigger no profile or private portfolio query', async () => {
  const { client, calls } = fixture({ auth: { data: { user: null }, error: null } });
  await assert.rejects(loadOwnPortfolio(client, memberId), /melde dich/);
  assert.equal(calls.length, 0);
});

test('foreign or inactive profiles trigger no portfolio query', async () => {
  for (const change of [{ id: 'foreign-user' }, { stable_id: 'MEM-FOREIGN' }, { account_status: 'suspended' }]) {
    const { client, calls } = fixture({ profile: { ...profile, ...change } });
    await assert.rejects(loadOwnPortfolio(client, memberId), /aktiven Profil/);
    assert.equal(calls.length, 1);
  }
});

test('private query errors fail without a prototype fallback', async () => {
  const { client } = fixture({ failTable: 'profile_fields' });
  await assert.rejects(loadOwnPortfolio(client, memberId), /nicht geladen/);
});

test('unexpected foreign rows fail closed', async () => {
  for (const tables of [{ profile_fields: [{ ...privateDraft, member_id: 'MEM-FOREIGN' }] }, { projects: [{ owner_member_id: 'MEM-FOREIGN' }] }]) {
    await assert.rejects(loadOwnPortfolio(fixture({ tables }).client, memberId), /fremd/);
  }
});

test('own preview hydrates fields, skills, evidence and projects without repository prototype content', async () => {
  const portfolio = await loadOwnPortfolio(fixture().client, memberId);
  const base = { members: [{ id: memberId, bio: 'Old fake text', dynasty_ids: ['DYNASTY-FAKE'] }], skills: [{ id: 'SKILL-FAKE' }], evidence: [], projects: [] };
  const community = portfolioCommunity(base, portfolio);
  assert.equal(community.members[0].bio, 'Privater Testtext');
  assert.deepEqual(community.members[0].dynasty_ids, []);
  assert.deepEqual(community.members[0].skill_ids, ['SKILL-TEST']);
  assert.equal(community.skills[0].description, 'Private Fähigkeit');
  assert.equal(community.skills[0].safety, 'Meine Grenze');
  assert.equal(community.evidence[0].verification, 'self-reported');
  assert.equal(community.projects[0].title, 'Privates Projekt');
  assert.equal(base.members[0].bio, 'Old fake text');
  assert.deepEqual(portfolioCounts(portfolio), { fields: 2, skills: 1, evidence: 1, projects: 1 });
});

test('visitor source requires both public visibility and published status per entry', async () => {
  const portfolio = await loadOwnPortfolio(fixture({ tables: { profile_fields: [
    { ...privateDraft, field_key: 'bio', value_text: 'Private' },
    { ...publicEntry, field_key: 'tagline', value_text: 'Public' },
    { ...publicEntry, visibility: 'members', field_key: 'location', value_text: 'Members only' },
    { ...publicEntry, publication_status: 'draft', field_key: 'availability_note', value_text: 'Public draft' }
  ] } }).client, memberId);
  const community = portfolioCommunity({}, portfolio, true);
  assert.equal(community.members[0].tagline, 'Public');
  assert.equal(community.members[0].bio, '');
  assert.equal(community.members[0].location, '');
  assert.equal(community.members[0].availability_note, '');
  assert.deepEqual(community.skills, []);
  assert.deepEqual(community.evidence, []);
  assert.deepEqual(community.projects, []);
  assert.deepEqual(portfolioCounts(portfolio, true), { fields: 1, skills: 0, evidence: 0, projects: 0 });
});

test('overall visitor gate requires an active, public and published profile', () => {
  const open = { ...profile, visibility: 'public', publication_status: 'published' };
  assert.equal(profileIsPublic(open), true);
  for (const change of [{ visibility: 'members' }, { publication_status: 'draft' }, { account_status: 'suspended' }]) assert.equal(profileIsPublic({ ...open, ...change }), false);
});

test('playground portfolio contains no personal entries', () => {
  const portfolio = emptyPortfolio('MEM-VORSCHAU', 'Deine kleine Welt');
  assert.equal(profileIsPublic(portfolio.profile), false);
  assert.deepEqual(portfolioCounts(portfolio), { fields: 0, skills: 0, evidence: 0, projects: 0 });
  assert.equal(portfolioCommunity({}, portfolio).members[0].bio, '');
});
