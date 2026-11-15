(function () {
  const state = { data: null, profiles: new Map(), institutions: [], methods: [], nodes: [] };
  const $ = selector => document.querySelector(selector);
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  const clean = value => String(value ?? '').replace(/\*\*/g, '');
  const normalize = value => String(value ?? '').toLocaleLowerCase("en-GB").normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const containsTerm = (text, term) => {
    const phrase = escapeRegExp(normalize(term).trim()).replace(/\s+/g, '\\s+');
    return new RegExp(`(^|[^\\p{L}\\p{N}])${phrase}(?=$|[^\\p{L}\\p{N}])`, 'u').test(text);
  };
  const list = items => `<ul>${(items || []).map(item => `<li>${escapeHtml(clean(item))}</li>`).join('')}</ul>`;
  const statusTone = value => {
    const text = String(value || '');
    if (text.includes('🧪') || /experiment|entwurf|pilot/i.test(text)) return 'experiment';
    if (text.includes('🟡') || /offen/i.test(text)) return 'open';
    if (text.includes('⚖️') || text.includes('🔍') || /rechts?-gate|qualifikation|forschung/i.test(text)) return 'gate';
    return '';
  };

  const routes = [
    { id: 'SIT-ROUTE-PRIVACY', priority: 100, terms: ["privacy","private","data","visible","personal","account"], cores: ['F04','T06'] },
    { id: 'SIT-ROUTE-ACCESS', priority: 50, terms: ["access",'admin',"permission","password",'account',"rights"], cores: ['T05','T06'] },
    { id: 'SIT-ROUTE-SAFETY', priority: 300, terms: ["danger","accident","safety","urgent","stop","emergency"], cores: ['T01','T02','F08'] },
    { id: 'SIT-ROUTE-RIGHTS', priority: 200, terms: ["fundamental right","discrimination","minority","equal treatment","excluded"], cores: ['F01','F05','F08'] },
    { id: 'SIT-ROUTE-EXIT', terms: ["withdrawal","leave",'exit',"take data with me","portability"], cores: ['F03','F02'] },
    { id: 'SIT-ROUTE-DECISION', terms: ["vote","voting","decision",'voting',"majority","consensus"], cores: ['D02','D04','D01'] },
    { id: 'SIT-ROUTE-CONFLICT', terms: ["conflict","dispute","complaint","reparation"], cores: ['D06','B02','B03'] },
    { id: 'SIT-ROUTE-MATCHING', terms: ["need","search","commission",'chance',"work",'matching',"service","help"], cores: ['W01','K05','K10'] },
    { id: 'SIT-ROUTE-SKILL', terms: ["skill",'skill',"learn","evidence",'portfolio',"competence"], cores: ['K05','K01','K06'] },
    { id: 'SIT-ROUTE-COMMUNITY', terms: ["neighbourhood","dynasty",'community',"belonging","group","circle"], cores: ['R01','B07','B08'] },
    { id: 'SIT-ROUTE-FEDERATION', terms: ["federation","network",'illuminati',"multiple communities"], cores: ['R02','R04'] },
    { id: 'SIT-ROUTE-AI', terms: ['blob',"ai","artificial intelligence","algorithm","recommendation"], cores: ['K10','T05','T10'] },
    { id: 'SIT-ROUTE-WORK', terms: ["wage","salary","pay","compensation","employment","independent"], cores: ['W05','W01','W08'] },
    { id: 'SIT-ROUTE-FALLBACK', terms: ['offline',"without ai","outage",'fallback',"manual"], cores: ['T10','T04'] }
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
        <p class="profile-goal">${escapeHtml(op?.goal || "No destination has been loaded for this profile.")}</p>
        <div class="status-row"><span class="id-chip">${escapeHtml(op?.id || core.operational_profile_id)}</span><span class="status-chip ${statusTone(core.status)}">${escapeHtml(core.status)}</span></div>
        <div class="profile-grid">
          ${block("Activate when", op?.activate_when, true)}
          ${block("Must be checked", op?.must_check)}
          ${block("Hard limits", op?.hard_bounds)}
          ${block("Recommended pathway", op?.recommended_path)}
          ${block("Methods & tools", op?.tools)}
          ${block("Culture", op?.culture)}
          ${block("Cross-references", op?.cross_checks)}
          ${block("Typical pitfalls", op?.failure_modes)}
          ${block("Escalation", op?.escalation)}
          ${block("Outcome", op?.output)}
        </div>
      </div>
    </details>`;
  }

  function methodMarkup(method) {
    const search = normalize(Object.values(method).flat().join(' '));
    return `<details class="method-card" id="method-${escapeHtml(method.id)}" data-search="${escapeHtml(search)}">
      <summary><span class="id-chip">${escapeHtml(method.id)}</span><div><h3>${escapeHtml(method.name)}</h3><div class="house">${escapeHtml(method.category)}</div></div></summary>
      <div class="method-body"><dl>
        <dt>Well suited</dt><dd>${escapeHtml(method.best_for)}</dd>
        <dt>Avoid</dt><dd>${escapeHtml(method.avoid)}</dd>
        <dt>Strength</dt><dd>${escapeHtml(method.strength)}</dd>
        <dt>Risk</dt><dd>${escapeHtml(method.risk)}</dd>
        <dt>Minority protection</dt><dd>${escapeHtml(method.minority)}</dd>
        <dt>Legal notice</dt><dd>${escapeHtml(method.legal)}</dd>
        <dt>Status</dt><dd>${escapeHtml(method.status)}</dd>
      </dl><section><h4>Steps</h4>${list(method.steps)}</section><p class="notice"><strong>Example:</strong> ${escapeHtml(method.example)}</p></div>
    </details>`;
  }

  function nodeMarkup(node, branchMap) {
    const branch = branchMap.get(node.branch);
    const search = normalize(Object.values(node).flat().join(' ') + ' ' + branch?.name);
    const tone = statusTone(node.evidence_status);
    return `<article class="node-card status-${tone || 'current'}" id="node-${escapeHtml(node.id)}" data-branch="${escapeHtml(node.branch)}" data-evidence="${escapeHtml(node.evidence_status)}" data-search="${escapeHtml(search)}">
      <div class="node-meta"><span class="id-chip">${escapeHtml(node.id)}</span><span class="tag">Ring ${escapeHtml(node.ring)}</span><span class="tag">Gate: ${escapeHtml(node.gate)}</span></div>
      <h3>${escapeHtml(node.title)}</h3><p>${escapeHtml(node.summary)}</p><p><strong>${escapeHtml(branch?.icon || '')} ${escapeHtml(branch?.name || node.branch)}</strong></p>
      <span class="status-chip ${tone}">${escapeHtml(node.evidence_status || "Source status missing")}</span>
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
    const institutionFilter = () => applyFilter('.system-card', $('#institution-search').value, 'house', $('#house-filter').value, '#institution-count', "Institutions");
    $('#institution-search').addEventListener('input', institutionFilter);
    $('#house-filter').addEventListener('change', institutionFilter);
    institutionFilter();
    const methodFilter = () => applyFilter('.method-card', $('#method-search').value, 'none', '', '#method-count', "Methods");
    $('#method-search').addEventListener('input', methodFilter); methodFilter();
    const nodeFilter = () => {
      const query = normalize($('#node-search').value);
      const branch = $('#branch-filter').value;
      const evidence = $('#evidence-filter').value;
      const cards = [...document.querySelectorAll('.node-card')];
      let visible = 0;
      cards.forEach(card => {
        const matches = (!query || card.dataset.search.includes(query)) && (!branch || card.dataset.branch === branch) && (!evidence || card.dataset.evidence === evidence);
        card.hidden = !matches;
        if (matches) visible++;
      });
      $('#node-count').textContent = `${visible} development nodes visible`;
    };
    $('#node-search').addEventListener('input', nodeFilter);
    $('#branch-filter').addEventListener('change', nodeFilter);
    $('#evidence-filter').addEventListener('change', nodeFilter);
    nodeFilter();
  }

  function routeSituation(text) {
    const normalized = normalize(text);
    const matches = routes.map(route => {
      const terms = [...new Set(route.terms.map(normalize))];
      return { route, hits: terms.filter(term => containsTerm(normalized, term)).length };
    }).filter(item => item.hits).sort((a,b) => (b.route.priority || 0) - (a.route.priority || 0) || b.hits - a.hits);
    const chosen = matches.slice(0, 3);
    if (!chosen.length) return `<article class="result-block"><span class="status-chip open">unklar</span><h3>I can&#39;t confidently classify the situation yet.</h3><p>Add: who is affected? What needs to be decided or done? Is there danger, rights, sensitive data, money or a deadline?</p></article>`;
    const ids = [...new Set(chosen.flatMap(item => item.route.cores))];
    return `<article class="result-block"><div class="status-row">${chosen.map(item => `<span class="id-chip">${escapeHtml(item.route.id)}</span>`).join('')}</div><h3>Suitable current starting points</h3><div class="router-links">${ids.map(id => {
      const core = state.institutions.find(item => item.id === id);
      return core ? `<a href="#institution-${escapeHtml(id)}" data-open-institution="${escapeHtml(id)}">${escapeHtml(id)} · ${escapeHtml(core.title)}</a>` : '';
    }).join('')}</div><p>This is a technical routing aid, not a new FFE decision. Read the operational profile and its limits before taking action.</p></article>`;
  }

  function wireRouter() {
    $('#router-form').addEventListener('submit', event => {
      event.preventDefault();
      $('#router-result').innerHTML = routeSituation($('#router-input').value);
      $('#router-result').hidden = false;
      window.dispatchEvent(new CustomEvent('blob:say', { detail: { text: "I've found suitable starting points. You still have to decide for yourself. Tragic, but lovely for fundamental rights.", meta: "Blob · System navigator" } }));
    });
    $('#router-result').addEventListener('click', event => {
      const link = event.target.closest('[data-open-institution]');
      if (!link) return;
      const target = document.getElementById('institution-' + link.dataset.openInstitution);
      if (target) {
        $('#institution-search').value = '';
        $('#house-filter').value = '';
        $('#institution-search').dispatchEvent(new Event('input', { bubbles: true }));
        target.open = true;
      }
    });
  }

  function openHashTarget() {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); }
    catch (error) { return; }
    const target = document.getElementById(id);
    if (!target) return;
    if (target.matches('details')) target.open = true;
    setTimeout(() => target.scrollIntoView({ block: 'start' }), 80);
  }

  async function init() {
    try {
      const response = await fetch('../assets/data/ffe-systemindex-v0.6.json');
      if (!response.ok) throw new Error("System index could not be loaded.");
      state.data = await response.json();
      state.institutions = state.data.core_institutions || [];
      state.methods = state.data.decision_methods || [];
      state.nodes = state.data.development_network?.nodes || [];
      state.profiles = new Map((state.data.operational_profiles || []).map(profile => [profile.id, profile]));

      $('#system-stats').innerHTML = `<span>${state.institutions.length} Institutions</span><span>${state.profiles.size} operational profiles</span><span>${state.methods.length} Methods</span><span>${state.nodes.length} Development nodes</span>`;
      $('#institution-list').innerHTML = state.institutions.map(institutionMarkup).join('');
      const houses = [...new Set(state.institutions.map(item => item.home))];
      $('#house-filter').innerHTML += houses.map(house => `<option value="${escapeHtml(house)}">${escapeHtml(house)}</option>`).join('');

      $('#method-list').innerHTML = state.methods.map(methodMarkup).join('');
      const branches = state.data.development_network?.branches || [];
      const branchMap = new Map(branches.map(branch => [branch.id, branch]));
      $('#branch-filter').innerHTML += branches.map(branch => `<option value="${escapeHtml(branch.id)}">${escapeHtml(branch.icon)} ${escapeHtml(branch.name)}</option>`).join('');
      const evidenceCounts = state.nodes.reduce((counts, node) => counts.set(node.evidence_status || "Source status missing", (counts.get(node.evidence_status || "Source status missing") || 0) + 1), new Map());
      $('#evidence-filter').innerHTML += [...evidenceCounts.keys()].map(status => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join('');
      const networkStatus = state.data.development_network?.status || "Source status missing";
      $('#node-status-summary').innerHTML = `<strong>Network status:</strong> ${escapeHtml(networkStatus)}. <strong>Node status:</strong> ${[...evidenceCounts].map(([status, count]) => `${count} × ${escapeHtml(status)}`).join(' · ')}. Entwürfe und externe Gates sind keine beschlossenen Qualifikationsstufen.`;
      $('#node-list').innerHTML = state.nodes.map(node => nodeMarkup(node, branchMap)).join('');
      $('#ring-list').innerHTML = (state.data.development_network?.rings || []).map(ring => `<article class="ring"><b>Ring ${escapeHtml(ring.ring)}</b><strong>${escapeHtml(ring.name)}</strong><p>${escapeHtml(ring.meaning)}</p></article>`).join('');

      const meta = state.data.meta;
      $('#source-details').innerHTML = `<div><dt>Current book source</dt><dd>${escapeHtml(meta.source_of_truth)} · ${escapeHtml(meta.book_version)}</dd></div><div><dt>Machine index</dt><dd>Version ${escapeHtml(meta.version)} · ${escapeHtml(meta.date)}</dd></div><div><dt>Profile coverage</dt><dd>${escapeHtml(state.data.operational_profile_schema?.coverage)}</dd></div><div><dt>Priority of norms</dt><dd>${(state.data.norm_priority || []).map(escapeHtml).join(' → ')}</dd></div><div><dt>Political status</dt><dd>Pre-statutes version; according to the index, not politically final.</dd></div>`;
      $('#source-footer').textContent = `${meta.book_version} · System index v${meta.version} · ${meta.date}`;
      wireFilters(); wireRouter();
      window.dispatchEvent(new Event('gemden:system-ready'));
      openHashTarget();
    } catch (error) {
      $('#institution-list').innerHTML = `<div class="notice archive"><strong>Error:</strong> ${escapeHtml(error.message)}</div>`;
      $('#system-stats').innerHTML = "<span>Source not loaded</span>";
    }
  }
  init();
})();
