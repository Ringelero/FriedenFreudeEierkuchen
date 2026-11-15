const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
test('shared navigation resolves seven destinations at nested roots and marks only the active area',()=>{
 for(const area of ['calendar','map','start']){
  const listeners={},toggle={setAttribute(){},getAttribute(){return 'false';},addEventListener(){}};
  const slot={dataset:{root:'../../../'},setAttribute(){},querySelector(){return toggle;},classList:{add(){}},addEventListener(){},contains(){return true;}};
  vm.runInNewContext(fs.readFileSync('assets/site.js','utf8'),{document:{querySelector:()=>slot,body:{dataset:{area}},addEventListener:(name,fn)=>listeners[name]=fn},window:{matchMedia:()=>({addEventListener(){}})}});
  assert.equal((slot.innerHTML.match(/<a /g)||[]).length,8);assert.equal((slot.innerHTML.match(/aria-current="page"/g)||[]).length,1);
  assert.match(slot.innerHTML,/href="\.\.\/\.\.\/\.\.\/kalender\/"/);assert.match(slot.innerHTML,/href="\.\.\/\.\.\/\.\.\/treffpunkte\/\?ansicht=entdecken&amp;darstellung=karte"/);
  assert.match(slot.innerHTML,new RegExp(`>${area==='map'?'Karte':area==='calendar'?'Kalender':'Start'}</a>`));
 }
});
