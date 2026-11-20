const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const api=require('../assets/places.js');
// A small DOM fixture exercises the actual detail renderer without opening accounts or making network writes.
class Element{
 constructor(tag,text,cls){this.tag=tag;this.children=[];this.events={};this.attrs={};this.dataset={};this.textContent=text||'';this.className=cls||'';this.isConnected=true;this._value='';}
 append(...items){for(const item of items){item.parent=this;this.children.push(item);}}
 replaceChildren(...items){this.children=[];this.append(...items);}
 add(item){this.append(item);if(this.children.length===1)this._value=item.value;}
 get options(){return this.children;}get selectedOptions(){return this.children.filter(x=>x.value===this.value);}
 get value(){return this._value;}set value(value){this._value=value;}
 setAttribute(k,v){this.attrs[k]=v;}
 addEventListener(k,v){this.events[k]=v;}
 remove(){if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this);}
 focus(){this.focused=true;}scrollIntoView(){}
 querySelector(){return null;}
}
function fixture({ready=true,own=null}={}){
 const code=fs.readFileSync('assets/places.js','utf8'),start=code.indexOf('  function renderDetail(){'),end=code.indexOf('  function renderManager()',start);
 const root=new Element('section'),calls=[],notes=[],t=api.slotStart(Date.now()+86400000),day=api.dateKey(t,'Europe/Berlin');
 const midnight=new Date(day+'T00:00:00+01:00').getTime(),hours=Array.from({length:27},(_,i)=>new Date(midnight+i*3600000).toISOString());
 const prefs={favorites:[],dog_names:ready?['Nala']:[],participation:'dogs',public_label:'',public_walks:ready};
 const ctx={...api,detail:{place:{id:'place',name:'Park',locality:'Berlin',latitude:52.5,longitude:13.4,time_zone:'Europe/Berlin',services:[{id:api.RUBY,name:'Gassi',walks_enabled:true,dog_access:'on_leash'}]},slots:[{start:t}],entries:[],events:[],mine:own,mine_day:own?[own]:[],hour_options:hours,server_time:new Date().toISOString()},activeSlot:t,activeDay:day,service:api.RUBY,access:{can_manage:false},authUser:{id:'member'},authReady:true,generation:1,detailDirty:false,entryPage:0,HOURS:7200000,
  $:()=>root,prefs:()=>prefs,titleOf:p=>p.name,closePlace(){},share(){},location:{href:'https://gemden.red/treffpunkte/'},requestAnimationFrame(){},
  document:{createElement:tag=>new Element(tag)},Option:function(text,value){const o=new Element('option',text);o.value=value;return o;},
  node:(tag,text,cls)=>new Element(tag,text,cls),button:(text,action,cls)=>{const b=new Element('button',text,cls);b.events.click=action;return b;},
  perform:async fn=>fn(1),savePrefs:async details=>{calls.push({method:'preferences',details});Object.assign(prefs,details);return true;},rpc:async(client,method,args)=>{calls.push({method,args});return {};},client:{},
  openPlace:async()=>{},loadList:async()=>{},status:message=>notes.push(message)
 };
 vm.createContext(ctx);vm.runInContext(code.slice(start,end)+'\nrenderDetail();',ctx);
 const all=()=>{const nodes=[];function walk(n){nodes.push(n);n.children.forEach(walk);}walk(root);return nodes;};
 const click=async label=>{await all().find(e=>e.tag==='button'&&e.textContent===label).events.click();await new Promise(setImmediate);};
 return {root,calls,notes,all,click,t,hours,prefs};
}
test('a prepared account joins a quick window with one action and reuses its dog name',async()=>{
 const f=fixture();await f.click('Ich bin dabei');
 assert.equal(f.calls.length,1);assert.equal(f.calls[0].method,'save_place_walk_times');
 assert.deepEqual(Array.from(f.calls[0].args.names),['Nala']);assert.equal(f.calls[0].args.guest_key,null);
 assert.equal(f.calls[0].args.windows[0].start,f.t);assert.equal(new Date(f.calls[0].args.windows[0].end)-new Date(f.t),7200000);
});
test('missing names and consent open the one-time fields without posting anything',async()=>{
 const f=fixture({ready:false});await f.click('Ich bin dabei');
 assert.equal(f.calls.length,0);assert.equal(f.all().find(n=>n.className==='place-entry-fields').open,true);
});
test('multiple custom ranges are saved together as a free walk',async()=>{
 const f=fixture();await f.click('Weiteren Zeitraum hinzufügen');
 const rows=f.all().filter(n=>n.className==='place-time-range');assert.equal(rows.length,2);
 rows[0].children[0].children[0].value=f.hours[9];rows[0].children[1].children[0].value=f.hours[10];
 rows[1].children[0].children[0].value=f.hours[15];rows[1].children[1].children[0].value=f.hours[17];
 const editor=f.all().find(n=>n.className==='place-time-editor'),form=editor.children.find(n=>n.tag==='form');
 form.events.submit({preventDefault(){}});await new Promise(setImmediate);
 assert.equal(f.calls.length,1);assert.equal(f.calls[0].args.windows.length,2);assert.equal(f.calls[0].args.event,null);
});
