// The single source of truth for a post's metadata and machine-readable parts.
// FAQ and Sources live here (not parsed out of prose) so they drive BOTH the
// rendered components AND the JSON-LD schema from one place — no drift.

export type FaqItem = { q: string; a: string };

export type Source = {
  label: string; // human-readable citation line shown in the Források block
  url?: string; // leave empty until verified; empty = rendered as plain text, omitted from schema
};

export type PostFrontmatter = {
  title: string; // H1 on the page
  metaTitle: string; // <title> tag, < 60 chars
  metaDescription: string; // meta description, 150–160 chars
  dek: string; // italic sub-headline under the H1
  niche: string; // eyebrow tag, e.g. "Fogászat" / "Kategória"
  cluster: string; // A–H, internal taxonomy
  intent: string; // e.g. "Informational → Commercial"
  funnel: string; // e.g. "TOFU/MOFU"
  pillar: boolean;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  faq?: FaqItem[];
  sources?: Source[];
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string; // raw MDX body (frontmatter stripped)
};
