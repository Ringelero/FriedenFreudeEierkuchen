(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else api.mount(root.document,root);})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 function mount(document,window,options={}){
  const panel=document.getElementById('konto-kontakte'),signedIn=document.getElementById('signed-in-panel');
  if(!panel||!signedIn)return;
  const status=panel.querySelector('[data-care-status]'),retry=panel.querySelector('[data-care-retry]');
  let loaded=false,loading=null,disposed=false;
  function load(){
   return new Promise((resolve,reject)=>{
    const css=document.createElement('link');css.rel='stylesheet';css.href=new URL('../assets/care-workspace.css?v=20261027-1',window.location.href).href;document.head.append(css);
    const script=document.createElement('script');script.src=new URL('../assets/care-workspace.js?v=20261027-1',window.location.href).href;
    script.onload=resolve;script.onerror=()=>{script.remove();css.remove();reject(new Error('care-load'));};document.head.append(script);
   });
  }
  function activate(){
   if(disposed||loaded||loading||signedIn.hidden||panel.hidden)return loading;
   retry.hidden=true;status.textContent='Kontakte und Absprachen werden geladen …';
   loading=(options.load||load)().then(()=>{loaded=true;}).catch(()=>{
    if(!disposed){status.textContent='Deine Kontakte konnten gerade nicht geladen werden. Bitte versuche es erneut.';retry.hidden=false;}
   }).finally(()=>{loading=null;});
   return loading;
  }
  window.addEventListener('gemden:account-view',activate);
  const observer=new window.MutationObserver(activate);observer.observe(signedIn,{attributes:true,attributeFilter:['hidden']});
  retry.addEventListener('click',activate);window.addEventListener('pagehide',()=>{disposed=true;observer.disconnect();});
  activate();return {activate};
 }
 return {mount};
});
