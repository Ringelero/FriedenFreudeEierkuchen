const test = require('node:test');
const assert = require('node:assert/strict');
const notes = require('../assets/herz-gastgeber.js');

test('host notes preserve only bounded worksheet fields and known ideas', () => {
  const draft = notes.normalizeDraft({ name: ' Ein Ort ', kind: 'food', locality: ' Berlin ', conditions: ' Ruhe ', next: ' Fragen ', ideas: ['visit', 'visit', 'rest', 'constructor', 'partner'], partner_approved: true, owner_id: 'other' });
  assert.deepEqual(draft, { version: 1, name: 'Ein Ort', locality: 'Berlin', conditions: 'Ruhe', next: 'Fragen', kind: 'food', ideas: ['visit', 'rest'] });
  assert.equal(notes.normalizeDraft({ kind: 'constructor' }).kind, '');
  for (const input of [null, [], { name: 42 }, { name: 'x'.repeat(101) }, { conditions: 'x'.repeat(801) }, { next: 'x'.repeat(501) }]) assert.throws(() => notes.normalizeDraft(input));
});

test('explicit device save round-trips a versioned note under a dedicated key', () => {
  const data = new Map();
  const storage = { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) };
  assert.equal(notes.readDraft(storage), null);
  const saved = notes.saveDraft(storage, { name: 'Notiz', kind: 'stay', ideas: ['meet'] });
  assert.equal(data.size, 1);
  assert.deepEqual(notes.readDraft(storage), saved);
  assert.equal(data.has(notes.KEY), true);
});

test('corrupt, oversized or incompatible saved notes are rejected without overwriting', () => {
  for (const raw of ['{', 'x'.repeat(12001), '{"version":2}', '{"version":1,"name":7}']) {
    const storage = { getItem: () => raw, setItem: () => assert.fail('Must not silently overwrite a note') };
    assert.throws(() => notes.readDraft(storage));
  }
  assert.throws(() => notes.saveDraft({ setItem: () => { throw new Error('Quota'); } }, {}), /Quota/);
});

test('portable note retains the conversation stage and cannot claim a partner approval', () => {
  const text = notes.formatNote({ name: 'Ein Ort', kind: 'shop', ideas: ['rest'], conditions: 'Ruhiger Bereich', next: 'Gemeinsam sprechen', partner_approved: true });
  assert.match(text, /Keine Anmeldung oder Zusage eines Betriebs/);
  assert.match(text, /Ort: Ein Ort/);
  assert.match(text, /- Platz für Ruhe/);
  assert.match(text, /Ruhiger Bereich/);
  assert.match(text, /Freigabe mit dem Betrieb abstimmen/);
  assert.doesNotMatch(text, /partner_approved|undefined/);
  assert.match(notes.formatNote({}), /Ort: Noch offen/);
});
