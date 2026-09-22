import type { Rank } from "./types";

/* Nine public levels earned by points. Four of them carry a privilege — status
   that unlocks something is the point; the visuals stay restrained. Names,
   thresholds and privileges are all editable in /admin/szintek. */
export const RANKS: Rank[] = [
  { level: 1, name: "Újonc", minPoints: 0 },
  { level: 2, name: "Tanuló", minPoints: 40 },
  {
    level: 3,
    name: "Gyakorló",
    minPoints: 120,
    privilege: { key: "post-siker", label: "posztolhatsz a Siker kategóriába" },
  },
  { level: 4, name: "Építő", minPoints: 200 },
  {
    level: 5,
    name: "Szervező",
    minPoints: 320,
    privilege: { key: "live-question", label: "a kérdésedre Péter az élő adásban válaszol" },
  },
  { level: 6, name: "Irányító", minPoints: 460 },
  {
    level: 7,
    name: "Stratéga",
    minPoints: 600,
    privilege: { key: "propose-topic", label: "témát javasolhatsz egy élő alkalomra" },
  },
  {
    level: 8,
    name: "Mentorjelölt",
    minPoints: 900,
    privilege: { key: "inner-trial", label: "egy próbahónap jár a Belső körben, ha van szabad hely" },
  },
  { level: 9, name: "Mester", minPoints: 1300 },
];
