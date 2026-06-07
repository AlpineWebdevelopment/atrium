const RUNGS = [
  {
    rung: "Rung 2",
    name: "Atrium Pilot",
    price: "350 000 Ft",
    sub: "30 nap · egy konkrét feladat · fix ár",
    desc: "Egy 30 napos, fix árú wedge, egyetlen jól definiált eredménnyel. A 30 nap végén konkrét számok a kezében — és tiszta döntés a teljes rendszerről.",
    focus: false,
  },
  {
    rung: "Rung 3 · a fókusz",
    name: "Atrium Teljes Rendszer",
    price: "2,5 – 4 M Ft",
    sub: "Setup · 900 k – 1,5 M Ft / hó üzemeltetés",
    desc: "A teljes hét-komponensű rendszer, 1–3 lokációra. Integrálva a meglévő naptárral és CRM-mel, monitorozva és havonta jelentve.",
    focus: true,
  },
  {
    rung: "Rung 4",
    name: "Atrium Modular",
    price: "Egyedi ár",
    sub: "A Teljes Rendszer egy alhalmaza, az Ön méretére",
    desc: "Annak, aki több mint egy komponenst akar, de még nem a teljes stacket. A szelekció bespoke; a komponensek ugyanazok a productized rétegek.",
    focus: false,
  },
  {
    rung: "Mellette",
    name: "Atrium Egyedi",
    price: "Egyedi ár",
    sub: "A munka méretéhez igazítva · az ajánlatlétra mellett",
    desc: "Amikor az Ön problémája nem illik egyik rungra sem — egy egyedi munkafolyamat vagy automatizáció a komponens-könyvtáron kívül.",
    focus: false,
  },
];

export default function OfferLadder() {
  return (
    <section className="section section--texture" id="offer" data-screen-label="06 Csomagok">
      <div className="container">

        <div className="ladder__intro">
          <h2 className="section__h">
            Egy árpont mindenkinek, aki bejön a megbeszélésre.
          </h2>
          <p className="section__lede">
            Az ajánlat-létra négy nyilvános rungja. A pontos csomag-méret
            a megbeszélésen dől el, az Ön számai alapján.
          </p>
        </div>

        <div className="ladder" role="table" aria-label="Ajánlat-létra">
          {RUNGS.map((r, i) => (
            <div
              key={i}
              className={"ladder__col" + (r.focus ? " ladder__col--focus" : "")}
              role="row"
            >
              <span className="ladder__rung">{r.rung}</span>
              <h3 className="ladder__name">{r.name}</h3>
              <div className="ladder__price">
                {r.price}
                <small>{r.sub}</small>
              </div>
              <p className="ladder__desc">{r.desc}</p>
              {r.focus && <span className="ladder__tag">A fókusz</span>}
            </div>
          ))}
        </div>

        <p className="ladder__note">
          Minden ár munka-érték: az első 5–10 lezárt szerződés után kalibráljuk őket.
          Nagyobb lánc (4+ lokáció, 500 M Ft / év feletti üzlet) esetén külön Atrium
          Partner-engagement, nem productized rung.
        </p>

      </div>
    </section>
  );
}
