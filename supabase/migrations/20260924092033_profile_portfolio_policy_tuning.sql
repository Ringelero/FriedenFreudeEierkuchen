-- Keep one SELECT policy per browser role and table. This preserves the
-- exact access model while avoiding repeated permissive policy evaluation.

drop policy profile_fields_public_read on public.profile_fields;
drop policy profile_fields_owner_read on public.profile_fields;

create policy profile_fields_public_read
  on public.profile_fields for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and exists (
      select 1 from public.profiles as owner_profile
      where owner_profile.stable_id = member_id
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy profile_fields_authenticated_read
  on public.profile_fields for select
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    or (
      visibility = 'public'
      and publication_status = 'published'
      and exists (
        select 1 from public.profiles as owner_profile
        where owner_profile.stable_id = member_id
          and owner_profile.visibility = 'public'
          and owner_profile.publication_status = 'published'
          and owner_profile.account_status = 'active'
      )
    )
  );

drop policy profile_skills_public_read on public.profile_skills;
drop policy profile_skills_owner_read on public.profile_skills;

create policy profile_skills_public_read
  on public.profile_skills for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and exists (
      select 1 from public.profiles as owner_profile
      where owner_profile.stable_id = member_id
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy profile_skills_authenticated_read
  on public.profile_skills for select
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    or (
      visibility = 'public'
      and publication_status = 'published'
      and exists (
        select 1 from public.profiles as owner_profile
        where owner_profile.stable_id = member_id
          and owner_profile.visibility = 'public'
          and owner_profile.publication_status = 'published'
          and owner_profile.account_status = 'active'
      )
    )
  );

drop policy skill_evidence_public_read on public.skill_evidence;
drop policy skill_evidence_owner_read on public.skill_evidence;

create policy skill_evidence_public_read
  on public.skill_evidence for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and exists (
      select 1 from public.profiles as owner_profile
      where owner_profile.stable_id = member_id
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy skill_evidence_authenticated_read
  on public.skill_evidence for select
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    or (
      visibility = 'public'
      and publication_status = 'published'
      and exists (
        select 1 from public.profiles as owner_profile
        where owner_profile.stable_id = member_id
          and owner_profile.visibility = 'public'
          and owner_profile.publication_status = 'published'
          and owner_profile.account_status = 'active'
      )
    )
  );

drop policy skill_evidence_links_public_read on public.skill_evidence_links;
drop policy skill_evidence_links_owner_read on public.skill_evidence_links;

create policy skill_evidence_links_public_read
  on public.skill_evidence_links for select
  to anon
  using (
    exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.visibility = 'public'
        and evidence.publication_status = 'published'
    )
  );

create policy skill_evidence_links_authenticated_read
  on public.skill_evidence_links for select
  to authenticated
  using (
    exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and (
          evidence.member_id = (select ffe_private.current_member_id())
          or (
            evidence.visibility = 'public'
            and evidence.publication_status = 'published'
          )
        )
    )
  );

drop policy projects_public_read on public.projects;
drop policy projects_owner_read on public.projects;

create policy projects_public_read
  on public.projects for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and lifecycle_status <> 'archived'
    and exists (
      select 1 from public.profiles as owner_profile
      where owner_profile.stable_id = owner_member_id
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy projects_authenticated_read
  on public.projects for select
  to authenticated
  using (
    owner_member_id = (select ffe_private.current_member_id())
    or (
      visibility = 'public'
      and publication_status = 'published'
      and lifecycle_status <> 'archived'
      and exists (
        select 1 from public.profiles as owner_profile
        where owner_profile.stable_id = owner_member_id
          and owner_profile.visibility = 'public'
          and owner_profile.publication_status = 'published'
          and owner_profile.account_status = 'active'
      )
    )
  );

drop policy project_skills_public_read on public.project_skills;
drop policy project_skills_owner_read on public.project_skills;

create policy project_skills_public_read
  on public.project_skills for select
  to anon
  using (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.visibility = 'public'
        and project.publication_status = 'published'
        and project.lifecycle_status <> 'archived'
    )
  );

create policy project_skills_authenticated_read
  on public.project_skills for select
  to authenticated
  using (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and (
          project.owner_member_id = (select ffe_private.current_member_id())
          or (
            project.visibility = 'public'
            and project.publication_status = 'published'
            and project.lifecycle_status <> 'archived'
          )
        )
    )
  );

drop policy project_evidence_links_public_read on public.project_evidence_links;
drop policy project_evidence_links_owner_read on public.project_evidence_links;

create policy project_evidence_links_public_read
  on public.project_evidence_links for select
  to anon
  using (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.visibility = 'public'
        and project.publication_status = 'published'
        and project.lifecycle_status <> 'archived'
    )
    and exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.visibility = 'public'
        and evidence.publication_status = 'published'
    )
  );

create policy project_evidence_links_authenticated_read
  on public.project_evidence_links for select
  to authenticated
  using (
    (
      exists (
        select 1 from public.projects as project
        where project.id = project_id
          and project.owner_member_id = (select ffe_private.current_member_id())
      )
      and exists (
        select 1 from public.skill_evidence as evidence
        where evidence.id = evidence_id
          and evidence.member_id = (select ffe_private.current_member_id())
      )
    )
    or (
      exists (
        select 1 from public.projects as project
        where project.id = project_id
          and project.visibility = 'public'
          and project.publication_status = 'published'
          and project.lifecycle_status <> 'archived'
      )
      and exists (
        select 1 from public.skill_evidence as evidence
        where evidence.id = evidence_id
          and evidence.visibility = 'public'
          and evidence.publication_status = 'published'
      )
    )
  );
