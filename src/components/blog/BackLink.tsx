"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { isNicheSlug } from "@/lib/niches";

const CLASS =
  "font-mono text-[12px] uppercase tracking-widest text-stone hover:text-ink transition";

// Posts are canonical at /blog/<slug>; the niche context (if any) arrives as
// ?from=<niche>. When present and valid, "Vissza" returns to that niche index,
// otherwise to the main /blog. Reading the query happens on the client so the
// post page itself stays statically rendered.
function BackLinkInner() {
  const from = useSearchParams().get("from");
  const href = isNicheSlug(from) ? `/${from}/blog` : "/blog";
  return (
    <a href={href} className={CLASS} draggable="false">
      {"< "}Vissza
    </a>
  );
}

export default function BackLink() {
  return (
    <Suspense
      fallback={
        <a href="/blog" className={CLASS} draggable="false">
          {"< "}Vissza
        </a>
      }
    >
      <BackLinkInner />
    </Suspense>
  );
}
