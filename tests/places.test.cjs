const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const api=require('../assets/places.js');
test('walking entry discovers places without favorites and respects an explicit view',()=>{
 const favorite='c1111111-1111-4111-8111-111111111111';
 assert.equal(api.entryView([]),'discover');assert.equal(api.entryView([favorite]),'favorites');
 assert.equal(api.entryView([favorite],'discover'),'discover');assert.equal(api.entryView([],'favorites'),'favorites');
 assert.equal(api.entryView(['invalid']),'discover');assert.equal(api.entryView(null,'untrusted'),'discover');
});
test('two-hour windows are contiguous even across a daylight-saving change',()=>{
 assert.equal(api.slotStart('2026-10-25T01:55Z'),'2026-10-25T00:00:00.000Z');
 assert.equal(api.slotStart('2026-10-25T02:05Z'),'2026-10-25T02:00:00.000Z');
 assert.equal(new Date(api.slotStart('2026-10-25T02:05Z'))-new Date(api.slotStart('2026-10-25T01:55Z')),7200000);
 assert.equal(api.slotLabel('2026-10-16T12:00Z','Europe/Berlin'),'14:00–16:00');
 assert.equal(api.dateKey('2026-10-16T23:00Z','Europe/Berlin'),'2026-10-17');
});
test('dog labels, coordinate links and favorite payloads are bounded',()=>{
 assert.deepEqual(api.dogNames(' Nala, Fiete '),['Nala','Fiete']);
 assert.throws(()=>api.dogNames(' , '));assert.throws(()=>api.dogNames('a,b,c,d,e,f'));
 assert.throws(()=>api.dogNames('a'.repeat(61)));
 assert.match(api.mapsLink({latitude:52.5,longitude:13.4}),/^https:\/\/www.google.com\/maps\/search\/\?api=1&query=52.5%2C13.4$/);
 assert.throws(()=>api.mapsLink({latitude:'javascript:bad',longitude:0}));
 assert.equal(api.ids(['javascript:bad','c1111111-1111-4111-8111-111111111111','c1111111-1111-4111-8111-111111111111']).length,1);
});
test('normal entry page loads no mapping engine, tiles or location watcher',()=>{
 const html=fs.readFileSync('treffpunkte/index.html','utf8');
 assert.doesNotMatch(html,/<script[^>]+leaflet|<link[^>]+leaflet/);
 const js=fs.readFileSync('assets/places.js','utf8');
 assert.doesNotMatch(js,/watchPosition|\.channel\(/);
 assert.match(js,/get_place_map_points/);assert.match(js,/map\.remove\(\)/);assert.match(js,/keepBuffer:0/);
});
test('dog access uses explicit verified classification rather than guessing from walking availability',()=>{
 assert.equal(api.dogAccess({services:[{id:api.RUBY,walks_enabled:false,description:'No walks configured'}]}),'unknown');
 assert.equal(api.dogAccessLabel(api.dogAccess({services:[{id:api.RUBY,dog_access:'prohibited',walks_enabled:false}]})),'× Hunde nicht erlaubt');
 assert.equal(api.dogAccessLabel(api.dogAccess({services:[{id:api.RUBY,dog_access:'designated_off_leash',walks_enabled:true}]})),'Ausgewiesener Hundeauslauf');
 assert.equal(api.dogAccessLabel('unverified-value'),'');
});
