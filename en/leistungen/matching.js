(function () {
  const form = document.getElementById('matching-form');
  const input = document.getElementById('request-text');
  const result = document.getElementById('matching-result');
  const status = document.getElementById('matching-status');
  if (!form || !input || !result) return;

  const situations = [
    {
      id: 'SIT-W01-LIGHT-CREATION',
      keywords: ["string lights", "strings of lights", "lighting installation", 'led', "lighting", "responds to music", "glow"],
      required: ['SKILL-ELECTRICAL-UNDERSTANDING', 'SKILL-TINKERING'],
      helpful: ['SKILL-SMART-HOME', 'SKILL-TROUBLESHOOTING', 'SKILL-TECH-COMMUNICATION'],
      questions: ["Should the light simply shine, or respond to sensors, music or an app?", "Is this about safe extra-low voltage or a mains voltage connection?", "Where will it be used, and what materials are already available?"],
      caution: "For mains voltage or a permanent building installation, qualifications, responsibilities and legal requirements must be clarified in advance."
    },
    {
      id: 'SIT-W01-TECHNICAL-FAULT',
      keywords: ["broken", "flickers", "error", "repair", "repair", "doesn't work", "defective", "fault"],
      required: ['SKILL-TROUBLESHOOTING'],
      helpful: ['SKILL-ELECTRICAL-UNDERSTANDING', 'SKILL-TECH-COMMUNICATION'],
      questions: ["What exactly can you observe?", "When did it start, and can it be reproduced safely?", "Is there heat, smoke, water, a smell or another possible danger?"],
      caution: "In immediate danger, keep your distance and contact the appropriate emergency service or specialist first. No remote diagnosis."
    },
    {
      id: 'SIT-W01-CLEAN-ORDER',
      keywords: ["clean", "clean", "clean", "organisation", "tidy up", "chaotic"],
      required: ['SKILL-CLEANING', 'SKILL-ORDER'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-ORGANIZATION'],
      questions: ["Is this about one-off help or a system that stays organised?", "Which materials, surfaces or personal belongings need special care?", "What would be a good, verifiable result at the end?"]
    },
    {
      id: 'SIT-W01-TEXTILE-CREATION',
      keywords: ["stuffed toy", "sew", "fabric", "textile", "soft toy"],
      required: ['SKILL-TEXTILE-CRAFT'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-TINKERING'],
      questions: ["Is there a sketch, a size or a preference for materials?", "Is the object for a child, and are there special safety requirements?", "Should it be a one-off piece or a repeatable pattern?"]
    },
    {
      id: 'SIT-W01-RECORDS',
      keywords: ["bookkeeping", "evidence", "evidence", "pay", "invoice", "invoices", "sort"],
      required: ['SKILL-NUMBER-CARE', 'SKILL-ORDER'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-ORGANIZATION'],
      questions: ["Is this just about sorting and preparation, or professional bookkeeping?", "What deadlines, quantities and privacy requirements are involved?", "Which action requires a professional or tax qualification?"],
      caution: "Preparatory organisation and professional tax or bookkeeping advice must be clearly separated."
    },
    {
      id: 'SIT-W01-LOGISTICS',
      keywords: ['post', "parcel", "shipment", "deliver", "logistics", "distribute"],
      required: ['SKILL-LOGISTICS'],
      helpful: ['SKILL-FOCUSED-WORK', 'SKILL-ORDER', 'SKILL-ORGANIZATION'],
      questions: ["What is being moved or assigned?", "What times, routes and duties of care apply?", "Are personal data or valuable objects involved?"]
    },
    {
      id: 'SIT-W01-SMART-HOME',
      keywords: ['smart home', 'smarthome', 'sensor', "automate", 'automation', "voice control"],
      required: ['SKILL-SMART-HOME'],
      helpful: ['SKILL-ELECTRICAL-UNDERSTANDING', 'SKILL-TROUBLESHOOTING', 'SKILL-TECH-COMMUNICATION'],
      questions: ["What should become easier in everyday life?", "Which devices and systems are already available?", "Which data may be processed, and what manual fallback will remain?"],
      caution: "Privacy, security and a usable manual fallback are part of the task."
    }
  ];

  const normalize = value => value.toLocaleLowerCase("en-GB").normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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
    if (!response.ok) throw new Error("Community data could not be loaded.");
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
          self_reported: "self-reported",
          community_confirmed: "confirmed by the community",
          externally_verified: "externally verified"
        }[item.verification_status] || item.verification_status
      }));
      communityData = {
        ...staticData,
        members: profiles.map(profile => {
          const stub = memberStubs.get(profile.stable_id) || {};
          return {
            ...stub,
            id: profile.stable_id,
            slug: stub.slug || profile.stable_id.toLocaleLowerCase("en-GB").replace(/^mem-/, ''),
            name: profile.display_name,
            skill_ids: profileSkills.filter(item => item.member_id === profile.stable_id).map(item => item.skill_id),
            evidence_ids: publicEvidence.filter(item => item.member_id === profile.stable_id).map(item => item.id)
          };
        }),
        evidence: publicEvidence
      };
    } catch (error) {
      console.warn("Matching only uses the fixed public base dataset:", error);
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
    return ids.length ? `<div class="skill-cloud">${ids.map(id => `<span class="tag" title="${escapeHtml(id)}">${escapeHtml(skillMap.get(id)?.name || id)}</span>`).join('')}</div>` : "<p>No reliably established skill recognised yet.</p>";
  }

  async function runMatching(text) {
    status.textContent = "Blob is sorting through the situation …";
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
      <details class="matching-reference"><summary>Understand the detection</summary><code>${escapeHtml(situation.id)}</code></details>
      <h3>Detected situation</h3>
      <ul class="question-list">${situation.questions.map(question => `<li>${escapeHtml(question)}</li>`).join('')}</ul>
      ${situation.caution ? `<p class="notice"><strong>Boundary:</strong> ${escapeHtml(situation.caution)}</p>` : ''}
    </article>`).join('') : `<article class="result-block"><span class="status-chip open">unklar</span><h3>The rules don&#39;t recognise this wording yet.</h3><p>Blob doesn&#39;t invent a confident interpretation. Describe the desired result, place, timeframe and important limits in a little more detail.</p></article>`;

    const matches = memberMap.length ? memberMap.map(({ member, requiredHits, helpfulHits, evidence }) => `<article class="result-block match-person">
      <details class="matching-reference"><summary>View profile identifier</summary><code>${escapeHtml(member.id)}</code></details>
      <h3>${escapeHtml(member.name)} could fit</h3>
      <p class="match-score">All skills marked as required here are listed in the public profile — this is not a ranking or a qualification check yet.</p>
      <ul class="match-reasons">
        ${requiredHits.map(id => `<li>required skill: ${escapeHtml(skillMap.get(id)?.name || id)}</li>`).join('')}
        ${helpfulHits.map(id => `<li>helpful skill: ${escapeHtml(skillMap.get(id)?.name || id)}</li>`).join('')}
      </ul>
      ${evidence.length ? `<h4>Existing profile details</h4><ul class="match-reasons">${evidence.map(item => `<li>${escapeHtml(item.title)} · ${escapeHtml(item.verification)}</li>`).join('')}</ul>` : ''}
      <p class="notice"><strong>How reliable is this information?</strong> The existing evidence is assigned to the profile, not yet to individual skills, levels, periods or limits of use. The match is therefore an invitation to check, not proof of reliability or safety.</p>
      <p>A recommendation is not a commitment. Availability, limits and safety questions need to be clarified specifically.</p>
      <a class="button secondary" href="../community/mitglieder/${escapeHtml(member.slug)}/">View profile and evidence</a>
    </article>`).join('') : `<article class="result-block"><span class="status-chip open">no complete match</span><h3>Nobody in the public dataset currently covers all the required skills.</h3><p>A partial match is not presented as a complete recommendation. Later, it could lead to a team, a visible opportunity, a learning pathway or a request to the community.</p></article>`;

    result.innerHTML = `${situationCards}
      <article class="result-block"><h3>Required skills</h3>${renderSkills(analysis.required, skillMap)}<h3>Helpful skills</h3>${renderSkills(analysis.helpful, skillMap)}</article>
      <section><p class="eyebrow">Explainable profiles</p><p>Profiles are not rated or ranked. Their order follows the public dataset.</p>${matches}</section>
      <details class="matching-reference"><summary>View sources and procedure</summary><p class="notice">W01 → Situation → OP-W01; skills presentation under K05; evidence limits as stated above; Blob behaviour under K10. This demo saves nothing and assigns no task.</p></details>`;
    result.hidden = false;
    status.textContent = "Analysis complete. All matches and limits are visible in the result.";
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.dispatchEvent(new CustomEvent('blob:say', { detail: { text: memberMap.length ? "I've found a possible match and even explained it. Suspiciously transparent, I know." : "No suitable person in the public dataset. I won't invent one. That would be efficient, but nonsense.", meta: "Blob · Skills matching" } }));
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
