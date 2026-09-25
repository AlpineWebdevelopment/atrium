import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://atriumscaling.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.frontmatter.updatedAt ?? p.frontmatter.publishedAt),
    changeFrequency: "monthly" as const,
    priority: p.frontmatter.pillar ? 0.8 : 0.6,
  }));

  // Indexable landing pages. /kormos and /szepsegszalon are left out on purpose:
  // /szepsegipar supersedes them (see CHANGES.md SZ-R7).
  const landings = [
    "fogaszat",
    "allatorvos",
    "fizioterapia",
    "szepsegipar",
    "epitoipar",
    "klima",
    "napelem",
    "gyors-lead-valasz",
  ].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    { url: `${SITE_URL}/szolgaltatasok`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/chatgpt-hirdetes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    ...landings,
    { url: `${SITE_URL}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${SITE_URL}/karrier`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/adatvedelem`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE_URL}/aszf`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    ...posts,
  ];
}
