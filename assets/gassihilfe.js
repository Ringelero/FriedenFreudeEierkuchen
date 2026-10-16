(function(root,factory){
 const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 else {root.GemDenWalkHelp=api;const el=root.document.querySelector('[data-walk-help]');if(el)api.mount(el,root.FFE_SUPABASE_CLIENT);}
})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const SERVICE='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
 const ACCOUNT='/konto/#opportunity-workspace',PRIVATE='/konto/#resonance-center';
 const COMPENSATION={open:'Gemeinsam klären',voluntary:'Freiwillig / unbezahlt',expenses:'Auslagen erstatten',exchange:'Tausch',paid:'Bezahlt'};
 function text(value,max,label){const v=String(value||'').trim();if(!v||v.length>max)throw new Error(`${label}: Bitte ergänze eine Angabe mit höchstens ${max} Zeichen.`);return v;}
 function draftValues(input){
  if(!['need','time'].includes(input?.signal))throw new Error('Bitte wähle, ob du Unterstützung suchst oder helfen möchtest.');
  if(!Object.hasOwn(COMPENSATION,input.compensation))throw new Error('Bitte wähle einen passenden Rahmen.');
  const locality=text(input.locality,160,'Ort oder Kiez'),summary=text(input.summary,2000,'Dein Wunsch'),time=text(input.time,300,'Zeitraum');
  const title=String(input.title||'').trim()||(input.signal==='need'?'Gassihilfe gesucht':'Ich würde gern mit Hunden rausgehen');
  if(title.length>160)throw new Error('Der Titel darf höchstens 160 Zeichen haben.');
  return {service_id:SERVICE,signal_type:input.signal,relationship_mode:'care',title,summary,location_mode:'local',location_label:locality,duration_note:time,compensation_type:input.compensation,visibility:'public'};
 }
 function mount(el,client){
  const $=s=>el.querySelector(s),form=$('[data-help-form]'),list=$('[data-help-list]'),status=$('[data-help-status]'),result=$('[data-help-result]');
  let profile=null,generation=0,listEpoch=0,page=0,filter='',locality='',busy=false,disposed=false;
  function node(tag,value,cls){const e=document.createElement(tag);if(value!==undefined)e.textContent=value;if(cls)e.className=cls;return e;}
  function link(value,href){const a=node('a',value);a.href=href;return a;}
  function button(value,action){const b=node('button',value);b.type='button';b.addEventListener('click',action);return b;}
  function message(target,value,error=false){target.textContent=value;target.dataset.state=error?'error':'success';}
  async function data(request){const r=await request;if(r.error)throw r.error;return r.data;}
  function errorText(e){if(e?.code==='23505')return 'Du hast auf diese Anzeige bereits reagiert. Deinen Verlauf findest du unter „Meine privaten Anfragen“.';if(e?.code==='42501')return 'Die Anzeige oder dein Kontostatus hat sich geändert. Bitte lade die Seite neu.';return e?.message||'Das hat gerade nicht geklappt. Bitte versuche es erneut.';}
  function responseBox(record,existing,g){
   const box=node('div',undefined,'help-private-note');
   if(!profile){box.append(node('p','Du möchtest darauf reagieren? Melde dich an. Deine Nachricht bleibt privat.'),link('Im Konto anmelden','/konto/'));return box;}
   if(record.owner_member_id===profile.stable_id){box.append(node('p','Das ist deine Anzeige. Antworten siehst du nur in deinem Konto.'),link('Meine privaten Anfragen öffnen',PRIVATE));return box;}
   if(existing){const labels={pending:'Deine Anfrage wartet auf Antwort.',accepted:'Angenommen · Euer privater Austausch ist offen.',declined:'Diese Anfrage wurde abgelehnt.',withdrawn:'Du hast diese Anfrage zurückgezogen.'};box.append(node('p',labels[existing.status]||'Deine Anfrage ist gespeichert.'),link('Privaten Verlauf öffnen',PRIVATE));return box;}
   if(record.lifecycle_status!=='open'){box.append(node('p','Diese Anzeige nimmt gerade keine neuen Anfragen an.'));return box;}
   const details=node('details'),summary=node('summary','Privat Interesse zeigen'),f=node('form',undefined,'help-response-form');
   const label=node('label','Deine persönliche Nachricht'),input=node('textarea');input.required=true;input.rows=3;input.maxLength=2000;input.placeholder='Zum Beispiel: Ich würde gern erst einmal mitgehen. Wann passt euch eine gemeinsame Runde?';label.append(input);
   const note=node('p','Nur die Person hinter der Anzeige kann deine Anfrage lesen. Nach ihrer Annahme könnt ihr beide privat schreiben. Eine Annahme ist noch keine Gassizusage.','help-hint'),submit=node('button','Private Anfrage senden');submit.type='submit';const feedback=node('p',undefined,'help-status');feedback.setAttribute('role','status');f.append(label,note,submit,feedback);
   f.addEventListener('submit',async event=>{event.preventDefault();if(busy||g!==generation)return;busy=true;submit.disabled=true;message(feedback,'Deine Anfrage wird privat gespeichert …');try{const r=await window.FFE_PUBLIC_OPPORTUNITIES.submitOpportunityResponse(client,{opportunityId:record.id,responseType:record.signal_type==='need'?'help':'participate',message:input.value});if(g!==generation)return;details.replaceWith(responseBox(record,r,g));message(status,'Private Anfrage gesendet. Die Antwort findest du in deinem Konto.');}catch(e){if(g===generation)message(feedback,errorText(e),true);}finally{busy=false;submit.disabled=false;}});
   details.append(summary,f);return details;
  }
  function card(record,owner,response,g){
   const c=node('article',undefined,'help-card');c.append(node('span',record.signal_type==='need'?'Sucht Unterstützung':'Möchte helfen','help-tag'),node('h3',record.title),node('p',record.summary),node('p',`von ${owner||'einem Mitglied'}`,'help-owner'));
   const facts=node('dl',undefined,'help-facts');for(const [name,value] of [['Ort',record.location_label],['Zeitraum',record.duration_note],['Rahmen',COMPENSATION[record.compensation_type]||'Gemeinsam klären']])if(value){const row=node('div');row.append(node('dt',name),node('dd',value));facts.append(row);}c.append(facts,responseBox(record,response,g));return c;
  }
  async function load(){
   const g=generation,e=++listEpoch;if(!client){message(status,'Die Verbindung ist gerade nicht verfügbar. Bitte versuche es später erneut.',true);return;}
   message(status,'Anzeigen werden geladen …');$('[data-help-next]').hidden=true;$('[data-help-prev]').hidden=true;
   try{
    let query=client.from('opportunities').select('id,owner_member_id,signal_type,title,summary,location_label,duration_note,compensation_type,lifecycle_status').eq('service_id',SERVICE).eq('relationship_mode','care').eq('visibility','public').eq('publication_status','published').eq('lifecycle_status','open').in('signal_type',['need','time']);
    if(filter)query=query.eq('signal_type',filter);
    // Escape PostgREST quoted filter values, and SQL LIKE wildcards; no raw .or expression.
    if(locality)query=query.ilike('location_label',`%${locality.replace(/[\\%_]/g,'\\$&')}%`);
    const rows=await data(query.order('created_at',{ascending:false}).order('id',{ascending:false}).range(page*20,page*20+20));
    if(g!==generation||e!==listEpoch)return;
    const shown=rows.slice(0,20),owners=[...new Set(shown.map(r=>r.owner_member_id))];
    const profiles=owners.length?await data(client.from('profiles').select('stable_id,display_name').in('stable_id',owners)):[];
    const responses=profile&&shown.length?await data(client.from('opportunity_responses').select('opportunity_id,status').eq('responder_member_id',profile.stable_id).in('opportunity_id',shown.map(r=>r.id))):[];
    if(g!==generation||e!==listEpoch)return;
    const names=new Map(profiles.map(p=>[p.stable_id,p.display_name])),answers=new Map(responses.map(r=>[r.opportunity_id,r]));list.replaceChildren();
    if(!shown.length){const empty=node('div',undefined,'help-empty');empty.append(node('h3',filter||locality?'Hier ist noch keine passende Anzeige.':'Die erste gemeinsame Runde beginnt mit euch.'),node('p','Hier erscheinen bewusst veröffentlichte Gassianfragen. Du kannst Unterstützung suchen, Zeit anbieten oder bei einem Treffpunkt erst einmal mitgehen.'),link('Eine Anzeige vorbereiten','#anfrage'));list.append(empty);}
    else shown.forEach(r=>list.append(card(r,names.get(r.owner_member_id),answers.get(r.id),g)));
    $('[data-help-next]').hidden=rows.length<=20;$('[data-help-prev]').hidden=page===0;message(status,`${shown.length} ${shown.length===1?'Anzeige':'Anzeigen'}${page?' · Seite '+(page+1):''}${profile?' · angemeldet':''}`);
   }catch(error){if(g===generation&&e===listEpoch){list.replaceChildren();message(status,errorText(error),true);}}
  }
  async function identity(){
   const g=++generation;listEpoch++;profile=null;form.hidden=true;form.reset();result.replaceChildren();list.replaceChildren();$('[data-help-login]').hidden=false;message($('[data-help-access]'),'Dein Kontostatus wird geprüft …');
   try{if(!client?.auth?.getUser)throw new Error('Die Kontoverbindung ist gerade nicht verfügbar.');const r=await client.auth.getUser();if(g!==generation)return;if(r.error&&r.error.name!=='AuthSessionMissingError')throw r.error;
    if(r.data?.user){const p=await data(client.from('profiles').select('id,stable_id,display_name,account_status,visibility,publication_status').eq('id',r.data.user.id).maybeSingle());if(g!==generation)return;if(p?.stable_id&&p.account_status==='active')profile=p;}
    form.hidden=!profile;$('[data-help-login]').hidden=!!profile;message($('[data-help-access]'),profile?'Du bist angemeldet. Deine Anzeige beginnt als Entwurf.':'Zum Eintragen und für private Anfragen brauchst du ein aktives Konto. Öffentliche Anzeigen kannst du ohne Konto lesen.');
   }catch(error){if(g===generation)message($('[data-help-access]'),errorText(error),true);}
   if(g===generation&&!disposed)await load();
  }
  form.addEventListener('submit',async event=>{
   event.preventDefault();if(busy||!profile)return;const g=generation,actor=profile;busy=true;const submit=form.querySelector('[type=submit]');submit.disabled=true;
   try{const values=draftValues(Object.fromEntries(new FormData(form)));message(result,'Dein Entwurf wird gespeichert …');
    const saved=await data(client.from('opportunities').insert({...values,owner_member_id:actor.stable_id}).select('id').single());if(g!==generation)return;
    form.reset();result.replaceChildren(node('strong','Dein Entwurf ist gespeichert.'),node('p','Er ist noch nicht öffentlich. Im Konto kannst du deinen Text prüfen und bearbeiten.'));
    if(window.FFE_PUBLICATION_CENTER.profileIsLive(actor)){
     const preview=node('div',undefined,'help-draft-preview');preview.append(node('h3',values.title),node('p',values.summary),node('p',`${values.location_label} · ${values.duration_note} · ${COMPENSATION[values.compensation_type]}`),node('p',`Öffentlich als ${actor.display_name}.`));result.append(preview);
     const publish=button('Diese Anzeige jetzt veröffentlichen',async()=>{if(busy||g!==generation)return;busy=true;publish.disabled=true;try{await window.FFE_PUBLICATION_CENTER.setOwnPortfolioPublication(client,{kind:'opportunity',key:saved.id,status:'published'});if(g!==generation)return;const current=await data(client.from('profiles').select('account_status,visibility,publication_status').eq('id',actor.id).maybeSingle());if(g!==generation)return;result.replaceChildren(node('strong',window.FFE_PUBLICATION_CENTER.profileIsLive(current)?'Deine Anzeige ist jetzt öffentlich.':'Anzeige freigegeben. Dein geschlossenes Gesamtprofil hält sie noch offline.'),node('p','Du kannst sie im Konto pausieren, abschließen oder die Freigabe zurücknehmen.'),link('Anzeige im Konto verwalten',ACCOUNT));page=0;await load();}catch(e){if(g===generation){message(result,errorText(e),true);result.append(link('Entwurf im Konto prüfen',ACCOUNT));}}finally{busy=false;publish.disabled=false;}});result.append(publish);
    }else result.append(node('p','Dein Gesamtprofil ist noch geschlossen. Im Konto kannst du die Anzeige prüfen und entscheiden, ob du dein Profil und die Anzeige öffentlich freigibst.'));
    result.append(link('Entwurf im Konto prüfen',ACCOUNT));
   }catch(e){if(g===generation)message(result,errorText(e),true);}finally{busy=false;submit.disabled=false;}
  });
  el.querySelectorAll('[data-help-intent]').forEach(a=>a.addEventListener('click',()=>{if(form.hidden)return;form.elements.signal.value=a.dataset.helpIntent;}));
  $('[data-help-filters]').addEventListener('submit',event=>{event.preventDefault();const f=new FormData(event.currentTarget);filter=f.get('signal');locality=f.get('locality').trim();page=0;load();});
  $('[data-help-next]').addEventListener('click',()=>{page++;load();});$('[data-help-prev]').addEventListener('click',()=>{page=Math.max(0,page-1);load();});
  client?.auth?.onAuthStateChange(event=>{if(['SIGNED_IN','SIGNED_OUT','USER_UPDATED'].includes(event))setTimeout(identity,0);});
  window.addEventListener('pagehide',()=>{disposed=true;generation++;listEpoch++;});window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});identity();
 }
 return {SERVICE,draftValues,mount};
});
