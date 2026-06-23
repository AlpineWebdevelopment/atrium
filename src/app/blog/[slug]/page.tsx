import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { mdxComponents } from "@/components/blog/mdxComponents";
import { PostHeader, Faq, Sources } from "@/components/blog/Blocks";
import { Cta } from "@/components/blog/Components";
import { ArticleJsonLd } from "@/components/blog/JsonLd";

const SITE_URL = "https://atriumscaling.com";

// Statically generate every post at build time → fully-rendered HTML in the page
// source, which is what crawlers and AI assistants read (no JS-gated content).
export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

// Force static; no dynamic params outside the generated set.
export const dynamicParams = false;

// In Next.js 16 route params are async.
type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const fm = post.frontmatter;
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: fm.metaTitle,
    description: fm.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: fm.metaTitle,
      description: fm.metaDescription,
      url,
      locale: "hu_HU",
      publishedTime: fm.publishedAt,
      modifiedTime: fm.updatedAt ?? fm.publishedAt,
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;

  return (
    <div className="page">
    <main className="mx-auto max-w-176 px-5 py-12 sm:px-6 sm:py-16">
      <ArticleJsonLd post={post} />

      <article>
        <PostHeader fm={fm} />

        {/* Prose body. FAQ, Sources and the final CTA are appended from frontmatter
            below — keep them OUT of the MDX body so schema and render never drift. */}
        <div className="mt-2">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <Cta href={fm.ctaHref} />
        <Faq items={fm.faq} />
        <Sources items={fm.sources} />
      </article>
    </main>
    </div>
  );
}
