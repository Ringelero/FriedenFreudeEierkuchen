(function () {
  const root = document.querySelector('[data-gemden-page-root][data-public-member-id]');
  const client = window.FFE_SUPABASE_CLIENT;
  const modules = window.GemDenModules;
  if (!root || !client || !modules) return;

  const memberId = root.dataset.publicMemberId;
  const communityUrl = new URL(root.dataset.publicCommunityData, document.baseURI);
  const originalFetch = window.fetch.bind(window);
  let attempted = false;

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

  function visibleProfileSource(staticSource, profile, fields, profileSkills, catalog, evidence) {
    const originalMember = (staticSource.members || []).find(member => member.id === memberId);
    if (!originalMember) throw new Error('Statisches Mitglied für den sicheren Rückfallweg fehlt.');

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
      verification: {
        self_reported: 'self-reported',
        community_confirmed: 'verified',
        externally_verified: 'external'
      }[item.verification_status] || 'self-reported'
    }));

    const publicMember = {
      ...originalMember,
      name: profile.display_name,
      bio: fieldMap.get('bio') || fieldMap.get('tagline') || '',
      boundaries: (fieldMap.get('boundaries') || '').split(/\n+/).map(line => line.trim()).filter(Boolean),
      skill_ids: profileSkills.map(item => item.skill_id),
      evidence_ids: publicEvidence.map(item => item.id)
    };

    return {
      ...staticSource,
      members: replaceById(staticSource.members, memberId, publicMember),
      skills,
      evidence: publicEvidence
    };
  }

  async function hydratePublishedProfile() {
    if (attempted) return;
    attempted = true;
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

      const [staticResponse, fields, profileSkills, catalog, evidence] = await Promise.all([
        originalFetch(communityUrl, { credentials: 'same-origin', headers: { Accept: 'application/json' } }),
        query(client.from('profile_fields').select('field_key,value_text,sort_order').eq('member_id', memberId).order('sort_order')),
        query(client.from('profile_skills').select('skill_id,statement,boundaries,sort_order').eq('member_id', memberId).order('sort_order')),
        query(client.from('skills').select('id,name,description,branch,safety_note').eq('lifecycle_status', 'active')),
        query(client.from('skill_evidence').select('stable_id,member_id,evidence_type,verification_status,title,description,created_at').eq('member_id', memberId).order('created_at'))
      ]);
      if (!staticResponse.ok) throw new Error('Öffentlicher Rückfall-Datensatz konnte nicht geladen werden.');
      const staticSource = await staticResponse.json();
      const liveSource = visibleProfileSource(staticSource, profile, fields, profileSkills, catalog, evidence);

      const fetchPublishedSource = (url, options) => {
        const target = url instanceof URL ? url : new URL(url, document.baseURI);
        if (target.href === communityUrl.href) {
          return Promise.resolve(new Response(JSON.stringify(liveSource), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }));
        }
        return originalFetch(url, options);
      };

      const mounted = await modules.mount(root, { fetch: fetchPublishedSource });
      if (mounted) root.dataset.publicDataSource = 'supabase-published';
    } catch (error) {
      console.warn('GemDen nutzt für das Profil weiterhin den statischen Rückfallweg:', error);
    }
  }

  window.addEventListener('gemden:page-ready', hydratePublishedProfile);
  if (root.dataset.gemdenRenderState === 'ready') hydratePublishedProfile();
})();
