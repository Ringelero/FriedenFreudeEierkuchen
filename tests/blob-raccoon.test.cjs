const test=require('node:test');
const assert=require('node:assert/strict');
const api=require('../assets/blob-raccoon.js');

test('raccoon scope covers all service guides in both languages',()=>{
  for(const p of ['/leistungen/rubybubys-herz-und-schnauze/','/leistungen/rubybubys-herz-und-schnauze/lernen/hundespiel-video/','/leistungen/rubybubys-herz-und-schnauze/betreuung/index.html','/en/leistungen/rubybubys-herz-und-schnauze/lernen/krallen/'])assert.equal(api.isContext(p),true,p);
});
test('shared views require the explicit service or Cicek calendar choice',()=>{
  assert.equal(api.isContext('/treffpunkte/','?leistung='+api.RUBY+'&ansicht=entdecken'),true);
  assert.equal(api.isContext('/en/treffpunkte/index.html','?leistung='+api.RUBY),true);
  assert.equal(api.isContext('/kalender/','?kalender=CICEK'),true);
  assert.equal(api.isContext('/en/kalender/index.html','?kalender=CICEK'),true);
  for(const [p,q] of [['/treffpunkte/',''],['/treffpunkte/','?leistung=OTHER'],['/kalender/','?kalender=PERSONAL'],['/kalender/','?kalender=RUBYBUBYS'],['/community/dynastien/rubybubys/',''],['/leistungen/',''],['/konto/',''],['/leistungen/rubybubys-herz-und-schnauze-other/','']])assert.equal(api.isContext(p,q),false,p+q);
});
test('lookalike or encoded paths do not leak the theme into another area',()=>{
  for(const p of ['/leistungen/rubybubys-herz-und-schnauze/../smart-home/','/leistungen/rubybubys-herz-und-schnauze/%2e%2e/smart-home/','/en/leistungen/rubybubys-herz-und-schnauze\\smart-home/'])assert.equal(api.isContext(p),false,p);
});
test('either reduced motion or the explicit pause choice stops movement',()=>{
  assert.equal(api.animationEnabled(),true);
  assert.equal(api.animationEnabled({reduced:true}),false);
  assert.equal(api.animationEnabled({paused:true}),false);
  assert.equal(api.animationEnabled({reduced:true,paused:true}),false);
});
