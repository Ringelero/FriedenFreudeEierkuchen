const assert = require('node:assert/strict');
const test = require('node:test');
const { synergyStates } = require('../konto/account-overview.js');

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
