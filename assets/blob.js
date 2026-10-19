(function () {
  function ready(fn) { document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    const cfg = window.BLOB_CONFIG || {};
    const pageMode = document.body.dataset.blobMode || cfg.mode || 'guide';
    const root = cfg.root || './';
    const links = Object.assign({
      home: root,
      community: root + 'community/',
      services: root + 'leistungen/',
      system: root + 'system/'
    }, cfg.links || {});

    const character = document.createElement('button');
    character.id = 'blob-character';
    character.type = 'button';
    character.setAttribute('aria-label', 'Blob öffnen');
    character.setAttribute('aria-expanded', 'false');
    character.innerHTML = '<div class="blob-face"><div class="blob-eyes"><div class="blob-eye"></div><div class="blob-eye"></div></div><div class="blob-mouth"></div></div>';

    const chat = document.createElement('aside');
    chat.id = 'blob-chat';
    character.setAttribute('aria-controls', chat.id);
    chat.setAttribute('aria-label', 'Blob-Navigation');
    chat.innerHTML = `<p id="blob-line">Ich sortiere Möglichkeiten. Menschen sortiere ich nicht.</p>
      <div id="blob-meta">Modus: ${pageMode}</div>
      <div class="blob-chat-actions" id="blob-actions">
        ${cfg.actionTarget ? `<button id="blob-action" type="button">${cfg.actionLabel || 'Hier helfen'}</button>` : ''}
        <button id="blob-next" type="button">Weiter</button>
        <a class="secondary" href="${links.home}">Start</a>
        <a class="secondary" href="${links.community}">Community</a>
        <a class="secondary" href="${links.services}">Leistungen</a>
        <a class="secondary" href="${links.system}">FFE-System</a>
        <a class="secondary" id="blob-feedback" href="${root}tickets/">Problem, Idee oder Wunsch</a>
        <button id="blob-name" class="secondary" type="button">Name</button>
        <button id="blob-close" class="secondary" type="button">Ruhe</button>
      </div>`;
    document.body.append(character, chat);
    // Send only the public path as context, never account query strings or fragments.
    document.getElementById('blob-feedback').href = root + 'tickets/?seite=' + encodeURIComponent(location.pathname);

    const line = document.getElementById('blob-line');
    const meta = document.getElementById('blob-meta');
    // Only three known public destinations; no URLs, names or clickstream are saved.
    const shortcutKey = 'gemden_blob_paths_v1';
    const destinations = {
      walks: { label: 'Meine Gassitreffpunkte', href: root + 'treffpunkte/?leistung=SERVICE-RUBYBUBYS-HERZ-SCHNAUZE' },
      places: { label: 'Treffpunkte entdecken', href: root + 'treffpunkte/' },
      herz: { label: 'Herz und Schnauze', href: root + 'leistungen/rubybubys-herz-und-schnauze/' }
    };
    function shortcutState() {
      let raw; try { raw = JSON.parse(localStorage.getItem(shortcutKey) || '{}'); } catch { raw = {}; }
      const clean = {};
      for (const key of Object.keys(destinations)) {
        const item = raw?.[key];
        clean[key] = { count: Math.max(0, Math.min(100, Number(item?.count) || 0)), last: Number.isFinite(item?.last) ? item.last : 0, pinned: item?.pinned === true, hidden: item?.hidden === true };
      }
      return clean;
    }
    function persistPaths(paths) { try { localStorage.setItem(shortcutKey, JSON.stringify(paths)); } catch {} }
    function shortcutsEnabled() { try { return localStorage.getItem('gemden_blob_shortcuts_enabled') !== 'false'; } catch { return true; } }
    const shortcuts = document.createElement('div');
    shortcuts.id = 'blob-shortcuts';
    shortcuts.setAttribute('aria-label', 'Deine Schnellwege');
    document.getElementById('blob-actions').before(shortcuts);
    function renderShortcuts() {
      shortcuts.replaceChildren();
      if (!shortcutsEnabled()) return;
      const paths = shortcutState();
      const keys = Object.keys(paths).filter(key => !paths[key].hidden && (paths[key].count > 0 || paths[key].pinned))
        .sort((a,b) => Number(paths[b].pinned) - Number(paths[a].pinned) || paths[b].count - paths[a].count || paths[b].last - paths[a].last).slice(0, 2);
      if (!keys.length) {
        if (Object.values(paths).some(item => item.hidden)) {
          const reset = document.createElement('button'); reset.type = 'button'; reset.className = 'blob-shortcut-reset'; reset.textContent = 'Schnellwege zurücksetzen';
          reset.addEventListener('click', () => { persistPaths({}); renderShortcuts(); }); shortcuts.append(reset);
        }
        return;
      }
      const title = document.createElement('p'); title.textContent = 'Deine Wege auf diesem Gerät'; shortcuts.append(title);
      for (const key of keys) {
        const row = document.createElement('div'); row.className = 'blob-shortcut-row';
        const link = document.createElement('a'); link.href = destinations[key].href; link.textContent = destinations[key].label;
        const pin = document.createElement('button'); pin.type = 'button'; pin.textContent = paths[key].pinned ? '★' : '☆'; pin.setAttribute('aria-label', destinations[key].label + ': ' + (paths[key].pinned ? 'lösen' : 'anheften'));
        pin.addEventListener('click', () => { paths[key].pinned = !paths[key].pinned; persistPaths(paths); renderShortcuts(); });
        const hide = document.createElement('button'); hide.type = 'button'; hide.textContent = '×'; hide.setAttribute('aria-label', destinations[key].label + ': ausblenden');
        hide.addEventListener('click', () => { paths[key].hidden = true; persistPaths(paths); renderShortcuts(); });
        row.append(link, pin, hide); shortcuts.append(row);
      }
      const reset = document.createElement('button'); reset.type = 'button'; reset.className = 'blob-shortcut-reset'; reset.textContent = 'Vorschläge zurücksetzen';
      reset.addEventListener('click', () => { persistPaths({}); renderShortcuts(); }); shortcuts.append(reset);
    }
    if (shortcutsEnabled()) {
      const path = location.pathname.replace(/index\.html$/, '');
      const key = path.endsWith('/treffpunkte/') ? (new URLSearchParams(location.search).get('leistung') === 'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE' ? 'walks' : 'places') : path.endsWith('/leistungen/rubybubys-herz-und-schnauze/') ? 'herz' : null;
      if (key) { const paths = shortcutState(); paths[key].count = Math.min(100, paths[key].count + 1); paths[key].last = Date.now(); persistPaths(paths); }
    }
    renderShortcuts();
    window.addEventListener('blob:shortcuts-changed', renderShortcuts);
    const emptyState = { name: '', visits: 0, x: null, y: null };
    let state;
    try {
      const stored = JSON.parse(localStorage.getItem('gemden_blob_v3') || 'null');
      state = stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : emptyState;
    } catch (error) {
      state = emptyState;
    }
    state = {
      name: typeof state.name === 'string' ? state.name.slice(0, 40) : '',
      visits: Number.isFinite(state.visits) ? state.visits : 0,
      x: Number.isFinite(state.x) ? state.x : null,
      y: Number.isFinite(state.y) ? state.y : null
    };
    state.visits += 1;
    save();

    function save() {
      try { localStorage.setItem('gemden_blob_v3', JSON.stringify(state)); }
      catch (error) { return false; }
      return true;
    }
    function say(text, label, open = false) {
      line.textContent = text;
      meta.textContent = label || `Modus: ${pageMode}`;
      if (open) {
        chat.classList.add('open');
        character.setAttribute('aria-expanded', 'true');
      }
    }
    function close(returnFocus = true) {
      chat.classList.remove('open');
      character.setAttribute('aria-expanded', 'false');
      if (returnFocus) character.focus({ preventScroll: true });
    }
    function emote() {
      character.classList.add('excited');
      setTimeout(() => character.classList.remove('excited'), 620);
    }
    function setMode(mode) {
      character.classList.remove('mode-sales', 'mode-social', 'wiggle-sales');
      if (mode === 'sales') character.classList.add('mode-sales', 'wiggle-sales');
      if (mode === 'social') character.classList.add('mode-social');
    }
    function named(prefix) { return state.name ? `${state.name}: ${prefix}` : prefix; }

    const lines = {
      guide: [
        'Ich bin Blob: Wegweiser, Spielzeug und professionell unqualifiziert für Alleinherrschaft.',
        'Institution, Situation, Profil, Werkzeug, Evidenz. Fünf Schritte. Kein Orakelnebel.',
        'Wenn etwas politisch offen ist, bleibt es offen. Ich kann mit der Unsicherheit leben. Meistens.',
        'Teil IV ist Archiv. Ich krame darin nur, wenn du ausdrücklich Geschichte suchst.'
      ],
      social: [
        'Gemeinschaft ist, wenn man nicht alles alleine tragen muss — und trotzdem Nein sagen darf.',
        'Kieze sind Orte. Dynastien sind Verbindungen. Menschen dürfen mehreren davon angehören.',
        'Öffentliche Termine: gern. Private Wohnungsdetails: lieber hinter ein vernünftiges Konto.',
        'Ich helfe beim Verbinden. Über Menschen verfügen darf ich nicht. Ehrlich gesagt weniger Arbeit für mich.'
      ],
      sales: [
        'Sag mir nicht nur deinen Wunsch. Sag mir auch Ort, Grenze und gewünschtes Ergebnis. Romantik!',
        'Ich verkaufe keine Rangliste. Ich zerlege Aufgaben in Fähigkeiten und erkläre die Passung.',
        'Smart Home? Früher hatten Menschen Lichtschalter. Die waren erstaunlich ausfallsicher.',
        'Kein Match? Dann erfinde ich keine Person. Wir machen lieber eine Chance oder einen Lernweg sichtbar.'
      ]
    };
    function nextLine() {
      const pool = lines[pageMode] || lines.guide;
      say(named(pool[Math.floor(Math.random() * pool.length)]), `Blob · ${pageMode}`, true);
      emote();
    }

    function rename() {
      const name = prompt('Wie soll Blob auf diesem Gerät heißen?', state.name || '');
      if (name === null) return;
      state.name = name.trim().slice(0, 40);
      save();
      say(state.name ? `Gut. Auf diesem Gerät heiße ich jetzt ${state.name}. Lokal gespeichert, politisch bedeutungslos.` : 'Wieder namenlos. Minimalistisch.', 'Name nur auf diesem Gerät');
    }

    function activateContext() {
      const target = document.querySelector(cfg.actionTarget);
      if (!target) return;
      let chapter = target.closest('details');
      while (chapter) { chapter.open = true; chapter = chapter.parentElement?.closest('details'); }
      if (target.matches('[data-panel]') && target.hidden) {
        document.querySelector(`[data-section="${target.id}"]`)?.click();
      }
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const field = target.matches('input, textarea, select, button') ? target : target.querySelector('input, textarea, select, button');
        field?.focus({ preventScroll: true });
      }, 450);
      say(named('Hier geht es weiter. Ich zeige den Weg; du entscheidest und sendest.'), 'Blob · Seitenhilfe');
      close(false);
    }

    let dragging = false;
    let moved = false;
    let offsetX = 0;
    let offsetY = 0;
    function setPosition(x, y, persist = true) {
      if (window.matchMedia('(max-width: 760px)').matches) return;
      const safeX = Math.max(4, Math.min(window.innerWidth - character.offsetWidth - 4, x));
      const safeY = Math.max(4, Math.min(window.innerHeight - character.offsetHeight - 4, y));
      character.style.left = safeX + 'px';
      character.style.top = safeY + 'px';
      character.style.right = 'auto';
      character.style.bottom = 'auto';
      character.classList.add('blob-positioned');
      if (persist) { state.x = safeX; state.y = safeY; save(); }
    }
    if (Number.isFinite(state.x) && Number.isFinite(state.y)) setTimeout(() => setPosition(state.x, state.y, false), 80);
    character.addEventListener('pointerdown', event => {
      if (window.matchMedia('(max-width: 760px)').matches) return;
      dragging = true; moved = false;
      character.setPointerCapture(event.pointerId);
      character.classList.add('dragging');
      const rect = character.getBoundingClientRect();
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;
    });
    character.addEventListener('pointermove', event => {
      if (!dragging) return;
      if (Math.abs(event.movementX) + Math.abs(event.movementY) > 2) moved = true;
      setPosition(event.clientX - offsetX, event.clientY - offsetY);
    });
    character.addEventListener('pointerup', event => {
      dragging = false;
      character.classList.remove('dragging');
      try { character.releasePointerCapture(event.pointerId); } catch (error) {}
      if (moved && pageMode === 'sales') say(named('Danke fürs Herumziehen. Würdelos, aber dynamisch.'), 'Blob · elastisch');
    });
    character.addEventListener('click', () => {
      if (moved) { moved = false; return; }
      const open = chat.classList.toggle('open');
      character.setAttribute('aria-expanded', String(open));
    });
    window.addEventListener('resize', () => {
      if (Number.isFinite(state.x) && Number.isFinite(state.y)) setPosition(state.x, state.y);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && chat.classList.contains('open')) close();
    });
    document.addEventListener('pointerdown', event => {
      if (chat.classList.contains('open') && !chat.contains(event.target) && !character.contains(event.target)) close(false);
    });

    document.getElementById('blob-close').addEventListener('click', close);
    document.getElementById('blob-name').addEventListener('click', rename);
    document.getElementById('blob-next').addEventListener('click', nextLine);
    document.getElementById('blob-action')?.addEventListener('click', activateContext);
    window.addEventListener('blob:say', event => {
      if (!event.detail?.text) return;
      say(named(event.detail.text), event.detail.meta);
      emote();
    });
    setInterval(() => {
      character.classList.add('blink');
      setTimeout(() => character.classList.remove('blink'), 150);
    }, 3900);

    setMode(pageMode);
  });
})();
