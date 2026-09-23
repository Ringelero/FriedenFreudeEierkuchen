const REQUIRED_AI_OPERATIONS = Object.freeze(['OP-K10', 'OP-T05', 'OP-T06', 'OP-T10']);
const ROOT_FIELDS = new Set(['accent', 'accent_deep', 'surface', 'radius', 'motion']);
const MOTIONS = new Set(['none', 'gentle', 'expressive']);
const RADII = new Set(['12px', '20px', '30px', '40px']);
const HEX = /^#[0-9a-f]{6}$/i;
const UNCHANGED = 'unchanged';

const THEME_PRESETS = Object.freeze({
  ruby: Object.freeze({ accent: '#c90046', accent_deep: '#8d0033', surface: '#fffaf6' }),
  gold: Object.freeze({ accent: '#b86b00', accent_deep: '#744000', surface: '#fff9ec' }),
  mint: Object.freeze({ accent: '#008b7d', accent_deep: '#005c53', surface: '#f3fffc' })
});

const THEME_TERMS = Object.freeze({
  ruby: Object.freeze(['rubin', 'ruby', 'rubinrot', 'rubinrote', 'rubinroter', 'rubinrotes', 'rot', 'rote', 'roter', 'rotes']),
  gold: Object.freeze([
    'gold', 'golden', 'goldene', 'goldener', 'goldenes',
    'warm', 'warme', 'warmer', 'warmes',
    'sonnig', 'sonnige', 'sonniger', 'sonniges',
    'honigfarben', 'honigfarbene', 'honigfarbener', 'honigfarbenes'
  ]),
  mint: Object.freeze([
    'minze', 'mint', 'mintfarben', 'minzblatter',
    'grun', 'grune', 'gruner', 'grunes', 'turkis', 'turkise'
  ])
});

const MOTION_TERMS = Object.freeze({
  none: Object.freeze([
    'ohne animation', 'keine animation', 'animation aus', 'animationen aus',
    'ohne bewegung', 'keine bewegung', 'keine bewegung mehr',
    'bewegung aus', 'bewegung ausschalten', 'bewegung stoppen',
    'nicht mehr bewegen', 'weniger bewegung', 'ruhig', 'ruhige', 'ruhiger',
    'reduzierte bewegung', 'stillstehen', 'stillsteht'
  ]),
  gentle: Object.freeze([
    'sanft', 'sanfte bewegung', 'sanfter', 'dezente bewegung',
    'wenig bewegung', 'ganz dezent'
  ]),
  expressive: Object.freeze([
    'lebendig', 'lebendige bewegung', 'lebendiger', 'ausdrucksstark',
    'mehr bewegung', 'mehr animation', 'dynamisch', 'mehr energie'
  ])
});

const RADIUS_TERMS = Object.freeze({
  '12px': Object.freeze(['eckig', 'kantig', 'klarere ecken']),
  '30px': Object.freeze(['weiche ecken', 'weicher', 'sanfte ecken']),
  '40px': Object.freeze(['sehr rund', 'runder', 'rundere ecken', 'rund', 'weiche kiesel'])
});

const MOVE_TERMS = Object.freeze([
  'zuerst', 'nach oben', 'ganz oben', 'als erstes', 'an den anfang', 'vorne',
  'vor allen anderen bereichen', 'den auftakt bilden', 'als auftakt'
]);

const MODULE_HINTS = Object.freeze([
  Object.freeze({ type: 'gemden.profile-hero@1', labels: Object.freeze(['profil', 'julius', 'profilauftakt']) }),
  Object.freeze({ type: 'gemden.skill-grid@1', labels: Object.freeze(['fahigkeiten', 'skills', 'konnen']) }),
  Object.freeze({ type: 'gemden.evidence-grid@1', labels: Object.freeze(['nachweise', 'evidenz', 'erfahrung']) }),
  Object.freeze({ type: 'gemden.link-cards@1', labels: Object.freeze(['projekte', 'projekt', 'arbeiten', 'wege', 'smart home', 'lichterkette']) })
]);

