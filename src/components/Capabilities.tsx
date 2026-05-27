const CAPS = [
  {
    hu: "Fogadja a hívást.",
    en: "Reception",
    desc: "Minden hívás. Munkaidő után, hétvégén, akkor is amikor a recepció más vonalon van. Magyarul, formális Ön-megszólítással — természetes beszéddel, nem gépi menüvel.",
  },
  {
    hu: "Lefoglalja az időpontot.",
    en: "Scheduling",
    desc: "Az Ön meglévő naptárába foglal. Az ügyfél megerősítést kap, Ön egy bejegyzést a naptárban. Nincs külön rendszer, nincs új jelszó.",
  },
  {
    hu: "Visszahívja az elmaradtakat.",
    en: "No-show recovery",
    desc: "Minden elmaradt időpontot kimenő hívás és SMS követ — abban az ablakban, amikor a visszanyerési arány a legmagasabb. A legtisztább ROI-pont egy appointment-alapú üzletnél.",
  },
  {
    hu: "Visszahozza a régieket.",
    en: "Reactivation",
    desc: "Megkeresi azokat, akik elcsendesedtek: 12 hónapja nem jártak, félbehagyott kezelés, alvó ügyfél-rekordok. A nem létező marketingköltségből hozott bevétel.",
  },
  {
    hu: "Utánköveti az érdeklődőt.",
    en: "Follow-up",
    desc: "Minden FB-lead, Google-űrlap, kapcsolat-felvétel kontaktálva — percek alatt, nem napok múlva. A legmagasabb-leverage komponens minden hirdetést futtató cégnél.",
  },
  {
    hu: "Kéri az értékelést.",
    en: "Reviews",
    desc: "Látogatás utáni nudge-ok: az elégedettet a nyilvános értékelésbe tereli, az elégedetlent egy privát csatornába. Mindez óvatosan, magyar GDPR-norma szerint.",
  },
  {
    hu: "Megmutatja, mi működik.",
    en: "Reporting",
    desc: "Tiszta havi nézet: honnan jön a bevétel, hol szivárog, mit hozott vissza a rendszer. Ez az a réteg, ami a kapcsolatot vendorból partnerre fordítja.",
  },
];

export default function Capabilities() {
  return (
    <section className="section" id="system" data-screen-label="03 A rendszer">
      <div className="container">
        <div className="caps__head">
          <h2 className="section__h">
            Hét komponens, egy rendszer.<br />
            Az operatív munkájához igazítva.
          </h2>
          <p>
            A Teljes Rendszer mindig mind a hét komponenst tartalmazza. A konfiguráció
            és az integrációs cél az Ön üzletére szabva. Egyetlen vásárlás, egy
            integráció — nem hét darab modul, amit Önnek kell összefogni.
          </p>
        </div>
        <div className="caps__list">
          {CAPS.map((c, i) => (
            <div className="caps__row" key={i}>
              <div className="caps__num">{String(i + 1).padStart(2, "0")}</div>
              <div className="caps__name">
                {c.hu}
                <em>{c.en}</em>
              </div>
              <div className="caps__desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
