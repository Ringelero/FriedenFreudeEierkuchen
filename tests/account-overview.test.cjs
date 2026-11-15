const assert = require('node:assert/strict');
const test = require('node:test');
const { nextEvent, synergyStates } = require('../konto/account-overview.js');

test('the next appointment skips past, unresolved and out-of-range entries', () => {
  const now = Date.parse('2026-11-15T09:00:00Z');
  const end = Date.parse('2026-12-15T09:00:00Z');
  const appointment = (starts_at, extra = {}) => ({ starts_at, title: 'Appointment', kind: 'event', ...extra });
  const next = appointment('2026-11-15T12:00:00Z');
  const events = [
    appointment('2026-11-16T09:00:00Z'), appointment('2026-11-15T08:00:00Z'),
    appointment('2026-11-15T10:00:00Z', { native_unexpanded: true }),
    appointment('2026-11-15T11:00:00Z', { kind: 'block' }),
    appointment('2026-12-15T09:00:00Z'), next
  ];
  assert.equal(nextEvent(events, now, end), next);
  assert.equal(nextEvent([events[4]], now, end), undefined);
});

test('request history matches both languages and never grants membership', () => {
  const artists = { id: 'SYN-KUENSTLER', public_path: '/community/synergien/kuenstler/' };
  const modern = { id: 'SYN-MODERNE', public_path: '/community/synergien/moderne/' };
  const witches = { id: 'SYN-HEXEN', public_path: '/community/synergien/hexen/' };
  assert.deepEqual(synergyStates([artists, modern, witches], [artists.id], [{ synergy_id: modern.id }], [
    { page_path: '/en' + artists.public_path, state: 'working' },
    { page_path: witches.public_path, state: 'done' }
  ]), [
    { group: artists, saved: true, confirmed: false, pending: true },
    { group: modern, saved: false, confirmed: true, pending: false }
  ]);
});
