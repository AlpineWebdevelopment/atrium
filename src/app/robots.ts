import type { MetadataRoute } from "next";

const SITE_URL = "https://atriumscaling.com";

// Explicitly allow AI crawlers — they read the same indexed HTML as search engines.
// Blocking GPTBot / Google-Extended / Bingbot would make the site invisible to AI answers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
