import React from 'react';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function atTarget(instance, target) {
  const [group, key] = target.split('.');
  return instance[group]?.[key];
}

function moduleKey(manifest) {
  return `${manifest.type}@${manifest.version}`;
}

function selectOptions(field) {
  return (field.options || []).map(option => ({ label: option.label, value: option.value }));
}

function createField(field) {
  if (field.control === 'text') return { type: 'text', label: field.label };
  if (field.control === 'textarea') return { type: 'textarea', label: field.label };
  if (field.control === 'select') return { type: 'select', label: field.label, options: selectOptions(field) };
  if (field.control === 'link-list') {
    return {
      type: 'array',
      label: field.label,
      min: 0,
      max: 8,
      getItemSummary: item => item?.title || 'Neue Wegkarte',
      defaultItemProps: {
        icon: '✨',
        title: 'Neue Wegkarte',
        description: 'Beschreibe, wohin dieser Weg führt.',
        label: 'Öffnen →',
        href: '/community/',
        tone: 'ruby'
      },
      arrayFields: {
        icon: { type: 'text', label: 'Symbol' },
        title: { type: 'text', label: 'Titel' },
        description: { type: 'textarea', label: 'Beschreibung' },
        label: { type: 'text', label: 'Linktext' },
        href: { type: 'text', label: 'Interner Pfad' },
        tone: {
          type: 'select',
          label: 'Farbton',
          options: [
            { label: 'Rubin', value: 'ruby' },
            { label: 'Gold', value: 'gold' },
            { label: 'Minze', value: 'mint' },
            { label: 'Neutral', value: 'neutral' }
          ]
        }
      }
    };
  }
  throw new Error(`Unbekanntes Editor-Steuerelement ${field.control}.`);
}

function dataIndex(page, community) {
  const collections = new Map(
    Object.entries(community)
      .filter(([, items]) => Array.isArray(items))
      .map(([name, items]) => [name, new Map(items.map(item => [item.id, item]))])
  );
  const entity = bindingName => {
    const binding = page.bindings[bindingName];
    if (!binding || binding.kind !== 'entity') return null;
    return collections.get(binding.collection)?.get(binding.id) || null;
  };
  const member = entity('member');
  return {
    member,
    dynasty: entity('dynasty'),
    skills: (member?.skill_ids || []).map(id => collections.get('skills')?.get(id)).filter(Boolean),
    evidence: (member?.evidence_ids || []).map(id => collections.get('evidence')?.get(id)).filter(Boolean),
    projects: (member?.project_ids || []).map(id => collections.get('projects')?.get(id)).filter(Boolean)
  };
}

function ModuleShell({ type, tone, motion, children }) {
  return (
    <section className={`gemden-preview-module tone-${tone || 'neutral'} motion-${motion || 'none'}`} data-preview-type={type}>
      {children}
    </section>
  );
}

function ProfileHero({ props, data, type }) {
  return (
    <ModuleShell type={type} tone={props.tone} motion={props.motion}>
      <div className="preview-hero-copy">
        <p className="preview-eyebrow">{props.eyebrow}</p>
        <h1>{data.member?.name || 'Mitglied'}</h1>
        <p className="preview-lead">{data.member?.tagline || data.member?.bio || 'Hier entsteht eine persönliche GemDen-Seite.'}</p>
        <div className="preview-chips">
          {data.member?.id && <span>{data.member.id}</span>}
          {data.dynasty?.name && <span>{data.dynasty.name}</span>}
        </div>
      </div>
      <div className="preview-gem" role="img" aria-label={props.visual_label || 'Profilmotiv'}>◆</div>
    </ModuleShell>
  );
}

function SkillGrid({ props, data, type }) {
  return (
    <ModuleShell type={type} tone={props.tone} motion={props.motion}>
      <p className="preview-eyebrow">{props.eyebrow}</p>
      <h2>{props.title}</h2>
      <p className="preview-intro">{props.intro}</p>
      <div className="preview-card-grid">
        {data.skills.map(skill => (
          <article className="preview-card" key={skill.id}>
            <strong>{skill.name}</strong>
            <p>{skill.description}</p>
            <small>{skill.id}</small>
          </article>
        ))}
      </div>
    </ModuleShell>
  );
}

function EvidenceGrid({ props, data, type }) {
  return (
    <ModuleShell type={type} tone={props.tone} motion={props.motion}>
      <p className="preview-eyebrow">{props.eyebrow}</p>
      <h2>{props.title}</h2>
      <div className="preview-card-grid">
        {data.evidence.map(item => (
          <article className="preview-card" key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.summary || item.description}</p>
            <small>{item.id}</small>
          </article>
        ))}
      </div>
      <p className="preview-boundary"><strong>Grenze:</strong> {props.boundary}</p>
    </ModuleShell>
  );
}

