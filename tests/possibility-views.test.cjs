const test=require('node:test'),assert=require('node:assert/strict');
const {hashId,requestedTarget,mount}=require('../leistungen/possibility-views.js');
test('possibility entry keeps existing fragments and bounded signal/example routes',()=>{
 assert.equal(requestedTarget({hash:'#request-text',search:''}),'request-text');
 assert.equal(requestedTarget({hash:'#soziales',search:''}),'soziales');
 assert.equal(requestedTarget({hash:'',search:'?beispiel=lichterkette'}),'wunsch');
 assert.equal(requestedTarget({hash:'',search:'?signal=time&from=travelkiez'}),'moeglichkeitenstrom');
 assert.equal(requestedTarget({hash:'',search:'?signal=unknown'}),'entdecken');
 assert.equal(hashId('#%not-valid'),'');assert.equal(requestedTarget({hash:'',search:''}),'entdecken');
});
test('switching possibility views retains drafts and revealed results and opens nested legacy targets',()=>{
 const panels=['entdecken','wunsch','anbieten'].map(id=>({id,hidden:false,closest:s=>s==='[data-possibility-view]'?panels.find(p=>p.id===id):null}));
 const fold={open:false,parentElement:null};const field={value:'Mein angefangener Wunsch',closest:s=>s==='[data-possibility-view]'?panels[1]:null};
 const links=panels.map(p=>({getAttribute:()=> '#'+p.id,current:null,setAttribute(k,v){this.current=v;},removeAttribute(){this.current=null;}}));
 const result={hidden:false,content:'Vorhandene Auswertung',closest:()=>panels[1]};
 const source={closest:s=>s==='details'?fold:null};
 const nodes={inhalt:{addEventListener(){}},'request-text':field,'matching-result':result,'match-chain-title':source};
 const document={querySelectorAll:selector=>selector==='[data-possibility-view]'?panels:[],querySelector:()=>({querySelectorAll:()=>links}),getElementById:id=>nodes[id]||panels.find(p=>p.id===id)};
 const window={location:{hash:'',search:''},addEventListener(){}};
 const api=mount(document,window);assert.equal(panels.find(p=>!p.hidden).id,'entdecken');
 api.show('request-text');assert.equal(panels.find(p=>!p.hidden).id,'wunsch');assert.equal(links[1].current,'page');
 api.show('anbieten');api.show('matching-result');assert.equal(field.value,'Mein angefangener Wunsch');assert.equal(result.content,'Vorhandene Auswertung');assert.equal(result.hidden,false);
 api.show('match-chain-title');assert.equal(fold.open,true);assert.equal(panels.find(p=>!p.hidden).id,'wunsch');
 api.show('unknown');assert.equal(panels.find(p=>!p.hidden).id,'entdecken');
});