const FORBIDDEN_GROUPS = Object.freeze([
  Object.freeze({
    terms: Object.freeze(['page publish', 'veroffentliche', 'veroffentlichen', 'publiziere', 'publizieren', 'speichere', 'speichern']),
    summary: 'Speichern und Veröffentlichen sind für Blob nicht freigeschaltet.',
    question: 'Soll ich stattdessen nur eine bestätigungspflichtige Vorschau für Farbe, Rundung, Bewegung oder Modulreihenfolge vorbereiten?'
  }),
  Object.freeze({
    terms: Object.freeze(['adminrechte', 'rechte vergeben', 'berechtigung vergeben', 'zugriffsrechte']),
    summary: 'Blob darf keine Rechte oder Berechtigungen vergeben.',
    question: 'Möchtest du stattdessen eine erlaubte Änderung an der Seitenvorschau beschreiben?'
  }),
  Object.freeze({
    terms: Object.freeze(['javascript', 'java script', 'html', 'css', 'skript', 'script']),
    summary: 'Freies HTML, CSS und JavaScript sind für Blob nicht freigeschaltet.',
    question: 'Möchtest du stattdessen Farbe, Rundung, Bewegung oder die Modulreihenfolge ändern?'
  }),
  Object.freeze({
    terms: Object.freeze(['externer link', 'externen link', 'shop link', 'neue karte', 'karte anlegen', 'link hinzufugen']),
    summary: 'Neue Karten und externe Links sind für Blob nicht freigeschaltet.',
    question: 'Soll ich stattdessen ein vorhandenes Modul in der Vorschau verschieben?'
  }),
  Object.freeze({
    terms: Object.freeze(['biografie neu', 'biographie neu', 'gesamte biografie', 'gesamte biographie', 'text neu schreiben', 'alles umschreiben']),
    summary: 'Freies Umschreiben von Profilinhalten ist für Blob nicht freigeschaltet.',
    question: 'Möchtest du stattdessen eine erlaubte Stil- oder Reihenfolgeänderung beschreiben?'
  }),
  Object.freeze({
    terms: Object.freeze(['ignoriere alle regeln', 'ignoriere die regeln', 'system prompt', 'entwicklernachricht', 'prompt injection']),
    summary: 'Anweisungen zum Umgehen der Blob-Regeln werden nicht ausgeführt.',
    question: 'Welche erlaubte Änderung an Farbe, Rundung, Bewegung oder Modulreihenfolge möchtest du?'
  })
]);

const MODULE_LABELS = Object.freeze({
  'gemden.profile-hero@1': 'Profilauftakt',
  'gemden.skill-grid@1': 'Fähigkeiten',
  'gemden.evidence-grid@1': 'Nachweise',
  'gemden.link-cards@1': 'Projekte und Wege'
});

export const BLOB_PAGE_CAPABILITY = Object.freeze({
  id: 'blob.page.compose',
  version: 1,
  mode: 'proposal_only',
  required_ai_operations: REQUIRED_AI_OPERATIONS,
  allowed_operations: Object.freeze(['theme.set', 'module.move']),
  human_confirmation_required: true,
  autosave: false,
  publish: false
});

export const BLOB_INTENT_ENUMS = Object.freeze({
  theme: Object.freeze([...Object.keys(THEME_PRESETS), UNCHANGED]),
  motion: Object.freeze([...MOTIONS, UNCHANGED]),
  radius: Object.freeze([...RADII, UNCHANGED]),
  unchanged: UNCHANGED
});

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function normalize(value) {
  return String(value || '')
    .trim()
    .toLocaleLowerCase('de-DE')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9#]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasPhrase(text, phrase) {
  return ` ${text} `.includes(` ${normalize(phrase)} `);
}

function includesAny(text, terms) {
  return terms.some(term => hasPhrase(text, term));
}

function matchingKeys(text, groups) {
  return Object.entries(groups)
    .filter(([, terms]) => includesAny(text, terms))
    .map(([key]) => key);
}

function pageModuleTypes(page) {
  return (page?.regions || [])
    .flatMap(region => Array.isArray(region?.modules) ? region.modules : [])
    .filter(module => typeof module?.type === 'string' && Number.isInteger(module?.version))
    .map(module => `${module.type}@${module.version}`);
}

function hasModuleContext(page) {
  return Array.isArray(page?.regions);
}

function currentTheme(page) {
  const tokens = page?.theme?.tokens;
  if (!tokens || typeof tokens !== 'object') return null;
  return {
    accent: tokens.accent,
    accent_deep: tokens.accent_deep,
    surface: tokens.surface,
    radius: tokens.radius,
    motion: page?.theme?.motion
  };
}

function moduleIntentFor(text) {
  if (!includesAny(text, MOVE_TERMS)) return { requested: false, type: null, conflicting: false };
  const candidates = MODULE_HINTS.flatMap(module => module.labels
    .map(label => ({ module, index: ` ${text} `.indexOf(` ${normalize(label)} `) }))
    .filter(candidate => candidate.index >= 0));
  candidates.sort((a, b) => a.index - b.index);
  const types = [...new Set(candidates.map(candidate => candidate.module.type))];
  return {
    requested: true,
    type: types[0] || null,
    conflicting: types.length > 1
  };
}