function LinkCards({ props, type }) {
  return (
    <ModuleShell type={type} tone={props.tone} motion={props.motion}>
      <p className="preview-eyebrow">{props.eyebrow}</p>
      <h2>{props.title}</h2>
      <div className="preview-card-grid">
        {(props.items || []).map((item, index) => (
          <article className={`preview-card link-tone-${item.tone || 'neutral'}`} key={`${item.href}-${index}`}>
            <span className="preview-icon" aria-hidden="true">{item.icon}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <span className="preview-link">{item.label}</span>
          </article>
        ))}
      </div>
    </ModuleShell>
  );
}

function ProjectGrid({ props, data, type }) {
  return (
    <ModuleShell type={type} tone={props.tone} motion={props.motion}>
      <p className="preview-eyebrow">{props.eyebrow}</p>
      <h2>{props.title}</h2>
      <p className="preview-intro">{props.intro}</p>
      <div className="preview-card-grid">
        {data.projects.map(project => (
          <article className="preview-card" key={project.id}>
            <strong>{project.title}</strong>
            <p>{project.summary}</p>
            {project.role_summary && <p>Meine Rolle: {project.role_summary}</p>}
            <small>{project.id}</small>
          </article>
        ))}
      </div>
    </ModuleShell>
  );
}

function renderModule(type, props, data) {
  if (type === 'gemden.profile-hero') return <ProfileHero props={props} data={data} type={type} />;
  if (type === 'gemden.skill-grid') return <SkillGrid props={props} data={data} type={type} />;
  if (type === 'gemden.evidence-grid') return <EvidenceGrid props={props} data={data} type={type} />;
  if (type === 'gemden.project-grid') return <ProjectGrid props={props} data={data} type={type} />;
  if (type === 'gemden.link-cards') return <LinkCards props={props} type={type} />;
  return <ModuleShell type={type} tone={props.tone} motion={props.motion}><p>Vorschau für {type}</p></ModuleShell>;
}

export function createPuckConfig(page, catalog, community) {
  const data = dataIndex(page, community);
  const categories = {};
  const components = {};

  catalog.modules.forEach(manifest => {
    const componentName = moduleKey(manifest);
    const fields = {};
    const defaultInstance = {
      props: clone(manifest.editor.default_props),
      appearance: clone(manifest.editor.default_appearance)
    };
    const defaultProps = {};
    manifest.editor.fields.forEach(field => {
      fields[field.id] = createField(field);
      defaultProps[field.id] = clone(atTarget(defaultInstance, field.target));
    });
    components[componentName] = {
      label: manifest.title,
      fields,
      defaultProps,
      render: props => renderModule(manifest.type, props, data)
    };
    const category = categories[manifest.editor.category] || {
      title: manifest.editor.category_title,
      components: [],
      defaultExpanded: true
    };
    category.components.push(componentName);
    categories[manifest.editor.category] = category;
  });

  return {
    categories,
    components,
    root: {
      label: 'Seitendesign',
      fields: {
        accent: { type: 'text', label: 'Akzentfarbe (Hex)' },
        accent_deep: { type: 'text', label: 'Dunkle Akzentfarbe (Hex)' },
        surface: { type: 'text', label: 'Flächenfarbe (Hex)' },
        radius: {
          type: 'select',
          label: 'Ecken',
          options: [
            { label: 'Klar · 12 px', value: '12px' },
            { label: 'Weich · 20 px', value: '20px' },
            { label: 'Rund · 30 px', value: '30px' },
            { label: 'Sehr rund · 40 px', value: '40px' }
          ]
        },
        motion: {
          type: 'select',
          label: 'Bewegungsprofil',
          options: [
            { label: 'Keine Bewegung', value: 'none' },
            { label: 'Sanft', value: 'gentle' },
            { label: 'Ausdrucksstark', value: 'expressive' }
          ]
        }
      },
      render: ({ children, accent, accent_deep, surface, radius, motion }) => (
        <main
          className={`gemden-editor-canvas theme-motion-${motion || 'none'}`}
          style={{
            '--editor-accent': accent,
            '--editor-accent-deep': accent_deep,
            '--editor-surface': surface,
            '--editor-radius': radius
          }}
        >
          {children}
        </main>
      )
    }
  };
}
