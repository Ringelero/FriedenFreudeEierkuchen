(function(root,factory){
 const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 else {root.GemDenWalkHelp=api;const el=root.document.querySelector('[data-walk-help]');if(el)api.mount(el,root.FFE_SUPABASE_CLIENT);}
})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const SERVICE='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
 const ACCOUNT='/konto/#opportunity-workspace',PRIVATE='/konto/#resonance-center';
 const SUPPORT={walk:"Dog walk",day:"Day care",overnight:"Overnight stay",longer:"Several days"};
 const COMPENSATION={open:"Discuss together",voluntary:"Voluntary / unpaid",expenses:"Reimburse expenses",exchange:"Exchange",paid:"Paid"};
 function text(value,max,label){const v=String(value||'').trim();if(!v||v.length>max)throw new Error(`${label}: Please add a value with no more than ${max} characters.`);return v;}
 function draftValues(input){
  if(!['need','time'].includes(input?.signal))throw new Error("Please choose whether you are looking for support or would like to help.");
  if(!Object.hasOwn(COMPENSATION,input.compensation))throw new Error("Please choose a suitable arrangement.");
  const kind=input.kind??'walk';if(!Object.hasOwn(SUPPORT,kind))throw new Error("Please choose the type of support.");
  const locality=text(input.locality,160,"Place or neighbourhood"),summary=text(input.summary,2000,"Your wish"),time=text(input.time,300,"Date range");
  const title=String(input.title||'').trim()||(kind==='walk'?(input.signal==='need'?"Dog-walking help wanted":"I'd like to take dogs for walks"):`${SUPPORT[kind]} ${input.signal==='need'?'gesucht':'angeboten'}`);
  if(title.length>160)throw new Error("The title must be no longer than 160 characters.");
  return {service_id:SERVICE,support_kind:kind,signal_type:input.signal,relationship_mode:'care',title,summary,location_mode:'local',location_label:locality,duration_note:time,compensation_type:input.compensation,visibility:'public'};
 }
 function mount(el,client){
  const $=s=>el.querySelector(s),form=$('[data-help-form]'),list=$('[data-help-list]'),status=$('[data-help-status]'),result=$('[data-help-result]');
  let profile=null,generation=0,listEpoch=0,page=0,filter='',kind='',locality='',busy=false,disposed=false;
  function node(tag,value,cls){const e=document.createElement(tag);if(value!==undefined)e.textContent=value;if(cls)e.className=cls;return e;}
  function link(value,href){const a=node('a',value);a.href=href;return a;}
  function button(value,action){const b=node('button',value);b.type='button';b.addEventListener('click',action);return b;}
  function message(target,value,error=false){target.textContent=value;target.dataset.state=error?'error':'success';}
  async function data(request){const r=await request;if(r.error)throw r.error;return r.data;}
  function errorText(e){if(e?.code==='23505')return "You have already responded to this listing. Find your history under “My private requests”.";if(e?.code==='42501')return "The listing or your account status has changed. Please reload the page.";return e?.message||"That didn't work just now. Please try again.";}
  function responseBox(record,existing,g){
   const box=node('div',undefined,'help-private-note');
   if(!profile){box.append(node('p',"Would you like to respond? Sign in. Your message stays private."),link("Sign in to your account",'/konto/'));return box;}
   if(record.owner_member_id===profile.stable_id){box.append(node('p',"This is your listing. You can only see replies in your account."),link("Open my private requests",PRIVATE));return box;}
   if(existing){const labels={pending:"Your request is waiting for a reply.",accepted:"Accepted · Your private conversation is open.",declined:"This request was declined.",withdrawn:"You withdrew this request."};box.append(node('p',labels[existing.status]||"Your request is saved."),link("Open private history",PRIVATE));return box;}
   if(record.lifecycle_status!=='open'){box.append(node('p',"This listing is not accepting new requests right now."));return box;}
   const details=node('details'),summary=node('summary',"Express interest privately"),f=node('form',undefined,'help-response-form');
   const label=node('label',"Your personal message"),input=node('textarea');input.required=true;input.rows=3;input.maxLength=2000;input.placeholder="For example: I'd like to come along first. When would a walk together suit you?";label.append(input);
   const note=node('p',"Only the person behind the listing can read your request. Once they accept it, you can both write privately. Acceptance is not yet a commitment to provide care.",'help-hint'),submit=node('button',"Send private request");submit.type='submit';const feedback=node('p',undefined,'help-status');feedback.setAttribute('role','status');f.append(label,note,submit,feedback);
   f.addEventListener('submit',async event=>{event.preventDefault();if(busy||g!==generation)return;busy=true;submit.disabled=true;message(feedback,"Saving your request privately …");try{const r=await window.FFE_PUBLIC_OPPORTUNITIES.submitOpportunityResponse(client,{opportunityId:record.id,responseType:record.signal_type==='need'?'help':'participate',message:input.value});if(g!==generation)return;details.replaceWith(responseBox(record,r,g));message(status,"Private request sent. Find the reply in your account.");}catch(e){if(g===generation)message(feedback,errorText(e),true);}finally{busy=false;submit.disabled=false;}});
   details.append(summary,f);return details;
  }
  function card(record,owner,response,g){
   const c=node('article',undefined,'help-card');c.append(node('span',record.signal_type==='need'?"Looking for support":"Would like to help",'help-tag'),node('h3',record.title),node('p',record.summary),node('p',`from ${owner||"a member"}`,'help-owner'));
   const facts=node('dl',undefined,'help-facts');for(const [name,value] of [["Type",SUPPORT[record.support_kind||'walk']],["Location",record.location_label],["Date range",record.duration_note],["Arrangements",COMPENSATION[record.compensation_type]||"Discuss together"]])if(value){const row=node('div');row.append(node('dt',name),node('dd',value));facts.append(row);}c.append(facts,responseBox(record,response,g));return c;
  }
  async function load(){
   const g=generation,e=++listEpoch;if(!client){message(status,"The connection is currently unavailable. Please try again later.",true);return;}
   message(status,"Loading listings …");$('[data-help-next]').hidden=true;$('[data-help-prev]').hidden=true;
   try{
    let query=client.from('opportunities').select('id,owner_member_id,signal_type,support_kind,title,summary,location_label,duration_note,compensation_type,lifecycle_status').eq('service_id',SERVICE).eq('relationship_mode','care').eq('visibility','public').eq('publication_status','published').eq('lifecycle_status','open').in('signal_type',['need','time']);
    if(filter)query=query.eq('signal_type',filter);
    if(kind==='walk')query=query.or('support_kind.is.null,support_kind.eq.walk');else if(kind)query=query.eq('support_kind',kind);
    // Escape PostgREST quoted filter values, and SQL LIKE wildcards; no raw .or expression.
    if(locality)query=query.ilike('location_label',`%${locality.replace(/[\\%_]/g,'\\$&')}%`);
    const rows=await data(query.order('created_at',{ascending:false}).order('id',{ascending:false}).range(page*20,page*20+20));
    if(g!==generation||e!==listEpoch)return;
    const shown=rows.slice(0,20),owners=[...new Set(shown.map(r=>r.owner_member_id))];
    const profiles=owners.length?await data(client.from('profiles').select('stable_id,display_name').in('stable_id',owners)):[];
    const responses=profile&&shown.length?await data(client.from('opportunity_responses').select('opportunity_id,status').eq('responder_member_id',profile.stable_id).in('opportunity_id',shown.map(r=>r.id))):[];
    if(g!==generation||e!==listEpoch)return;
    const names=new Map(profiles.map(p=>[p.stable_id,p.display_name])),answers=new Map(responses.map(r=>[r.opportunity_id,r]));list.replaceChildren();
    if(!shown.length){const empty=node('div',undefined,'help-empty');empty.append(node('h3',filter||locality?"There is no matching listing here yet.":"The first walk together starts with you."),node('p',"Deliberately published requests for dog walks and care appear here. You can look for support, offer time or start by joining a walk at a meeting place."),link("Prepare a listing",'#anfrage'));list.append(empty);}
    else shown.forEach(r=>list.append(card(r,names.get(r.owner_member_id),answers.get(r.id),g)));
    $('[data-help-next]').hidden=rows.length<=20;$('[data-help-prev]').hidden=page===0;message(status,`${shown.length} ${shown.length===1?"Listing":"Show"}${page?" · Page "+(page+1):''}${profile?" · registered":''}`);
   }catch(error){if(g===generation&&e===listEpoch){list.replaceChildren();message(status,errorText(error),true);}}
  }
  async function identity(){
   const g=++generation;listEpoch++;profile=null;form.hidden=true;form.reset();result.replaceChildren();list.replaceChildren();$('[data-help-login]').hidden=false;message($('[data-help-access]'),"Checking your account status …");
   try{if(!client?.auth?.getUser)throw new Error("The account connection is currently unavailable.");const r=await client.auth.getUser();if(g!==generation)return;if(r.error&&r.error.name!=='AuthSessionMissingError')throw r.error;
    if(r.data?.user){const p=await data(client.from('profiles').select('id,stable_id,display_name,account_status,visibility,publication_status').eq('id',r.data.user.id).maybeSingle());if(g!==generation)return;if(p?.stable_id&&p.account_status==='active')profile=p;}
    form.hidden=!profile;$('[data-help-login]').hidden=!!profile;message($('[data-help-access]'),profile?"You are signed in. Your listing starts as a draft.":"You need an active account to post listings and make private requests. You can read public listings without an account.");
   }catch(error){if(g===generation)message($('[data-help-access]'),errorText(error),true);}
   if(g===generation&&!disposed)await load();
  }
  form.addEventListener('submit',async event=>{
   event.preventDefault();if(busy||!profile)return;const g=generation,actor=profile;busy=true;const submit=form.querySelector('[type=submit]');submit.disabled=true;
   try{const values=draftValues(Object.fromEntries(new FormData(form)));message(result,"Saving your draft …");
    const saved=await data(client.from('opportunities').insert({...values,owner_member_id:actor.stable_id}).select('id').single());if(g!==generation)return;
    form.reset();result.replaceChildren(node('strong',"Your draft is saved."),node('p',"It is not public yet. You can review and edit your text in your account."));
    if(window.FFE_PUBLICATION_CENTER.profileIsLive(actor)){
     const preview=node('div',undefined,'help-draft-preview');preview.append(node('h3',values.title),node('p',values.summary),node('p',`${SUPPORT[values.support_kind]} · ${values.location_label} · ${values.duration_note} · ${COMPENSATION[values.compensation_type]}`),node('p',`Public as ${actor.display_name}.`));result.append(preview);
     const publish=button("Publish this listing now",async()=>{if(busy||g!==generation)return;busy=true;publish.disabled=true;try{await window.FFE_PUBLICATION_CENTER.setOwnPortfolioPublication(client,{kind:'opportunity',key:saved.id,status:'published'});if(g!==generation)return;const current=await data(client.from('profiles').select('account_status,visibility,publication_status').eq('id',actor.id).maybeSingle());if(g!==generation)return;result.replaceChildren(node('strong',window.FFE_PUBLICATION_CENTER.profileIsLive(current)?"Your listing is now public.":"Listing released. Your closed overall profile still keeps it offline."),node('p',"You can pause it, mark it complete or withdraw its release in your account."),link("Manage listing in your account",ACCOUNT));page=0;await load();}catch(e){if(g===generation){message(result,errorText(e),true);result.append(link("Review draft in your account",ACCOUNT));}}finally{busy=false;publish.disabled=false;}});result.append(publish);
    }else result.append(node('p',"Your overall profile is still closed. In your account, you can review the listing and decide whether to publicly release your profile and the listing."));
    result.append(link("Review draft in your account",ACCOUNT));
   }catch(e){if(g===generation)message(result,errorText(e),true);}finally{busy=false;submit.disabled=false;}
  });
  el.querySelectorAll('[data-help-intent]').forEach(a=>a.addEventListener('click',()=>{if(form.hidden)return;form.elements.signal.value=a.dataset.helpIntent;}));
  $('[data-help-filters]').addEventListener('submit',event=>{event.preventDefault();const f=new FormData(event.currentTarget);filter=f.get('signal');kind=f.get('kind');locality=f.get('locality').trim();page=0;load();});
  $('[data-help-next]').addEventListener('click',()=>{page++;load();});$('[data-help-prev]').addEventListener('click',()=>{page=Math.max(0,page-1);load();});
  client?.auth?.onAuthStateChange(event=>{if(['SIGNED_IN','SIGNED_OUT','USER_UPDATED'].includes(event))setTimeout(identity,0);});
  window.addEventListener('pagehide',()=>{disposed=true;generation++;listEpoch++;});window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});identity();
 }
 return {SERVICE,SUPPORT,draftValues,mount};
});
