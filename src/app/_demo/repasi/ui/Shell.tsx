"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BASE, NAV } from "./nav";
import { APP_NAME, DEMO_TODAY, OPERATOR, agent, hivas, kontakt, ugyfel } from "../lib/data";
import { datum, monogram } from "../lib/format";
import "./atlas.css";

/** Wordmark: name in Geist Sans medium with a teal period. */
export function Szoveglogo({ meret = 15 }: { meret?: number }) {
  return (
    <span className="font-medium tracking-[-0.02em]" style={{ fontSize: meret }}>
      {APP_NAME}
      <span className="text-(--a-accent)">.</span>
    </span>
  );
}

/* The breadcrumb is derived from the URL rather than passed down from each
   screen: every id in the path resolves against the static data, so a detail
   page shows the company or agent name without the page having to announce it. */
function morzsak(pathname: string): { cimke: string; href?: string }[] {
  const reszek = pathname.replace(BASE, "").split("/").filter(Boolean);
  if (reszek.length === 0) return [];

  const gyoker = NAV.find((n) => n.href === `${BASE}/${reszek[0]}`);
  const ki: { cimke: string; href?: string }[] = [
    { cimke: gyoker?.cimke ?? reszek[0]!, href: reszek.length > 1 ? gyoker?.href : undefined },
  ];

  if (reszek.length > 1) {
    const id = reszek[1]!;
    let cimke = id;
    if (reszek[0] === "ugyfelek") cimke = ugyfel(id)?.nev ?? id;
    else if (reszek[0] === "agentek") {
      const a = agent(id);
      cimke = a ? `${a.nev} — ${ugyfel(a.ugyfelId)?.nev ?? ""}` : id;
    } else if (reszek[0] === "hivasok") {
      const h = hivas(id);
      cimke = h ? `${kontakt(h.kontaktId)?.nev ?? id} — ${datum(h.datum)} ${h.ido}` : id;
    }
    ki.push({ cimke });
  }
  return ki;
}

function Oldalsav({ pathname }: { pathname: string }) {
  return (
    <nav className="flex w-[236px] flex-none flex-col border-r border-(--a-border) bg-white">
      <div className="flex h-[56px] flex-none items-center border-b border-(--a-border) px-4">
        <Link href={`${BASE}/attekintes`} className="flex items-center gap-2">
          <Szoveglogo meret={16} />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-2.5 py-3">
        {NAV.map((n) => {
          const aktiv = pathname === n.href || pathname.startsWith(`${n.href}/`);
          const Ikon = n.ikon;
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={aktiv ? "page" : undefined}
              className={`mb-0.5 flex h-9 items-center gap-2.5 rounded-lg px-2.5 text-[13px] transition-colors duration-150 ${
                aktiv
                  ? "bg-(--a-accent-soft) font-medium text-(--a-accent)"
                  : "text-(--a-muted) hover:bg-(--a-hover) hover:text-(--a-text)"
              }`}
            >
              <Ikon size={16} strokeWidth={1.75} className="flex-none" aria-hidden="true" />
              {n.cimke}
            </Link>
          );
        })}
      </div>

      <div className="flex-none border-t border-(--a-border) px-4 py-3 text-[12px] text-(--a-muted)">
        Demó környezet
      </div>
    </nav>
  );
}

function Felsosav({ pathname }: { pathname: string }) {
  const lista = morzsak(pathname);
  return (
    <header className="flex h-[56px] flex-none items-center justify-between gap-4 border-b border-(--a-border) bg-white px-6">
      <div className="flex items-center gap-1.5 text-[13px]">
        {lista.map((m, i) => (
          <span key={`${m.cimke}-${i}`} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-(--a-border-strong)">/</span>}
            {m.href ? (
              <Link href={m.href} className="text-(--a-muted) transition-colors duration-150 hover:text-(--a-text)">
                {m.cimke}
              </Link>
            ) : (
              <span className={i === 0 ? "text-(--a-muted)" : ""}>{m.cimke}</span>
            )}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="a-mono text-[12px] text-(--a-muted)">{datum(DEMO_TODAY)}</span>
        <span className="h-4 w-px bg-(--a-border)" />
        <span className="flex items-center gap-2">
          <span className="a-mono flex h-7 w-7 items-center justify-center rounded-full bg-(--a-accent-soft) text-[11px] text-(--a-accent)">
            {monogram(OPERATOR.nev)}
          </span>
          <span className="text-[13px]">{OPERATOR.nev}</span>
        </span>
      </div>
    </header>
  );
}

export default function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // The login screen and the client portal deliberately render without the
  // operator chrome. Both are full-bleed inside the same fixed viewport.
  const csupasz = pathname === BASE || pathname.startsWith(`${BASE}/portal`);

  if (csupasz) {
    return (
      <div className="atlas fixed inset-0 z-50 overflow-y-auto bg-(--a-canvas)">{children}</div>
    );
  }

  return (
    <div className="atlas fixed inset-0 z-50 flex overflow-hidden bg-(--a-canvas)">
      <Oldalsav pathname={pathname} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Felsosav pathname={pathname} />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[1200px] px-6 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
