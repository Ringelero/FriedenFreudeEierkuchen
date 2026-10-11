import React, { createContext, useContext, useEffect, useRef } from 'react';
import { ImageField } from './image-field.jsx';

const PreviewTheme = createContext(null);
const clone = value => value === undefined ? '' : JSON.parse(JSON.stringify(value));

function createField(field) {
  if (['text', 'textarea'].includes(field.control)) return { type: field.control, label: field.label };
  if (field.control === 'select') return { type: 'select', label: field.label, options: field.options };
  if (field.control === 'image') return { type: 'custom', label: field.label, render: ImageField };
  if (field.control === 'link-list') return {
    type: 'array', label: field.label, min: 0, max: 8,
    getItemSummary: item => item?.title || 'Neue Wegkarte',
    defaultItemProps: { icon: '✨', title: 'Neue Wegkarte', description: '', label: 'Öffnen →', href: '/community/', tone: 'ruby' },
    arrayFields: {
      icon: { type: 'text', label: 'Symbol' }, title: { type: 'text', label: 'Titel' },
      description: { type: 'textarea', label: 'Beschreibung' }, label: { type: 'text', label: 'Linktext' },
      href: { type: 'text', label: 'Interner Pfad' },
      tone: { type: 'select', label: 'Farbton', options: ['ruby', 'gold', 'mint', 'neutral'].map((value, i) => ({ value, label: ['Rubin', 'Gold', 'Minze', 'Neutral'][i] })) }
    }
  };
  throw new Error(`Unbekanntes Editor-Steuerelement ${field.control}.`);
}

function PublicModulePreview({ manifest, props, page, catalog, bindings }) {
  const ref = useRef(null);
  const theme = useContext(PreviewTheme);
  useEffect(() => {
    const instance = {
      id: String(props.id || manifest.type).toLowerCase().replace(/[^a-z0-9-]+/g, '-'), type: manifest.type, version: manifest.version,
      props: clone(manifest.editor.default_props), appearance: clone(manifest.editor.default_appearance),
      bindings: Object.fromEntries(manifest.data_inputs.filter(input => page.bindings[input.name]).map(input => [input.name, input.name]))
    };
    const original = page.regions.flatMap(region => region.modules).find(item => item.type === manifest.type);
    if (original) instance.props = { ...clone(original.props), ...instance.props };
    manifest.editor.fields.forEach(field => {
      const [group, key] = field.target.split('.');
      if (props[field.id] !== undefined) instance[group][key] = clone(props[field.id]);
    });
    const snapshot = { ...page, theme: theme || page.theme, regions: [{ id: 'main', layout: 'flow', modules: [instance] }] };
    try {
      ref.current.replaceChildren(window.GemDenModules.renderPage(snapshot, catalog, bindings));
    } catch (error) {
      ref.current.textContent = `Vorschau: ${error.message}`;
    }
    const preventNavigation = event => { if (event.target.closest('a')) event.preventDefault(); };
    ref.current.addEventListener('click', preventNavigation);
    return () => ref.current?.removeEventListener('click', preventNavigation);
  }, [manifest, props, page, catalog, bindings, theme]);
  return <div ref={ref} className="member-module-preview" />;
}

export function createPuckConfig(page, catalog, community) {
  const bindings = window.GemDenModules.resolveBindings(page.bindings, { community }, page.data_sources);
  const categories = {};
  const components = {};
  catalog.modules.forEach(manifest => {
    const key = `${manifest.type}@${manifest.version}`;
    const fields = {};
    const defaultProps = {};
    manifest.editor.fields.forEach(field => {
      fields[field.id] = createField(field);
      const [group, name] = field.target.split('.');
      defaultProps[field.id] = clone((group === 'props' ? manifest.editor.default_props : manifest.editor.default_appearance)[name]);
    });
    components[key] = {
      label: manifest.title, fields, defaultProps,
      render: props => <PublicModulePreview manifest={manifest} props={props} page={page} catalog={catalog} bindings={bindings} />
    };
    categories[manifest.editor.category] ||= { title: manifest.editor.category_title, components: [], defaultExpanded: true };
    categories[manifest.editor.category].components.push(key);
  });
  return { categories, components, root: {
    label: 'Seitendesign', fields: {
      accent: { type: 'text', label: 'Akzentfarbe (Hex)' }, accent_deep: { type: 'text', label: 'Dunkle Akzentfarbe (Hex)' },
      surface: { type: 'text', label: 'Hintergrund (Hex)' },
      radius: { type: 'select', label: 'Ecken', options: ['12px', '20px', '30px', '40px'].map((value, i) => ({ value, label: ['Klar', 'Weich', 'Rund', 'Sehr rund'][i] })) },
      motion: { type: 'select', label: 'Bewegung', options: ['none', 'gentle', 'expressive'].map((value, i) => ({ value, label: ['Aus', 'Sanft', 'Lebendig'][i] })) }
    },
    render: ({ children, accent, accent_deep, surface, radius, motion, preset }) => <PreviewTheme.Provider value={{ ...page.theme, preset: preset || page.theme.preset, tokens: { accent, accent_deep, surface, radius }, motion }}>
      <main className="gemden-editor-canvas" style={{ backgroundColor: surface }}>{children}</main>
    </PreviewTheme.Provider>
  } };
}
