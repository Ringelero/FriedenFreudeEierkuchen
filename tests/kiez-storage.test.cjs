const test = require('node:test');
const assert = require('node:assert/strict');
const api = require('../community/kieze/p-hain/storage-model.js');

test('kiez drafts validate event ordering and never accept ownership or publication values', () => {
  const values = api.draftValues('board', { title: '  Ein Hinweis  ', body: 'Text', owner_member_id: 'MEM-FOREIGN', visibility: 'public', publication_status: 'published' });
  assert.equal(values.entry_title, 'Ein Hinweis');
  assert.equal(values.entry_id, null);
  assert.equal(values.expected_version, null);
  assert.equal(values.entry_starts_at, null);
  assert.equal('owner_member_id' in values, false);
  assert.equal('visibility' in values, false);
  assert.throws(() => api.draftValues('event', { title: 'Termin' }), /Beginn/);
  assert.throws(() => api.draftValues('event', { title: 'Termin', starts_at: '2026-10-13T12:00:00Z', ends_at: '2026-10-13T11:00:00Z' }), /Ende/);
  assert.throws(() => api.draftValues('board', { title: 'x'.repeat(161) }), /Überschrift/);
});

test('existing draft edits carry the exact loaded version', async () => {
  const calls = [];
  const client = { rpc: async (name, args) => { calls.push({ name, args }); return { data: { id: 'entry', version: 8 }, error: null }; } };
  await api.saveDraft(client, 'board', { title: 'Neu' }, { id: 'entry', version: 7 });
  assert.equal(calls[0].name, 'save_kiez_entry');
  assert.equal(calls[0].args.expected_version, 7);
  assert.equal(calls[0].args.entry_id, 'entry');
  await api.changeEntry(client, { id: 'entry', version: 8 }, 'withdraw');
  assert.deepEqual(calls[1], { name: 'change_kiez_entry', args: { entry_id: 'entry', expected_version: 8, requested_action: 'withdraw' } });
  await assert.rejects(api.changeEntry(client, { id: 'entry', version: 8 }, 'give_permission'), /Unbekannte/);
});

test('public feed explicitly filters released rows, including for signed-in owners', async () => {
  const filters = [];
  const chain = { select() { return this; }, eq(...filter) { filters.push(filter); return this; }, order() { return this; }, limit() { return Promise.resolve({ data: [], error: null }); } };
  await api.publicEntries({ from: table => { assert.equal(table, 'kiez_entries'); return chain; } });
  assert.deepEqual(filters, [['kiez_id', 'KIEZ-P-HAIN'], ['visibility', 'public'], ['publication_status', 'published']]);
});

test('workspace identity comes from verified auth and server capabilities, not editable metadata', async () => {
  const calls = [];
  const client = { auth: { getUser: async () => ({ data: { user: { id: 'verified-user', user_metadata: { can_create_event: true, member_id: 'MEM-FOREIGN' } } }, error: null }) }, rpc: async (name, args) => { calls.push({ name, args }); return { data: { member_id: 'MEM-OWN', display_name: 'Test', can_create_event: false }, error: null }; } };
  const access = await api.workspace(client);
  assert.equal(access.user_id, 'verified-user');
  assert.equal(access.member_id, 'MEM-OWN');
  assert.equal(access.can_create_event, false);
  assert.deepEqual(calls[0], { name: 'get_kiez_workspace', args: { requested_kiez_id: 'KIEZ-P-HAIN' } });
});

test('signed-out visitors make no workspace or private list request', async () => {
  const client = { auth: { getUser: async () => ({ data: { user: null }, error: null }) }, rpc() { throw new Error('Unexpected private query'); } };
  assert.equal(await api.workspace(client), null);
  assert.deepEqual(await api.ownEntries(client, null), []);
});

test('unexpected foreign private rows and server errors fail closed', async () => {
  const client = { from() { return { select() { return this; }, eq() { return this; }, order() { return this; }, limit: async () => ({ data: [{ owner_member_id: 'MEM-FOREIGN' }], error: null }) }; } };
  await assert.rejects(api.ownEntries(client, { member_id: 'MEM-OWN' }), /fremder/);
  await assert.rejects(api.saveDraft({ rpc: async () => ({ data: null, error: new Error('offline') }) }, 'board', { title: 'Test' }), /offline/);
});
