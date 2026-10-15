const test = require('node:test');
const assert = require('node:assert/strict');
const api = require('../assets/service-meetings.js');
const serviceId = 'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
const values = () => ({ title: ' Spazieren ', body: 'Zusammen unterwegs', starts_at: '2026-11-10T16:00', ends_at: '2026-11-10T17:00',
  time_zone: 'Europe/Berlin', venue: 'Öffentlicher Treffpunkt', contact: 'Ansprechperson vor Ort', cost_note: 'Noch zu vereinbaren',
  participation_note: 'Abstand und Rückzug ermöglichen', capacity: '4' });

test('meeting dates use the selected venue timezone, including summer time and non-hour offsets', () => {
  assert.equal(api.zonedInstant('2026-11-10T16:00', 'Europe/Berlin'), '2026-11-10T15:00:00.000Z');
  assert.equal(api.zonedInstant('2026-07-10T16:00', 'Europe/Berlin'), '2026-07-10T14:00:00.000Z');
  assert.equal(api.zonedInstant('2026-11-10T16:00', 'Asia/Kathmandu'), '2026-11-10T10:15:00.000Z');
  assert.equal(api.localInput('2026-07-10T14:00:00Z', 'Europe/Berlin'), '2026-07-10T16:00');
  assert.throws(() => api.zonedInstant('2026-02-30T16:00', 'Europe/Berlin'), /gültiges Datum/);
});
test('ambiguous or nonexistent daylight-saving times are never silently moved', () => {
  assert.throws(() => api.zonedInstant('2026-03-29T02:30', 'Europe/Berlin'), /gibt es.*nicht/);
  assert.throws(() => api.zonedInstant('2026-10-25T02:30', 'Europe/Berlin'), /zweimal/);
});
test('meeting cards show a compact range in the venue timezone without losing a different end date', () => {
  const meeting = { starts_at: '2026-11-10T15:00:00Z', ends_at: '2026-11-10T16:00:00Z', time_zone: 'Europe/Berlin' };
  assert.match(api.timeRange(meeting), /10\.11\.2026, 16:00 – 17:00 MEZ/);
  assert.match(api.timeRange({ ...meeting, ends_at: '2026-11-11T16:00:00Z' }), /11\.11\.2026, 17:00/);
});
test('meeting drafts accept only event facts, never ownership, grants, publication or participants', () => {
  const payload = api.draftValues(serviceId, { ...values(), state: 'published', created_by: 'another-user', can_manage: true,
    provider_ids: ['KIEZ-P-HAIN'], attendees: ['MEM-OTHER'] });
  assert.deepEqual(Object.keys(payload).sort(), ['requested_service_id', 'meeting_id', 'expected_version', 'details'].sort());
  assert.equal(payload.requested_service_id, serviceId);
  assert.equal(payload.details.title, 'Spazieren');
  assert.equal(payload.details.capacity, 4);
  assert.equal(payload.details.starts_at, '2026-11-10T15:00:00.000Z');
  assert.equal(payload.details.state, undefined);
  assert.equal(payload.details.created_by, undefined);
  assert.equal(payload.details.attendees, undefined);
});
test('meetings need actual venue, contact, cost and conditions and preserve exact loaded version', () => {
  for (const field of ['venue', 'contact', 'cost_note', 'participation_note']) assert.throws(() => api.draftValues(serviceId, { ...values(), [field]: '' }));
  assert.throws(() => api.draftValues(serviceId, { ...values(), capacity: '2.5' }), /Plätze/);
  assert.throws(() => api.draftValues(serviceId, { ...values(), capacity: '0' }), /Plätze/);
  assert.throws(() => api.draftValues(serviceId, { ...values(), ends_at: '2026-11-10T15:00' }), /Ende/);
  assert.throws(() => api.draftValues(serviceId, values(), { id: 'meeting', version: 9, state: 'published' }), /Änderung/);
  const payload = api.draftValues(serviceId, { ...values(), change_note: 'Neuer Treffpunkt', capacity: '' }, { id: 'meeting', version: 9, state: 'published' });
  assert.equal(payload.expected_version, 9);
  assert.equal(payload.meeting_id, 'meeting');
  assert.equal(payload.details.capacity, null);
});
test('signed-out visitors never request a private workspace or roster', async () => {
  let privateCall = false;
  const client = { auth: { getUser: async () => ({ data: { user: null }, error: { name: 'AuthSessionMissingError' } }) }, rpc() { privateCall = true; } };
  assert.equal(await api.workspace(client, serviceId), null);
  assert.equal(privateCall, false);
});
test('verified session and server capabilities override editable identity and permission metadata', async () => {
  const client = { auth: { getUser: async () => ({ data: { user: { id: 'verified', user_metadata: { can_manage: true } } } }) },
    rpc: async (name, args) => { assert.equal(name, 'get_service_meeting_workspace'); assert.equal(args.requested_service_id, serviceId);
      return { data: { can_manage: false, can_join: true, registrations: [], managed_meetings: [] } }; } };
  assert.equal((await api.workspace(client, serviceId)).can_manage, false);
  assert.equal((await api.workspace(client, serviceId)).user_id, 'verified');
  client.rpc = async () => ({ data: { can_manage: true } });
  await assert.rejects(api.workspace(client, serviceId), /geprüft/);
});
test('join, withdrawal, edit and cancellation carry server versions and cannot target another participant', async () => {
  const calls = [];
  const client = { rpc: async (name, args) => { calls.push({ name, args }); return { data: {} }; } };
  const meeting = { id: 'meeting', version: 7, state: 'draft' };
  await api.register(client, meeting, 'attending');
  await api.register(client, meeting, 'withdrawn');
  assert.deepEqual(calls[0], { name: 'set_service_meeting_registration', args: { meeting_id: 'meeting', expected_version: 7, requested_state: 'attending' } });
  assert.equal(calls[1].args.requested_state, 'withdrawn');
  await api.change(client, meeting, 'cancel', 'Wetterbedingt');
  assert.equal(calls[2].args.expected_version, 7);
  assert.equal(calls[2].args.reason, 'Wetterbedingt');
  await api.save(client, serviceId, values(), meeting);
  assert.equal(calls[3].args.expected_version, 7);
  await assert.rejects(api.register(client, meeting, 'accept_foreign_member'), /Unbekannte/);
  await assert.rejects(api.change(client, meeting, 'grant'), /Unbekannte/);
  assert.equal(calls.length, 4);
});
test('a failed request remains an error and never becomes a successful empty calendar', async () => {
  const client = { rpc: async () => ({ data: null, error: { message: 'offline' } }) };
  await assert.rejects(api.publicMeetings(client, serviceId), { message: 'offline' });
  await assert.rejects(api.register(client, { id: 'meeting', version: 1 }, 'attending'), { message: 'offline' });
  await assert.rejects(api.roster(client, { id: 'meeting' }), { message: 'offline' });
});
