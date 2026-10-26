const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const api=require('../assets/blob-knowledge.js');
const suggestions=require('../assets/blob-suggestions.js');
const corpus=()=>api.cleanItems(JSON.parse(fs.readFileSync('assets/data/blob-knowledge.v1.json','utf8')));

test('every learning guide and the real-video exercise have a direct Blob destination',async()=>{
  const {articles}=await import('../scripts/learning-data.mjs');
  const items=corpus();
  for(const article of articles)assert.equal(items.find(i=>i.id==='guide-'+article.id)?.path,'leistungen/rubybubys-herz-und-schnauze/lernen/'+article.id+'/');
  assert.ok(items.find(i=>i.id==='play-video').path.endsWith('/hundespiel-video/'));
});

test('German everyday questions and English phrasing lead to the relevant guide',()=>{
  const items=corpus();
  for(const [question,id] of [
    ['Wie schneide ich meinem Hund die Nägel?','guide-krallen'],
    ['How do I clean my dog’s ears?','guide-ohren'],
    ['Zähne putzen','guide-zaehne'],
    ['Mein Welpe beisst in meine Hände','guide-welpenbeissen'],
    ['Hundespielvideo','play-video'],
    ['Karte Berlin','walking-map'],
    ['Gassihilfe anbieten','walking-help']
  ])assert.equal(api.search(items,question)[0]?.id,id,question);
});

test('unknown requests stay unanswered and ambiguous care queries offer explicit choices',()=>{
  assert.deepEqual(api.search(corpus(),'Quantencomputer kaufen'),[]);
  assert.deepEqual(api.search(corpus(),'Wie kann ich meinem Hund'),[]);
  assert.ok(api.search(corpus(),'Betreuung').some(i=>i.id==='trusted-care'));
  assert.ok(api.search(corpus(),'Betreuung').some(i=>i.id==='guide-betreuung'));
});

test('only known public in-site paths survive the index boundary',()=>{
  const bad=['https://evil.test/','//evil.test/','javascript:alert(1)','../konto/','leistungen/rubybubys-herz-und-schnauze/%2e%2e/konto/','kalender/?kalender=PERSONAL','treffpunkte/?leistung=OTHER'];
  for(const path of bad)assert.equal(api.safePath(path),false,path);
  const raw={items:bad.map((path,i)=>({id:i,path,title:'Title',detail:'Detail',terms:'terms'}))};
  assert.equal(api.cleanItems(raw).length,0);
  assert.equal(new URL(corpus()[0].path,'https://gemden.red/en/').pathname.startsWith('/en/leistungen/'),true);
});

test('learning intent is available on every page and is the default in learning guides',()=>{
  const items=suggestions.catalog('https://gemden.red/','/');
  const cards=suggestions.selectCards({items,preferences:{},pageContext:suggestions.context('/en/leistungen/rubybubys-herz-und-schnauze/lernen/krallen/')});
  assert.deepEqual(cards.map(c=>c.key),['learning','hygiene','playvideo']);
  assert.equal(suggestions.selectCards({items,preferences:{},intent:'learn',pageContext:'walk'}).length,3);
});

test('English output keeps bilingual keywords and opens the English guide',()=>{
  const english=api.cleanItems(JSON.parse(fs.readFileSync('en/assets/data/blob-knowledge.v1.json','utf8')));
  const match=api.search(english,'How do I trim nails?')[0];
  assert.equal(match.id,'guide-krallen');
  assert.match(match.title,/nails/);
  assert.equal(new URL(match.path,'https://gemden.red/en/').pathname,'/en/leistungen/rubybubys-herz-und-schnauze/lernen/krallen/');
});
