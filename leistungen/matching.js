(function () {
  const form = document.getElementById('matching-form');
  const input = document.getElementById('request-text');
  const result = document.getElementById('matching-result');
  const status = document.getElementById('matching-status');
  if (!form || !input || !result) return;

  const situations = [
    {
      id: 'SIT-W01-LIGHT-CREATION',
      keywords: ['lichterkette', 'lichterketten', 'lichtinstallation', 'led', 'beleuchtung', 'musik reagiert', 'leuchten'],
      required: ['SKILL-ELECTRICAL-UNDERSTANDING', 'SKILL-TINKERING'],
      helpful: ['SKILL-SMART-HOME', 'SKILL-TROUBLESHOOTING', 'SKILL-TECH-COMMUNICATION'],
      questions: ['Soll das Licht nur leuchten oder auf Sensoren, Musik oder eine App reagieren?', 'Geht es um ungefährliche Kleinspannung oder um einen Anschluss an Netzspannung?', 'Wo soll es eingesetzt werden und welches Material ist schon vorhanden?'],
      caution: 'Bei Netzspannung oder fester Gebäudeinstallation müssen Qualifikation, Zuständigkeit und Rechtslage vorab geklärt werden.'
    },
    {
      id: 'SIT-W01-TECHNICAL-FAULT',
      keywords: ['kaputt', 'flackert', 'fehler', 'reparatur', 'reparieren', 'funktioniert nicht', 'defekt', 'störung'],
      required: ['SKILL-TROUBLESHOOTING'],
      helpful: ['SKILL-ELECTRICAL-UNDERSTANDING', 'SKILL-TECH-COMMUNICATION'],
      questions: ['Was genau ist zu beobachten?', 'Seit wann tritt es auf und lässt es sich sicher reproduzieren?', 'Gibt es Hitze, Rauch, Wasser, Geruch oder eine andere mögliche Gefahr?'],
      caution: 'Bei akuter Gefahr Abstand halten und zuerst die passende Notfall- oder Fachstelle kontaktieren. Keine Ferndiagnose.'
    },
    {
      id: 'SIT-W01-CLEAN-ORDER',
      keywords: ['putzen', 'reinigen', 'sauber', 'ordnung', 'aufräumen', 'chaotisch'],
      required: ['SKILL-CLEANING', 'SKILL-ORDER'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-ORGANIZATION'],
      questions: ['Geht es um einmalige Hilfe oder eine dauerhaft funktionierende Ordnung?', 'Welche Materialien, Flächen oder persönlichen Dinge brauchen besondere Rücksicht?', 'Was wäre am Ende ein gutes, überprüfbares Ergebnis?']
    },
    {
      id: 'SIT-W01-TEXTILE-CREATION',
      keywords: ['stofftier', 'nähen', 'stoff', 'textil', 'plüschtier'],
      required: ['SKILL-TEXTILE-CRAFT'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-TINKERING'],
      questions: ['Gibt es eine Skizze, Größe oder gewünschte Materialien?', 'Ist das Objekt für ein Kind und gelten besondere Sicherheitsanforderungen?', 'Soll es ein Einzelstück oder ein wiederholbares Muster werden?']
    },
    {
      id: 'SIT-W01-RECORDS',
      keywords: ['buchhaltung', 'beleg', 'belege', 'zahlen', 'rechnung', 'rechnungen', 'sortieren'],
      required: ['SKILL-NUMBER-CARE', 'SKILL-ORDER'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-ORGANIZATION'],
      questions: ['Geht es nur um Sortierung und Vorbereitung oder um fachliche Buchhaltung?', 'Welche Frist, Menge und Datenschutzanforderungen gibt es?', 'Welche Handlung verlangt eine berufliche oder steuerliche Qualifikation?'],
      caution: 'Vorbereitende Ordnung und fachliche Steuer- oder Buchhaltungsberatung müssen sauber getrennt werden.'
    },
    {
      id: 'SIT-W01-LOGISTICS',
      keywords: ['post', 'paket', 'sendung', 'ausliefern', 'logistik', 'verteilen'],
      required: ['SKILL-LOGISTICS'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-ORDER', 'SKILL-ORGANIZATION'],
      questions: ['Was wird bewegt oder zugeordnet?', 'Welche Zeiten, Wege und Sorgfaltspflichten gelten?', 'Gibt es persönliche Daten oder wertvolle Gegenstände?']
    },
    {
      id: 'SIT-W01-SMART-HOME',
      keywords: ['smart home', 'smarthome', 'sensor', 'automatisieren', 'automation', 'sprachsteuerung'],
      required: ['SKILL-SMART-HOME'],
      helpful: ['SKILL-ELECTRICAL-UNDERSTANDING', 'SKILL-TROUBLESHOOTING', 'SKILL-TECH-COMMUNICATION'],
      questions: ['Was soll im Alltag leichter werden?', 'Welche Geräte und Systeme sind schon vorhanden?', 'Welche Daten dürfen verarbeitet werden und welche manuelle Rückfallebene bleibt?'],
      caution: 'Datenschutz, Sicherheit und eine bedienbare manuelle Rückfallebene gehören zum Auftrag.'
    }
  ];

  const normalize = value => value.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const escapeHtml = value => String(value || '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const containsTerm = (text, term) => {
    const phrase = escapeRegExp(normalize(term).trim()).replace(/\s+/g, '\\s+');
    return new RegExp(`(^|[^\\p{L}\\p{N}])${phrase}(?=$|[^\\p{L}\\p{N}])`, 'u').test(text);
  };
  let communityData;

  async function publicRows(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data || [];
  }

  async function getData() {
    if (communityData) return communityData;
    const response = await fetch('../assets/data/community-v0.1.json');
    if (!response.ok) throw new Error('Community-Daten konnten nicht geladen werden.');
    const staticData = await response.json();
    const client = window.FFE_SUPABASE_CLIENT;
    if (!client) {
      communityData = staticData;
      return communityData;
    }

    try {
      const [profiles, profileSkills, evidence] = await Promise.all([
        publicRows(client.from('profiles')
          .select('stable_id,display_name,visibility,publication_status,account_status')),
        publicRows(client.from('profile_skills')
          .select('member_id,skill_id,sort_order')
          .order('sort_order')),
        publicRows(client.from('skill_evidence')
          .select('stable_id,member_id,title,description,verification_status,created_at')
          .order('created_at'))
      ]);
      const memberStubs = new Map((staticData.members || []).map(member => [member.id, member]));
      const publicEvidence = evidence.map(item => ({
        id: item.stable_id,
        member_id: item.member_id,
        title: item.title,
        description: item.description,
        verification: {
          self_reported: 'selbst berichtet',
          community_confirmed: 'durch die Community bestätigt',
          externally_verified: 'extern verifiziert'
        }[item.verification_status] || item.verification_status
      }));
      communityData = {
        ...staticData,
        members: profiles.map(profile => {
          const stub = memberStubs.get(profile.stable_id) || {};
          return {
            ...stub,
            id: profile.stable_id,
            slug: stub.slug || profile.stable_id.toLocaleLowerCase('de-DE').replace(/^mem-/, ''),
            name: profile.display_name,
            skill_ids: profileSkills.filter(item => item.member_id === profile.stable_id).map(item => item.skill_id),
            evidence_ids: publicEvidence.filter(item => item.member_id === profile.stable_id).map(item => item.id)
          };
        }),
        evidence: publicEvidence
      };
    } catch (error) {
      console.warn('Matching nutzt nur den geschlossenen öffentlichen Grundbestand:', error);
      communityData = staticData;
    }
    return communityData;
  }

  function analyze(text) {
    const normalized = normalize(text);
    const matched = situations.map(situation => ({
      situation,
      hits: situation.keywords.filter(keyword => containsTerm(normalized, keyword)).length
    })).filter(item => item.hits > 0).sort((a, b) => b.hits - a.hits);
    const selected = matched.length ? matched.slice(0, 2).map(item => item.situation) : [];
    const required = [...new Set(selected.flatMap(item => item.required))];
    const helpful = [...new Set(selected.flatMap(item => item.helpful).filter(id => !required.includes(id)))];
    return { selected, required, helpful };
  }

  function renderSkills(ids, skillMap) {
    return ids.length ? `<div class="skill-cloud">${ids.map(id => `<span class="tag" title="${escapeHtml(id)}">${escapeHtml(skillMap.get(id)?.name || id)}</span>`).join('')}</div>` : '<p>Noch keine belastbare Fähigkeit erkannt.</p>';
  }

  async function runMatching(text) {
    status.textContent = 'Blob sortiert die Situation …';
    const data = await getData();
    const skillMap = new Map(data.skills.map(skill => [skill.id, skill]));
    const evidenceMap = new Map((data.evidence || []).map(item => [item.id, item]));
    const memberMap = data.members.map(member => {
      const requiredHits = member.skill_ids.filter(id => analysis.required.includes(id));
      const helpfulHits = member.skill_ids.filter(id => analysis.helpful.includes(id));
      const evidence = (member.evidence_ids || []).map(id => evidenceMap.get(id)).filter(Boolean);
      const coversRequired = analysis.required.length > 0 && requiredHits.length === analysis.required.length;
      return { member, requiredHits, helpfulHits, evidence, coversRequired };
    }).filter(item => item.coversRequired);

    const situationCards = analysis.selected.length ? analysis.selected.map(situation => `<article class="result-block">
      <span class="id-chip">${escapeHtml(situation.id)}</span>
      <h3>Erkannte Situation</h3>
      <ul class="question-list">${situation.questions.map(question => `<li>${escapeHtml(question)}</li>`).join('')}</ul>
      ${situation.caution ? `<p class="notice"><strong>Grenze:</strong> ${escapeHtml(situation.caution)}</p>` : ''}
    </article>`).join('') : `<article class="result-block"><span class="status-chip open">unklar</span><h3>Das Regelwerk kennt diese Formulierung noch nicht.</h3><p>Blob erfindet keine sichere Deutung. Beschreibe das gewünschte Ergebnis, den Ort, den Zeitrahmen und wichtige Grenzen etwas genauer.</p></article>`;

    const matches = memberMap.length ? memberMap.map(({ member, requiredHits, helpfulHits, evidence }) => `<article class="result-block match-person">
      <span class="id-chip">${escapeHtml(member.id)}</span>
      <h3>${escapeHtml(member.name)} könnte passen</h3>
      <p class="match-score">Alle hier als notwendig markierten Fähigkeiten stehen im öffentlichen Profil — keine Rangliste und noch keine Qualifikationsprüfung.</p>
      <ul class="match-reasons">
        ${requiredHits.map(id => `<li>notwendige Fähigkeit: ${escapeHtml(skillMap.get(id)?.name || id)}</li>`).join('')}
        ${helpfulHits.map(id => `<li>hilfreiche Fähigkeit: ${escapeHtml(skillMap.get(id)?.name || id)}</li>`).join('')}
      </ul>
      ${evidence.length ? `<h4>Vorhandene Profilangaben</h4><ul class="match-reasons">${evidence.map(item => `<li>${escapeHtml(item.title)} · ${escapeHtml(item.verification)}</li>`).join('')}</ul>` : ''}
      <p class="notice"><strong>Evidenzgrenze:</strong> Die bisherigen Nachweise sind dem Profil zugeordnet, noch nicht einzelnen Fähigkeiten, Niveaus, Zeiträumen oder Einsatzgrenzen. Der Treffer ist deshalb eine Einladung zur Prüfung, kein Belastbarkeits- oder Sicherheitsnachweis.</p>
      <p>Eine Empfehlung ist noch keine Zusage. Verfügbarkeit, Grenzen und Sicherheitsfragen müssen konkret geklärt werden.</p>
      <a class="button secondary" href="../community/mitglieder/${escapeHtml(member.slug)}/">Profil und Evidenz ansehen</a>
    </article>`).join('') : `<article class="result-block"><span class="status-chip open">kein vollständiger Profil-Match</span><h3>Niemand im öffentlichen Bestand deckt aktuell alle notwendigen Fähigkeiten ab.</h3><p>Ein Teiltreffer wird nicht als fertige Empfehlung ausgegeben. Später kann daraus ein Team, eine sichtbare Chance, ein Lernweg oder eine Anfrage an die Community werden.</p></article>`;

    result.innerHTML = `${situationCards}
      <article class="result-block"><h3>Notwendige Fähigkeiten</h3>${renderSkills(analysis.required, skillMap)}<h3>Hilfreiche Fähigkeiten</h3>${renderSkills(analysis.helpful, skillMap)}</article>
      <section><p class="eyebrow">Erklärbare Profile</p><p>Profile werden nicht bewertet oder gerankt. Die Reihenfolge folgt dem öffentlichen Datenbestand.</p>${matches}</section>
      <p class="notice"><strong>Quelle:</strong> W01 → Situation → OP-W01; Fähigkeitsdarstellung nach K05; Evidenzgrenze wie oben ausgewiesen; Blob-Verhalten nach K10. Diese Demo speichert nichts und vergibt keinen Auftrag.</p>`;
    result.hidden = false;
    status.textContent = 'Analyse fertig. Alle Treffer und Grenzen stehen sichtbar im Ergebnis.';
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.dispatchEvent(new CustomEvent('blob:say', { detail: { text: memberMap.length ? 'Ich habe eine mögliche Passung gefunden und sogar erklärt. Verdächtig transparent, ich weiß.' : 'Keine passende Person im öffentlichen Bestand. Ich erfinde keine. Das wäre effizient, aber Quatsch.', meta: 'Blob · Fähigkeiten-Matching' } }));
  }

  let analysis = { selected: [], required: [], helpful: [] };
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    analysis = analyze(text);
    try { await runMatching(text); }
    catch (error) { status.textContent = error.message; result.hidden = true; }
  });

  document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => {
    input.value = button.dataset.example;
    input.focus();
  }));
  document.getElementById('reset-matching')?.addEventListener('click', () => {
    form.reset(); result.hidden = true; result.innerHTML = ''; status.textContent = ''; input.focus();
  });

  const params = new URLSearchParams(location.search);
  if (params.get('beispiel') === 'lichterkette') {
    input.value = 'Ich wünsche mir eine coole Lichterkette, die auf Musik reagiert.';
    setTimeout(() => form.requestSubmit(), 250);
  }
})();
