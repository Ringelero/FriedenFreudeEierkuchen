const {test}=require('node:test');
const assert=require('node:assert/strict');
const {normalizeWindows,rangeLabel,dogAccessLabel}=require('../assets/places.js');
test('disjoint hours stay separate; overlapping and touching hours merge without changing input',()=>{
 const windows=[{start:'2026-11-21T15:00Z',end:'2026-11-21T17:00Z'},{start:'2026-11-21T09:00Z',end:'2026-11-21T10:00Z'},{start:'2026-11-21T10:00Z',end:'2026-11-21T12:00Z'},{start:'2026-11-21T11:00Z',end:'2026-11-21T13:00Z'}];
 const before=JSON.stringify(windows);
 assert.deepEqual(normalizeWindows(windows),[{start:'2026-11-21T09:00:00.000Z',end:'2026-11-21T13:00:00.000Z'},{start:'2026-11-21T15:00:00.000Z',end:'2026-11-21T17:00:00.000Z'}]);
 assert.equal(JSON.stringify(windows),before);
});
test('empty selection clears times and invalid or excessive ranges are rejected',()=>{
 assert.deepEqual(normalizeWindows([]),[]);
 for(const value of [null,Array(9).fill({}),[{start:'bad',end:'bad'}],[{start:'2026-11-21T09:00Z',end:'2026-11-21T09:00Z'}],[{start:'2026-11-21T12:00Z',end:'2026-11-21T11:00Z'}],[{start:'2026-11-21T00:00Z',end:'2026-11-22T01:00Z'}],[{start:'2026-11-21T00:00Z',end:'2026-11-22T00:00Z'},{start:'2026-11-22T00:00Z',end:'2026-11-22T01:00Z'}]])assert.throws(()=>normalizeWindows(value));
});
test('hour ranges retain actual instants over DST and show Berlin clock times',()=>{
 const merged=normalizeWindows([{start:'2026-10-25T02:00:00+02:00',end:'2026-10-25T02:00:00+01:00'},{start:'2026-10-25T02:00:00+01:00',end:'2026-10-25T03:00:00+01:00'}]);
 assert.equal(new Date(merged[0].end)-new Date(merged[0].start),7200000);
 assert.equal(rangeLabel('2026-11-21T10:00Z','2026-11-21T13:00Z','Europe/Berlin'),'11:00–14:00');
 assert.equal(rangeLabel('2026-11-21T22:00Z','2026-11-22T00:00Z','Europe/Berlin'),'23:00–01:00 · nächster Tag');
 assert.equal(rangeLabel('2026-10-25T00:00Z','2026-10-25T02:00Z','Europe/Berlin'),'02:00–03:00');
 assert.match(rangeLabel('2026-03-28T22:00Z','2026-03-29T22:00Z','Europe/Berlin'),/^23:00–00:00 · bis /);
 assert.equal(dogAccessLabel('on_leash'),'Leinenpflicht');
});
