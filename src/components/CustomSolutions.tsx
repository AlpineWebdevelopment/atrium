"use client";

/* Custom builds — colourful branches grafted onto the full-system trunk.
   Dark card = the page's one restrained highlight for this section. */

const TRUNK_Y = 170;

const ITEMS = [
  { b: "Árajánlat-utánkövetés", s: "kiküldve még nem eladva", x: 18, y: 70, c: "#7C5CFF" },
  { b: "Lejárt számlák", s: "udvariasan, következetesen", x: 33, y: 250, c: "#4AA3FF" },
  { b: "Várólista-feltöltés", s: "lemondás után azonnal", x: 48, y: 60, c: "#54CFC0" },
  { b: "Előzetes adatbekérés", s: "még az időpont előtt", x: 63, y: 255, c: "#E8A33D" },
  { b: "Idegen nyelvű ügyfelek", s: "németül és angolul", x: 78, y: 75, c: "#9B7BFF" },
  { b: "+ az Ön folyamata", s: "ezt együtt találjuk ki", x: 84, y: 170, c: "#6DBC61", sig: true },
];

/* node centre x in viewBox units */
const ncx = (it: (typeof ITEMS)[number]) => it.x * 10 + (it.sig ? 20 : 0);

const BRANCHES = [
  "M130,170 C160,170 165,100 180,70",
  "M280,170 C310,170 315,215 330,250",
  "M430,170 C460,170 465,95 480,60",
  "M580,170 C610,170 615,222 630,255",
  "M730,170 C760,170 765,110 780,75",
];

export default function CustomSolutions() {
  const branched = ITEMS.filter((it) => !it.sig);
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Amit a hét lépés nem fed le, megépítjük.</h2>
          <p className="dash__p">
            Minden cégnek van olyan folyamata, amire nincs kész recept.
            Ilyenkor nem a céget igazítjuk a rendszerhez — a rendszert
            építjük a cég köré. Ön elmondja, hol veszít időt vagy bevételt;
            mi megépítjük, ami azt bezárja.
          </p>
        </div>

        <div className="dash__card cux__card reveal" data-delay="1">
          <div className="cux__chart">
            <svg className="cux__svg" viewBox="0 0 1000 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gTrunk" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(245,242,237,0.35)" />
                  <stop offset="72%" stopColor="rgba(245,242,237,0.30)" />
                  <stop offset="100%" stopColor="#6DBC61" />
                </linearGradient>
                {/* one gradient per branch: trunk → that branch's colour */}
                {branched.map((it, i) => {
                  const nx = ncx(it);
                  return (
                    <linearGradient
                      key={i}
                      id={`gBranch${i}`}
                      gradientUnits="userSpaceOnUse"
                      x1={nx - 50}
                      y1={TRUNK_Y}
                      x2={nx}
                      y2={it.y}
                    >
                      <stop offset="0%" stopColor="rgba(245,242,237,0.22)" />
                      <stop offset="100%" stopColor={it.c} />
                    </linearGradient>
                  );
                })}
                <filter id="cuxGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="3.2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* trunk — the full system, flowing into your custom process */}
              <path d={`M120,${TRUNK_Y} L860,${TRUNK_Y}`} fill="none" stroke="url(#gTrunk)" strokeWidth="3" strokeLinecap="round" filter="url(#cuxGlow)" />
              {/* flowing pulse-dots travelling along the trunk toward the green node */}
              <path d={`M120,${TRUNK_Y} L860,${TRUNK_Y}`} fill="none" stroke="#6DBC61" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 151" opacity="0.85">
                <animate attributeName="stroke-dashoffset" from="156" to="0" dur="2.6s" repeatCount="indefinite" />
              </path>

              {/* colourful custom branches */}
              {branched.map((it, i) => (
                <path key={i} d={BRANCHES[i]} fill="none" stroke={`url(#gBranch${i})`} strokeWidth="2.5" strokeLinecap="round" filter="url(#cuxGlow)" />
              ))}

              {/* trunk anchor for the "A teljes rendszer" label */}
              <circle cx="120" cy={TRUNK_Y} r="5" fill="rgba(245,242,237,0.85)" />

              {/* nodes — colour halo + glowing dot */}
              {ITEMS.map((it, i) => {
                const x = ncx(it);
                return (
                  <g key={i}>
                    <circle cx={x} cy={it.y} r={it.sig ? 17 : 13} fill={it.c} opacity="0.16" />
                    <circle cx={x} cy={it.y} r={it.sig ? 9 : 7} fill={it.c} stroke="#0a1422" strokeWidth="3" filter="url(#cuxGlow)" />
                    {it.sig && (
                      <circle cx={x} cy={it.y} r="9" fill="none" stroke="#6DBC61" strokeWidth="2">
                        <animate attributeName="r" from="9" to="22" dur="2.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="2.2s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* base label on the trunk */}
            <div className="funnel__stage cux__base" style={{ left: "7%", top: "53%" }}>
              <b>A teljes rendszer</b>
            </div>

            {ITEMS.map((it, i) => (
              <div
                className={"funnel__stage" + (it.sig ? " funnel__stage--sig" : "")}
                key={i}
                style={{
                  left: `${it.x}%`,
                  top: `${(it.y / 320) * 100}%`,
                  ["--stc" as string]: it.c,
                } as React.CSSProperties}
              >
                <b>{it.b}</b>
                <span>{it.s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
