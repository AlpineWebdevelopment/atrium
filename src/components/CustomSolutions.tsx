"use client";

/* Custom builds — branches grafted onto the full-system trunk.
   Dark card = the page's one restrained highlight for this section. */

const ITEMS = [
  { b: "Árajánlat-utánkövetés", s: "kiküldve még nem eladva", x: 18, y: 70, c: "#7C5CFF" },
  { b: "Lejárt számlák", s: "udvariasan, következetesen", x: 33, y: 250, c: "#4AA3FF" },
  { b: "Várólista-feltöltés", s: "lemondás után azonnal", x: 48, y: 60, c: "#54CFC0" },
  { b: "Előzetes adatbekérés", s: "még az időpont előtt", x: 63, y: 255, c: "#E8A33D" },
  { b: "Idegen nyelvű ügyfelek", s: "németül és angolul", x: 78, y: 75, c: "#9B7BFF" },
  { b: "+ az Ön folyamata", s: "ezt együtt találjuk ki", x: 84, y: 170, c: "#6DBC61", sig: true },
];

const BRANCHES = [
  "M130,170 C160,170 165,100 180,70",
  "M280,170 C310,170 315,215 330,250",
  "M430,170 C460,170 465,95 480,60",
  "M580,170 C610,170 615,222 630,255",
  "M730,170 C760,170 765,110 780,75",
];

export default function CustomSolutions() {
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
                  <stop offset="0%" stopColor="rgba(245,242,237,0.25)" />
                  <stop offset="78%" stopColor="rgba(245,242,237,0.25)" />
                  <stop offset="100%" stopColor="#6DBC61" />
                </linearGradient>
              </defs>

              {/* trunk — the full system */}
              <path d="M120,170 L860,170" fill="none" stroke="url(#gTrunk)" strokeWidth="2.5" strokeLinecap="round" />

              {/* custom branches */}
              {BRANCHES.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="rgba(245,242,237,0.18)" strokeWidth="1.5" />
              ))}

              {/* nodes */}
              {ITEMS.map((it, i) => (
                <circle key={i} cx={it.x * 10 + (it.sig ? 20 : 0)} cy={it.y} r="6" fill={it.c} stroke="#0a1422" strokeWidth="3" />
              ))}
            </svg>

            {/* base label on the trunk */}
            <div className="funnel__stage cux__base" style={{ left: "7%", top: "53%" }}>
              <b>A teljes rendszer</b>
            </div>

            {ITEMS.map((it, i) => (
              <div
                className={"funnel__stage" + (it.sig ? " funnel__stage--sig" : "")}
                key={i}
                style={{ left: `${it.x}%`, top: `${(it.y / 320) * 100}%` }}
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
