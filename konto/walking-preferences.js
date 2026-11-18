(function () {
  'use strict';
  const fold=document.getElementById('gassi-angaben');
  const signedIn=document.getElementById('signed-in-panel');
  const client=window.FFE_SUPABASE_CLIENT;
  if(!fold||!signedIn||!client)return;
  const form=fold.querySelector('form'),status=fold.querySelector('[role="status"]');
  let epoch=0,owner=null,loaded=false,busy=false;
  function reset(){epoch++;owner=null;loaded=false;form.hidden=true;form.reset();status.textContent='';}
  async function load(){
    if(!fold.open||signedIn.hidden||loaded||busy)return;
    busy=true;const current=++epoch;status.textContent='Deine Gassi-Angaben werden geladen …';
    try{
      const identity=await client.auth.getUser();if(identity.error)throw identity.error;
      if(!identity.data?.user||current!==epoch||signedIn.hidden)return;
      const {data,error}=await client.rpc('get_place_workspace',{service:'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE'});
      if(error)throw error;if(current!==epoch||signedIn.hidden)return;
      owner=identity.data.user.id;
      form.elements.dog_names.value=(data.dog_names||[]).join(', ');
      form.elements.public_walks.checked=data.public_walks===true;
      form.elements.blob_shortcuts.checked=data.blob_shortcuts!==false;
      loaded=true;form.hidden=false;status.textContent='';
    }catch{if(current===epoch)status.textContent='Die Angaben konnten nicht geladen werden. Öffne diesen Bereich erneut.';}
    finally{busy=false;if(current!==epoch&&fold.open&&!signedIn.hidden)queueMicrotask(load);}
  }
  fold.addEventListener('toggle',load);
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(busy||!loaded||!owner||signedIn.hidden)return;
    const names=form.elements.dog_names.value.split(',').map(s=>s.trim()).filter(Boolean);
    if(names.length>5||names.some(s=>s.length>60)){status.textContent='Bitte gib höchstens fünf Hundenamen mit jeweils maximal 60 Zeichen an.';return;}
    busy=true;const current=epoch;const button=form.querySelector('button');button.disabled=true;
    try{
      const identity=await client.auth.getUser();if(identity.error)throw identity.error;
      if(identity.data?.user?.id!==owner||signedIn.hidden||current!==epoch){reset();return;}
      const details={dog_names:names,public_walks:form.elements.public_walks.checked,blob_shortcuts:form.elements.blob_shortcuts.checked};
      const {error}=await client.rpc('save_place_preferences',{details});if(error)throw error;
      if(current!==epoch||signedIn.hidden)return;
      try{localStorage.setItem('gemden_blob_shortcuts_enabled',JSON.stringify(details.blob_shortcuts));}catch{}
      window.dispatchEvent(new CustomEvent('blob:shortcuts-changed'));
      status.textContent='Deine Gassi-Angaben sind gespeichert.';
    }catch{if(current===epoch)status.textContent='Die Angaben konnten nicht gespeichert werden. Bitte versuche es erneut.';}
    finally{busy=false;button.disabled=false;if(current!==epoch&&fold.open&&!signedIn.hidden)queueMicrotask(load);}
  });
  const observer=new MutationObserver(()=>{if(signedIn.hidden)reset();else load();});
  observer.observe(signedIn,{attributes:true,attributeFilter:['hidden']});
  client.auth.onAuthStateChange(event=>{if(['SIGNED_OUT','SIGNED_IN','USER_UPDATED'].includes(event)){reset();setTimeout(load,0);}});
  window.addEventListener('pagehide',()=>{reset();observer.disconnect();});
  window.addEventListener('pageshow',event=>{if(event.persisted){observer.observe(signedIn,{attributes:true,attributeFilter:['hidden']});load();}});
  load();
})();
