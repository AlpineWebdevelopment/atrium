const FAQS = [
  {
    q: "Honnan tudja a hívó, hogy AI-jal beszél, nem emberrel?",
    a: "Az Atrium nem próbálja eltitkolni, hogy automatizált rendszer — de természetes, folyékony magyarsággal kommunikál. Ha a hívó rákérdez, az AI egyértelműen válaszol. Az üzleti etika és a GDPR egyaránt megköveteli az átláthatóságot, ezt mi sem kerüljük meg.",
  },
  {
    q: "Mi történik, ha az AI nem érti a kérdést vagy félreérti a helyzetet?",
    a: "Az AI konfidencia-küszöböt használ: ha a szándék nem elég egyértelmű, nem találgat — az ügyfelet egy előre meghatározott fallback-folyamatra irányítja (pl. visszahívás kérés, SMS üzenet). Minden ilyen eset logolva van, és a havi riportban szerepel.",
  },
  {
    q: "Hogyan csatlakozik a meglévő naptárunkhoz? Kell új rendszert bevezetnünk?",
    a: "Nem kell. Az Atrium Google Calendar, Microsoft 365 és iCal alapú rendszerekbe közvetlenül ír. A CRM-integráció GoHighLevel-en keresztül zajlik — ez egy EU-ban hosztolt instance, amelyre a saját adatai kerülnek. Ha más rendszert használ, a bevezetés előtt egyeztetünk.",
  },
  {
    q: "GDPR-konform a rendszer? Hol tárolódnak az adatok?",
    a: "Igen. Az összes adat EU-ban hosztolt szerveren tárolódik. A hívásrögzítések és ügyfél-adatok kezelésére adatfeldolgozói szerződést kötünk. Az adatkezelési tájékoztató az Ön weboldalán publikálható formátumban is rendelkezésre áll.",
  },
  {
    q: "Mennyi ideig tart a bevezetés? Mikor lesz éles a rendszer?",
    a: "Az Atrium Pilot (30 napos, fix árú csomag) esetén a bevezetés 2–3 hét. A Teljes Rendszer esetén 3–5 hét, a meglévő rendszerek komplexitásától függően. Az éles indítás előtt közösen teszteljük a folyamatokat — nem kap \"nyers\" rendszert.",
  },
  {
    q: "Mi van, ha valamiért nem vagyunk elégedettek?",
    a: "A Pilot csomagnál nincs hosszú távú elköteleződés — 30 nap után Ön dönt a folytatásról. A Teljes Rendszer esetén 30 napos felmondási idő van. Nem dolgozunk éves előre fizetéssel vagy rejtett megkötésekkel.",
  },
  {
    q: "Milyen méretű vállalkozásnak való az Atrium?",
    a: "Az Atrium Pilot 1–2 lokációs, 50–400 hívás/hónapos vállalkozásoknak van méretezve. A Teljes Rendszer 1–3 lokációra skálázódik. 4+ lokáció esetén egyedi Atrium Partner-engagement áll rendelkezésre.",
  },
  {
    q: "Milyen iparágakban működik megbízhatóan?",
    a: "Az Atrium bizonyítottan teljesít olyan szegmensekben, ahol az időpont-alapú bevétel és a telefonos ügyfélkapcsolat kritikus: magán fogászat, kozmetika, fizioterápia, jogi és pénzügyi tanácsadás, autószerviz, ingatlanközvetítés. Ha bizonytalan, a megbeszélésen konkrét példákat mutatunk.",
  },
  {
    q: "Kapok hozzáférést a hívás-logokhoz és az AI által mondott szövegekhez?",
    a: "Igen. A GoHighLevel dashboardon minden hívás megtekinthető: időpont, időtartam, átirat, kimenet (foglalás, visszahívás, egyéb). A havi riport ezeket összesíti és értelmezi — nem csak nyers logokat kap.",
  },
  {
    q: "Az Atrium helyettesíti a recepciót, vagy csak kiegészíti?",
    a: "Mindkettő lehetséges, az Ön döntése. Legtöbb ügyfelünk a munkaidő utáni és hétvégi hívásokra indít el elsőként — ez a legkisebb kockázatú bevezetési pont, ahol azonnal mérhető a hatás. Teljes recepciós kiváltás esetén részletesebb onboarding szükséges.",
  },
];

export default function Faq() {
  return (
    <section className="section section--alt" id="faq" data-screen-label="GYIK">
      <div className="container">

        <div className="faq__intro reveal">
          <span className="eyebrow">Gyakori kérdések</span>
          <h2 className="section__h">
            A kérdések, amelyeket<br />
            mindenki feltesz.
          </h2>
          <p className="section__lede">
            Mielőtt a megbeszélésre kerül sor, ezek a kérdések szinte mindig előjönnek.
            Az alábbi válaszok segítenek, hogy a 30 perces meetingen az Ön konkrét
            számairól és helyzetéről tudjunk beszélni.
          </p>
        </div>

        <div className="faq__grid reveal" data-delay="1">
          {FAQS.map((item, i) => (
            <div className="faq__item" key={i}>
              <div className="faq__q">{item.q}</div>
              <div className="faq__a">{item.a}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
