const {test}=require('node:test');const assert=require('node:assert/strict');
const care=require('../assets/care-workspace.js');const help=require('../assets/gassihilfe.js');
const fields={kind:'overnight',carer:'other',animal_names:'Nala',starts_at:'2026-10-30T10:00:00Z',ends_at:'2026-11-02T15:00:00Z',handover:'Besprochener Ort',reachability:'Vereinbarter Kontakt',routine:'Ruhige Runde und vertrautes Futter',terms:'Kosten gemeinsam vereinbart'};
test('longer care uses public support types without putting private handover data in an ad',()=>{
 const input={kind:'longer',signal:'need',locality:'Friedrichshain',time:'Nächsten Monat für ein paar Tage',summary:'Erst kennenlernen',compensation:'open',handover:'Private address'};
 const ad=help.draftValues(input);assert.equal(ad.support_kind,'longer');assert.equal(ad.title,'Mehrere Tage gesucht');assert.equal(ad.handover,undefined);assert.equal(ad.publication_status,undefined);
 assert.throws(()=>help.draftValues({...input,kind:'unrestricted'}));
});
test('private proposal carries time zone and needs actual handover, routine and care terms',()=>{
 const v=care.planValues(fields,'Europe/Berlin');assert.equal(v.time_zone,'Europe/Berlin');assert.equal(v.starts_at,'2026-10-30T10:00:00.000Z');assert.equal(v.ends_at,'2026-11-02T15:00:00.000Z');assert.equal(v.owner_confirmed,undefined);assert.equal(v.responder_confirmed,undefined);assert.equal(v.carer,'other');
 for(const patch of [{carer:'some-user-id'},{kind:'admin'},{ends_at:fields.starts_at},{starts_at:'invalid'},{ends_at:'2030-01-01'},{handover:''},{reachability:''},{routine:''},{terms:''},{animal_names:'x'.repeat(201)},{backup:'x'.repeat(1001)}])assert.throws(()=>care.planValues({...fields,...patch},'Europe/Berlin'));
});
test('room links only target the known account route with an exact response identifier',()=>{
 assert.equal(care.roomHref('af111111-1111-4111-8111-111111111111'),'/konto/?resonanz=af111111-1111-4111-8111-111111111111#resonance-center');
 assert.throws(()=>care.roomHref('javascript:alert(1)'));assert.throws(()=>care.roomHref('a&next=https://elsewhere'));
});

test('private room keeps the English account route',()=>{assert.equal(care.roomHref('af111111-1111-4111-8111-111111111111','en'),'/en/konto/?resonanz=af111111-1111-4111-8111-111111111111#resonance-center');});