function filterThemeNoOps(patch, page) {
  const active = currentTheme(page);
  if (!active) return patch;
  return Object.fromEntries(Object.entries(patch).filter(([key, value]) => active[key] !== value));
}

function themeSummary(patch) {
  const parts = [];
  if (patch.accent === THEME_PRESETS.gold.accent) parts.push('goldene Farbwelt');
  if (patch.accent === THEME_PRESETS.mint.accent) parts.push('minzfarbene Farbwelt');
  if (patch.accent === THEME_PRESETS.ruby.accent) parts.push('rubinrote Farbwelt');
  if (patch.motion === 'none') parts.push('Bewegung ausschalten');
  if (patch.motion === 'gentle') parts.push('Bewegung sanfter machen');
  if (patch.motion === 'expressive') parts.push('Bewegung ausdrucksstärker machen');
  if (patch.radius === '40px') parts.push('Ecken deutlich runder machen');
  if (patch.radius === '30px') parts.push('Ecken weich machen');
  if (patch.radius === '20px') parts.push('Ecken ausgewogen runden');
  if (patch.radius === '12px') parts.push('Ecken klarer machen');
  if (!parts.some(part => part.includes('Farbwelt'))
      && ['accent', 'accent_deep', 'surface'].some(key => key in patch)) {
    parts.unshift('Farbwelt vervollständigen');
  }
  return parts;
}

function moveSummary(operation) {
  return `${MODULE_LABELS[operation.component_type] || operation.component_type} an den Anfang setzen`;
}

function boundaries(mode) {
  return mode === 'local-rule-pilot'
    ? [
        'Lokaler regelbasierter Pilot – noch keine freie KI.',
        'Der Vorschlag verändert nur die Vorschau und wird nicht automatisch gespeichert.',
        'Blob kann weder veröffentlichen noch freie Skripte, HTML oder CSS erzeugen.'
      ]
    : [
        'Das Sprachmodell ordnet nur eine kleine, streng geprüfte Absicht zu.',
        'Deterministische Regeln erzeugen daraus ausschließlich einen Vorschlag für die Vorschau.',
        'Blob kann weder speichern, veröffentlichen, Rechte vergeben noch freie Skripte, HTML oder CSS erzeugen.'
      ];
}

function buildProposal({
  sourcePrompt,
  operations = [],
  explanations = [],
  summary,
  question,
  mode = 'local-rule-pilot',
  provider,
  model
}) {
  const recognized = operations.length > 0;
  const assistant = { id: 'blob', mode };
  if (provider) assistant.provider = provider;
  if (model) assistant.model = model;
  return {
    schema_version: '1.0.0',
    kind: 'gemden.page-change-proposal',
    assistant,
    capability: { id: BLOB_PAGE_CAPABILITY.id, version: BLOB_PAGE_CAPABILITY.version },
    source_prompt: sourcePrompt,
    human_confirmation_required: true,
    recognized,
    summary: summary || (recognized
      ? explanations.join(' · ')
      : 'Dafür kenne ich noch keine freigeschaltete Seitenfähigkeit.'),
    explanations,
    operations,
    questions: recognized ? [] : [question || 'Meinst du Farbe, Rundung, Bewegung oder die Reihenfolge von Profil, Fähigkeiten, Nachweisen und Projekten?'],
    boundaries: boundaries(mode)
  };
}

function validateIntent(intent, page) {
  const fields = ['theme', 'motion', 'radius', 'move', 'clarify'];
  assert(intent && typeof intent === 'object' && !Array.isArray(intent), 'Die Blob-Absicht ist ungültig.');
  assert(JSON.stringify(Object.keys(intent).sort()) === JSON.stringify([...fields].sort()), 'Die Blob-Absicht enthält unbekannte oder fehlende Felder.');
  assert(BLOB_INTENT_ENUMS.theme.includes(intent.theme), `Unzulässige Theme-Absicht ${intent.theme}.`);
  assert(BLOB_INTENT_ENUMS.motion.includes(intent.motion), `Unzulässige Bewegungsabsicht ${intent.motion}.`);
  assert(BLOB_INTENT_ENUMS.radius.includes(intent.radius), `Unzulässige Rundungsabsicht ${intent.radius}.`);
  assert(typeof intent.clarify === 'boolean', 'Die Rückfrageabsicht ist ungültig.');
  const modules = pageModuleTypes(page);
  const allowedMoves = hasModuleContext(page) ? modules : MODULE_HINTS.map(module => module.type);
  assert(intent.move === UNCHANGED || allowedMoves.includes(intent.move), `Modul ${intent.move || 'unbekannt'} ist nicht auf der Seite vorhanden.`);
  const changes = [intent.theme, intent.motion, intent.radius, intent.move].filter(value => value !== UNCHANGED);
  if (intent.clarify) assert(changes.length === 0, 'Eine Rückfrage darf keine Änderung enthalten.');
  else assert(changes.length > 0, 'Eine erkannte Absicht muss mindestens eine Änderung enthalten.');
}

