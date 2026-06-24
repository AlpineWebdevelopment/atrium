"use client";

import { useMemo, useSyncExternalStore } from "react";
import Link from "next/link";

export type RelatedItem = {
  slug: string;
  title: string;
  niche: string;
  dek: string;
};

// Build up to two cards: one from the same niche + one universal ("Általános")
// post. Falls back to whatever is available when a pool is short, and shows
// fewer than two only when there genuinely aren't two distinct candidates.
// `rng` is injected so the server render is deterministic (first elements, no
// shuffle) — that exact output is what hydrates — and the client picks randomly,
// giving per-visit variety without a hydration mismatch.
function build(
  sameNiche: RelatedItem[],
  general: RelatedItem[],
  rng: () => number,
): RelatedItem[] {
  const used = new Set<string>();
  const out: RelatedItem[] = [];
  const take = (pool: RelatedItem[]) => {
    const avail = pool.filter((p) => !used.has(p.slug));
    if (!avail.length) return;
    const item = avail[Math.floor(rng() * avail.length)];
    used.add(item.slug);
    out.push(item);
  };
  take(sameNiche);
  take(general);
  if (out.length < 2) take([...sameNiche, ...general]); // backfill the second slot
  return out
    .map((v) => ({ v, k: rng() }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.v);
}

// Stable no-op subscription: the snapshots never change after mount — we only
// need the server/client split that useSyncExternalStore gives us (deterministic
// HTML on the server, a fresh random pick on the client), with no setState-in-effect.
const subscribe = () => () => {};

export default function RelatedPosts({
  sameNiche,
  general,
}: {
  sameNiche: RelatedItem[];
  general: RelatedItem[];
}) {
  const serverItems = useMemo(
    () => build(sameNiche, general, () => 0),
    [sameNiche, general],
  );
  const clientItems = useMemo(
    () => build(sameNiche, general, Math.random),
    [sameNiche, general],
  );
  const items = useSyncExternalStore(
    subscribe,
    () => clientItems,
    () => serverItems,
  );

  if (!items.length) return null;

  return (
    <section className="mt-12 border-t border-line pt-6" aria-labelledby="tovabbi">
      <h2 id="tovabbi" className="mb-4 font-onest text-[20px] font-bold">
        Ez is érdekelheti
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group block h-full rounded-lg border border-line p-4 no-underline transition-all hover:bg-stone/5 hover:shadow-md"
              draggable="false"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-stone">
                {p.niche}
              </p>
              <h3 className="mt-1 font-onest text-[16.5px] font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-1 text-[14px] leading-normal text-stone">{p.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
