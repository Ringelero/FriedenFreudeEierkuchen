-- Structured profile and portfolio core for GemDen / FFE.
--
-- Browser users may manage only their own draft rows. Public reads require
-- an explicitly published row and a public, published, active owner profile.
-- Publishing is deliberately not implemented in this migration.

create table public.skills (
  id text primary key,
  name text not null,
  description text not null default '',
  branch text not null,
  safety_note text,
  lifecycle_status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint skills_id_format check (id ~ '^SKILL-[A-Z0-9][A-Z0-9-]*$'),
  constraint skills_name_length check (
    char_length(btrim(name)) between 1 and 160
  ),
  constraint skills_description_length check (char_length(description) <= 4000),
  constraint skills_branch_format check (branch ~ '^[A-Z][A-Z0-9-]{1,39}$'),
  constraint skills_safety_note_length check (
    safety_note is null or char_length(safety_note) <= 2000
  ),
  constraint skills_lifecycle_status_values check (
    lifecycle_status in ('active', 'archived')
  )
);

comment on table public.skills is
  'Generic capability catalog. A catalog entry is not a ranking, credential or permission.';

create table public.profile_fields (
  member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  field_key text not null,
  value_text text not null default '',
  visibility text not null default 'private',
  publication_status text not null default 'draft',
  sort_order smallint not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (member_id, field_key),
  constraint profile_fields_key_format check (
    field_key ~ '^[a-z][a-z0-9_]{0,49}$'
  ),
  constraint profile_fields_value_length check (char_length(value_text) <= 8000),
  constraint profile_fields_visibility_values check (
    visibility in ('public', 'members', 'private')
  ),
  constraint profile_fields_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  ),
  constraint profile_fields_sort_order_range check (sort_order between 0 and 32767)
);

comment on table public.profile_fields is
  'Individually visible profile fields. Browser writes remain drafts until a separate publish path exists.';

create table public.profile_skills (
  id uuid primary key default gen_random_uuid(),
  member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  skill_id text not null references public.skills (id)
    on update cascade on delete restrict,
  statement text not null default '',
  boundaries text not null default '',
  self_assessed_stage text,
  intent text not null default 'portfolio',
  visibility text not null default 'private',
  publication_status text not null default 'draft',
  sort_order smallint not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (member_id, skill_id),
  constraint profile_skills_statement_length check (char_length(statement) <= 4000),
  constraint profile_skills_boundaries_length check (char_length(boundaries) <= 4000),
  constraint profile_skills_stage_values check (
    self_assessed_stage is null
    or self_assessed_stage in ('learning', 'practicing', 'independent', 'mentor')
  ),
  constraint profile_skills_intent_values check (
    intent in ('portfolio', 'offer', 'learn', 'teach', 'collaborate')
  ),
  constraint profile_skills_visibility_values check (
    visibility in ('public', 'members', 'private')
  ),
  constraint profile_skills_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  ),
  constraint profile_skills_sort_order_range check (sort_order between 0 and 32767)
);

comment on table public.profile_skills is
  'A member-owned contextual use of a generic skill. Stages are optional self-descriptions, not platform rankings.';

create table public.skill_evidence (
  id uuid primary key default gen_random_uuid(),
  stable_id text not null unique default (
    'EVID-' || upper(replace(gen_random_uuid()::text, '-', ''))
  ),
  member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  evidence_type text not null default 'other',
  verification_status text not null default 'self_reported',
  title text not null,
  description text not null default '',
  source_label text,
  source_url text,
  occurred_from date,
  occurred_until date,
  visibility text not null default 'private',
  publication_status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint skill_evidence_stable_id_format check (
    stable_id ~ '^EVID-[A-Z0-9][A-Z0-9-]*$'
  ),
  constraint skill_evidence_type_values check (
    evidence_type in (
      'work_experience', 'project', 'qualification', 'work_sample',
      'assessment', 'reference', 'other'
    )
  ),
  constraint skill_evidence_verification_values check (
    verification_status in ('self_reported', 'community_confirmed', 'externally_verified')
  ),
  constraint skill_evidence_title_length check (
    char_length(btrim(title)) between 1 and 200
  ),
  constraint skill_evidence_description_length check (char_length(description) <= 8000),
  constraint skill_evidence_source_label_length check (
    source_label is null or char_length(source_label) <= 200
  ),
  constraint skill_evidence_source_url_length check (
    source_url is null or char_length(source_url) <= 2048
  ),
  constraint skill_evidence_date_order check (
    occurred_from is null or occurred_until is null or occurred_until >= occurred_from
  ),
  constraint skill_evidence_visibility_values check (
    visibility in ('public', 'members', 'private')
  ),
  constraint skill_evidence_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  )
);

