-- The five GemDen / FFE signals share one opportunities model.
--
-- A browser user can create and manage only opportunities owned by their
-- active member identity. Anonymous clients can read only deliberately
-- published, public opportunities whose owner profile is also public and
-- published. Member-only visibility remains deny-by-default until real
-- membership policies exist.

create table public.opportunities (
  id uuid primary key default gen_random_uuid(),
  stable_id text not null unique default (
    'OPP-' || upper(replace(gen_random_uuid()::text, '-', ''))
  ),
  owner_member_id text not null references public.profiles (stable_id)
    on update cascade on delete cascade,
  signal_type text not null,
  relationship_mode text not null default 'cooperation',
  title text not null,
  summary text not null default '',
  location_mode text not null default 'flexible',
  location_label text,
  starts_at timestamptz,
  ends_at timestamptz,
  duration_note text,
  compensation_type text not null default 'open',
  compensation_note text,
  risk_level text not null default 'ordinary',
  risk_note text,
  visibility text not null default 'private',
  lifecycle_status text not null default 'open',
  publication_status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint opportunities_stable_id_format check (
    stable_id ~ '^OPP-[A-Z0-9][A-Z0-9-]*$'
  ),
  constraint opportunities_signal_type_values check (
    signal_type in ('have', 'can', 'need', 'time', 'chance')
  ),
  constraint opportunities_relationship_mode_values check (
    relationship_mode in (
      'commission', 'job', 'learning', 'voluntary', 'care',
      'commons', 'project', 'event', 'cooperation'
    )
  ),
  constraint opportunities_title_length check (
    char_length(btrim(title)) between 1 and 200
  ),
  constraint opportunities_summary_length check (char_length(summary) <= 8000),
  constraint opportunities_location_mode_values check (
    location_mode in ('local', 'remote', 'hybrid', 'flexible')
  ),
  constraint opportunities_location_label_length check (
    location_label is null or char_length(location_label) <= 240
  ),
  constraint opportunities_time_order check (
    starts_at is null or ends_at is null or ends_at >= starts_at
  ),
  constraint opportunities_duration_note_length check (
    duration_note is null or char_length(duration_note) <= 1000
  ),
  constraint opportunities_compensation_type_values check (
    compensation_type in (
      'paid', 'expenses', 'exchange', 'voluntary', 'open', 'not_applicable'
    )
  ),
  constraint opportunities_compensation_note_length check (
    compensation_note is null or char_length(compensation_note) <= 2000
  ),
  constraint opportunities_risk_level_values check (
    risk_level in ('ordinary', 'regulated', 'sensitive')
  ),
  constraint opportunities_risk_note_length check (
    risk_note is null or char_length(risk_note) <= 3000
  ),
  constraint opportunities_risk_note_required check (
    risk_level = 'ordinary' or char_length(btrim(coalesce(risk_note, ''))) > 0
  ),
  constraint opportunities_visibility_values check (
    visibility in ('public', 'members', 'private')
  ),
  constraint opportunities_lifecycle_status_values check (
    lifecycle_status in ('open', 'paused', 'closed', 'archived')
  ),
  constraint opportunities_publication_status_values check (
    publication_status in ('draft', 'published', 'archived')
  )
);

comment on table public.opportunities is
  'One model for have, can, need, time and chance signals. Entries describe possibilities, never assignments or person scores.';

comment on column public.opportunities.relationship_mode is
  'The intended form of relationship. It is descriptive and does not create a contract.';

comment on column public.opportunities.risk_level is
  'A visible intake flag for additional safety, qualification or legal review; never an automated approval.';

create table public.opportunity_requirements (
  id uuid primary key default gen_random_uuid(),
  opportunity_id uuid not null references public.opportunities (id)
    on delete cascade,
  skill_id text not null references public.skills (id)
    on update cascade on delete restrict,
  requirement_level text not null default 'helpful',
  note text not null default '',
  evidence_expectation text not null default 'none',
  hard_gate boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (opportunity_id, skill_id),
  constraint opportunity_requirements_level_values check (
    requirement_level in ('required', 'helpful', 'learnable')
  ),
  constraint opportunity_requirements_note_length check (char_length(note) <= 2000),
  constraint opportunity_requirements_evidence_values check (
    evidence_expectation in (
      'none', 'self_reported', 'community_confirmed', 'externally_verified'
    )
  ),
  constraint opportunity_requirements_hard_gate_shape check (
    not hard_gate or requirement_level = 'required'
  )
);

comment on table public.opportunity_requirements is
  'Contextual skill requirements. Required/helpful/learnable remains visible; hard gates must be explicitly marked.';

create index opportunities_owner_updated_lookup
  on public.opportunities (owner_member_id, updated_at desc);

create index opportunities_public_stream_lookup
  on public.opportunities (signal_type, created_at desc)
  where visibility = 'public'
    and publication_status = 'published'
    and lifecycle_status = 'open';

create index opportunities_mode_public_lookup
  on public.opportunities (relationship_mode, created_at desc)
  where visibility = 'public'
    and publication_status = 'published'
    and lifecycle_status = 'open';

create index opportunity_requirements_opportunity_lookup
  on public.opportunity_requirements (opportunity_id, requirement_level);

create index opportunity_requirements_skill_lookup
  on public.opportunity_requirements (skill_id, opportunity_id);

create trigger opportunities_touch_publishable
  before insert or update on public.opportunities
  for each row execute function ffe_private.touch_publishable_row();

create trigger opportunity_requirements_touch_updated_at
  before update on public.opportunity_requirements
  for each row execute function ffe_private.touch_updated_at();

