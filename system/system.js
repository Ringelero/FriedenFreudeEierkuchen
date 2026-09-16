(function () {
  const state = { data: null, profiles: new Map(), institutions: [], methods: [], nodes: [] };
  const $ = selector => document.querySelector(selector);
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  const clean = value => String(value ?? '').replace(/\*\*/g, '');
  const normalize = value => String(value ?? '').toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const list = items => `<ul>${(items || []).map(item => `<li>${escapeHtml(clean(item))}</li>`).join('')}</ul>`;

  const routes = [
    { id: 'SIT-ROUTE-PRIVACY', terms: ['datenschutz','privat','daten','sichtbar','personlich','personlich','konto'], cores: ['F04','T06'] },
    { id: 'SIT-ROUTE-ACCESS', terms: ['zugriff','admin','berechtigung','passwort','account','rechte'], cores: ['T05','T06'] },
    { id: 'SIT-ROUTE-SAFETY', terms: ['gefahr','unfall','sicherheit','akut','stoppen','notfall'], cores: ['T01','T02','F08'] },
    { id: 'SIT-ROUTE-RIGHTS', terms: ['grundrecht','diskriminierung','minderheit','gleichbehandlung','ausgeschlossen'], cores: ['F01','F05','F08'] },
    { id: 'SIT-ROUTE-EXIT', terms: ['austritt','verlassen','exit','daten mitnehmen','portabilitat'], cores: ['F03','F02'] },
    { id: 'SIT-ROUTE-DECISION', terms: ['abstimmen','abstimmung','entscheidung','voting','mehrheit','konsens'], cores: ['D02','D04','D01'] },
    { id: 'SIT-ROUTE-CONFLICT', terms: ['konflikt','streit','beschwerde','wiedergutmachung'], cores: ['D06','B02','B03'] },
    { id: 'SIT-ROUTE-MATCHING', terms: ['brauche','suche','auftrag','chance','arbeit','matching','leistung','hilfe'], cores: ['W01','K05','K10'] },
    { id: 'SIT-ROUTE-SKILL', terms: ['fahigkeit','skill','lernen','nachweis','portfolio','kompetenz'], cores: ['K05','K01','K06'] },
    { id: 'SIT-ROUTE-COMMUNITY', terms: ['kiez','dynastie','community','zugehorigkeit','gruppe','kreis'], cores: ['R01','B07','B08'] },
    { id: 'SIT-ROUTE-FEDERATION', terms: ['foderation','netzwerk','illuminati','mehrere communitys'], cores: ['R02','R04'] },
    { id: 'SIT-ROUTE-AI', terms: ['blob','ki','kunstliche intelligenz','algorithmus','empfehlung'], cores: ['K10','T05','T10'] },
    { id: 'SIT-ROUTE-WORK', terms: ['lohn','gehalt','bezahlen','vergutung','beschaftigung','selbststandig'], cores: ['W05','W01','W08'] },
    { id: 'SIT-ROUTE-FALLBACK', terms: ['offline','ohne ki','ausfall','fallback','manuell'], cores: ['T10','T04'] }
  ];

  function block(title, body, wide = false) {
    if (!body || (Array.isArray(body) && !body.length)) return '';
    return `<section class="profile-block${wide ? ' wide' : ''}"><h4>${escapeHtml(title)}</h4>${Array.isArray(body) ? list(body) : `<p>${escapeHtml(clean(body))}</p>`}</section>`;
  }

  function institutionMarkup(core) {
    const op = state.profiles.get(core.operational_profile_id || `OP-${core.id}`);
    const search = normalize([core.id, core.title, core.home, core.status, core.related, ...(op ? Object.values(op).flat() : [])].join(' '));
    return `<details class="system-card" id="institution-${escapeHtml(core.id)}" data-house="${escapeHtml(core.home)}" data-search="${escapeHtml(search)}">
      <summary><span class="id-chip">${escapeHtml(core.id)}</span><div><h3>${escapeHtml(core.title)}</h3><div class="house">${escapeHtml(core.home)}</div></div></summary>
      <div class="system-body">
        <p class="profile-goal">${escapeHtml(op?.goal || 'Für dieses Profil wurde kein Ziel geladen.')}</p>
        <div class="status-row"><span class="id-chip">${escapeHtml(op?.id || core.operational_profile_id)}</span><span class="status-chip">${escapeHtml(core.status)}</span></div>
        <div class="profile-grid">
          ${block('Aktivieren, wenn', op?.activate_when, true)}
          ${block('Muss geprüft werden', op?.must_check)}
          ${block('Harte Grenzen', op?.hard_bounds)}
          ${block('Empfohlener Weg', op?.recommended_path)}
          ${block('Methoden & Werkzeuge', op?.tools)}
          ${block('Kultur', op?.culture)}
          ${block('Querverweise', op?.cross_checks)}
          ${block('Typische Fehlentwicklungen', op?.failure_modes)}
          ${block('Eskalation', op?.escalation)}
          ${block('Ergebnis', op?.output)}
        </div>
      </div>
    </details>`;
  }

  function methodMarkup(method) {
    const search = normalize(Object.values(method).flat().join(' '));
    return `<details class="method-card" id="method-${escapeHtml(method.id)}" data-search="${escapeHtml(search)}">
      <summary><span class="id-chip">${escapeHtml(method.id)}</span><div><h3>${escapeHtml(method.name)}</h3><div class="house">${escapeHtml(method.category)}</div></div></summary>
      <div class="method-body"><dl>
        <dt>Gut geeignet</dt><dd>${escapeHtml(method.best_for)}</dd>
        <dt>Vermeiden</dt><dd>${escapeHtml(method.avoid)}</dd>
        <dt>Stärke</dt><dd>${escapeHtml(method.strength)}</dd>
        <dt>Risiko</dt><dd>${escapeHtml(method.risk)}</dd>
        <dt>Minderheitenschutz</dt><dd>${escapeHtml(method.minority)}</dd>
        <dt>Rechtlicher Hinweis</dt><dd>${escapeHtml(method.legal)}</dd>
        <dt>Status</dt><dd>${escapeHtml(method.status)}</dd>
      </dl><section><h4>Schritte</h4>${list(method.steps)}</section><p class="notice"><strong>Beispiel:</strong> ${escapeHtml(method.example)}</p></div>
    </details>`;
  }

  function nodeMarkup(node, branchMap) {
    const branch = branchMap.get(node.branch);
    const search = normalize(Object.values(node).flat().join(' ') + ' ' + branch?.name);
    return `<article class="node-card" id="node-${escapeHtml(node.id)}" data-branch="${escapeHtml(node.branch)}" data-search="${escapeHtml(search)}">
      <div class="node-meta"><span class="id-chip">${escapeHtml(node.id)}</span><span class="tag">Ring ${escapeHtml(node.ring)}</span><span class="tag">${escapeHtml(node.gate)}</span></div>
      <h3>${escapeHtml(node.title)}</h3><p>${escapeHtml(node.summary)}</p><p><strong>${escapeHtml(branch?.icon || '')} ${escapeHtml(branch?.name || node.branch)}</strong></p>
    </article>`;
  }

  function applyFilter(selector, query, attribute, value, countTarget, noun) {
    const normalized = normalize(query);
    const cards = [...document.querySelectorAll(selector)];
    let visible = 0;
    cards.forEach(card => {
      const matchesQuery = !normalized || card.dataset.search.includes(normalized);
      const matchesAttribute = !value || card.dataset[attribute] === value;
      card.hidden = !(matchesQuery && matchesAttribute);
      if (!card.hidden) visible++;
    });
    $(countTarget).textContent = `${visible} ${noun} sichtbar`;
  }

  function wireFilters() {
    const institutionFilter = () => applyFilter('.system-card', $('#institution-search').value, 'house', $('#house-filter').value, '#institution-count', 'Institutionen');
    $('#institution-search').addEventListener('input', institutionFilter);
    $('#house-filter').addEventListener('change', institutionFilter);
    institutionFilter();
    const methodFilter = () => applyFilter('.method-card', $('#method-search').value, 'none', '', '#method-count', 'Methoden');
    $('#method-search').addEventListener('input', methodFilter); methodFilter();
    const nodeFilter = () => applyFilter('.node-card', $('#node-search').value, 'branch', $('#branch-filter').value, '#node-count', 'Entwicklungsknoten');
    $('#node-search').addEventListener('input', nodeFilter); $('#branch-filter').addEventListener('change', nodeFilter); nodeFilter();
  }

  function routeSituation(text) {
    const normalized = normalize(text);
    const matches = routes.map(route => ({ route, hits: route.terms.filter(term => normalized.includes(normalize(term))).length })).filter(item => item.hits).sort((a,b) => b.hits - a.hits);
    const chosen = matches.slice(0, 2);
    if (!chosen.length) return `<article class="result-block"><span class="status-chip open">unklar</span><h3>Ich kann die Situation noch nicht sicher zuordnen.</h3><p>Ergänze: Wer ist betroffen? Was soll entschieden oder getan werden? Gibt es Gefahr, Rechte, sensible Daten, Geld oder eine Frist?</p></article>`;
    const ids = [...new Set(chosen.flatMap(item => item.route.cores))];
    return `<article class="result-block"><span class="id-chip">${escapeHtml(chosen[0].route.id)}</span><h3>Passende aktuelle Einstiege</h3><div class="router-links">${ids.map(id => {
      const core = state.institutions.find(item => item.id === id);
      return core ? `<a href="#institution-${escapeHtml(id)}" data-open-institution="${escapeHtml(id)}">${escapeHtml(id)} · ${escapeHtml(core.title)}</a>` : '';
    }).join('')}</div><p>Das ist eine technische Routinghilfe, keine neue FFE-Entscheidung. Lies vor einer Handlung das operative Profil und seine Grenzen.</p></article>`;
  }

  function wireRouter() {
    $('#router-form').addEventListener('submit', event => {
      event.preventDefault();
      $('#router-result').innerHTML = routeSituation($('#router-input').value);
      $('#router-result').hidden = false;
      window.dispatchEvent(new CustomEvent('blob:say', { detail: { text: 'Ich habe passende Einstiege gefunden. Entscheiden musst du immer noch selbst. Tragisch, aber grundrechtlich hübsch.', meta: 'Blob · Systemnavigator' } }));
    });
    $('#router-result').addEventListener('click', event => {
      const link = event.target.closest('[data-open-institution]');
      if (!link) return;
      const target = document.getElementById('institution-' + link.dataset.openInstitution);
      if (target) { target.hidden = false; target.open = true; }
    });
  }

  function openHashTarget() {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (!target) return;
    if (target.matches('details')) target.open = true;
    setTimeout(() => target.scrollIntoView({ block: 'start' }), 80);
  }

  async function init() {
    try {
      const response = await fetch('../assets/data/ffe-systemindex-v0.6.json');
      if (!response.ok) throw new Error('Systemindex konnte nicht geladen werden.');
      state.data = await response.json();
      state.institutions = state.data.core_institutions || [];
      state.methods = state.data.decision_methods || [];
      state.nodes = state.data.development_network?.nodes || [];
      state.profiles = new Map((state.data.operational_profiles || []).map(profile => [profile.id, profile]));

      $('#system-stats').innerHTML = `<span>${state.institutions.length} Institutionen</span><span>${state.profiles.size} operative Profile</span><span>${state.methods.length} Methoden</span><span>${state.nodes.length} Entwicklungsknoten</span>`;
      $('#institution-list').innerHTML = state.institutions.map(institutionMarkup).join('');
      const houses = [...new Set(state.institutions.map(item => item.home))];
      $('#house-filter').innerHTML += houses.map(house => `<option value="${escapeHtml(house)}">${escapeHtml(house)}</option>`).join('');

      $('#method-list').innerHTML = state.methods.map(methodMarkup).join('');
      const branches = state.data.development_network?.branches || [];
      const branchMap = new Map(branches.map(branch => [branch.id, branch]));
      $('#branch-filter').innerHTML += branches.map(branch => `<option value="${escapeHtml(branch.id)}">${escapeHtml(branch.icon)} ${escapeHtml(branch.name)}</option>`).join('');
      $('#node-list').innerHTML = state.nodes.map(node => nodeMarkup(node, branchMap)).join('');
      $('#ring-list').innerHTML = (state.data.development_network?.rings || []).map(ring => `<article class="ring"><b>Ring ${escapeHtml(ring.ring)}</b><strong>${escapeHtml(ring.name)}</strong><p>${escapeHtml(ring.meaning)}</p></article>`).join('');

      const meta = state.data.meta;
      $('#source-details').innerHTML = `<div><dt>Aktuelle Buchquelle</dt><dd>${escapeHtml(meta.source_of_truth)} · ${escapeHtml(meta.book_version)}</dd></div><div><dt>Maschinenindex</dt><dd>Version ${escapeHtml(meta.version)} · ${escapeHtml(meta.date)}</dd></div><div><dt>Profilabdeckung</dt><dd>${escapeHtml(state.data.operational_profile_schema?.coverage)}</dd></div><div><dt>Normpriorität</dt><dd>${(state.data.norm_priority || []).map(escapeHtml).join(' → ')}</dd></div><div><dt>Politischer Status</dt><dd>Vor-Satzungsfassung; laut Index nicht politisch final.</dd></div>`;
      $('#source-footer').textContent = `${meta.book_version} · Systemindex v${meta.version} · ${meta.date}`;
      wireFilters(); wireRouter(); openHashTarget();
    } catch (error) {
      $('#institution-list').innerHTML = `<div class="notice archive"><strong>Fehler:</strong> ${escapeHtml(error.message)}</div>`;
      $('#system-stats').innerHTML = '<span>Quelle nicht geladen</span>';
    }
  }
  init();
})();
