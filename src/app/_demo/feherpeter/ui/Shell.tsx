"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { BASE } from "../data/config";
import { StoreProvider, useStore } from "../lib/store";
import { isAdmin, isMember } from "../lib/access";
import { ADMIN_NAV, MEMBER_NAV } from "./nav";
import { RoleSwitcher } from "./RoleSwitcher";
import { UpgradeProvider, useUpgrade } from "./UpgradeModal";
import { Button, Eyebrow } from "./primitives";
import "../styles/tokens.css";

/* Layout for every route under /feherpeter-demo. The landing is full-bleed;
   member pages get a top nav; admin pages get a sidebar. All of it sits in a
   fixed layer above the marketing site so its nav and base styles stay out. */

export function Wordmark({ size = 15 }: { size?: number }) {
  const { config } = useStore();
  return (
    <span className="fp-display inline-flex items-baseline gap-2" style={{ fontSize: size }}>
      <span className="text-(--fp-gold)">{config.mentorName}</span>
      <span className="font-normal text-(--fp-muted-fg)">Akadémia</span>
    </span>
  );
}

function MemberHeader({ pathname }: { pathname: string }) {
  const { role, me, myRank } = useStore();
  // The mobile menu remembers the path it was opened on, so navigating
  // closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => setOpenAt((typeof v === "function" ? v(open) : v) ? pathname : null);

  return (
    <header className="sticky top-0 z-40 border-b border-(--fp-border) bg-(--fp-bg)/80 backdrop-blur-md" style={{ top: "env(safe-area-inset-top, 0px)" }}>
      <div className="fp-container flex h-14 items-center justify-between gap-4">
        <Link href={BASE} className="flex-none">
          <Wordmark size={16} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Tagi menü">
          {MEMBER_NAV.map((n) => {
            const active = pathname === n.href || pathname.startsWith(`${n.href}/`);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-(--fp-radius-md) px-3 py-1.5 text-[13px] transition-colors ${
                  active ? "bg-(--fp-secondary) text-(--fp-fg)" : "text-(--fp-muted-fg) hover:text-(--fp-gold)"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          {isAdmin(role) && (
            <Link href={`${BASE}/admin`} className="ml-2 rounded-(--fp-radius-md) border border-(--fp-gold-30) px-3 py-1.5 text-[13px] text-(--fp-gold)">
              Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {me ? (
            <Link href={`${BASE}/profil`} className="hidden items-center gap-2 text-[13px] sm:flex">
              <span>{me.name}</span>
              <span className="text-(--fp-muted-fg)">· {myRank.level}. szint</span>
            </Link>
          ) : (
            <span className="hidden text-[13px] text-(--fp-muted-fg) sm:inline">Vendég</span>
          )}
          <button type="button" className="rounded p-1.5 text-(--fp-muted-fg) hover:text-(--fp-fg) lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Menü bezárása" : "Menü"} aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fp-fade border-t border-(--fp-border) bg-(--fp-bg) lg:hidden" aria-label="Tagi menü">
          <div className="fp-container grid gap-0.5 py-2">
            {[...MEMBER_NAV, ...(isAdmin(role) ? [{ href: `${BASE}/admin`, label: "Admin", icon: Menu }] : [])].map((n) => {
              const active = pathname === n.href || pathname.startsWith(`${n.href}/`);
              const Icon = n.icon;
              return (
                <Link key={n.href} href={n.href} className={`flex items-center gap-3 rounded-(--fp-radius-md) px-3 py-2.5 text-sm ${active ? "bg-(--fp-secondary)" : "text-(--fp-muted-fg)"}`}>
                  <Icon size={16} aria-hidden="true" />
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

function AdminSidebar({ pathname }: { pathname: string }) {
  const { config } = useStore();
  return (
    <>
      <aside className="hidden w-[232px] flex-none flex-col border-r border-(--fp-border) bg-(--fp-card) md:flex">
        <div className="flex h-14 items-center border-b border-(--fp-border) px-4">
          <Link href={BASE}>
            <Wordmark size={14} />
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-2.5" aria-label="Admin menü">
          <Eyebrow className="mb-2 px-2.5 pt-2 text-[10px]">Admin</Eyebrow>
          {ADMIN_NAV.map((n) => {
            const active = n.href === `${BASE}/admin` ? pathname === n.href : pathname.startsWith(n.href);
            const Icon = n.icon;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`mb-0.5 flex h-9 items-center gap-2.5 rounded-(--fp-radius-md) px-2.5 text-[13px] transition-colors ${
                  active ? "bg-(--fp-gold-10) text-(--fp-gold)" : "text-(--fp-muted-fg) hover:bg-(--fp-secondary) hover:text-(--fp-fg)"
                }`}
              >
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                {n.label}
              </Link>
            );
          })}
          <div className="mt-4 border-t border-(--fp-border) pt-3">
            <Link href={`${BASE}/kozosseg`} className="flex h-9 items-center px-2.5 text-[13px] text-(--fp-muted-fg) hover:text-(--fp-fg)">
              ← Tagi nézet
            </Link>
          </div>
        </nav>
        <div className="border-t border-(--fp-border) px-4 py-3 text-[12px] text-(--fp-muted-fg)">
          {config.currentWeek}. hét · demó környezet
        </div>
      </aside>
      <div className="flex gap-1 overflow-x-auto border-b border-(--fp-border) bg-(--fp-card) px-3 py-2 md:hidden">
        {ADMIN_NAV.map((n) => {
          const active = n.href === `${BASE}/admin` ? pathname === n.href : pathname.startsWith(n.href);
          return (
            <Link key={n.href} href={n.href} className={`flex-none rounded-(--fp-radius-md) px-2.5 py-1.5 text-[12px] ${active ? "bg-(--fp-gold-10) text-(--fp-gold)" : "text-(--fp-muted-fg)"}`}>
              {n.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}

function GuestGate() {
  const openUpgrade = useUpgrade();
  return (
    <div className="fp-container py-20 text-center">
      <Eyebrow className="mb-4">Tagoknak</Eyebrow>
      <h1 className="mx-auto max-w-xl text-3xl md:text-4xl">Ez a rész az akadémia tagjainak szól</h1>
      <p className="mx-auto mt-4 max-w-md text-(--fp-muted-fg)">
        A közösség, a heti feladatok, a kurzusok és az élő alkalmak a tagoknak nyílnak meg. Nézd meg, melyik szint való neked.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={() => openUpgrade("alap")}>Csatlakozom</Button>
        <Link href={BASE} className="fp-btn fp-btn--outline">
          Vissza a nyitóoldalra
        </Link>
      </div>
      <p className="mt-10 text-xs text-(--fp-muted-fg)">A demóban válts szerepkört a jobb alsó sávban, hogy lásd a tagi nézetet.</p>
    </div>
  );
}

function AdminGate() {
  return (
    <div className="fp-container py-20 text-center">
      <Eyebrow className="mb-4">Admin</Eyebrow>
      <h1 className="text-3xl">Ehhez admin szerepkör kell</h1>
      <p className="mx-auto mt-4 max-w-md text-(--fp-muted-fg)">Az adminfelület Péteré. A demóban válts Admin szerepkörre a jobb alsó sávban.</p>
    </div>
  );
}

function Frame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { role, hydrated } = useStore();
  const landing = pathname === BASE;
  const admin = pathname.startsWith(`${BASE}/admin`);

  let body: ReactNode = children;
  let chrome: "none" | "member" | "admin" = landing ? "none" : admin ? "admin" : "member";

  if (hydrated) {
    if (admin && !isAdmin(role)) {
      body = <AdminGate />;
      chrome = "member";
    } else if (!landing && !admin && !isMember(role)) {
      body = <GuestGate />;
    }
  }

  return (
    <div className="fpa fixed inset-0 z-50 flex flex-col overflow-hidden">
      {chrome === "admin" ? (
        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          <AdminSidebar pathname={pathname} />
          <main className="min-w-0 flex-1 overflow-y-auto">
            <div className="mx-auto max-w-[1200px] px-4 py-6 md:px-8 md:py-8">{body}</div>
          </main>
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          {chrome === "member" && <MemberHeader pathname={pathname} />}
          <main className="flex-1">{body}</main>
          {chrome === "member" && (
            <footer className="fp-container border-t border-(--fp-border) py-6 text-xs text-(--fp-muted-fg)">
              Demó · minden adat minta. A rangok, pontok és tartalmak a bemutatóhoz készültek.
            </footer>
          )}
        </div>
      )}
      <RoleSwitcher />
    </div>
  );
}

export default function Shell({ children, fontClass }: { children: ReactNode; fontClass: string }) {
  // `.fpa` sits on the outermost wrapper so the upgrade modal, which the
  // provider renders beside the page rather than inside it, gets the tokens.
  return (
    <div className={`fpa ${fontClass}`}>
      <StoreProvider>
        <UpgradeProvider>
          <Frame>{children}</Frame>
        </UpgradeProvider>
      </StoreProvider>
    </div>
  );
}
