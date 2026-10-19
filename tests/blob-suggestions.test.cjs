const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const api=require('../assets/blob-suggestions.js');
const base='https://gemden.red/',owner='11111111-1111-4111-8111-111111111111';
const other='22222222-2222-4222-8222-222222222222',now=Date.parse('2026-10-20T12:00Z');
test('only known choices survive stored preferences; private payloads and arbitrary URLs do not',()=>{
 assert.deepEqual(api.cleanPreferences({pinned:['walks','walks','https://other.test/'],hidden:['tickets','__proto__'],personal:1,title:'private',owner}),{pinned:['walks'],hidden:['tickets'],personal:false});
});
test('page context uses explicit public paths and known calendar/service choices',()=>{
 assert.equal(api.context('/leistungen/rubybubys-herz-und-schnauze/lernen/'),'walk');
 assert.equal(api.context('/kalender/index.html?bad'),'all');
 assert.equal(api.context('/kalender/index.html'),'calendar');
 assert.equal(api.context('/community/orte/threeden/'),'calendar');
 assert.equal(api.context('/treffpunkte/','?leistung='+api.RUBY),'walk');
 assert.equal(api.context('/konto/','?private=calendar'),'all');
});
test('explicit intent beats page context; pins take priority without duplicating cards',()=>{
 const items=api.catalog(base,'/konto/');
 const c=api.selectCards({items,intent:'calendar',pageContext:'walk',preferences:{pinned:['walks','threeden'],hidden:['personal']}});
 assert.deepEqual(c.map(x=>x.key),['threeden','community']);
 assert.equal(c[0].reason,'Von dir angeheftet');assert.equal(c[1].reason,'Weil du diesen Weg gewählt hast');
 assert.equal(api.selectCards({items,preferences:{}}).length,3);
});
test('hiding all available choices produces an honest empty list',()=>{
 assert.deepEqual(api.selectCards({items:api.catalog(base,'/'),intent:'walk',preferences:{hidden:['walks','care','discover']}}),[]);
});
test('private summaries exclude other owners, unexpanded series, cancelled and past events',()=>{
 const cards=api.privateSummary({base,now,owner,calendar:{events:[{title:'Past',starts_at:'2026-10-19',ends_at:'2026-10-19T14:00Z'},{title:'Cancelled',state:'cancelled',starts_at:'2026-10-20T13:00Z',ends_at:'2026-10-20T14:00Z'},{title:'Series',is_series:true,starts_at:'2026-10-20T13:00Z',ends_at:'2026-10-20T14:00Z'},{title:'Own appointment',starts_at:'2026-10-20T13:00Z',ends_at:'2026-10-20T14:00Z'}],requests:[{title:'Someone else',requester_user_id:other,state:'confirmed'},{title:'Own request',requester_user_id:owner,state:'declined'}]},tickets:{items:[{mine:false,title:'Admin inbox',response:'private'},{mine:true,title:'Own ticket',response:'A reply'}]}});
 assert.deepEqual(cards.map(x=>x.key),['personal','tickets','requests']);
 const s=JSON.stringify(cards);for(const t of ['Past','Cancelled','Series','Someone else','Admin inbox'])assert.ok(!s.includes(t));
 assert.match(s,/Own appointment/);assert.match(s,/Own ticket/);assert.ok(!s.includes('A reply'));
});
test('a private favorite deep link is bounded to a public walking location',()=>{
 const id='33333333-3333-4333-8333-333333333333';
 const c=api.privateSummary({base,owner,places:{favorites:[id]},discovery:{items:[{id,name:'Favorite',services:[{id:api.RUBY,walks_enabled:true}]}]}});
 assert.equal(c[0].key,'walks');assert.equal(new URL(c[0].href).searchParams.get('ort'),id);
 assert.equal(api.privateSummary({base,places:{favorites:[id]},discovery:{items:[{id,name:'Not a walk',services:[]}]}}).length,0);
});
function fixture({identity=owner,delay=false,calendarError=false}={}){
 const calls=[],release=[];let current=identity;
 const client={auth:{getUser:async()=>({data:{user:current?{id:current}:null}}),getSession:async()=>({data:{session:current?{user:{id:current}}:null}})},rpc(name,args){calls.push({name,args});return {abortSignal(signal){return new Promise((resolve,reject)=>{const finish=()=>resolve(calendarError&&name==='calendar_workspace'?{error:{code:'network'}}:{data:name==='calendar_workspace'?{events:[{title:'Delayed personal title',starts_at:'2026-10-21T12:00Z',ends_at:'2026-10-21T13:00Z'}]}:{items:[],favorites:[]}});signal.addEventListener('abort',()=>reject(Error('aborted')),{once:true});if(delay)release.push(finish);else finish();});}};}};
 return {client,calls,release,setOwner(value){current=value;}};
}
test('private requests always use the personal calendar and own-ticket mode, never administration',async()=>{
 const f=fixture();await api.fetchPrivate(f.client,owner,new AbortController().signal,base,now);
 assert.equal(f.calls.length,3);
 assert.equal(f.calls[0].args.requested_calendar,'PERSONAL');assert.equal(f.calls[1].args.manage,false);assert.equal(f.calls[1].args.guest_token,null);
 assert.equal(f.calls[2].args.service,null);
});
test('an unverified account makes no private requests',async()=>{
 const f=fixture({identity:other});await assert.rejects(api.fetchPrivate(f.client,owner,new AbortController().signal,base,now));assert.equal(f.calls.length,0);
});
test('an account switch during loading rejects a late personal result',async()=>{
 const f=fixture({delay:true}),pending=api.fetchPrivate(f.client,owner,new AbortController().signal,base,now);await new Promise(setImmediate);f.setOwner(other);f.release.forEach(fn=>fn());await assert.rejects(pending,/identity/);
});
test('closing the panel can abort all outstanding personal queries',async()=>{
 const f=fixture({delay:true}),controller=new AbortController(),pending=api.fetchPrivate(f.client,owner,controller.signal,base,now);await new Promise(setImmediate);controller.abort();await assert.rejects(pending,/aborted/);
});
test('an unavailable identity check can be interrupted without retaining a loading state',async()=>{
 const controller=new AbortController(),client={auth:{getUser:()=>new Promise(()=>{})}};
 const pending=api.fetchPrivate(client,owner,controller.signal,base,now);controller.abort();await assert.rejects(pending,/aborted/);
});
test('one failed source yields partial status rather than an invented result',async()=>{
 const f=fixture({calendarError:true}),result=await api.fetchPrivate(f.client,owner,new AbortController().signal,base,now);assert.equal(result.partial,true);assert.equal(result.cards.length,0);
});
test('shared bootstrap stays lazy and existing discover mode opens without map infrastructure',()=>{
 const blob=fs.readFileSync('assets/blob.js','utf8');assert.match(blob,/if \(!open \|\| suggestionsLoading\) return/);assert.doesNotMatch(blob,/gemden_blob_paths_v1|shortcutState/);
 const source=fs.readFileSync('assets/blob-suggestions.js','utf8');assert.doesNotMatch(source,/setInterval|watchPosition|\.channel\(/);assert.match(source,/if\(!visible\(\)\|\|!isEnabled\(\)\|\|!owner\|\|!pref.personal/);
 assert.match(fs.readFileSync('assets/places.js','utf8'),/view=url.searchParams.get\('ansicht'\)==='entdecken'\?'discover':'favorites'/);
});