comment on table public.skill_evidence is
  'Member-owned evidence with an explicit verification state. Self-reported evidence is never presented as externally verified.';

create table public.skill_evidence_links (
  evidence_id uuid not null references public.skill_evidence (id) on delete cascade,
  skill_id text not null references public.skills (id)
    on update cascade on delete restrict,
  created_at timestamptz not null default now(),
  primary key (evidence_id, skill_id)
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  stable_id text not null unique default (
    'PROJECT-' || upper(replace(gen_random_uuid()::text, '-', ''))
  ),
  owner_member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  title text not null,
  summary text not null default '',
  role_summary text not null default '',
  lifecycle_status text not null default 'idea',
  started_on date,
  completed_on date,
  visibility text not null default 'private',
  publication_status text not null default 'draft',
  sort_order smallint not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_stable_id_format check (
    stable_id ~ '^PROJECT-[A-Z0-9][A-Z0-9-]*$'
  ),
  constraint projects_title_length check (
    char_length(btrim(title)) between 1 and 200
  ),
  constraint projects_summary_length check (char_length(summary) <= 8000),
  constraint projects_role_summary_length check (char_length(role_summary) <= 4000),
  constraint projects_lifecycle_status_values check (
    lifecycle_status in ('idea', 'active', 'paused', 'completed', 'archived')
  ),
  constraint projects_date_order check (
    started_on is null or completed_on is null or completed_on >= started_on
  ),
  constraint projects_visibility_values check (
    visibility in ('public', 'members', 'private')
  ),
  constraint projects_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  ),
  constraint projects_sort_order_range check (sort_order between 0 and 32767)
);

comment on table public.projects is
  'Portfolio projects owned by a stable member identity. Contributions by additional members are a later explicit contract.';

create table public.project_skills (
  project_id uuid not null references public.projects (id) on delete cascade,
  skill_id text not null references public.skills (id)
    on update cascade on delete restrict,
  relation_type text not null default 'used',
  created_at timestamptz not null default now(),
  primary key (project_id, skill_id),
  constraint project_skills_relation_type_values check (
    relation_type in ('used', 'learned', 'needed')
  )
);

create table public.project_evidence_links (
  project_id uuid not null references public.projects (id) on delete cascade,
  evidence_id uuid not null references public.skill_evidence (id) on delete cascade,
  relation_type text not null default 'result',
  created_at timestamptz not null default now(),
  primary key (project_id, evidence_id),
  constraint project_evidence_relation_type_values check (
    relation_type in ('result', 'process', 'reference')
  )
);

create index profile_fields_public_lookup
  on public.profile_fields (member_id, sort_order)
  where visibility = 'public' and publication_status = 'published';

create index profile_skills_skill_lookup
  on public.profile_skills (skill_id, member_id);

create index profile_skills_public_lookup
  on public.profile_skills (member_id, sort_order)
  where visibility = 'public' and publication_status = 'published';

create index skill_evidence_member_lookup
  on public.skill_evidence (member_id, created_at desc);

create index skill_evidence_public_lookup
  on public.skill_evidence (member_id, created_at desc)
  where visibility = 'public' and publication_status = 'published';

create index skill_evidence_links_skill_lookup
  on public.skill_evidence_links (skill_id, evidence_id);

create index projects_owner_lookup
  on public.projects (owner_member_id, sort_order);

create index projects_public_lookup
  on public.projects (owner_member_id, sort_order)
  where visibility = 'public' and publication_status = 'published';

