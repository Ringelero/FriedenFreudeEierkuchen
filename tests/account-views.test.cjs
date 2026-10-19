const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {hashId,requestedTarget,mount}=require('../konto/account-views.js');
test('known incoming account links select the original work area, including recovery',()=>{
 assert.equal(requestedTarget({hash:'#portfolio-workspace',search:''}),'portfolio-workspace');
 assert.equal(requestedTarget({hash:'',search:'?signal=need&from=travelkiez'}),'opportunity-workspace');
 assert.equal(requestedTarget({hash:'',search:'?resonanz=11111111-1111-4111-8111-111111111111'}),'resonance-center');
 assert.equal(requestedTarget({hash:'#access_token=example&type=recovery',search:''}),'password-form');
 assert.equal(requestedTarget({hash:'',search:'?signal=anything'}),'konto-uebersicht');assert.equal(hashId('#%xy'),'');
});
test('switching views preserves form nodes and opens all enclosing detail sections',()=>{
 const panels=['konto-uebersicht','konto-profil','konto-zusammenarbeit','konto-einstellungen'].map(id=>({id,hidden:false,closest(selector){return selector==='[data-account-view]'?this:null;}}));
 const outer={open:false,parentElement:null},inner={open:false,parentElement:{closest:()=>outer}};
 const field={value:'unsaved text',closest:s=>s==='[data-account-view]'?panels[1]:inner};
 const links=panels.map(p=>({href:'#'+p.id,current:null,getAttribute(){return this.href;},setAttribute(k,v){this.current=v;},removeAttribute(){this.current=null;}}));
 const nodes={'signed-in-panel':{hidden:false,addEventListener(){}},'account-blob-open':{addEventListener(){}},'profile-form':field};
 const document={querySelectorAll:()=>panels,querySelector:s=>s==='.account-view-nav'?{querySelectorAll:()=>links}:null,getElementById:id=>nodes[id]||panels.find(p=>p.id===id)};
 const window={location:{hash:'',search:''},addEventListener(){}};
 const api=mount(document,window);assert.equal(panels.filter(p=>!p.hidden)[0].id,'konto-uebersicht');
 api.show('profile-form');assert.equal(panels.filter(p=>!p.hidden)[0].id,'konto-profil');assert.equal(inner.open,true);assert.equal(outer.open,true);assert.equal(field.value,'unsaved text');assert.equal(links[1].current,'page');
 api.show('unknown');assert.equal(panels.filter(p=>!p.hidden)[0].id,'konto-uebersicht');
});
test('the layout preserves every prior account control exactly once and leaves authentication unchanged',()=>{
 const html=fs.readFileSync('konto/index.html','utf8'),ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
 for(const id of ['signed-in-panel','signed-out-panel','profile-form','portfolio-workspace','publication-center','opportunity-workspace','resonance-center','page-create-button','page-workshop-link','password-form','logout-button','member-admin-link'])assert.equal(ids.filter(x=>x===id).length,1,id);
 assert.match(html,/<article[^>]+id="signed-in-panel" hidden>/);assert.match(html,/account-views\.js\?v=20261020-1/);
 assert.equal((html.match(/data-account-view\b/g)||[]).length,4);
});
