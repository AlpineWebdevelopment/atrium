import type { Post } from "@/lib/types";

const SITE_URL = "https://atriumscaling.com";
const ORG = { "@type": "Organization", name: "Atrium", url: SITE_URL };

/**
 * Emits the structured data that answer engines (Google AI Overviews, ChatGPT,
 * Perplexity) read to understand and cite the page:
 *  - Article: authorship, dates, language, canonical
 *  - FAQPage: direct Q&A pairs (high citation value)
 *  - BreadcrumbList: site position
 * All three ship as one @graph so there's a single JSON-LD block.
 */
export function ArticleJsonLd({ post }: { post: Post }) {
  const { frontmatter: fm, slug } = post;
  const pageUrl = `${SITE_URL}/blog/${slug}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline: fm.title,
      description: fm.metaDescription,
      inLanguage: "hu",
      datePublished: fm.publishedAt,
      dateModified: fm.updatedAt ?? fm.publishedAt,
      author: ORG,
      publisher: {
        ...ORG,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      // Verified citations strengthen E-E-A-T; only included once a URL exists.
      ...(fm.sources?.some((s) => s.url)
        ? { citation: fm.sources.filter((s) => s.url).map((s) => s.url) }
        : {}),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 2, name: fm.title, item: pageUrl },
      ],
    },
  ];

  if (fm.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: fm.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const json = { "@context": "https://schema.org", "@graph": graph };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
