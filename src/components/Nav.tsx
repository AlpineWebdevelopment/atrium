"use client";

import { useState } from "react";

const NAV_LINKS = [
  { id: "home",         label: "Home" },
  { id: "capabilities", label: "Capabilities" },
  { id: "pricing",      label: "Pricing" },
  { id: "cases",        label: "In use at" },
  { id: "founder",      label: "Founder" },
];

function Wordmark() {
  return (
    <a href="#" className="wordmark" aria-label="Atrium home">
      <span className="wordmark__text">Atrium</span>
      <span className="wordmark__dot atr-dot atr-dot--live" aria-hidden="true" />
    </a>
  );
}

export default function Nav() {
  const [active, setActive] = useState("home");

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Wordmark />

        <div className="nav__center">
          <span className="nav__badge atr-mono-xs">Atrium pilot · 30 d</span>
          <ul className="nav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? "is-active" : undefined}
                  onClick={(e) => { e.preventDefault(); setActive(l.id); }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__cta">
          <button className="btn btn--ghost">
            Sign in →
          </button>
        </div>
      </div>
    </nav>
  );
}
