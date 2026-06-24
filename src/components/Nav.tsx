"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isNicheSlug } from "@/lib/niches";

/* Relative hashes so links scroll within the current page (root or niche),
   never redirecting to "/". Only sections that exist on every page. */
const LINKS = [
  { href: "#rendszer",         label: "A rendszer" },
  { href: "#hogyan-dolgozunk", label: "Hogyan dolgozunk" },
  { href: "#gyik",             label: "GYIK" },
  { href: "#kapcsolat",        label: "Kapcsolat" },
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
  const blogHref = isNicheSlug(nicheSlug) ? `/${nicheSlug}/blog` : "/blog";
  const links = LINKS.map((l) =>
    l.href === "/blog" ? { ...l, href: blogHref } : l,
  );

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
            {/* ThemeToggle removed */}
            <a href="#kapcsolat" className="btn nav__cta">Foglaljon időpontot</a>
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
            <a href="#kapcsolat" className="btn nav__mobile-cta" onClick={() => setOpen(false)}>
              Foglaljon időpontot
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