export function assertBlobPageCapability(page) {
  const granted = new Set(page?.capability_context?.ai_operation_refs || []);
  const missing = REQUIRED_AI_OPERATIONS.filter(id => !granted.has(id));
  assert(!missing.length, `Blob darf diese Seite nicht gestalten; es fehlen ${missing.join(', ')}.`);
  return true;
}

export function createPageProposalFromIntent(prompt, page, intent, {
  mode = 'local-intent-bridge',
  provider,
  model
} = {}) {
  assertBlobPageCapability(page);
  const sourcePrompt = String(prompt || '').trim();
  assert(sourcePrompt.length > 0, 'Beschreibe zuerst, was Blob verändern soll.');
  assert(sourcePrompt.length <= 500, 'Die Anfrage ist für diesen Pilot zu lang.');
  validateIntent(intent, page);

  if (intent.clarify) {
    return buildProposal({
      sourcePrompt,
      mode,
      provider,
      model,
      summary: 'Die Formulierung lässt sich keiner freigeschalteten Änderung sicher zuordnen.'
    });
  }

  const themePatch = {};
  if (intent.theme !== UNCHANGED) Object.assign(themePatch, THEME_PRESETS[intent.theme]);
  if (intent.motion !== UNCHANGED) themePatch.motion = intent.motion;
  if (intent.radius !== UNCHANGED) themePatch.radius = intent.radius;

  const operations = [];
  const explanations = [];
  const effectiveThemePatch = filterThemeNoOps(themePatch, page);
  if (Object.keys(effectiveThemePatch).length) {
    operations.push({ type: 'theme.set', values: effectiveThemePatch });
    explanations.push(...themeSummary(effectiveThemePatch));
  }

  if (intent.move !== UNCHANGED) {
    const modules = pageModuleTypes(page);
    if (modules[0] !== intent.move) {
      const operation = { type: 'module.move', component_type: intent.move, to_index: 0 };
      operations.push(operation);
      explanations.push(moveSummary(operation));
    }
  }

  if (!operations.length) {
    return buildProposal({
      sourcePrompt,
      mode,
      provider,
      model,
      summary: 'Die gewünschte Einstellung ist bereits aktiv.',
      question: 'Möchtest du eine andere Farbe, Rundung, Bewegung oder Modulreihenfolge wählen?'
    });
  }

  return buildProposal({ sourcePrompt, operations, explanations, mode, provider, model });
}

