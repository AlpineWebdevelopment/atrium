"use client";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
          <a href="/" className="nav__brand" aria-label="Atrium">
            Atrium<span className="dot" aria-hidden="true" />
          </a>
          <nav className="nav__links" aria-label="primary">
            <a href="/#rendszer" className="nav__link">A rendszer</a>
            <a href="/#indulas" className="nav__link">Hogyan indulunk</a>
            <a href="/#crm" className="nav__link">AI CRM</a>
            <a href="/#gyik" className="nav__link">GYIK</a>
            <a href="/#kapcsolat" className="nav__link">Kapcsolat</a>
            <a href="/blog" className="nav__link">Blog</a>
          </nav>
          <div className="nav__right">
            <ThemeToggle />
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
              <a href="/#rendszer-teljes" className="nav__mobile-link" onClick={() => setOpen(false)}>A rendszer</a>
              <a href="/#indulas" className="nav__mobile-link" onClick={() => setOpen(false)}>Hogyan indulunk</a>
              <a href="/#crm" className="nav__mobile-link" onClick={() => setOpen(false)}>AI CRM</a>
              <a href="/#gyik" className="nav__mobile-link" onClick={() => setOpen(false)}>GYIK</a>
              <a href="/#kapcsolat" className="nav__mobile-link" onClick={() => setOpen(false)}>Kapcsolat</a>
              <a href="/blog" className="nav__mobile-link" onClick={() => setOpen(false)}>Blog</a>
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
