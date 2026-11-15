const test = require('node:test');
const assert = require('node:assert/strict');
const api = require('../assets/opportunity-entry.js');

test('signal entry reads only known signal and place choices, never identity or publication data', () => {
  const entry = api.readEntry('?signal=have&from=p-hain&owner_member_id=MEM-OTHER&visibility=public&summary=private');
  assert.deepEqual(entry, { signal: 'have', label: 'Ich habe', from: 'p-hain' });
  for (const signal of ['have', 'can', 'need', 'time', 'chance']) assert.equal(api.readEntry(`?signal=${signal}`).signal, signal);
  assert.equal(api.readEntry('?signal=constructor'), null);
  assert.equal(api.readEntry('?signal=need&signal=have'), null);
  assert.equal(api.readEntry('?signal=%3Cscript%3E'), null);
  assert.equal(api.readEntry('?signal=need&from=https://example.invalid').from, null);
});

test('entry links stay on the account route and contain only whitelisted selection metadata', () => {
  assert.equal(api.accountHref('need', 'p-hain'), '/konto/?signal=need&from=p-hain#opportunity-workspace');
  assert.equal(api.accountHref('javascript:alert(1)', 'https://example.invalid'), '/konto/#opportunity-workspace');
  assert.equal(api.accountHref('can'), '/konto/?signal=can#opportunity-workspace');
});
