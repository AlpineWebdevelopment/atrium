import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/posts";
import { getNiche, postsForNiche } from "@/lib/niches";

// Per-niche blog listing. Same layout as the main /blog index, but filtered to
// the niche's posts (+ universal posts) and themed to match the landing page.
// Post links carry ?from=<slug> so the post's "Vissza" returns to THIS index.

export function nicheBlogMetadata(slug: string): Metadata {
  const cfg = getNiche(slug);
  if (!cfg) return {};
  return {
    title: `Blog — ${cfg.label}`,
    description: `${cfg.label} területre szabott, tényszerű, forrásolt írások AI értékesítési rendszerekről.`,
    alternates: { canonical: `/${slug}/blog` },
  };
}

export default function NicheBlogIndex({ slug }: { slug: string }) {
  const cfg = getNiche(slug);
  if (!cfg) notFound();
  const posts = postsForNiche(getAllPosts(), slug);

  return (
    <div className={`page ${cfg.themeClass}`}>
      <main className="mx-auto max-w-176 py-12 sm:px-6 sm:py-16">
        <p className="mt-6 px-5 font-mono text-[12px] uppercase tracking-widest text-signal">
          {cfg.label}
        </p>
        <h1 className="mt-1 px-5 font-onest text-[30px] font-semibold leading-[1.2]">
          Blog
        </h1>

        {posts.length === 0 ? (
          <p className="mt-8 px-5 text-[15px] leading-[1.6] text-stone">
            Ehhez a területhez még nincs külön írásunk.{" "}
            <Link href="/blog" className="underline decoration-line underline-offset-2 hover:text-ink">
              Nézze meg az összes cikket.
            </Link>
          </p>
        ) : (
          <ul className="mt-8 divide-y divide-line">
            {posts.map((p) => (
              <li key={p.slug} className="py-5 px-5 hover:bg-stone/5 hover:shadow-md transition-all">
                <Link
                  href={`/blog/${p.slug}?from=${slug}`}
                  className="group block no-underline select-none"
                  draggable="false"
                >
                  <div className="flex justify-between">
                    <p className="font-mono text-[12px] uppercase tracking-widest">
                      {p.frontmatter.niche}
                    </p>
                    <p className="font-mono text-[12px] uppercase tracking-widest text-stone">
                      {p.frontmatter.publishedAt}
                    </p>
                  </div>
                  <h2 className="mt-1 font-onest text-[20px] font-semibold">
                    {p.frontmatter.title}
                  </h2>
                  <p className="mt-1 text-[15px] leading-[1.6] text-stone">{p.frontmatter.dek}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
