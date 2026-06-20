/* Custom AI builds — detailed, light, engaging.
   Example projects, capability categories, fit, and guarantees.
   Copy paraphrased to avoid banned vocab (megoldás, AI ügynökség, …). */

type IconKey =
  | "target" | "search" | "doc" | "globe" | "send" | "plus"
  | "trend" | "chat" | "refresh" | "layers";

const ICON_PATHS: Record<IconKey, React.ReactNode> = {
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></>),
  doc: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h6M8 17h4" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></>),
  send: (<><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></>),
  plus: (<><path d="M12 5v14M5 12h14" /></>),
  trend: (<><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>),
  chat: (<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>),
  refresh: (<><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>),
  layers: (<><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>),
};

/* ATRIUM-EDIT EF1 — dropped the redundant radial "Példa projektek" diagram and
   folded the bespoke examples into the regrouped "Amit tudunk építeni" columns
   (data / operations / internal), so the shape no longer mirrors Meridian's
   sales/support/ops/industry menu and the industry column is gone. */
const CATEGORIES = [
  {
    h: "Dokumentum és adat",
    c: "#9662BC",
    ico: "doc" as IconKey,
    items: [
      "Dokumentumokból adatkinyerés és rendezés",
      "Adatok összefésülése több forrásból",
      "Egyedi vezetői kimutatás",
    ],
  },
  {
    h: "Működés és előrejelzés",
    c: "#628FBC",
    ico: "trend" as IconKey,
    items: [
      "Beszállítói és alvállalkozói egyeztetés",
      "Készlet- és kapacitás-előrejelzés",
      "Ismétlődő feladatok automatizálása",
    ],
  },
  {
    h: "Belső munka és integráció",
    c: "#62BCAC",
    ico: "layers" as IconKey,
    items: [
      "Belső csapat-asszisztens a saját anyagaikból",
      "Két rendszer összekötése, adatátvitel",
      "Folyamat-monitorozás és jelzés, ha valami elakad",
    ],
  },
];

const FIT = [
  "Specifikus folyamatot szeretne automatizálni",
  "Elégedetlen az általános rendszerekkel",
  "Komoly üzleti problémát akar AI-val kezelni",
  "Nyitott a befektetésre, ha az ROI egyértelmű",
  "Partnert keres, nem csak szolgáltatót",
];

const NOFIT = [
  "Csak „kipróbálná” az AI-t minimális költséggel",
  "Nincs konkrét problémája, csak a divatot követi",
  "Türelmetlen, és nem érti a fejlesztési folyamatot",
  "Gyors javítást keres, nem stratégiai fejlesztést",
];

const GUARANTEES = [
  {
    t: "Teljesítmény-garancia",
    d: "Ha a rendszer nem hozza a közösen kitűzött számokat, addig finomítjuk, amíg eléri — felár nélkül.",
  },
  {
    t: "Átláthatóság-garancia",
    d: "Kéthetente megmutatjuk, hol tartunk. A kódbázis nyitott, a dokumentáció részletes. Mindig látja, mire megy a pénze.",
  },
  {
    t: "Exit-garancia",
    d: "Ha három hónap után nem elégedett, átadjuk a teljes kódbázist és a dokumentációt. Onnan bárkivel folytathatja.",
  },
];

export default function CustomSolutions() {
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Amit a kész csomagok nem fednek le, azt megépítjük.</h2>
          <p className="dash__p">
            Néha a meglévő csomagok nem fedik le, amire Önnek szüksége van.
            Ilyenkor a saját folyamatára építünk AI-alapú rendszert — nem
            általánosságban, hanem egy konkrét üzleti problémára. Ön elmondja,
            hol akad el a működés; mi pontosan arra tervezzük és fejlesztjük meg.
          </p>
        </div>

        {/* The point: it starts from the operator's own idea, any scale */}
        <div className="cux__lead reveal" data-delay="1">
          <span className="cux__lead-kicker">Az Ön ötlete a kiindulópont</span>
          <p className="cux__lead-txt">
            Mondja el, mire van szüksége — a többit ránk bízhatja. Ön szabja meg
            a léptéket: lehet <b>egyetlen automatizálás</b>, néhány összekötött
            folyamat, vagy az egész cégét átfogó, testre szabott rendszer —{" "}
            <b>akár egy teljes ERP</b>.
          </p>
          <div className="cux__scale" aria-hidden="true">
            <div className="cux__scale-step">
              <span className="cux__scale-bar" style={{ height: "44px" }} />
              <span className="cux__scale-lbl">Egy automatizálás</span>
            </div>
            <div className="cux__scale-step">
              <span className="cux__scale-bar" style={{ height: "66px" }} />
              <span className="cux__scale-lbl">Több folyamat</span>
            </div>
            <div className="cux__scale-step cux__scale-step--full">
              <span className="cux__scale-bar" style={{ height: "90px" }} />
              <span className="cux__scale-lbl">Teljes rendszer · ERP</span>
            </div>
          </div>
        </div>

        {/* What we can build — bespoke work outside the core system */}
        <div className="cux__sec reveal" data-delay="2">
          <h3 className="cux__sec-h"><span>Amit tudunk építeni</span></h3>
          <p className="cux__cats-lead">A kész rendszeren túl — a működése többi pontjára.</p>
          <div className="cux__cats">
            {CATEGORIES.map((cat, i) => (
              <div className="cux__catcol" key={i} style={{ ["--pc" as string]: cat.c } as React.CSSProperties}>
                <div className="cux__catcol-head">
                  <span className="cux__catcol-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICON_PATHS[cat.ico]}</svg>
                  </span>
                  <b className="cux__catcol-t">{cat.h}</b>
                </div>
                <div className="cux__catcol-branch">
                  {cat.items.map((it, j) => (
                    <div className="cux__catcol-item" key={j}>{it}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="cux__cats-note">+ Az Ön ötlete — amit a működésében automatizálna.</p>
        </div>

        {/* Fit / not fit */}
        <div className="cux__fit reveal">
          <div className="cux__fit-col cux__fit-col--yes">
            <div className="cux__fit-h"><span className="cux__fit-badge">✓</span>Önnek való, ha…</div>
            <ul>
              {FIT.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
          <div className="cux__fit-col cux__fit-col--no">
            <div className="cux__fit-h"><span className="cux__fit-badge">✕</span>Nem Önnek való, ha…</div>
            <ul>
              {NOFIT.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
        </div>

        {/* Guarantees */}
        <div className="cux__sec reveal">
          <h3 className="cux__sec-h"><span>Garancia</span></h3>
          <div className="cux__guar">
            {GUARANTEES.map((g, i) => (
              <div className="cux__g" key={i}>
                <span className="cux__g-node">
                  <svg className="cux__g-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <h4 className="cux__g-t">{g.t}</h4>
                <p className="cux__g-d">{g.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sec-cta reveal">
          <a href="#kapcsolat" className="btn btn--lg">Mondja el az ötletét</a>
        </div>
      </div>
    </section>
  );
}
