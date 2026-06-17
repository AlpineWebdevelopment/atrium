"use client";
import { useEffect, useState } from "react";

/* Hero — left: category eyebrow, static brand tagline, subhead, CTAs, trust row.
   Right: a live "activity console" — a product mock streaming the events the
   system handles in real time (the changing content lives here). All newly
   proposed pieces are tagged `új` for review. */

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
};

const FEED = [
  { k: "phone", c: "#34C759", t: "Hívás fogadva", d: "időpont egyeztetve", time: "21:42" },
  { k: "chat", c: "#4AA3FF", t: "Webes érdeklődő", d: "2 percen belül visszahíva", time: "21:39" },
  { k: "calendar", c: "#7C5CFF", t: "Időpont foglalva", d: "egyenesen a naptárba", time: "21:31" },
  { k: "callback", c: "#54CFC0", t: "No-show visszahívva", d: "új időpont egyeztetve", time: "20:58" },
  { k: "refresh", c: "#E8A33D", t: "Régi ügyfél", d: "magától újraaktiválva", time: "20:30" },
];

export default function Hero() {
  const [off, setOff] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setOff((o) => (o + 1) % FEED.length), 2200);
    return () => clearInterval(t);
  }, []);
  const rows = Array.from({ length: 4 }, (_, i) => FEED[(off + i) % FEED.length]);

  return (
    <section className="hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left — copy */}
          <div className="hero__content reveal reveal--instant visible">
            <span className="hero__eyebrow">Értékesítési rendszerek, operátori szemmel</span>
            <h1 className="hero__title">
              A bevétel, ami eddig elszivárgott, mostantól Önnél marad.
            </h1>
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer:
              minden hívást fogad, minden időpontot lefoglal, minden érdeklődőt
              utánkövet — a háttérben, az Ön eszközeivel.
            </p>
            <p className="hero__diff">
              <span className="newtag">új</span>
              Operátori szemmel építjük és üzemeltetjük — az Ön számai mellett, nem egy újabb eszköz.
            </p>
            <div className="hero__actions">
              <button className="btn">Foglaljon időpontot</button>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
            <div className="hero__trust2">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> Magyar nyelvű</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> EU hosting</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> GDPR-konform</span>
            </div>
          </div>

          {/* Right — live activity console (új) */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · élő rendszer</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head">
                <span className="hcon__live"><i /> Élőben</span>
                <svg className="hcon__spark" viewBox="0 0 96 26" preserveAspectRatio="none">
                  <polyline points="2,22 18,18 34,19 50,12 66,13 82,5 94,3" fill="none" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hcon__feed">
                {rows.map((r, i) => (
                  <div className={"hcon__row" + (i === 0 ? " hcon__row--new" : "")} key={i === 0 ? `n${off}` : i}>
                    <span className="hcon__ico" style={{ background: `color-mix(in srgb, ${r.c} 13%, var(--bone))`, color: r.c, border: `1px solid color-mix(in srgb, ${r.c} 30%, transparent)` }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[r.k]}</svg>
                    </span>
                    <span className="hcon__txt">
                      <b className="hcon__t">{r.t}</b>
                      <span className="hcon__d">{r.d}</span>
                    </span>
                    <span className="hcon__meta">
                      <span className="hcon__time">{r.time}</span>
                      <span className="hcon__done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> kész</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
