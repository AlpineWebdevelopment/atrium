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

  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${SITE_URL}/adatvedelem`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE_URL}/aszf`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    ...posts,
  ];
}
