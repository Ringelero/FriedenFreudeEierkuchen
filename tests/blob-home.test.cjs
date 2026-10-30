const test = require('node:test');
const assert = require('node:assert/strict');
const home = require('../assets/blob-garden-home.js');
const knowledge = require('../assets/blob-knowledge.js');

test('Blob stays in his home while the seat is fully visible', () => {
  assert.equal(home.placement({top:200,bottom:282,left:650,width:88},{width:1280,height:720}).edge,'home');
});
test('the same resident stays completely visible at the correct edge', () => {
  const viewport = {width:390,height:844};
  const above = home.placement({top:-220,bottom:-138,left:160,width:88},viewport);
  const below = home.placement({top:930,bottom:1012,left:160,width:88},viewport);
  assert.equal(above.edge,'top'); assert.equal(below.edge,'bottom');
  for (const place of [above,below]) {
    assert.ok(place.y>=0);
    assert.ok(place.y+78<=viewport.height);
  }
});
test('edge positions fit narrow phones and wide desktop windows', () => {
  for (const width of [320,390,1280,1920]) for (const left of [-200,0,width-20,width+150]) {
    const result=home.placement({top:-100,bottom:-18,left,width:88},{width,height:720});
    assert.ok(result.x>=12); assert.ok(result.x+78<=width-12);
  }
});
test('either pause, reduced motion or a hidden page stops gestures', () => {
  assert.equal(home.animationEnabled(),true);
  for (const options of [{paused:true},{reduced:true},{hidden:true},{paused:true,reduced:true}]) assert.equal(home.animationEnabled(options),false);
});
test('homepage search admits only the exact public destinations including the two community concepts', () => {
  for (const path of home.HOME_PATHS) {
    assert.equal(knowledge.safePath(path,{home:true}),true,path);
    assert.equal(knowledge.safePath(path),false,path);
  }
  for (const path of ['konto/?token=private','konto/#password-form','kalender/?kalender=PERSONAL','community/../konto/','//evil.test/','treffpunkte/?person=1']) assert.equal(knowledge.safePath(path,{home:true}),false,path);
});

test('live catalog choices include additions, preserve availability and reject unsafe or archived entries', () => {
  const raw={services:[
    {name:'First',public_path:'/leistungen/first/',status:'building',availability:{usable:'Existing feature'}},
    {name:'Newly added',public_path:'/leistungen/newly-added/',status:'building'},
    {name:'Duplicate',public_path:'/leistungen/first/',status:'open'},
    {name:'Archived',public_path:'/leistungen/archived/',status:'archived'},
    {name:'External',public_path:'https://example.com/',status:'open'},
    {name:'Traversal',public_path:'/leistungen/../konto/',status:'open'}
  ]};
  assert.deepEqual(home.catalogEntries(raw,'services'),[
    {title:'First',path:'leistungen/first/',detail:'Teilweise nutzbar'},
    {title:'Newly added',path:'leistungen/newly-added/',detail:'In Vorbereitung'}
  ]);
  assert.deepEqual(home.catalogEntries({dynasties:[{name:'Rubybubys',public_path:'/community/dynastien/rubybubys/'}]},'dynasties'),[{title:'Rubybubys',path:'community/dynastien/rubybubys/',detail:''}]);
  assert.deepEqual(home.catalogEntries({},'synergies'),[]);
});

test('account drill-down links select real existing areas rather than inventing a new account workflow', () => {
  const html=require('node:fs').readFileSync('konto/index.html','utf8');
  for (const link of home.categoryLinks('account')) {
    if (link.path.startsWith('konto/#')) assert.ok(html.includes('id="'+link.path.split('#')[1]+'"'),link.path);
  }
  assert.ok(home.categoryLinks('account').some(link=>link.path==='kalender/?kalender=PERSONAL'));
  assert.deepEqual(home.categoryLinks('unknown'),[]);
});
test('general homepage topics lead to their public entry while other scopes reject them', () => {
  const raw={items:[{id:'calendar',path:'kalender/',title:'Kalender',detail:'Termine',terms:'Kalender calendar Termine events'}]};
  assert.deepEqual(knowledge.cleanItems(raw),[]);
  const items=knowledge.cleanItems(raw,{home:true});
  for (const word of ['Kalender','calendar']) assert.equal(knowledge.search(items,word)[0]?.path,'kalender/');
});
