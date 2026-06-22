import type { FaqItem, PostFrontmatter, Source } from "@/lib/types";
import Link from "next/link";

/** Header: wordmark row + niche/date eyebrow, H1 (Onest), italic dek. */
export function PostHeader({ fm }: { fm: PostFrontmatter }) {
  const date = new Date(fm.publishedAt).toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <header>
      <div className="mb-6 flex items-center justify-between">
        <Link href="/blog" className="font-mono text-[12px] uppercase tracking-widest text-stone hover:text-ink transition" draggable="false">{"< "}Vissza</Link>
        <span className="font-mono text-[12px] uppercase tracking-widest text-stone">{fm.niche} · {date}
        </span>
      </div>
      <h1 className="font-onest text-[28px] font-bold leading-tight sm:text-[36px]">
        {fm.title}
      </h1>
      <p className="mt-3 text-[17px] italic leading-[1.6] text-stone">{fm.dek}</p>
    </header>
  );
}

/** FAQ — rendered from frontmatter so it stays in sync with FAQPage JSON-LD. */
export function Faq({ items }: { items?: FaqItem[] }) {
  if (!items?.length) return null;
  return (
    <section className="mt-10" aria-labelledby="gyik">
      <h2
        id="gyik"
        className="mb-3 font-onest text-[20px] font-bold"
      >
        Gyakori kérdések
      </h2>
      <dl>
        {items.map((item, i) => (
          <div key={i} className="border-t border-line py-4 first:border-t-0">
            <dt className="font-onest text-[16.5px] font-semibold leading-[1.3] tracking-[-0.01em]">{item.q}</dt>
            <dd className="mt-2 text-[15px] leading-[1.6] italic font-onest text-stone">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Sources — the visible Források credibility block. Links only when verified. */
export function Sources({ items }: { items?: Source[] }) {
  if (!items?.length) return null;
  return (
    <section className="mt-8 border-t border-line pt-4" aria-labelledby="forrasok">
      <p
        id="forrasok"
        className="mb-[0.4rem] font-mono text-[12px] uppercase tracking-[0.06em] text-stone"
      >
        Források
      </p>
      <ul className="space-y-1 text-[13px] leading-[1.6] text-stone">
        {items.map((s, i) => (
          <li key={i}>
            {s.url ? (
              <a
                href={s.url}
                rel="nofollow noopener"
                target="_blank"
                className="underline decoration-line underline-offset-2 hover:text-ink"
              >
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
