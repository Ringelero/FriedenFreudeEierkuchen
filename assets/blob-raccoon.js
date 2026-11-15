(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.GemDenBlobRaccoon=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const RUBY='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE',motionKey='gemden_blob_raccoon_motion_v1';
  function isContext(path,search=''){
    const p=String(path||'').replace(/^\/en(?=\/)/,'').replace(/index\.html$/,'');
    if(p.includes('..')||/[\\%]/.test(p))return false;
    if(/^\/leistungen\/rubybubys-herz-und-schnauze(?:\/|$)/.test(p))return true;
    const params=new URLSearchParams(search);
    return /^\/treffpunkte\/?$/.test(p)&&params.get('leistung')===RUBY||/^\/kalender\/?$/.test(p)&&params.get('kalender')==='CICEK';
  }
  const animationEnabled=({reduced=false,paused=false}={})=>!reduced&&!paused;
  function mount({root:relativeRoot,chat,character}){
    if(character.querySelector('.blob-raccoon-body'))return;
    const assets=new URL('/assets/blob-waschbaer/',new URL(relativeRoot,location.href)).href;
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused=false;try{paused=localStorage.getItem(motionKey)==='off';}catch{}
    let active=false,open=chat.classList.contains('open'),failed=false,epoch=0,poseLoading=null,posesReady=false;
    const timers=new Set();
    const head=document.createElement('img');head.className='blob-raccoon-head';head.alt='';head.width=160;head.height=138;head.draggable=false;head.hidden=true;
    const body=document.createElement('span');body.className='blob-raccoon-body';body.hidden=true;body.setAttribute('aria-hidden','true');
    body.innerHTML='<img class="blob-raccoon-sitting" alt="" width="234" height="256" draggable="false"><svg class="blob-raccoon-wave" viewBox="0 0 710 800" aria-hidden="true" focusable="false"><defs><clipPath id="blob-raccoon-body"><path clip-rule="evenodd" fill-rule="evenodd" d="M0 0H710V800H0Z M13 209L126 209L146 336L168 378L220 427L241 454L223 508L114 494L48 426L13 350Z"/></clipPath><clipPath id="blob-raccoon-paw"><path d="M13 209L126 209L146 336L168 378L220 427L241 454L223 508L114 494L48 426L13 350Z"/></clipPath></defs><image data-raccoon-body width="710" height="800" clip-path="url(#blob-raccoon-body)"/><g class="blob-raccoon-paw"><image data-raccoon-paw width="710" height="800" clip-path="url(#blob-raccoon-paw)"/></g></svg>';
    character.append(head,body);
    const sitting=body.querySelector('.blob-raccoon-sitting');
    const controls=document.createElement('div');controls.className='blob-raccoon-controls';controls.hidden=true;
    const waveButton=document.createElement('button'),stretchButton=document.createElement('button'),toggle=document.createElement('button');
    for(const b of [waveButton,stretchButton,toggle]){b.type='button';b.className='secondary';}
    waveButton.textContent='Winken';stretchButton.textContent='Strecken';toggle.classList.add('blob-raccoon-motion');
    controls.append(waveButton,stretchButton,toggle);chat.querySelector('.blob-other-ways').append(controls);
    const line=chat.querySelector('#blob-line'),originalLine=line.textContent,welcome='Dein Begleiter für Gassi, Betreuung und gemeinsames Lernen.';
    const canMove=()=>animationEnabled({reduced:media.matches,paused});
    function later(fn,ms){const t=setTimeout(()=>{timers.delete(t);fn();},ms);timers.add(t);}
    function stopMotion(){epoch++;for(const t of timers)clearTimeout(t);timers.clear();character.classList.remove('is-waving','raccoon-joy','raccoon-stretch','raccoon-curious');}
    function fitCharacter(){
      if(!character.classList.contains('blob-positioned')||matchMedia('(max-width:760px)').matches)return;
      const rect=character.getBoundingClientRect();
      character.style.left=Math.max(4,Math.min(innerWidth-rect.width-4,rect.left))+'px';
      character.style.top=Math.max(4,Math.min(innerHeight-rect.height-4,rect.top))+'px';
    }
    function pose(){
      character.classList.toggle('raccoon-expanded',active&&open&&posesReady);
      character.setAttribute('aria-label',open?'Blob schließen':'Blob öffnen');requestAnimationFrame(fitCharacter);
    }
    function applyMotion(){
      character.classList.toggle('raccoon-motion-active',active&&canMove()&&!document.hidden);
      chat.classList.toggle('raccoon-motion-paused',!canMove());
      toggle.hidden=media.matches;toggle.textContent=paused?'Bewegung einschalten':'Bewegung pausieren';toggle.setAttribute('aria-pressed',String(paused));
      waveButton.disabled=stretchButton.disabled=!canMove();if(!canMove())stopMotion();
    }
    function loadImage(src){return new Promise((resolve,reject)=>{const image=new Image();image.onload=resolve;image.onerror=reject;image.src=src;});}
    function loadPoses(){
      if(poseLoading)return poseLoading;
      const sittingSrc=assets+'sitzend-256.webp',waveSrc=assets+'winkend-256.webp';
      poseLoading=Promise.all([loadImage(sittingSrc),loadImage(waveSrc)]).then(()=>{
        sitting.src=sittingSrc;body.querySelector('[data-raccoon-body]').setAttribute('href',waveSrc);body.querySelector('[data-raccoon-paw]').setAttribute('href',waveSrc);posesReady=true;
      }).catch(()=>{poseLoading=null;});
      return poseLoading;
    }
    async function showBody(greet=false){
      const current=epoch;await loadPoses();
      if(!active||!open||!posesReady)return;
      pose();if(current===epoch&&greet&&canMove()&&!document.hidden)wave();
    }
    function animate(kind,duration){
      stopMotion();if(!active||!open||!posesReady||!canMove()||document.hidden)return;
      void character.offsetWidth;character.classList.add(kind);later(()=>character.classList.remove(kind),duration);
    }
    function wave(){animate('is-waving',2600);}
    function updateScope(){
      const enabled=!failed&&isContext(location.pathname,location.search);
      if(enabled===active)return;
      active=enabled;character.classList.toggle('blob-raccoon',active);chat.classList.toggle('blob-raccoon-chat',active);
      head.hidden=body.hidden=controls.hidden=!active;
      if(active){
        head.src=assets+'gesicht-160.webp';if(line.textContent===originalLine)line.textContent=welcome;
        applyMotion();pose();if(open)showBody(true);
      }else{
        stopMotion();character.classList.remove('raccoon-motion-active','raccoon-expanded');
        if(line.textContent===welcome)line.textContent=originalLine;
      }
    }
    character.addEventListener('transitionend',event=>{if(event.target===character)fitCharacter();});
    head.addEventListener('load',()=>character.classList.add('raccoon-art-ready'));
    head.addEventListener('error',()=>{failed=true;updateScope();});
    toggle.addEventListener('click',()=>{paused=!paused;try{localStorage.setItem(motionKey,paused?'off':'on');}catch{}applyMotion();if(!paused&&open)wave();});
    waveButton.addEventListener('click',wave);
    stretchButton.addEventListener('click',()=>animate('raccoon-stretch',1600));
    character.addEventListener('pointerenter',()=>{if(active&&!open&&canMove()){character.classList.add('raccoon-curious');later(()=>character.classList.remove('raccoon-curious'),1200);}});
    media.addEventListener?.('change',applyMotion);
    window.addEventListener('blob:visibility',event=>{
      const wasOpen=open;open=event.detail?.open===true;stopMotion();pose();
      if(active&&open)showBody(!wasOpen);
    });
    for(const event of ['blob:say','blob:react'])window.addEventListener(event,()=>{if(active&&open)animate('raccoon-joy',900);});
    document.addEventListener('visibilitychange',()=>{if(document.hidden)stopMotion();applyMotion();});
    window.addEventListener('pagehide',stopMotion);
    window.addEventListener('popstate',updateScope);window.addEventListener('pageshow',updateScope);
    const afterInteraction=()=>queueMicrotask(updateScope);
    document.addEventListener('click',afterInteraction);document.addEventListener('change',afterInteraction);
    updateScope();return {updateScope,wave};
  }
  return {RUBY,isContext,animationEnabled,mount};
});
