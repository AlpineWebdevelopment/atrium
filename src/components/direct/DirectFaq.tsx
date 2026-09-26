/* The questions that decide whether someone books. They sit right before the
   close, because every one of them is an objection: if it stays unanswered,
   the visitor leaves instead of asking.

   Native <details>, so it works without JavaScript and reads correctly to a
   screen reader. The answers keep the substance from the old site, in the
   tone of this page: shorter, and where we cannot know something, we say so
   instead of inventing a figure. */

const FAQS: [string, string][] = [
  [
    "Mennyi pénzt hagyok valójában az asztalon?",
    "Fejből senki nem mond rá pontos számot: aki a cége ismerete nélkül konkrét összeget ígér, az tippel. A pénz viszont szinte mindig ugyanott szivárog: a nem fogadott hívásoknál, a lassan megválaszolt érdeklődőknél és az utánkövetés nélkül maradt régi ügyfeleknél. A beszélgetésen három számából (havi megkeresés, egy munka átlagos értéke, záródási arány) pár perc alatt kiszámoljuk a havi összeget. Onnantól nem érzésre dönt.",
  ],
  [
    "Észreveszik az ügyfelek, hogy AI-val beszélnek?",
    "A hívók túlnyomó többsége nem veszi észre. Természetes ütemben, valódi szünetekkel beszél, magyarul, menü és robothang nélkül. Nem titkoljuk, hogy AI. A beszélgetés egyszerűen annyira gördülékeny, hogy a legtöbben bele sem gondolnak.",
  ],
  [
    "Mennyire természetes a magyar beszéd?",
    "Ezt nem szépítjük: ha gépiesen szólalna meg, az ügyfele az első mondatból kiszúrná, és letenné. Ezért hétköznapi, Ön-megszólítású magyarral beszél, és a hangot a cégéhez hangoljuk, mielőtt élesedik.",
  ],
  [
    "Milyen rendszert kapok mellé?",
    "Egy teljes, kész rendszert: saját CRM-mel, beüzemelve, az első naptól használhatóan. Ezt ajánljuk, mert így minden egy helyen van. Ha a megszokott eszközeinél maradna, ahhoz is csatlakozunk; a döntés az Öné.",
  ],
  [
    "Nekem mit kell csinálnom?",
    "Amennyit szeretne, akár semmit. A beállítás és az üzemeltetés a mi dolgunk. Ha bele akar szólni, hogyan épüljön, végig nyitottak vagyunk rá: az Ön rendszere, az Ön szabályai szerint.",
  ],
  [
    "Kié lesz az adat?",
    "Az Öné, és bármikor elviheti. Amíg üzemeltetjük, hozzáférünk, de ha elválunk, minden Önnél marad.",
  ],
  [
    "Tudok rajta változtatni később?",
    "Igen. A cége változik, a rendszer vele változik. Ez a karbantartás része, nem új számla minden apró módosításért.",
  ],
];

export default function DirectFaq() {
  return (
    <section className="dr-sec dr-faq-sec" id="gyik">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">A kérdések, amiket mindenki feltesz.</h2>
        </div>
        <div className="dr-faq">
          {FAQS.map(([q, a], i) => (
            <details className="dr-faq__item reveal" data-delay={(i % 3) + 1} key={q}>
              <summary>
                {q}
                <span className="dr-faq__mark" aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
