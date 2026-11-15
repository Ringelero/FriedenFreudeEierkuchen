(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else api.mount(root.document,root);
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  function hashId(hash){try{return decodeURIComponent(String(hash||'').replace(/^#/,''));}catch{return '';}}
  function requestedTarget(location){
    const id=hashId(location.hash);if(id)return id;
    const params=new URLSearchParams(location.search||'');
    if(params.get('beispiel')==='lichterkette')return 'wunsch';
    if(['have','can','need','time','chance'].includes(params.get('signal')))return 'moeglichkeitenstrom';
    return 'entdecken';
  }
  function mount(document,window){
    const panels=[...document.querySelectorAll('[data-possibility-view]')],nav=document.querySelector('.possibility-paths');
    if(!panels.length||!nav)return;
    const root=document.getElementById('inhalt');
    function show(id,{focus=false}={}){
      const target=document.getElementById(id),panel=target?.closest('[data-possibility-view]')||(target?panels.find(p=>!p.hidden):null)||panels[0];
      panels.forEach(p=>{p.hidden=p!==panel;});
      nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')==='#'+panel.id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
      let fold=target?.closest('details');while(fold){fold.open=true;fold=fold.parentElement?.closest('details');}
      if(focus){
        const destination=target===panel?panel.querySelector('h2')||panel:target||panel;
        destination.scrollIntoView({block:'start',behavior:'auto'});
        if(!destination.matches('input,select,textarea,button,a'))destination.setAttribute('tabindex','-1');
        destination.focus({preventScroll:true});
      }
      return panel.id;
    }
    root.addEventListener('click',event=>{
      if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      const link=event.target.closest('a[href^="#"]');if(!link)return;
      const id=hashId(link.getAttribute('href')),target=document.getElementById(id);
      if(!target?.closest('[data-possibility-view]'))return;
      event.preventDefault();if(window.location.hash!=='#'+id)window.history.pushState(null,'',window.location.pathname+window.location.search+'#'+encodeURIComponent(id));
      show(id,{focus:true});
    });
    window.addEventListener('hashchange',()=>show(requestedTarget(window.location),{focus:true}));
    const helper=window.FFE_OPPORTUNITY_ENTRY,entry=helper?.readEntry(window.location.search);
    if(helper)document.querySelectorAll('[data-offer-signal]').forEach(link=>{link.href=helper.accountHref(link.dataset.offerSignal,entry?.from);});
    const filters=document.getElementById('moeglichkeiten-filter');
    if(entry&&filters)filters.open=true;
    const selects=['opportunity-filter-signal','opportunity-filter-mode','opportunity-filter-location'].map(id=>document.getElementById(id)).filter(Boolean);
    function reflectFilters(){
      const active=selects.filter(select=>select.value),state=document.getElementById('possibility-active-filters');
      if(!state)return;state.hidden=!active.length;
      document.getElementById('possibility-filter-label').textContent=active.map(select=>select.selectedOptions[0]?.textContent).join(' · ');
    }
    selects.forEach(select=>select.addEventListener('change',reflectFilters));
    document.getElementById('possibility-clear-filters')?.addEventListener('click',()=>{selects.forEach(select=>{select.value='';select.dispatchEvent(new window.Event('change',{bubbles:true}));});reflectFilters();});
    reflectFilters();
    show(requestedTarget(window.location),{focus:Boolean(window.location.hash||entry)});
    return {show};
  }
  return {hashId,requestedTarget,mount};
});
