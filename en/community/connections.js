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
    // A service already revealed by its dynasty can connect to any visible supporting synergy.
    const kind = id => catalogue.nodes.get(id).kind;
    const services = new Set(links.filter(({from, to}) => kind(from) === 'dynasty' && kind(to) === 'service').map(link => link.to));
    const drawn = new Set(links);
    for (const edge of catalogue.links) {
      if (!drawn.has(edge) && depths.has(edge.from) && kind(edge.from) === 'synergy' && services.has(edge.to)) links.push(edge);
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
  const compact = matchMedia('(max-width:850px)');
  const paintedRoots = [...world.querySelectorAll('[data-root-toggle]')];
  const nodeElements = new Map();
  let catalogue = null, loading = null, opened = new Set(), graph = null, parents = new Map(), paused = false;
  let highlighted = null;
  let drawnKeys = new Set(), frame = 0, lastSize = '', animateNext = false;
  const canMove = () => !paused && !media.matches && !document.hidden;
  const localPath = path => document.documentElement.lang === 'en' ? '/en' + path : path;
  const motifs = {'DYN-RUBYBUBYS':0,'SYN-ALTERNATIVE':1,'PLACE-THREEDEN':2,'SERVICE-RUBYBUBYS-OBDACHLOSENHILFE':3,'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE':4};
  const plates = {
    'SYN-STREBER':'streber', 'SYN-ZOCKER':'zocker', 'SYN-MEDITANTEN':'meditanten', 'SYN-MACHER':'macher',
    'SYN-MODERNE':'moderne', 'SYN-CONNAISSEURS':'connaisseurs', 'SYN-PROMILLANTEN':'promillanten',
    'SYN-NERDS':'nerds', 'SYN-VISIONAERE':'visionaere', 'SYN-HOOLIGANS':'hooligans', 'SYN-KUENSTLER':'kuenstler',
    'SYN-HEXEN':'hexen', 'SYN-AKTIVE':'aktive', 'SYN-SCHNAUZIS':'schnauzis', 'SYN-STREUNER':'streuner'
  };
  function syncRoots() {
    paintedRoots.forEach(button => {
      const on = opened.has(button.dataset.rootToggle);
      button.setAttribute('aria-expanded', String(on));
      button.querySelector('[data-root-action]').textContent = on ? "Close" : "Open";
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
    const plate = plates[node.id];
    if (plate) art.style.backgroundImage = 'url(/assets/community/schilder/' + plate + '.webp)';
    else {
      const motif = motifs[node.id] ?? 5;
      art.style.backgroundPosition = (motif % 3 * 50) + '% ' + (Math.floor(motif / 3) * 100) + '%';
    }
    const copy = document.createElement('span'); copy.className = 'connection-node-copy';
    const name = document.createElement('span'); name.className = 'connection-node-name';
    name.textContent = node.name.replace(/^Obdachlosenhilfe$/, 'Obdachlosen\u00adhilfe');
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
    const incoming = new Map();
    parents = new Map();
    for (const {from, to} of graph.links) {
      incoming.set(to, (incoming.get(to)||0)+1);
      const provider = catalogue.nodes.get(from).kind === 'dynasty' && catalogue.nodes.get(to).kind === 'service';
      if (provider || !parents.has(to)) parents.set(to,from);
    }
    const floating = graph.nodes.filter(node => {
      const parent = catalogue.nodes.get(parents.get(node.id));
      return (node.kind === 'place' || node.kind === 'service') && parent?.kind === 'dynasty';
    });
    const floatingIds = new Set(floating.map(node => node.id));
    const children = new Map();
    for (const [child, parent] of parents) {
      if (floatingIds.has(child)) continue;
      if (!children.has(parent)) children.set(parent, []);
      children.get(parent).push(child);
    }
    layers.replaceChildren();
    nodeElements.clear();
    for (const node of graph.nodes.filter(item => item.depth > 0)) {
      const element = document.createElement('article');
      element.className = 'connection-node';
      element.dataset.connectionNode = node.id;
      if (floatingIds.has(node.id)) element.classList.add('connection-bubble');
      if (plates[node.id]) element.dataset.plate = plates[node.id];
      else element.dataset.motif = String(motifs[node.id] ?? 5);
      if ((incoming.get(node.id)||0) > 1) element.classList.add('is-shared');
      const expandable = catalogue.links.some(edge => edge.from === node.id);
      if (expandable) element.classList.add('is-expandable');
      const control = nodeControl(node, expandable, previous.get(node.id)?.firstElementChild);
      const isOpen = expandable && opened.has(node.id);
      const goesToPage = node.public_path && (!expandable || isOpen);
      control.querySelector('[data-node-action]').textContent = goesToPage ? "Open page" : isOpen ? "Close" : expandable ? "Show connections" : '';
      control.querySelector('.connection-node-symbol').textContent = goesToPage ? '↗' : isOpen ? '−' : expandable ? '+' : '';
      if (expandable) control.setAttribute('aria-expanded', String(isOpen));
      element.classList.toggle('is-active-branch', isOpen && highlighted === node.id);
      element.append(control);
      if (isOpen && node.public_path) {
        const close = document.createElement('button');
        close.type = 'button';
        close.className = 'connection-branch-close';
        close.dataset.connectionClose = node.id;
        close.setAttribute('aria-label', node.name + ' – ' + "Hide connections");
        close.textContent = '−';
        element.append(close);
      }
      nodeElements.set(node.id, element);
    }
    const rootBranches = ROOTS.filter(id => children.has(id));
    layers.classList.toggle('is-two-branches', rootBranches.length === 2);
    layers.classList.toggle('has-clearing', floating.length > 0);
    const placed = new Set();
    function placeRows(parent, ids, columns) {
      for (let index = 0; index < ids.length; index += columns) {
        const items = ids.slice(index,index+columns).filter(id => !placed.has(id));
        if (!items.length) continue;
        const row = document.createElement('div');
        row.className = 'connection-tree-row';
        row.classList.toggle('is-single', items.length === 1);
        row.style.setProperty('--columns',String(columns));
        for (const id of items) {
          placed.add(id);
          row.append(nodeElements.get(id));
        }
        parent.append(row);
        for (const id of items) {
          const descendants = children.get(id) ?? [];
          if (!descendants.length) continue;
          const offshoot = document.createElement('div');
          offshoot.className = 'connection-offshoot';
          offshoot.dataset.parent = id;
          parent.append(offshoot);
          const places = descendants.filter(child => catalogue.nodes.get(child).kind === 'place');
          if (compact.matches && places.length && descendants.length > 2) {
            placeRows(offshoot,places,2);
            placeRows(offshoot,descendants.filter(child => !places.includes(child)),2);
          } else placeRows(offshoot,descendants,compact.matches ? 2 : 3);
        }
      }
    }
    for (const root of [ROOTS[0], 'clearing', ROOTS[1]]) {
      if (root === 'clearing') {
        if (!floating.length) continue;
        const field = document.createElement('section');
        field.className = 'connection-clearing';
        field.setAttribute('aria-label',"Places and services");
        const drift = document.createElement('div');
        drift.className = 'connection-bubbles';
        drift.classList.toggle('is-one-bubble',floating.length === 1);
        for (const {id} of floating) drift.append(nodeElements.get(id));
        field.append(drift);
        layers.append(field);
        continue;
      }
      if (!rootBranches.includes(root)) continue;
      const branch = document.createElement('section');
      branch.className = 'connection-branch';
      branch.dataset.branch = root;
      const title = document.createElement('h3');
      title.className = 'connection-branch-title';
      title.id = 'connection-title-' + root;
      title.textContent = catalogue.nodes.get(root).name;
      branch.setAttribute('aria-labelledby',title.id);
      branch.append(title);
      layers.append(branch);
      const columns = root === ROOTS[0] ? 1 : compact.matches ? 2 : rootBranches.length === 2 ? 3 : 4;
      placeRows(branch,children.get(root),columns);
    }
    status.classList.remove('connection-error'); status.textContent = ''; syncRoots(); animateNext = !!trigger; scheduleDraw();
    if (focused && nodeElements.has(focused)) nodeElements.get(focused).querySelector('button,a').focus({preventScroll:true});
    if (trigger && canMove()) {
      for (const [id, element] of nodeElements) {
        if (!previous.has(id)) element.animate([{opacity:0,filter:'blur(8px)'},{opacity:1,filter:'blur(0)'}], {duration:420, easing:'ease-out'});
      }
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
    if (style.trunk) group.classList.add('is-tree-trunk');
    if (style.cross) group.classList.add('is-cross-link');
    if (style.clearing) group.classList.add('is-clearing-branch');
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
    // Mask the painted objects and their labels even at intermediate widths.
    const maskId = 'community-clear-illustrations';
    const defs = svgElement('defs', {});
    const mask = svgElement('mask', {id:maskId, maskUnits:'userSpaceOnUse', x:0, y:0, width:box.width, height:box.height});
    mask.append(svgElement('rect', {x:0,y:0,width:box.width,height:box.height,fill:'#fff'}));
    for (const rect of cards.values()) {
      mask.append(svgElement('rect', {x:rect.left-2,y:rect.top-2,width:rect.width+4,height:rect.height+4,rx:8,fill:'#000'}));
    }
    for (const title of layers.querySelectorAll('.connection-branch-title')) {
      const range = document.createRange();
      range.selectNodeContents(title);
      const rect = range.getBoundingClientRect();
      mask.append(svgElement('rect', {x:rect.left-box.left-4,y:rect.top-box.top-3,
        width:rect.width+8,height:rect.height+6,rx:5,fill:'#000'}));
    }
    defs.append(mask);
    const stems = svgElement('g', {mask:'url(#'+maskId+')'});
    svg.append(defs, stems);
    const nextKeys = new Set();
    const incoming = new Map();
    for (const edge of graph.links) incoming.set(edge.to, (incoming.get(edge.to)||0)+1);

    const branchElements = [...layers.querySelectorAll('[data-branch]')];
    const clearingElement = layers.querySelector('.connection-clearing');
    const clearing = clearingElement ? relative(clearingElement) : null;
    const midX = box.width/2;
    const mobile = compact.matches;
    function paintTrunk(xAt, top, end, key, rootFeet) {
      if (end <= top) return;
      const path = ['M',xAt(top),top];
      for (let y=top; y<end;) {
        const next = Math.min(y+95,end), middle = (y+next)/2;
        path.push('Q',xAt(middle),middle,xAt(next),next);
        y = next;
      }
      paintStem(stems,key,coordinates(...path),{trunk:true},nextKeys);
      if (rootFeet) {
        const x = xAt(end);
        paintStem(stems,key+':roots',coordinates('M',x,end-9,'C',x-3,end+3,x-10,end+4,x-17,end+9,
          'M',x,end-9,'C',x+2,end-1,x+7,end+1,x+12,end+5),{twig:true},nextKeys);
      }
    }

    for (const branch of branchElements) {
      const id = branch.dataset.branch;
      const area = relative(branch);
      const family = id === ROOTS[0];
      const title = relative(branch.querySelector('.connection-branch-title'));
      const startY = title.bottom+10;
      const firstId = graph.links.find(edge => edge.from === id)?.to;
      const firstCard = cards.get(firstId);
      if (!firstCard) continue;
      const members = [...branch.querySelectorAll('[data-connection-node]')].map(el => cards.get(el.dataset.connectionNode));
      const end = Math.max(...members.map(rect => rect.bottom)) - (family ? 12 : 20);
      const baseX = family ? center(firstCard) : mobile ? midX : area.left-16;
      const localX = y => baseX + Math.sin((y-startY)/122)*4;
      const stop = mobile && family && members.length === 1 ? firstCard.top-4 : end;
      paintTrunk(localX,startY,stop,id+':trunk',!mobile || !family);

      for (const {to:idTo} of graph.links.filter(edge => edge.from === id)) {
        const to = cards.get(idTo);
        if (!to) continue;
        const y = centerY(to), cardX = center(to);
        if (mobile && family && members.length === 1) continue;
        let route;
        if (mobile && Math.abs(cardX-baseX)>18) {
          const tip = cardX < baseX ? to.right+2 : to.left-2;
          route = coordinates('M',localX(y+17),y+17,'C',localX(y+17),y-4,tip+(baseX-tip)*.24,y+5,tip,y);
        } else {
          const neck = Math.max(startY,to.top-16), endY = to.top-3;
          route = coordinates('M',localX(neck),neck,'C',localX(neck),neck-4,cardX,neck-6,cardX,endY);
        }
        paintStem(stems,id+':'+idTo,route,{twig:true},nextKeys);
      }
    }

    const rightBranch = branchElements.find(element => element.dataset.branch === ROOTS[1]);
    const crossings = graph.links.filter(({from,to}) =>
      catalogue.nodes.get(from).kind === 'synergy' && nodeElements.get(to)?.classList.contains('connection-bubble'));
    const crossingWidth = clearing && rightBranch ? Math.max(4,relative(rightBranch).left-clearing.right-24) : 8;
    for (const edge of graph.links) {
      const {from:source,to:target} = edge;
      const a = cards.get(source), b = cards.get(target);
      if (!a || !b) continue;
      const shared = incoming.get(target)>1;
      const cross = parents.get(target)!==source;
      const inClearing = !!clearing && nodeElements.get(target).classList.contains('connection-bubble');
      const ax = center(a), bx = center(b);
      let route;
      if (inClearing && !mobile) {
        const left = ax < clearing.left;
        const ex = left ? b.left-4 : b.right+4;
        const ey = centerY(b)+(left ? 7 : -7);
        const spread = crossingWidth * (crossings.indexOf(edge)+1) / (crossings.length+1);
        const entry = left ? clearing.left-12 : clearing.right+6+spread;
        if (left) {
          const start = a.right+5, y = centerY(a)+16;
          route = coordinates('M',start,y,'C',entry,y,entry,ey,ex,ey);
        } else {
          const y1 = a.top-5, bend = y1-17, middleY = (ey+y1)/2;
          route = coordinates('M',ax,y1,'C',ax,bend,entry,bend,entry,middleY,'C',entry,ey,entry,ey,ex,ey);
        }
      } else if (inClearing) {
        const downward = centerY(a) < centerY(b);
        const start = downward ? a.bottom+5 : a.top-5;
        const end = downward ? b.top-4 : b.bottom+4;
        const endX = bx+(cross ? (bx<midX ? -10 : 10) : (bx<midX ? 6 : -6));
        const leaves = (start+end)/2;
        const shift = cross ? 0 : (bx<midX ? -9 : 9);
        const arc = ax*.74+endX*.26+shift;
        route = coordinates('M',ax,start,'C',ax,leaves,arc,leaves,arc,leaves,
          'C',arc,leaves,endX,leaves,endX,end);
      } else {
        const y1 = a.bottom+4, y2 = b.top-4, half = (y1+y2)/2;
        route = coordinates('M',ax,y1,'C',ax,half,bx,half,bx,y2);
      }
      paintStem(stems,source+':'+target,route,{shared,cross,clearing:inClearing&&!cross,highlighted:source===highlighted},nextKeys);
    }
    drawnKeys = nextKeys; animateNext = false;
  }

  function centerY(rect) {return (rect.top+rect.bottom)/2;}
  function scheduleDraw() {if (!frame) frame = requestAnimationFrame(draw);}
  async function toggle(id, fromPainting = false) {
    explorer.hidden = false; explorer.setAttribute('aria-busy','true'); status.textContent = catalogue ? '' : "Loading connections …"; fallback.hidden = true;
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
      if (opened.has(id)) {
        const targetId = graph.links.find(edge => edge.from === id)?.to;
        const target = nodeElements.get(targetId);
        const revealedHere = parents.get(targetId) === id;
        if (target && (fromPainting || revealedHere) && target.getBoundingClientRect().bottom > innerHeight - 30) {
          target.scrollIntoView({block:fromPainting ? 'center' : 'nearest',behavior:canMove()?'smooth':'auto'});
        }
      }
    } catch (_) {status.classList.add('connection-error'); status.textContent = "The connections could not be loaded right now. You can open the pages directly."; fallback.hidden = false;}
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
    const label = paused ? "Enable movement" : "Pause movement"; pause.setAttribute('aria-label',label); pause.title = label;
    if (paused) world.getAnimations({subtree:true}).forEach(animation => animation.finish());
  });
  new ResizeObserver(() => {const box = world.getBoundingClientRect(); if (box.width + ':' + box.height !== lastSize) scheduleDraw();}).observe(world);
  compact.addEventListener('change', () => {if (catalogue) render();});
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
