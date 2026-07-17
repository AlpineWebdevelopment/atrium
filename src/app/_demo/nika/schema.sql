-- NIKA feladatkezelő — Postgres schema (reference).
--
-- This file is documentation, not a live migration. The demo runs entirely in
-- the browser; this is the shape the production Supabase build (eu-central-1,
-- Frankfurt) would create so the two stay compatible. The TypeScript types in
-- types.ts mirror these tables field-for-field.
--
-- Conventions: snake_case, UUID PKs, created_at/updated_at on every table.
-- RLS is enabled on all tables — the dashboard reads as the authenticated user,
-- Edge Functions write via the service role, webhooks authenticate with a
-- shared secret header (not modelled here).

create extension if not exists "pgcrypto";

-- ---- Enums -----------------------------------------------------------------

create type role_enum          as enum ('elado', 'vevo', 'mindketto');
create type source_enum        as enum ('hirdetes', 'webform', 'email', 'kezi', 'import');
create type status_enum        as enum ('uj', 'minosites_folyamatban', 'minositett',
                                        'idopont_kikuldve', 'megtekintes_foglalva',
                                        'nem_elerheto', 'leiratkozott');
create type ingatlan_tipus_enum as enum ('lakas', 'csaladi_haz', 'ikerhaz', 'telek', 'egyeb');
create type allapot_enum        as enum ('uj', 'felujitott', 'jo', 'felujitando');
create type idozites_enum       as enum ('azonnal', '1_3_ho', '3_6_ho', 'felmeres_alatt');
create type surgosseg_enum      as enum ('azonnal', '1_3_ho', '3_6_ho', 'nezelodik');
create type finanszirozas_enum  as enum ('keszpenz', 'hitel', 'vegyes', 'meg_nem_tudja');
create type channel_enum        as enum ('sms', 'email', 'messenger', 'instagram', 'whatsapp');
create type conv_state_enum     as enum ('active', 'completed', 'stopped');
create type conv_goal_enum      as enum ('elado_minosites', 'vevo_minosites');
create type msg_direction_enum  as enum ('in', 'out');
create type task_status_enum    as enum ('nyitott', 'kesz');
create type task_origin_enum    as enum ('auto', 'kezi');
create type match_status_enum   as enum ('javasolt', 'elfogadva', 'elutasitva', 'megtekintes_foglalva');

-- ---- Core ------------------------------------------------------------------

create table contacts (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  phone           text,                    -- E.164
  email           text,
  role            role_enum   not null,
  source          source_enum not null,
  status          status_enum not null default 'uj',
  consent_basis   text,
  consent_at      timestamptz,
  -- The jogalap gate: imported/manually added contacts start false and get no
  -- outbound until a human sets it true.
  outreach_allowed boolean    not null default false,
  notes           text,
  next_step       text,
  next_step_due   date,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create table properties (
  id                    uuid primary key default gen_random_uuid(),
  contact_id            uuid not null references contacts(id) on delete cascade,
  telepules             text,
  varosresz             text,
  ingatlan_tipus        ingatlan_tipus_enum,
  meret_m2              integer,
  szobak                numeric,
  allapot               allapot_enum,
  iranyar_ft            bigint,
  ertekesitesi_idozites idozites_enum,
  notes                 text,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);

create table buyer_briefs (
  id                   uuid primary key default gen_random_uuid(),
  contact_id           uuid not null references contacts(id) on delete cascade,
  keresett_telepulesek text[]              not null default '{}',
  ingatlan_tipus       ingatlan_tipus_enum[] not null default '{}',
  meret_min_m2         integer,
  szobak_min           numeric,
  keret_max_ft         bigint,
  finanszirozas        finanszirozas_enum,
  surgosseg            surgosseg_enum,
  notes                text,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

-- ---- Conversations ---------------------------------------------------------

create table conversations (
  id          uuid primary key default gen_random_uuid(),
  contact_id  uuid not null references contacts(id) on delete cascade,
  channel     channel_enum    not null,
  state       conv_state_enum not null default 'active',
  goal        conv_goal_enum  not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table messages (
  id                  uuid primary key default gen_random_uuid(),
  conversation_id     uuid not null references conversations(id) on delete cascade,
  direction           msg_direction_enum not null,
  body                text not null,
  provider_message_id text,
  sent_at             timestamptz not null default now(),
  delivery_status     text
);

-- ---- Engine ----------------------------------------------------------------

create table sequence_steps (
  id               uuid primary key default gen_random_uuid(),
  contact_id       uuid not null references contacts(id) on delete cascade,
  step             integer not null check (step between 1 and 5),
  scheduled_at     timestamptz not null,
  sent_at          timestamptz,
  cancelled_reason text
);

create table tasks (
  id          uuid primary key default gen_random_uuid(),
  contact_id  uuid references contacts(id) on delete cascade,
  title       text not null,
  due_date    date not null,
  status      task_status_enum not null default 'nyitott',
  origin      task_origin_enum not null,
  created_at  timestamptz not null default now()
);

-- ---- Matching --------------------------------------------------------------

create table matches (
  id              uuid primary key default gen_random_uuid(),
  property_id     uuid not null references properties(id) on delete cascade,
  buyer_brief_id  uuid not null references buyer_briefs(id) on delete cascade,
  score           integer not null,
  score_breakdown jsonb   not null,
  status          match_status_enum not null default 'javasolt',
  created_at      timestamptz not null default now(),
  unique (property_id, buyer_brief_id)
);

-- Single-row config table: weights and threshold live in the DB, not in code,
-- so the office can tune the pontozás without a deploy. See scorer.ts.
create table match_weights (
  id            boolean primary key default true check (id),  -- enforces one row
  telepules     integer not null default 40,
  ar_belul      integer not null default 30,
  ar_alku_savban integer not null default 15,
  alku_sav      numeric not null default 1.10,
  tipus         integer not null default 15,
  meret         integer not null default 10,
  meret_kozeli  integer not null default 5,
  meret_tures   numeric not null default 0.10,
  idozites      integer not null default 5,
  kuszob        integer not null default 60,
  updated_at    timestamptz not null default now()
);

insert into match_weights (id) values (true);

-- ---- Audit -----------------------------------------------------------------

create table audit_log (
  id         uuid primary key default gen_random_uuid(),
  actor      text,
  action     text not null,
  entity     text not null,
  entity_id  uuid,
  meta       jsonb,
  created_at timestamptz not null default now()
);

-- ---- RLS -------------------------------------------------------------------
-- Enabled on every table. Policies (authenticated read, service-role write) are
-- defined in the production migrations, not in this reference file.

alter table contacts        enable row level security;
alter table properties      enable row level security;
alter table buyer_briefs    enable row level security;
alter table conversations   enable row level security;
alter table messages        enable row level security;
alter table sequence_steps  enable row level security;
alter table tasks           enable row level security;
alter table matches         enable row level security;
alter table match_weights   enable row level security;
alter table audit_log       enable row level security;
