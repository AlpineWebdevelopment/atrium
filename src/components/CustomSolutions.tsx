"use client";
import { useState, useRef } from "react";

/* Custom AI builds (root only). "Példa projektek" — 9 concrete buildable examples
   in the column/spine design (icon + title + description + audience).
   Framed as what we can build, never as delivered work. No banned vocab. */

type IconKey =
  | "doc" | "search" | "chat" | "trend" | "layers"
  | "target" | "refresh" | "send" | "plus" | "calc" | "inbox";

const ICON_PATHS: Record<IconKey, React.ReactNode> = {
  doc: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h6M8 17h4" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></>),
  chat: (<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>),
  trend: (<><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>),
  layers: (<><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>),
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></>),
  refresh: (<><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>),
  send: (<><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></>),
  plus: (<><path d="M12 5v14M5 12h14" /></>),
  calc: (<><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 10.5h2M12 10.5h4" /><path d="M8 14h2M12 14h4" /><path d="M8 17.5h2M12 17.5h4" /></>),
  inbox: (<><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></>),
};

const EXAMPLES: { ico: IconKey; t: string; d: string; who: string; c: string }[] = [
  {
    ico: "doc",
    t: "Árajánlat-készítő rendszer",
    d: "Az árajánlatok ma este készülnek, a nap végén, a felmérés jegyzeteiből. A rendszer a jegyzetekből és fotókból — az Ön árlistája alapján — elkészíti az ajánlat piszkozatát, egységes, küldhető formában. Önnek már csak átnéznie és elküldenie kell, nem megírni.",
    who: "Árajánlatot készítő cégeknek — a kivitelezéstől a rendelőig",
    c: "#9662BC",
  },
  {
    ico: "calc",
    t: "Ár-kalkulátor a weboldalra",
    d: "Aki árat szeretne, ma űrlapot tölt ki, és napokat vár. A kalkulátor a weboldalon néhány kérdés után azonnal tájékoztató árat ad, az adatokat pedig érdeklődőként rögzíti. A látogató választ kap, Ön pedig egy komoly érdeklődőt — paraméterekkel együtt.",
    who: "Paraméterezhető szolgáltatást árazó cégeknek — napelem, klíma, szigetelés, kivitelezés",
    c: "#628FBC",
  },
  {
    ico: "trend",
    t: "Hirdetés-eredmény elemző",
    d: "A hirdetési felület kattintást és elérést mutat — azt nem, hogy lett-e belőle munka. A rendszer összeköti a hirdetést az érdeklődővel és a foglalással, és hetente magyarul megírja, mi történt. Ön azt látja, melyik hirdetés hoz ügyfelet, és melyik csak viszi a pénzt.",
    who: "Hirdetésre költő cégeknek",
    c: "#62BCAC",
  },
  {
    ico: "inbox",
    t: "Megkeresés-rendező rendszer",
    d: "A közös postafiókban ma együtt áll az árajánlatkérés, a számla és a kéretlen levél — a fontosat naponta kell kihalászni. A rendszer szétválogatja a beérkezőt, a sürgőset jelzi, a tipikusra válasz-piszkozatot ír. Reggel nem a fiókot rendezi, hanem dönt.",
    who: "Sok bejövő megkereséssel dolgozó cégeknek",
    c: "#BCA162",
  },
  {
    ico: "search",
    t: "Irattár-kereső asszisztens",
    d: "Ahol több ezer dokumentum gyűlt fel — szerződés, árajánlat, jegyzőkönyv, tervrajz —, ott egy konkrét adat előkeresése perceket visz el. A rendszer az egész iratanyagból kiemeli a keresett részt, és megmutatja, melyik dokumentumból való. A válasz pár másodperc, forrással együtt.",
    who: "Nagy iratállománnyal dolgozó cégeknek és irodáknak",
    c: "#628FBC",
  },
  {
    ico: "chat",
    t: "Idegennyelvű ügyfélkapu",
    d: "A más nyelven író ügyfél kérdése ma kivár, amíg ráér valaki, aki bírja a nyelvet. A rendszer az ügyfél nyelvén — angolul, németül vagy más nagyobb nyelven — fogadja az üzenetet, a tipikus kérdésekre válaszol, a többit lefordítva teszi a munkatárs elé. A válasz nem lassul le, és nem köt le külön embert.",
    who: "Külföldi ügyfélkört kiszolgáló cégeknek",
    c: "#62BCAC",
  },
  {
    ico: "target",
    t: "Ügyfél-felkutató és megkereső rendszer",
    d: "Az új ügyfelek felkutatása és megszólítása ma az értékesítő idejének javát viszi el — és nagy része nem vezet sehová. A rendszer nyilvános cégadatbázisokban és LinkedInen keresi a profilba illő cégeket, megírja és e-mailben elküldi a személyre szabott első üzenetet, és csak a ténylegesen válaszolót adja át. Ön a komoly lehetőségekkel foglalkozik, nem a hideg névsorral.",
    who: "B2B értékesítéssel dolgozó cégeknek",
    c: "#9662BC",
  },
  {
    ico: "refresh",
    t: "Rendszerek közötti adatkapocs",
    d: "Az ügyfél-nyilvántartás, a számlázó és a naptár ma külön szigeteken áll, és valaki kézzel viszi át köztük az adatot — időnként hibázva. A rendszer a háttérben tartja egyben a hármat, és szól, ha valami nem stimmel. Egy ismétlődő gépelős feladat kerül le a napról.",
    who: "Több, össze nem kötött programot használó cégeknek",
    c: "#BCA162",
  },
  {
    ico: "plus",
    t: "Az Ön ötlete",
    d: "Ha a működésében van egy visszatérő, kézi folyamat, amely felemészti az idejét, mondja el. Megnézzük, automatizálható-e — és ha igen, megépítjük.",
    who: "Bármire, ami ismétlődik és automatizálható",
    c: "#6DBC61",
  },
];

