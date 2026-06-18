"use client";
import { useEffect, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  sms: <g><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></g>,
  whatsapp: <g><path d="M3.2 20.8l1.4-3.7A8 8 0 1 1 7.7 19.8z" /><path d="M9 9c.2 2.4 3.4 5.6 5.8 5.8.5 0 1.2-.5 1.4-1" /></g>,
  viber: <g><path d="M12 2C6.8 2 2.5 5.9 2.5 10.7c0 2.6 1.3 5 3.4 6.6V21l3.2-1.8c.9.2 1.9.3 2.9.3 5.2 0 9.5-3.9 9.5-8.8S17.2 2 12 2z" /><path d="M9 8c.2 2.4 3.4 5.6 5.8 5.8.5 0 1.2-.5 1.4-1" /></g>,
  messenger: <g><path d="M12 2C6.5 2 2 6.1 2 11.1c0 2.8 1.4 5.3 3.6 7v3.4l3.3-1.8c1 .3 2 .4 3.1.4 5.5 0 10-4.1 10-9.1S17.5 2 12 2z" /><path d="M6.9 13.6l3-3.2 2 2 2.9-2.2-3 3.2-2-2z" /></g>,
  instagram: <g><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></g>,
  email: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>,
  webchat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  qualify: <g><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 4V2.5h6V4" /><path d="M8.5 13l2 2 4-4.5" /></g>,
  users: <g><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" /><circle cx="17.5" cy="9" r="2.4" /><path d="M21.5 20v-.5a4 4 0 0 0-3-3.6" /></g>,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bell: <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  home: <g><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /></g>,
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z" />,
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  shield: <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z" />,
};

const CHANNELS = [
  { k: "phone", c: "#6DBC61" }, { k: "sms", c: "#628FBC" }, { k: "whatsapp", c: "#6DBC61" }, { k: "viber", c: "#9662BC" },
  { k: "messenger", c: "#628FBC" }, { k: "instagram", c: "#C46C64" }, { k: "email", c: "#C46C64" }, { k: "webchat", c: "#62BCAC" },
];

const DAY = [
  { time: "06:50", k: "callback", c: "#6DBC61", t: "Még alszik — a 2 éjjeli foglalási kérés már visszaigazolva." },
  { time: "07:30", k: "calendar", c: "#BC6285", t: "Reggeli közben 3 új időpont futott be a hétre." },
  { time: "08:15", k: "webchat", c: "#62BCAC", t: "Egy vendég 30 mp alatt választ kapott a kezeléssel kapcsolatban." },
  { time: "09:40", k: "phone", c: "#628FBC", t: "Kezelésnél van — közben 4 hívást is felvett a rendszer." },
  { time: "11:00", k: "qualify", c: "#BCA162", t: "Csak az árat kérdezték — előszűrve, nem foglal felesleg helyet." },
  { time: "12:20", k: "users", c: "#628FBC", t: "Lemondás 1 perc alatt a várólistának — nem marad üres szék." },
  { time: "13:30", k: "refresh", c: "#BC6285", t: "Egy féléve nem járt vendég visszahíva a szezonális ajánlathoz." },
  { time: "15:10", k: "bell", c: "#62BCAC", t: "A holnapi vendégek emlékeztetőt kaptak — kevesebb no-show." },
  { time: "16:45", k: "star", c: "#BCA162", t: "Egy elégedett vendégtől a rendszer értékelést kért." },
  { time: "18:00", k: "phone", c: "#6DBC61", t: "Szalon zárva — de egy foglalás se vész el." },
  { time: "20:15", k: "home", c: "#BC6285", t: "Ön otthon pihen — a rendszer dolgozik tovább." },
  { time: "21:30", k: "moon", c: "#628FBC", t: "Tele naptár, 0 elszalasztott hívás. Nyugodtan alszik." },
];

const PHRASES = [
  "elszalasztott hívások miatt",
  "elfelejtett foglalások miatt",
  "lassú visszahívás miatt",
  "lemondott időpontok miatt",
  "kihűlt vendégek miatt",
];

export default function HeroSalon() {
  const [cur, setCur] = useState(DAY.length - 1);
  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % DAY.length), 1800);
    return () => clearInterval(t);
  }, []);

  const [pi, setPi] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = PHRASES[pi];
    let delay = del ? 32 : 62;
    if (!del && text === full) delay = 1500;
    else if (del && text === "") delay = 220;
    const id = setTimeout(() => {
      if (!del && text === full) setDel(true);
      else if (del && text === "") { setDel(false); setPi((p) => (p + 1) % PHRASES.length); }
      else setText(full.slice(0, text.length + (del ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, del, pi]);

  return (
    <section className="hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__content reveal reveal--instant visible">
            <span className="hero__eyebrow">Szépségszalonoknak</span>
            {/* ATRIUM-EDIT SS1 — static headline replaces rotating typewriter; "lassú visszahívás miatt" anchors the problem-led line */}
            <h1 className="hero__title">
              Ne veszítsen több vendéget lassú visszahívás miatt
            </h1>
            <p className="hero__sub">
              {/* ATRIUM-EDIT SS2 — ügyfélkezelési → értékesítési; consistent with footer and brand spec category line */}
              Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer szépségszalonoknak: minden hívást felvesz, minden foglalást megerősít, minden vendéget visszahoz — a háttérben, az Ön naptárához kötve.
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

          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy nap a szalonban</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head2">
                <span className="hcon__title"><i /> Amíg Ön a vendégét kezeli</span>
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
              <div className="hcon__foot">Ön kezel — a rendszer közben mindenre figyel.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
