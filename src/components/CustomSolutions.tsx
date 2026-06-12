"use client";

/* Custom-scoped work — communicates SCALE: from a single process automation
   up to a whole bespoke system. The operator chooses how far it goes. */

const TIERS = [
  { b: "Egy folyamat", s: "egy konkrét probléma", x: 17, y: 200, c: "#7C5CFF" },
  { b: "Több folyamat", s: "összekötve, egy rendszerben", x: 50, y: 140, c: "#4AA3FF" },
  { b: "Teljes rendszer", s: "az egész működését átfogja", x: 84, y: 80, c: "#6DBC61" },
];

const PATH = "M170,200 C300,192 380,150 500,140 C620,130 720,92 840,80";

export default function CustomSolutions() {
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Egy folyamattól a teljes rendszerig.</h2>
          <p className="dash__p">
            Nem csak egyetlen automatizálás. Megépítünk egy konkrét folyamatot —
            vagy az egész működését átfogó egyedi rendszert. Ön választja meg a
            léptéket; amit AI-val meg lehet oldani, azt megépítjük.
          </p>
        </div>

        <div className="dash__card cux__card reveal" data-delay="1">
          <div className="cux__chart">
            <svg className="cux__svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gScale" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C5CFF" />
                  <stop offset="55%" stopColor="#4AA3FF" />
                  <stop offset="100%" stopColor="#6DBC61" />
                </linearGradient>
                <linearGradient id="gScaleFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(74,163,255,0.16)" />
                  <stop offset="100%" stopColor="rgba(74,163,255,0)" />
                </linearGradient>
              </defs>
              <path d={`${PATH} L840,300 L170,300 Z`} fill="url(#gScaleFill)" />
              <path d={PATH} fill="none" stroke="url(#gScale)" strokeWidth="3" strokeLinecap="round" />
              {TIERS.map((t, i) => (
                <circle key={i} cx={t.x * 10} cy={t.y} r="7" fill={t.c} stroke="var(--bone)" strokeWidth="3" />
              ))}
            </svg>

            {TIERS.map((t, i) => (
              <div
                className="funnel__stage"
                key={i}
                style={{
                  left: `${t.x}%`,
                  top: `${(t.y / 300) * 100 + (i === 1 ? -22 : 24)}%`,
                  ["--stc" as string]: t.c,
                } as React.CSSProperties}
              >
                <b>{t.b}</b>
                <span>{t.s}</span>
              </div>
            ))}
          </div>

          <p className="cux__foot">
            Ön választ: egy automatizálás, néhány összekötött folyamat, vagy a
            teljes rendszer — ahogy a cégének a legjobb.
          </p>
        </div>
      </div>
    </section>
  );
}
