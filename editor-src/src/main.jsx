import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Puck } from '@puckeditor/core';
import '@puckeditor/core/puck.css';
import './editor.css';
import { createLocalDraft, editorStorageKey, fromPuckData, toPuckData } from './gemden-adapter.mjs';
import { createPuckConfig } from './puck-config.jsx';

const PAGE_SOURCES = Object.freeze({
  'PAGE-MEM-JULIUS': '/assets/data/pages/julius.v1.json'
});

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

function loadLocalDocument(page) {
  try {
    const raw = localStorage.getItem(editorStorageKey(page.id));
    if (!raw) return page;
    const envelope = JSON.parse(raw);
    if (envelope?.format !== 'gemden-local-draft' || envelope?.version !== 1 || envelope?.page_id !== page.id) return page;
    return envelope.document;
  } catch (error) {
    console.warn('Lokaler GemDen-Entwurf konnte nicht geladen werden:', error);
    return page;
  }
}

function StatusBar({ status }) {
  return (
    <div className={`editor-status editor-status-${status.kind}`} role="status" aria-live="polite">
      <span aria-hidden="true">{status.kind === 'success' ? '✓' : status.kind === 'error' ? '!' : '◆'}</span>
      <p>{status.message}</p>
    </div>
  );
}

function EditorApp({ page, catalog, capabilities, community, restoredLocal }) {
  const [status, setStatus] = useState({
    kind: restoredLocal ? 'info' : 'info',
    message: restoredLocal
      ? 'Lokaler Entwurf wiederhergestellt. Noch nichts wurde veröffentlicht.'
      : 'Werkstatt bereit. Änderungen werden erst nach „Entwurf sichern“ gespeichert.'
  });
  const config = useMemo(() => createPuckConfig(page, catalog, community), [page, catalog, community]);
  const initialData = useMemo(() => toPuckData(page, catalog), [page, catalog]);

  function buildDocument(data) {
    const document = fromPuckData(data, page, catalog);
    window.GemDenModules.validatePageDocument(document, catalog, capabilities);
    return document;
  }

  async function saveDraft(data) {
    setStatus({ kind: 'info', message: 'Entwurf wird geprüft und gesichert …' });
    try {
      const document = buildDocument(data);
      const localDraft = createLocalDraft(document);
      localStorage.setItem(editorStorageKey(document.id), JSON.stringify(localDraft));
      setStatus({ kind: 'success', message: 'Lokal in diesem Browser gesichert. Es wurde nichts veröffentlicht.' });
    } catch (error) {
      setStatus({ kind: 'error', message: `Nicht gespeichert: ${formatError(error)}` });
    }
  }

  function HeaderActions({ state }) {
    return (
      <div className="editor-header-actions">
        <button type="button" onClick={() => {
          try {
            downloadDocument(buildDocument(state.data));
            setStatus({ kind: 'success', message: 'Geprüftes Seitendokument wurde heruntergeladen.' });
          } catch (error) {
            setStatus({ kind: 'error', message: `Download blockiert: ${formatError(error)}` });
          }
        }}>
          JSON laden
        </button>
        <a href="/community/mitglieder/julius/" target="_blank" rel="noreferrer">Live-Seite ↗</a>
      </div>
    );
  }

  return (
    <div className="editor-app">
      <StatusBar status={status} />
      <Puck
        config={config}
        data={initialData}
        onPublish={saveDraft}
        renderHeaderActions={HeaderActions}
        headerTitle="GemDen-Seitenwerkstatt"
        headerPath="Julius · lokaler Pilot"
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

  const page = loadLocalDocument(publishedPage);
  const restoredLocal = JSON.stringify(page) !== JSON.stringify(publishedPage);
  window.GemDenModules.validatePageDocument(page, catalog, capabilities);
  createRoot(document.getElementById('editor-root')).render(
    <EditorApp
      page={page}
      catalog={catalog}
      capabilities={capabilities}
      community={community}
      restoredLocal={restoredLocal}
    />
  );
}

start().catch(error => {
  console.error('GemDen-Seitenwerkstatt:', error);
  createRoot(document.getElementById('editor-root')).render(<FatalError error={error} />);
});