alter table public.opportunities enable row level security;
alter table public.opportunity_requirements enable row level security;

revoke all on table public.opportunities
  from public, anon, authenticated, service_role;
revoke all on table public.opportunity_requirements
  from public, anon, authenticated, service_role;

grant select on table public.opportunities to anon, authenticated;
grant select on table public.opportunity_requirements to anon, authenticated;

grant insert (
  owner_member_id,
  signal_type,
  relationship_mode,
  title,
  summary,
  location_mode,
  location_label,
  starts_at,
  ends_at,
  duration_note,
  compensation_type,
  compensation_note,
  risk_level,
  risk_note,
  visibility,
  lifecycle_status,
  publication_status
) on table public.opportunities to authenticated;

grant update (
  signal_type,
  relationship_mode,
  title,
  summary,
  location_mode,
  location_label,
  starts_at,
  ends_at,
  duration_note,
  compensation_type,
  compensation_note,
  risk_level,
  risk_note,
  visibility,
  lifecycle_status,
  publication_status
) on table public.opportunities to authenticated;

grant delete on table public.opportunities to authenticated;

grant insert (
  opportunity_id,
  skill_id,
  requirement_level,
  note,
  evidence_expectation,
  hard_gate
) on table public.opportunity_requirements to authenticated;

grant update (
  requirement_level,
  note,
  evidence_expectation,
  hard_gate
) on table public.opportunity_requirements to authenticated;

grant delete on table public.opportunity_requirements to authenticated;

grant all on table public.opportunities to service_role;
grant all on table public.opportunity_requirements to service_role;

create policy opportunities_public_read
  on public.opportunities for select
  to anon
  using (
    visibility = 'public'
    and publication_status = 'published'
    and lifecycle_status <> 'archived'
    and exists (
      select 1 from public.profiles as owner_profile
      where owner_profile.stable_id = opportunities.owner_member_id
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy opportunities_authenticated_read
  on public.opportunities for select
  to authenticated
  using (
    owner_member_id = (select ffe_private.current_member_id())
    or (
      visibility = 'public'
      and publication_status = 'published'
      and lifecycle_status <> 'archived'
      and exists (
        select 1 from public.profiles as owner_profile
        where owner_profile.stable_id = opportunities.owner_member_id
          and owner_profile.visibility = 'public'
          and owner_profile.publication_status = 'published'
          and owner_profile.account_status = 'active'
      )
    )
  );

create policy opportunities_owner_insert_draft
  on public.opportunities for insert
  to authenticated
  with check (
    owner_member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
    and lifecycle_status = 'open'
  );

create policy opportunities_owner_update
  on public.opportunities for update
  to authenticated
  using (owner_member_id = (select ffe_private.current_member_id()))
  with check (owner_member_id = (select ffe_private.current_member_id()));

create policy opportunities_owner_delete_draft
  on public.opportunities for delete
  to authenticated
  using (
    owner_member_id = (select ffe_private.current_member_id())
    and publication_status = 'draft'
  );

create policy opportunity_requirements_public_read
  on public.opportunity_requirements for select
  to anon
  using (
    exists (
      select 1 from public.opportunities as opportunity
      join public.profiles as owner_profile
        on owner_profile.stable_id = opportunity.owner_member_id
      where opportunity.id = opportunity_requirements.opportunity_id
        and opportunity.visibility = 'public'
        and opportunity.publication_status = 'published'
        and opportunity.lifecycle_status <> 'archived'
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy opportunity_requirements_authenticated_read
  on public.opportunity_requirements for select
  to authenticated
  using (
    exists (
      select 1 from public.opportunities as opportunity
      where opportunity.id = opportunity_requirements.opportunity_id
        and opportunity.owner_member_id = (select ffe_private.current_member_id())
    )
    or exists (
      select 1 from public.opportunities as opportunity
      join public.profiles as owner_profile
        on owner_profile.stable_id = opportunity.owner_member_id
      where opportunity.id = opportunity_requirements.opportunity_id
        and opportunity.visibility = 'public'
        and opportunity.publication_status = 'published'
        and opportunity.lifecycle_status <> 'archived'
        and owner_profile.visibility = 'public'
        and owner_profile.publication_status = 'published'
        and owner_profile.account_status = 'active'
    )
  );

create policy opportunity_requirements_owner_insert_draft
  on public.opportunity_requirements for insert
  to authenticated
  with check (
    exists (
      select 1 from public.opportunities as opportunity
      where opportunity.id = opportunity_requirements.opportunity_id
        and opportunity.owner_member_id = (select ffe_private.current_member_id())
        and opportunity.publication_status = 'draft'
    )
  );

create policy opportunity_requirements_owner_update_draft
  on public.opportunity_requirements for update
  to authenticated
  using (
    exists (
      select 1 from public.opportunities as opportunity
      where opportunity.id = opportunity_requirements.opportunity_id
        and opportunity.owner_member_id = (select ffe_private.current_member_id())
        and opportunity.publication_status = 'draft'
    )
  )
  with check (
    exists (
      select 1 from public.opportunities as opportunity
      where opportunity.id = opportunity_requirements.opportunity_id
        and opportunity.owner_member_id = (select ffe_private.current_member_id())
        and opportunity.publication_status = 'draft'
    )
  );

create policy opportunity_requirements_owner_delete_draft
  on public.opportunity_requirements for delete
  to authenticated
  using (
    exists (
      select 1 from public.opportunities as opportunity
      where opportunity.id = opportunity_requirements.opportunity_id
        and opportunity.owner_member_id = (select ffe_private.current_member_id())
        and opportunity.publication_status = 'draft'
    )
  );
