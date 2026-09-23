import React, { useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Puck, useGetPuck } from '@puckeditor/core';
import '@puckeditor/core/puck.css';
import './editor.css';
import {
  applyPageProposal,
  createPageProposal,
  createPageProposalFromIntent
} from './blob-assistant.mjs';
import { fromPuckData, toPuckData } from './gemden-adapter.mjs';
import { createPageRevisionStore } from './page-revision-store.mjs';
import { createPuckConfig } from './puck-config.jsx';

const PAGE_SOURCES = Object.freeze({
  'PAGE-MEM-JULIUS': '/assets/data/pages/julius.v1.json'
});

const UNCHANGED = 'unchanged';
const GUIDED_CHOICES = Object.freeze([
  Object.freeze({
    id: 'theme',
    label: 'Farbwelt',
    options: Object.freeze([
      Object.freeze({ label: 'Rubin', value: 'ruby' }),
      Object.freeze({ label: 'Gold', value: 'gold' }),
      Object.freeze({ label: 'Minze', value: 'mint' })
    ])
  }),
  Object.freeze({
    id: 'motion',
    label: 'Bewegung',
    options: Object.freeze([
      Object.freeze({ label: 'Aus', value: 'none' }),
      Object.freeze({ label: 'Sanft', value: 'gentle' }),
      Object.freeze({ label: 'Lebendig', value: 'expressive' })
    ])
  }),
  Object.freeze({
    id: 'radius',
    label: 'Ecken',
    options: Object.freeze([
      Object.freeze({ label: 'Klar', value: '12px' }),
      Object.freeze({ label: 'Ausgewogen', value: '20px' }),
      Object.freeze({ label: 'Weich', value: '30px' }),
      Object.freeze({ label: 'Sehr rund', value: '40px' })
    ])
  }),
  Object.freeze({
    id: 'move',
    label: 'An den Anfang',
    options: Object.freeze([
      Object.freeze({ label: 'Profil', value: 'gemden.profile-hero@1' }),
      Object.freeze({ label: 'Fähigkeiten', value: 'gemden.skill-grid@1' }),
      Object.freeze({ label: 'Nachweise', value: 'gemden.evidence-grid@1' }),
      Object.freeze({ label: 'Projekte', value: 'gemden.link-cards@1' })
    ])
  })
]);

function guidedIntent(field, value) {
  return {
    theme: field === 'theme' ? value : UNCHANGED,
    motion: field === 'motion' ? value : UNCHANGED,
    radius: field === 'radius' ? value : UNCHANGED,
    move: field === 'move' ? value : UNCHANGED,
    clarify: false
  };
}

const GERMAN_DICTIONARY = {
  'header-publish': 'Entwurf sichern',
  'header-undo': 'Rückgängig',
  'header-redo': 'Wiederholen',
  'header-toggle-leftsidebar': 'Bausteine einblenden',
  'header-toggle-rightsidebar': 'Einstellungen einblenden',
  'header-toggle-menubar': 'Menü einblenden',
  'action-selectparent': 'Übergeordneten Bereich wählen',
  'action-duplicate': 'Duplizieren',
  'action-delete': 'Entfernen',
  'label-page': 'Seitendesign',
  'label-component': 'Baustein',
  'outline-empty': 'Noch keine Bausteine',
  'outline-header-title': 'Aufbau',
  'outline-header-collapseall': 'Alle einklappen',
  'outline-item-collapse': 'Einklappen',
  'outline-item-expand': 'Ausklappen',
  'outline-item-duplicate': 'Duplizieren',
  'outline-item-delete': 'Entfernen',
  'drawer-category-collapse': '{title} einklappen',
  'drawer-category-expand': '{title} ausklappen',
  'drawer-category-other': 'Weitere',
  'field-arrayitem-summary': 'Eintrag #{index}',
  'field-arrayitem-duplicate': 'Duplizieren',
  'field-arrayitem-delete': 'Entfernen',
  'plugin-blocks': 'Bausteine',
  'plugin-outline': 'Aufbau',
  'plugin-fields': 'Einstellungen',
  'plugin-components': 'Bausteine',
  'loader-loading': 'Wird geladen'
};

function formatError(error) {
  return error?.message || 'Unbekannter Fehler';
}

