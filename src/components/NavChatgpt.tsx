/* Header for /chatgpt-hirdetes only.

   This landing is a closed surface: every link here points inside the page
   or at the booking flow. The wordmark scrolls to the top instead of going
   to the root, and there is no "Főoldal" or blog entry, so a visitor who
   arrived from a ChatGPT ad cannot wander off into the rest of the site.
   The global Nav suppresses itself on these routes.

   `base` is empty on the landing itself and "/chatgpt-hirdetes" on the
   booking route, where the anchors have to travel back to the landing and
   the CTA would be pointless — the visitor is already booking. */
"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#rendszer-teljes", label: "Mit csinálunk" },
  { href: "#ugyfelek", label: "Ügyfelek" },
  { href: "#miert-most", label: "Miért most" },
  { href: "#indulas", label: "Hogyan indul" },
  { href: "#gyik", label: "GYIK" },
];

export default function NavChatgpt({ base = "" }: { base?: string }) {
  const onLanding = base === "";
  const to = (hash: string) => `${base}${hash}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav nav--newtype nav--cg${scrolled ? " nav--scrolled" : ""}`}>
      <div className="wrap">
        <div className="nav__in">
          <a href={onLanding ? "#rendszer" : base} className="nav__brand" aria-label={onLanding ? "Atrium — az oldal tetejére" : "Atrium — vissza az oldalra"}>
            Atrium<span className="dot" aria-hidden="true" />
          </a>
          <nav className="nav__links" aria-label="Oldalszakaszok">
            {LINKS.map((l) => (
              <a key={l.href} href={to(l.href)} className="nav__link">{l.label}</a>
            ))}
          </nav>
          <div className="nav__right">
            {onLanding && <a href="#kapcsolat" className="btn nav__cta cg-btn">Foglaljon időpontot.</a>}
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

      <div className={"nav__mobile nav__mobile--cg" + (open ? " nav__mobile--open" : "")} aria-hidden={!open}>
        <div className="nav__mobile-inner">
          <div className="wrap">
            <nav className="nav__mobile-links" aria-label="Oldalszakaszok, mobil">
              {LINKS.map((l) => (
                <a key={l.href} href={to(l.href)} className="nav__mobile-link" onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </nav>
            {onLanding && (
              <a href="#kapcsolat" className="btn nav__mobile-cta cg-btn" onClick={() => setOpen(false)}>
                Foglaljon időpontot.
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
