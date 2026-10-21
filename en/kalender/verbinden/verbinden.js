(function(){
  function connectionState(value){
    try{const u=new URL(value?.serverUrl);const h=u.hostname.toLowerCase();if(value.enabled!==true||u.protocol!=='https:'||u.username||u.password||u.search||u.hash||h==='localhost'||h.endsWith('.local')||h.startsWith('127.')||h==='[::1]'||/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(h))return null;return {serverUrl:u.href};}catch{return null;}
  }
  function deviceState(device,now=Date.now()){return device.revoked_at?"Revoke":Date.parse(device.expires_at)<=now?"Expired":"Active";}
  if(typeof module==='object'&&module.exports){module.exports={connectionState,deviceState};return;}
  const $=id=>document.getElementById(id),config=connectionState(window.GemDenCalendarConnection);
  let client=config?window.FFE_SUPABASE_CLIENT:null,user=null,revision=0,busy=false;
  function script(src){return new Promise((resolve,reject)=>{const el=document.createElement('script');el.src=src;el.onload=resolve;el.onerror=reject;document.head.append(el);});}
  function node(tag,text,cls){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(cls)el.className=cls;return el;}
  function status(text,state=''){const el=$('device-status');el.textContent=text;el.dataset.state=state;}
  function closeSecret(){for(const id of ['device-server','device-user','device-secret'])$(id).value='';$('device-secret').type='password';$('device-secret-show').textContent="Show key";$('device-secret-show').setAttribute('aria-pressed','false');$('device-secret-panel').hidden=true;}
  function message(error){return ['22023','42501','54000'].includes(error?.code)?error.message:"Access could not be refreshed right now. Reload the list before creating another access credential.";}
  async function rpc(action,args={}){const {data,error}=await client.rpc('calendar_devices',{requested_action:action,...args});if(error)throw error;return data;}
  async function load(){
    if(!config||!user)return;const current=++revision;$('devices-reload').disabled=true;
    try{const devices=await rpc('list');if(current!==revision)return;const target=$('device-list');target.replaceChildren();for(const device of devices){const state=deviceState(device),card=node('article',undefined,'connect-device-item'),info=node('div');info.append(node('strong',device.name),node('p',state+" · Created on "+new Date(device.created_at).toLocaleDateString("en-GB")),node('p',"Valid until "+new Date(device.expires_at).toLocaleDateString("en-GB")));card.append(info);if(state==="Active"){const button=node('button',"Revoke access",'button secondary');button.type='button';button.addEventListener('click',()=>{
      button.hidden=true;const prompt=node('div',undefined,'connect-device-confirm'),confirmButton=node('button',"Yes, revoke access",'button secondary'),cancelButton=node('button',"Keep access",'button secondary');confirmButton.type=cancelButton.type='button';prompt.append(node('p',"The device will then be unable to sync further. Events already transferred remain on the device."),confirmButton,cancelButton);info.append(prompt);cancelButton.addEventListener('click',()=>{prompt.remove();button.hidden=false;button.focus();});confirmButton.addEventListener('click',async()=>{confirmButton.disabled=cancelButton.disabled=true;try{await rpc('revoke',{device_id:device.id});if(current!==revision)return;closeSecret();status("Device access has been revoked.",'success');await load();}catch(error){if(current===revision){status(message(error),'error');confirmButton.disabled=cancelButton.disabled=false;}}});confirmButton.focus();
    });card.append(button);}target.append(card);}if(!devices.length)target.append(node('p',"You haven't created any device access credentials yet.",'quiet'));}
    catch(error){if(current===revision)status(message(error),'error');}finally{if(current===revision)$('devices-reload').disabled=false;}
  }
  $('device-form').addEventListener('submit',async event=>{
    event.preventDefault();if(!config||!user||busy)return;if(!$('device-secret-panel').hidden){status("First set up the displayed device or store its key safely. Then close the access details before creating another credential.");$('device-secret-close').focus();return;}
    closeSecret();busy=true;$('device-create').disabled=true;const owner=user.id;let secret;
    try{
      secret=Array.from(crypto.getRandomValues(new Uint8Array(32)),value=>value.toString(16).padStart(2,'0')).join('');
      const device=await rpc('create',{device_name:$('device-name').value.trim(),device_secret:secret,time_zone:Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC'});
      if(user?.id!==owner)return;
      $('device-server').value=config.serverUrl;$('device-user').value=device.id;$('device-secret').value=secret;$('device-secret-panel').hidden=false;$('device-name').value='';status("Device access created. Enter the details in your calendar app now.",'success');$('device-secret-panel').scrollIntoView({behavior:'smooth',block:'start'});await load();
    }catch(error){if(user?.id===owner){status(message(error),'error');await load();}}finally{secret=null;busy=false;$('device-create').disabled=false;}
  });
  $('device-secret-close').addEventListener('click',closeSecret);
  $('device-secret-show').addEventListener('click',()=>{const show=$('device-secret').type==='password';$('device-secret').type=show?'text':'password';$('device-secret-show').textContent=show?"Hide key":"Show key";$('device-secret-show').setAttribute('aria-pressed',String(show));});
  $('device-secret-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('device-secret').value);status("Device key copied. Paste it only into your calendar app.");}catch{status("Copying is unavailable here. Display the key and copy it by selecting the text.");}});
  $('devices-reload').addEventListener('click',load);
  window.addEventListener('pagehide',closeSecret);
  window.addEventListener('pageshow',event=>{if(event.persisted){closeSecret();document.querySelector('main').hidden=true;location.reload();}});
  (async()=>{
    if(!config)return;
    try{
      if(!client){if(!window.supabase?.createClient)await script('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.3/dist/umd/supabase.js');if(!window.FFE_SUPABASE_CONFIG)await script('../../assets/supabase-config.js');await script('../../assets/supabase-client.js');client=window.FFE_SUPABASE_CLIENT;}
      if(!client)throw Error('connection');const {data,error}=await client.auth.getSession();if(error)throw error;user=data.session?.user||null;
      client.auth.onAuthStateChange((_event,session)=>{if((session?.user?.id||null)!==(user?.id||null)){user=null;revision++;closeSecret();$('device-list').replaceChildren();document.querySelector('main').hidden=true;setTimeout(()=>location.reload(),0);}});
      $('connection-state-badge').textContent="Calendar access enabled";$('connection-waiting').hidden=true;
      if(!user){$('device-access-note').replaceChildren(document.createTextNode("Sign in to connect your personal calendar. "));const link=node('a',"Go to your account");link.href='../../konto/';$('device-access-note').append(link);return;}
      $('devices-intro').textContent="Create separate access credentials for each device. You can revoke them here later.";$('devices-ready').hidden=false;$('device-access-note').hidden=true;await load();
    }catch{status("Device management is currently unavailable. You can connect your calendar app later.",'error');}
  })();
})();
