const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {accountTarget}=require('../assets/care-redirect.js'),{mount}=require('../konto/care-entry.js');
const id='af111111-1111-4111-8111-111111111111';
test('old care routes preserve language and a valid private conversation but discard unrelated parameters',()=>{
 const en=new URL(accountTarget('https://gemden.red/en/leistungen/rubybubys-herz-und-schnauze/betreuung/?anfrage='+id+'&next=https://evil.test&token=private#austausch'));
 assert.equal(en.pathname,'/en/konto/');assert.equal(en.hash,'#austausch');assert.deepEqual([...en.searchParams],[['anfrage',id]]);
 for(const bad of ['javascript:bad','x'.repeat(36),id+'&owner=someone']){
  const u=new URL(accountTarget('https://gemden.red/leistungen/rubybubys-herz-und-schnauze/betreuung/?anfrage='+encodeURIComponent(bad)+'#other'));
  assert.equal(u.pathname,'/konto/');assert.equal(u.hash,'#konto-kontakte');assert.equal(u.search,'');
 }
});
test('contacts load only in the signed-in active account view, once, and failed loading can retry',async()=>{
 let count=0,rejectLoad=false,observer,events={};const retry={hidden:true,addEventListener(){}},status={textContent:''},panel={hidden:false,querySelector:s=>s==='[data-care-status]'?status:retry},signedIn={hidden:true};
 const document={getElementById:id=>id==='konto-kontakte'?panel:signedIn};
 const window={location:{href:'https://gemden.red/en/konto/#konto-kontakte'},addEventListener:(type,fn)=>events[type]=fn,MutationObserver:class{constructor(fn){observer=fn}observe(){}disconnect(){}}};
 const api=mount(document,window,{load:async()=>{count++;if(rejectLoad)throw Error('network')}});
 await api.activate();assert.equal(count,0);
 signedIn.hidden=false;panel.hidden=true;await api.activate();assert.equal(count,0);
 panel.hidden=false;rejectLoad=true;await api.activate();assert.equal(count,1);assert.equal(retry.hidden,false);
 rejectLoad=false;await api.activate();assert.equal(count,2);assert.equal(retry.hidden,true);
 await api.activate();assert.equal(count,2);events.pagehide();assert.equal(await api.activate(),null);
});
test('private care markup is contained by the existing signed-in article and old page has no workspace',()=>{
 const html=fs.readFileSync('konto/index.html','utf8'),signed=html.slice(html.indexOf('<article class="panel account-panel" id="signed-in-panel" hidden>'),html.indexOf('<article class="notice account-notice"'));
 assert.match(signed,/id="konto-kontakte"/);assert.match(signed,/data-care-workspace/);assert.match(signed,/data-care-contacts/);
 assert.doesNotMatch(html,/<script[^>]+src="[^"]*assets\/care-workspace\.js/);
 const old=fs.readFileSync('leistungen/rubybubys-herz-und-schnauze/betreuung/index.html','utf8');
 assert.doesNotMatch(old,/data-care-workspace|data-care-contacts|supabase-js/);assert.match(old,/care-redirect\.js/);
});
