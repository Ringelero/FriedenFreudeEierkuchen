(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else if(root.document)api.mount(root.document,root);
})(typeof window==='undefined'?globalThis:window,function(){
  'use strict';
  function normalize(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss').toLowerCase().trim();}
  function matches(text,query){const value=normalize(text);return normalize(query).split(/\s+/).filter(Boolean).every(word=>value.includes(word));}
  function filtered(items,query,category='all'){return items.map(item=>(category==='all'||item.category===category)&&matches(item.search,query));}
  function mount(document,window){
    const search=document.querySelector('[data-learning-search]');
    if(search){
      const cards=Array.from(document.querySelectorAll('[data-learning-card]'));
      const groups=Array.from(document.querySelectorAll('[data-learning-group]'));
      const categories=Array.from(document.querySelectorAll('[data-learning-category]'));
      const items=cards.map(card=>({category:card.dataset.category,search:card.dataset.search}));
      const count=document.querySelector('[data-learning-count]');
      const empty=document.querySelector('[data-learning-empty]');
      let category='all';
      function apply(){const visible=filtered(items,search.value,category);cards.forEach((card,i)=>{card.hidden=!visible[i];});groups.forEach(group=>{group.hidden=!cards.some(card=>card.dataset.category===group.dataset.learningGroup&&!card.hidden);});count.value=String(visible.filter(Boolean).length);count.textContent=count.value;empty.hidden=visible.some(Boolean);categories.forEach(link=>{if(link.dataset.learningCategory===category)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});}
      search.addEventListener('input',apply);
      categories.forEach(link=>link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button)return;category=link.dataset.learningCategory;search.value='';apply();}));
      document.querySelector('[data-learning-reset]').addEventListener('click',()=>{category='all';search.value='';apply();search.focus();});
      window.addEventListener('hashchange',()=>{const id=window.location.hash.slice(1);const target=document.getElementById(id);if(target&&target.hasAttribute('data-learning-card')){category='all';search.value='';apply();}});
      document.querySelector('[data-learning-search-area]').hidden=false;
      apply();
    }
    document.querySelectorAll('[data-learning-video]').forEach(box=>{
      const button=box.querySelector('[data-learning-load-video]');
      button?.addEventListener('click',()=>{
        const id=box.dataset.learningVideo;
        if(!/^[a-zA-Z0-9_-]{11}$/.test(id)||box.querySelector('iframe'))return;
        const frame=document.createElement('iframe');
        frame.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=0&rel=0';
        frame.title=box.dataset.videoTitle;
        frame.loading='lazy';
        frame.referrerPolicy='strict-origin-when-cross-origin';
        frame.allow='encrypted-media; picture-in-picture; fullscreen';
        frame.allowFullscreen=true;
        frame.className='house-video-frame';
        button.replaceWith(frame);
      });
    });
    const motion=document.querySelector('[data-learning-motion]');
    if(motion&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){motion.hidden=false;motion.addEventListener('click',()=>{const scene=document.querySelector('[data-learning-scene]');const active=scene.classList.toggle('is-animated');motion.setAttribute('aria-pressed',String(active));motion.textContent=active?"Pause animation":"Bring the learning house to life";});}
    const toc=document.querySelector('[data-learning-toc]');
    if(toc&&window.matchMedia('(min-width: 901px)').matches)toc.open=true;
  }
  return {normalize,matches,filtered,mount};
});
