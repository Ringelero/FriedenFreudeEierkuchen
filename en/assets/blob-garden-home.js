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
  const HOME_PATHS = Object.freeze(['community/','leistungen/','konto/','treffpunkte/?ansicht=entdecken&darstellung=karte','kalender/','system/']);
  const clamp = (value, low, high) => Math.max(low, Math.min(Math.max(low, high), value));
  function placement(anchor, viewport, size = 78) {
    const x = clamp(anchor.left + (anchor.width - size) / 2, 12, viewport.width - size - 12);
    if (anchor.top < 16) return {edge:'top', x, y:-24};
    if (anchor.bottom > viewport.height - 16) return {edge:'bottom', x, y:viewport.height - size + 24};
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
      {id:'home-community',path:HOME_PATHS[0],title:'Community',detail:"Neighbourhoods, dynasties and people.",terms:'Community Gemeinschaft Kieze Dynastien Menschen neighbourhoods people'},
      {id:'home-opportunities',path:HOME_PATHS[1],title:"Opportunities",detail:"Offers, skills and shared projects.",terms:'Möglichkeiten Angebote anbieten Gesuche Fähigkeiten opportunities offers skills'},
      {id:'home-account',path:HOME_PATHS[2],title:"My account",detail:"Your profile and your connections.",terms:'Konto Profil eigene Welt account profile my world'},
      {id:'home-map',path:HOME_PATHS[3],title:"Map",detail:"Discover places and meeting points.",terms:'Karte Orte Treffpunkte Lieblingsorte Stadtplan map places meeting points'},
      {id:'home-calendar',path:HOME_PATHS[4],title:"Calendar",detail:"Community events and your own dates.",terms:'Kalender Termine Veranstaltungen calendar dates events'},
      {id:'home-system',path:HOME_PATHS[5],title:"FFE system",detail:"Ideas, rules and their connections.",terms:'FFE System Regeln Institutionen Zusammenhänge institutions rules connections'}
    ];
    window.BLOB_CONFIG.homeRoutes = routes;
    character.classList.add('blob-home-resident');
    character.insertAdjacentHTML('beforeend','<span class="blob-home-limb is-left" aria-hidden="true"></span><span class="blob-home-limb is-right" aria-hidden="true"></span><span class="blob-home-foot is-left" aria-hidden="true"></span><span class="blob-home-foot is-right" aria-hidden="true"></span>');
    seat.append(character);
    chat.classList.add('blob-home-chat');
    const header = document.createElement('div'); header.className = 'blob-home-chat-head';
    header.innerHTML = "<div><span>Your guide</span><h2>Ask Blob.</h2></div><button type=\"button\" aria-label=\"Close Blob\">×</button>";
    chat.prepend(header);
    header.querySelector('button').addEventListener('click', () => {
      if (chat.classList.contains('open')) character.click();
      character.focus({preventScroll:true});
    });
    document.getElementById('blob-line').textContent = "Which way are you looking for?";
    const nav = document.createElement('nav'); nav.className = 'blob-home-routes'; nav.setAttribute('aria-label',"Direct routes with Blob");
    for (const route of routes) {
      const link = document.createElement('a'); link.href = new URL(route.path, base).href;
      link.textContent = route.title; nav.append(link);
    }
    document.getElementById('blob-meta').after(nav);
    const personal = document.createElement('details'); personal.className = 'blob-home-personal';
    personal.innerHTML = "<summary>Your shortcuts and settings</summary>";
    chat.querySelector('.blob-other-ways').before(personal);
    const motionTools = document.createElement('div'); motionTools.className = 'blob-home-motion-tools';
    motionTools.innerHTML = "<button type=\"button\" data-blob-home-wave>Give us a wave!</button><button type=\"button\" data-blob-home-pause aria-pressed=\"false\">Pause movement</button>";
    personal.append(motionTools);
    const controls = document.querySelector('.blob-home-controls'); controls.hidden = false;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const key = 'gemden_blob_home_motion_paused';
    let paused = false, active = true, phase = '', frame = 0, lookFrame = 0, blinkTimer = 0, blinkEnd = 0, waveEnd = 0, morph = null, panelMotion = null, pendingFocus = false;
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
      const suggestions = chat.querySelector('#blob-suggestions');
      if (suggestions && suggestions.parentElement !== personal) personal.append(suggestions);
      const knowledge = chat.querySelector('#blob-knowledge');
      if (knowledge && (knowledge.parentElement !== chat || knowledge.nextElementSibling !== personal)) personal.before(knowledge);
      if (knowledge && !knowledge.dataset.homeTuned) {
        knowledge.dataset.homeTuned = 'true';
        knowledge.querySelector('label').textContent = "What would you like to find?";
        knowledge.querySelector('input').placeholder = "For example calendar or nail care";
      }
      if (pendingFocus && knowledge && isOpen()) {
        pendingFocus = false; knowledge.querySelector('input').focus({preventScroll:true});
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
        pendingFocus = innerWidth > 760;
        if (canMove() && chat.animate) {panelMotion?.cancel();panelMotion=chat.animate([{opacity:0,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'ease-out'});}
        if (!pendingFocus) header.querySelector('button').focus({preventScroll:true});
        wave();
      }
      else {pendingFocus = false;panelMotion?.cancel();clearTimeout(waveEnd);character.classList.remove('is-home-waving');}
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
  return {HOME_PATHS,placement,animationEnabled,mount};
});
