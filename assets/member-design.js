(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.GemDenMemberDesign = Object.freeze(api);
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const MOTIFS = Object.freeze(['ruby-gem', 'garden', 'orbit', 'sunrise']);
  const PRESETS = Object.freeze([
    { id: 'rubingarten', title: 'Rubingarten', description: 'Warm, verspielt und voller kleiner Entdeckungen.', accent: '#b90046', accent_deep: '#810033', surface: '#fff5f4', radius: '30px', motion: 'gentle', visual: 'ruby-gem' },
    { id: 'atelier', title: 'Sonnenatelier', description: 'Viel Licht und Platz für deine Arbeiten.', accent: '#a15b00', accent_deep: '#693d00', surface: '#fff9eb', radius: '20px', motion: 'gentle', visual: 'sunrise', first: 'gemden.project-grid@1' },
    { id: 'garten', title: 'Minzgarten', description: 'Weiche Formen, ruhige Farben, etwas zum Wachsen.', accent: '#007769', accent_deep: '#004e46', surface: '#f1fcf7', radius: '40px', motion: 'none', visual: 'garden' },
    { id: 'sternwarte', title: 'Sternwarte', description: 'Klare Formen für Ideen und neue Verbindungen.', accent: '#405bb1', accent_deep: '#263c7c', surface: '#f4f6ff', radius: '12px', motion: 'gentle', visual: 'orbit' }
  ].map(Object.freeze));
  const MAX_IMAGE_LENGTH = 450000;

  function safeImageSource(value) {
    const source = String(value || '').trim();
    if (!source) return '';
    if (source.length > MAX_IMAGE_LENGTH) throw new Error('Das Bild ist zu groß. Bitte über „Bild auswählen“ verkleinern lassen.');
    if (/^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(source)) return source;
    if (/^\/assets\/[a-zA-Z0-9/_-]+\.(?:png|jpe?g|webp)$/.test(source)) return source;
    throw new Error('Bitte ein JPG-, PNG- oder WebP-Bild auswählen oder einen Bildpfad unter /assets/ verwenden.');
  }

  function applyDesign(puckData, presetId) {
    const preset = PRESETS.find(item => item.id === presetId);
    if (!preset) throw new Error('Diese Gestaltungswelt ist nicht verfügbar.');
    const next = JSON.parse(JSON.stringify(puckData));
    next.root = next.root || { props: {} };
    next.root.props = { ...next.root.props, ...Object.fromEntries(['accent', 'accent_deep', 'surface', 'radius', 'motion'].map(key => [key, preset[key]])), preset: preset.id };
    next.content.forEach(item => {
      if (item.type === 'gemden.profile-hero@1') item.props.visual = preset.visual;
    });
    if (preset.first) {
      const index = next.content.findIndex(item => item.type === preset.first);
      if (index > 0) next.content.splice(0, 0, ...next.content.splice(index, 1));
    }
    return next;
  }

  return { MOTIFS, PRESETS, MAX_IMAGE_LENGTH, safeImageSource, applyDesign };
});
