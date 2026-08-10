"use client";
import { useState, useRef } from "react";

type IconKey =
  | "doc" | "search" | "chat" | "trend" | "layers"
  | "target" | "refresh" | "send" | "plus";

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
};

const EXAMPLES: { ico: IconKey; t: string; d: string; who: string; c: string }[] = [
  {
    ico: "refresh",
    t: "Alvállalkozói és anyagrendelési egyeztető",
    d: "Az alvállalkozók időpontjai és az anyagrendelési határidők ma telefonban és fejben élnek — egyetlen csúszás, és áll a munka a helyszínen. A rendszer egyezteti és követi mindkettőt, és előre szól, ha egy szállítmány vagy egy alvállalkozó csúszik. Kevesebb telefonálás, kevesebb állásidő a helyszínen.",
    who: "Több alvállalkozóval és beszállítóval dolgozó cégeknek",
    c: "#9662BC",
  },
  {
    ico: "doc",
    t: "Engedély- és dokumentum-feldolgozó",
    d: "Az engedélyek, szerződések és számlák adatait ma valaki kézzel viszi át a rendszerébe — határidő, ügyszám, összeg, soronként. A rendszer kiolvassa belőlük a lényeget, és rendezetten a meglévő rendszerébe írja. A kézi rögzítés és az elgépelés megszűnik.",
    who: "Sok hatósági engedéllyel és papírral dolgozó cégeknek",
    c: "#628FBC",
  },
  {
    ico: "trend",
    t: "Kintlévőség-figyelő",
    d: "A kész munka számlája kiment, a pénz mégis késik — és a fizetésre emlékeztetni kínos, ezért gyakran elmarad. A rendszer figyeli a lejárt számlákat, és a megfelelő hangnemben, időben emlékeztet. A pénz hamarabb beérkezik, Önnek nem kell a kínos telefonokat intéznie.",
    who: "Rendszeres kintlévőséggel küzdő kivitelező cégeknek",
    c: "#62BCAC",
  },
  {
    ico: "send",
    t: "Tételes árajánlat-összeállító",
    d: "Egy tételes árajánlat összeállítása ma egy estét visz el: méretek, anyagárak, a korábbi hasonló munkák átnézése. A rendszer a felmérés adataiból és a korábbi ajánlataiból összeállítja a tételes ajánlat vázát — Ön már csak ellenőrzi, pontosít és kiküldi. Az ajánlat aznap megy ki, nem egy hét múlva.",
    who: "Sok tételes ajánlatot készítő cégeknek",
    c: "#BCA162",
  },
  {
    ico: "layers",
    t: "Vezetői irányítópult",
    d: "Hol tart most minden aktív projekt, melyik határidő közeleg, melyik számla van lejárva — ma ez több helyen és fejben él. A rendszer egy helyre gyűjti, és naprakészen mutatja. A heti áttekintéshez nem kell több táblázatot összevadászni.",
    who: "Egyszerre több projektet vezető cégeknek",
    c: "#9662BC",
  },
  {
    ico: "target",
    t: "Rendszer-összekötő automatizálás",
    d: "A számlázó, a naptár és a CRM ma külön él — az adatot valaki kézzel másolja az egyikből a másikba. A rendszer ezt a háttérben elvégzi, és jelez, ha valami eltér a megszokottól. Egy teljes kézi munkafolyamat eltűnik a napból.",
    who: "Több, egymással össze nem kötött rendszert használó cégeknek",
    c: "#628FBC",
  },
  {
    ico: "search",
    t: "Belső tudás-asszisztens",
    d: "A válasz egy korábbi projekt rögzítésében vagy a cég műszaki anyagában már megvan — az új kolléga mégis úgy jut hozzá, hogy megkérdez valakit. A rendszer ezekből az anyagokból válaszol, a forrást megjelölve. A betanulás gyorsabb, a tapasztalt kollégát nem szakítja félbe minden kérdés.",
    who: "Növekvő, sok új belépőt betanító cégeknek",
    c: "#62BCAC",
  },
  {
    ico: "chat",
    t: "Garanciális hibajegy-kezelő",
    d: "Az átadás után a hibajelzések szétszórva érkeznek — telefonon, e-mailben, üzenetben —, és néhány elsikkad, amíg nagyobb baj nem lesz belőle. A rendszer egy helyen fogadja és rögzíti a garanciális jelzéseket, és rászól, ha valami túl rég nyitva van. Egy reklamáció sem marad megválaszolatlanul.",
    who: "Átadás utáni garanciális ügyeket kezelő cégeknek",
    c: "#BCA162",
  },
  {
    ico: "plus",
    t: "Az Ön ötlete",
    d: "Ha a működésében van egy visszatérő, kézi folyamat, amely felemészti az idejét, mondja el. Megnézzük, automatizálható-e — és ha igen, megépítjük.",
    who: "Bármilyen kivitelező cégnek",
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

export default function CustomSolutionsKivitelezes() {
  const [showAll, setShowAll] = useState(false);
  const savedScroll = useRef<number>(0);
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Amit a kész csomagok nem fednek le, azt megépítjük<span className="heading-dot">.</span></h2>
        </div>

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
