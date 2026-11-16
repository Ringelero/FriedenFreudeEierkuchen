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
    const kind = id => catalogue.nodes.get(id).kind;
    const providers = new Set(catalogue.links.filter(({from, to}) => kind(from) === 'dynasty' && kind(to) === 'service'));
    const services = new Set([...providers].map(link => link.to));
    const crossLinks = new Set(catalogue.links.filter(({from, to}) => kind(from) === 'synergy' && services.has(to)));
    while (queue.length) {
      const id = queue.shift();
      if (processed.has(id)) continue;
      processed.add(id);
      if (!opened.has(id)) continue;
      for (const edge of catalogue.links.filter(link => link.from === id)) {
        if (crossLinks.has(edge)) continue;
        links.push(edge);
        if (!depths.has(edge.to)) {depths.set(edge.to,depths.get(id)+1);queue.push(edge.to);}
      }
    }
    // A supporting synergy connects to a service only once both sides have been opened.
    const visibleServices = new Set(links.filter(link => providers.has(link)).map(link => link.to));
    for (const link of crossLinks) {
      if (processed.has(link.from) && opened.has(link.from) && visibleServices.has(link.to)) links.push(link);
    }
    return {nodes:[...depths].map(([id,depth]) => ({...catalogue.nodes.get(id),depth})),links};
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {sanitiseCatalogue,visibleGraph};
  if (typeof document === 'undefined') return;
  const explorer = document.querySelector('[data-connections-explorer]');
  if (!explorer) return;
  const world = document.querySelector('[data-sketch-world]');
  const dataUrl = new URL('../assets/data/community-connections.v1.json?v=20261116-2', document.currentScript.src);
  const layers = explorer.querySelector('[data-connection-layers]');
  const svg = world.querySelector('[data-connection-lines]');
  const status = explorer.querySelector('[data-connection-status]');
  const fallback = explorer.querySelector('[data-connection-fallback]');
  const pause = explorer.querySelector('[data-connection-motion]');
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const paintedRoots = [...world.querySelectorAll('[data-root-toggle]')];
  const nodeElements = new Map();
  let catalogue = null, loading = null, opened = new Set(), graph = null, paused = false;
  let highlighted = null;
  let drawnKeys = new Set(), frame = 0, lastSize = '', animateNext = false;
  const canMove = () => !paused && !media.matches && !document.hidden;
  const localPath = path => document.documentElement.lang === 'en' ? '/en' + path : path;
  const motifs = {'DYN-RUBYBUBYS':0,'SYN-ALTERNATIVE':1,'PLACE-THREEDEN':2,'SERVICE-RUBYBUBYS-OBDACHLOSENHILFE':3,'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE':4};
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
  function nodeControl(node, expandable, existing) {
    if (existing) return existing;
    const control = document.createElement(node.public_path ? 'a' : 'button');
    control.className = 'connection-node-control'; control.id = 'connection-control-' + node.id;
    const art = document.createElement('span'); art.className = 'connection-node-art'; art.setAttribute('aria-hidden','true');
    const motif = motifs[node.id] ?? 5;
    art.style.backgroundPosition = (motif % 3 * 50) + '% ' + (Math.floor(motif / 3) * 100) + '%';
    const copy = document.createElement('span'); copy.className = 'connection-node-copy';
    const name = document.createElement('span'); name.className = 'connection-node-name'; name.textContent = node.name;
    const action = document.createElement('span'); action.className = 'connection-node-action';
    const actionLabel = document.createElement('span'); actionLabel.dataset.nodeAction = '';
    const symbol = document.createElement('span'); symbol.className = 'connection-node-symbol'; symbol.setAttribute('aria-hidden','true');
    action.append(actionLabel, symbol); copy.append(name, action); control.append(art, copy);
    if (node.public_path) control.href = localPath(node.public_path);
    else if (expandable) control.type = 'button';
    else control.disabled = true;
    if (expandable) {
      control.dataset.connectionToggle = node.id;
      control.setAttribute('aria-controls', 'connection-layers');
    }
    return control;
  }
  function render(trigger = null) {
    const focused = document.activeElement?.closest?.('[data-connection-node]')?.dataset.connectionNode;
    const previous = new Map(nodeElements);
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
      const branches = new Map();
      if (depth === 1) {
        for (const rootId of ROOTS) {
          if (!peers.some(node => graph.links.some(link => link.from === rootId && link.to === node.id))) continue;
          const branch = document.createElement('div'); branch.className = 'connection-branch'; branch.dataset.branch = rootId;
          branch.setAttribute('role','group'); branch.setAttribute('aria-label',catalogue.nodes.get(rootId).name);
          row.append(branch); branches.set(rootId,branch);
        }
        if (branches.size === 1) row.classList.add('is-single-branch');
      }
      for (const node of peers) {
        const element = document.createElement('article'); element.className = 'connection-node'; element.dataset.connectionNode = node.id;
        const branchRoot = depth === 1 ? graph.links.find(edge => edge.to === node.id)?.from : null;
        if ((incoming.get(node.id)||0) > 1) element.classList.add('is-shared');
        const expandable = catalogue.links.some(edge => edge.from === node.id);
        if (expandable) element.classList.add('is-expandable');
        element.dataset.motif = String(motifs[node.id] ?? 5);
        const control = nodeControl(node, expandable, previous.get(node.id)?.firstElementChild);
        const isOpen = expandable && opened.has(node.id);
        const goesToPage = node.public_path && (!expandable || isOpen);
        control.querySelector('[data-node-action]').textContent = goesToPage ? 'Seite öffnen' : isOpen ? 'Schließen' : expandable ? 'Verbindungen zeigen' : '';
        control.querySelector('.connection-node-symbol').textContent = goesToPage ? '↗' : isOpen ? '−' : expandable ? '+' : '';
        if (expandable) control.setAttribute('aria-expanded', String(isOpen));
        element.classList.toggle('is-active-branch', isOpen && highlighted === node.id);
        element.append(control);
        if (isOpen && node.public_path) {
          const close = document.createElement('button');
          close.type = 'button'; close.className = 'connection-branch-close'; close.dataset.connectionClose = node.id;
          close.setAttribute('aria-label', node.name + ' – ' + 'Verbindungen schließen');
          close.textContent = '−';
          element.append(close);
        }
        (branches.get(branchRoot) || row).append(element); nodeElements.set(node.id, element);
      }
      layers.append(row);
    }
    status.classList.remove('connection-error'); status.textContent = ''; syncRoots(); animateNext = !!trigger; scheduleDraw();
    if (focused && nodeElements.has(focused)) nodeElements.get(focused).querySelector('button,a').focus({preventScroll:true});
    if (trigger && canMove()) {
      for (const [id, element] of nodeElements) if (!previous.has(id)) element.animate([{opacity:0,filter:'blur(8px)'},{opacity:1,filter:'blur(0)'}], {duration:600, easing:'ease-out'});
    }
  }
  const svgNS = 'http://www.w3.org/2000/svg';

  function svgElement(tag, attributes) {
    const element = document.createElementNS(svgNS, tag);
    for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
    return element;
  }

  function coordinates(...values) {return values.join(' ');}

  function paintStem(layer, key, pathText, style, nextKeys) {
    nextKeys.add(key);
    const group = svgElement('g', {});
    group.classList.add('connection-stem');
    if (style.shared) group.classList.add('is-shared');
    if (style.highlighted) group.classList.add('is-active-branch');
    if (style.twig) group.classList.add('is-root-branch');
    layer.append(group);
    const path = svgElement('path', {class:'connection-line', d:pathText});
    path.dataset.connection = key;
    const inner = svgElement('path', {class:'connection-line-inner', d:pathText});
    group.append(path, inner);
    const length = path.getTotalLength();
    const marks = Math.min(style.twig ? 4 : 18, Math.max(1, Math.floor(length/(style.twig ? 70 : 48))));
    const details = svgElement('g', {class:'connection-stem-details'});
    group.append(details);
    for (let i = 1; i < marks; i++) {
      const distance = length*i/marks;
      const point = path.getPointAtLength(distance), next = path.getPointAtLength(Math.min(length, distance+2));
      const dx = next.x-point.x, dy = next.y-point.y, norm = Math.hypot(dx,dy) || 1;
      const nx = -dy/norm, ny = dx/norm;
      const x = point.x, y = point.y;
      details.append(svgElement('path', {class:'connection-rung', d:coordinates('M', x-nx*2.6, y-ny*2.6, 'Q', x+1, y+1, x+nx*2.6, y+ny*2.6)}));
      if (i === Math.floor(marks*.45) || (!style.twig && i === Math.floor(marks*.75))) {
        const side = i%2 ? 1 : -1;
        const tipX = x+nx*side*12-dx/norm*6, tipY = y+ny*side*12-dy/norm*6;
        details.append(svgElement('path', {class:'connection-bud', d:coordinates('M',x,y,'Q',x+nx*side*2-dx/norm*11,y+ny*side*2-dy/norm*11,tipX,tipY,'Q',x+nx*side*11+dx/norm*2,y+ny*side*11+dy/norm*2,x,y)}));
      }
    }
    if (animateNext && !drawnKeys.has(key) && canMove()) {
      for (const stroke of [path, inner]) {
        stroke.style.strokeDasharray = String(length);
        const animation = stroke.animate([{strokeDashoffset:length},{strokeDashoffset:0}], {duration:850, easing:'ease-out'});
        animation.onfinish = () => {stroke.style.strokeDasharray = '';};
      }
      details.animate([{opacity:0},{opacity:0,offset:.5},{opacity:1}], {duration:900,easing:'ease-out'});
    }
  }

  function draw() {
    frame = 0;
    const box = world.getBoundingClientRect();
    lastSize = box.width + ':' + box.height;
    svg.setAttribute('viewBox', coordinates(0, 0, box.width, box.height));
    svg.replaceChildren();
    if (!graph || explorer.hidden) {drawnKeys.clear(); return;}

    const relative = element => {
      const rect = element.getBoundingClientRect();
      return {left:rect.left-box.left, right:rect.right-box.left, top:rect.top-box.top,
        bottom:rect.bottom-box.top, width:rect.width, height:rect.height};
    };
    const cards = new Map([...nodeElements].map(([id, element]) => [id, relative(element.querySelector('.connection-node-control'))]));
    const center = rect => (rect.left + rect.right) / 2;
    const bounds = relative(layers);
    const outside = (left, inset) => left ? Math.max(8, bounds.left-inset) : Math.min(box.width-8, bounds.right+inset);

    // Mask the painted objects and their labels even at intermediate widths.
    const maskId = 'community-clear-illustrations';
    const defs = svgElement('defs', {});
    const mask = svgElement('mask', {id:maskId, maskUnits:'userSpaceOnUse', x:0, y:0, width:box.width, height:box.height});
    mask.append(svgElement('rect', {x:0,y:0,width:box.width,height:box.height,fill:'#fff'}));
    for (const rect of cards.values()) {
      mask.append(svgElement('rect', {x:rect.left-2,y:rect.top-2,width:rect.width+4,height:rect.height+4,rx:8,fill:'#000'}));
    }
    defs.append(mask);
    const stems = svgElement('g', {mask:'url(#'+maskId+')'});
    svg.append(defs, stems);
    const nextKeys = new Set();
    const incoming = new Map();
    for (const edge of graph.links) incoming.set(edge.to, (incoming.get(edge.to)||0)+1);

    // One continuous stem supplies the short branches above the existing rows.
    for (const root of paintedRoots) {
      const id = root.dataset.rootToggle;
      const links = graph.links.filter(edge => edge.from === id && cards.has(edge.to));
      if (!links.length) continue;
      const from = relative(root), startY = from.bottom+4, startX = center(from);
      const left = id === ROOTS[0], lane = outside(left, 18);
      const rows = new Map();
      for (const edge of links) {
        const rect = cards.get(edge.to), y = rect.top - 8;
        if (!rows.has(y)) rows.set(y, []);
        rows.get(y).push({edge, rect});
      }
      const first = Math.min(...rows.keys());
      const elbow = Math.min(first-4, startY+62);
      paintStem(stems, id, coordinates('M',startX,startY,'C',startX,startY+24,lane,elbow-25,lane,elbow,'V',Math.max(...rows.keys())), {}, nextKeys);
      for (const [y, row] of rows) {
        const turns = row.map(({rect}) => center(rect)+(left ? -7 : 7));
        const end = left ? Math.max(...turns) : Math.min(...turns);
        paintStem(stems, id+':row:'+row[0].edge.to, coordinates('M',lane,y,'H',end), {twig:true}, nextKeys);
        row.forEach(({edge, rect}, index) => {
          const x = center(rect);
          paintStem(stems, id+':'+edge.to, coordinates('M',turns[index],y,'Q',x,y,x,rect.top-3), {twig:true}, nextKeys);
        });
      }
    }

    const supportSources = [...new Set(graph.links.filter(({from, to}) =>
      cards.has(to) && catalogue.nodes.get(from).kind === 'synergy'
    ).map(link => link.from))];
    for (const {from:source, to:target} of graph.links) {
      const from = cards.get(source), to = cards.get(target);
      if (!from || !to) continue;
      const down = centerY(from) <= centerY(to), direction = down ? 1 : -1;
      const dynasty = catalogue.nodes.get(source).kind === 'dynasty';
      const shared = incoming.get(target) > 1;
      const sx = center(from), sy = down ? from.bottom+4 : from.top-4;
      const ex = center(to) + (shared ? (dynasty ? -10 : 10) : 0);
      const ey = down ? to.top-4 : to.bottom+4;
      const middle = (sy+ey)/2;
      const blocked = [...cards].some(([id,rect]) => id !== source && id !== target &&
        rect.bottom > Math.min(sy,ey) && rect.top < Math.max(sy,ey) &&
        rect.right > Math.min(sx,ex)-6 && rect.left < Math.max(sx,ex)+6);
      let route = coordinates('M',sx,sy,'C',sx,middle,ex,middle,ex,ey);
      if (blocked) {
        const spacing = dynasty ? 8 : 4 + 10*supportSources.indexOf(source)/Math.max(supportSources.length-1, 1);
        const lane = outside(dynasty, spacing);
        const bend = lane + (dynasty ? 9 : -9);
        const gap = Math.min(25, Math.abs(ey-sy)/4);
        const leave = sy+direction*gap, arrive = ey-direction*gap;
        route = coordinates('M',sx,sy,'C',sx,leave,bend,sy+direction*5,lane,leave,
          'V',arrive,'C',bend,ey-direction*5,ex,arrive,ex,ey);
      }
      paintStem(stems, source+':'+target, route, {shared, highlighted:source===highlighted}, nextKeys);
    }
    drawnKeys = nextKeys; animateNext = false;
  }

  function centerY(rect) {return (rect.top+rect.bottom)/2;}
  function scheduleDraw() {if (!frame) frame = requestAnimationFrame(draw);}
  async function toggle(id, fromPainting = false) {
    explorer.hidden = false; explorer.setAttribute('aria-busy','true'); status.textContent = catalogue ? '' : 'Verbindungen werden geladen …'; fallback.hidden = true;
    try {
      await loadCatalogue(); if (!catalogue.nodes.has(id)) return;
      if (opened.has(id)) {
        opened.delete(id);
        if (highlighted === id) highlighted = null;
      } else {
        opened.add(id);
        if (!ROOTS.includes(id)) highlighted = id;
      }
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
  explorer.addEventListener('click', event => {
    const close = event.target.closest('[data-connection-close]');
    if (close) { toggle(close.dataset.connectionClose); return; }
    const control = event.target.closest('[data-connection-toggle]');
    if (!control || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const id = control.dataset.connectionToggle;
    if (control.matches('a') && (opened.has(id) || event.detail > 1)) return;
    event.preventDefault();
    toggle(id);
  });
  pause.addEventListener('click',() => {
    paused = !paused; pause.setAttribute('aria-pressed',String(paused));
    const label = paused ? 'Bewegung einschalten' : 'Bewegung pausieren'; pause.setAttribute('aria-label',label); pause.title = label;
    if (paused) world.getAnimations({subtree:true}).forEach(animation => animation.finish());
  });
  new ResizeObserver(() => {const box = world.getBoundingClientRect(); if (box.width + ':' + box.height !== lastSize) scheduleDraw();}).observe(world);
  async function followHash() {
    const hash = location.hash.slice(1);
    if (!hash) return;
    let id = hash === 'dynastien' ? ROOTS[0] : hash === 'synergien' ? ROOTS[1] : hash === 'rubybubys' ? 'DYN-RUBYBUBYS' : null;
    if (!id) {
      if (!/^[a-z0-9-]+$/.test(hash)) return;
      try {
        const current = await loadCatalogue();
        if (location.hash.slice(1) !== hash) return;
        id = [...current.nodes.values()].find(node => node.kind === 'synergy' && node.public_path.split('/').filter(Boolean).pop() === hash)?.id;
      } catch (_) { return; }
    }
    if (!id) return;
    if (id === 'DYN-RUBYBUBYS') opened.add(ROOTS[0]);
    if (id.startsWith('SYN-')) opened.add(ROOTS[1]);
    if (!opened.has(id)) toggle(id,true);
  }
  window.addEventListener('hashchange',followHash); followHash();
})();
