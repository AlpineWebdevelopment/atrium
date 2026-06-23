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