create index project_skills_skill_lookup
  on public.project_skills (skill_id, project_id);

create index project_evidence_links_evidence_lookup
  on public.project_evidence_links (evidence_id, project_id);

create or replace function ffe_private.current_member_id()
returns text
language sql
stable
security invoker
set search_path = ''
as $$
  select profile.stable_id
  from public.profiles as profile
  where profile.id = (select auth.uid())
    and profile.account_status = 'active'
    and profile.stable_id is not null;
$$;

comment on function ffe_private.current_member_id() is
  'Returns the stable member ID visible to the current session. It does not bypass profile RLS.';

revoke all on function ffe_private.current_member_id() from public, anon, authenticated;
grant execute on function ffe_private.current_member_id() to authenticated, service_role;

create or replace function ffe_private.touch_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

revoke all on function ffe_private.touch_updated_at() from public, anon, authenticated;

create trigger skills_touch_updated_at
  before update on public.skills
  for each row execute function ffe_private.touch_updated_at();

create trigger profile_fields_touch_publishable
  before insert or update on public.profile_fields
  for each row execute function ffe_private.touch_publishable_row();

create trigger profile_skills_touch_publishable
  before insert or update on public.profile_skills
  for each row execute function ffe_private.touch_publishable_row();

create trigger skill_evidence_touch_publishable
  before insert or update on public.skill_evidence
  for each row execute function ffe_private.touch_publishable_row();

create trigger projects_touch_publishable
  before insert or update on public.projects
  for each row execute function ffe_private.touch_publishable_row();

alter table public.skills enable row level security;
alter table public.profile_fields enable row level security;
alter table public.profile_skills enable row level security;
alter table public.skill_evidence enable row level security;
alter table public.skill_evidence_links enable row level security;
alter table public.projects enable row level security;
alter table public.project_skills enable row level security;
alter table public.project_evidence_links enable row level security;

revoke all on table public.skills from public, anon, authenticated, service_role;
revoke all on table public.profile_fields from public, anon, authenticated, service_role;
revoke all on table public.profile_skills from public, anon, authenticated, service_role;
revoke all on table public.skill_evidence from public, anon, authenticated, service_role;
revoke all on table public.skill_evidence_links from public, anon, authenticated, service_role;
revoke all on table public.projects from public, anon, authenticated, service_role;
revoke all on table public.project_skills from public, anon, authenticated, service_role;
revoke all on table public.project_evidence_links from public, anon, authenticated, service_role;

grant select on table public.skills to anon, authenticated;
grant select on table public.profile_fields to anon, authenticated;
grant select on table public.profile_skills to anon, authenticated;
grant select on table public.skill_evidence to anon, authenticated;
grant select on table public.skill_evidence_links to anon, authenticated;
grant select on table public.projects to anon, authenticated;
grant select on table public.project_skills to anon, authenticated;
grant select on table public.project_evidence_links to anon, authenticated;

grant insert, update, delete on table public.profile_fields to authenticated;
grant insert, update, delete on table public.profile_skills to authenticated;
grant insert, update, delete on table public.skill_evidence to authenticated;
grant insert, delete on table public.skill_evidence_links to authenticated;
grant insert, update, delete on table public.projects to authenticated;
grant insert, delete on table public.project_skills to authenticated;
grant insert, delete on table public.project_evidence_links to authenticated;

grant all on table public.skills to service_role;
grant all on table public.profile_fields to service_role;
grant all on table public.profile_skills to service_role;
grant all on table public.skill_evidence to service_role;
grant all on table public.skill_evidence_links to service_role;
grant all on table public.projects to service_role;
grant all on table public.project_skills to service_role;
grant all on table public.project_evidence_links to service_role;

create policy skills_public_read
  on public.skills for select
  to anon, authenticated
  using (lifecycle_status = 'active');

create policy profile_fields_public_read
  on public.profile_fields for select
  to anon, authenticated
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

create policy profile_fields_owner_read
  on public.profile_fields for select
  to authenticated
  using (member_id = (select ffe_private.current_member_id()));

