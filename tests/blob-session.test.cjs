const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
const tick=()=>new Promise(setImmediate),owner='11111111-1111-4111-8111-111111111111';
function setup(){
 const nodes=new Map(),events=new Map(),storage=new Map(),pending=[];let auth,section,current=owner,calls=0,subscriptions=0,slow=false;
 function node(tag){let ownText='';const listeners=new Map(),attributes={};const n={tag,children:[],hidden:false,disabled:false,checked:false,dataset:{},classList:{contains:()=>true},setAttribute(k,v){attributes[k]=v;},addEventListener(k,v){listeners.set(k,v);},emit(k,e={}){return listeners.get(k)?.(e);},append(...x){this.children.push(...x);},before(){},replaceChildren(...x){this.children=x;ownText='';},focus(){},querySelector(s){return nodes.get(s);},querySelectorAll(s){return s==='[data-intent]'?[...nodes.values()].filter(x=>x.dataset.intent):[];}};
 Object.defineProperty(n,'textContent',{get(){return ownText+n.children.map(x=>typeof x==='string'?x:x.textContent||'').join('');},set(v){ownText=v;this.children=[];}});
 Object.defineProperty(n,'innerHTML',{set(){for(const s of ['#blob-suggestion-cards','#blob-personal-status','[data-enabled]','[data-personal]','[data-scope]','[data-reset]','[data-auto]','.blob-intents'])nodes.set(s,node('div'));for(const value of ['walk','calendar','feedback']){const b=node('button');b.dataset.intent=value;nodes.set('[data-intent="'+value+'"]',b);}}});
 if(tag==='section')section=n;return n;
 }
 const client={auth:{getSession:async()=>({data:{session:current?{user:{id:current}}:null}}),getUser:async()=>({data:{user:current?{id:current}:null}}),onAuthStateChange(fn){auth=fn;subscriptions++;return {data:{subscription:{unsubscribe(){}}}};}},rpc(name){calls++;return {abortSignal(){return new Promise(resolve=>{const finish=()=>resolve({data:name==='calendar_workspace'?{events:[{title:'UNIQUE PRIVATE CONTENT',starts_at:new Date(Date.now()+3600000).toISOString(),ends_at:new Date(Date.now()+7200000).toISOString()}]}:{items:[],favorites:[]}});if(slow)pending.push(finish);else finish();});}};}};
 const document={hidden:false,createElement:node,head:{append(){}},addEventListener:(name,fn)=>events.set(name,fn)};
 const context={document,location:{href:'https://gemden.red/',pathname:'/',search:''},FFE_SUPABASE_CLIENT:client,addEventListener:(name,fn)=>events.set(name,fn),dispatchEvent:e=>events.get(e.type)?.(e),CustomEvent:class{constructor(type,options){this.type=type;this.detail=options.detail;}},localStorage:{getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value),removeItem:key=>storage.delete(key)},URL,URLSearchParams,Date,Intl,AbortController,setTimeout,clearTimeout,console};context.window=context;
 nodes.set('.blob-other-ways',node('details'));
 vm.runInNewContext(fs.readFileSync('assets/blob-suggestions.js','utf8'),context);context.GemDenBlobSuggestions.mount({root:'./',chat:node('aside'),character:node('button')});
 return {nodes,storage,pending,get calls(){return calls;},get subscriptions(){return subscriptions;},get privateText(){return nodes.get('#blob-suggestion-cards').textContent;},setSlow(){slow=true;},auth(value){current=value;auth(value?'SIGNED_IN':'SIGNED_OUT',value?{user:{id:value}}:null);},event(name,detail={}){events.get(name)?.(detail);},async enable(){const p=nodes.get('[data-personal]');p.checked=true;p.emit('change');await tick();await tick();}};
}
test('account hints are opt-in, stay in memory, and disappear immediately on signout',async()=>{
 const p=setup();await tick();assert.equal(p.calls,0);await p.enable();assert.match(p.privateText,/UNIQUE PRIVATE CONTENT/);
 assert.ok(![...p.storage.values()].join('').includes('UNIQUE PRIVATE CONTENT'));
 p.auth(null);assert.doesNotMatch(p.privateText,/UNIQUE PRIVATE CONTENT/);await tick();assert.equal(p.nodes.get('[data-personal]').checked,false);
});
test('switching users during a slow query cannot display the old account result or preferences',async()=>{
 const p=setup();await tick();p.setSlow();await p.enable();assert.equal(p.calls,3);
 p.auth('22222222-2222-4222-8222-222222222222');p.pending.forEach(fn=>fn());await tick();await tick();
 assert.doesNotMatch(p.privateText,/UNIQUE PRIVATE CONTENT/);assert.equal(p.nodes.get('[data-personal]').checked,false);
});
test('closing and restoring from history clear private content and reattach account observation',async()=>{
 const p=setup();await tick();await p.enable();assert.match(p.privateText,/UNIQUE PRIVATE CONTENT/);
 p.event('blob:visibility',{detail:{open:false}});assert.doesNotMatch(p.privateText,/UNIQUE PRIVATE CONTENT/);
 p.event('pagehide');p.event('pageshow',{persisted:true});await tick();await tick();assert.equal(p.subscriptions,2);
 p.auth(null);assert.doesNotMatch(p.privateText,/UNIQUE PRIVATE CONTENT/);
});
