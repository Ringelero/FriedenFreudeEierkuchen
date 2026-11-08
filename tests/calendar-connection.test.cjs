const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {connectionState,deviceState}=require('../kalender/verbinden/verbinden.js');
test('device setup remains closed without deliberately enabled public HTTPS configuration',()=>{
 assert.equal(connectionState(require('../assets/calendar-connection.js')),null);
 for(const serverUrl of ['http://calendar.example.org/','https://name:secret@calendar.example.org/','https://calendar.example.org/?key=abc','https://calendar.example.org/#secret','https://localhost/','https://192.168.1.10/','https://127.0.0.1/','https://[::1]/','https://server.local/'])assert.equal(connectionState({enabled:true,serverUrl}),null);
 assert.deepEqual(connectionState({enabled:true,serverUrl:'https://calendar.example.org/caldav/'}),{serverUrl:'https://calendar.example.org/caldav/'});
});
test('device state distinguishes expiration and revocation from active access',()=>{
 const now=Date.parse('2026-10-19T12:00:00Z');assert.equal(deviceState({expires_at:'2027-01-01T00:00:00Z'},now),'Aktiv');assert.equal(deviceState({expires_at:'2026-01-01T00:00:00Z'},now),'Abgelaufen');assert.equal(deviceState({expires_at:'2027-01-01T00:00:00Z',revoked_at:'2026-10-18T12:00:00Z'},now),'Widerrufen');
});

test('missing or invalid device expiration never appears as an active credential',()=>{
 assert.equal(deviceState({}),'Status unbekannt');
 assert.equal(deviceState({expires_at:'invalid'}),'Status unbekannt');
});

test('enabled setup updates its introduction and copies account fields without exposing the device secret',async()=>{
 const elements=new Map(),handlers=new Map(),copied=[];
 const make=()=>({value:'',hidden:true,textContent:'',dataset:{},type:'password',addEventListener(type,fn){handlers.set(this.id+':'+type,fn);},setAttribute(){},append(){},replaceChildren(){}});
 const element=id=>{if(!elements.has(id)){const el=make();el.id=id;elements.set(id,el);}return elements.get(id);};
 const client={auth:{getSession:async()=>({data:{session:{user:{id:'local-owner'}}}}),onAuthStateChange(){}},rpc:async()=>({data:[],error:null})};
 const context={window:{GemDenCalendarConnection:{enabled:true,serverUrl:'https://calendar.example.org/'},FFE_SUPABASE_CLIENT:client,addEventListener(){}},document:{getElementById:element,createElement:make},navigator:{clipboard:{writeText:async value=>{copied.push(value);}}},URL,Date,Intl};
 vm.runInNewContext(fs.readFileSync(require.resolve('../kalender/verbinden/verbinden.js'),'utf8'),context);await new Promise(setImmediate);
 assert.equal(element('connection-state-badge').dataset.state,'ready');assert.equal(element('connection-waiting').hidden,true);
 assert.match(element('connection-intro').textContent,/beide Richtungen/);
 element('device-server').value='https://calendar.example.org/';element('device-user').value='local-device';element('device-secret').value='secret-stays-separate';
 await handlers.get('device-server-copy:click')();await handlers.get('device-user-copy:click')();
 assert.deepEqual(copied,['https://calendar.example.org/','local-device']);
});

test('failed account loading reports an unavailable setup instead of claiming it is ready',async()=>{
 const elements=new Map();const element=id=>{if(!elements.has(id))elements.set(id,{value:'',dataset:{},addEventListener(){},setAttribute(){}});return elements.get(id);};
 const context={window:{GemDenCalendarConnection:{enabled:true,serverUrl:'https://calendar.example.org/'},FFE_SUPABASE_CLIENT:{auth:{getSession:async()=>{throw Error('unavailable');}}},addEventListener(){}},document:{getElementById:element},URL,Date,Intl};
 vm.runInNewContext(fs.readFileSync(require.resolve('../kalender/verbinden/verbinden.js'),'utf8'),context);await new Promise(setImmediate);
 assert.equal(element('connection-state-badge').dataset.state,'error');
 assert.equal(element('device-status').dataset.state,'error');
});
test('preparation page makes no auth or device calls and loads no SDK while connection is disabled',()=>{
 const listeners={},elements=new Map();const element=id=>{if(!elements.has(id))elements.set(id,{addEventListener:(type,fn)=>{listeners[id+':'+type]=fn;}});return elements.get(id);};
 const window={GemDenCalendarConnection:{enabled:false,serverUrl:''},addEventListener:()=>{}};
 Object.defineProperty(window,'FFE_SUPABASE_CLIENT',{get:()=>{throw Error('No authentication client needed while waiting');}});
 const context={window,document:{getElementById:element},URL,Date,Intl,console};vm.runInNewContext(fs.readFileSync(require.resolve('../kalender/verbinden/verbinden.js'),'utf8'),context);
 assert.ok(listeners['device-form:submit']);
 const html=fs.readFileSync(require.resolve('../kalender/verbinden/index.html'),'utf8');assert.doesNotMatch(html,/<script src="[^\"]*(?:supabase-js|supabase-config|supabase-client)/);assert.match(html,/In Vorbereitung/);
});
test('account change clears displayed credentials and rejects a late device creation response',async()=>{
 const elements=new Map(),handlers=new Map();let authChange,completeCreation,reloads=0;
 const make=()=>({value:'',hidden:true,textContent:'',dataset:{},type:'password',addEventListener(type,fn){handlers.set(this.id+':'+type,fn);},setAttribute(){},append(){},replaceChildren(){},scrollIntoView(){}});
 const element=id=>{if(!elements.has(id)){const el=make();el.id=id;elements.set(id,el);}return elements.get(id);};
 const client={auth:{getSession:async()=>({data:{session:{user:{id:'local-owner'}}},error:null}),onAuthStateChange:fn=>{authChange=fn;}},rpc:async(_name,args)=>args.requested_action==='create'?new Promise(resolve=>{completeCreation=resolve;}):({data:[],error:null})};
 const window={GemDenCalendarConnection:{enabled:true,serverUrl:'https://calendar.example.org/'},FFE_SUPABASE_CLIENT:client,addEventListener:()=>{}};
 const context={window,document:{getElementById:element,createElement:make,querySelector:()=>element('main')},URL,Date,Intl,crypto:require('node:crypto').webcrypto,confirm:()=>true,setTimeout:fn=>fn(),location:{reload:()=>{reloads++;}}};
 vm.runInNewContext(fs.readFileSync(require.resolve('../kalender/verbinden/verbinden.js'),'utf8'),context);await new Promise(setImmediate);
 element('device-name').value='Local fixture';element('device-secret-panel').hidden=true;
 const pending=handlers.get('device-form:submit')({preventDefault(){}});await new Promise(setImmediate);
 element('device-secret').value='already-visible-fixture';element('device-user').value='fixture-user';element('device-secret-panel').hidden=false;
 authChange('SIGNED_IN',{user:{id:'different-local-owner'}});assert.equal(element('device-secret').value,'');assert.equal(element('device-user').value,'');assert.equal(element('device-secret-panel').hidden,true);assert.equal(element('main').hidden,true);assert.equal(reloads,1);
 completeCreation({data:{id:'late-local-device'},error:null});await pending;assert.equal(element('device-secret').value,'');assert.equal(element('device-secret-panel').hidden,true);
});
