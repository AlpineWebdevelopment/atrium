const CAPS = [
  {
    hu: "Fogadja a hívást.",
    en: "Reception",
    desc: "Minden hívás. Munkaidő után, hétvégén, akkor is amikor a recepció más vonalon van. Magyarul, természetes beszéddel, nem gépi menüvel.",
  },
  {
    hu: "Lefoglalja az időpontot.",
    en: "Scheduling",
    desc: "Az Ön meglévő naptárába foglal. Az ügyfél megerősítést kap, Ön egy bejegyzést a naptárban. Nincs külön rendszer, nincs új jelszó.",
  },
  {
    hu: "Visszahívja az elmaradtakat.",
    en: "No-show recovery",
    desc: "Minden elmaradt időpontot kimenő hívás és SMS követ abban az ablakban, amikor a visszanyerési arány a legmagasabb.",
  },
  {
    hu: "Visszahozza a régieket.",
    en: "Reactivation",
    desc: "Megkeresi azokat, akik elcsendesedtek: 12 hónapja nem jártak, félbehagyott kezelés, alvó ügyfél-rekordok.",
  },
  {
    hu: "Utánköveti az érdeklődőt.",
    en: "Follow-up",
    desc: "Minden FB-lead, Google-űrlap, kapcsolat-felvétel kontaktálva — percek alatt, nem napok múlva.",
  },
  {
    hu: "Kéri az értékelést.",
    en: "Reviews",
    desc: "Látogatás utáni nudge-ok: az elégedettet a nyilvános értékelésbe tereli, az elégedetlent egy privát csatornába.",
  },
  {
    hu: "Megmutatja, mi működik.",
    en: "Reporting",
    desc: "Tiszta havi nézet: honnan jön a bevétel, hol szivárog, mit hozott vissza a rendszer. Ez az a réteg, ami a kapcsolatot vendorból partnerre fordítja.",
  },
];

export default function Capabilities() {
  return (
    <section className="section section--texture" id="system" data-screen-label="03 A rendszer">
      <div className="container">

        <div className="caps__intro">
          <h2 className="section__h">
            Hét komponens, egy rendszer.
            Az operatív munkájához igazítva.
          </h2>
          <p className="section__lede">
            A Teljes Rendszer mindig mind a hét komponenst tartalmazza.
            A konfiguráció az Ön üzletére szabva. Egyetlen vásárlás, egy
            integráció — nem hét darab modul, amit Önnek kell összefogni.
          </p>
        </div>

        <div className="caps__grid">
          {/* First 6 caps in 4-column grid: row 1 = 01-04, row 2 = 05-06 + wide 07 */}
          {CAPS.slice(0, 6).map((c, i) => (
            <div className="caps__card" key={i}>
              <div className="caps__card-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="caps__card-body">
                <div className="caps__card-name">
                  {c.hu}
                  <em className="caps__card-en">{c.en}</em>
                </div>
                <div className="caps__card-desc">{c.desc}</div>
              </div>
            </div>
          ))}

          {/* 07 — spans 2 columns, side-by-side layout */}
          <div className="caps__card caps__card--wide">
            <div>
              <div className="caps__card-num">07</div>
              <div className="caps__card-name" style={{ fontSize: "22px", marginTop: "8px" }}>
                {CAPS[6].hu}
                <em className="caps__card-en">{CAPS[6].en}</em>
              </div>
            </div>
            <div className="caps__card-desc" style={{ marginTop: "4px" }}>
              {CAPS[6].desc}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
