import type { Post } from "./types";

// Single source of truth for the niche → blog mapping.
//
// Each niche landing page (e.g. /szepsegipar) gets a filtered blog index at
// /<slug>/blog. A post is routed to a niche by matching its frontmatter `niche:`
// LABEL against `postNiches` here (a lookup map — the label is a display string,
// not the URL slug). Universal/un-niched posts (see UNIVERSAL_NICHES) are not
// tied to one trade and therefore appear in EVERY niche index plus the main blog.
//
// This module imports only a type, so it is safe to use from Client Components
// (Nav, BackLink) as well as the server.

export type NicheConfig = {
  slug: string; // URL segment, e.g. "szepsegipar"
  label: string; // display name for headings / metadata
  themeClass: string; // .page--* modifier matching the landing page's theme
  postNiches: string[]; // frontmatter `niche:` labels routed to this niche
};

// Un-niched posts: shown in the main blog AND in every niche blog index.
// Megfelelés (compliance, e.g. GDPR) is cross-cutting — every trade needs it —
// so it is treated as universal rather than tied to one niche.
export const UNIVERSAL_NICHES = ["Általános", "Kategória", "Megfelelés"];

// themeClass values mirror the wrappers on each landing page (note szepsegszalon
// uses page--salon and fizioterapia uses page--physio — not page--<slug>).
export const NICHES: NicheConfig[] = [
  { slug: "allatorvos", label: "Állatorvos", themeClass: "page--allatorvos", postNiches: ["Állatorvos"] },
  // Segment landing (not a trade): service businesses advertising in ChatGPT.
  { slug: "chatgpt-hirdetes", label: "ChatGPT hirdetés", themeClass: "page--chatgpt-hirdetes", postNiches: [] },
  { slug: "epitoipar", label: "Építőipar", themeClass: "page--epitoipar", postNiches: ["Építőipar"] },
  { slug: "fizioterapia", label: "Fizioterápia", themeClass: "page--physio", postNiches: [] },
  { slug: "gyors-lead-valasz", label: "Gyors lead-válasz", themeClass: "page--gyors-lead-valasz", postNiches: [] },
  { slug: "kormos", label: "Körmös", themeClass: "page--kormos", postNiches: ["Szépségipar"] },
  { slug: "szepsegipar", label: "Szépségipar", themeClass: "page--szepsegipar", postNiches: ["Szépségipar"] },
  { slug: "szepsegszalon", label: "Szépségszalon", themeClass: "page--salon", postNiches: ["Szépségipar"] },
  { slug: "fogaszat", label: "Fogászat", themeClass: "page--fogaszat", postNiches: ["Fogászat"] },
  { slug: "klima", label: "Klíma", themeClass: "page--klima", postNiches: ["Klíma"] },
  { slug: "napelem", label: "Napelem", themeClass: "page--napelem", postNiches: ["Napelem"] },
];

export const NICHE_SLUGS = NICHES.map((n) => n.slug);

// Post `niche:` label → the landing page a post links to, with keyword anchor
// text. Explicit rather than derived from NICHES, because Szépségipar maps to
// several landings and must point at /szepsegipar, the canonical one.
export const POST_NICHE_LANDING: Record<string, { href: string; anchor: string }> = {
  "Állatorvos": { href: "/allatorvos", anchor: "AI értékesítési rendszer állatorvosi rendelőknek" },
  "Építőipar": { href: "/epitoipar", anchor: "AI értékesítési rendszer kivitelező cégeknek" },
  "Fogászat": { href: "/fogaszat", anchor: "AI értékesítési rendszer fogászati rendelőknek" },
  "Klíma": { href: "/klima", anchor: "AI értékesítési rendszer klímaszervizeknek" },
  "Napelem": { href: "/napelem", anchor: "AI értékesítési rendszer napelemes cégeknek" },
  "Szépségipar": { href: "/szepsegipar", anchor: "Foglalási asszisztens szépségszalonoknak" },
};

export function getNiche(slug: string): NicheConfig | undefined {
  return NICHES.find((n) => n.slug === slug);
}

export function isNicheSlug(slug: string | null | undefined): slug is string {
  return !!slug && NICHE_SLUGS.includes(slug);
}

// Posts shown on a niche index: the niche's own labels + all universal posts.
// `posts` is passed in (this module never touches the filesystem).
export function postsForNiche(posts: Post[], slug: string): Post[] {
  const cfg = getNiche(slug);
  if (!cfg) return [];
  const allowed = new Set([...cfg.postNiches, ...UNIVERSAL_NICHES]);
  return posts.filter((p) => allowed.has(p.frontmatter.niche));
}
