import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { portfolioCommunity, portfolioCounts, profileIsPublic } from './editor-portfolio.mjs';

function usePanel(close, modal = false) {
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    ref.current?.focus();
    const editor = document.getElementById('editor-root');
    if (modal) editor.inert = true;
    const escape = event => {
      if (event.key === 'Escape') close();
      if (modal && event.key === 'Tab') {
        const items = ref.current.querySelectorAll('a[href],button:not([disabled]),input,textarea,select,[tabindex="0"]');
        const first = items[0], last = items[items.length - 1];
        if (!items.length) { event.preventDefault(); return; }
        if (event.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || document.activeElement === ref.current)) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('keydown', escape); if (modal) editor.inert = false; previous?.focus(); };
  }, []);
  return ref;
}

export function DesignChooser({ onChoose, onClose, onAdd }) {
  const ref = usePanel(onClose);
  return createPortal(<div className="member-design-layer">
    <aside ref={ref} tabIndex={-1} className="member-design-panel" role="dialog" aria-modal="false" aria-labelledby="member-design-title">
      <header><div><p className="eyebrow">Deine kleine Welt</p><h2 id="member-design-title">Welche Stimmung passt zu dir?</h2></div><button type="button" aria-label="Gestaltungswelten schließen" onClick={onClose}>×</button></header>
      <p>Wähle einen Anfang. Danach kannst du Farben, Motive und Bausteine frei verändern. Deine Texte und Bilder bleiben erhalten.</p>
      <div className="member-design-grid">
        {window.GemDenMemberDesign.PRESETS.map(preset => <button type="button" key={preset.id} onClick={() => onChoose(preset.id)} style={{ '--design-accent': preset.accent, '--design-surface': preset.surface, '--design-radius': preset.radius }}>
          <span className={`member-design-swatch swatch-${preset.visual}`} aria-hidden="true"><i /><i /><i /></span>
          <strong>{preset.title}</strong><span>{preset.description}</span><b>Welt übernehmen →</b>
        </button>)}
      </div>
      <div className="member-design-add"><strong>Platz für deine eigenen Inhalte</strong><div><button type="button" onClick={() => onAdd('gemden.story-block')}>＋ Text hinzufügen</button><button type="button" onClick={() => onAdd('gemden.image-block')}>＋ Bild hinzufügen</button></div></div>
      <p className="member-design-note">Die Auswahl verändert deine Vorschau. Mit „Entwurf sichern“ speicherst du sie; die Freigabe erfolgt im Konto.</p>
      <a href="/konto/">Zum eigenen Konto →</a>
    </aside>
  </div>, document.body);
}

export function PagePreview({ document: page, catalog, community, portfolio, baseCommunity, playground, onRefresh, onClose }) {
  const panel = usePanel(onClose, true);
  const content = useRef(null);
  const [mode, setMode] = useState('own');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const closed = mode === 'visitor' && !profileIsPublic(portfolio.profile);
  const counts = portfolioCounts(portfolio, mode === 'visitor');
  const countLabel = [
    [counts.fields, 'Profilfeld', 'Profilfelder'], [counts.skills, 'Fähigkeit', 'Fähigkeiten'],
    [counts.evidence, 'Nachweis', 'Nachweise'], [counts.projects, 'Projekt', 'Projekte']
  ].map(([count, singular, plural]) => `${count} ${count === 1 ? singular : plural}`).join(' · ');
  useEffect(() => {
    if (closed) return;
    const source = mode === 'visitor' ? portfolioCommunity(baseCommunity, portfolio, true) : community;
    const bindings = window.GemDenModules.resolveBindings(page.bindings, { community: source }, page.data_sources);
    content.current.replaceChildren(window.GemDenModules.renderPage(page, catalog, bindings));
  }, [page, catalog, community, portfolio, baseCommunity, mode, closed]);
  async function refresh() {
    setLoading(true);
    setMessage('Portfolio wird geladen …');
    try { await onRefresh(); setMessage('Portfolio aktualisiert. Deine Gestaltung bleibt erhalten.'); }
    catch (error) { setMessage(error.message || 'Das Portfolio konnte nicht aktualisiert werden.'); }
    finally { setLoading(false); }
  }
  return createPortal(<div className="member-page-preview" ref={panel} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Vorschau deiner Seite">
    <header><strong>Deine Seitenvorschau</strong><span>Entwurfsdesign · noch nicht veröffentlicht</span><button type="button" onClick={onClose}>Zurück zur Werkstatt</button></header>
    {!playground && <section className="member-portfolio-preview" aria-label="Portfolio in der Vorschau">
      <div className="member-preview-switch" role="group" aria-label="Inhalte der Vorschau">
        <button type="button" aria-pressed={mode === 'own'} onClick={() => setMode('own')}>Mein Entwurf</button>
        <button type="button" aria-pressed={mode === 'visitor'} onClick={() => setMode('visitor')}>Besucheransicht</button>
      </div>
      <p>{mode === 'own' ? 'Hier siehst nur du deine Portfolio-Entwürfe und freigegebenen Einträge.' : 'Hier siehst du dein Entwurfsdesign mit den bereits öffentlich freigegebenen Portfolioeinträgen.'}</p>
      <p className="member-portfolio-counts">{countLabel}</p>
      <div className="member-portfolio-tools"><a href="/konto/#portfolio-workspace" target="_blank" rel="noreferrer">Portfolio bearbeiten ↗</a><button type="button" disabled={loading} onClick={refresh}>Portfolio neu laden</button></div>
      <p className="member-preview-message" role="status" aria-live="polite">{message}</p>
    </section>}
    {closed ? <main className="member-preview-closed"><span aria-hidden="true">◆</span><h1>Deine öffentliche Profilseite ist noch geschlossen.</h1><p>Besucher sehen deine Inhalte erst, wenn du das Gesamtprofil im Konto freigibst. Einzelne Einträge und das Seitendesign haben dort ihre eigene Freigabe.</p><a href="/konto/#profile-heading" target="_blank" rel="noreferrer">Freigaben im Konto ansehen ↗</a></main> : <div className="site-shell" ref={content} />}
  </div>, document.body);
}
