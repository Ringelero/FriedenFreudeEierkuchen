(function () {
  const kinds={problem:'Problem',improvement:'Verbesserung',idea:'Idee',wish:'Wunsch'};
  const states={open:'Offen',planned:'Geplant',working:'In Arbeit',done:'Erledigt',closed:'Geschlossen'};
  function cleanPath(value){return typeof value==='string'&&value.length<=300&&/^\/[a-zA-Z0-9_./-]*$/.test(value)&&!value.startsWith('//')&&!value.includes('..')?value:'';}
  function message(error){return ['22023','42501','54000','40001','P0002'].includes(error?.code)?error.message:'Das hat gerade nicht geklappt. Dein Text bleibt stehen. Bitte versuche es später erneut.';}
  if(typeof module==='object'&&module.exports){module.exports={cleanPath,message};return;}
  const client=window.FFE_SUPABASE_CLIENT;
  const $=id=>document.getElementById(id);
  let user=null,guestToken=null,page=0,canManage=false,request=0,submission=crypto.randomUUID(),ready=false;
  const path=cleanPath(new URLSearchParams(location.search).get('seite'));
  window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
  const status=(target,text,state)=>{target.textContent=text;target.dataset.state=state||'';};
  function element(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
  async function rpc(name,args){const {data,error}=await client.rpc(name,args);if(error)throw error;return data;}
  function guestAccess(){
    const key='gemden_feedback_guest_v1';let token=localStorage.getItem(key);
    if(!/^[a-f0-9]{64}$/.test(token||'')){token=Array.from(crypto.getRandomValues(new Uint8Array(32)),v=>v.toString(16).padStart(2,'0')).join('');localStorage.setItem(key,token);}
    if(localStorage.getItem(key)!==token)throw new Error('local storage');return token;
  }
  function renderTicket(item){
    const card=element('details',undefined,'ticket-card');
    const summary=element('summary');const meta=element('div',undefined,'ticket-meta');
    meta.append(element('span',`${kinds[item.kind]||'Ticket'} · ${new Date(item.created_at).toLocaleDateString('de-DE')}`));
    const badge=element('span',states[item.state]||item.state,'ticket-badge');badge.dataset.state=item.state;meta.append(badge);
    summary.append(meta,element('h3',item.title));card.append(summary,element('p',item.body,'ticket-content'));
    const safePath=cleanPath(item.page_path);if(safePath){const p=element('p',undefined,'quiet');const a=element('a',safePath);a.href=safePath;p.append('Seite: ',a);card.append(p);}
    if(item.response){const p=element('p',undefined,'ticket-response');p.append(element('strong','Rückmeldung'),document.createTextNode(item.response));card.append(p);}
    const localStatus=element('p','','feedback-status');localStatus.setAttribute('role','status');
    if(canManage&&$('ticket-manage').checked){
      const form=element('form',undefined,'ticket-admin');const stateLabel=element('label','Bearbeitungsstand');const select=element('select');
      for(const [key,label] of Object.entries(states)){const option=element('option',label);option.value=key;select.append(option);}select.value=item.state;stateLabel.append(select);
      const noteLabel=element('label','Rückmeldung für die Person');const note=element('textarea');note.rows=3;note.maxLength=2000;note.value=item.response||'';noteLabel.append(note);
      const save=element('button','Stand speichern','button secondary');save.type='submit';form.append(stateLabel,noteLabel,save);
      form.addEventListener('submit',async event=>{event.preventDefault();save.disabled=true;try{await rpc('change_ticket',{ticket_id:item.id,expected_version:item.version,next_state:select.value,response_note:note.value});await load();}catch(error){status(localStatus,message(error),'error');save.disabled=false;}});card.append(form);
    }
    if(item.mine){const remove=element('button','Eigenes Ticket löschen','ticket-delete');remove.type='button';remove.addEventListener('click',async()=>{if(!confirm('Dieses Ticket und seine Rückmeldung dauerhaft löschen?'))return;remove.disabled=true;try{await rpc('remove_ticket',{ticket_id:item.id,guest_token:guestToken});await load();}catch(error){status(localStatus,message(error),'error');remove.disabled=false;}});card.append(remove);}
    card.append(localStatus);return card;
  }
  async function load(){
    const serial=++request;$('ticket-refresh').disabled=true;status($('list-status'),'Tickets werden geladen …');
    try{
      const data=await rpc('get_ticket_workspace',{guest_token:guestToken,manage:$('ticket-manage').checked,page,filter_state:$('ticket-filter').value});
      if(serial!==request)return;canManage=data.can_manage===true;$('manage-wrap').hidden=!canManage;
      $('ticket-list-title').textContent=$('ticket-manage').checked?'Ticketverwaltung.':'Deine Tickets.';
      $('ticket-list').replaceChildren(...data.items.map(renderTicket));
      if(!data.items.length){const empty=element('div',undefined,'feedback-empty');empty.append(element('strong','Hier ist noch Platz.'),document.createTextNode('Für diese Auswahl gibt es noch keine Tickets.'));$('ticket-list').append(empty);}
      $('ticket-prev').hidden=page===0;$('ticket-next').hidden=!data.has_more;
      status($('list-status'),`${data.items.length} Tickets${page?` · Seite ${page+1}`:''}`);
    }catch(error){if(serial===request){$('ticket-list').replaceChildren();status($('list-status'),message(error),'error');}}
    finally{if(serial===request)$('ticket-refresh').disabled=false;}
  }
  $('ticket-form').addEventListener('submit',async event=>{
    event.preventDefault();if(!ready||!$('ticket-form').reportValidity())return;
    const button=$('ticket-submit');button.disabled=true;status($('submit-status'),'Dein Ticket wird gespeichert …');
    try{
      await rpc('submit_ticket',{guest_token:guestToken,submission_id:submission,details:{kind:new FormData($('ticket-form')).get('kind'),title:$('ticket-title').value.trim(),body:$('ticket-body').value.trim(),page_path:path}});
      submission=crypto.randomUUID();$('ticket-form').reset();page=0;$('ticket-filter').value='all';status($('submit-status'),'Angekommen. Du findest dein Ticket und den Bearbeitungsstand in deiner Liste.','success');await load();
    }catch(error){status($('submit-status'),message(error),'error');}finally{button.disabled=false;}
  });
  $('ticket-refresh').addEventListener('click',load);$('ticket-manage').addEventListener('change',()=>{page=0;load();});$('ticket-filter').addEventListener('change',()=>{page=0;load();});
  $('ticket-prev').addEventListener('click',()=>{page=Math.max(0,page-1);load();});$('ticket-next').addEventListener('click',()=>{page++;load();});
  if(path){$('page-context').hidden=false;$('page-context').textContent='Bezieht sich auf: '+path;}
  (async()=>{
    try{
      if(!client)throw new Error('client');const {data,error}=await client.auth.getSession();if(error)throw error;user=data.session?.user||null;
      if(user){$('identity-note').textContent='Mit deinem Konto verbunden. Deine Tickets sind auch auf anderen Geräten für dich erreichbar.';}
      else{guestToken=guestAccess();$('identity-note').replaceChildren(document.createTextNode('Als Gast: Zugriff auf deine Tickets bleibt auf diesem Browser. Mit einem '));const link=element('a','Konto');link.href='../konto/';$('identity-note').append(link,document.createTextNode(' findest du neue Tickets geräteübergreifend.'));}
      client.auth.onAuthStateChange((_event,session)=>{if((session?.user?.id||null)!==(user?.id||null)){document.querySelector('main').hidden=true;setTimeout(()=>location.reload(),0);}});
      ready=true;$('ticket-submit').disabled=false;await load();
    }catch{status($('identity-note'),'Der Zugang konnte nicht geöffnet werden. Bitte verwende dein Konto oder erlaube die lokale Speicherung für Gasttickets.','error');}
  })();
})();
