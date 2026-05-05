
(function(){
function ready(fn){document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn)}
ready(function(){
 const cfg=window.BLOB_CONFIG||{},pageMode=document.body.dataset.blobMode||cfg.mode||'guide';
 const current=cfg.current||'start';
 const navItems=cfg.nav||[
  {id:'start',label:'Start',small:'Guide',href:'/',mode:'guide'},
  {id:'leistungen',label:'Leistungen',small:'Sales',href:'/leistungen/',mode:'sales'},
  {id:'soziales',label:'Soziales',small:'bald',href:'/#soziales',mode:'social'}
 ];
 const nav=document.createElement('nav');nav.className='blob-nav';
 nav.innerHTML=navItems.map(i=>{
   const a=(i.id===current)?' active':'';
   return `<a class="blob-nav-pill${a}" href="${i.href}" data-blob-mode="${i.mode}" data-blob-id="${i.id}"><div class="blob-pill-content"><strong>${i.label}</strong><small>${i.small||''}</small></div></a>`;
 }).join('');
 const ch=document.createElement('button');ch.id='blob-character';ch.type='button';ch.innerHTML='<div class="blob-face"><div class="blob-eyes"><div class="blob-eye"></div><div class="blob-eye"></div></div><div class="blob-mouth"></div></div>';
 const chat=document.createElement('div');chat.id='blob-chat';chat.innerHTML=`<p id="blob-line">Ich habe jetzt eine echte Navigation. Furchtbar erwachsen.</p><div id="blob-meta">Modus: ${pageMode}</div><div class="blob-chat-actions"><button id="blob-next" type="button">Weiter</button><button id="blob-name" class="secondary" type="button">Name</button><button id="blob-close" class="secondary" type="button">Ruhe</button></div>`;
 document.body.append(nav,ch,chat);
 const line=document.getElementById('blob-line'),meta=document.getElementById('blob-meta'),pills=[...document.querySelectorAll('.blob-nav-pill')];
 let state;
 try{state=JSON.parse(localStorage.getItem('ffek_blob_test_final_fixed')||'{"mode":"guide","salesName":"","socialName":"","visits":0}')}catch(e){state={mode:'guide',salesName:'',socialName:'',visits:0}}
 state.visits++;save();
 function save(){localStorage.setItem('ffek_blob_test_final_fixed',JSON.stringify(state))}
 function say(t,m){line.textContent=t;meta.textContent=m||('Modus: '+state.mode);chat.classList.add('open')}
 function emote(){ch.classList.add('excited');setTimeout(()=>ch.classList.remove('excited'),600)}
 function setMode(mode){state.mode=mode;save();ch.classList.remove('mode-sales','mode-social');if(mode==='sales')ch.classList.add('mode-sales');if(mode==='social')ch.classList.add('mode-social');emote()}
 function place(){
   const active=document.querySelector('.blob-nav-pill.active')||pills[0];
   if(!active)return;
   const mode=active.dataset.blobMode||pageMode;
   const r=active.getBoundingClientRect();
   const mobile=matchMedia('(max-width:760px)').matches;
   if(!mobile){ch.style.top=(r.top+r.height/2)+'px';ch.style.right=(innerWidth-r.left-54)+'px'}
   else{ch.style.top='';ch.style.right=''}
   setMode(mode);
 }
 function pitch(){
   const n=state.salesName||'Ich',arr=[
    n+': Du brauchst das nicht… aber du willst es.',
    n+': Hier wird Hoffnung in Angebote gegossen.',
    n+': Ich verkaufe keine Träume. Nur Dienstleistungen mit Größenwahn.',
    n+': Smart Home? Früher hatten Menschen Lichtschalter. Barbaren.'
   ];
   say(arr[Math.floor(Math.random()*arr.length)],'Modus: sales / übermotiviert');emote();
 }
 function social(){
   const n=state.socialName||'Ich',arr=[
    n+': Gemeinschaft ist, wenn man nicht alles alleine tragen muss.',
    n+': Hilfe ist kein Luxus. Sie ist Infrastruktur.',
    n+': Community: weniger Konzern, mehr Küchentisch.'
   ];
   say(arr[Math.floor(Math.random()*arr.length)],'Modus: social / warm skeptisch');emote();
 }
 function guide(){
   const arr=[
    'Ich bin dein Guide. Widerwillig, aber dekorativ.',
    'Diese Website ist jetzt eine kleine Welt. Zumindest steuerlich noch nicht.',
    'Leistungen machen mich nervös. Dort bekomme ich Arme.'
   ];
   say(arr[Math.floor(Math.random()*arr.length)],'Modus: guide');emote();
 }
 function rename(){
   if(state.mode==='social'){
    const n=prompt('Wie soll der Social-Blob heißen?',state.socialName||'');
    if(n&&n.trim()){state.socialName=n.trim();save();say('Gut. Ich heiße jetzt '+state.socialName+'. Gemeinschaft beginnt mit einem Namen.','Name gespeichert')}
   }else{
    const n=prompt('Wie soll die Verkaufspuppe heißen?',state.salesName||'');
    if(n&&n.trim()){state.salesName=n.trim();save();setMode('sales');say('Gut. Ab jetzt heiße ich '+state.salesName+'. Identität: lokal gespeichert, spirituell fragwürdig.','Name gespeichert')}
   }
 }
 ch.onclick=()=>chat.classList.toggle('open');
 document.getElementById('blob-close').onclick=()=>chat.classList.remove('open');
 document.getElementById('blob-name').onclick=rename;
 document.getElementById('blob-next').onclick=()=>state.mode==='sales'?pitch():state.mode==='social'?social():guide();
 setInterval(()=>{ch.classList.add('blink');setTimeout(()=>ch.classList.remove('blink'),150)},3600);
 addEventListener('resize',place);
 setMode(pageMode);
 setTimeout(place,100);
 setTimeout(()=>{
   chat.classList.add('open');
   if(pageMode==='sales')say((state.salesName||'Die Puppe')+': Willkommen bei Leistungen. Ich bin hier, um Bedürfnisse zu erfinden.','Modus: sales');
   else if(pageMode==='social')say((state.socialName||'Der Community-Blob')+': Willkommen im sozialen Bereich. Hier wird es gefährlich menschlich.','Modus: social');
   else say('Willkommen. Ich bin der Blob. Noch harmlos, noch rund.','Modus: guide')
 },700);
})
})();
