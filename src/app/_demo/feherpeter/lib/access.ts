import type { AcademyEvent, Course, Lesson, Member, PrivilegeKey, Rank, Role, Tier, TierId } from "../data/types";
import { addDays, formatDate, weekStart } from "./dates";

/* Every role, tier, rank and drip check in the demo goes through this file.
   The screens ask "can this member see this?" and never compare tier ids
   themselves, so when the product gets real auth this is the one place that
   changes. */

export const ROLE_LABEL: Record<Role, string> = {
  vendeg: "Vendég",
  alap: "Alap",
  halado: "Haladó",
  belso: "Belső kör",
  admin: "Admin",
};

export function tierLevel(tiers: Tier[], id: TierId | undefined): number {
  return tiers.find((t) => t.id === id)?.level ?? 0;
}

/** The tier a role acts as. Admin sees everything; a guest has no tier. */
export function roleTier(role: Role, member: Member | null): TierId | null {
  if (role === "admin") return "belso";
  if (role === "vendeg") return null;
  return member?.tier ?? role;
}

export function isAdmin(role: Role): boolean {
  return role === "admin";
}

export function isMember(role: Role): boolean {
  return role !== "vendeg";
}

/** Can a member of `have` see content that requires `need`? */
export function hasTier(tiers: Tier[], have: TierId | null, need: TierId): boolean {
  if (!have) return false;
  return tierLevel(tiers, have) >= tierLevel(tiers, need);
}

export function lessonTier(course: Course, lesson: Lesson): TierId {
  return lesson.tier ?? course.tier;
}

export type LockReason = "tier" | "drip" | null;

export interface LessonAccess {
  open: boolean;
  reason: LockReason;
  /** The tier that would unlock it, when locked by tier. */
  requiredTier: TierId;
  /** "Elérhető: 9. héten (2026. október 12.)", when locked by drip. */
  dripLabel: string | null;
}

export function lessonAccess(
  tiers: Tier[],
  have: TierId | null,
  course: Course,
  lesson: Lesson,
  currentWeek: number,
  academyStart: string,
): LessonAccess {
  const requiredTier = lessonTier(course, lesson);
  if (!hasTier(tiers, have, requiredTier)) {
    return { open: false, reason: "tier", requiredTier, dripLabel: null };
  }
  if (lesson.releaseWeek > currentWeek) {
    const date = formatDate(weekStart(academyStart, lesson.releaseWeek));
    return {
      open: false,
      reason: "drip",
      requiredTier,
      dripLabel: `Elérhető: ${lesson.releaseWeek}. héten (${date})`,
    };
  }
  return { open: true, reason: null, requiredTier, dripLabel: null };
}

export function courseLocked(tiers: Tier[], have: TierId | null, course: Course): boolean {
  return !hasTier(tiers, have, course.tier);
}

export function eventVisible(tiers: Tier[], have: TierId | null, event: AcademyEvent): boolean {
  // Everyone may see what exists; only Belső kör sessions are hidden from the
  // lower tiers, as the brief asks. Joining is a separate check.
  if (event.tier === "belso") return hasTier(tiers, have, "belso");
  return true;
}

export function eventJoinable(tiers: Tier[], have: TierId | null, event: AcademyEvent): boolean {
  return hasTier(tiers, have, event.tier);
}

/* ---------- Ranks ---------- */

export function rankFor(ranks: Rank[], points: number): Rank {
  let best = ranks[0]!;
  for (const r of ranks) if (points >= r.minPoints) best = r;
  return best;
}

export function nextRank(ranks: Rank[], points: number): Rank | null {
  return ranks.find((r) => r.minPoints > points) ?? null;
}

/** The next rank that carries a privilege, and how far it is. */
export function nextPrivilege(ranks: Rank[], points: number): { rank: Rank; pointsNeeded: number } | null {
  const r = ranks.find((x) => x.minPoints > points && x.privilege);
  return r ? { rank: r, pointsNeeded: r.minPoints - points } : null;
}

export function hasPrivilege(ranks: Rank[], points: number, key: PrivilegeKey): boolean {
  const level = rankFor(ranks, points).level;
  return ranks.some((r) => r.privilege?.key === key && r.level <= level);
}

/* ---------- Seats and cohorts ---------- */

export function seatsLeft(seats: number, taken: number): number {
  return Math.max(0, seats - taken);
}

/** Days until the cohort opens, measured from the demo's "today". */
export function daysUntil(todayISO: string, targetISO: string): number {
  return Math.round((Date.parse(`${targetISO}T00:00:00Z`) - Date.parse(`${todayISO}T00:00:00Z`)) / 86_400_000);
}

export { addDays };
