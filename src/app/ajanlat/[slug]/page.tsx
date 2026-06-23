import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getAdvertorialBySlug,
  getAdvertorialSlugs,
} from "@/lib/advertorials";
import { mdxComponents } from "@/components/blog/mdxComponents";
import { Cta } from "@/components/blog/Components";

const SITE_URL = "https://atriumscaling.com";

export function generateStaticParams() {
  return getAdvertorialSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const ad = getAdvertorialBySlug(slug);
  if (!ad) return {};
  const fm = ad.frontmatter;
  return {
    title: fm.metaTitle,
    description: fm.metaDescription,
    // Advertorials are paid-traffic destinations — keep them out of the index so
    // they never compete with or duplicate the SEO blog.
    robots: { index: false, follow: true },
    openGraph: {
      type: "article",
      title: fm.metaTitle,
      description: fm.metaDescription,
      url: `${SITE_URL}/ajanlat/${slug}`,
      locale: "hu_HU",
    },
  };
}

export default async function Advertorial({ params }: Params) {
  const { slug } = await params;
  const ad = getAdvertorialBySlug(slug);
  if (!ad) notFound();

  const { frontmatter: fm, content } = ad;

  return (
    <div className="page">
    <main className="mx-auto max-w-176 px-5 py-12 sm:px-6 sm:py-16">
      <article>
        <header>
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[16px] tracking-[0.04em]">
              ATRIUM<span className="text-signal">.</span>
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-stone">
              {fm.niche}
            </span>
          </div>
          <h1 className="font-onest text-[28px] font-semibold leading-tight tracking-[-0.01em] sm:text-[34px]">
            {fm.title}
          </h1>
        </header>

        {/* Sales body, then the brand-locked styled CTA — appended here (like the
            blog) so it renders as the green button, never as plain bold text.
            No FAQ, no Sources, no Article schema. */}
        <div className="mt-6">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <Cta href={fm.ctaHref} />
      </article>
    </main>
    </div>
  );
}
