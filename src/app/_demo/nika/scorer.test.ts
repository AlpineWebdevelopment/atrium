/* Scorer tests — the brief's "must never surprise anyone" surface.
   Run: npx tsx --test src/app/_demo/nika/scorer.test.ts

   Every weighted line is tested at each of its boundaries, because the
   boundaries are where a pontozás quietly goes wrong: the alku sáv edge, the
   méret tolerance edge, and the threshold itself. */

import test from "node:test";
import assert from "node:assert/strict";

import { DEFAULT_WEIGHTS, computeMatches, normalizeTelepules, scorePair } from "./scorer";
import type { BuyerBrief, Property } from "./types";

const NOW = "2026-07-17T08:00:00.000Z";

function property(over: Partial<Property> = {}): Property {
  return {
    id: "p1",
    contact_id: "c1",
    telepules: "Miskolc",
    varosresz: "Avas",
    ingatlan_tipus: "lakas",
    meret_m2: 60,
    szobak: 2,
    allapot: "jo",
    iranyar_ft: 40_000_000,
    ertekesitesi_idozites: "azonnal",
    notes: null,
    created_at: NOW,
    updated_at: NOW,
    ...over,
  };
}

function brief(over: Partial<BuyerBrief> = {}): BuyerBrief {
  return {
    id: "b1",
    contact_id: "c2",
    keresett_telepulesek: ["Miskolc"],
    ingatlan_tipus: ["lakas"],
    meret_min_m2: 60,
    szobak_min: 2,
    keret_max_ft: 40_000_000,
    finanszirozas: "keszpenz",
    surgosseg: "azonnal",
    notes: null,
    created_at: NOW,
    updated_at: NOW,
    ...over,
  };
}

function points(p: Property, b: BuyerBrief, key: string): number {
  const l = scorePair(p, b).lines.find((x) => x.key === key);
  assert.ok(l, `missing breakdown line: ${key}`);
  return l.points;
}

test("a fully matching pair scores 100", () => {
  assert.equal(scorePair(property(), brief()).total, 100);
});

test("breakdown always carries all five lines, including zero-point ones", () => {
  const b = scorePair(property({ telepules: "Eger" }), brief());
  assert.deepEqual(
    b.lines.map((l) => l.key),
    ["telepules", "ar", "tipus", "meret", "idozites"],
  );
});

test("total always equals the sum of its lines", () => {
  const b = scorePair(property({ iranyar_ft: 43_000_000, meret_m2: 55 }), brief());
  assert.equal(
    b.total,
    b.lines.reduce((s, l) => s + l.points, 0),
  );
});

/* ---- település: 40 or nothing ---- */

test("település matches case- and accent-insensitively", () => {
  assert.equal(normalizeTelepules("  NYÍREGYHÁZA  "), "nyiregyhaza");
  assert.equal(points(property({ telepules: "miskolc" }), brief({ keresett_telepulesek: ["Miskolc"] }), "telepules"), 40);
});

test("település scores 0 when the town is not on the buyer's list", () => {
  assert.equal(points(property({ telepules: "Eger" }), brief(), "telepules"), 0);
});

test("település matches any town on a multi-town list", () => {
  const b = brief({ keresett_telepulesek: ["Eger", "Miskolc", "Nyíregyháza"] });
  assert.equal(points(property({ telepules: "Nyiregyhaza" }), b, "telepules"), 40);
});

/* ---- ár: 30 inside budget, 15 in the alku sáv, else 0 ---- */

test("ár scores 30 exactly at the budget ceiling", () => {
  assert.equal(points(property({ iranyar_ft: 40_000_000 }), brief({ keret_max_ft: 40_000_000 }), "ar"), 30);
});

test("ár scores 15 exactly at the alku sáv ceiling (+10%)", () => {
  assert.equal(points(property({ iranyar_ft: 44_000_000 }), brief({ keret_max_ft: 40_000_000 }), "ar"), 15);
});

test("ár scores 0 one forint above the alku sáv", () => {
  assert.equal(points(property({ iranyar_ft: 44_000_001 }), brief({ keret_max_ft: 40_000_000 }), "ar"), 0);
});

