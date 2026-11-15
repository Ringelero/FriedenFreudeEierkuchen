const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {canonicalPath, languageUrl} = require('../assets/language.js');
const origin = 'https://gemden.red';
test('language switching preserves the page, query and anchor in both directions', () => {
  const input = origin + '/kalender/?kalender=CICEK&art=besuch#requests-title';
  const english = languageUrl(input, 'en', origin);
  assert.equal(english, origin + '/en/kalender/?kalender=CICEK&art=besuch#requests-title');
  assert.equal(languageUrl(english, 'de', origin), input);
  assert.equal(languageUrl(english, 'en', origin), english);
  assert.equal(languageUrl(origin+'/en/kalender/?lang=en&kalender=CICEK', 'de', origin),origin+'/kalender/?kalender=CICEK');
  assert.equal(languageUrl(origin+'/', 'en', origin), origin+'/en/');
  assert.equal(canonicalPath('/en'), '/');
  assert.equal(canonicalPath('/entwuerfe/'), '/entwuerfe/');
  assert.equal(languageUrl('https://example.com/calendar/', 'en', origin), 'https://example.com/calendar/');
});
test('English uses the same service IDs, relationships and private profile gate', () => {
  const base=path.resolve(__dirname,'..');
  for(const file of ['assets/data/services.v1.json','assets/data/community-v0.1.json']){
    const de=JSON.parse(fs.readFileSync(path.join(base,file),'utf8'));
    const en=JSON.parse(fs.readFileSync(path.join(base,'en',file),'utf8'));
    const identities=data=>JSON.stringify(data,(key,value)=>key==='id'||key.endsWith('_ids')||key.endsWith('_path')||key==='status'||key==='visibility'||typeof value==='object'?value:undefined);
    assert.equal(identities(en),identities(de));
  }
  const english=fs.readFileSync(path.join(base,'en/community/mitglieder/julius/index.html'),'utf8');
  assert.ok(english.includes('data-public-member-id="MEM-JULIUS"'));
  assert.ok(english.includes('data-gemden-manual-mount="true"'));
  assert.match(english,/This profile is not currently[^<]*public/);
});
test('generated pages share artwork, stable anchors and accessible language links', () => {
  const base=path.resolve(__dirname,'..');
  for(const file of ['index.html','community/index.html','leistungen/index.html','kalender/index.html','konto/index.html','tickets/index.html']){
    const de=fs.readFileSync(path.join(base,file),'utf8'),en=fs.readFileSync(path.join(base,'en',file),'utf8');
    const ids=html=>[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    assert.deepEqual(ids(en),ids(de));
    assert.ok(en.includes('<html lang="en">'));
    assert.ok(de.includes('hreflang="en"'));
    assert.ok(en.includes('data-language-switcher'));
    assert.ok(en.includes('hreflang="de"'));
  }
});
