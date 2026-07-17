/* Matching engine — deterministic pontozás, never "AI".
   Every point is traceable to a line in the breakdown, and the breakdown is what
   the operator reads. If a number here surprises anyone, that is a bug.

   Scoring is intentionally total: a pair always produces a breakdown with all
   five lines, including the zero-point ones, so the operator can see *why* a
   pair scored low rather than just that it did. */

import type {
  BuyerBrief,
  Match,
  MatchWeights,
  Property,
  ScoreBreakdown,
  ScoreLine,
} from "./types";
import { ft, joinHu, m2 } from "./format";
import { TIPUS_LABEL } from "./format";

export const DEFAULT_WEIGHTS: MatchWeights = {
  telepules: 40,
  ar_belul: 30,
  ar_alku_savban: 15,
  alku_sav: 1.1,
  tipus: 15,
  meret: 10,
  meret_kozeli: 5,
  meret_tures: 0.1,
  idozites: 5,
  kuszob: 60,
};

/** Timings that count as "soon enough" on both sides of the időzítés line. */
const SOON = new Set(["azonnal", "1_3_ho"]);

/**
 * Normalizes a place name for comparison: trims, collapses inner whitespace,
 * lowercases, and strips diacritics so "Nyíregyháza" and "nyiregyhaza" match.
 * Operators and buyers type town names by hand; this is the whole reason the
 * település line is comparable at all.
 */
