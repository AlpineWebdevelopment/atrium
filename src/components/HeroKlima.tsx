/* ATRIUM-EDIT KV1/KV2/KV3 — klíma (HVAC) hero.
   Static headline (no typewriter). Channels trimmed to phone/SMS/email/WhatsApp.
   DAY entries rewritten for heatwave-peak dispatch / karbantartás-recall context. */
"use client";
import { useEffect, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  sms: <g><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></g>,
  whatsapp: <g><path d="M3.2 20.8l1.4-3.7A8 8 0 1 1 7.7 19.8z" /><path d="M9 9c.2 2.4 3.4 5.6 5.8 5.8.5 0 1.2-.5 1.4-1" /></g>,
  email: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  qualify: <g><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 4V2.5h6V4" /><path d="M8.5 13l2 2 4-4.5" /></g>,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bell: <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  home: <g><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /></g>,
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z" />,
  bars: <path d="M12 20V10M18 20V4M6 20v-6" />,
};

/* KV11 — trimmed to phone-led channels only */
const CHANNELS = [
  { k: "phone", c: "#6DBC61" },
  { k: "sms", c: "#628FBC" },
  { k: "whatsapp", c: "#6DBC61" },
  { k: "email", c: "#C46C64" },
];

const DAY = [
  { time: "06:50", k: "callback", c: "#6DBC61", t: "Még alszik — a 2 éjjeli hívás már visszahíva, a 3. holnap reggelre egyeztetve." },
  { time: "07:30", k: "phone", c: "#628FBC", t: "3 reggeli hívást fogadott a rendszer, amíg Ön az első kiszállásra ért." },
  { time: "08:15", k: "calendar", c: "#9662BC", t: "Klímabeszerelés felmérése egyenesen a naptárba — Ön nélkül." },
  { time: "09:40", k: "qualify", c: "#AD83CC", t: "Csak árat kérdezett valaki — a rendszer kvalifikálta, az Ön idejét nem vette el." },
  { time: "11:00", k: "sms", c: "#628FBC", t: "Egy érdeklődő nem telefonált, hanem írt — a rendszer ott is felvette a fonalat." },
  { time: "12:20", k: "refresh", c: "#BCA162", t: "Egy 3 hete kiküldött beszerelési ajánlat utánkövetése elindult." },
  { time: "13:30", k: "callback", c: "#6DBC61", t: "2 elmaradt esedékes karbantartás újraegyeztetve — mindkettő elfogadta." },
  { time: "15:10", k: "bell", c: "#62BCAC", t: "Holnapi kiszállásokra emlékeztetők elküldve." },
  { time: "16:45", k: "star", c: "#BCA162", t: "Egy elégedett ügyféltől a rendszer értékelést kért." },
  { time: "18:00", k: "bars", c: "#6DBC61", t: "Zárás után egy pillantás a telefonján — a rendszer megmutatja, mit hozott a mai nap." },
  { time: "20:15", k: "home", c: "#9662BC", t: "Ön otthon, a családdal — a rendszer dolgozik tovább." },
  { time: "21:30", k: "moon", c: "#628FBC", t: "3 visszahívott érdeklődő, 2 lefoglalt kiszállás. Nyugodtan alszik." },
];

export default function HeroKlima() {
  const [cur, setCur] = useState(DAY.length - 1);
  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % DAY.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left — copy */}
          <div className="hero__content reveal reveal--instant visible">
            {/* ATRIUM-EDIT KV1 — klíma category line */}
            <span className="hero__eyebrow">Értékesítési rendszer klímaszervizeknek.</span>
            {/* ATRIUM-EDIT KV2 — static klíma headline; no typewriter needed */}
            <h1 className="hero__title">
              A rendszer, amely akkor is értékesít, amikor Ön a tetőn, a klímánál van.
            </h1>
            {/* ATRIUM-EDIT KV3 — klíma subhead */}
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer
              klímaszervizeknek — minden hívást fogad a hőségcsúcson is, minden
              ajánlatot utánkövet, és minden érdeklődőt visszahív, amíg Ön kint
              dolgozik.
            </p>
            <div className="hero__actions">
              <button className="btn">Foglaljon időpontot</button>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
            {/* KV11 — trust strip */}
            <div className="hero__trust2">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> Magyar nyelvű</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> EU hosting</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> GDPR-konform</span>
            </div>
          </div>

          {/* Right — a day in the life on a klíma service company */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy nap a rendszerrel</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head2">
                <span className="hcon__title"><i /> Amíg Ön a klímánál van</span>
                <span className="hcon__chans">
                  {CHANNELS.map((c) => (
                    <svg key={c.k} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: c.c }}>{ICONS[c.k]}</svg>
                  ))}
                </span>
              </div>
              <div className="hcon__cols">
                {[DAY.slice(0, 6), DAY.slice(6)].map((col, ci) => (
                  <div className="hcon__col" key={ci}>
                    {col.map((d, ri) => {
                      const gi = ci * 6 + ri;
                      const state = gi < cur ? "done" : gi === cur ? "now" : "up";
                      return (
                        <div className={"hcon__row hcon__row--" + state} key={gi}>
                          <span className="hcon__ico" style={{ background: `color-mix(in srgb, ${d.c} 26%, var(--bone))`, color: d.c, border: `1px solid color-mix(in srgb, ${d.c} 55%, transparent)` }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[d.k]}</svg>
                          </span>
                          <span className="hcon__txt">
                            <span className="hcon__time">{d.time}</span>
                            <span className="hcon__ev">{d.t}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="hcon__foot">Ön kint dolgozik — a rendszer közben mindenre figyel.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
