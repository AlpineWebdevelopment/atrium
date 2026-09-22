import type { AcademyConfig } from "./types";

/** URL prefix of the thin route wrappers in src/app/feherpeter-demo/. */
export const BASE = "/feherpeter-demo";

export const ASSETS = "/demo/feherpeter";

/* Facts about Péter come from feherpeter.hu only: 25 years in business,
   1500+ entrepreneurs taught, Pécs, personal and group mentoring. */
export const CONFIG: AcademyConfig = {
  brandName: "Fehér Péter Akadémia",
  mentorName: "Fehér Péter",
  mentorTitle: "Vállalkozói és önismereti mentor",
  mentorCity: "Pécs",
  siteUrl: "https://feherpeter.hu",
  social: [{ label: "Facebook", href: "https://www.facebook.com/fehernetwork" }],

  // Week 1 began on Monday 2026-08-17, so week 6 opens on 2026-09-21.
  academyStart: "2026-08-17",
  currentWeek: 6,

  nextCohortStart: "2026-11-02",
  enrollmentOpen: true,

  innerCircleSeats: 20,
  innerCircleTaken: 14,

  points: { lesson: 10, task: 15, post: 5, comment: 2, streakBonus: 5 },
};
