const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const api=require('../assets/places.js');

test('Berlin overview uses a bounded named region and rejects arbitrary URL region values',()=>{
 const b=api.regionBounds('berlin');
 for(const [lat,lon] of [[52.42,13.14],[52.64,13.24],[52.40,13.65],[52.55,13.40]]){
  assert.ok(lat>=b.south&&lat<=b.north&&lon>=b.west&&lon<=b.east);
 }
 assert.ok(b.north-b.south<.5&&b.east-b.west<1);
 assert.equal(api.regionBounds('world'),null);assert.equal(api.regionBounds('berlin&private=true'),null);assert.equal(api.regionBounds(null),null);
 b.south=0;assert.notEqual(api.regionBounds('berlin').south,0);
});
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
 assert.equal(api.dogAccessLabel(api.dogAccess({services:[{id:api.RUBY,dog_access:'unknown',walks_enabled:false}]})),'Hunde-Zugang ungeklärt');
 assert.equal(api.dogAccessLabel('unverified-value'),'');
});

test('shared map assets and manifests resolve on German, English and local pages',()=>{
 for(const page of ['https://gemden.red/treffpunkte/','https://gemden.red/en/treffpunkte/','http://127.0.0.1:8783/en/treffpunkte/?leistung='+api.RUBY]){
  const assets=api.mapAssets(page,true),origin=new URL(page).origin;
  assert.equal(assets.script,origin+'/assets/vendor/leaflet-1.9.4/leaflet.js');
  assert.equal(assets.css,origin+'/assets/vendor/leaflet-1.9.4/leaflet.css');
  assert.equal(assets.manifest,origin+'/treffpunkte/herz-schnauze.webmanifest');
  assert.equal(api.mapAssets(page).manifest,origin+'/treffpunkte/manifest.webmanifest');
 }
});
test('map-only off-leash filter preserves verified counts in mixed clusters without mutating data',()=>{
 const points=[{count:1,id:'a',dog_access:'unknown'},{count:1,id:'b',dog_access:'designated_off_leash'},{count:4,id:null,off_leash_count:2,prohibited_count:1},{count:2,off_leash_count:0},{count:1,dog_access:'prohibited'}];
 const before=JSON.stringify(points),filtered=api.visibleMapPoints(points,true);
 assert.deepEqual(filtered.map(p=>p.visible_count),[1,2]);assert.equal(filtered[1].count,4);
 assert.equal(api.visibleMapPoints(points).reduce((n,p)=>n+p.visible_count,0),9);
 assert.equal(JSON.stringify(points),before);
 assert.equal(api.visibleMapPoints([{count:3,off_leash_count:99}],true)[0].visible_count,3);
 assert.deepEqual(api.visibleMapPoints([{count:3}],true),[]);
});
test('shared map link keeps language, selected service, viewport and filter but omits other page parameters',()=>{
 const url=api.mapShareUrl('https://gemden.red/en/treffpunkte/?ort=public-place&unrelated=private#detail',api.RUBY,{lat:52.51456789,lng:13.40345678},12,true),u=new URL(url);
 assert.equal(u.pathname,'/en/treffpunkte/');assert.equal(u.searchParams.get('leistung'),api.RUBY);
 assert.equal(u.searchParams.get('ausschnitt'),'52.51457,13.40346,12');assert.equal(u.searchParams.get('hundeauslauf'),'1');
 assert.equal(u.searchParams.get('ansicht'),'entdecken');assert.equal(u.searchParams.get('darstellung'),'karte');
 assert.equal(u.searchParams.has('ort'),false);assert.equal(u.searchParams.has('unrelated'),false);assert.equal(u.hash,'');
 assert.deepEqual(api.mapViewFromUrl(url),{latitude:52.51457,longitude:13.40346,zoom:12});
 for(const value of ['NaN,13,12','52,Infinity,12','86,13,12','52,181,12','52,13,20','52,13,1','52,13,3.5',',,','52,,12']){
  assert.equal(api.mapViewFromUrl('https://gemden.red/treffpunkte/?ausschnitt='+encodeURIComponent(value)),null,value);
 }
});
