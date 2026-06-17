"use client";
import { useEffect, useState } from "react";

/* Hero — left: outcome copy. Right: a live "activity console" product mock with
   a multi-channel header and a long streaming feed that shows the breadth of
   what the system does (reception, follow-up, qualify, booking, confirmation,
   reminder, no-show, reviews, reactivation, reporting — across every channel). */

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  sms: <g><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></g>,
  whatsapp: <g><path d="M3.2 20.8l1.4-3.7A8 8 0 1 1 7.7 19.8z" /><path d="M9 9c.2 2.4 3.4 5.6 5.8 5.8.5 0 1.2-.5 1.4-1" /></g>,
  messenger: <g><path d="M12 2C6.5 2 2 6.1 2 11.1c0 2.8 1.4 5.3 3.6 7v3.4l3.3-1.8c1 .3 2 .4 3.1.4 5.5 0 10-4.1 10-9.1S17.5 2 12 2z" /><path d="M6.9 13.6l3-3.2 2 2 2.9-2.2-3 3.2-2-2z" /></g>,
  instagram: <g><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></g>,
  email: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>,
  webchat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  confirm: <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  bell: <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bars: <path d="M12 20V10M18 20V4M6 20v-6" />,
};

const CHANNELS = [
  { k: "phone", c: "#34C759" }, { k: "sms", c: "#4AA3FF" }, { k: "whatsapp", c: "#25D366" },
  { k: "messenger", c: "#0084FF" }, { k: "instagram", c: "#E4405F" }, { k: "email", c: "#D9534F" }, { k: "webchat", c: "#54CFC0" },
];

const FEED = [
  { k: "phone", c: "#34C759", t: "Hívás fogadva", d: "időpont egyeztetve · 21:42" },
  { k: "webchat", c: "#54CFC0", t: "Webes érdeklődő", d: "2 percen belül visszahíva" },
  { k: "whatsapp", c: "#25D366", t: "WhatsApp üzenet", d: "azonnal megválaszolva" },
  { k: "phone", c: "#7C5CFF", t: "Kvalifikáció", d: "a megfelelő kérdésekkel pontozva" },
  { k: "calendar", c: "#4AA3FF", t: "Időpont foglalva", d: "egyenesen a naptárba" },
  { k: "confirm", c: "#45B5D6", t: "Visszaigazolás", d: "SMS-ben elküldve" },
  { k: "bell", c: "#54CFC0", t: "Emlékeztető", d: "a látogatás előtt" },
  { k: "callback", c: "#46C79A", t: "No-show visszahívva", d: "új időpont egyeztetve" },
  { k: "messenger", c: "#0084FF", t: "Messenger kérdés", d: "magyarul megválaszolva" },
  { k: "star", c: "#E8A33D", t: "Értékelés bekérve", d: "elégedett ügyféltől" },
  { k: "refresh", c: "#9B7BFF", t: "Régi ügyfél", d: "magától újraaktiválva" },
  { k: "instagram", c: "#E4405F", t: "Instagram DM", d: "lead rögzítve a CRM-be" },
  { k: "bars", c: "#4AA3FF", t: "Heti riport", d: "elkészült és elküldve" },
];

export default function Hero() {
  const [off, setOff] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setOff((o) => (o + 1) % FEED.length), 2000);
    return () => clearInterval(t);
  }, []);
  const rows = Array.from({ length: 5 }, (_, i) => FEED[(off + i) % FEED.length]);

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

          {/* Right — live activity console */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · élő rendszer</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head">
                <span className="hcon__live"><i /> Élőben · 7 csatorna</span>
                <span className="hcon__chans">
                  {CHANNELS.map((c) => (
                    <svg key={c.k} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: c.c }}>{ICONS[c.k]}</svg>
                  ))}
                </span>
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
                    <span className="hcon__done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg></span>
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
