(function () {
  function ready(fn) { document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    const cfg = window.BLOB_CONFIG || {};
    const pageMode = document.body.dataset.blobMode || cfg.mode || 'guide';
    const root = cfg.root || './';
    function internalHref(value) {
      if (typeof value !== 'string') return null;
      try { const url = new URL(value, location.href); return url.origin === location.origin ? url.href : null; }
      catch (error) { return null; }
    }
    const actionHref = internalHref(cfg.actionHref);
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
      <details class="blob-other-ways"><summary>Weitere Wege & Blob</summary><div class="blob-chat-actions" id="blob-actions">
        ${actionHref ? `<a id="blob-action-link" href="${actionHref}">${cfg.actionLabel || 'Hier helfen'}</a>` : cfg.actionTarget ? `<button id="blob-action" type="button">${cfg.actionLabel || 'Hier helfen'}</button>` : ''}
        <button id="blob-next" type="button">Weiter</button>
        <a class="secondary" href="${links.home}">Start</a>
        <a class="secondary" href="${links.community}">Community</a>
        <a class="secondary" href="${links.services}">Leistungen</a>
        <a class="secondary" href="${root}leistungen/rubybubys-herz-und-schnauze/lernen/">Lernhaus</a>
        <a class="secondary" href="${links.system}">FFE-System</a>
        <a class="secondary" href="${root}hilfe/">Hilfe & Stand</a>
        <a class="secondary" id="blob-feedback" href="${root}tickets/">Ticket schreiben</a>
        <a class="secondary" href="${root}tickets/#ticket-list-title">Meine Tickets</a>
        <button id="blob-name" class="secondary" type="button">Name</button>
        <button id="blob-close" class="secondary" type="button">Ruhe</button>
      </div></details>`;
    document.body.append(character, chat);
    // Send only the public path as context, never account query strings or fragments.
    document.getElementById('blob-feedback').href = /\/tickets\/(?:index\.html)?$/.test(location.pathname) ? '#new-ticket-title' : root + 'tickets/?seite=' + encodeURIComponent(location.pathname) + '#new-ticket-title';

    const line = document.getElementById('blob-line');
    const meta = document.getElementById('blob-meta');
    // Suggestions and account libraries are loaded only after opening Blob.
    let suggestionsLoading = null;
    let knowledgeLoading = null;
    function loadKnowledge() {
      if (knowledgeLoading) return;
      knowledgeLoading = new Promise((resolve, reject) => {
        const css = document.createElement('link');
        css.rel = 'stylesheet'; css.href = root + 'assets/blob-knowledge.css?v=20261026-1';
        document.head.append(css);
        const script = document.createElement('script');
        script.src = root + 'assets/blob-knowledge.js?v=20261026-1';
        script.onload = () => { window.GemDenBlobKnowledge.mount({root,chat}); resolve(); };
        script.onerror = () => { script.remove(); css.remove(); reject(new Error('knowledge')); };
        document.head.append(script);
      }).catch(() => { knowledgeLoading = null; say('Die Themensuche konnte gerade nicht geladen werden. Unter „Weitere Wege“ findest du das Lernhaus.', 'Blob · Seitenhilfe'); });
    }
    function visibilityChanged(open) {
      window.dispatchEvent(new CustomEvent('blob:visibility', {detail:{open}}));
      if (open) loadKnowledge();
      if (!open || suggestionsLoading) return;
      suggestionsLoading = new Promise((resolve, reject) => {
        const css = document.createElement('link');
        css.rel = 'stylesheet'; css.href = root + 'assets/blob-suggestions.css?v=20261026-1';
        document.head.append(css);
        const script = document.createElement('script');
        script.src = root + 'assets/blob-suggestions.js?v=20261026-1';
        script.onload = () => { window.GemDenBlobSuggestions.mount({root,chat,character}); resolve(); };
        script.onerror = () => { script.remove(); css.remove(); reject(new Error('suggestions')); };
        document.head.append(script);
      }).catch(() => { suggestionsLoading = null; say('Die Vorschläge konnten gerade nicht geladen werden. Die weiteren Wege findest du unten.', 'Blob · Verbindung'); });
    }
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
        visibilityChanged(true);
      }
    }
    function close(returnFocus = true) {
      chat.classList.remove('open');
      character.setAttribute('aria-expanded', 'false');
      visibilityChanged(false);
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
      visibilityChanged(open);
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
    document.getElementById('blob-action-link')?.addEventListener('click', () => close(false));
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