create policy profile_fields_owner_insert_draft
  on public.profile_fields for insert
  to authenticated
  with check (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy profile_fields_owner_update_draft
  on public.profile_fields for update
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  )
  with check (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy profile_fields_owner_delete_draft
  on public.profile_fields for delete
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy profile_skills_public_read
  on public.profile_skills for select
  to anon, authenticated
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

create policy profile_skills_owner_read
  on public.profile_skills for select
  to authenticated
  using (member_id = (select ffe_private.current_member_id()));

create policy profile_skills_owner_insert_draft
  on public.profile_skills for insert
  to authenticated
  with check (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy profile_skills_owner_update_draft
  on public.profile_skills for update
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  )
  with check (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy profile_skills_owner_delete_draft
  on public.profile_skills for delete
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy skill_evidence_public_read
  on public.skill_evidence for select
  to anon, authenticated
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

create policy skill_evidence_owner_read
  on public.skill_evidence for select
  to authenticated
  using (member_id = (select ffe_private.current_member_id()));

create policy skill_evidence_owner_insert_draft
  on public.skill_evidence for insert
  to authenticated
  with check (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy skill_evidence_owner_update_draft
  on public.skill_evidence for update
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  )
  with check (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy skill_evidence_owner_delete_draft
  on public.skill_evidence for delete
  to authenticated
  using (
    member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy skill_evidence_links_public_read
  on public.skill_evidence_links for select
  to anon, authenticated
  using (
    exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.visibility = 'public'
        and evidence.publication_status = 'published'
    )
  );

create policy skill_evidence_links_owner_read
  on public.skill_evidence_links for select
  to authenticated
  using (
    exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.member_id = (select ffe_private.current_member_id())
    )
  );

create policy skill_evidence_links_owner_insert_draft
  on public.skill_evidence_links for insert
  to authenticated
  with check (
    exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.member_id = (select ffe_private.current_member_id())
        and evidence.publication_status = 'draft'
    )
  );

create policy skill_evidence_links_owner_delete_draft
  on public.skill_evidence_links for delete
  to authenticated
  using (
    exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.member_id = (select ffe_private.current_member_id())
        and evidence.publication_status = 'draft'
    )
  );

create policy projects_public_read
  on public.projects for select
  to anon, authenticated
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

create policy projects_owner_read
  on public.projects for select
  to authenticated
  using (owner_member_id = (select ffe_private.current_member_id()));

create policy projects_owner_insert_draft
  on public.projects for insert
  to authenticated
  with check (
    owner_member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy projects_owner_update_draft
  on public.projects for update
  to authenticated
  using (
    owner_member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  )
  with check (
    owner_member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy projects_owner_delete_draft
  on public.projects for delete
  to authenticated
  using (
    owner_member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy project_skills_public_read
  on public.project_skills for select
  to anon, authenticated
  using (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.visibility = 'public'
        and project.publication_status = 'published'
        and project.lifecycle_status <> 'archived'
    )
  );

create policy project_skills_owner_read
  on public.project_skills for select
  to authenticated
  using (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.owner_member_id = (select ffe_private.current_member_id())
    )
  );

create policy project_skills_owner_insert_draft
  on public.project_skills for insert
  to authenticated
  with check (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.owner_member_id = (select ffe_private.current_member_id())
        and project.publication_status = 'draft'
    )
  );

create policy project_skills_owner_delete_draft
  on public.project_skills for delete
  to authenticated
  using (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.owner_member_id = (select ffe_private.current_member_id())
        and project.publication_status = 'draft'
    )
  );

create policy project_evidence_links_public_read
  on public.project_evidence_links for select
  to anon, authenticated
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

create policy project_evidence_links_owner_read
  on public.project_evidence_links for select
  to authenticated
  using (
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
  );

create policy project_evidence_links_owner_insert_draft
  on public.project_evidence_links for insert
  to authenticated
  with check (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.owner_member_id = (select ffe_private.current_member_id())
        and project.publication_status = 'draft'
    )
    and exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.member_id = (select ffe_private.current_member_id())
    )
  );

