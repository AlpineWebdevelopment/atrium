"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isNicheSlug } from "@/lib/niches";
import ThemeToggle from "@/components/ThemeToggle";

/* Relative hashes so links scroll within the current page (root or niche),
   never redirecting to "/". Only sections that exist on every page. */
const LINKS = [
  { href: "home",              label: "Főoldal" },
  { href: "#rendszer-teljes",  label: "Szolgáltatások" },
  { href: "#egyedi",           label: "Egyedi fejlesztés" },
  { href: "#gyik",             label: "GYIK" },
  { href: "/blog",             label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const logoHref = isRoot ? "/" : pathname;

  // On a niche route (/<niche> or /<niche>/blog) the "Blog" link points at that
  // niche's filtered index; everywhere else it points at the main /blog.
  const nicheSlug = pathname.split("/")[1];
  const onNiche = isNicheSlug(nicheSlug);
  const blogHref = onNiche ? `/${nicheSlug}/blog` : "/blog";

  // The section anchors (#rendszer, #kapcsolat, …) only exist on the landing
  // pages — the root (/) and the niche landings (/<niche>). On any other page
  // (e.g. /blog, /<niche>/blog, a blog post) a bare "#section" link goes
  // nowhere. There we prefix the hash with the matching landing page so the
  // link navigates back to it and scrolls to the section; on a landing page we
  // keep the bare hash so it scrolls in place without a reload.
  const landingBase = onNiche ? `/${nicheSlug}` : "/";
  const isLanding = pathname === landingBase;
  const hashBase = isLanding ? "" : landingBase;
  const hashHref = (hash: string) => `${hashBase}${hash}`;

  const links = LINKS.map((l) => {
    if (l.href === "home") return { ...l, href: landingBase || "/" };
    if (l.href === "/blog") return { ...l, href: blogHref };
    if (l.href.startsWith("#")) return { ...l, href: hashHref(l.href) };
    return l;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    el.style.gridTemplateRows = open ? "1fr" : "0fr";
    el.style.opacity = open ? "1" : "0";
    el.style.borderTopColor = open ? "var(--line-2)" : "transparent";
  }, [open]);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="wrap">
        <div className="nav__in">
          {/* ATRIUM-EDIT: logo href = current page on niche routes; never redirects to root */}
          <a href={logoHref} className="nav__brand" aria-label="Atrium">
            Atrium<span className="dot" aria-hidden="true" />
          </a>
          <nav className="nav__links" aria-label="primary">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
            ))}
          </nav>
          <div className="nav__right">
            <ThemeToggle />
            <a href={hashHref("#kapcsolat")} className="btn nav__cta">Foglaljon időpontot</a>
            <button
              className="nav__burger"
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      <div ref={menuRef} className="nav__mobile" aria-hidden={!open}>
        <div className="nav__mobile-inner">
          <div className="wrap">
            <nav className="nav__mobile-links" aria-label="mobile">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </nav>
            <a href={hashHref("#kapcsolat")} className="btn nav__mobile-cta" onClick={() => setOpen(false)}>
              Foglaljon időpontot
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
