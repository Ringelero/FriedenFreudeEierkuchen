function requireValue(condition, message) {
  if (!condition) throw new Error(message);
}

async function rows(request) {
  const { data, error } = await request;
  if (error) throw new Error('Dein Portfolio konnte nicht geladen werden. Bitte versuche es erneut.');
  return data || [];
}

export async function loadOwnPortfolio(client, memberId) {
  requireValue(client?.auth?.getUser && client?.from, 'Bitte melde dich im Konto an, um deine eigene Seite zu gestalten.');
  const { data, error } = await client.auth.getUser();
  requireValue(!error && data?.user?.id, 'Bitte melde dich im Konto an, um deine eigene Seite zu gestalten.');
  const profile = await rows(client.from('profiles')
    .select('id,stable_id,display_name,visibility,publication_status,account_status')
    .eq('id', data.user.id).eq('stable_id', memberId).maybeSingle());
  requireValue(profile?.id === data.user.id && profile?.stable_id === memberId && profile?.account_status === 'active',
    'Diese Werkstatt gehört nicht zu deinem aktiven Profil. Öffne deine eigene Seite über das Konto.');

  const [fields, profileSkills, catalog, evidence, projects] = await Promise.all([
    rows(client.from('profile_fields').select('member_id,field_key,value_text,visibility,publication_status,sort_order').eq('member_id', memberId).order('sort_order')),
    rows(client.from('profile_skills').select('member_id,skill_id,statement,boundaries,visibility,publication_status,sort_order').eq('member_id', memberId).order('sort_order')),
    rows(client.from('skills').select('id,name,description,branch,safety_note,lifecycle_status')),
    rows(client.from('skill_evidence').select('stable_id,member_id,evidence_type,verification_status,title,description,source_label,visibility,publication_status,created_at').eq('member_id', memberId).order('created_at')),
    rows(client.from('projects').select('stable_id,owner_member_id,title,summary,role_summary,lifecycle_status,started_on,completed_on,visibility,publication_status,sort_order').eq('owner_member_id', memberId).order('sort_order'))
  ]);
  for (const row of [...fields, ...profileSkills, ...evidence]) {
    requireValue(row.member_id === memberId, 'Das Portfolio enthält einen fremden Eintrag und wird nicht angezeigt.');
  }
  requireValue(projects.every(row => row.owner_member_id === memberId), 'Das Portfolio enthält ein fremdes Projekt und wird nicht angezeigt.');
  const current = items => items.filter(row => ['draft', 'published'].includes(row.publication_status));
  return { profile, fields: current(fields), profileSkills: current(profileSkills), catalog, evidence: current(evidence), projects: current(projects) };
}

export function profileIsPublic(profile) {
  return profile?.visibility === 'public' && profile?.publication_status === 'published' && profile?.account_status === 'active';
}

export function portfolioCounts(portfolio, released = false) {
  const select = items => released ? items.filter(isReleased) : items;
  return {
    fields: select(portfolio.fields).length,
    skills: select(portfolio.profileSkills).length,
    evidence: select(portfolio.evidence).length,
    projects: select(portfolio.projects).length
  };
}

function isReleased(row) {
  return row.visibility === 'public' && row.publication_status === 'published';
}

export function portfolioCommunity(baseCommunity, portfolio, released = false) {
  const select = items => released ? items.filter(isReleased) : items;
  const { profile, catalog } = portfolio;
  const fields = new Map(select(portfolio.fields).map(row => [row.field_key, row.value_text]));
  const skillCatalog = new Map(catalog.map(row => [row.id, row]));
  const skills = select(portfolio.profileSkills).map(row => {
    const skill = skillCatalog.get(row.skill_id);
    requireValue(skill, `Die Fähigkeit ${row.skill_id} konnte nicht zugeordnet werden.`);
    return { id: skill.id, name: skill.name, description: row.statement || skill.description, branch: skill.branch, safety: row.boundaries || skill.safety_note || undefined };
  });
  const evidence = select(portfolio.evidence).map(row => ({
    id: row.stable_id, member_id: row.member_id, type: row.evidence_type,
    title: row.title, description: row.description, source_label: row.source_label || undefined,
    verification: { self_reported: 'self-reported', community_confirmed: 'verified', externally_verified: 'external' }[row.verification_status] || 'self-reported'
  }));
  const projects = select(portfolio.projects).map(row => ({
    id: row.stable_id, member_id: row.owner_member_id, title: row.title, summary: row.summary,
    role_summary: row.role_summary, lifecycle_status: row.lifecycle_status, started_on: row.started_on, completed_on: row.completed_on
  }));
  const member = {
    id: profile.stable_id, slug: profile.stable_id.slice(4).toLowerCase(), name: profile.display_name,
    status: released ? 'publication-gated' : 'private-editor', tagline: fields.get('tagline') || '', bio: fields.get('bio') || '',
    location: fields.get('location') || '', availability_note: fields.get('availability_note') || '',
    dynasty_ids: [], kiez_ids: [], boundaries: (fields.get('boundaries') || '').split(/\n+/).map(line => line.trim()).filter(Boolean),
    skill_ids: skills.map(row => row.id), evidence_ids: evidence.map(row => row.id), project_ids: projects.map(row => row.id)
  };
  // Portfolio text stays in memory. Page documents retain only their original bindings.
  return { ...baseCommunity, members: [member], skills, evidence, projects };
}

export function emptyPortfolio(memberId, displayName) {
  return { profile: { stable_id: memberId, display_name: displayName }, fields: [], profileSkills: [], catalog: [], evidence: [], projects: [] };
}