export function normalizeTelepules(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function line(
  key: ScoreLine["key"],
  label: string,
  points: number,
  max: number,
  reason: string,
): ScoreLine {
  return { key, label, points, max, reason };
}

function scoreTelepules(p: Property, b: BuyerBrief, w: MatchWeights): ScoreLine {
  const wanted = b.keresett_telepulesek.map(normalizeTelepules).filter(Boolean);
  const have = p.telepules ? normalizeTelepules(p.telepules) : "";

  if (!have || wanted.length === 0) {
    return line("telepules", "Település", 0, w.telepules, "Hiányzó adat, nem pontozható");
  }
  if (wanted.includes(have)) {
    return line("telepules", "Település", w.telepules, w.telepules, `${p.telepules} szerepel a keresett települések között`);
  }
  return line(
    "telepules",
    "Település",
    0,
    w.telepules,
    `${p.telepules} nem szerepel a keresett települések között (${joinHu(b.keresett_telepulesek)})`,
  );
}

function scoreAr(p: Property, b: BuyerBrief, w: MatchWeights): ScoreLine {
  const max = Math.max(w.ar_belul, w.ar_alku_savban);
  if (p.iranyar_ft == null || b.keret_max_ft == null) {
    return line("ar", "Ár", 0, max, "Hiányzó adat, nem pontozható");
  }
  if (p.iranyar_ft <= b.keret_max_ft) {
    return line("ar", "Ár", w.ar_belul, max, `Az irányár (${ft(p.iranyar_ft)}) a kereten belül van`);
  }
  const alkuHatar = b.keret_max_ft * w.alku_sav;
  if (p.iranyar_ft <= alkuHatar) {
    return line(
      "ar",
      "Ár",
      w.ar_alku_savban,
      max,
      `Az irányár (${ft(p.iranyar_ft)}) a keret fölött, de az alku sávon belül van (${ft(alkuHatar)}-ig)`,
    );
  }
  return line("ar", "Ár", 0, max, `Az irányár (${ft(p.iranyar_ft)}) az alku sávon kívül van (${ft(alkuHatar)}-ig)`);
}

function scoreTipus(p: Property, b: BuyerBrief, w: MatchWeights): ScoreLine {
  if (!p.ingatlan_tipus || b.ingatlan_tipus.length === 0) {
    return line("tipus", "Típus", 0, w.tipus, "Hiányzó adat, nem pontozható");
  }
  if (b.ingatlan_tipus.includes(p.ingatlan_tipus)) {
    return line("tipus", "Típus", w.tipus, w.tipus, `${TIPUS_LABEL[p.ingatlan_tipus]} szerepel a keresett típusok között`);
  }
  const keresett = joinHu(b.ingatlan_tipus.map((t) => TIPUS_LABEL[t]));
  return line("tipus", "Típus", 0, w.tipus, `${TIPUS_LABEL[p.ingatlan_tipus]} nem szerepel a keresett típusok között (${keresett})`);
}

function scoreMeret(p: Property, b: BuyerBrief, w: MatchWeights): ScoreLine {
  const max = Math.max(w.meret, w.meret_kozeli);
  if (p.meret_m2 == null || b.meret_min_m2 == null) {
    return line("meret", "Méret", 0, max, "Hiányzó adat, nem pontozható");
  }
  if (p.meret_m2 >= b.meret_min_m2) {
    return line("meret", "Méret", w.meret, max, `${m2(p.meret_m2)} eléri a keresett minimumot (${m2(b.meret_min_m2)})`);
  }
  const alsoHatar = b.meret_min_m2 * (1 - w.meret_tures);
  if (p.meret_m2 >= alsoHatar) {
    return line(
      "meret",
      "Méret",
      w.meret_kozeli,
      max,
      `${m2(p.meret_m2)} a keresett minimum alatt, de a tűréshatáron belül van (${m2(b.meret_min_m2)} −${Math.round(w.meret_tures * 100)}%)`,
    );
  }
  return line("meret", "Méret", 0, max, `${m2(p.meret_m2)} a keresett minimum tűréshatára alatt van (${m2(b.meret_min_m2)})`);
}

function scoreIdozites(p: Property, b: BuyerBrief, w: MatchWeights): ScoreLine {
  if (!p.ertekesitesi_idozites || !b.surgosseg) {
    return line("idozites", "Időzítés", 0, w.idozites, "Hiányzó adat, nem pontozható");
  }
  if (SOON.has(p.ertekesitesi_idozites) && SOON.has(b.surgosseg)) {
    return line("idozites", "Időzítés", w.idozites, w.idozites, "Mindkét fél 3 hónapon belül lépne");
  }
  return line("idozites", "Időzítés", 0, w.idozites, "A két fél időzítése nem esik egybe");
}

/** Scores one property × buyer_brief pair. Pure — same inputs, same output. */
export function scorePair(
  property: Property,
  brief: BuyerBrief,
  weights: MatchWeights = DEFAULT_WEIGHTS,
): ScoreBreakdown {
  const lines = [
    scoreTelepules(property, brief, weights),
    scoreAr(property, brief, weights),
    scoreTipus(property, brief, weights),
    scoreMeret(property, brief, weights),
    scoreIdozites(property, brief, weights),
  ];
  return { total: lines.reduce((sum, l) => sum + l.points, 0), lines };
}

/**
 * Scores every property × brief pair and returns the ones at or above the
 * threshold, best first. `existing` carries prior operator decisions forward:
 * a match the operator already rejected must not silently reappear as `javasolt`.
 */
export function computeMatches(
  properties: Property[],
  briefs: BuyerBrief[],
  weights: MatchWeights = DEFAULT_WEIGHTS,
  existing: Match[] = [],
): Match[] {
  const priorByPair = new Map(existing.map((m) => [`${m.property_id}:${m.buyer_brief_id}`, m]));
  const out: Match[] = [];

  for (const property of properties) {
    for (const brief of briefs) {
      const breakdown = scorePair(property, brief, weights);
      if (breakdown.total < weights.kuszob) continue;

      const pairKey = `${property.id}:${brief.id}`;
      const prior = priorByPair.get(pairKey);
      out.push({
        id: prior?.id ?? `match_${property.id}_${brief.id}`,
        property_id: property.id,
        buyer_brief_id: brief.id,
        score: breakdown.total,
        score_breakdown: breakdown,
        status: prior?.status ?? "javasolt",
        created_at: prior?.created_at ?? property.created_at,
      });
    }
  }

  return out.sort((a, b) => b.score - a.score);
}
