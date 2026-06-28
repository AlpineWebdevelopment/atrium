import fs from "fs";
import path from "path";
import type { ComponentProps } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/blog/mdxComponents";
import Footer from "@/components/Footer";

/* Renders a cleaned legal markdown doc from src/content/legal/<slug>.md.
   Reuses the blog's MDX component map (prose, tables, lists) and adds a
   title (h1) and rule (hr); links render as plain anchors so external/
   mailto targets work without Next's Link. */
const legalComponents = {
  ...mdxComponents,
  h1: (p: ComponentProps<"h1">) => (
    <h1
      className="mb-3 font-onest text-[30px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[38px]"
      {...p}
    />
  ),
  hr: (p: ComponentProps<"hr">) => <hr className="my-8 border-line" {...p} />,
  a: ({ href = "", ...p }: ComponentProps<"a">) => (
    <a
      href={href}
      className="font-medium underline decoration-line underline-offset-2 hover:decoration-ink"
      {...p}
    />
  ),
};

export default function LegalDoc({ slug }: { slug: string }) {
  const source = fs.readFileSync(
    path.join(process.cwd(), "src", "content", "legal", `${slug}.md`),
    "utf8",
  );
  return (
    <div className="page">
      <main className="mx-auto max-w-176 px-5 py-14 sm:px-6 sm:py-20">
        <a
          href="/"
          className="mb-8 inline-block font-mono text-[12px] text-stone underline decoration-line underline-offset-2 hover:decoration-ink"
        >
          ← Vissza a főoldalra
        </a>
        <article>
          <MDXRemote
            source={source}
            components={legalComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
