/* NIKA feladatkezelő — domain types.
   Mirrors the Supabase schema the production build would use (snake_case fields,
   UUID-shaped ids) so the demo and the real thing stay shape-compatible. */

export type Role = "elado" | "vevo" | "mindketto";

export type Source = "hirdetes" | "webform" | "email" | "kezi" | "import";

export type Status =
  | "uj"
  | "minosites_folyamatban"
  | "minositett"
  | "idopont_kikuldve"
  | "megtekintes_foglalva"
  | "nem_elerheto"
  | "leiratkozott";

export type IngatlanTipus = "lakas" | "csaladi_haz" | "ikerhaz" | "telek" | "egyeb";

export type Allapot = "uj" | "felujitott" | "jo" | "felujitando";

export type Idozites = "azonnal" | "1_3_ho" | "3_6_ho" | "felmeres_alatt";

export type Surgosseg = "azonnal" | "1_3_ho" | "3_6_ho" | "nezelodik";

export type Finanszirozas = "keszpenz" | "hitel" | "vegyes" | "meg_nem_tudja";

export type Channel = "sms" | "email" | "messenger" | "instagram" | "whatsapp";

export type ConversationState = "active" | "completed" | "stopped";

export type ConversationGoal = "elado_minosites" | "vevo_minosites";

export type TaskStatus = "nyitott" | "kesz";

export type TaskOrigin = "auto" | "kezi";

export type MatchStatus = "javasolt" | "elfogadva" | "elutasitva" | "megtekintes_foglalva";

export type Contact = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  role: Role;
  source: Source;
  status: Status;
  /** Free-text legal basis. Null until a human records one. */
  consent_basis: string | null;
  consent_at: string | null;
  /** The jogalap gate. Imported and manually added contacts start false. */
  outreach_allowed: boolean;
  notes: string | null;
  next_step: string | null;
  next_step_due: string | null;
  created_at: string;
  updated_at: string;
};

export type Property = {
  id: string;
  contact_id: string;
  telepules: string | null;
  varosresz: string | null;
  ingatlan_tipus: IngatlanTipus | null;
  meret_m2: number | null;
  szobak: number | null;
  allapot: Allapot | null;
  iranyar_ft: number | null;
  ertekesitesi_idozites: Idozites | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type BuyerBrief = {
  id: string;
  contact_id: string;
  keresett_telepulesek: string[];
  ingatlan_tipus: IngatlanTipus[];
  meret_min_m2: number | null;
  szobak_min: number | null;
  keret_max_ft: number | null;
  finanszirozas: Finanszirozas | null;
  surgosseg: Surgosseg | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type Conversation = {
  id: string;
  contact_id: string;
  channel: Channel;
  state: ConversationState;
  goal: ConversationGoal;
  created_at: string;
  updated_at: string;
};

export type Message = {
  id: string;
  conversation_id: string;
  direction: "in" | "out";
  body: string;
  provider_message_id: string | null;
  sent_at: string;
  delivery_status: string | null;
};

export type SequenceStep = {
  id: string;
  contact_id: string;
  step: number;
  scheduled_at: string;
  sent_at: string | null;
  cancelled_reason: string | null;
};

export type Task = {
  id: string;
  contact_id: string | null;
  title: string;
  due_date: string;
  status: TaskStatus;
  origin: TaskOrigin;
  created_at: string;
};

export type Match = {
  id: string;
  property_id: string;
  buyer_brief_id: string;
  score: number;
  score_breakdown: ScoreBreakdown;
  status: MatchStatus;
  created_at: string;
};

/** Single-row config table. Weights live in the DB, not in code. */
export type MatchWeights = {
  telepules: number;
  ar_belul: number;
  ar_alku_savban: number;
  /** Multiplier defining the alku sáv upper bound, e.g. 1.10. */
  alku_sav: number;
  tipus: number;
  meret: number;
  meret_kozeli: number;
  /** Tolerance for "közeli" size, e.g. 0.10 for −10%. */
  meret_tures: number;
  idozites: number;
  kuszob: number;
};

export type ScoreLine = {
  /** Stable key for tests; the label is what the operator reads. */
  key: "telepules" | "ar" | "tipus" | "meret" | "idozites";
  label: string;
  points: number;
  max: number;
  /** Plain-Hungarian reason, shown verbatim in the breakdown. */
  reason: string;
};

export type ScoreBreakdown = {
  total: number;
  lines: ScoreLine[];
};
