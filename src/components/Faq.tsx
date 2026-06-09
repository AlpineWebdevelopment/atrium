import ArrowRight from "./ArrowRight";

const FAQS = [
  {
    q: "Honnan tudja a hívó, hogy AI-jal beszél?",
    a: "Az Atrium nem titkolja, hogy automatizált rendszer — de természetes, folyékony magyarsággal kommunikál. Ha a hívó rákérdez, egyértelműen válaszol. Az üzleti etika és a GDPR is megköveteli az átláthatóságot.",
  },
  {
    q: "Kell új rendszert bevezetnünk?",
    a: "Nem. Az Atrium a Google Calendar, Microsoft 365 és iCal alapú naptárakba közvetlenül ír, a CRM-integráció pedig EU-ban hosztolt GoHighLevel-en keresztül zajlik. A meglévő eszközei maradnak.",
  },
  {
    q: "Mennyi idő alatt térül meg?",
    a: "A rendszer jellemzően 60 nap alatt fizeti vissza saját magát a megfogott bevételből — utána a többi felüljáró. A pontos számot az Ön hívásai és no-show aránya alapján a megbeszélésen számoljuk ki.",
  },
];

export default function Faq() {
  return (
    <section className="faq" id="gyik">
      <div className="wrap">
        <div className="faq__head reveal">
          <h2 className="faq__h">A kérdések, amelyeket mindenki feltesz.</h2>
          <div className="show__arrows">
            <button className="show__arrow" aria-label="Előző">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 19l-7-7 7-7" /></svg>
            </button>
            <button className="show__arrow" aria-label="Következő"><ArrowRight /></button>
          </div>
        </div>
        <div className="faq__grid reveal" data-delay="1">
          {FAQS.map((f, i) => (
            <div className="faq__card" key={i}>
              <div className="faq__q">{f.q}</div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
