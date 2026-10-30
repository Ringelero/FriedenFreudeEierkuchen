(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else {
    root.GemDenBlobGardenHome = api;
    const start = () => api.mount();
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
    else start();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const HOME_PATHS = Object.freeze(['community/','leistungen/','konto/','treffpunkte/?ansicht=entdecken&darstellung=karte','kalender/','system/','community/#dynastien','community/#synergien']);
  const INTRODUCTION = "Aren't you tired of big corporations ripping us all off? Let's build a community. Let's be there for each other. Free from dependence on the wealthy. Independent!";
  const CATEGORIES = Object.freeze([
    {id:'services',title:"Services",icon:'sprout'},
    {id:'account',title:"My account",icon:'person'},
    {id:'dynasties',title:"Dynasties",icon:'home'},
    {id:'synergies',title:"Synergies",icon:'connections'},
    {id:'map',title:"Map",icon:'map'},
    {id:'calendar',title:"Calendar",icon:'calendar'},
    {id:'system',title:"FFE system",icon:'book'},
    {id:'help',title:"Help & tickets",icon:'help'}
  ]);
  const ICONS = {
    sprout:'<path d="M12 21V11M12 13C3 14 3 7 4 4c6 0 9 3 8 9Zm0-1c-1-7 4-10 9-9 0 6-3 10-9 9Z"></path>',
    person:'<path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm-4 14c0-10 16-10 16 0"></path>',
    home:'<path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"></path>',
    connections:'<path d="M8 12h8M7 7l5 9 5-9M3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm12 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM9 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"></path>',
    map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Zm6-2v16m6-14v16"></path>',
    calendar:'<path d="M7 3v4m10-4v4M4 10h16M4 5h16v16H4Zm4 9h2m4 0h2m-8 3h2"></path>',
    book:'<path d="M12 6C8 3 5 3 2 4v15c4-1 7 0 10 2m0-15c4-3 7-3 10-2v15c-4-1-7 0-10 2Zm0 0v15"></path>',
    help:'<path d="M4 3h16v14H9l-5 4Zm5 5a3 3 0 0 1 6 0c0 2-3 2-3 4m0 2v.1"></path>'
  };
  function catalogEntries(raw,kind) {
    const config = {
      services:{key:'services',path:/^\/leistungen\/[a-z0-9-]+\/$/},
      dynasties:{key:'dynasties',path:/^\/community\/dynastien\/[a-z0-9-]+\/$/},
      synergies:{key:'synergies',path:/^\/community\/synergien\/[a-z0-9-]+\/$/}
    }[kind];
    if (!config) return [];
    const seen = new Set(), statuses = {building:"In preparation",open:"Available",paused:"Paused"};
    return (Array.isArray(raw?.[config.key]) ? raw[config.key] : []).filter(item => {
      if (!item || item.status === 'archived' || typeof item.name !== 'string' || !item.name.trim() || !config.path.test(item.public_path) || seen.has(item.public_path)) return false;
      seen.add(item.public_path); return true;
    }).map(item => ({title:item.name.slice(0,180),path:item.public_path.slice(1),detail:kind === 'services' ? item.status === 'building' && item.availability ? "Partly available" : statuses[item.status] || '' : ''}));
  }
  function categoryLinks(id) {
    return ({
      account:[
        {title:"Open my account",path:'konto/#konto-uebersicht'},
        {title:"Profile & personal page",path:'konto/#konto-profil'},
        {title:"Collaboration",path:'konto/#konto-zusammenarbeit'},
        {title:"Contacts & care",path:'konto/#konto-kontakte'},
        {title:"My calendar",path:'kalender/?kalender=PERSONAL'},
        {title:"Settings",path:'konto/#konto-einstellungen'}
      ],
      map:[
        {title:"Open the map",path:HOME_PATHS[3]},
        {title:"Meeting points as a list",path:'treffpunkte/?ansicht=entdecken&darstellung=liste'}
      ],
      calendar:[
        {title:"All calendars",path:'kalender/'},
        {title:"My calendar",path:'kalender/?kalender=PERSONAL'},
        {title:'Rubybubys',path:'kalender/?kalender=RUBYBUBYS'},
        {title:'ThreeDen',path:'kalender/?kalender=THREEDEN'},
        {title:'Çiçek',path:'kalender/?kalender=CICEK'}
      ],
      system:[
        {title:"Explore the FFE system",path:'system/'},
        {title:"About GemDen & FFE",path:'info/'}
      ],
      help:[
        {title:"Help & status",path:'hilfe/'},
        {title:"Write a ticket",path:'tickets/#new-ticket-title'},
        {title:"My Tickets",path:'tickets/#ticket-list-title'}
      ]
    })[id] || [];
  }
  const clamp = (value, low, high) => Math.max(low, Math.min(Math.max(low, high), value));
  function placement(anchor, viewport, size = 78) {
    const x = clamp(anchor.left + (anchor.width - size) / 2, 12, viewport.width - size - 12);
    if (anchor.top < 16) return {edge:'top', x, y:8};
    if (anchor.bottom > viewport.height - 16) return {edge:'bottom', x, y:Math.max(8,viewport.height - size - 8)};
    return {edge:'home', x, y:anchor.top};
  }
  function animationEnabled({reduced = false, paused = false, hidden = false} = {}) {
    return !reduced && !paused && !hidden;
  }
  function mount() {
    if (!document.body.classList.contains('garden-home') || window.BLOB_CONFIG?.residence !== 'garden') return;
    const seat = document.querySelector('[data-blob-seat]');
    const character = document.getElementById('blob-character');
    const chat = document.getElementById('blob-chat');
    if (!seat || !character || !chat || character.classList.contains('blob-home-resident')) return;
    const base = new URL(window.BLOB_CONFIG.root || './', location.href);
    const routes = [
      {id:'home-community',path:HOME_PATHS[0],title:'Community',detail:"Dynasties, synergies and the people behind them.",terms:"Community Gemeinschaft Dynastien Synergien Menschen people connections dynasties synergies"},
      {id:'home-opportunities',path:HOME_PATHS[1],title:"Opportunities",detail:"Offers, skills and shared projects.",terms:'Möglichkeiten Angebote anbieten Gesuche Fähigkeiten opportunities offers skills'},
      {id:'home-account',path:HOME_PATHS[2],title:"My account",detail:"Your profile and your connections.",terms:'Konto Profil eigene Welt account profile my world'},
      {id:'home-map',path:HOME_PATHS[3],title:"Map",detail:"Discover places and meeting points.",terms:'Karte Orte Treffpunkte Lieblingsorte Stadtplan map places meeting points'},
      {id:'home-calendar',path:HOME_PATHS[4],title:"Calendar",detail:"Community events and your own dates.",terms:'Kalender Termine Veranstaltungen calendar dates events'},
      {id:'home-system',path:HOME_PATHS[5],title:"FFE system",detail:"Ideas, rules and their connections.",terms:'FFE System Regeln Institutionen Zusammenhänge institutions rules connections'},
      {id:'home-dynasties',path:HOME_PATHS[6],title:"Dynasties",detail:"Large circles of friends and family. A home you choose.",terms:'Dynastien Dynastie Freunde Familie Heimat Zugehörigkeit dynasties friends family home belonging'},
      {id:'home-synergies',path:HOME_PATHS[7],title:"Synergies",detail:"Hobbies, shared interests and belonging connect dynasties.",terms:'Synergien Synergie Hobbys Gemeinsamkeiten Kultur Schach Tennis Hexen synergies hobbies interests culture chess tennis witches'}
    ];
    window.BLOB_CONFIG.homeRoutes = routes;
    character.classList.add('blob-home-resident');
    character.insertAdjacentHTML('beforeend','<span class="blob-home-limb is-left" aria-hidden="true"></span><span class="blob-home-limb is-right" aria-hidden="true"></span><span class="blob-home-foot is-left" aria-hidden="true"></span><span class="blob-home-foot is-right" aria-hidden="true"></span>');
    seat.append(character);
    chat.classList.add('blob-home-chat');
    const header = document.createElement('div'); header.className = 'blob-home-chat-head';
    header.innerHTML = "<button type=\"button\" class=\"blob-home-introduce\" id=\"blob-intro-toggle\" aria-expanded=\"false\" aria-controls=\"blob-introduction\"><span aria-hidden=\"true\">✦</span><span>Get to know GemDen</span><span class=\"blob-home-chevron\" aria-hidden=\"true\">⌄</span></button><button type=\"button\" class=\"blob-home-close\" aria-label=\"Close Blob\">×</button>";
    header.querySelector('.blob-home-close').addEventListener('click', () => {
      if (chat.classList.contains('open')) character.click();
      character.focus({preventScroll:true});
    });
    const intro = document.createElement('section'); intro.id = 'blob-introduction'; intro.className = 'blob-home-introduction'; intro.hidden = true; intro.setAttribute('aria-labelledby','blob-intro-toggle');
    const introText = document.createElement('p'); introText.textContent = INTRODUCTION; intro.append(introText);
    const introToggle = header.querySelector('.blob-home-introduce');
    function showIntroduction(open) { intro.hidden = !open; introToggle.setAttribute('aria-expanded',String(open)); }
    introToggle.addEventListener('click',() => showIntroduction(intro.hidden));
    const searchAnchor = document.createElement('span'); searchAnchor.dataset.blobSearchAnchor = ''; searchAnchor.hidden = true;
    const nav = document.createElement('nav'); nav.className = 'blob-home-categories'; nav.setAttribute('aria-label',"Explore areas");
    for (const category of CATEGORIES) {
      const button = document.createElement('button'); button.type = 'button'; button.dataset.blobCategory = category.id;
      button.setAttribute('aria-expanded','false'); button.setAttribute('aria-controls','blob-home-selection');
      button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICONS[category.icon]+'</svg>';
      const label = document.createElement('span'); label.textContent = category.title; button.append(label);
      button.addEventListener('click',() => showCategory(category)); nav.append(button);
    }
    const selection = document.createElement('section'); selection.id = 'blob-home-selection'; selection.className = 'blob-home-selection'; selection.hidden = true;
    selection.innerHTML = "<button type=\"button\" class=\"blob-home-back\">← All areas</button><h2 id=\"blob-home-selection-title\" tabindex=\"-1\"></h2><p class=\"blob-home-selection-note\" role=\"status\"></p><div class=\"blob-home-choices\"></div>";
    selection.setAttribute('aria-labelledby','blob-home-selection-title');
    const heading = selection.querySelector('h2'), note = selection.querySelector('.blob-home-selection-note'), choices = selection.querySelector('.blob-home-choices');
    const line = document.getElementById('blob-line'), meta = document.getElementById('blob-meta'); line.textContent = ''; line.hidden = true; meta.hidden = true;
    chat.replaceChildren(header,intro,line,searchAnchor,nav,selection,meta);
    let selected = '', selectionEpoch = 0;
    const catalogs = new Map();
    function addChoice(entry) {
      const link = document.createElement('a'); link.href = new URL(entry.path,base).href;
      const title = document.createElement('strong'); title.textContent = entry.title; link.append(title);
      if (entry.detail) {const detail = document.createElement('small'); detail.textContent = entry.detail; link.append(detail);}
      choices.append(link);
    }
    function showRoot(focus = true) {
      const previous = selected; selected = ''; selectionEpoch++; nav.hidden = false; selection.hidden = true;
      nav.querySelectorAll('button').forEach(button => button.setAttribute('aria-expanded','false'));
      if (focus) nav.querySelector('[data-blob-category="'+previous+'"]')?.focus({preventScroll:true});
    }
    selection.querySelector('.blob-home-back').addEventListener('click',() => showRoot());
    async function showCategory(category) {
      selected = category.id; const epoch = ++selectionEpoch;
      nav.hidden = true; selection.hidden = false; showIntroduction(false); choices.replaceChildren();
      nav.querySelectorAll('button').forEach(button => button.setAttribute('aria-expanded',String(button.dataset.blobCategory === selected)));
      heading.textContent = category.title; note.textContent = ''; note.hidden = true; heading.focus({preventScroll:true}); chat.scrollTop = 0;
      const dynamic = ['services','dynasties','synergies'].includes(category.id);
      if (!dynamic) {categoryLinks(category.id).forEach(addChoice);return;}
      const overview = category.id === 'services' ? {title:"All services in Opportunities",path:'leistungen/'} : category.id === 'dynasties' ? {title:"About dynasties",path:'community/#dynastien'} : {title:"What connects synergies",path:'community/#synergien'};
      addChoice(overview); note.hidden = false; note.textContent = "Loading the overview …";
      const file = category.id === 'services' ? 'services.v1.json' : 'community-v0.1.json';
      try {
        if (!catalogs.has(file)) catalogs.set(file,fetch(new URL('assets/data/'+file,base),{credentials:'omit',cache:'no-cache'}).then(response => {if (!response.ok) throw Error('catalog');return response.json();}).catch(error => {catalogs.delete(file);throw error;}));
        const raw = await catalogs.get(file); if (epoch !== selectionEpoch) return;
        const entries = catalogEntries(raw,category.id); entries.forEach(addChoice);
        note.textContent = category.id === 'synergies' ? entries.length ? "Shared interests connect our dynasties." : "Hobbies, shared interests and belonging connect dynasties. No synergies have been published here yet." : entries.length ? '' : "No entries have been published here yet.";
        note.hidden = !note.textContent;
      } catch {
        if (epoch !== selectionEpoch) return;
        note.textContent = "The overview could not be loaded just now. You can still open the area directly.";
      }
    }
    document.querySelectorAll('[data-blob-home-open]').forEach(button => button.addEventListener('click',event => {event.preventDefault();if (!chat.classList.contains('open')) character.click();}));
    const controls = document.querySelector('.blob-home-controls'); controls.hidden = false;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const key = 'gemden_blob_home_motion_paused';
    let paused = false, active = true, phase = '', frame = 0, lookFrame = 0, blinkTimer = 0, blinkEnd = 0, waveEnd = 0, morph = null, panelMotion = null;
    let pointer = {x:0,y:0}, positionStamp = '';
    try { paused = localStorage.getItem(key) === 'true'; } catch {}
    const canMove = () => animationEnabled({reduced:media.matches,paused,hidden:document.hidden || !active});
    const isOpen = () => chat.classList.contains('open');
    function stopMotion() {
      clearTimeout(blinkTimer); clearTimeout(blinkEnd); clearTimeout(waveEnd);
      character.classList.remove('blink','is-home-waving');
      character.style.removeProperty('--look-x'); character.style.removeProperty('--look-y');
      morph?.cancel(); panelMotion?.cancel();
    }
    function blinkLater() {
      clearTimeout(blinkTimer);
      if (!canMove()) return;
      blinkTimer = setTimeout(() => {
        if (!canMove()) return;
        character.classList.add('blink');
        blinkEnd = setTimeout(() => character.classList.remove('blink'), 150);
        blinkLater();
      }, 5800 + Math.random() * 2200);
    }
    function wave() {
      if (!canMove()) return;
      clearTimeout(waveEnd); character.classList.remove('is-home-waving');
      void character.offsetWidth; character.classList.add('is-home-waving');
      waveEnd = setTimeout(() => character.classList.remove('is-home-waving'), 1900);
    }
    function applyMotion() {
      document.body.classList.toggle('home-motion-paused',!canMove());
      character.classList.toggle('home-motion-paused',!canMove());
      for (const button of document.querySelectorAll('[data-blob-home-pause]')) {
        button.textContent = paused ? "Enable movement" : "Pause movement";
        button.setAttribute('aria-pressed', String(paused)); button.hidden = media.matches;
      }
      for (const button of document.querySelectorAll('[data-blob-home-wave]')) button.disabled = !canMove();
      stopMotion(); blinkLater();
    }
    document.querySelectorAll('[data-blob-home-wave]').forEach(button => button.addEventListener('click',wave));
    document.querySelectorAll('[data-blob-home-pause]').forEach(button => button.addEventListener('click',() => {
      paused = !paused; try { localStorage.setItem(key,String(paused)); } catch {}
      applyMotion();
    }));
    function tuneContents() {
      const knowledge = chat.querySelector('#blob-knowledge');
      if (knowledge && (knowledge.parentElement !== chat || knowledge.nextElementSibling !== searchAnchor)) searchAnchor.before(knowledge);
      if (knowledge && !knowledge.dataset.homeTuned) {
        knowledge.dataset.homeTuned = 'true';
        knowledge.querySelector('label').textContent = "What would you like to find?";
        knowledge.querySelector('input').placeholder = "Your question …";
      }
    }
    function locate() {
      frame = 0;
      if (!active) return;
      const open = isOpen(), rect = seat.getBoundingClientRect();
      const place = placement(rect,{width:document.documentElement.clientWidth || innerWidth,height:innerHeight});
      const next = open ? 'open' : place.edge;
      const stamp = next === 'home' || open ? next+'|'+innerWidth+'|'+innerHeight : next+'|'+place.x+'|'+place.y;
      if (stamp === positionStamp) return;
      positionStamp = stamp;
      const previous = character.getBoundingClientRect();
      if (next !== 'home') {character.style.removeProperty('--look-x');character.style.removeProperty('--look-y');}
      const parent = next === 'home' ? seat : document.body;
      if (character.parentElement !== parent) {
        const focused = document.activeElement === character;
        parent.append(character);
        if (focused) character.focus({preventScroll:true});
      }
      character.classList.toggle('is-chat-open',open);
      character.classList.toggle('is-home-peek-top',!open && place.edge === 'top');
      character.classList.toggle('is-home-peek-bottom',!open && place.edge === 'bottom');
      character.setAttribute('aria-label',open ? "Close Blob" : "Open Blob");
      character.dataset.homePlace = next;
      const style = (prop,value) => character.style.setProperty(prop,value,'important');
      if (next === 'home') {
        style('position','absolute'); style('left','5px'); style('top','2px'); style('right','auto'); style('bottom','auto');
      } else if (open) {
        style('position','fixed'); style('left','auto'); style('top','auto'); style('right',innerWidth < 761 ? '18px' : '22px'); style('bottom','18px');
      } else {
        style('position','fixed'); style('left',place.x+'px'); style('top',place.y+'px'); style('right','auto'); style('bottom','auto');
      }
      if (next !== phase && canMove() && character.animate) {
        morph?.cancel();
        const current = character.getBoundingClientRect(), dx = previous.left-current.left, dy = previous.top-current.top;
        const near = Math.hypot(dx,dy) < 220;
        morph = character.animate(near ? [{transform:`translate(${dx}px,${dy}px)`,opacity:.7},{transform:'translate(0,0)',opacity:1}] : [{opacity:.55},{opacity:1}],{duration:280,easing:'cubic-bezier(.2,.7,.2,1)'});
      }
      phase = next;
    }
    function queue() { if (!frame) frame = requestAnimationFrame(locate); }
    window.addEventListener('scroll',queue,{passive:true});
    window.addEventListener('resize',queue,{passive:true});
    window.addEventListener('blob:visibility',event => {
      if (event.detail?.open) {
        if (canMove() && chat.animate) {panelMotion?.cancel();panelMotion=chat.animate([{opacity:0,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'ease-out'});}
        introToggle.focus({preventScroll:true});
        wave();
      }
      else {showRoot(false);panelMotion?.cancel();clearTimeout(waveEnd);character.classList.remove('is-home-waving');}
      tuneContents(); queue();
    });
    window.addEventListener('blob:react',wave);
    window.addEventListener('pointermove',event => {
      if (!canMove() || phase !== 'home' || event.pointerType === 'touch') return;
      pointer = {x:event.clientX,y:event.clientY};
      if (!lookFrame) lookFrame = requestAnimationFrame(() => {
        lookFrame = 0; if (!canMove() || phase !== 'home') return;
        const rect = character.getBoundingClientRect();
        character.style.setProperty('--look-x',clamp((pointer.x-rect.left-rect.width/2)/70,-4,4)+'px');
        character.style.setProperty('--look-y',clamp((pointer.y-rect.top-rect.height/2)/90,-3,3)+'px');
      });
    },{passive:true});
    document.addEventListener('visibilitychange',applyMotion);
    media.addEventListener('change',applyMotion);
    window.addEventListener('pagehide',() => {active=false;stopMotion();cancelAnimationFrame(frame);cancelAnimationFrame(lookFrame);frame=lookFrame=0;});
    window.addEventListener('pageshow',() => {active=true;applyMotion();queue();});
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(queue).observe(seat.closest('.blob-home-scene'));
    new MutationObserver(tuneContents).observe(chat,{childList:true,subtree:true});
    applyMotion(); queue();
  }
  return {HOME_PATHS,CATEGORIES,INTRODUCTION,catalogEntries,categoryLinks,placement,animationEnabled,mount};
});
