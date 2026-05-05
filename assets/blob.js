
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
 try{state=JSON.parse(localStorage.getItem('ffek_blob_no_nav')||'{"mode":"guide","salesName":"","socialName":"","visits":0}')}catch(e){state={mode:'guide',salesName:'',socialName:'',visits:0}}
 state.visits++;save();
 function save(){localStorage.setItem('ffek_blob_no_nav',JSON.stringify(state))}
 function say(t,m){line.textContent=t;meta.textContent=m||('Modus: '+state.mode);chat.classList.add('open')}
 function emote(){ch.classList.add('excited');setTimeout(()=>ch.classList.remove('excited'),600)}
 function setMode(mode){
   state.mode=mode;save();
   ch.classList.remove('mode-sales','mode-social');
   if(mode==='sales')ch.classList.add('mode-sales');
   if(mode==='social')ch.classList.add('mode-social');
   emote();
 }
 function pitch(){
   const n=state.salesName||'Ich';
   const arr=[
    n+': Willkommen bei Leistungen. Ich bin hier, um Bedürfnisse zu erfinden.',
    n+': Du brauchst das nicht… aber du willst es.',
    n+': Ich verkaufe keine Träume. Nur Dienstleistungen mit Größenwahn.',
    n+': Smart Home? Früher hatten Menschen Lichtschalter. Barbaren.'
   ];
   say(arr[Math.floor(Math.random()*arr.length)],'Modus: sales / übermotiviert');emote();
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
    'Wenn du dich verläufst, war es natürlich ein Feature.',
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
 ch.onclick=()=>chat.classList.toggle('open');
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
