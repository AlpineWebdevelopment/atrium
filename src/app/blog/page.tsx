import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tényszerű, forrásolt írások AI értékesítési rendszerekről magyar szolgáltató vállalkozásoknak.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div className="page">
    <main className="mx-auto max-w-176 py-12 sm:px-6 sm:py-16">
      <h1 className="mt-6 font-onest text-[30px] font-semibold leading-[1.2] px-5">
        Blog
      </h1>
      <ul className="mt-8 divide-y divide-line">
        {posts.map((p) => (
          <li key={p.slug} className="py-5 px-5 hover:bg-stone/5 hover:shadow-md transition-all">
            <Link href={`/blog/${p.slug}`} className="group block no-underline select-none" draggable="false">
              <div className="flex justify-between">
              {/* <p className="font-mono text-[12px] uppercase tracking-widest">
                {p.frontmatter.niche}
              </p> */}
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
    </main>
    </div>
  );
}
