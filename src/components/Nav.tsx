"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const ROOT_LINKS = [
  { href: "/#rendszer",  label: "A rendszer" },
  { href: "/#indulas",   label: "Hogyan indulunk" },
  { href: "/#crm",       label: "AI CRM" },
  { href: "/#gyik",      label: "GYIK" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
  { href: "/blog",       label: "Blog" },
];

/* Niche/service page links — relative hashes, no root redirect */
const PAGE_LINKS = [
  { href: "/#rendszer",  label: "A rendszer" },
  { href: "/#indulas",   label: "Hogyan indulunk" },
  { href: "/#gyik",      label: "GYIK" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
  { href: "/blog",      label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const logoHref = isRoot ? "/" : pathname;
  const links = isRoot ? ROOT_LINKS : PAGE_LINKS;

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    el.style.gridTemplateRows = open ? "1fr" : "0fr";
    el.style.opacity = open ? "1" : "0";
    el.style.borderTopColor = open ? "var(--line-2)" : "transparent";
  }, [open]);

  return (
    <header className="nav">
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
            <button className="btn nav__cta">Foglaljon időpontot</button>
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
            <button className="btn nav__mobile-cta" onClick={() => setOpen(false)}>
              Foglaljon időpontot
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
