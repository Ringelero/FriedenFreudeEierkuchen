(function () {
  const kinds={problem:'Problem',improvement:'Verbesserung',idea:'Idee',wish:'Wunsch'};
  const states={open:'Offen',planned:'Geplant',working:'In Arbeit',done:'Erledigt',closed:'Geschlossen'};
  function cleanPath(value){return typeof value==='string'&&value.length<=300&&/^\/[a-zA-Z0-9_./-]*$/.test(value)&&!value.startsWith('//')&&!value.includes('..')?value:'';}
  function photoLink(value) {
    if (!value || value.length > 1000) return '';
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
    } catch {
      return '';
    }
  }
  function message(error){return ['22023','42501','54000','40001','P0002'].includes(error?.code)?error.message:'Das hat gerade nicht geklappt. Dein Text bleibt stehen. Bitte versuche es später erneut.';}
  if(typeof module==='object'&&module.exports){module.exports={cleanPath,message,photoLink};return;}
  const client=window.FFE_SUPABASE_CLIENT;
  const $=id=>document.getElementById(id);
  let user=null,guestToken=null,page=0,canManage=false,request=0,submission=crypto.randomUUID(),ready=false;
  const params = new URLSearchParams(location.search);
  const path = cleanPath(params.get('seite'));
  const designRequest = params.get('vorlage') === 'profil-design';
  const photoMarker = '\n\n[photo-link] ';
  const fileMarker = '\n\n[photo-file] ';
  const photoTypes = new Map([['image/jpeg','jpg'], ['image/png','png'], ['image/webp','webp']]);
  const photoInput = $('ticket-photo-file');
  let pendingPhoto = null;
  let ticketSaved = false;
  function fillDesignRequest() {
    if (!designRequest) return;
    $('design-reference').hidden = false;
    $('ticket-form').querySelector('input[value="wish"]').checked = true;
    $('ticket-title').value = 'Design für meine Profilseite';
    $('ticket-body').placeholder = 'Welche Stimmung, Farben oder Motive passen zu dir? Was gefällt dir an deiner Vorlage?';
  }
  fillDesignRequest();
  window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
  const status=(target,text,state)=>{target.textContent=text;target.dataset.state=state||'';};
  function element(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
  async function rpc(name,args){const {data,error}=await client.rpc(name,args);if(error)throw error;return data;}
  function photoStorage() {
    return client.storage.from('gemden-ticket-photos');
  }
  async function uploadPhoto(attachment) {
    if (attachment.uploaded) return;
    const { error } = await photoStorage().upload(attachment.path, attachment.file, {
      contentType: attachment.file.type,
      cacheControl: '0',
      upsert: false
    });
    if (error && !['409', 'Duplicate', 'ResourceAlreadyExists'].includes(String(error.statusCode || error.code))) throw error;
    attachment.uploaded = true;
  }
  function fileReference(body, ticketId) {
    const marker = body.lastIndexOf(fileMarker);
    const path = marker >= 0 ? body.slice(marker + fileMarker.length) : '';
    if (!/^[0-9a-f-]{36}\/[0-9a-f-]{36}\.(jpg|png|webp)$/.test(path)
      || path.split('/')[1].split('.')[0] !== ticketId) return null;
    return { path, marker };
  }
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
    const body = String(item.body || '');
    const attached = user && fileReference(body, item.id);
    const reference = attached ? -1 : body.lastIndexOf(photoMarker);
    const photo = reference >= 0 ? photoLink(body.slice(reference + photoMarker.length)) : '';
    summary.append(meta,element('h3',item.title));
    card.append(summary,element('p',attached ? body.slice(0, attached.marker) : photo ? body.slice(0, reference) : body,'ticket-content'));
    if (photo) {
      const link = element('a', 'Fotovorlage öffnen');
      link.href = photo;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      card.append(link);
    }
    const safePath=cleanPath(item.page_path);if(safePath){const p=element('p',undefined,'quiet');const a=element('a',safePath);a.href=safePath;p.append('Seite: ',a);card.append(p);}
    if(item.response){const p=element('p',undefined,'ticket-response');p.append(element('strong','Rückmeldung'),document.createTextNode(item.response));card.append(p);}
    const localStatus=element('p','','feedback-status');localStatus.setAttribute('role','status');
    if (attached) {
      const download = element('button', 'Foto herunterladen', 'button secondary');
      download.type = 'button';
      download.addEventListener('click', async () => {
        download.disabled = true;
        try {
          const { data, error } = await photoStorage().download(attached.path);
          if (error || !data) throw error || Error('photo');
          const url = URL.createObjectURL(data);
          const link = element('a');
          link.href = url;
          link.download = 'Profilvorlage.' + attached.path.split('.').pop();
          card.append(link);
          link.click();
          link.remove();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        } catch {
          status(localStatus, 'Das Foto konnte nicht geladen werden.', 'error');
        } finally {
          download.disabled = false;
        }
      });
      card.append(download);
    }
    if(canManage&&$('ticket-manage').checked){
      const form=element('form',undefined,'ticket-admin');const stateLabel=element('label','Bearbeitungsstand');const select=element('select');
      for(const [key,label] of Object.entries(states)){const option=element('option',label);option.value=key;select.append(option);}select.value=item.state;stateLabel.append(select);
      const noteLabel=element('label','Rückmeldung für die Person');const note=element('textarea');note.rows=3;note.maxLength=2000;note.value=item.response||'';noteLabel.append(note);
      const save=element('button','Stand speichern','button secondary');save.type='submit';form.append(stateLabel,noteLabel,save);
      form.addEventListener('submit',async event=>{event.preventDefault();save.disabled=true;try{await rpc('change_ticket',{ticket_id:item.id,expected_version:item.version,next_state:select.value,response_note:note.value});await load();}catch(error){status(localStatus,message(error),'error');save.disabled=false;}});card.append(form);
    }
    if(item.mine){const remove=element('button','Eigenes Ticket löschen','ticket-delete');remove.type='button';remove.addEventListener('click',async()=>{
      if(!confirm('Dieses Ticket und seine Rückmeldung dauerhaft löschen?'))return;
      remove.disabled=true;
      try{
        if (attached && attached.path.startsWith(user.id + '/')) {
          const { error } = await photoStorage().remove([attached.path]);
          if (error) throw error;
        }
        await rpc('remove_ticket',{ticket_id:item.id,guest_token:guestToken});
        await load();
      }catch(error){status(localStatus,message(error),'error');remove.disabled=false;}
    });card.append(remove);}
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
    const button = $('ticket-submit');
    event.preventDefault();if(!ready||button.disabled||!$('ticket-form').reportValidity())return;
    const file = designRequest && user ? photoInput.files[0] : null;
    const extension = file ? photoTypes.get(file.type) : null;
    if (file && (!extension || file.size < 1 || file.size > 8388608)) {
      status($('submit-status'), 'Wähle ein JPG, PNG oder WebP bis 8 MB.', 'error');
      return;
    }
    const attachment = pendingPhoto || (file && { file, path: user.id + '/' + submission + '.' + extension, uploaded: false });
    const reference = designRequest ? $('ticket-photo-link').value.trim() : '';
    const photo = photoLink(reference);
    if (reference && !photo) {
      status($('submit-status'), 'Bitte verwende einen gültigen HTTPS-Freigabelink zum Foto.', 'error');
      return;
    }
    if (photo && attachment) {
      status($('submit-status'), 'Wähle entweder einen Upload oder einen Fotolink.', 'error');
      return;
    }
    const body = $('ticket-body').value.trim() + (attachment ? fileMarker + attachment.path : photo ? photoMarker + photo : '');
    if (body.length > 5000) {
      status($('submit-status'), 'Kürze den Text, damit die Fotovorlage ins Ticket passt.', 'error');
      return;
    }
    button.disabled=true;status($('submit-status'),'Dein Ticket wird gespeichert …');
    try{
      const form = $('ticket-form');
      if (attachment) {
        pendingPhoto = attachment;
        photoInput.disabled = true;
      }
      if (!ticketSaved) {
        await rpc('submit_ticket',{guest_token:guestToken,submission_id:submission,details:{kind:new FormData(form).get('kind'),title:$('ticket-title').value.trim(),body,page_path:path}});
        ticketSaved = true;
      }
      if (attachment) {
        $('ticket-title').readOnly = true;
        $('ticket-body').readOnly = true;
        $('ticket-photo-link').readOnly = true;
        form.querySelectorAll('input[name="kind"]').forEach(input => { input.disabled = true; });
        await uploadPhoto(attachment);
      }
      pendingPhoto = null;
      ticketSaved = false;
      photoInput.disabled = false;
      $('ticket-title').readOnly = false;
      $('ticket-body').readOnly = false;
      $('ticket-photo-link').readOnly = false;
      form.querySelectorAll('input[name="kind"]').forEach(input => { input.disabled = false; });
      submission=crypto.randomUUID();form.reset();fillDesignRequest();page=0;$('ticket-filter').value='all';status($('submit-status'),'Angekommen. Du findest dein Ticket und den Bearbeitungsstand in deiner Liste.','success');await load();
    }catch(error){
      const errorText = ticketSaved ? 'Dein Ticket ist gespeichert. Klicke erneut auf „Ticket senden“, um den Foto-Upload zu wiederholen.' : message(error);
      status($('submit-status'),errorText,'error');
    }finally{button.disabled=false;}
  });
  $('ticket-refresh').addEventListener('click',load);$('ticket-manage').addEventListener('change',()=>{page=0;load();});$('ticket-filter').addEventListener('change',()=>{page=0;load();});
  $('ticket-prev').addEventListener('click',()=>{page=Math.max(0,page-1);load();});$('ticket-next').addEventListener('click',()=>{page++;load();});
  if(path){$('page-context').hidden=false;$('page-context').textContent='Bezieht sich auf: '+path;}
  (async()=>{
    try{
      if(!client)throw new Error('client');const {data,error}=await client.auth.getSession();if(error)throw error;user=data.session?.user||null;
      if(user){
        $('identity-note').textContent='Mit deinem Konto verbunden. Deine Tickets sind auch auf anderen Geräten für dich erreichbar.';
        $('ticket-photo-upload').hidden = !designRequest;
      }
      else{guestToken=guestAccess();$('identity-note').replaceChildren(document.createTextNode('Als Gast: Zugriff auf deine Tickets bleibt auf diesem Browser. Mit einem '));const link=element('a','Konto');link.href='../konto/';$('identity-note').append(link,document.createTextNode(' findest du neue Tickets geräteübergreifend.'));}
      client.auth.onAuthStateChange((_event,session)=>{if((session?.user?.id||null)!==(user?.id||null)){document.querySelector('main').hidden=true;setTimeout(()=>location.reload(),0);}});
      ready=true;$('ticket-submit').disabled=false;await load();
    }catch{status($('identity-note'),'Der Zugang konnte nicht geöffnet werden. Bitte verwende dein Konto oder erlaube die lokale Speicherung für Gasttickets.','error');}
  })();
})();
