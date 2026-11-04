/* Public relationships only. Expansion state stays in this page. */
(function () {
  const ROOTS = ['ROOT-DYNASTIES', 'ROOT-SYNERGIES'];
  const ID = /^[A-Z0-9-]{1,100}$/;
  function sanitiseCatalogue(raw) {
    const nodes = new Map();
    for (const item of Array.isArray(raw?.nodes) ? raw.nodes : []) {
      if (!item || !ID.test(item.id) || nodes.has(item.id) || typeof item.name !== 'string' || !item.name.trim()) continue;
      if (!['category', 'dynasty', 'synergy', 'place', 'service'].includes(item.kind)) continue;
      const path = typeof item.public_path === 'string' && /^\/(?:community|leistungen)\/[a-z0-9/-]+\/$/.test(item.public_path) ? item.public_path : '';
      nodes.set(item.id, {id:item.id, kind:item.kind, name:item.name.trim().slice(0,150), public_path:path});
    }
    const seen = new Set(), links = [];
    for (const link of Array.isArray(raw?.links) ? raw.links : []) {
      const key = link?.from + ':' + link?.to;
      if (!link || link.from === link.to || !nodes.has(link.from) || !nodes.has(link.to) || ROOTS.includes(link.to) || seen.has(key)) continue;
      seen.add(key); links.push({from:link.from,to:link.to});
    }
    if (!ROOTS.every(id => nodes.has(id))) throw new Error('catalogue-invalid');
    return {nodes,links};
  }
  function visibleGraph(catalogue, opened) {
    const depths = new Map(ROOTS.map(id => [id,0])), queue = [...ROOTS], processed = new Set(), links = [];
    while (queue.length) {
      const id = queue.shift();
      if (processed.has(id)) continue;
      processed.add(id);
      if (!opened.has(id)) continue;
      for (const edge of catalogue.links.filter(link => link.from === id)) {
        links.push(edge);
        if (!depths.has(edge.to)) {depths.set(edge.to,depths.get(id)+1);queue.push(edge.to);}
      }
    }
    return {nodes:[...depths].map(([id,depth]) => ({...catalogue.nodes.get(id),depth})),links};
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {sanitiseCatalogue,visibleGraph};
  if (typeof document === 'undefined') return;
  const explorer = document.querySelector('[data-connections-explorer]');
  if (!explorer) return;
  const world = document.querySelector('[data-sketch-world]');
  const dataUrl = new URL('../assets/data/community-connections.v1.json?v=20261104-2', document.currentScript.src);
  const layers = explorer.querySelector('[data-connection-layers]');
  const svg = world.querySelector('[data-connection-lines]');
  const status = explorer.querySelector('[data-connection-status]');
  const fallback = explorer.querySelector('[data-connection-fallback]');
  const pause = explorer.querySelector('[data-connection-motion]');
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const paintedRoots = [...world.querySelectorAll('[data-root-toggle]')];
  const nodeElements = new Map();
  let catalogue = null, loading = null, opened = new Set(), graph = null, paused = false;
  let drawnKeys = new Set(), frame = 0, lastSize = '', animateNext = false;
  const canMove = () => !paused && !media.matches && !document.hidden;
  const localPath = path => document.documentElement.lang === 'en' ? '/en' + path : path;
  function syncRoots() {
    paintedRoots.forEach(button => {
      const on = opened.has(button.dataset.rootToggle);
      button.setAttribute('aria-expanded', String(on));
      button.querySelector('[data-root-action]').textContent = on ? 'Schließen' : 'Öffnen';
      button.querySelector('[data-root-symbol]').textContent = on ? '−' : '+';
    });
  }
  async function loadCatalogue() {
    if (catalogue) return catalogue;
    if (!loading) loading = fetch(dataUrl, {cache:'no-cache', credentials:'omit'}).then(response => {
      if (!response.ok) throw new Error('catalogue-unavailable');
      return response.json();
    }).then(sanitiseCatalogue).then(value => {catalogue = value; return value;}).finally(() => {loading = null;});
    return loading;
  }
  function nodeControl(node, expandable) {
    const control = document.createElement(expandable ? 'button' : 'a');
    control.className = 'connection-node-control'; control.id = 'connection-control-' + node.id;
    const name = document.createElement('span'); name.textContent = node.name; control.append(name);
    if (expandable) {
      control.type = 'button'; control.dataset.connectionToggle = node.id;
      control.setAttribute('aria-expanded', String(opened.has(node.id)));
      control.setAttribute('aria-controls', 'connection-layers');
      const symbol = document.createElement('span'); symbol.className = 'connection-node-symbol'; symbol.setAttribute('aria-hidden','true'); symbol.textContent = opened.has(node.id) ? '−' : '+'; control.append(symbol);
    } else control.href = localPath(node.public_path);
    return control;
  }
  function render(trigger = null) {
    const focused = document.activeElement?.closest?.('[data-connection-node]')?.dataset.connectionNode;
    const previous = new Set(nodeElements.keys());
    graph = visibleGraph(catalogue, opened);
    const visible = new Set(graph.nodes.map(node => node.id));
    for (const id of opened) if (!visible.has(id)) opened.delete(id);
    explorer.hidden = !graph.links.length;
    const incoming = new Map(); graph.links.forEach(edge => incoming.set(edge.to, (incoming.get(edge.to)||0)+1));
    layers.replaceChildren(); nodeElements.clear();
    for (const depth of [...new Set(graph.nodes.map(node => node.depth))].filter(depth => depth > 0).sort((a,b) => a-b)) {
      const row = document.createElement('div'); row.className = 'connection-layer'; row.dataset.depth = String(depth);
      const peers = graph.nodes.filter(node => node.depth === depth);
      row.style.setProperty('--node-count', String(peers.length)); if (peers.length > 4) row.classList.add('is-many');
      for (const node of peers) {
        const element = document.createElement('article'); element.className = 'connection-node'; element.dataset.connectionNode = node.id;
        if (depth === 1) element.style.gridColumn = graph.links.find(edge => edge.to === node.id)?.from === ROOTS[0] ? '1' : '2';
        if ((incoming.get(node.id)||0) > 1) element.classList.add('is-shared');
        const expandable = catalogue.links.some(edge => edge.from === node.id);
        element.append(nodeControl(node, expandable));
        if (expandable && node.public_path) {
          const link = document.createElement('a'); link.className = 'connection-profile'; link.href = localPath(node.public_path); link.textContent = '↗';
          link.setAttribute('aria-label', node.name + ' – ' + 'Seite öffnen →'); link.title = node.name; element.append(link);
        }
        row.append(element); nodeElements.set(node.id, element);
      }
      layers.append(row);
    }
    status.classList.remove('connection-error'); status.textContent = ''; syncRoots(); animateNext = !!trigger; scheduleDraw();
    if (focused && nodeElements.has(focused)) nodeElements.get(focused).querySelector('button,a').focus({preventScroll:true});
    if (trigger && canMove()) {
      for (const [id, element] of nodeElements) if (!previous.has(id)) element.animate([{opacity:0,filter:'blur(8px)'},{opacity:1,filter:'blur(0)'}], {duration:600, easing:'ease-out'});
    }
  }
  function draw() {
    frame = 0; const box = world.getBoundingClientRect(); lastSize = box.width + ':' + box.height;
    svg.setAttribute('viewBox', '0 0 ' + box.width + ' ' + box.height); svg.replaceChildren();
    if (!graph || explorer.hidden) {drawnKeys.clear(); return;}
    const nextKeys = new Set(), incoming = new Map(); graph.links.forEach(edge => incoming.set(edge.to,(incoming.get(edge.to)||0)+1));
    for (const edge of graph.links) {
      const root = paintedRoots.find(button => button.dataset.rootToggle === edge.from);
      const fromNode = root || nodeElements.get(edge.from)?.querySelector('button,a');
      const toNode = nodeElements.get(edge.to)?.querySelector('button,a');
      if (!fromNode || !toNode) continue;
      const from = fromNode.getBoundingClientRect(), to = toNode.getBoundingClientRect();
      const sx = from.left + from.width/2 - box.left, sy = from.bottom - box.top + 3;
      let ex = to.left + to.width/2 - box.left, ey = to.top - box.top - 4, pathText;
      if (root) {
        const lane = box.width * (edge.from === ROOTS[0] ? .055 : .945);
        const bend = Math.min(sy + 65, ey - 35);
        pathText = 'M '+sx+' '+sy+' C '+sx+' '+bend+', '+lane+' '+bend+', '+lane+' '+(bend+35)+' C '+lane+' '+(ey-40)+', '+ex+' '+(ey-55)+', '+ex+' '+ey;
      } else if (box.width <= 850 && graph.nodes.find(node => node.id === edge.to).depth >= 2) {
        const left = sx < box.width/2, lane = box.width * (left ? .045 : .955);
        ex = (left ? to.left-4 : to.right+4) - box.left; ey = to.top + to.height/2 - box.top;
        const elbow = Math.min(sy + 36, ey - 35), mid = sy + (ey-sy)/2;
        pathText = 'M '+sx+' '+sy+' C '+sx+' '+elbow+', '+lane+' '+elbow+', '+lane+' '+(elbow+18)+' C '+(lane-7)+' '+mid+', '+(lane+9)+' '+ey+', '+ex+' '+ey;
      } else {
        const mid = sy + (ey-sy)/2; pathText = 'M '+sx+' '+sy+' C '+sx+' '+mid+', '+ex+' '+mid+', '+ex+' '+ey;
      }
      const key = edge.from + ':' + edge.to; nextKeys.add(key);
      const path = document.createElementNS('http://www.w3.org/2000/svg','path'); path.setAttribute('class','connection-line'+((incoming.get(edge.to)||0)>1?' is-shared':'')); path.setAttribute('d',pathText); path.dataset.connection = key; svg.append(path);
      if (animateNext && !drawnKeys.has(key) && canMove()) {
        const length = path.getTotalLength(); path.style.strokeDasharray = String(length);
        const movement = path.animate([{strokeDashoffset:length},{strokeDashoffset:0}],{duration:850,easing:'ease-out'});
        movement.onfinish = () => {path.style.strokeDasharray = '';};
      }
    }
    drawnKeys = nextKeys; animateNext = false;
  }
  function scheduleDraw() {if (!frame) frame = requestAnimationFrame(draw);}
  async function toggle(id, fromPainting = false) {
    explorer.hidden = false; explorer.setAttribute('aria-busy','true'); status.textContent = catalogue ? '' : 'Verbindungen werden geladen …'; fallback.hidden = true;
    try {
      await loadCatalogue(); if (!catalogue.nodes.has(id)) return;
      if (opened.has(id)) opened.delete(id); else opened.add(id);
      render(id);
      if (fromPainting && opened.has(id)) {
        const targetId = graph.links.find(edge => edge.from === id)?.to;
        const target = nodeElements.get(targetId);
        if (target && target.getBoundingClientRect().bottom > innerHeight - 30) target.scrollIntoView({block:'center',behavior:canMove()?'smooth':'auto'});
      }
    } catch (_) {status.classList.add('connection-error'); status.textContent = 'Die Verbindungen konnten gerade nicht geladen werden. Die Seiten kannst du direkt öffnen.'; fallback.hidden = false;}
    finally {explorer.setAttribute('aria-busy','false');}
  }
  paintedRoots.forEach(button => button.addEventListener('click',event => {event.preventDefault(); toggle(button.dataset.rootToggle,true);}));
  explorer.addEventListener('click',event => {const button = event.target.closest('[data-connection-toggle]'); if (button) toggle(button.dataset.connectionToggle);});
  pause.addEventListener('click',() => {
    paused = !paused; pause.setAttribute('aria-pressed',String(paused));
    const label = paused ? 'Bewegung einschalten' : 'Bewegung pausieren'; pause.setAttribute('aria-label',label); pause.title = label;
    if (paused) world.getAnimations({subtree:true}).forEach(animation => animation.finish());
  });
  new ResizeObserver(() => {const box = world.getBoundingClientRect(); if (box.width + ':' + box.height !== lastSize) scheduleDraw();}).observe(world);
  function followHash() {
    const hash = location.hash.slice(1);
    const id = hash === 'dynastien' ? ROOTS[0] : hash === 'synergien' ? ROOTS[1] : hash === 'rubybubys' ? 'DYN-RUBYBUBYS' : hash === 'alternative' ? 'SYN-ALTERNATIVE' : null;
    if (!id) return;
    if (id === 'DYN-RUBYBUBYS') opened.add(ROOTS[0]);
    if (id === 'SYN-ALTERNATIVE') opened.add(ROOTS[1]);
    if (!opened.has(id)) toggle(id,true);
  }
  window.addEventListener('hashchange',followHash); followHash();
})();
