(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else {const target=api.accountTarget(root.location.href);const link=root.document.querySelector('[data-care-account-link]');if(link)link.href=target;root.location.replace(target);}})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 function accountTarget(pageUrl){
  const source=new URL(pageUrl),english=/^\/en(?:\/|$)/.test(source.pathname),target=new URL((english?'/en':'')+'/konto/',source.origin);
  const response=source.searchParams.get('anfrage');
  if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(response||''))target.searchParams.set('anfrage',response);
  target.hash=['#kontakte','#austausch','#absprache'].includes(source.hash)?source.hash:'#konto-kontakte';
  return target.href;
 }
 return {accountTarget};
});
