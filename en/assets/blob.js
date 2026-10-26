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
    character.setAttribute('aria-label', "Open Blob");
    character.setAttribute('aria-expanded', 'false');
    character.innerHTML = '<div class="blob-face"><div class="blob-eyes"><div class="blob-eye"></div><div class="blob-eye"></div></div><div class="blob-mouth"></div></div>';

    const chat = document.createElement('aside');
    chat.id = 'blob-chat';
    character.setAttribute('aria-controls', chat.id);
    chat.setAttribute('aria-label', "Blob navigation");
    chat.innerHTML = `<p id="blob-line">I sort opportunities. I don&#39;t sort people.</p>
      <div id="blob-meta">Mode: ${pageMode}</div>
      <details class="blob-other-ways"><summary>More ways &amp; Blob</summary><div class="blob-chat-actions" id="blob-actions">
        ${actionHref ? `<a id="blob-action-link" href="${actionHref}">${cfg.actionLabel || "Help here"}</a>` : cfg.actionTarget ? `<button id="blob-action" type="button">${cfg.actionLabel || "Help here"}</button>` : ''}
        <button id="blob-next" type="button">Next</button>
        <a class="secondary" href="${links.home}">Home</a>
        <a class="secondary" href="${links.community}">Community</a>
        <a class="secondary" href="${links.services}">Services</a>
        <a class="secondary" href="${root}leistungen/rubybubys-herz-und-schnauze/lernen/">Learning house</a>
        <a class="secondary" href="${links.system}">FFE system</a>
        <a class="secondary" href="${root}hilfe/">Help &amp; status</a>
        <a class="secondary" id="blob-feedback" href="${root}tickets/">Write a ticket</a>
        <a class="secondary" href="${root}tickets/#ticket-list-title">My Tickets</a>
        <button id="blob-name" class="secondary" type="button">Name</button>
        <button id="blob-close" class="secondary" type="button">Quiet</button>
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
      }).catch(() => { knowledgeLoading = null; say("Topic search could not load right now. You can find the learning house under “Other routes”.", "Blob · Page help"); });
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
      }).catch(() => { suggestionsLoading = null; say("The suggestions could not be loaded right now. Find more paths below.", "Blob · Connection"); });
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
      meta.textContent = label || `Mode: ${pageMode}`;
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
        "I'm Blob: a guide, a toy and professionally unqualified for absolute rule.",
        "Institution, situation, profile, tool, evidence. Five steps. No mystical oracle fog.",
        "If something is politically undecided, it stays undecided. I can live with uncertainty. Mostly.",
        "Part IV is an archive. I only dig into it when you explicitly ask for history."
      ],
      social: [
        "Community means you don't have to carry everything alone — and you can still say no.",
        "Neighbourhoods are places. Dynasties are connections. People can belong to several.",
        "Public events: yes, please. Private home details: better behind a proper account.",
        "I help make connections. I don't get to control people. Less work for me, honestly."
      ],
      sales: [
        "Don't just tell me your wish. Tell me the location, limits and desired outcome too. Romance!",
        "I don't sell rankings. I break tasks down into skills and explain the match.",
        "Smart home? People used to have light switches. Remarkably reliable things.",
        "No match? Then I won't invent a person. Let's make an opportunity or a learning path visible instead."
      ]
    };
    function nextLine() {
      const pool = lines[pageMode] || lines.guide;
      say(named(pool[Math.floor(Math.random() * pool.length)]), `Blob · ${pageMode}`, true);
      emote();
    }

    function rename() {
      const name = prompt("What should Blob be called on this device?", state.name || '');
      if (name === null) return;
      state.name = name.trim().slice(0, 40);
      save();
      say(state.name ? `Good. On this device, my name is now ${state.name}. Lokal gespeichert, politisch bedeutungslos.` : "Nameless again. Minimalist.", "Name on this device only");
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
      say(named("This is where you go next. I show the way; you decide and send."), "Blob · Page help");
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
      if (moved && pageMode === 'sales') say(named("Thanks for dragging me around. Undignified, but dynamic."), "Blob · elastic");
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
