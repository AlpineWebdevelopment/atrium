/* Shared types for the academy demo.

   This folder is the data-layer boundary: screens never import literals from
   here directly for anything editable — they read through the store, which is
   seeded from these files. Swapping the seed for Supabase queries later means
   replacing the store's loader, not touching the screens. */

export type TierId = "alap" | "halado" | "belso";

export type Role = "vendeg" | TierId | "admin";

export interface Tier {
  id: TierId;
  /** 1–3. Tiers are cumulative: a higher level includes everything below it. */
  level: 1 | 2 | 3;
  name: string;
  /** Display-only, illustrative. Never charged anywhere in the demo. */
  priceLabel: string;
  tagline: string;
  inclusions: string[];
  /** What the upgrade modal says this tier adds over the one below. */
  adds: string[];
}

export type PrivilegeKey = "post-siker" | "live-question" | "propose-topic" | "inner-trial";

export interface Rank {
  level: number;
  name: string;
  minPoints: number;
  /** Optional privilege unlocked on reaching this level. */
  privilege?: { key: PrivilegeKey; label: string };
}

export interface AcademyConfig {
  brandName: string;
  mentorName: string;
  mentorTitle: string;
  mentorCity: string;
  siteUrl: string;
  social: { label: string; href: string }[];
  /** Monday of week 1. Every date in the demo derives from this + currentWeek,
      never from the system clock, so server and client render identically. */
  academyStart: string;
  currentWeek: number;
  nextCohortStart: string;
  enrollmentOpen: boolean;
  innerCircleSeats: number;
  innerCircleTaken: number;
  points: { lesson: number; task: number; post: number; comment: number; streakBonus: number };
}

export type Track = "vallalkozoi" | "onismereti" | "elo";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  isGuest: boolean;
  avatar?: string;
}

export interface Resource {
  label: string;
  kind: "pdf" | "xlsx" | "docx" | "link";
  size?: string;
}

export interface LessonComment {
  id: string;
  memberId: string;
  text: string;
  /** Days before the demo's "today". */
  daysAgo: number;
}

/** The written part of a lesson, kept in data/lessons/<course>.ts keyed by slug. */
export interface LessonContent {
  text: string;
  resources: Resource[];
  comments: LessonComment[];
}

export interface Lesson {
  slug: string;
  title: string;
  durationMin: number;
  releaseWeek: number;
  /** Overrides the course tier for a single lesson (used by recordings). */
  tier?: TierId;
  text: string;
  resources: Resource[];
  comments: LessonComment[];
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  slug: string;
  title: string;
  track: Track;
  tier: TierId;
  instructorId: string;
  description: string;
  outcomes: string[];
  /** Typographic cover: a hue pair for the ground plus a short motif word. */
  cover: { from: string; to: string; motif: string };
  modules: CourseModule[];
}

export interface WeeklyTask {
  week: number;
  title: string;
  text: string;
  lesson?: { courseSlug: string; lessonSlug: string };
}

export interface Member {
  id: string;
  name: string;
  /** What they do — a trade, never a named company. */
  business: string;
  city: string;
  tier: TierId;
  points: number;
  streak: number;
  joined: string;
  lastActiveDaysAgo: number;
  referrals: number;
  lessonsCompleted: number;
  isMentor?: boolean;
}

/** Seed activity for the member each role is signed in as. */
export interface PersonaSeed {
  memberId: string;
  completedLessons: string[];
  taskWeeksDone: number[];
  badges: string[];
}

export type PostCategory = "kerdes" | "siker" | "kihivas" | "bejelentes";

export interface PostComment {
  id: string;
  memberId: string;
  text: string;
  daysAgo: number;
}

export interface Post {
  id: string;
  memberId: string;
  category: PostCategory;
  title: string;
  text: string;
  daysAgo: number;
  likes: number;
  pinned?: boolean;
  peterReacted?: boolean;
  comments: PostComment[];
}

export type EventKind = "qa" | "belso" | "workshop" | "nyito";

export interface AcademyEvent {
  id: string;
  title: string;
  kind: EventKind;
  date: string;
  time: string;
  durationMin: number;
  tier: TierId;
  description: string;
  /** Past events point at the lesson their recording became. */
  recording?: { courseSlug: string; lessonSlug: string };
}

export interface AssistantPair {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
  lesson: { courseSlug: string; lessonSlug: string };
}

export type IdeaCategory = "Tartalom" | "Közösség" | "Üzlet" | "Jog és pénzügy" | "Technika";
export type IdeaStatus = "Ötlet" | "Megfontolás alatt" | "Elfogadva" | "Elvetve";

export interface Idea {
  id: string;
  title: string;
  note: string;
  category: IdeaCategory;
  status: IdeaStatus;
}
