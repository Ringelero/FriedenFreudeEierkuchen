(function () {
  const root = document.querySelector('[data-gemden-page-root][data-public-member-id], [data-gemden-page-root][data-public-member-query]');
  const client = window.FFE_SUPABASE_CLIENT;
  const modules = window.GemDenModules;
  const memberTemplate = window.GemDenMemberPageTemplate;
  if (!root) return;

  // Prevent the generic renderer from mounting the repository prototype before
  // the publication gate has been checked. The neutral HTML below is the
  // intentional fail-closed fallback for missing JS, API errors and drafts.
  root.removeAttribute('data-gemden-page-root');
  root.dataset.gemdenRenderState = 'closed';
  root.dataset.publicDataSource = 'publication-gate';
  if (!client || !modules) return;

  function resolveMemberId() {
    const queryName = root.dataset.publicMemberQuery;
    const rawValue = root.dataset.publicMemberId
      || (queryName ? new URL(location.href).searchParams.get(queryName) : '');
    try {
      if (memberTemplate?.validateMemberId) return memberTemplate.validateMemberId(rawValue);
      const value = String(rawValue || '').trim();
      return /^MEM-[A-Z0-9][A-Z0-9-]*$/.test(value) ? value : '';
    } catch {
      return '';
    }
  }

  const memberId = resolveMemberId();
  if (!memberId) {
    root.dataset.publicDataSource = 'invalid-member';
    return;
  }
  const communityUrl = new URL(root.dataset.publicCommunityData, document.baseURI);
  const pageDocumentUrl = new URL(root.dataset.pageDocument, document.baseURI);
  const personalizeTemplate = root.dataset.personalizePageTemplate === 'true';
  const originalFetch = window.fetch.bind(window);

  async function query(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data || [];
  }

  function replaceById(items, id, replacement) {
    const next = (items || []).filter(item => item?.id !== id);
    next.push(replacement);
    return next;
  }

  function visibleProfileSource(staticSource, profile, fields, profileSkills, catalog, evidence, projects) {
    const originalMember = (staticSource.members || []).find(member => member.id === memberId) || {
      id: memberId,
      slug: memberId.slice(4).toLowerCase(),
      name: profile.display_name,
      status: 'publication-gated',
      tagline: '',
      bio: '',
      dynasty_ids: [],
      kiez_ids: [],
      skill_ids: [],
      boundaries: [],
      evidence_ids: [],
      project_ids: []
    };

    const fieldMap = new Map(fields.map(field => [field.field_key, field.value_text]));
    const catalogMap = new Map(catalog.map(skill => [skill.id, skill]));
    const skills = profileSkills.map(item => {
      const skill = catalogMap.get(item.skill_id);
      if (!skill) throw new Error(`Öffentliche Fähigkeit ${item.skill_id} fehlt im Katalog.`);
      return {
        id: skill.id,
        name: skill.name,
        description: item.statement || skill.description,
        branch: skill.branch,
        safety: item.boundaries || skill.safety_note || undefined
      };
    });

    const publicEvidence = evidence.map(item => ({
      id: item.stable_id,
      member_id: item.member_id,
      type: item.evidence_type,
      title: item.title,
      description: item.description,
      source_label: item.source_label || undefined,
      verification: {
        self_reported: 'self-reported',
        community_confirmed: 'verified',
        externally_verified: 'external'
      }[item.verification_status] || 'self-reported'
    }));

    const publicProjects = projects.map(item => ({
      id: item.stable_id,
      member_id: item.owner_member_id,
      title: item.title,
      summary: item.summary,
      role_summary: item.role_summary,
      lifecycle_status: item.lifecycle_status,
      started_on: item.started_on,
      completed_on: item.completed_on
    }));

    const publicMember = {
      ...originalMember,
      name: profile.display_name,
      tagline: fieldMap.get('tagline') || '',
      bio: fieldMap.get('bio') || '',
      location: fieldMap.get('location') || '',
      availability_note: fieldMap.get('availability_note') || '',
      boundaries: (fieldMap.get('boundaries') || '').split(/\n+/).map(line => line.trim()).filter(Boolean),
      skill_ids: profileSkills.map(item => item.skill_id),
      evidence_ids: publicEvidence.map(item => item.id),
      project_ids: publicProjects.map(item => item.id)
    };

    return {
      ...staticSource,
      members: replaceById(staticSource.members, memberId, publicMember),
      skills,
      evidence: publicEvidence,
      projects: publicProjects
    };
  }

  async function hydratePublishedProfile() {
    try {
      const profile = await query(client
        .from('profiles')
        .select('stable_id,display_name,visibility,publication_status,account_status')
        .eq('stable_id', memberId)
        .eq('visibility', 'public')
        .eq('publication_status', 'published')
        .eq('account_status', 'active')
        .maybeSingle());
      if (!profile?.stable_id) return;

      const [staticResponse, fields, profileSkills, catalog, evidence, projects] = await Promise.all([
        originalFetch(communityUrl, { credentials: 'same-origin', headers: { Accept: 'application/json' } }),
        query(client.from('profile_fields').select('field_key,value_text,sort_order').eq('member_id', memberId).order('sort_order')),
        query(client.from('profile_skills').select('skill_id,statement,boundaries,sort_order').eq('member_id', memberId).order('sort_order')),
        query(client.from('skills').select('id,name,description,branch,safety_note').eq('lifecycle_status', 'active')),
        query(client.from('skill_evidence').select('stable_id,member_id,evidence_type,verification_status,title,description,source_label,created_at').eq('member_id', memberId).order('created_at')),
        query(client.from('projects').select('stable_id,owner_member_id,title,summary,role_summary,lifecycle_status,started_on,completed_on,sort_order').eq('owner_member_id', memberId).order('sort_order'))
      ]);
      if (!staticResponse.ok) throw new Error('Öffentlicher Rückfall-Datensatz konnte nicht geladen werden.');
      const staticSource = await staticResponse.json();
      const liveSource = visibleProfileSource(staticSource, profile, fields, profileSkills, catalog, evidence, projects);
      let livePage = null;
      if (personalizeTemplate) {
        if (!memberTemplate?.personalizeMemberPageTemplate) {
          throw new Error('Die allgemeine Mitgliederseiten-Vorlage ist nicht verfügbar.');
        }
        const templateResponse = await originalFetch(pageDocumentUrl, {
          credentials: 'same-origin',
          headers: { Accept: 'application/json' }
        });
        if (!templateResponse.ok) throw new Error('Mitgliederseiten-Vorlage konnte nicht geladen werden.');
        livePage = memberTemplate.personalizeMemberPageTemplate(await templateResponse.json(), {
          stableId: memberId,
          displayName: profile.display_name
        });
      }

      const fetchPublishedSource = (url, options) => {
        const target = url instanceof URL ? url : new URL(url, document.baseURI);
        if (target.href === communityUrl.href) {
          return Promise.resolve(new Response(JSON.stringify(liveSource), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }));
        }
        if (livePage && target.href === pageDocumentUrl.href) {
          return Promise.resolve(new Response(JSON.stringify(livePage), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }));
        }
        return originalFetch(url, options);
      };

      const mounted = await modules.mount(root, { fetch: fetchPublishedSource });
      if (mounted) {
        root.dataset.gemdenRenderState = 'ready';
        root.dataset.publicDataSource = 'supabase-published';
        document.title = `${profile.display_name} · Mitglied · GemDen`;
      }
    } catch (error) {
      root.dataset.gemdenRenderState = 'closed';
      root.dataset.publicDataSource = 'publication-gate';
      console.warn('GemDen hält das öffentliche Profil sicher geschlossen:', error);
    }
  }

  hydratePublishedProfile();
})();
