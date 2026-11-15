const {test}=require('node:test');
const assert=require('node:assert/strict');
const help=require('../assets/gassihilfe.js');
const places=require('../assets/places.js');
const input={signal:'need',locality:'Friedrichshain',time:'Nächste Woche nachmittags',summary:'Erst gemeinsam kennenlernen.',compensation:'open'};
test('walking requests keep the common service identity and draft-safe publication contract',()=>{
 const v=help.draftValues(input);
 assert.equal(v.service_id,'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE');assert.equal(v.relationship_mode,'care');
 assert.equal(v.location_mode,'local');assert.equal(v.visibility,'public');
 assert.equal(v.publication_status,undefined);assert.equal(v.owner_member_id,undefined);
 assert.equal(v.title,'Gassihilfe gesucht');assert.equal(help.draftValues({...input,signal:'time'}).title,'Ich würde gern mit Hunden rausgehen');
});
test('short walking form rejects missing and oversized content and unsupported intents',()=>{
 for(const patch of [{signal:'admin'},{compensation:'guaranteed'},{locality:' '},{locality:'x'.repeat(161)},{summary:'x'.repeat(2001)},{time:''},{time:'x'.repeat(301)},{title:'x'.repeat(161)}])assert.throws(()=>help.draftValues({...input,...patch}));
 assert.equal(help.draftValues({...input,title:'  Ruhige Runde  '}).title,'Ruhige Runde');
});
test('accompanying people do not need invented dogs and remain a separate count',()=>{
 assert.deepEqual(places.participationNames('companion',''),[]);
 assert.throws(()=>places.participationNames('dogs',''));
 assert.throws(()=>places.participationNames('other','Nala'));
 assert.deepEqual(places.participationNames('dogs','Nala, Fiete'),['Nala','Fiete']);
 assert.equal(places.attendanceLabel(2,1),'2 Hunde · 1 Begleitperson');
 assert.equal(places.attendanceLabel(0,2),'0 Hunde · 2 Begleitpersonen');
});
