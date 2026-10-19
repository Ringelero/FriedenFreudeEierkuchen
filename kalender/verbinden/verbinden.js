(function(){
  function connectionState(value){
    try{const u=new URL(value?.serverUrl);const h=u.hostname.toLowerCase();if(value.enabled!==true||u.protocol!=='https:'||u.username||u.password||u.search||u.hash||h==='localhost'||h.endsWith('.local')||h.startsWith('127.')||h==='[::1]'||/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(h))return null;return {serverUrl:u.href};}catch{return null;}
  }
  function deviceState(device,now=Date.now()){return device.revoked_at?'Widerrufen':Date.parse(device.expires_at)<=now?'Abgelaufen':'Aktiv';}
  if(typeof module==='object'&&module.exports){module.exports={connectionState,deviceState};return;}
  const $=id=>document.getElementById(id),config=connectionState(window.GemDenCalendarConnection);
  let client=config?window.FFE_SUPABASE_CLIENT:null,user=null,revision=0,busy=false;
  function script(src){return new Promise((resolve,reject)=>{const el=document.createElement('script');el.src=src;el.onload=resolve;el.onerror=reject;document.head.append(el);});}
  function node(tag,text,cls){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(cls)el.className=cls;return el;}
  function status(text,state=''){const el=$('device-status');el.textContent=text;el.dataset.state=state;}
  function closeSecret(){for(const id of ['device-server','device-user','device-secret'])$(id).value='';$('device-secret').type='password';$('device-secret-show').textContent='Schlüssel anzeigen';$('device-secret-show').setAttribute('aria-pressed','false');$('device-secret-panel').hidden=true;}
  function message(error){return ['22023','42501','54000'].includes(error?.code)?error.message:'Der Zugang konnte gerade nicht aktualisiert werden. Lade zuerst die Liste neu, bevor du einen weiteren Zugang erstellst.';}
  async function rpc(action,args={}){const {data,error}=await client.rpc('calendar_devices',{requested_action:action,...args});if(error)throw error;return data;}
  async function load(){
    if(!config||!user)return;const current=++revision;$('devices-reload').disabled=true;
    try{const devices=await rpc('list');if(current!==revision)return;const target=$('device-list');target.replaceChildren();for(const device of devices){const state=deviceState(device),card=node('article',undefined,'connect-device-item'),info=node('div');info.append(node('strong',device.name),node('p',state+' · Erstellt am '+new Date(device.created_at).toLocaleDateString('de-DE')),node('p','Gültig bis '+new Date(device.expires_at).toLocaleDateString('de-DE')));card.append(info);if(state==='Aktiv'){const button=node('button','Zugang widerrufen','button secondary');button.type='button';button.addEventListener('click',()=>{
      button.hidden=true;const prompt=node('div',undefined,'connect-device-confirm'),confirmButton=node('button','Ja, Zugang widerrufen','button secondary'),cancelButton=node('button','Zugang behalten','button secondary');confirmButton.type=cancelButton.type='button';prompt.append(node('p','Das Gerät kann danach nicht weiter abgleichen. Bereits übertragene Termine bleiben auf dem Gerät.'),confirmButton,cancelButton);info.append(prompt);cancelButton.addEventListener('click',()=>{prompt.remove();button.hidden=false;button.focus();});confirmButton.addEventListener('click',async()=>{confirmButton.disabled=cancelButton.disabled=true;try{await rpc('revoke',{device_id:device.id});if(current!==revision)return;closeSecret();status('Der Gerätezugang wurde widerrufen.','success');await load();}catch(error){if(current===revision){status(message(error),'error');confirmButton.disabled=cancelButton.disabled=false;}}});confirmButton.focus();
    });card.append(button);}target.append(card);}if(!devices.length)target.append(node('p','Du hast noch keine Gerätezugänge erstellt.','quiet'));}
    catch(error){if(current===revision)status(message(error),'error');}finally{if(current===revision)$('devices-reload').disabled=false;}
  }
  $('device-form').addEventListener('submit',async event=>{
    event.preventDefault();if(!config||!user||busy)return;if(!$('device-secret-panel').hidden){status('Richte zuerst das angezeigte Gerät ein oder bewahre seinen Schlüssel sicher auf. Schließe danach die Zugangsdaten, bevor du einen weiteren Zugang erstellst.');$('device-secret-close').focus();return;}
    closeSecret();busy=true;$('device-create').disabled=true;const owner=user.id;let secret;
    try{
      secret=Array.from(crypto.getRandomValues(new Uint8Array(32)),value=>value.toString(16).padStart(2,'0')).join('');
      const device=await rpc('create',{device_name:$('device-name').value.trim(),device_secret:secret,time_zone:Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC'});
      if(user?.id!==owner)return;
      $('device-server').value=config.serverUrl;$('device-user').value=device.id;$('device-secret').value=secret;$('device-secret-panel').hidden=false;$('device-name').value='';status('Gerätezugang erstellt. Trage die Daten jetzt in deiner Kalender-App ein.','success');$('device-secret-panel').scrollIntoView({behavior:'smooth',block:'start'});await load();
    }catch(error){if(user?.id===owner){status(message(error),'error');await load();}}finally{secret=null;busy=false;$('device-create').disabled=false;}
  });
  $('device-secret-close').addEventListener('click',closeSecret);
  $('device-secret-show').addEventListener('click',()=>{const show=$('device-secret').type==='password';$('device-secret').type=show?'text':'password';$('device-secret-show').textContent=show?'Schlüssel verbergen':'Schlüssel anzeigen';$('device-secret-show').setAttribute('aria-pressed',String(show));});
  $('device-secret-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('device-secret').value);status('Geräteschlüssel kopiert. Füge ihn ausschließlich in deiner Kalender-App ein.');}catch{status('Kopieren ist hier nicht verfügbar. Zeige den Schlüssel an und kopiere ihn über die Textauswahl.');}});
  $('devices-reload').addEventListener('click',load);
  window.addEventListener('pagehide',closeSecret);
  window.addEventListener('pageshow',event=>{if(event.persisted){closeSecret();document.querySelector('main').hidden=true;location.reload();}});
  (async()=>{
    if(!config)return;
    try{
      if(!client){if(!window.supabase?.createClient)await script('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.3/dist/umd/supabase.js');if(!window.FFE_SUPABASE_CONFIG)await script('../../assets/supabase-config.js');await script('../../assets/supabase-client.js');client=window.FFE_SUPABASE_CLIENT;}
      if(!client)throw Error('connection');const {data,error}=await client.auth.getSession();if(error)throw error;user=data.session?.user||null;
      client.auth.onAuthStateChange((_event,session)=>{if((session?.user?.id||null)!==(user?.id||null)){user=null;revision++;closeSecret();$('device-list').replaceChildren();document.querySelector('main').hidden=true;setTimeout(()=>location.reload(),0);}});
      $('connection-state-badge').textContent='Kalenderzugang freigeschaltet';$('connection-waiting').hidden=true;
      if(!user){$('device-access-note').replaceChildren(document.createTextNode('Melde dich an, um deinen persönlichen Kalender zu verbinden. '));const link=node('a','Zum Konto');link.href='../../konto/';$('device-access-note').append(link);return;}
      $('devices-intro').textContent='Erstelle für jedes Gerät einen eigenen Zugang. Hier kannst du ihn später wieder widerrufen.';$('devices-ready').hidden=false;$('device-access-note').hidden=true;await load();
    }catch{status('Die Geräteverwaltung ist gerade nicht erreichbar. Deine Kalender-App kannst du später verbinden.','error');}
  })();
})();
