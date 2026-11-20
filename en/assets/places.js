(function(root,factory){
 const api=factory();
 if(typeof module==='object'&&module.exports) module.exports=api;
 else {root.GemDenPlaces=api;root.document.querySelectorAll('[data-places-app]').forEach(el=>api.mount(el,root.FFE_SUPABASE_CLIENT));}
})(typeof globalThis!=='undefined'?globalThis:this,function(){
 const RUBY='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
 const HOURS=7200000;
 function dogNames(value){const names=String(value||'').split(',').map(x=>x.trim()).filter(Boolean);if(!names.length||names.length>5||names.some(x=>x.length>60))throw new Error("Please enter one to five dog names, each no longer than 60 characters.");return names;}
 function participationNames(role,value){if(role==='companion')return [];if(role!=='dogs')throw new Error("Please choose how you are participating.");return dogNames(value);}
 function attendanceLabel(dogs,companions){return `${dogs||0} ${dogs===1?"Dog":"Dogs"} · ${companions||0} ${companions===1?"Companion":"Companions"}`;}
 function slotStart(t=Date.now()){return new Date(Math.floor(new Date(t).getTime()/HOURS)*HOURS).toISOString();}
 function slotLabel(start,zone){const fmt=new Intl.DateTimeFormat("en-GB",{timeZone:zone,hour:'2-digit',minute:'2-digit'});return `${fmt.format(new Date(start))}–${fmt.format(new Date(new Date(start).getTime()+HOURS))}`;}
 function rangeLabel(start,end,zone){const fmt=new Intl.DateTimeFormat("en-GB",{timeZone:zone,hour:'2-digit',minute:'2-digit'});return `${fmt.format(new Date(start))}–${fmt.format(new Date(end))}`;}
 function normalizeWindows(windows){
  if(!Array.isArray(windows)||windows.length>8)throw new Error("You can select up to eight time ranges.");
  const sorted=windows.map(w=>({start:new Date(w.start).getTime(),end:new Date(w.end).getTime()})).sort((a,b)=>a.start-b.start);
  if(sorted.some(w=>!Number.isFinite(w.start)||!Number.isFinite(w.end)||w.end<=w.start||w.end-w.start>86400000))throw new Error("Choose an end after the start for each time range.");
  const merged=[];for(const w of sorted){const last=merged[merged.length-1];if(last&&w.start<=last.end)last.end=Math.max(last.end,w.end);else merged.push({...w});}
  if(merged.some(w=>w.end-w.start>86400000))throw new Error("A time range can last up to 24 hours.");
  return merged.map(w=>({start:new Date(w.start).toISOString(),end:new Date(w.end).toISOString()}));
 }
 function dateKey(start,zone){return new Intl.DateTimeFormat('sv-SE',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(start));}
 function mapsLink(p){const lat=Number(p.latitude),lon=Number(p.longitude);if(!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>85||Math.abs(lon)>180)throw new Error("This place has no valid coordinates.");return `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lon}`;}
 function ids(value){return Array.isArray(value)?[...new Set(value.filter(x=>typeof x==='string'&&/^[0-9a-f-]{36}$/i.test(x)))].slice(0,40):[];}
 function entryView(favorites,requested){return requested==='discover'||requested==='favorites'?requested:ids(favorites).length?'favorites':'discover';}
 function boundedBounds(b){return {south:Math.max(-85,b.south),north:Math.min(85,b.north),west:Math.max(-180,b.west),east:Math.min(180,b.east)};}
 function regionBounds(region){return region==='berlin'?{south:52.33,north:52.69,west:13.08,east:13.77}:null;}
 function mapAssets(pageUrl,ruby=false){const origin=new URL(pageUrl).origin;return {css:origin+'/assets/vendor/leaflet-1.9.4/leaflet.css',script:origin+'/assets/vendor/leaflet-1.9.4/leaflet.js',manifest:origin+'/treffpunkte/'+(ruby?'herz-schnauze.webmanifest':'manifest.webmanifest')};}
 function mapViewFromUrl(pageUrl){const raw=new URL(pageUrl).searchParams.get('ausschnitt');if(!raw||!/^[-\d.]+,[-\d.]+,\d+$/.test(raw))return null;const [latitude,longitude,zoom]=raw.split(',').map(Number);return Number.isFinite(latitude)&&Number.isFinite(longitude)&&Math.abs(latitude)<=85&&Math.abs(longitude)<=180&&zoom>=2&&zoom<=19?{latitude,longitude,zoom}:null;}
 function mapShareUrl(pageUrl,service,center,zoom,offLeashOnly=false){const u=new URL(pageUrl);u.search='';u.hash='';if(service)u.searchParams.set('leistung',service);u.searchParams.set('ansicht','entdecken');u.searchParams.set('darstellung','karte');u.searchParams.set('ausschnitt',[center.lat.toFixed(5),center.lng.toFixed(5),Math.round(zoom)].join(','));if(offLeashOnly&&service===RUBY)u.searchParams.set('hundeauslauf','1');return u.href;}
 function visibleMapPoints(points,offLeashOnly=false){return points.map(p=>({...p,visible_count:offLeashOnly?(p.count>1?Math.max(0,Math.min(Number(p.count)||0,Number(p.off_leash_count)||0)):p.dog_access==='designated_off_leash'?1:0):Math.max(0,Number(p.count)||1)})).filter(p=>p.visible_count>0);}
 function dogAccess(place){return place?.services?.find(s=>s.id===RUBY)?.dog_access||'unknown';}
 function dogAccessLabel(access){return access==='prohibited'?"× Dogs not allowed":access==='designated_off_leash'?"Designated off-leash dog area":access==='on_leash'?"Leash required":access==='unknown'?"Dog access unconfirmed":'';}
 const BERLIN_BOROUGHS=['Charlottenburg-Wilmersdorf','Friedrichshain-Kreuzberg','Lichtenberg','Marzahn-Hellersdorf','Mitte','Neukölln','Pankow','Reinickendorf','Spandau','Steglitz-Zehlendorf','Tempelhof-Schöneberg','Treptow-Köpenick'];
 function boroughOf(locality){const value=String(locality||'').toLocaleLowerCase('de');
  const exact=BERLIN_BOROUGHS.find(name=>value.includes(name.toLocaleLowerCase('de')));if(exact)return exact;
  if(/friedrichshain|kreuzberg/.test(value))return 'Friedrichshain-Kreuzberg';
  if(/charlottenburg|wilmersdorf/.test(value))return 'Charlottenburg-Wilmersdorf';
  if(/marzahn|hellersdorf/.test(value))return 'Marzahn-Hellersdorf';
  if(/tempelhof|schöneberg/.test(value))return 'Tempelhof-Schöneberg';
  if(/steglitz|zehlendorf/.test(value))return 'Steglitz-Zehlendorf';
  if(/treptow|köpenick|baumschulenweg/.test(value))return 'Treptow-Köpenick';
  return "More places";
 }
 function groupByBorough(places){const groups=new Map();for(const place of places){const name=boroughOf(place.locality);if(!groups.has(name))groups.set(name,[]);groups.get(name).push(place);}return [...groups].sort(([a],[b])=>a==="More places"?1:b==="More places"?-1:a.localeCompare(b,'de'));}
 async function rpc(client,name,args){if(!client?.rpc)throw new Error("The connection to meeting places is currently unavailable.");const r=await client.rpc(name,args);if(r.error)throw r.error;return r.data;}
 function read(key,fallback){try{return JSON.parse(localStorage.getItem(key)||'null')??fallback;}catch{return fallback;}}
 function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
 function node(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
 function button(text,action,cls){const e=node('button',text,cls);e.type='button';e.addEventListener('click',action);return e;}
 function mount(el,client){
  const $=s=>el.querySelector(s),url=new URL(location.href),serviceSelect=$('[data-service-filter]');
  let service=url.searchParams.get('leistung')||null;
  if(service&&!/^SERVICE-[A-Z0-9-]+$/.test(service))service=null;
  if(service&&!Array.from(serviceSelect.options).some(o=>o.value===service)){serviceSelect.add(new Option(service,service));}
  serviceSelect.value=service||'';
  function presentService(){
   const ruby=service===RUBY,h=$('.places-hero h1');
   h.textContent=ruby?"Meeting points":"GemDen map";
   $('.places-lead').textContent=ruby?"Your place. Your time. Out together.":"Discover meeting points in Berlin and save your favourites.";
   document.body.classList.toggle('gassi-kiez',ruby);
   const art=$('[data-kiez-art]');art.hidden=!ruby;
   if(ruby){for(const source of art.querySelectorAll('[data-kiez-srcset]')){if(!source.getAttribute('srcset'))source.setAttribute('srcset',source.dataset.kiezSrcset);}const image=art.querySelector('img');if(!image.getAttribute('src'))image.src=image.dataset.kiezSrc;}
   const back=$('[data-service-back]');back.hidden=!ruby;
   document.querySelector('link[rel="manifest"]').href=mapAssets(location.href,ruby).manifest;
   $('[data-map-dog-filter]').hidden=!ruby;
  }
  presentService();
  let generation=0,listEpoch=0,detailEpoch=0,mapEpoch=0,authUser=null,authReady=false,access=null;
  let listLimit=8,ordering=false,detailOrigin=null,suggestionOrigin=null;
  const openBoroughs=new Set();
  const mobileDetail=matchMedia('(max-width:979px)');
  const requestedView=url.searchParams.get('ansicht')==='entdecken'?'discover':null;
  const mode=url.searchParams.get('darstellung');
  let chosenView=null,view='discover',display=mode==='karte'||(!mode&&!service&&!url.searchParams.get('ort'))?'map':'list',search='',page=0,list=[],hasMore=false,detail=null,entryPage=0,activeSlot=null,activeDay=null,detailDirty=false;
  let mapRegion=url.searchParams.get('gebiet')==='berlin'?'berlin':null;
  let initialMapView=mapViewFromUrl(location.href),offLeashOnly=service===RUBY&&url.searchParams.get('hundeauslauf')==='1';
  $('[data-off-leash]').checked=offLeashOnly;
  let map=null,mapGroup=null,mapLoading=null,mapDebounce=null,mapResize=null,nearBounds=null,refreshing=false,busy=false,disposed=false,picking=null;
  const guestPrefsKey='gemden_places_guest_v1',guestKeyName='gemden_places_guest_key_v1';
  let guestKey=read(guestKeyName,null),guestStorage=true;
  if(typeof guestKey!=='string'||!/^[a-f0-9]{64}$/.test(guestKey)){
   try{guestKey=Array.from(crypto.getRandomValues(new Uint8Array(32)),x=>x.toString(16).padStart(2,'0')).join('');guestStorage=write(guestKeyName,guestKey);}catch{guestKey=null;guestStorage=false;}
  }
  function guestPrefs(){const p=read(guestPrefsKey,{});return {favorites:ids(p.favorites),dog_names:Array.isArray(p.dog_names)?p.dog_names.filter(x=>typeof x==='string').slice(0,5):[],participation:['dogs','companion'].includes(p.participation)?p.participation:null,public_label:typeof p.public_label==='string'?p.public_label.slice(0,60):'',public_walks:p.public_walks===true,blob_shortcuts:p.blob_shortcuts!==false};}
  function prefs(){return authUser?(access||{favorites:[],dog_names:[],public_walks:false,blob_shortcuts:true}):guestPrefs();}
  function status(message,error=false,isCount=false){$('[data-status]').textContent=message;$('[data-status]').classList.toggle('is-error',error);$('[data-status]').classList.toggle('is-count',isCount);const note=$('[data-detail-status]');if(note){note.textContent=message;note.hidden=!message;note.classList.toggle('is-error',error);}if($('#ort-vorschlagen').open)$('[data-suggestion-status]').textContent=message;}
  function updateUrl(){const u=new URL(location.href);if(service)u.searchParams.set('leistung',service);else u.searchParams.delete('leistung');if(detail)u.searchParams.set('ort',detail.place.id);else u.searchParams.delete('ort');history.replaceState(null,'',u);}
  const lockedButtons=new Map();
  function lockButtons(){if(!busy)return;el.querySelectorAll('button:not([data-close-detail]):not([data-close-suggestion]):not([data-place-backdrop]),.place-schedule select,.place-time-editor select,.place-entry-fields input,.place-entry-fields select,.place-entry-fields textarea').forEach(b=>{if(!lockedButtons.has(b))lockedButtons.set(b,b.disabled);b.disabled=true;});}
  async function perform(fn){if(busy)return;busy=true;const g=generation;lockButtons();try{await fn(g);}catch(e){if(g===generation)status(e.message||"That didn't work just now. Please try again.",true);}finally{busy=false;for(const[b,disabled]of lockedButtons)if(b.isConnected)b.disabled=disabled;lockedButtons.clear();}}
  function fillPrefs(){const form=$('[data-preferences]'),p=prefs();form.elements.dog_names.value=p.dog_names.join(', ');form.elements.public_walks.checked=p.public_walks;form.elements.blob_shortcuts.checked=p.blob_shortcuts;
   $('[data-account-note]').textContent=authUser?"Your favourites and dog names are saved in your account.":"Without signing in, favourites and dog names stay on this device. With an account, your selection travels with you.";
   $('.places-settings').hidden=!!authUser;$('.places-account-settings-link').hidden=!authUser;
   $('[data-account-link]').hidden=!!authUser;$('[data-manager]').hidden=!access?.can_manage;renderSuggestions();
   if(access?.can_manage)renderManager();else{$('[data-managed-places]').replaceChildren();$('[data-place-form]').reset();$('[data-place-form]').hidden=true;}
  }
  async function savePrefs(changes,g=generation){
   if(!authReady)throw new Error("Your account status is still being checked.");
   if(authUser){const p=await rpc(client,'save_place_preferences',{details:changes});if(g!==generation)return false;access={...access,...p,can_manage:access?.can_manage,managed_places:access?.managed_places,suggestions:access?.suggestions};}
   else {
    if(changes.public_walks===false&&guestKey)await rpc(client,'clear_guest_walks',{guest_key:guestKey});
    if(g!==generation)return false;
    if(!write(guestPrefsKey,{...guestPrefs(),...changes}))throw new Error("These details cannot be saved on this device. Please use your account.");
   }
   if(g!==generation)return false;
   if('blob_shortcuts' in changes){write('gemden_blob_shortcuts_enabled',changes.blob_shortcuts);window.dispatchEvent(new CustomEvent('blob:shortcuts-changed'));}
   if('dog_names' in changes||'public_walks' in changes||'blob_shortcuts' in changes)fillPrefs();return true;
  }

  function titleOf(p){return p.name.replace(/^Hundeauslauf\s*·\s*/,'');}
  function openSuggestion(remember=true){const dialog=$('#ort-vorschlagen');if(dialog.open)return;if(remember)suggestionOrigin={focus:document.activeElement,scroll:window.scrollY};$('[data-suggestion-status]').textContent='';dialog.showModal();document.body.classList.add('places-suggestion-open');$('[data-suggestion-title]').focus({preventScroll:true});}
  function closeSuggestion(restore=true){const dialog=$('#ort-vorschlagen');if(dialog.open)dialog.close();document.body.classList.remove('places-suggestion-open');if(restore&&suggestionOrigin){window.scrollTo({top:suggestionOrigin.scroll,behavior:'instant'});suggestionOrigin.focus?.focus({preventScroll:true});suggestionOrigin=null;}}
  function configureDetail(){
   const root=$('[data-place-detail]'),sheet=!!detail&&mobileDetail.matches;
   document.body.classList.toggle('places-sheet-open',sheet);
   $('[data-place-backdrop]').hidden=!sheet;
   if(sheet){root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');}
   else{root.removeAttribute('role');root.removeAttribute('aria-modal');}
  }
  function closePlace(restore=true,update=true){
   const origin=detailOrigin;detail=null;activeSlot=null;activeDay=null;detailEpoch++;detailDirty=false;detailOrigin=null;
   const root=$('[data-place-detail]');root.hidden=true;root.replaceChildren();configureDetail();if(update)updateUrl();
   if(restore&&origin){window.scrollTo({top:origin.scroll,behavior:'instant'});const target=origin.focus?.isConnected?origin.focus:el.querySelector('[data-view][aria-pressed="true"]');target?.focus({preventScroll:true});}
  }
  mobileDetail.addEventListener('change',configureDetail);
  $('[data-place-backdrop]').addEventListener('click',()=>closePlace());
  $('[data-place-detail]').addEventListener('keydown',event=>{
   if(event.key==='Escape'){event.preventDefault();closePlace();return;}
   if(event.key!=='Tab'||!mobileDetail.matches)return;
   const items=[...$('[data-place-detail]').querySelectorAll('button,a[href],input,select,textarea,summary,[tabindex="0"]')].filter(e=>!e.disabled&&e.getClientRects().length);
   if(!items.length)return;const first=items[0],last=items[items.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });

  async function identity(){if(disposed)return;const g=++generation;closeSuggestion(false);closePlace(false,false);authReady=false;authUser=null;access=null;detail=null;activeSlot=null;picking=null;$('[data-cancel-pick]').hidden=true;detailEpoch++;$('[data-place-detail]').hidden=true;$('[data-place-detail]').replaceChildren();$('[data-preferences]').reset();$('[data-suggestion-form]').reset();fillPrefs();destroyMap();
   try{
    if(!client?.auth?.getUser)throw new Error("The account connection is currently unavailable.");
    const r=await client.auth.getUser();if(g!==generation)return;
    if(r.error&&r.error.name!=='AuthSessionMissingError')throw r.error;
    if(r.data?.user){authUser=r.data.user;access=await rpc(client,'get_place_workspace',{service});if(g!==generation)return;}
    authReady=true;fillPrefs();applyView(entryView(prefs().favorites,chosenView||requestedView));await loadList();if(g!==generation)return;if(display==='map'&&view==='discover')await showMap();
    const place=url.searchParams.get('ort'),time=Date.parse(url.searchParams.get('zeit')),current=Date.parse(slotStart());
    const slot=Number.isFinite(time)&&time%HOURS===0&&time>=current&&time<current+84*HOURS?new Date(time).toISOString():null;
    if(place&&/^[a-f0-9-]{36}$/i.test(place))await openPlace(place,slot,false);
   }catch(e){if(g===generation){authReady=false;applyView('discover');status("Your account status could not be checked. You can view public places; try again before posting an entry.",true);await loadList(false);if(display==='map'&&view==='discover')await showMap();}}
  }

  function card(p,index){const c=node('article',undefined,'place-card');
   const open=button(titleOf(p),()=>openPlace(p.id),'place-open');c.append(open,node('p',p.locality,'place-locality'));
   const rule=dogAccess(p);if(p.services.some(s=>s.id===RUBY)&&dogAccessLabel(rule))c.append(node('p',rule==='designated_off_leash'?"Off-leash area":dogAccessLabel(rule),`place-dog-rule is-${rule}`));
   const meta=node('div',undefined,'place-meta');
   if(p.services.some(s=>s.walks_enabled&&(!service||s.id===service))){
    if(p.here_count||p.companion_here_count)meta.append(node('span',`${attendanceLabel(p.here_count,p.companion_here_count)} here now`,'is-here'));
    if(p.coming_count||p.companion_count)meta.append(node('span',`${attendanceLabel(p.coming_count,p.companion_count)} announced`));
    if(!meta.children.length)meta.append(node('span',"No entries yet",'is-empty'));
   }else meta.append(node('span',"Place info · no walk windows",'is-empty'));c.append(meta);
   const favorite=prefs().favorites.includes(p.id),star=button(favorite?'★':'☆',()=>perform(async g=>{const next=favorite?prefs().favorites.filter(id=>id!==p.id):[...prefs().favorites,p.id];if(next.length>40)throw new Error("You can save up to 40 favourite places.");if(await savePrefs({favorites:next},g)){status(favorite?"Removed from your meeting places.":"Saved as a favourite meeting point.");await loadList(false);}}),'place-star');star.setAttribute('aria-label',`${p.name}: ${favorite?"Remove favourite":"save as a favourite"}`);star.setAttribute('aria-pressed',String(favorite));c.append(star);
   if(view==='favorites'&&ordering&&prefs().favorites.length>1){const order=node('div',undefined,'place-order');for(const[label,delta]of[["Move up",-1],["Move down",1]]){const b=button(label,()=>perform(async g=>{const next=[...prefs().favorites],from=next.indexOf(p.id),to=next.indexOf(list[index+delta]?.id);if(to<0||to>=next.length)return;[next[from],next[to]]=[next[to],next[from]];if(await savePrefs({favorites:next},g))await loadList(false);}));b.disabled=index+delta<0||index+delta>=list.length;order.append(b);}c.append(order);}
   return c;
  }
  function renderList(){const box=$('[data-place-list]');box.replaceChildren();if(!list.length){const empty=node('div',undefined,'places-empty');empty.append(node('h2',view==='favorites'?"Your favourite places":"No matching places"));
    empty.append(node('p',view==='favorites'?"Save places with the star. Find them here next time.":"Try another place or widen the map view."));
    if(view==='favorites')empty.append(button("Discover meeting points",()=>setView('discover')));box.append(empty);
   }else if(view==='discover'){
    for(const[name,places]of groupByBorough(list)){
     const group=node('details',undefined,'places-borough'),summary=node('summary'),label=node('span',name),count=node('span',`${places.length} ${places.length===1?"Location":"Places"}`,'places-borough-count');
     group.dataset.borough=name;group.open=openBoroughs.has(name)||!!search;summary.append(label,count);group.append(summary);const entries=node('div',undefined,'places-borough-list');
     places.forEach(p=>entries.append(card(p,list.indexOf(p))));group.append(entries);group.addEventListener('toggle',()=>{if(!group.isConnected)return;if(group.open)openBoroughs.add(name);else openBoroughs.delete(name);});box.append(group);
    }
   }else list.slice(0,listLimit).forEach((p,i)=>box.append(card(p,i)));
   $('[data-favorite-tools]').hidden=view!=='favorites'||!list.length;
   $('[data-order-toggle]').setAttribute('aria-pressed',String(ordering));
   $('[data-order-toggle]').textContent=ordering?"Finish reordering":"Reorder places";
   $('[data-previous]').hidden=true;$('[data-more]').hidden=!(view==='discover'?hasMore:listLimit<list.length||hasMore)||(display==='map'&&view==='discover');box.hidden=display==='map'&&view==='discover';lockButtons();
  }
  async function loadList(showStatus=true,append=false){const g=generation,e=++listEpoch;if(!append)page=0;if(showStatus)status("Loading meeting points …");
   try{const favoriteIds=prefs().favorites;if(view==='favorites'&&!favoriteIds.length){list=[];hasMore=false;renderList();if(showStatus)status('');return;}
    const args={service,search:view==='discover'?search:'',ids:view==='favorites'?favoriteIds:null,bounds:view==='discover'?nearBounds:null,page:view==='favorites'?0:page};
    let data=await rpc(client,'discover_places',args),items=[...data.items],loadedPage=args.page;if(g!==generation||e!==listEpoch)return;
    // At most three small public pages per load; no map engine or tiles for the borough list.
    while(view==='discover'&&display==='list'&&data.has_more&&loadedPage<args.page+2){data=await rpc(client,'discover_places',{...args,page:++loadedPage});if(g!==generation||e!==listEpoch)return;items.push(...data.items);}
    if(g!==generation||e!==listEpoch)return;page=loadedPage;list=append?[...list,...items]:items;hasMore=data.has_more;
    if(view==='favorites')list.sort((a,b)=>favoriteIds.indexOf(a.id)-favoriteIds.indexOf(b.id));renderList();if(showStatus)status(view==='discover'&&display==='map'?'':`${list.length} ${list.length===1?"Meeting point":"Meeting points"}${hasMore?" · more available":''}`,false,display!=='map'||view==='favorites');
   }catch(err){if(g===generation&&e===listEpoch)status(err.message||"The meeting points could not be loaded.",true);}
  }
  function applyView(next){
   if(next!==view)closePlace(false);view=next;page=0;listLimit=8;el.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
   $('[data-discovery]').hidden=view!=='discover';
   el.querySelectorAll('[data-display]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.display===display)));
   if(view==='favorites'){destroyMap();$('[data-map-wrap]').hidden=true;}
  }
  async function setView(next,nextDisplay=display){
   chosenView=next;display=nextDisplay;applyView(next);await loadList();
   if(view==='discover'&&display==='map')await showMap();
  }

  async function openPlace(id,slot=null,scroll=true,append=false,background=false,day=null){const g=generation,e=++detailEpoch;
   const origin=detailOrigin||{focus:document.activeElement,scroll:window.scrollY};
   try{const data=await rpc(client,'get_place_walk_times',{place:id,service,chosen_slot:slot,chosen_day:day||(detail?.place.id===id?activeDay:null),guest_key:authUser?null:guestKey,page:append?entryPage:0});
    if(g!==generation||e!==detailEpoch||background&&(detailDirty||$('[data-place-detail] details[open]')))return;
    const opening=!detail;detailOrigin=origin;if(append&&detail)data.entries=[...detail.entries,...data.entries];if(!append)entryPage=0;detail=data;activeSlot=data.slot_start;activeDay=data.day_key||dateKey(activeSlot,data.place.time_zone);detailDirty=false;renderDetail();lockButtons();configureDetail();updateUrl();
    if(opening&&mobileDetail.matches)$('[data-close-detail]').focus({preventScroll:true});
    else if(scroll&&!mobileDetail.matches)$('[data-place-detail]').scrollIntoView({behavior:'auto',block:'nearest'});
   }catch(err){if(g===generation&&e===detailEpoch)status(err.message||"This meeting point could not be opened.",true);}}

  function renderDetail(){const d=detail,p=d.place,t=activeSlot,root=$('[data-place-detail]');root.hidden=false;root.replaceChildren();
   const head=node('div',undefined,'place-detail-header'),heading=node('div');heading.append(node('h2',titleOf(p)),node('p',p.locality,'places-hint'));
   const close=button("Close",()=>closePlace());close.dataset.closeDetail='';head.append(heading,close);root.append(head);
   const rule=dogAccess(p);if(p.services.some(s=>s.id===RUBY)&&dogAccessLabel(rule))root.append(node('p',dogAccessLabel(rule),`place-dog-rule is-${rule}`));
   if(p.services.some(s=>s.id===RUBY)){
    const info=node('details',undefined,'place-leash-info');info.append(node('summary',"Leash rules & exemptions"));
    info.append(node('p',"In Berlin’s public parks, dogs generally need a leash no longer than two metres. Off-leash exercise is allowed only in designated areas; local dog bans and signs still apply."));
    info.append(node('p',"If you have kept a dog continuously and without complaints for at least three years within the last five years, you can apply for a certificate of competence at the veterinary authority. An exemption from the general leash requirement is not automatic and does not override the specific leash requirement in public parks."));
    for(const [title,href]of[["Berlin park rules",'https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/oeffentliche-gruen-und-erholungsanlagen/besondere-nutzungen/'],["Competence & application",'https://www.berlin.de/ba-neukoelln/politik-und-verwaltung/aemter/ordnungsamt/veterinaer-und-lebensmittelaufsicht/hunde-in-berlin-1403749.php']]){const link=node('a',title);link.href=href;link.target='_blank';link.rel='noopener';info.append(link);}root.append(info);
   }
   const tools=node('div',undefined,'place-tools'),mapLink=node('a',"Directions",'place-link');mapLink.href=mapsLink(p);mapLink.target='_blank';mapLink.rel='noopener';mapLink.setAttribute('aria-label',"Open in Maps");tools.append(mapLink,button("Share",()=>share(location.href)));
   const star=button(prefs().favorites.includes(p.id)?"★ Saved":"☆ Save",()=>perform(async g=>{const current=prefs().favorites,next=current.includes(p.id)?current.filter(id=>id!==p.id):[...current,p.id];if(next.length>40)throw new Error("You can save up to 40 favourite places.");if(await savePrefs({favorites:next},g)){star.textContent=next.includes(p.id)?"★ Saved":"☆ Save";await loadList(false);status("Your favourite selection has been saved.");}}));tools.append(star);root.append(tools);
   const about=document.createElement('details');about.className='place-about';about.append(node('summary',"Place info & sources"));if(p.description)about.append(node('p',p.description,'place-description'));
   const contextual=service?p.services.filter(s=>s.id===service):p.services;
   for(const info of contextual){if(info.description||info.source_url){about.append(node('h3',info.id===RUBY?"Out with a dog":info.name));if(info.description)about.append(node('p',info.description,'place-description'));if(info.source_url&&/^https:\/\//.test(info.source_url)){const source=node('a',"Source & further information");source.href=info.source_url;source.target='_blank';source.rel='noopener';about.append(source);}}}
   const walkService=p.services.find(s=>s.id===service&&s.walks_enabled);
   if(!walkService){root.append(about,node('p',service?"This place has information but no walk windows.":"Choose a service to open its walk windows.",'places-hint'));for(const item of p.services)if(item.walks_enabled)root.append(button(item.name,async()=>{service=item.id;serviceSelect.value=service;presentService();await identity();await openPlace(p.id);}));return;}
   const schedule=node('div',undefined,'place-schedule'),dayLabel=node('label',"Day"),day=document.createElement('select');
   const selectedDay=activeDay||dateKey(t,p.time_zone),days=[...new Set(d.slots.flatMap(s=>[dateKey(s.start,p.time_zone),dateKey(new Date(new Date(s.start).getTime()+HOURS-1),p.time_zone)]))];
   for(const key of days){const sample=d.slots.find(s=>dateKey(s.start,p.time_zone)===key)||d.slots.find(s=>dateKey(new Date(new Date(s.start).getTime()+HOURS-1),p.time_zone)===key),instant=dateKey(sample.start,p.time_zone)===key?sample.start:new Date(new Date(sample.start).getTime()+HOURS-1);day.add(new Option(new Intl.DateTimeFormat("en-GB",{timeZone:p.time_zone,weekday:'short',day:'numeric',month:'short'}).format(new Date(instant)),key));}day.value=selectedDay;day.setAttribute('aria-label',"Choose a day");
   day.addEventListener('change',()=>{const slot=d.slots.find(s=>dateKey(s.start,p.time_zone)<=day.value&&dateKey(new Date(new Date(s.start).getTime()+HOURS-1),p.time_zone)>=day.value);if(slot)openPlace(p.id,slot.start,false,false,false,day.value);});
   dayLabel.append(day);schedule.append(dayLabel,node('span',"Sometime in this window · no commitment",'places-hint'));root.append(schedule);
   const quick=node('div',undefined,'place-quick-slots');quick.setAttribute('aria-label',"Choose a time window");
   for(const slot of d.slots.filter(s=>dateKey(s.start,p.time_zone)<=selectedDay&&dateKey(new Date(new Date(s.start).getTime()+HOURS-1),p.time_zone)>=selectedDay)){
    const selected=new Date(slot.start).getTime()===new Date(t).getTime(),b=button(slotLabel(slot.start,p.time_zone),()=>openPlace(p.id,slot.start,false));b.dataset.slot=slot.start;b.setAttribute('aria-pressed',String(selected));
    if(slot.coming_count||slot.companion_count)b.append(node('small',attendanceLabel(slot.coming_count,slot.companion_count)));quick.append(b);
   }root.append(quick);requestAnimationFrame(()=>{const selected=quick.querySelector('[aria-pressed="true"]');if(selected?.isConnected)quick.scrollLeft=Math.max(0,selected.offsetLeft-quick.offsetLeft-10);});
   for(const event of d.events){const box=node('article',undefined,`place-event${event.cancelled?' is-cancelled':''}`);box.append(node('h3',`${event.cancelled?"Cancelled: ":''}${event.title}`),node('p',event.description),node('p',`Contact: ${event.contact}`));if(access?.can_manage&&event.service_id===service&&!event.cancelled)box.append(button("Cancel meetup",()=>perform(async()=>{await rpc(client,'save_place_slot_event',{place:p.id,service,t,event:event.id,expected:event.version,details:{cancelled:true}});await openPlace(p.id,t,false);status("The special meetup is marked as cancelled.");})));root.append(box);}
   if(d.entries.length){const roster=node('ul',undefined,'place-roster');for(const entry of d.entries){const li=node('li');li.append(node('strong',entry.participation==='companion'?(entry.public_label||"A companion"):entry.dog_names.join(' & ')),node('span',entry.state==='here'?"● Here now":"○ Coming during this window",`place-presence${entry.state==='here'?' is-here':''}`));if(entry.starts_at&&entry.ends_at)li.append(node('span',rangeLabel(entry.starts_at,entry.ends_at,p.time_zone),'place-entry-time'));if(entry.event_id)li.append(node('span',d.events.find(v=>v.id===entry.event_id)?.title||"Special meetup",'places-hint'));if(entry.comment)li.append(node('p',entry.comment));if(access?.can_manage&&entry.service_id===service)li.append(button("Hide entry",()=>perform(async()=>{await rpc(client,'hide_place_walk',{entry:entry.id});await openPlace(p.id,t,false);status("Entry hidden.");})));roster.append(li);}root.append(roster);if(d.has_more)root.append(button("More participants",()=>{entryPage++;openPlace(p.id,t,false,true);}));}
   else root.append(node('p',"No entries for this window yet.",'places-hint'));
   const own=d.mine,personal=prefs();if(own?.hidden){root.append(node('p',"Meetup managers have hidden your entry.",'places-hint'),about);return;}
   const eventChoice=document.createElement('select');eventChoice.add(new Option("Casual dog walk",''));
   for(const event of d.events){const option=new Option((event.cancelled?"Cancelled: ":'')+event.title,event.id);option.disabled=event.cancelled;eventChoice.add(option);}eventChoice.value=own?.event_id||'';
   if(d.events.length){const label=node('label',"What would you like to drop by for?");label.append(eventChoice);root.append(label);}
   if(own?.event_id&&d.events.some(e=>e.id===own.event_id&&e.cancelled))root.append(node('p',"Your special meetup has been cancelled. You can remove your entry or explicitly switch to the casual dog walk.",'places-hint'));
   const fields=document.createElement('details');fields.className='place-entry-fields';fields.append(node('summary',own?"Edit attendance & comment":"Details & comment"));
   const form=node('form',undefined,'places-form'),roleLabel=node('label',"How are you joining?"),role=document.createElement('select');role.add(new Option("With my dog",'dogs'));role.add(new Option("Join without a dog",'companion'));role.value=own?.participation||personal.participation||(personal.dog_names.length?'dogs':'companion');roleLabel.append(role);form.append(roleLabel);
   const publicLabel=node('label',"Your preferred name (optional)"),alias=document.createElement('input');alias.maxLength=60;alias.autocomplete='off';alias.value=own?.public_label||personal.public_label||'';publicLabel.append(alias);
   const nameLabel=node('label',"Dogs' names"),names=document.createElement('input');names.value=(own?.dog_names||personal.dog_names).join(', ');names.maxLength=304;names.autocomplete='off';names.required=true;nameLabel.append(names);
   const commentLabel=node('label',"Your comment (optional)"),comment=document.createElement('textarea');comment.value=own?.comment||'';comment.maxLength=400;comment.rows=2;commentLabel.append(comment);
   const consentLabel=node('label',undefined,'places-check'),consent=document.createElement('input');consent.type='checkbox';consent.checked=personal.public_walks;consentLabel.append(consent,node('span',"My attendance, the names entered here and my comment may be shown publicly in this time window. Please don't enter contact details or private information."));form.append(nameLabel,publicLabel,commentLabel,consentLabel);
   const confirm=node('button',"Confirm participation");confirm.type='submit';form.append(confirm);
   if(!authUser)form.append(node('p',"Without an account: use the same browser and keep its website data to edit or remove your entry.",'places-hint'));
   let pendingAction='coming',pendingWindows=null,pendingRemove=[];
   function showRole(){const companion=role.value==='companion';nameLabel.hidden=companion;names.required=!companion;publicLabel.hidden=!companion;}showRole();role.addEventListener('change',()=>{showRole();detailDirty=true;});
   fields.append(form);
   const actions=node('div',undefined,'place-actions');
   async function change(action,confirmed=false,windows=null,removeIds=[]){
    const deleting=action==='leave'||windows?.length===0;
    if(!deleting&&!confirmed&&(!consent.checked||role.value==='dogs'&&!names.value.trim())){pendingAction=action;pendingWindows=windows;pendingRemove=removeIds;fields.open=true;detailDirty=true;(role.value==='dogs'&&!names.value.trim()?names:consent).focus({preventScroll:true});return;}
    await perform(async g=>{if(!authReady)throw new Error("Please reload the page so your account status can be checked.");if(!authUser&&(!guestKey||!guestStorage))throw new Error("Guest access cannot be saved on this device. Please sign in to your account.");
     let chosen=[];if(!deleting){chosen=participationNames(role.value,names.value);if(!consent.checked){fields.open=true;consent.focus();throw new Error("Please confirm public display of your attendance.");}if(!personal.public_walks||JSON.stringify(chosen)!==JSON.stringify(personal.dog_names)||role.value!==personal.participation||alias.value.trim()!==(personal.public_label||'')){if(!await savePrefs({...role.value==='dogs'?{dog_names:chosen}:{},participation:role.value,public_label:alias.value.trim(),public_walks:true},g))return;}}
     const selected=deleting?[]:normalizeWindows(windows||[{start:action==='here'&&own?.starts_at?new Date(Math.min(new Date(own.starts_at).getTime(),new Date(t).getTime())).toISOString():own?.starts_at||t,end:own?.ends_at||new Date(new Date(t).getTime()+HOURS).toISOString()}]);
     await rpc(client,'save_place_walk_times',{participation:role.value,public_label:alias.value.trim(),place:p.id,service,windows:selected,remove_ids:action==='leave'?[own.id]:removeIds,guest_key:authUser?null:guestKey,action:action==='here'?'here':'coming',names:chosen,message:comment.value,consent:consent.checked,event:windows===null?eventChoice.value||null:null});if(g!==generation)return;if(detail?.place.id===p.id&&activeSlot===t)await openPlace(p.id,t,false);await loadList(false);status(deleting?"Your selection has been removed.":action==='here'?"You are shown as “Here now” until your time range ends.":"You are joining during your selected time range.");});
   }
   form.addEventListener('submit',event=>{event.preventDefault();change(pendingAction,true,pendingWindows,pendingRemove);});
   const custom=node('details',undefined,'place-time-editor');custom.append(node('summary',"Choose your own times"));
   custom.append(node('p',"Choose start and end hours. You can add several time ranges.",'places-hint'));
   const timeForm=node('form',undefined,'places-form'),timeRows=node('div',undefined,'place-time-rows'),rows=[],options=d.hour_options||[],mineDay=(d.mine_day||[]).filter(e=>!e.hidden&&!e.event_id);
   function addTimeRow(seed){
    if(rows.length>=8)return;const row=node('div',undefined,'place-time-range'),fromLabel=node('label',"From"),toLabel=node('label',"Until"),from=document.createElement('select'),to=document.createElement('select');
    const localDay=selectedDay,clock=new Intl.DateTimeFormat("en-GB",{timeZone:p.time_zone,hour:'2-digit',minute:'2-digit'}),labels=options.map(value=>clock.format(new Date(value))),duplicates=new Set(labels.filter((label,i)=>labels.indexOf(label)!==i&&dateKey(options[i],p.time_zone)===dateKey(options[labels.indexOf(label)],p.time_zone)));
    for(let i=0;i<options.length;i++){const value=options[i],nextDay=dateKey(value,p.time_zone)!==localDay,offset=duplicates.has(labels[i])?new Intl.DateTimeFormat("en-GB",{timeZone:p.time_zone,timeZoneName:'shortOffset'}).formatToParts(new Date(value)).find(v=>v.type==='timeZoneName')?.value:'';const text=[labels[i],nextDay?"(+1 day)":'',offset].filter(Boolean).join(' ');if(!nextDay)from.add(new Option(text,value));to.add(new Option(text,value));}
    from.value=options.find(v=>new Date(v).getTime()===new Date(seed?.start||t).getTime())||from.options[0]?.value||'';
    to.value=options.find(v=>new Date(v).getTime()===new Date(seed?.end||new Date(new Date(from.value).getTime()+HOURS)).getTime())||to.options[to.options.length-1]?.value||'';
    function adjust(){for(const option of to.options)option.disabled=new Date(option.value)<=new Date(from.value)||new Date(option.value)<=new Date(d.server_time);if(to.selectedOptions[0]?.disabled)to.value=Array.from(to.options).find(o=>!o.disabled)?.value||'';}
    from.addEventListener('change',()=>{adjust();detailDirty=true;});to.addEventListener('change',()=>detailDirty=true);adjust();fromLabel.append(from);toLabel.append(to);const item={row,from,to};const remove=button("Remove",()=>{rows.splice(rows.indexOf(item),1);row.remove();add.disabled=false;detailDirty=true;});remove.setAttribute('aria-label',"Remove time range");row.append(fromLabel,toLabel,remove);rows.push(item);timeRows.append(row);add.disabled=rows.length>=8;
   }
   const add=button("Add another time range",()=>{const last=rows[rows.length-1],start=last?.to.value||t;addTimeRow({start,end:new Date(new Date(start).getTime()+3600000).toISOString()});detailDirty=true;});
   for(const entry of mineDay)addTimeRow({start:entry.starts_at,end:entry.ends_at});if(!rows.length)addTimeRow();
   const save=node('button',"Save times",'place-primary');save.type='submit';timeForm.append(timeRows,add,save);timeForm.addEventListener('submit',event=>{event.preventDefault();try{change('coming',false,normalizeWindows(rows.map(r=>({start:r.from.value,end:r.to.value}))),mineDay.map(e=>e.id));}catch(error){status(error.message,true);}});custom.append(timeForm);custom.hidden=!!eventChoice.value;eventChoice.addEventListener('change',()=>{custom.hidden=!!eventChoice.value;});
   const join=button(own?"Edit times":role.value==='companion'?"I'm joining":"I'm joining",async()=>{if(own&&!eventChoice.value){if(!mineDay.some(e=>e.id===own.id)){await openPlace(p.id,own.slot_start,false,false,false,dateKey(own.starts_at,p.time_zone));const editor=root.querySelector('.place-time-editor');if(editor){editor.open=true;editor.scrollIntoView({block:'nearest'});}}else{custom.open=true;custom.scrollIntoView({block:'nearest'});}}else change('coming');},'place-primary');actions.append(join);role.addEventListener('change',()=>{if(!own)join.textContent=role.value==='companion'?"I'm joining":"I'm joining";});
   if(own?.starts_at)root.append(node('p',"Your time: "+rangeLabel(own.starts_at,own.ends_at,p.time_zone),'place-own-time'));
   if(new Date(t).getTime()<=Date.now())actions.append(button(own?.state==='here'?"Still here":"I am here now",()=>change('here')));
   if(own)actions.append(button("Remove entry",()=>change('leave')));root.append(actions,custom,fields);
   const feedback=node('p','','places-feedback');feedback.dataset.detailStatus='';feedback.setAttribute('role','status');feedback.hidden=true;root.append(feedback,about);
   if(access?.can_manage){const management=document.createElement('details');management.append(node('summary',"Special meetup in this window"));const eventForm=node('form',undefined,'places-form');for(const [key,label,max] of [['title',"Title, e.g. Puppy walk",120],['description',"Arrangements, participation and costs",1500],['contact',"Public contact person / contact details",500]]){const l=node('label',label),input=document.createElement(key==='description'?'textarea':'input');input.name=key;input.maxLength=max;input.required=true;l.append(input);eventForm.append(l);}const submit=node('button',"Publish a meetup for this time window");submit.type='submit';eventForm.append(submit);eventForm.addEventListener('submit',event=>{event.preventDefault();perform(async g=>{const details=Object.fromEntries(new FormData(eventForm));await rpc(client,'save_place_slot_event',{place:p.id,service,t,event:null,expected:null,details});if(g!==generation)return;await openPlace(p.id,t,false);status("The special meetup has been published.");});});management.append(eventForm);root.append(management);}
  }
  function renderManager(){const box=$('[data-managed-places]');box.replaceChildren();for(const p of access.managed_places||[]){const row=node('div',undefined,'places-managed-item');row.append(node('span',`${p.name} · ${p.published?"public":"Draft"}`),button("Edit",()=>editPlace(p)));box.append(row);}}
  function syncDogRule(form){const prohibited=form.elements.dog_access.value==='prohibited';if(prohibited)form.elements.walks_enabled.checked=false;form.elements.walks_enabled.disabled=prohibited;}
  function editPlace(p=null,suggestion=null){const form=$('[data-place-form]');form.reset();for(const key of ['id','version','proposal_id','proposal_version'])form.elements[key].value='';for(const key of ['id','name','description','locality','latitude','longitude','time_zone','version'])if(p&&key in p)form.elements[key].value=p[key];const notes=p?.services?.find(s=>s.id===service);form.elements.dog_access.value=notes?.dog_access||'unknown';form.elements.service_description.value=notes?.description||p?.service_description||'';form.elements.source_url.value=notes?.source_url||'';form.elements.proposal_id.value=suggestion?.id||'';form.elements.proposal_version.value=suggestion?.version||'';form.elements.published.checked=!!p?.published;form.elements.walks_enabled.checked=p?.services?p.services.some(s=>s.id===service&&s.walks_enabled):!suggestion;syncDogRule(form);form.hidden=false;form.elements.name.focus();}
  async function reloadAccess(g=generation){if(!authUser)return;const next=await rpc(client,'get_place_workspace',{service});if(g!==generation)return;access=next;fillPrefs();}
  function renderSuggestions(){
   const form=$('[data-suggestion-form]'),note=$('[data-suggestion-access]'),own=$('[data-own-suggestions]'),reviews=$('[data-review-suggestions]');
   form.hidden=!authUser||!access?.can_join||!service;note.replaceChildren();own.replaceChildren();reviews.replaceChildren();
   if(!authUser){note.append(node('span',"You need an account to suggest a place. "));const a=node('a',"Go to your account");a.href='../konto/?next='+encodeURIComponent(location.pathname+location.search);note.append(a);}else if(!service)note.textContent="First choose the service above that you'd like to suggest a place for.";
   const states={pending:"Under review",accepted:"Added",rejected:"Declined",withdrawn:"Withdrawn"};
   for(const s of access?.suggestions||[]){
    if(s.own){const card=node('article',undefined,'place-event');card.append(node('h3',s.details.name),node('p',states[s.state]||s.state));if(s.review_note)card.append(node('p',s.review_note));if(s.state==='pending')card.append(button("Withdraw suggestion",()=>perform(async g=>{await rpc(client,'review_place_suggestion',{service:s.service_id,suggestion:s.id,expected:s.version,action:'withdraw',details:{}});if(g!==generation)return;await reloadAccess(g);status("Suggestion withdrawn.");})));own.append(card);}
    if(access?.can_manage&&s.state==='pending'){
     const card=node('article',undefined,'place-event');card.append(node('h3',s.details.name),node('p',s.details.locality),button("Review & edit",()=>editPlace(s.details,s)));
     const feedback=node('label',"Feedback when declining"),input=document.createElement('textarea');input.maxLength=500;input.rows=2;feedback.append(input);card.append(feedback,button("Decline suggestion",()=>perform(async g=>{if(!input.value.trim())throw new Error("Please give brief feedback on the suggestion.");await rpc(client,'review_place_suggestion',{service:s.service_id,suggestion:s.id,expected:s.version,action:'reject',details:{review_note:input.value}});if(g!==generation)return;await reloadAccess(g);status("Suggestion declined with feedback.");})));reviews.append(card);
    }
   }
   if(access?.can_manage&&!reviews.childElementCount)reviews.append(node('p',"There are no place suggestions awaiting review right now.",'places-hint'));
  }
  async function pickPoint(target){if(target==='suggestion')closeSuggestion(false);picking=target;$('[data-cancel-pick]').hidden=false;await setView('discover','map');status("Tap the exact meeting spot on the map.");$('[data-map]').scrollIntoView({block:'center',behavior:'smooth'});}
  async function share(value){try{if(navigator.share){await navigator.share({title:"GemDen meeting points",url:value});}else if(navigator.clipboard){await navigator.clipboard.writeText(value);status("Link copied.");}else{status(`Direct link: ${value}`);}}catch(e){if(e.name!=='AbortError')status(`Direct link: ${value}`);}}
  async function leaflet(){if(window.L)return window.L;if(!mapLoading){mapLoading=new Promise((resolve,reject)=>{let css=document.querySelector('[data-places-map-css]');if(!css){css=document.createElement('link');css.rel='stylesheet';css.href=mapAssets(location.href).css;css.dataset.placesMapCss='';document.head.append(css);}const script=document.createElement('script');script.src=mapAssets(location.href).script;script.onload=()=>resolve(window.L);script.onerror=()=>{script.remove();mapLoading=null;reject(new Error("The map could not be loaded. You can continue using the list."));};document.head.append(script);});}return mapLoading;}
  function destroyMap(){mapEpoch++;clearTimeout(mapDebounce);mapResize?.disconnect();mapResize=null;if(map){map.off();map.remove();map=null;mapGroup=null;}$('[data-map]').replaceChildren();}
  function applyPickedPoint(lat,lon){if(!picking)return;const target=picking,form=target==='admin'?$('[data-place-form]'):$('[data-suggestion-form]');form.elements.latitude.value=lat.toFixed(6);form.elements.longitude.value=lon.toFixed(6);picking=null;$('[data-cancel-pick]').hidden=true;if(target==='suggestion'){openSuggestion(false);form.elements.latitude.focus({preventScroll:true});}else form.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});status("The meeting spot has been added to the form. Please complete the place description.");}
  async function mapPoints(){if(!map||document.hidden)return;const g=generation,e=++mapEpoch,m=map,b=m.getBounds();const bounds=boundedBounds({south:b.getSouth(),north:b.getNorth(),west:b.getWest(),east:b.getEast()});
   try{const raw=await rpc(client,'get_place_map_points',{service,bounds}),points=visibleMapPoints(raw,offLeashOnly);if(g!==generation||e!==mapEpoch||map!==m)return;mapGroup.clearLayers();for(const point of points){
    if(point.count>1){const warnings=offLeashOnly?0:Number(point.prohibited_count)||0,title=offLeashOnly?`${point.visible_count} × designated off-leash area`:`${point.visible_count} Places${warnings?` · ${warnings} where dogs are not allowed`:''}`;const marker=window.L.marker([point.latitude,point.longitude],{title,alt:title,icon:window.L.divIcon({className:offLeashOnly?'places-cluster-icon is-off-leash':'places-cluster-icon',html:String(point.visible_count)+(warnings?'<span class="places-cluster-warning">!</span>':''),iconSize:[38,38]})});marker.on('click',()=>m.setView([point.latitude,point.longitude],m.getZoom()+2));mapGroup.addLayer(marker);}
    else{const rule=point.dog_access||'unknown',title=[point.name,rule==='unknown'&&service!==RUBY?'':dogAccessLabel(rule),point.here_count>0||point.companion_here_count>0?`${attendanceLabel(point.here_count,point.companion_here_count)} here now`:''].filter(Boolean).join(' · ');
     const marker=rule==='prohibited'?window.L.marker([point.latitude,point.longitude],{title,alt:title,icon:window.L.divIcon({className:'places-restricted-icon',html:'×',iconSize:[28,28]})}):window.L.circleMarker([point.latitude,point.longitude],{radius:9,color:'#fff5e9',weight:3,fillColor:point.here_count>0||point.companion_here_count>0?'#3b6a42':rule==='designated_off_leash'?'#276777':rule==='on_leash'?'#9b642e':'#861e43',fillOpacity:1});
     const label=document.createElement('button');label.type='button';label.textContent=title;label.addEventListener('click',()=>openPlace(point.id));marker.bindPopup(label);marker.on('click',()=>{if(picking)applyPickedPoint(point.latitude,point.longitude);else openPlace(point.id,null,false);});mapGroup.addLayer(marker);
    }}
     $('[data-map-status]').textContent=points.length?`${points.reduce((sum,p)=>sum+p.visible_count,0)} places in view${offLeashOnly?" · designated off-leash areas only":''}`:"No matching places in this view.";
   }catch(err){if(e===mapEpoch)$('[data-map-status]').textContent=err.message||"The map markers could not be loaded.";}
  }
  async function showMap(){if($('[data-status]').classList.contains('is-count'))status('');display='map';$('[data-map-wrap]').hidden=false;renderList();const g=generation;try{const L=await leaflet();if(g!==generation||view!=='discover'||display!=='map'||disposed)return;if(!map){const first=list[0],region=regionBounds(mapRegion);map=L.map($('[data-map]'),{preferCanvas:true,renderer:L.canvas({padding:0,tolerance:8}),attributionControl:false,worldCopyJump:false,maxBounds:[[-85,-180],[85,180]],minZoom:2,maxZoom:19,zoomAnimation:false,fadeAnimation:false}).setView(first?[first.latitude,first.longitude]:[51.2,10.4],first?13:5);L.control.attribution({position:'bottomleft'}).addTo(map);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',keepBuffer:0,updateWhenIdle:true,detectRetina:false,noWrap:true}).addTo(map);mapGroup=L.layerGroup().addTo(map);map.on('moveend',()=>{clearTimeout(mapDebounce);mapDebounce=setTimeout(mapPoints,300);});map.on('click',event=>{if(!picking)return;applyPickedPoint(event.latlng.lat,event.latlng.lng);});if(initialMapView){map.setView([initialMapView.latitude,initialMapView.longitude],initialMapView.zoom);initialMapView=null;}else if(nearBounds)map.fitBounds([[nearBounds.south,nearBounds.west],[nearBounds.north,nearBounds.east]]);else if(region)map.fitBounds([[region.south,region.west],[region.north,region.east]]);else if(list.length>1)map.fitBounds(list.map(p=>[p.latitude,p.longitude]),{padding:[22,22],maxZoom:13});}
   if(!mapResize&&typeof ResizeObserver==='function'){mapResize=new ResizeObserver(()=>map?.invalidateSize({pan:false,debounceMoveend:true}));mapResize.observe($('[data-map]'));}
   await mapPoints();}catch(err){status(err.message,true);}}
  $('[data-off-leash]').addEventListener('change',()=>{offLeashOnly=service===RUBY&&$('[data-off-leash]').checked;const next=new URL(location.href);if(offLeashOnly)next.searchParams.set('hundeauslauf','1');else next.searchParams.delete('hundeauslauf');history.replaceState(null,'',next);mapPoints();});
  $('[data-share-map]').addEventListener('click',()=>{if(!map)return;const link=mapShareUrl(location.href,service,map.getCenter(),map.getZoom(),offLeashOnly);$('[data-map-link]').value=link;$('[data-open-map]').href=link;$('[data-map-share]').hidden=false;});
  $('[data-copy-map]').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('[data-map-link]').value);status("Link copied.");}catch{$('[data-map-link]').select();status("Please copy the selected map link.");}});
  $('[data-berlin-view]').addEventListener('click',async()=>{initialMapView=null;mapRegion='berlin';nearBounds=null;search='';page=0;listLimit=8;closePlace(false);$('[data-search-form]').elements.search.value='';const next=new URL(location.href);next.searchParams.delete('ort');next.searchParams.delete('ausschnitt');next.searchParams.set('gebiet','berlin');next.searchParams.set('ansicht','entdecken');next.searchParams.set('darstellung','karte');history.replaceState(null,'',next);await setView('discover','map');const b=regionBounds('berlin');if(map)map.fitBounds([[b.south,b.west],[b.north,b.east]]);});
  el.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  el.querySelectorAll('[data-display]').forEach(b=>b.addEventListener('click',()=>{display=b.dataset.display;el.querySelectorAll('[data-display]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.display===display)));if(display==='map')showMap();else{destroyMap();$('[data-map-wrap]').hidden=true;loadList(false);}}));
  $('[data-search-form]').addEventListener('submit',async e=>{e.preventDefault();closePlace(false);listLimit=8;search=new FormData(e.currentTarget).get('search').trim();mapRegion=null;nearBounds=null;page=0;await loadList();if(map){const p=list[0];if(p)map.setView([p.latitude,p.longitude],13);else status("No meeting point found for this search.");}});
  $('[data-nearby]').addEventListener('click',()=>{if(!navigator.geolocation){status("Your browser cannot determine your location. Search for a place instead.",true);return;}status("Determining your location once …");navigator.geolocation.getCurrentPosition(async position=>{const lat=position.coords.latitude,lon=position.coords.longitude,span=0.08,lonSpan=span/Math.max(.1,Math.cos(lat*Math.PI/180));closePlace(false);listLimit=8;nearBounds=boundedBounds({south:lat-span,north:lat+span,west:lon-lonSpan,east:lon+lonSpan});page=0;search='';$('[data-search-form]').reset();await loadList();if(map)map.fitBounds([[nearBounds.south,nearBounds.west],[nearBounds.north,nearBounds.east]]);},()=>status("Your location is unavailable. You can still search by place or neighbourhood.",true),{enableHighAccuracy:false,maximumAge:300000,timeout:10000});});
  serviceSelect.addEventListener('change',async()=>{service=serviceSelect.value||null;if(service!==RUBY){offLeashOnly=false;$('[data-off-leash]').checked=false;}presentService();detail=null;updateUrl();url.searchParams.delete('ort');await identity();});
  $('[data-more]').addEventListener('click',()=>{if(view==='discover'){page++;loadList(true,true);return;}listLimit+=8;if(listLimit<=list.length||!hasMore)renderList();else{page++;loadList(true,true);}});$('[data-previous]').addEventListener('click',()=>{page=Math.max(0,page-1);loadList();});
  $('[data-order-toggle]').addEventListener('click',()=>{ordering=!ordering;renderList();});
  $('[data-open-suggestion]').addEventListener('click',event=>{event.preventDefault();closePlace(false);openSuggestion();});
  $('[data-close-suggestion]').addEventListener('click',()=>closeSuggestion());
  $('#ort-vorschlagen').addEventListener('cancel',event=>{event.preventDefault();closeSuggestion();});
  $('#ort-vorschlagen').addEventListener('click',event=>{if(event.target!==event.currentTarget)return;const r=event.currentTarget.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeSuggestion();});
  $('[data-cancel-pick]').addEventListener('click',()=>{const target=picking;picking=null;$('[data-cancel-pick]').hidden=true;if(target==='suggestion')openSuggestion(false);else $('[data-place-form]').scrollIntoView({block:'center'});});
  $('[data-preferences]').addEventListener('submit',event=>{event.preventDefault();perform(async g=>{const f=event.currentTarget,raw=f.elements.dog_names.value.trim();if(await savePrefs({dog_names:raw?dogNames(raw):[],public_walks:f.elements.public_walks.checked,blob_shortcuts:f.elements.blob_shortcuts.checked},g)){status("Your details have been saved.");if(detail)await openPlace(detail.place.id,activeSlot,false);}});});
  $('[data-new-place]').addEventListener('click',()=>editPlace());$('[data-cancel-place]').addEventListener('click',()=>{$('[data-place-form]').hidden=true;$('[data-place-form]').reset();});
  $('[data-clear-favorites]').addEventListener('click',()=>perform(async g=>{if(await savePrefs({favorites:[]},g)){await loadList(false);status("Your favourite selection has been cleared.");}}));
  $('[data-place-form]').elements.dog_access.addEventListener('change',()=>syncDogRule($('[data-place-form]')));
  $('[data-place-form]').addEventListener('submit',event=>{event.preventDefault();perform(async g=>{const form=event.currentTarget,raw=Object.fromEntries(new FormData(form));const details={...raw,published:form.elements.published.checked,walks_enabled:form.elements.walks_enabled.checked};if(raw.proposal_id)await rpc(client,'review_place_suggestion',{service,suggestion:raw.proposal_id,expected:Number(raw.proposal_version),action:'accept',details});else await rpc(client,'save_service_place',{service,place:raw.id||null,expected:raw.version?Number(raw.version):null,details});if(g!==generation)return;await reloadAccess(g);if(g!==generation)return;form.hidden=true;form.reset();await loadList(false);status("Meeting point saved.");});});
  $('[data-suggestion-form]').addEventListener('submit',event=>{event.preventDefault();perform(async g=>{const form=event.currentTarget,details=Object.fromEntries(new FormData(form));await rpc(client,'suggest_service_place',{service,details});if(g!==generation)return;form.reset();await reloadAccess(g);status("Your place suggestion is now with the meetup managers for review.");});});
  $('[data-pick-suggestion]').addEventListener('click',()=>pickPoint('suggestion'));
  $('[data-pick-admin]').addEventListener('click',()=>pickPoint('admin'));
  $('[data-share-overview]').addEventListener('click',()=>{const u=new URL(location.href);u.searchParams.delete('ort');share(u.href);});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){destroyMap();}else{refreshVisible();if(display==='map'&&view==='discover')showMap();}});
  el.addEventListener('input',event=>{if(event.target.closest('[data-place-detail]'))detailDirty=true;});
  async function refreshVisible(){if(refreshing||busy||disposed||document.hidden)return;refreshing=true;try{if(detail&&!detailDirty&&!$('[data-place-detail] details[open]'))await openPlace(detail.place.id,activeSlot&&new Date(activeSlot).getTime()+HOURS>Date.now()?activeSlot:null,false,false,true);if((view==='favorites'&&page===0)||(view==='discover'&&display==='list'&&page<3))await loadList(false);if(map)await mapPoints();}finally{refreshing=false;}}
  const timer=setInterval(refreshVisible,60000);window.addEventListener('pagehide',()=>{disposed=true;generation++;clearInterval(timer);destroyMap();});window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
  client?.auth?.onAuthStateChange((event)=>{if(['SIGNED_IN','SIGNED_OUT','USER_UPDATED'].includes(event))setTimeout(identity,0);});
  applyView(view);
  identity();return {refresh:refreshVisible,destroy:()=>{disposed=true;generation++;clearInterval(timer);destroyMap();}};
 }
 return {RUBY,dogNames,participationNames,attendanceLabel,slotStart,slotLabel,rangeLabel,normalizeWindows,dateKey,mapsLink,ids,entryView,boundedBounds,regionBounds,mapAssets,mapViewFromUrl,mapShareUrl,visibleMapPoints,dogAccess,dogAccessLabel,boroughOf,groupByBorough,mount};
});
