
(function(){
function ready(fn){document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn)}
ready(function(){
 const cfg=window.BLOB_CONFIG||{};
 const pageMode=document.body.dataset.blobMode||cfg.mode||'guide';
 const links=cfg.links||{};
 const ch=document.createElement('button');
 ch.id='blob-character';
 ch.type='button';
 ch.innerHTML='<div class="blob-face"><div class="blob-eyes"><div class="blob-eye"></div><div class="blob-eye"></div></div><div class="blob-mouth"></div></div>';
 const chat=document.createElement('div');
 chat.id='blob-chat';
 chat.innerHTML=`<p id="blob-line">Ich bin jetzt kein Navigationsleisten-Bewohner mehr. Endlich Privatsphäre.</p>
 <div id="blob-meta">Modus: ${pageMode}</div>
 <div class="blob-chat-actions" id="blob-actions">
   <button id="blob-next" type="button">Weiter</button>
   <button id="blob-name" class="secondary" type="button">Name</button>
   <a id="blob-home" class="secondary" href="${links.home||'./'}">Start</a>
   <a id="blob-services" class="secondary" href="${links.services||'./leistungen/'}">Leistungen</a>
   <button id="blob-close" class="secondary" type="button">Ruhe</button>
 </div>`;
 document.body.append(ch,chat);
 const line=document.getElementById('blob-line'),meta=document.getElementById('blob-meta');
 let state;
 try{state=JSON.parse(localStorage.getItem('ffek_blob_wiggle')||'{"mode":"guide","salesName":"","socialName":"","visits":0,"x":null,"y":null}')}catch(e){state={mode:'guide',salesName:'',socialName:'',visits:0,x:null,y:null}}
 state.visits++;save();
 function save(){localStorage.setItem('ffek_blob_wiggle',JSON.stringify(state))}
 function say(t,m){line.textContent=t;meta.textContent=m||('Modus: '+state.mode);chat.classList.add('open')}
 function emote(){ch.classList.add('excited');setTimeout(()=>ch.classList.remove('excited'),600)}
 function setMode(mode){
   state.mode=mode;save();
   ch.classList.remove('mode-sales','mode-social','wiggle-sales');
   if(mode==='sales'){ch.classList.add('mode-sales','wiggle-sales')}
   if(mode==='social')ch.classList.add('mode-social');
   emote();
 }
 function pitch(){
   const n=state.salesName||'Ich';
   const arr=[
    n+': Zieh mich ruhig herum. Ich bin flexibel. Moralisch und körperlich.',
    n+': Du brauchst das nicht… aber du willst es.',
    n+': Ich verkaufe keine Träume. Nur Dienstleistungen mit Größenwahn.',
    n+': Smart Home? Früher hatten Menschen Lichtschalter. Barbaren.'
   ];
   say(arr[Math.floor(Math.random()*arr.length)],'Modus: sales / elastisch übermotiviert');emote();
 }
 function social(){
   const n=state.socialName||'Ich';
   const arr=[
    n+': Gemeinschaft ist, wenn man nicht alles alleine tragen muss.',
    n+': Hilfe ist kein Luxus. Sie ist Infrastruktur.',
    n+': Community: weniger Konzern, mehr Küchentisch.'
   ];
   say(arr[Math.floor(Math.random()*arr.length)],'Modus: social / warm skeptisch');emote();
 }
 function guide(){
   const arr=[
    'Ich bin dein Guide. Widerwillig, aber dekorativ.',
    'Die Navigation wohnt jetzt im Chat. Weniger Schilderwald, mehr Gespräch.',
    'Wenn du mich auf der Leistungsseite ziehst, werde ich unangenehm elastisch.',
    'Leistungen machen mich nervös. Dort bekomme ich Arme.'
   ];
   say(arr[Math.floor(Math.random()*arr.length)],'Modus: guide');emote();
 }
 function rename(){
   if(state.mode==='sales'){
    const n=prompt('Wie soll die Verkaufspuppe heißen?',state.salesName||'');
    if(n&&n.trim()){state.salesName=n.trim();save();say('Gut. Ab jetzt heiße ich '+state.salesName+'. Identität: lokal gespeichert, spirituell fragwürdig.','Name gespeichert')}
   }else{
    const n=prompt('Wie soll der Blob heißen?',state.socialName||'');
    if(n&&n.trim()){state.socialName=n.trim();save();say('Gut. Ich heiße jetzt '+state.socialName+'. Namen sind auch nur kleine Verträge.','Name gespeichert')}
   }
 }

 // draggable character
 let dragging=false, moved=false, offsetX=0, offsetY=0;
 function setPosition(x,y){
   ch.style.left=x+'px';
   ch.style.top=y+'px';
   ch.style.right='auto';
   ch.style.bottom='auto';
   ch.style.transform='translate(0,0)';
   state.x=x;state.y=y;save();
 }
 if(state.x!==null && state.y!==null){
   setTimeout(()=>setPosition(state.x,state.y),80);
 }
 ch.addEventListener('pointerdown',e=>{
   dragging=true;moved=false;
   ch.setPointerCapture(e.pointerId);
   ch.classList.add('dragging');
   const r=ch.getBoundingClientRect();
   offsetX=e.clientX-r.left;
   offsetY=e.clientY-r.top;
 });
 ch.addEventListener('pointermove',e=>{
   if(!dragging)return;
   moved=true;
   const x=Math.max(4,Math.min(window.innerWidth-ch.offsetWidth-4,e.clientX-offsetX));
   const y=Math.max(4,Math.min(window.innerHeight-ch.offsetHeight-4,e.clientY-offsetY));
   setPosition(x,y);
 });
 ch.addEventListener('pointerup',e=>{
   dragging=false;
   ch.classList.remove('dragging');
   try{ch.releasePointerCapture(e.pointerId)}catch(err){}
   if(moved && state.mode==='sales')say((state.salesName||'Ich')+': Danke fürs Herumziehen. Würdelos, aber dynamisch.','Modus: sales / gezogen');
 });
 ch.onclick=(e)=>{if(moved){moved=false;return}chat.classList.toggle('open')};
 document.getElementById('blob-close').onclick=()=>chat.classList.remove('open');
 document.getElementById('blob-name').onclick=rename;
 document.getElementById('blob-next').onclick=()=>state.mode==='sales'?pitch():state.mode==='social'?social():guide();
 setInterval(()=>{ch.classList.add('blink');setTimeout(()=>ch.classList.remove('blink'),150)},3600);
 setMode(pageMode);
 setTimeout(()=>{
   chat.classList.add('open');
   if(pageMode==='sales') pitch();
   else if(pageMode==='social') social();
   else guide();
 },700);
})
})();
