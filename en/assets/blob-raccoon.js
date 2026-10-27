(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.GemDenBlobRaccoon=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const RUBY='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
  const motionKey='gemden_blob_raccoon_motion_v1';
  function isContext(path,search=''){
    const p=String(path||'').replace(/^\/en(?=\/)/,'').replace(/index\.html$/,'');
    if(p.includes('..')||/[\\%]/.test(p))return false;
    if(/^\/leistungen\/rubybubys-herz-und-schnauze(?:\/|$)/.test(p))return true;
    const params=new URLSearchParams(search);
    return /^\/treffpunkte\/?$/.test(p)&&params.get('leistung')===RUBY||/^\/kalender\/?$/.test(p)&&params.get('kalender')==='CICEK';
  }
  const animationEnabled=({reduced=false,paused=false}={})=>!reduced&&!paused;
  function mount({root:relativeRoot,chat,character}){
    if(chat.querySelector('.blob-raccoon-greeting'))return;
    const base=new URL(relativeRoot,location.href),assets=new URL('/assets/blob-waschbaer/',base).href;
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused=false;try{paused=localStorage.getItem(motionKey)==='off';}catch{}
    let active=false,open=chat.classList.contains('open'),failed=false,epoch=0,waveTimer=null,poseLoading=null,posesReady=false;
    const head=document.createElement('img');head.className='blob-raccoon-head';head.alt='';head.width=160;head.height=138;head.draggable=false;head.hidden=true;character.append(head);
    const greeting=document.createElement('div');greeting.className='blob-raccoon-greeting';greeting.hidden=true;
    greeting.innerHTML="<button type=\"button\" class=\"blob-raccoon-figure\" aria-label=\"Let Blob wave\" title=\"Let Blob wave\"><img class=\"blob-raccoon-sitting\" alt=\"\" width=\"234\" height=\"256\"><svg class=\"blob-raccoon-wave\" viewBox=\"0 0 710 800\" aria-hidden=\"true\" focusable=\"false\"><defs><clipPath id=\"blob-raccoon-body\"><path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M0 0H710V800H0Z M13 209L126 209L146 336L168 378L220 427L241 454L223 508L114 494L48 426L13 350Z\"/></clipPath><clipPath id=\"blob-raccoon-paw\"><path d=\"M13 209L126 209L146 336L168 378L220 427L241 454L223 508L114 494L48 426L13 350Z\"/></clipPath></defs><image data-raccoon-body width=\"710\" height=\"800\" clip-path=\"url(#blob-raccoon-body)\"/><g class=\"blob-raccoon-paw\"><image data-raccoon-paw width=\"710\" height=\"800\" clip-path=\"url(#blob-raccoon-paw)\"/></g></svg></button><div class=\"blob-raccoon-caption\"><strong>Blob</strong><span>Herz und Schnauze</span><button type=\"button\" class=\"blob-raccoon-motion\" aria-pressed=\"false\">Pause movement</button></div>";
    chat.prepend(greeting);
    const figure=greeting.querySelector('.blob-raccoon-figure'),sitting=greeting.querySelector('.blob-raccoon-sitting'),toggle=greeting.querySelector('.blob-raccoon-motion');
    const line=chat.querySelector('#blob-line'),originalLine=line.textContent,welcome="Your companion for walks, care and learning together.";
    const canMove=()=>animationEnabled({reduced:media.matches,paused});
    function stopWave(){epoch++;clearTimeout(waveTimer);waveTimer=null;greeting.classList.remove('is-waving');}
    function applyMotion(){
      character.classList.toggle('raccoon-motion-active',active&&canMove());
      chat.classList.toggle('raccoon-motion-paused',!canMove());
      toggle.hidden=media.matches;toggle.textContent=paused?"Enable movement":"Pause movement";toggle.setAttribute('aria-pressed',String(paused));
      figure.disabled=!canMove();if(!canMove())stopWave();
    }
    function loadImage(src){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve();image.onerror=reject;image.src=src;});}
    function loadPoses(){
      if(poseLoading)return poseLoading;
      const sittingSrc=assets+'sitzend-256.webp',waveSrc=assets+'winkend-256.webp';
      poseLoading=Promise.all([loadImage(sittingSrc),loadImage(waveSrc)]).then(()=>{
        sitting.src=sittingSrc;greeting.querySelector('[data-raccoon-body]').setAttribute('href',waveSrc);greeting.querySelector('[data-raccoon-paw]').setAttribute('href',waveSrc);posesReady=true;
      }).catch(()=>{poseLoading=null;});
      return poseLoading;
    }
    async function wave(){
      stopWave();if(!active||!open||!canMove()||document.hidden)return;
      const current=epoch;await loadPoses();
      if(current!==epoch||!posesReady||!active||!open||!canMove()||document.hidden)return;
      void greeting.offsetWidth;greeting.classList.add('is-waving');waveTimer=setTimeout(()=>{greeting.classList.remove('is-waving');waveTimer=null;},2600);
    }
    function updateScope(){
      const enabled=!failed&&isContext(location.pathname,location.search);
      if(enabled===active)return;
      active=enabled;character.classList.toggle('blob-raccoon',active);chat.classList.toggle('blob-raccoon-chat',active);head.hidden=greeting.hidden=!active;
      if(active){
        head.src=assets+'gesicht-160.webp';if(!sitting.getAttribute('src'))sitting.src=head.src;
        if(line.textContent===originalLine)line.textContent=welcome;
        applyMotion();if(open)wave();
      }else{stopWave();character.classList.remove('raccoon-motion-active');if(line.textContent===welcome)line.textContent=originalLine;}
    }
    head.addEventListener('load',()=>character.classList.add('raccoon-art-ready'));
    head.addEventListener('error',()=>{failed=true;updateScope();});
    toggle.addEventListener('click',()=>{paused=!paused;try{localStorage.setItem(motionKey,paused?'off':'on');}catch{}applyMotion();if(!paused)wave();});
    figure.addEventListener('click',wave);
    media.addEventListener?.('change',applyMotion);
    window.addEventListener('blob:visibility',event=>{
      const wasOpen=open;open=event.detail?.open===true;
      if(!open){stopWave();return;}
      if(active){loadPoses();if(!wasOpen)wave();}
    });
    document.addEventListener('visibilitychange',()=>{if(document.hidden)stopWave();});
    window.addEventListener('pagehide',stopWave);
    window.addEventListener('popstate',updateScope);
    window.addEventListener('pageshow',updateScope);
    // These pages update their public URL synchronously in click/change handlers.
    const afterInteraction=()=>queueMicrotask(updateScope);
    document.addEventListener('click',afterInteraction);
    document.addEventListener('change',afterInteraction);
    updateScope();
    return {updateScope,wave};
  }
  return {RUBY,isContext,animationEnabled,mount};
});