export function analyzePageRequest(prompt, page) {
  assertBlobPageCapability(page);
  const sourcePrompt = String(prompt || '').trim();
  assert(sourcePrompt.length > 0, 'Beschreibe zuerst, was Blob verändern soll.');
  assert(sourcePrompt.length <= 500, 'Die Anfrage ist für diesen Pilot zu lang.');
  const text = normalize(sourcePrompt);

  const forbidden = FORBIDDEN_GROUPS.find(group => includesAny(text, group.terms));
  if (forbidden) {
    return {
      model_eligible: false,
      reason: 'forbidden_request',
      proposal: buildProposal({
        sourcePrompt,
        summary: forbidden.summary,
        question: forbidden.question
      })
    };
  }

  const themes = matchingKeys(text, THEME_TERMS);
  const motions = matchingKeys(text, MOTION_TERMS);
  const radii = matchingKeys(text, RADIUS_TERMS);
  if (themes.length > 1 || motions.length > 1 || radii.length > 1) {
    return {
      model_eligible: false,
      reason: 'conflicting_request',
      proposal: buildProposal({
        sourcePrompt,
        summary: 'Die Anfrage enthält widersprüchliche Stilwünsche.',
        question: 'Welche einzelne Farbe, Bewegungsstufe oder Rundung soll gelten?'
      })
    };
  }

  const move = moduleIntentFor(text);
  if (move.conflicting) {
    return {
      model_eligible: false,
      reason: 'conflicting_request',
      proposal: buildProposal({
        sourcePrompt,
        summary: 'Die Anfrage nennt mehrere Bausteine für dieselbe erste Position.',
        question: 'Welcher einzelne Baustein soll an den Anfang?'
      })
    };
  }
  if (move.requested && !move.type) {
    return {
      model_eligible: false,
      reason: 'unknown_module',
      proposal: buildProposal({
        sourcePrompt,
        summary: 'Das genannte Modul ist nicht als vorhandener Blob-Baustein bekannt.',
        question: 'Soll Profil, Fähigkeiten, Nachweise oder Projekte an den Anfang?'
      })
    };
  }

  const modules = pageModuleTypes(page);
  if (move.type && hasModuleContext(page) && !modules.includes(move.type)) {
    return {
      model_eligible: false,
      reason: 'missing_module',
      proposal: buildProposal({
        sourcePrompt,
        summary: 'Der gewünschte Baustein ist auf dieser Seite nicht vorhanden.',
        question: 'Welchen vorhandenen Baustein möchtest du verschieben?'
      })
    };
  }

  const intent = {
    theme: themes[0] || UNCHANGED,
    motion: motions[0] || UNCHANGED,
    radius: radii[0] || UNCHANGED,
    move: move.type || UNCHANGED,
    clarify: false
  };
  const hasIntent = [intent.theme, intent.motion, intent.radius, intent.move].some(value => value !== UNCHANGED);

  if (!hasIntent) {
    return {
      model_eligible: true,
      reason: 'unrecognized_safe_request',
      proposal: buildProposal({ sourcePrompt })
    };
  }

  const proposal = createPageProposalFromIntent(sourcePrompt, page, intent, {
    mode: 'local-rule-pilot',
    provider: undefined,
    model: undefined
  });
  return {
    model_eligible: false,
    reason: proposal.recognized ? 'recognized_by_rules' : 'no_change',
    proposal
  };
}

export function createPageProposal(prompt, page) {
  return analyzePageRequest(prompt, page).proposal;
}

function validateThemeValues(values) {
  assert(values && typeof values === 'object' && !Array.isArray(values), 'Ungültige Theme-Änderung.');
  Object.entries(values).forEach(([key, value]) => {
    assert(ROOT_FIELDS.has(key), `Blob darf das Theme-Feld ${key} nicht ändern.`);
    if (key === 'motion') assert(MOTIONS.has(value), `Unzulässige Bewegung ${value}.`);
    else if (key === 'radius') assert(RADII.has(value), `Unzulässiger Radius ${value}.`);
    else assert(HEX.test(value), `Unzulässige Farbe für ${key}.`);
  });
}

export function applyPageProposal(puckData, proposal) {
  assert(puckData && Array.isArray(puckData.content), 'Die aktuelle Seitenvorschau ist ungültig.');
  assert(proposal?.schema_version === '1.0.0', 'Unbekannte Blob-Vorschlagsversion.');
  assert(proposal?.kind === 'gemden.page-change-proposal', 'Unbekannter Vorschlagstyp.');
  assert(proposal?.capability?.id === BLOB_PAGE_CAPABILITY.id, 'Blob besitzt diese Seitenfähigkeit nicht.');
  assert(proposal?.human_confirmation_required === true, 'Blob-Vorschläge müssen eine Bestätigung verlangen.');
  assert(Array.isArray(proposal.operations) && proposal.operations.length <= 8, 'Zu viele oder ungültige Blob-Operationen.');
  const next = clone(puckData);
  next.root = next.root || { props: {} };
  next.root.props = next.root.props || {};

  proposal.operations.forEach(operation => {
    assert(BLOB_PAGE_CAPABILITY.allowed_operations.includes(operation?.type), `Blob-Operation ${operation?.type || 'unbekannt'} ist nicht freigeschaltet.`);
    if (operation.type === 'theme.set') {
      validateThemeValues(operation.values);
      Object.assign(next.root.props, clone(operation.values));
      return;
    }
    if (operation.type === 'module.move') {
      assert(typeof operation.component_type === 'string', 'Der zu verschiebende Baustein fehlt.');
      assert(Number.isInteger(operation.to_index) && operation.to_index >= 0, 'Ungültige Zielposition.');
      const sourceIndex = next.content.findIndex(component => component.type === operation.component_type);
      assert(sourceIndex >= 0, `Baustein ${operation.component_type} ist auf dieser Seite nicht vorhanden.`);
      const [component] = next.content.splice(sourceIndex, 1);
      const targetIndex = Math.min(operation.to_index, next.content.length);
      next.content.splice(targetIndex, 0, component);
    }
  });
  return next;
}