/* ---- méret: 10 at or above minimum, 5 within −10%, else 0 ---- */

test("méret scores 10 exactly at the minimum", () => {
  assert.equal(points(property({ meret_m2: 60 }), brief({ meret_min_m2: 60 }), "meret"), 10);
});

test("méret scores 5 exactly at the −10% tolerance edge", () => {
  assert.equal(points(property({ meret_m2: 54 }), brief({ meret_min_m2: 60 }), "meret"), 5);
});

test("méret scores 0 just below the tolerance edge", () => {
  assert.equal(points(property({ meret_m2: 53 }), brief({ meret_min_m2: 60 }), "meret"), 0);
});

/* ---- időzítés: +5 only when both sides move within 3 months ---- */

test("időzítés scores 5 only when both sides are azonnal or 1_3_ho", () => {
  assert.equal(points(property({ ertekesitesi_idozites: "1_3_ho" }), brief({ surgosseg: "azonnal" }), "idozites"), 5);
  assert.equal(points(property({ ertekesitesi_idozites: "3_6_ho" }), brief({ surgosseg: "azonnal" }), "idozites"), 0);
  assert.equal(points(property({ ertekesitesi_idozites: "azonnal" }), brief({ surgosseg: "nezelodik" }), "idozites"), 0);
});

/* ---- missing data never scores ---- */

test("missing data scores 0 rather than throwing", () => {
  const bare = property({ telepules: null, iranyar_ft: null, ingatlan_tipus: null, meret_m2: null, ertekesitesi_idozites: null });
  const b = scorePair(bare, brief());
  assert.equal(b.total, 0);
  for (const l of b.lines) assert.match(l.reason, /Hiányzó adat/);
});

test("an empty keresett_telepulesek list scores 0, not a crash", () => {
  assert.equal(points(property(), brief({ keresett_telepulesek: [] }), "telepules"), 0);
});

/* ---- threshold + computeMatches ---- */

test("computeMatches keeps pairs at exactly the threshold and drops those below", () => {
  // település 40 + ár 30 = 70; wrong type, small size, bad timing → 70.
  const at = property({ ingatlan_tipus: "telek", meret_m2: 10, ertekesitesi_idozites: "3_6_ho" });
  assert.equal(scorePair(at, brief()).total, 70);
  assert.equal(computeMatches([at], [brief()]).length, 1);

  // Drop the ár line → 40, below the 60 threshold.
  const below = property({ ...at, iranyar_ft: 90_000_000 });
  assert.equal(scorePair(below, brief()).total, 40);
  assert.equal(computeMatches([below], [brief()]).length, 0);
});

test("computeMatches returns every qualifying pair, best first", () => {
  const strong = property({ id: "p_strong" });
  const weaker = property({ id: "p_weak", ertekesitesi_idozites: "3_6_ho" });
  const matches = computeMatches([weaker, strong], [brief()]);
  assert.deepEqual(
    matches.map((m) => m.property_id),
    ["p_strong", "p_weak"],
  );
  assert.deepEqual(
    matches.map((m) => m.score),
    [100, 95],
  );
});

test("a rejected match does not silently reappear as javasolt", () => {
  const p = property();
  const b = brief();
  const first = computeMatches([p], [b]);
  const rejected = [{ ...first[0], status: "elutasitva" as const }];
  const again = computeMatches([p], [b], DEFAULT_WEIGHTS, rejected);
  assert.equal(again[0].status, "elutasitva");
  assert.equal(again[0].id, first[0].id);
});

test("weights come from config — raising the threshold drops a pair", () => {
  const strict = { ...DEFAULT_WEIGHTS, kuszob: 101 };
  assert.equal(computeMatches([property()], [brief()], strict).length, 0);
});

test("scoring is pure — repeated calls agree and inputs are untouched", () => {
  const p = property();
  const b = brief();
  const snapshot = JSON.stringify({ p, b });
  assert.deepEqual(scorePair(p, b), scorePair(p, b));
  assert.equal(JSON.stringify({ p, b }), snapshot);
});
