const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');const {monthRange,localDay}=require('../kalender/kalender.js');
const {calendarRange,eventFilter,matchesFilter,visibleEvents}=require('../kalender/kalender.js');
test('upcoming ranges cross month and clock changes using thirty local dates',()=>{
 const now=new Date(2026,9,20,15);const r=calendarRange('upcoming','2026-10',null,now);
 assert.equal(localDay(r.start),'2026-10-20');assert.equal(localDay(r.end),'2026-11-19');assert.equal(r.start.getHours(),0);assert.equal(r.end.getHours(),0);
 const m=calendarRange('month','2028-02',null,now);assert.equal(localDay(m.end),'2028-03-01');
 const day=calendarRange('month','2026-10','2026-10-25',now);assert.equal(localDay(day.end),'2026-10-26');assert.equal(day.end.getHours(),0);
});
test('calendar intent filters distinguish visits, events and requestable event slots',()=>{
 const event={kind:'event'},visit={kind:'visit'},visitSlot={kind:'availability',availability_kind:'visit'},eventSlot={kind:'availability',availability_kind:'event'},walk={kind:'availability',availability_kind:'walk'};
 assert.equal(eventFilter('event-zeitfenster'),'event-zeitfenster');assert.equal(eventFilter('<script>'),'alle');
 assert.deepEqual([event,visit,visitSlot,eventSlot,walk].filter(e=>matchesFilter(e,'besuch')),[visit,visitSlot]);
 assert.deepEqual([event,visit,visitSlot,eventSlot,walk].filter(e=>matchesFilter(e,'veranstaltung')),[event]);
 assert.deepEqual([event,visit,visitSlot,eventSlot,walk].filter(e=>matchesFilter(e,'event-zeitfenster')),[eventSlot]);
 const events=[{kind:'event',ends_at:'2026-10-20T10:00Z'},{kind:'event',ends_at:'2026-10-20T14:00Z'},{kind:'availability',availability_kind:'event',ends_at:'2026-10-21T14:00Z'}];
 assert.deepEqual(visibleEvents(events,'veranstaltung','upcoming',Date.parse('2026-10-20T12:00Z')),[events[1]]);
 assert.deepEqual(visibleEvents(events,'alle','month'),events);
});
test('calendar month ranges retain leap days and reject malformed or unbounded ranges',()=>{const leap=monthRange('2028-02');assert.equal((leap.end-leap.start)/86400000,29);for(const bad of ['2026-00','2026-13','26-02','2026-02-01','9999-12',''])assert.throws(()=>monthRange(bad));assert.equal(localDay(new Date(2026,9,19,12)),'2026-10-19');});
test('the shared Kiez model derives Travelkiez scope without reusing P-Hain identity',async()=>{const context={document:{body:{dataset:{kiezId:'KIEZ-TRAVELKIEZ'}}},module:{exports:{}},Date};vm.runInNewContext(fs.readFileSync(require.resolve('../community/kieze/p-hain/storage-model.js'),'utf8'),context);const api=context.module.exports;assert.equal(api.KIEZ_ID,'KIEZ-TRAVELKIEZ');assert.equal(api.draftValues('board',{title:'Kieznotiz',body:'Eine Notiz'}).requested_kiez_id,'KIEZ-TRAVELKIEZ');let scope;await api.publicEntries({from:()=>{const query={select:()=>query,eq:(key,value)=>{if(key==='kiez_id')scope=value;return query;},order:()=>query,limit:async()=>({data:[],error:null})};return query;}});assert.equal(scope,'KIEZ-TRAVELKIEZ');});
test('opportunity entry keeps Travelkiez context through the account route',()=>{const api=require('../assets/opportunity-entry.js');const route=api.accountHref('time','travelkiez');assert.equal(api.readEntry(new URL(route,'https://gemden.red').search).from,'travelkiez');});
