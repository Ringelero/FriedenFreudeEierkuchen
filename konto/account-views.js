(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else api.mount(root.document,root);
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  function hashId(hash){try{return decodeURIComponent(String(hash||'').replace(/^#/,''));}catch{return '';}}
  function requestedTarget(location){
    const id=hashId(location.hash);if(id&&!id.includes('='))return id;
    const params=new URLSearchParams(location.search||'');
    if(/^[a-f0-9-]{36}$/i.test(params.get('anfrage')||''))return 'konto-kontakte';
    if(/^[a-f0-9-]{36}$/i.test(params.get('resonanz')||''))return 'resonance-center';
    if(['have','can','need','time','chance'].includes(params.get('signal')))return 'opportunity-workspace';
    if(params.get('type')==='recovery'||/(?:^#|&)type=recovery(?:&|$)/.test(location.hash||''))return 'password-form';
    return 'konto-uebersicht';
  }
  function mount(document,window){
    const panels=[...document.querySelectorAll('[data-account-view]')],nav=document.querySelector('.account-view-nav');
    if(!panels.length||!nav)return;
    function show(id,{focus=false}={}){
      const target=document.getElementById(id),panel=target?.closest('[data-account-view]')||panels[0];
      panels.forEach(p=>{p.hidden=p!==panel;});
      nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')==='#'+panel.id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
      let fold=target?.closest('details');while(fold){fold.open=true;fold=fold.parentElement?.closest('details');}
      if(focus&&!document.getElementById('signed-in-panel').hidden){
        const destination=target||panel;destination.scrollIntoView({block:'start',behavior:'auto'});
        if(!destination.matches('input,select,textarea,button,a'))destination.setAttribute('tabindex','-1');
        destination.focus({preventScroll:true});
      }
      if(window.CustomEvent)window.dispatchEvent(new window.CustomEvent('gemden:account-view',{detail:{id:panel.id}}));
      return panel.id;
    }
    document.getElementById('signed-in-panel').addEventListener('click',event=>{
      if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      const a=event.target.closest('a[href^="#"]');if(!a)return;
      const id=hashId(a.getAttribute('href')),target=document.getElementById(id);if(!target?.closest('[data-account-view]'))return;
      event.preventDefault();if(window.location.hash!=='#'+id)window.history.pushState(null,'',window.location.pathname+window.location.search+'#'+encodeURIComponent(id));
      show(id,{focus:true});
    });
    window.addEventListener('hashchange',()=>show(requestedTarget(window.location),{focus:true}));
    document.getElementById('account-blob-open').addEventListener('click',()=>{
      const blob=document.getElementById('blob-character');if(blob?.getAttribute('aria-expanded')!=='true')blob?.click();
      document.querySelector('#blob-suggestions [data-intent]')?.focus({preventScroll:true});
    });
    show(requestedTarget(window.location));
    return {show};
  }
  return {hashId,requestedTarget,mount};
});
