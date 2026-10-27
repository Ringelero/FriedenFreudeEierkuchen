(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.GemDenBlobSuggestions=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const RUBY='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
  const keys=['walks','discover','care','learning','hygiene','playvideo','personal','community','travelkiez','threeden','cicek','tickets','requests','report'];
  const uuid=value=>typeof value==='string'&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value);
  const text=(value,max=160)=>typeof value==='string'?value.slice(0,max):'';
  function cleanPreferences(raw){
    const filter=value=>Array.isArray(value)?[...new Set(value.filter(x=>keys.includes(x)))].slice(0,keys.length):[];
    return {pinned:filter(raw?.pinned),hidden:filter(raw?.hidden),personal:raw?.personal===true};
  }
  function context(path,search=''){
    const p=String(path).replace(/index\.html$/,'');
    if(p.endsWith('/tickets/'))return 'feedback';
    if(p.includes('/leistungen/rubybubys-herz-und-schnauze/lernen/'))return 'learn';
    if(p.endsWith('/kalender/')||p.endsWith('/kalender/verbinden/')||p.endsWith('/community/orte/threeden/'))return 'calendar';
    if(p.includes('/leistungen/rubybubys-herz-und-schnauze/')||p.endsWith('/treffpunkte/')&&new URLSearchParams(search).get('leistung')===RUBY)return 'walk';
    return 'all';
  }
  function catalog(base,path){
    const url=value=>new URL(value,base).href;
    return {
      walks:{key:'walks',group:'walk',title:"My dog-walking meeting points",detail:"Favourite places and non-binding two-hour slots.",href:url('treffpunkte/?leistung='+RUBY)},
      discover:{key:'discover',group:'walk',title:"Discover new meeting points",detail:"Other places, descriptions and current dog-walking slots.",href:url('treffpunkte/?leistung='+RUBY+'&ansicht=entdecken')},
      care:{key:'care',group:'walk',title:"Dog-walking help & care",detail:"Get to know people and arrange support.",href:url('leistungen/rubybubys-herz-und-schnauze/gassihilfe/')},
      learning:{key:'learning',group:'learn',title:"The learning house",detail:"Find a relevant guide to behaviour, everyday life and care.",href:url('leistungen/rubybubys-herz-und-schnauze/lernen/')},
      hygiene:{key:'hygiene',group:'learn',title:"Care & hygiene",detail:"Nails, ears, teeth, coat and paws.",href:url('leistungen/rubybubys-herz-und-schnauze/lernen/#pflege')},
      playvideo:{key:'playvideo',group:'learn',title:"Observe dog play in a video",detail:"A real clip with questions and explanations.",href:url('leistungen/rubybubys-herz-und-schnauze/lernen/hundespiel-video/')},
      personal:{key:'personal',group:'calendar',title:"My calendar",detail:"Your private events and confirmed requests. With an account.",href:url('kalender/?kalender=PERSONAL')},
      community:{key:'community',group:'calendar',title:'Rubybubys-Kalender',detail:"Shared events and get-togethers.",href:url('kalender/?kalender=RUBYBUBYS')},
      travelkiez:{key:'travelkiez',group:'calendar',title:"Travelkiez calendar",detail:"Events and get-togethers in the neighbourhood.",href:url('kalender/?kalender=TRAVELKIEZ')},
      threeden:{key:'threeden',group:'calendar',title:"Visit ThreeDen",detail:"Visiting times, events and times you can request.",href:url('kalender/?kalender=THREEDEN')},
      cicek:{key:'cicek',group:'calendar',title:"Time with Çiçek",detail:"Arrange dog walks and care in the calendar.",href:url('kalender/?kalender=CICEK')},
      tickets:{key:'tickets',group:'feedback',title:"My Tickets",detail:"View progress and replies.",href:url('tickets/#ticket-list-title')},
      requests:{key:'requests',group:'feedback',title:"My calendar requests",detail:"Confirmations and replies to your own requests. With an account.",href:url('kalender/?kalender=PERSONAL#calendar-requests-section')},
      report:{key:'report',group:'feedback',title:"Problem, idea or wish",detail:"Improve GemDen together.",href:url('tickets/?seite='+encodeURIComponent(path))}
    };
  }
  function selectCards({items,preferences,intent='all',pageContext='all',privateCards=[],calendarFocus='personal'}){
    const pref=cleanPreferences(preferences),group=intent==='all'?pageContext:intent;
    const defaults=group==='walk'?['walks','discover','care']:group==='learn'?['learning','hygiene','playvideo']:group==='calendar'?[calendarFocus,'personal','community','threeden']:group==='feedback'?['tickets','requests','report']:['walks','personal','tickets'];
    const allowed=key=>items[key]&&!pref.hidden.includes(key)&&(intent==='all'||items[key].group===intent);
    const overrides=new Map(privateCards.filter(c=>keys.includes(c.key)).map(c=>[c.key,c]));
    const privateKeys=privateCards.filter(c=>allowed(c.key)&&(group==='all'||items[c.key].group===group)).map(c=>c.key);
    const order=[...pref.pinned.filter(allowed),...privateKeys,...defaults.filter(allowed)];
    return [...new Set(order)].slice(0,3).map(key=>({...items[key],...overrides.get(key),pinned:pref.pinned.includes(key),reason:pref.pinned.includes(key)?"Pinned by you":overrides.has(key)?"From your account":intent!=='all'?"Because you chose this path":pageContext!=='all'?"Relevant to this page":"A quick way in"}));
  }
  function privateSummary({calendar,tickets,places,discovery,base,now=Date.now(),owner}){
    const cards=[],items=catalog(base,'/');
    const dated=e=>Number.isFinite(Date.parse(e.starts_at))&&Date.parse(e.ends_at)>now;
    const events=[...(calendar?.events||[]),...(calendar?.linked_events||[])].filter(e=>dated(e)&&!e.raw_ical&&!e.is_series&&e.state!=='cancelled').sort((a,b)=>Date.parse(a.starts_at)-Date.parse(b.starts_at));
    if(events[0]){const e=events[0];cards.push({...items.personal,title:Date.parse(e.starts_at)<=now?"Your event is happening now":"Your next event",detail:text(e.title)+' · '+new Date(e.starts_at).toLocaleString("en-GB",{dateStyle:'short',timeStyle:'short'})});}
    const feedback=(tickets?.items||[]).filter(t=>t.mine===true&&(text(t.response)||['planned','working','done','closed'].includes(t.state))).sort((a,b)=>(Date.parse(b.updated_at)||0)-(Date.parse(a.updated_at)||0));
    const states={open:"Open",planned:"Planned",working:"In progress",done:"Done",closed:"Closed"};
    if(feedback[0]){const t=feedback[0];cards.push({...items.tickets,title:t.response?"Reply to your ticket":"Your ticket · "+(states[t.state]||"Progress"),detail:text(t.title)});}
    const requests=(calendar?.requests||[]).filter(r=>r.requester_user_id===owner&&['confirmed','declined','cancelled'].includes(r.state)).sort((a,b)=>(Date.parse(b.updated_at)||Date.parse(b.created_at)||0)-(Date.parse(a.updated_at)||Date.parse(a.created_at)||0));
    if(requests[0]){const r=requests[0],labels={confirmed:"Request confirmed",declined:"Request declined",cancelled:"Request cancelled"};cards.push({...items.requests,title:labels[r.state],detail:text(r.calendar_name,60)+' · '+text(r.title,100)});}
    const favorite=(places?.favorites||[]).find(id=>(discovery?.items||[]).some(p=>p.id===id&&p.services?.some(s=>s.id===RUBY&&s.walks_enabled)));
    const place=(discovery?.items||[]).find(p=>p.id===favorite);
    if(place&&uuid(place.id))cards.unshift({...items.walks,title:text(place.name,100),detail:"Your favourite place · Open dog-walking slots",href:new URL('treffpunkte/?leistung='+RUBY+'&ort='+encodeURIComponent(place.id),base).href});
    return cards;
  }
  async function fetchPrivate(client,owner,signal,base,now=Date.now()){
    function untilAborted(promise){return new Promise((resolve,reject)=>{
      const abort=()=>reject(Error('aborted'));if(signal.aborted){abort();return;}
      signal.addEventListener('abort',abort,{once:true});
      Promise.resolve(promise).then(value=>{signal.removeEventListener('abort',abort);if(!signal.aborted)resolve(value);},error=>{signal.removeEventListener('abort',abort);reject(error);});
    });}
    const identity=await untilAborted(client.auth.getUser());
    if(identity.error||identity.data?.user?.id!==owner||signal.aborted)throw Error('identity');
    async function rpc(name,args){const result=await client.rpc(name,args).abortSignal(signal);if(result.error)throw result.error;return result.data;}
    const start=new Date(now);start.setHours(0,0,0,0);const end=new Date(start);end.setDate(end.getDate()+14);
    const results=await Promise.allSettled([
      rpc('calendar_workspace',{requested_calendar:'PERSONAL',range_start:start.toISOString(),range_end:end.toISOString(),requests_page:0}),
      rpc('get_ticket_workspace',{guest_token:null,manage:false,page:0,filter_state:'all'}),
      rpc('get_place_workspace',{service:null})
    ]);
    if(signal.aborted)throw Error('aborted');
    const [calendar,tickets,places]=results.map(r=>r.status==='fulfilled'?r.value:null);
    let discovery=null,placesError=false;
    const ids=Array.isArray(places?.favorites)?places.favorites.filter(uuid).slice(0,3):[];
    if(ids.length&&places.blob_shortcuts!==false){try{discovery=await rpc('discover_places',{service:RUBY,search:'',ids,bounds:null,page:0});}catch{placesError=true;}}
    const finalIdentity=await untilAborted(client.auth.getSession());
    if(finalIdentity.error||finalIdentity.data?.session?.user?.id!==owner||signal.aborted)throw Error('identity');
    return {cards:privateSummary({calendar,tickets,places,discovery,owner,base,now}),partial:placesError||results.some(r=>r.status==='rejected')};
  }
  function mount({root:relativeRoot,chat,character}){
    const base=new URL(relativeRoot,location.href),items=catalog(base,location.pathname),pageContext=context(location.pathname,location.search);
    const selectedCalendar=new URLSearchParams(location.search).get('kalender');
    const calendarFocus={THREEDEN:'threeden',CICEK:'cicek',TRAVELKIEZ:'travelkiez',RUBYBUBYS:'community'}[selectedCalendar]||
      (location.pathname.includes('/community/orte/threeden/')?'threeden':location.pathname.includes('/community/kieze/travelkiez/')?'travelkiez':pageContext==='walk'?'cicek':'personal');
    const section=document.createElement('section');section.id='blob-suggestions';section.setAttribute('aria-label',"Relevant suggestions");
    section.innerHTML="<div class=\"blob-suggestion-heading\"><span aria-hidden=\"true\">✦</span><div><h2>What are you planning?</h2><p>A little path to the next step.</p></div></div><div class=\"blob-intents\" role=\"group\" aria-label=\"Your plan\"><button type=\"button\" data-intent=\"walk\">Dog walks</button><button type=\"button\" data-intent=\"learn\">Learning</button><button type=\"button\" data-intent=\"calendar\">Calendar</button><button type=\"button\" data-intent=\"feedback\">Replies</button></div><div id=\"blob-suggestion-cards\"></div><p id=\"blob-personal-status\" role=\"status\"></p><details class=\"blob-suggestion-settings\"><summary>Adjust suggestions</summary><label><input type=\"checkbox\" data-enabled> Show suggestions on this device</label><label><input type=\"checkbox\" data-personal disabled> Include personal account updates</label><p data-scope></p><p>Account updates are fetched when opened. Events: the next 14 days. Tickets: the last 20; requests: the last 50. Content is not permanently stored here.</p><button type=\"button\" data-reset>Reset pinned and hidden items</button><button type=\"button\" data-auto>Show paths relevant to this page again</button></details>";
    (chat.querySelector('.blob-other-ways')||chat.querySelector('#blob-actions')).before(section);
    const list=section.querySelector('#blob-suggestion-cards'),notice=section.querySelector('#blob-personal-status'),enabled=section.querySelector('[data-enabled]'),personal=section.querySelector('[data-personal]'),scope=section.querySelector('[data-scope]');
    let owner=undefined,pref=cleanPreferences({}),intent='all',privateCards=[],generation=0,controller=null,client=null,subscription=null,loading=null,disposed=false,privateBusy=false,partial=false,failed=false,storageAvailable=true;
    const visible=()=>chat.classList.contains('open')&&!document.hidden&&!disposed;
    const read=(key,fallback)=>{try{return localStorage.getItem(key)??fallback;}catch{return fallback;}};
    const write=(key,value)=>{try{localStorage.setItem(key,value);return true;}catch{storageAvailable=false;return false;}};
    const prefKey=()=>owner===undefined?null:'gemden_blob_suggestions_v1:'+(owner||'guest');
    let enabledHere=read('gemden_blob_shortcuts_enabled','true')!=='false';
    const isEnabled=()=>enabledHere;
    function loadPrefs(){try{pref=cleanPreferences(JSON.parse(read(prefKey(),'{}')));}catch{pref=cleanPreferences({});}}
    function savePrefs(){const key=prefKey();if(key&&!write(key,JSON.stringify(cleanPreferences(pref))))scope.textContent="Saving is not available here. Your selection applies until you leave this page.";}
    function clearPrivate(){generation++;controller?.abort();controller=null;privateCards=[];privateBusy=false;partial=false;failed=false;}
    function setOwner(next){if(owner===next)return;clearPrivate();owner=next;loadPrefs();render();}
    function button(label,fn,aria){const b=document.createElement('button');b.type='button';b.textContent=label;if(aria)b.setAttribute('aria-label',aria);b.addEventListener('click',fn);return b;}
    function render(){
      list.replaceChildren();enabled.checked=isEnabled();personal.checked=pref.personal;personal.disabled=!owner;
      scope.textContent=!storageAvailable?"Saving is not available here. Your selection applies until you leave this page.":!isEnabled()?"Suggestions are switched off on this device.":owner===undefined?"Checking account status.":owner?"Pinned items and consent apply to your account in this browser.":"Without an account, your selection applies to this browser. Personal account updates require you to sign in.";
      section.querySelectorAll('[data-intent]').forEach(b=>b.setAttribute('aria-pressed',String(intent===b.dataset.intent)));
      section.querySelector('.blob-intents').hidden=!isEnabled();
      if(!isEnabled()){notice.textContent="Suggestions are switched off.";return;}
      for(const c of selectCards({items,preferences:pref,intent,pageContext,privateCards,calendarFocus})){
        const card=document.createElement('article');card.className='blob-suggestion-card';
        const reason=document.createElement('p');reason.className='blob-suggestion-reason';reason.textContent=c.reason;
        const a=document.createElement('a');a.href=c.href;const title=document.createElement('strong');title.textContent=c.title;const detail=document.createElement('span');detail.textContent=c.detail;a.append(title,detail);
        const controls=document.createElement('div');controls.className='blob-suggestion-controls';
        const mutate=(action)=>{action();savePrefs();render();section.querySelector('[data-intent="'+(intent==='all'?'walk':intent)+'"]')?.focus({preventScroll:true});};
        const pin=button(c.pinned?'★':'☆',()=>mutate(()=>{pref.pinned=c.pinned?pref.pinned.filter(k=>k!==c.key):[...pref.pinned,c.key];}),c.title+': '+(c.pinned?"unpin":"pin"));pin.setAttribute('aria-pressed',String(c.pinned));
        const hide=button('×',()=>mutate(()=>{pref.hidden=[...pref.hidden,c.key];}),c.title+": hide");pin.disabled=hide.disabled=owner===undefined;controls.append(pin,hide);card.append(reason,a,controls);list.append(card);
      }
      if(!list.children.length){const p=document.createElement('p');p.textContent="All paths are hidden here. You can restore them in the settings.";list.append(p);}
      notice.replaceChildren();
      notice.textContent=privateBusy?"Loading your updates …":failed?"Your updates are currently unavailable. The direct paths remain available.":partial?"Some of your account updates could not be loaded.":pref.personal&&owner?"Status when opened · Find all entries in the relevant overview.":owner?"Personal account updates are switched off.":owner===undefined?"The paths also work without account updates.":"With an account, you can include your own events and replies here.";
      if(owner===null){const a=document.createElement('a');a.href=new URL('konto/',base).href;a.textContent=" Go to your account →";notice.append(a);}
      if(owner&&!pref.personal){notice.append(button("Switch on your updates",()=>{pref.personal=true;savePrefs();refresh();}));}
      if(failed){notice.append(button("Try again",open));}
    }
    async function refresh(){
      clearPrivate();render();if(!visible()||!isEnabled()||!owner||!pref.personal||!client)return;
      const current=owner,epoch=generation;controller=new AbortController();const requestController=controller,signal=requestController.signal;privateBusy=true;render();
      const timeout=setTimeout(()=>requestController.abort(),8000);
      try{const result=await fetchPrivate(client,current,signal,base);if(epoch!==generation||owner!==current||!visible()||signal.aborted)return;privateCards=result.cards;partial=result.partial;}
      catch{if(epoch===generation&&visible())failed=true;}
      finally{clearTimeout(timeout);if(epoch===generation){privateBusy=false;render();}}
    }
    function script(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>{s.remove();reject(Error('script'));};document.head.append(s);});}
    async function connect(){
      if(loading)return loading;
      loading=(async()=>{try{
        if(!window.FFE_SUPABASE_CLIENT){
          if(!window.supabase?.createClient)await script('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.3/dist/umd/supabase.js');
          if(!window.FFE_SUPABASE_CONFIG)await script(new URL('assets/supabase-config.js',base).href);
          if(!window.FFE_SUPABASE_CLIENT)await script(new URL('assets/supabase-client.js',base).href);
        }
        if(disposed)return;client=window.FFE_SUPABASE_CLIENT;if(!client)throw Error('client');
        if(!subscription)subscription=client.auth.onAuthStateChange((event,session)=>{
          if(['INITIAL_SESSION','SIGNED_IN','SIGNED_OUT','USER_UPDATED'].includes(event)){
            if(event!=='INITIAL_SESSION')clearPrivate();
            setOwner(event==='SIGNED_OUT'?null:session?.user?.id||null);
            render();if(event!=='INITIAL_SESSION')setTimeout(()=>{if(visible())refresh();},0);
          }
        })?.data?.subscription;
        const epoch=generation,result=await client.auth.getSession();
        if(result.error)throw result.error;const next=result.data?.session?.user?.id||null;if(disposed||epoch!==generation&&next!==owner)return false;
        setOwner(next);return true;
      }catch{if(!disposed){clearPrivate();failed=true;render();}return false;}finally{loading=null;}})();return loading;
    }
    async function open(){if(!isEnabled()){clearPrivate();render();return;}if(await connect())refresh();}
    section.querySelectorAll('[data-intent]').forEach(b=>b.addEventListener('click',()=>{intent=b.dataset.intent;render();}));
    enabled.addEventListener('change',()=>{enabledHere=enabled.checked;write('gemden_blob_shortcuts_enabled',String(enabledHere));window.dispatchEvent(new CustomEvent('blob:shortcuts-changed',{detail:{enabled:enabledHere}}));});
    personal.addEventListener('change',()=>{pref.personal=personal.checked;savePrefs();refresh();});
    section.querySelector('[data-reset]').addEventListener('click',()=>{pref.pinned=[];pref.hidden=[];savePrefs();render();});
    section.querySelector('[data-auto]').addEventListener('click',()=>{intent='all';render();});
    window.addEventListener('blob:shortcuts-changed',event=>{enabledHere=typeof event.detail?.enabled==='boolean'?event.detail.enabled:read('gemden_blob_shortcuts_enabled',String(enabledHere))!=='false';clearPrivate();if(visible())open();else render();});
    window.addEventListener('storage',event=>{if(event.key==='gemden_blob_shortcuts_enabled'||event.key===prefKey()||event.key===null){enabledHere=read('gemden_blob_shortcuts_enabled',String(enabledHere))!=='false';clearPrivate();loadPrefs();render();if(visible())open();}});
    window.addEventListener('blob:visibility',event=>{if(event.detail?.open){open();}else{clearPrivate();render();}});
    document.addEventListener('visibilitychange',()=>{clearPrivate();render();if(visible())open();});
    window.addEventListener('pagehide',()=>{clearPrivate();render();disposed=true;subscription?.unsubscribe();subscription=null;});
    window.addEventListener('pageshow',event=>{if(event.persisted){disposed=false;setOwner(undefined);if(visible())open();}});
    try{localStorage.removeItem('gemden_blob_paths_v1');}catch{}
    render();if(visible())open();
  }
  return {RUBY,cleanPreferences,context,catalog,selectCards,privateSummary,fetchPrivate,mount};
});