function downloadDocument(document) {
  const blob = new Blob([`${JSON.stringify(document, null, 2)}\n`], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = window.document.createElement('a');
  anchor.href = url;
  anchor.download = `${document.id.toLowerCase()}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function fetchJson(url) {
  const response = await fetch(url, { credentials: 'same-origin', headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

async function waitForDeferredScripts() {
  if (document.readyState !== 'loading') return;
  await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));
}

function StatusBar({ status }) {
  return (
    <div className={`editor-status editor-status-${status.kind}`} role="status" aria-live="polite">
      <span aria-hidden="true">{status.kind === 'success' ? '✓' : status.kind === 'error' ? '!' : '◆'}</span>
      <p>{status.message}</p>
    </div>
  );
}

function BlobHeaderActions({ children, buildDocument, setStatus }) {
  const getPuck = useGetPuck();
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [proposal, setProposal] = useState(null);
  const [assistantError, setAssistantError] = useState('');
  const examples = [
    'Gib der Seite eine sonnige, honigfarbene Stimmung.',
    'Mach die Fähigkeiten minzfarben und lass sie schweben.',
    'Nenne die Überschrift der Fähigkeiten „Meine Superkräfte.“',
    'Meine Arbeiten sollen vor allen anderen Bereichen erscheinen.',
    'Bitte keine Bewegung mehr.'
  ];

  function currentPage() {
    return buildDocument(getPuck().appState.data);
  }

  function propose(event) {
    event.preventDefault();
    try {
      const nextProposal = createPageProposal(prompt, currentPage());
      setProposal(nextProposal);
      setAssistantError('');
    } catch (error) {
      setProposal(null);
      setAssistantError(formatError(error));
    }
  }

  function proposeGuided(group, option) {
    try {
      const sourcePrompt = `Direktauswahl: ${group.label} – ${option.label}.`;
      const nextProposal = createPageProposalFromIntent(
        sourcePrompt,
        currentPage(),
        guidedIntent(group.id, option.value),
        { mode: 'local-rule-pilot' }
      );
      setPrompt(sourcePrompt);
      setProposal(nextProposal);
      setAssistantError('');
    } catch (error) {
      setProposal(null);
      setAssistantError(formatError(error));
    }
  }

  function applyProposal() {
    try {
      const puck = getPuck();
      const nextData = applyPageProposal(puck.appState.data, proposal);
      buildDocument(nextData);
      puck.dispatch({ type: 'setData', data: () => nextData });
      setStatus({
        kind: 'success',
        message: 'Blob-Vorschlag in die Vorschau übernommen. Noch nicht gespeichert oder veröffentlicht.'
      });
      setProposal(null);
      setPrompt('');
      setOpen(false);
    } catch (error) {
      setAssistantError(`Vorschlag blockiert: ${formatError(error)}`);
    }
  }

  const panel = open ? createPortal(
    <div className="blob-assistant-layer">
      <aside id="blob-assistant-panel" className="blob-assistant-panel" role="dialog" aria-modal="false" aria-labelledby="blob-assistant-title">
        <header className="blob-assistant-heading">
          <span className="blob-assistant-mark" aria-hidden="true"><i></i><i></i></span>
          <div>
            <p>lokaler Regelassistent</p>
            <h2 id="blob-assistant-title">Blob fragen</h2>
          </div>
          <button className="blob-assistant-close" type="button" aria-label="Blob-Assistent schließen" onClick={() => setOpen(false)}>×</button>
        </header>

        <p className="blob-assistant-intro">Beschreibe die gewünschte Wirkung. Blob darf daraus nur freigeschaltete Seitenoperationen vorschlagen.</p>
        <div className="blob-assistant-examples" aria-label="Beispielanfragen">
          {examples.map(example => (
            <button type="button" key={example} onClick={() => { setPrompt(example); setProposal(null); setAssistantError(''); }}>{example}</button>
          ))}
        </div>

        <form className="blob-assistant-form" onSubmit={propose}>
          <label htmlFor="blob-assistant-prompt">Was soll sich verändern?</label>
          <textarea
            id="blob-assistant-prompt"
            value={prompt}
            maxLength={500}
            rows="3"
            placeholder="Zum Beispiel: Mach die Seite ruhiger und setze die Fähigkeiten nach oben."
            onChange={event => { setPrompt(event.target.value); setProposal(null); setAssistantError(''); }}
          />
          <button className="blob-assistant-primary" type="submit">Vorschlag erstellen</button>
        </form>

        {assistantError && <p className="blob-assistant-error" role="alert">{assistantError}</p>}

        {proposal && (
          <section className={`blob-assistant-proposal ${proposal.recognized ? '' : 'is-question'}`} aria-live="polite">
            <p className="blob-assistant-kicker">Blob schlägt vor</p>
            <h3>{proposal.summary}</h3>
            {proposal.questions.map(question => <p key={question}>{question}</p>)}
            {!proposal.recognized && (
              <div className="blob-assistant-guidance" aria-label="Sichere Direktauswahl">
                <p className="blob-assistant-kicker">Oder direkt auswählen</p>
                {GUIDED_CHOICES.map(group => (
                  <fieldset key={group.id}>
                    <legend>{group.label}</legend>
                    <div>
                      {group.options.map(option => (
                        <button
                          type="button"
                          key={option.value}
                          onClick={() => proposeGuided(group, option)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>
            )}
            {proposal.operations.length > 0 && (
              <ol>
                {proposal.explanations.map(explanation => <li key={explanation}>{explanation}</li>)}
              </ol>
            )}
            <ul className="blob-assistant-boundaries">
              {proposal.boundaries.map(boundary => <li key={boundary}>{boundary}</li>)}
            </ul>
            <div className="blob-assistant-decision">
              <button type="button" className="blob-assistant-primary" disabled={!proposal.recognized} onClick={applyProposal}>Vorschlag anwenden</button>
              <button type="button" onClick={() => setProposal(null)}>Verwerfen</button>
            </div>
          </section>
        )}
      </aside>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div className="editor-header-actions">
        {children}
        <button className="blob-assistant-trigger" type="button" aria-expanded={open} aria-controls="blob-assistant-panel" onClick={() => setOpen(value => !value)}>◆ Blob</button>
        <button type="button" onClick={() => {
          try {
            downloadDocument(buildDocument(getPuck().appState.data));
            setStatus({ kind: 'success', message: 'Geprüftes Seitendokument wurde heruntergeladen.' });
          } catch (error) {
            setStatus({ kind: 'error', message: `Download blockiert: ${formatError(error)}` });
          }
        }}>
          JSON laden
        </button>
        <a href="/community/mitglieder/julius/" target="_blank" rel="noreferrer">Live-Seite ↗</a>
      </div>
      {panel}
    </>
  );
}

function EditorApp({ page, catalog, capabilities, community, revisionStore, initialStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const config = useMemo(() => createPuckConfig(page, catalog, community), [page, catalog, community]);
  const initialData = useMemo(() => toPuckData(page, catalog), [page, catalog]);

  const buildDocument = useCallback(data => {
    const document = fromPuckData(data, page, catalog);
    window.GemDenModules.validatePageDocument(document, catalog, capabilities);
    return document;
  }, [page, catalog, capabilities]);

  async function saveDraft(data) {
    setStatus({ kind: 'info', message: 'Entwurf wird geprüft und gesichert …' });
    try {
      const document = buildDocument(data);
      const result = await revisionStore.save(document);
      setStatus(result.status);
    } catch (error) {
      setStatus({ kind: 'error', message: `Nicht gespeichert: ${formatError(error)}` });
    }
  }

  const HeaderActions = useMemo(() => function HeaderActionsOverride({ children }) {
    return <BlobHeaderActions buildDocument={buildDocument} setStatus={setStatus}>{children}</BlobHeaderActions>;
  }, [buildDocument]);

  return (
    <div className="editor-app">
      <StatusBar status={status} />
      <Puck
        config={config}
        data={initialData}
        onPublish={saveDraft}
        overrides={{ headerActions: HeaderActions }}
        headerTitle="GemDen-Seitenwerkstatt"
        headerPath="Julius · privater Entwurf"
        dictionary={GERMAN_DICTIONARY}
        iframe={{ enabled: true, syncHostStyles: true, waitForStyles: true }}
        viewports={[
          { width: 360, height: 'auto', label: 'Handy', icon: 'Smartphone' },
          { width: 768, height: 'auto', label: 'Tablet', icon: 'Tablet' },
          { width: 1280, height: 'auto', label: 'Desktop', icon: 'Monitor' },
          { width: '100%', height: 'auto', label: 'Volle Breite', icon: 'Monitor' }
        ]}
        height="100dvh"
      />
    </div>
  );
}

function DraftConflict({ conflict, onResolve }) {
  const [error, setError] = useState('');
  const localSavedAt = conflict.localSavedAt
    ? new Date(conflict.localSavedAt).toLocaleString('de-DE')
    : 'Zeitpunkt unbekannt';

  function choose(choice) {
    try {
      onResolve(choice);
    } catch (resolutionError) {
      setError(`Konflikt nicht aufgelöst: ${formatError(resolutionError)}`);
    }
  }

  return (
    <main className="draft-conflict" aria-labelledby="draft-conflict-title">
      <span className="draft-conflict-gem" aria-hidden="true">◆</span>
      <p className="draft-conflict-eyebrow">Entwurfsschutz</p>
      <h1 id="draft-conflict-title">Zwei unterschiedliche Entwürfe gefunden.</h1>
      <p>Ein lokaler Browserentwurf und Server-Revision {conflict.remoteRevisionNumber} gehören zur gleichen Seite, haben aber keine sichere gemeinsame Ausgangsrevision. GemDen überschreibt deshalb keinen der beiden Stände automatisch.</p>
      <div className="draft-conflict-options">
        <section>
          <p className="draft-conflict-eyebrow">Lokal · {localSavedAt}</p>
          <h2>Lokalen Entwurf prüfen</h2>
          <p>Öffnet den lokalen Stand. Erst ein späterer Klick auf „Entwurf sichern“ kann daraus eine neue Serverrevision auf Basis von Revision {conflict.remoteRevisionNumber} machen.</p>
          <button type="button" onClick={() => choose('local')}>Lokalen Entwurf öffnen</button>
        </section>
        <section>
          <p className="draft-conflict-eyebrow">Server · Revision {conflict.remoteRevisionNumber}</p>
          <h2>Serverstand verwenden</h2>
          <p>Öffnet den aktuellen Serverstand. Der bisherige lokale Entwurf bleibt zuvor als Konflikt-Backup in diesem Browser erhalten.</p>
          <button type="button" onClick={() => choose('remote')}>Server-Revision {conflict.remoteRevisionNumber} öffnen</button>
        </section>
      </div>
      <p className="draft-conflict-boundary"><strong>Nicht betroffen:</strong> Die öffentliche Seite bleibt unverändert. Keine Auswahl veröffentlicht etwas.</p>
      {error && <p className="draft-conflict-error" role="alert">{error}</p>}
    </main>
  );
}

function WorkshopApp({ initialLoaded, catalog, capabilities, community, revisionStore }) {
  const [loaded, setLoaded] = useState(initialLoaded);

  function resolveConflict(choice) {
    const resolved = revisionStore.resolveConflict(choice);
    window.GemDenModules.validatePageDocument(resolved.document, catalog, capabilities);
    setLoaded(resolved);
  }

  if (loaded.mode === 'remote-conflict' && loaded.conflict) {
    return <DraftConflict conflict={loaded.conflict} onResolve={resolveConflict} />;
  }

  return (
    <EditorApp
      key={`${loaded.source}-${loaded.document.id}`}
      page={loaded.document}
      catalog={catalog}
      capabilities={capabilities}
      community={community}
      revisionStore={revisionStore}
      initialStatus={loaded.status}
    />
  );
}

function FatalError({ error }) {
  return (
    <main className="editor-fatal">
      <span aria-hidden="true">◆</span>
      <h1>Die Seitenwerkstatt konnte nicht starten.</h1>
      <p>{formatError(error)}</p>
      <a href="/community/mitglieder/julius/">Zur unveränderten Julius-Seite</a>
    </main>
  );
}

async function start() {
  const params = new URLSearchParams(location.search);
  const pageId = params.get('page') || 'PAGE-MEM-JULIUS';
  const pageSource = PAGE_SOURCES[pageId];
  if (!pageSource) throw new Error('Diese PAGE-ID ist für den Piloteditor nicht freigeschaltet.');
  if (!window.GemDenModules) throw new Error('Der GemDen-Vertragsprüfer ist nicht verfügbar.');

  const [publishedPage, catalog, capabilities, community] = await Promise.all([
    fetchJson(pageSource),
    fetchJson('/assets/data/modules.v1.json'),
    fetchJson('/assets/data/capabilities.v1.json'),
    fetchJson('/assets/data/community-v0.1.json')
  ]);
  window.GemDenModules.validateCapabilityCatalog(capabilities);
  window.GemDenModules.validateModuleCatalog(catalog, capabilities);
  window.GemDenModules.validatePageDocument(publishedPage, catalog, capabilities);
  await waitForDeferredScripts();

  const revisionStore = createPageRevisionStore({
    client: window.FFE_SUPABASE_CLIENT || null,
    storage: window.localStorage,
    validateDocument: document => window.GemDenModules.validatePageDocument(document, catalog, capabilities)
  });
  const loaded = await revisionStore.load(publishedPage);
  window.GemDenModules.validatePageDocument(loaded.document, catalog, capabilities);
  createRoot(document.getElementById('editor-root')).render(
    <WorkshopApp
      initialLoaded={loaded}
      catalog={catalog}
      capabilities={capabilities}
      community={community}
      revisionStore={revisionStore}
    />
  );
}

start().catch(error => {
  console.error('GemDen-Seitenwerkstatt:', error);
  createRoot(document.getElementById('editor-root')).render(<FatalError error={error} />);
});
