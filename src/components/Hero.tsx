"use client";
import { useEffect, useState } from "react";

/* Hero — left: outcome copy. Right: "Egy tipikus nap" — a realistic owner's day
   as colourful timeline rows (coloured icon chip + time + what the system did),
   above a row of the channels it covers (incl. Viber). The "now" marker advances
   through the day; past moments mark done. */

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  sms: <g><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></g>,
  whatsapp: <g><path d="M3.2 20.8l1.4-3.7A8 8 0 1 1 7.7 19.8z" /><path d="M9 9c.2 2.4 3.4 5.6 5.8 5.8.5 0 1.2-.5 1.4-1" /></g>,
  viber: <g><path d="M12 2C6.8 2 2.5 5.9 2.5 10.7c0 2.6 1.3 5 3.4 6.6V21l3.2-1.8c.9.2 1.9.3 2.9.3 5.2 0 9.5-3.9 9.5-8.8S17.2 2 12 2z" /><path d="M9 8c.2 2.4 3.4 5.6 5.8 5.8.5 0 1.2-.5 1.4-1" /></g>,
  messenger: <g><path d="M12 2C6.5 2 2 6.1 2 11.1c0 2.8 1.4 5.3 3.6 7v3.4l3.3-1.8c1 .3 2 .4 3.1.4 5.5 0 10-4.1 10-9.1S17.5 2 12 2z" /><path d="M6.9 13.6l3-3.2 2 2 2.9-2.2-3 3.2-2-2z" /></g>,
  instagram: <g><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></g>,
  email: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bell: <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  bars: <path d="M12 20V10M18 20V4M6 20v-6" />,
};

const CHANNELS = [
  { k: "phone", c: "#34C759" }, { k: "sms", c: "#4AA3FF" }, { k: "whatsapp", c: "#25D366" },
  { k: "viber", c: "#7360F2" }, { k: "messenger", c: "#0084FF" }, { k: "instagram", c: "#E4405F" }, { k: "email", c: "#D9534F" },
];

const DAY = [
  { time: "06:40", k: "calendar", c: "#7C5CFF", t: "5 éjszakai foglalás — reggelre a naptárban" },
  { time: "08:10", k: "callback", c: "#34C759", t: "Nem fogadott esti hívás visszahívva" },
  { time: "10:30", k: "chat", c: "#4AA3FF", t: "Új érdeklődő megválaszolva és kvalifikálva" },
  { time: "13:15", k: "refresh", c: "#54CFC0", t: "Lemondás → várólista 1 perc alatt" },
  { time: "16:00", k: "bell", c: "#45B5D6", t: "Lejáró bérletek — emlékeztető SMS-ben" },
  { time: "18:45", k: "star", c: "#E8A33D", t: "Értékelés bekérve egy elégedett ügyféltől" },
  { time: "21:00", k: "bars", c: "#46C79A", t: "Nap vége: tele naptár, 0 kihagyott hívás" },
];

export default function Hero() {
  const [cur, setCur] = useState(DAY.length - 1);
  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % DAY.length), 2100);
    return () => clearInterval(t);
  }, []);

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

          {/* Right — "a typical day" colourful timeline + channel row */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy tipikus nap</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head">
                <span className="hcon__live"><i /> Egy nap a rendszerrel</span>
                <span className="hcon__chans">
                  {CHANNELS.map((c) => (
                    <svg key={c.k} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: c.c }}>{ICONS[c.k]}</svg>
                  ))}
                </span>
              </div>
              <div className="hcon__feed">
                {DAY.map((d, i) => {
                  const state = i < cur ? "done" : i === cur ? "now" : "up";
                  return (
                    <div className={"hcon__row hcon__row--" + state} key={i}>
                      <span className="hcon__ico" style={{ background: `color-mix(in srgb, ${d.c} 13%, var(--bone))`, color: d.c, border: `1px solid color-mix(in srgb, ${d.c} 30%, transparent)` }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[d.k]}</svg>
                      </span>
                      <span className="hcon__txt">
                        <span className="hcon__time">{d.time}</span>
                        <span className="hcon__ev">{d.t}</span>
                      </span>
                      <span className="hcon__done">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
