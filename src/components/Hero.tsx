"use client";
import { useEffect, useState } from "react";

/* Hero — left: outcome copy. Right: "Egy tipikus nap" — a realistic day of a
   service-business owner where the system quietly handles each moment. The
   "current hour" advances through the day; past moments are marked done. */

const DAY = [
  { time: "06:40", t: "5 éjszakai foglalás — reggelre mind a naptárban." },
  { time: "08:10", t: "Nem fogadott esti hívás visszahívva, időpont egyeztetve." },
  { time: "10:30", t: "Viber-érdeklődő magyarul megválaszolva és kvalifikálva." },
  { time: "13:15", t: "Lemondott időpont 1 perc alatt a várólistának felajánlva." },
  { time: "16:00", t: "Két lejáró bérlet — emlékeztető kiment SMS-ben." },
  { time: "18:45", t: "Értékelés bekérve egy elégedett ügyféltől." },
  { time: "21:00", t: "Nap vége: 14 foglalás, 0 elszalasztott hívás — a riportban." },
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

          {/* Right — "a typical day" timeline */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy tipikus nap</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hday">
                <div className="hday__h"><span className="hday__live" /> Egy nap a rendszerrel</div>
                <div className="hday__list">
                  {DAY.map((d, i) => {
                    const state = i < cur ? "done" : i === cur ? "now" : "up";
                    return (
                      <div className={"hday__row hday__row--" + state} key={i}>
                        <span className="hday__time">{d.time}</span>
                        <span className="hday__txt">{d.t}</span>
                        <span className="hday__dot">
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
      </div>
    </section>
  );
}