create policy project_evidence_links_owner_delete_draft
  on public.project_evidence_links for delete
  to authenticated
  using (
    exists (
      select 1 from public.projects as project
      where project.id = project_id
        and project.owner_member_id = (select ffe_private.current_member_id())
        and project.publication_status = 'draft'
    )
    and exists (
      select 1 from public.skill_evidence as evidence
      where evidence.id = evidence_id
        and evidence.member_id = (select ffe_private.current_member_id())
    )
  );

insert into public.skills (
  id, name, description, branch, safety_note, lifecycle_status
)
values
  (
    'SKILL-SMART-HOME',
    'Smart-Home-Systeme verbinden',
    'Sensoren, Aktoren und digitale Steuerung als verständliches System zusammendenken.',
    'CRAFT',
    'Installation und Netzspannung nur im Rahmen der jeweils nötigen Qualifikation und Rechtslage.',
    'active'
  ),
  (
    'SKILL-ELECTRICAL-UNDERSTANDING',
    'elektrische Zusammenhänge verstehen',
    'Elektrische Funktionen analysieren und für ein Vorhaben sicher einordnen.',
    'CRAFT',
    'Diese Fähigkeit ist kein pauschaler Nachweis für zulassungspflichtige Elektroarbeiten.',
    'active'
  ),
  (
    'SKILL-TINKERING',
    'tüfteln und Prototypen bauen',
    'Ideen in testbare technische oder materielle Lösungen übersetzen.',
    'CRAFT',
    null,
    'active'
  ),
  (
    'SKILL-TROUBLESHOOTING',
    'Fehler systematisch finden',
    'Beobachten, Ursachen eingrenzen, testen und die nächsten Schritte dokumentieren.',
    'CRAFT',
    null,
    'active'
  ),
  (
    'SKILL-TECH-COMMUNICATION',
    'Technik verständlich erklären',
    'Menschen befähigen, ein System selbst zu verstehen und zu bedienen.',
    'KNOW',
    null,
    'active'
  ),
  (
    'SKILL-ORGANIZATION',
    'organisieren und priorisieren',
    'Aufgaben, Zeit und Abhängigkeiten übersichtlich ordnen.',
    'SOCIAL',
    null,
    'active'
  ),
  (
    'SKILL-FOCUSED-WORK',
    'konzentriert und sorgfältig arbeiten',
    'Auch bei wiederholten oder detailreichen Aufgaben aufmerksam bleiben.',
    'SELF',
    null,
    'active'
  ),
  (
    'SKILL-ORDER',
    'Ordnung schaffen und erhalten',
    'Material, Räume oder Informationen in eine nutzbare Struktur bringen.',
    'CRAFT',
    null,
    'active'
  ),
  (
    'SKILL-CLEANING',
    'Räume sorgfältig reinigen',
    'Reinigungsaufgaben planvoll, materialgerecht und zuverlässig ausführen.',
    'CRAFT',
    null,
    'active'
  ),
  (
    'SKILL-LOGISTICS',
    'Dinge zuverlässig zuordnen und bewegen',
    'Sendungen, Material oder Aufgaben nachvollziehbar sortieren und an den richtigen Ort bringen.',
    'CRAFT',
    null,
    'active'
  ),
  (
    'SKILL-TEXTILE-CRAFT',
    'mit Textilien gestalten',
    'Nähen, formen und textile Objekte umsetzen.',
    'CRAFT',
    null,
    'active'
  ),
  (
    'SKILL-NUMBER-CARE',
    'sorgfältig mit Zahlen und Belegen umgehen',
    'Zahlen, Belege und Zuordnungen nachvollziehbar prüfen.',
    'KNOW',
    'Allgemeine Sorgfalt ersetzt keine steuerliche oder rechtliche Berufsqualifikation.',
    'active'
  )
on conflict (id) do update
set
  name = excluded.name,
  description = excluded.description,
  branch = excluded.branch,
  safety_note = excluded.safety_note,
  lifecycle_status = excluded.lifecycle_status,
  updated_at = now();