const GUARANTEES = [
  {
    t: "Fix ár, működő eredmény",
    d: "Fix áron, közösen meghatározott eredményre dolgozunk. Ha több kör kell hozzá, az a mi dolgunk — felár nélkül.",
  },
  {
    t: "Az Öné marad",
    d: "Amit megépítünk, az az Öné. A rendszert és a dokumentációt is átadjuk, így soha nem függ kizárólag tőlünk.",
  },
  {
    t: "Folyamatos rálátás",
    d: "Nem fekete doboz épül. Rendszeresen megmutatjuk, hol tartunk, a kész rendszert pedig dokumentációval adjuk át.",
  },
];

export default function CustomSolutions() {
  const [showAll, setShowAll] = useState(false);
  const savedScroll = useRef<number>(0);
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Amit a kész csomagok nem fednek le, azt megépítjük<span className="heading-dot">.</span></h2>
        </div>

        {/* The point: it starts from the operator's own idea, any scale */}
        <div className="cux__lead reveal" data-delay="1">
          <span className="cux__lead-kicker">Az Ön ötlete a kiindulópont</span>
          <p className="cux__lead-txt">
            Mondja el, mire van szüksége — a többit ránk bízhatja. Lehet egyetlen automatizálás, néhány összekötött folyamat, vagy egy teljes, testre szabott rendszer.
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
              <span className="cux__scale-lbl">Teljes rendszer</span>
            </div>
          </div>
        </div>

        {/* ATRIUM-EDIT — Példa projektek in the column/spine design: 9 examples,
            each with icon + title + description + audience. */}
        <div className="cux__sec reveal" data-delay="2" id="pelda">
          <h3 className="cux__sec-h"><span>Példa projektek</span></h3>
          <div className={`cux__cats cux__cats--3${showAll ? " cux__cats--open" : ""}`}>
            {EXAMPLES.map((e, i) => (
              <div className={`cux__catcol${i >= 3 ? " cux__catcol--more" : ""}`} key={i} style={{ ["--pc" as string]: e.c } as React.CSSProperties}>
                <div className="cux__catcol-head">
                  <span className="cux__catcol-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICON_PATHS[e.ico]}</svg>
                  </span>
                  <b className="cux__catcol-t">{e.t}</b>
                </div>
                <div className="cux__catcol-branch">
                  <div className="cux__catcol-item">{e.d}</div>
                </div>
                <span className="cux__catcol-who">{e.who}</span>
              </div>
            ))}
          </div>
          <button className="cux__more-btn" onClick={() => {
            if (!showAll) {
              savedScroll.current = window.scrollY;
              setShowAll(true);
            } else {
              setShowAll(false);
              requestAnimationFrame(() => window.scrollTo({ top: savedScroll.current, behavior: "instant" }));
            }
          }}>
            {showAll ? "Mutasson kevesebbet" : "Mutasson többet"}
          </button>
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
