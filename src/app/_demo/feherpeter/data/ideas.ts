import type { Idea, IdeaCategory, IdeaStatus } from "./types";

/* The working board behind /admin/otletek. Strategy, not features: nothing on
   it is promised to members. Statuses and notes are editable in-session. */
export const IDEAS: Idea[] = [
  {
    id: "i01",
    title: "Tananyag-terv a forgatás előtt",
    category: "Tartalom",
    status: "Elfogadva",
    note: "A háromnapos forgatás előtt álljon egy 52 hetes lecketérkép. Strukturálatlan forgatás strukturálatlan anyagot ad. A Kiadás nézet 52 hetes rácsa egyben a tervezőeszköz: ami ott üres, azt még nem találtuk ki.",
  },
  {
    id: "i02",
    title: "Az első negyedévet forgatjuk le, a többit az élő adások töltik fel",
    category: "Tartalom",
    status: "Megfontolás alatt",
    note: "Három nap nyersanyag reálisan 8–12 óra kész leckét ad. Induljunk az első 12–13 héttel, és a havi Q&A felvételei épüljenek be a tárba. Az előre leforgatott év nem tud reagálni arra, amit a tagok kérdeznek.",
  },
  {
    id: "i03",
    title: "Vendégoktatók a hálózatból",
    category: "Tartalom",
    status: "Ötlet",
    note: "Egy-egy modult tartson más vállalkozó Péter köréből. Mélységet ad, tehermentesít, és a vendégoktató maga is a közösség hírvivője lesz. A delegálás kurzus jó első próba erre.",
  },
  {
    id: "i04",
    title: "Belső kör: a mostani 1:1 ügyfelek átterelése csoportos formába",
    category: "Üzlet",
    status: "Megfontolás alatt",
    note: "Tíz óra egyéni helyett egy óra csoportos, tíz embernek. Ez az aktív → passzív váltás valódi helye. A helylimit valós — a csoportos hívás mérete szabja meg —, ezért nyugodtan kommunikálható.",
  },
  {
    id: "i05",
    title: "Negyedéves körök, valódi beiratkozási ablakkal",
    category: "Közösség",
    status: "Elfogadva",
    note: "A csoportos onboarding tényleges munka, ezért a nyitva/zárva állapot igaz, nem kitalált. Visszaszámláló soha. A várólista adja a következő kör indulási lökését.",
  },
  {
    id: "i06",
    title: "Ajánlói program szabályai",
    category: "Közösség",
    status: "Elfogadva",
    note: "Egy ajándék hónap minden fizető ajánlott tag után. Nincs készpénz jutalék, nincs többszintű struktúra. Ami MLM-nek néz ki, azt Péter hitelességéből fizetjük ki.",
  },
  {
    id: "i07",
    title: "Heti feladat mint szokás",
    category: "Közösség",
    status: "Elfogadva",
    note: "A tagok a leckék között is bejönnek, ha van mit tenni. Egy rövid feladat Pétertől hetente, sorozat-számlálóval. Péter ideje: pár perc hetente, és az 52 feladat előre megírható.",
  },
  {
    id: "i08",
    title: "Rang-jogosultságok",
    category: "Közösség",
    status: "Megfontolás alatt",
    note: "A rang akkor tart meg, ha jár vele valami: kérdés az élő adásban, témajavaslat, próbahónap a Belső körben. Vizuálisan visszafogott, tartalmilag valódi. A próbahónap csak akkor jár, ha van szabad hely.",
  },
  {
    id: "i09",
    title: "Pozitív közösségi identitás",
    category: "Közösség",
    status: "Elfogadva",
    note: "„Vállalkozók, akik csinálják, nem csak beszélnek róla.” Van „mi”, de nincs ellenség. Az ellenségkép rövid távon megtart, hosszú távon Péter 25 évét viszi el.",
  },
  {
    id: "i10",
    title: "Sikerfal, valódi eredményekkel",
    category: "Közösség",
    status: "Ötlet",
    note: "A Siker kategória a bizonyíték motorja, de csak valódi, tagoktól származó eredményekkel. Péter személyes reakciója rá többet ér bármilyen jelvénynél. Kitalált vélemény sehol, a nyitóoldalon sem.",
  },
  {
    id: "i11",
    title: "Indulási kampány: a korábbi mentoráltak reaktiválása",
    category: "Üzlet",
    status: "Megfontolás alatt",
    note: "Az 1500+ korábban tanított vállalkozó egy meleg lista. Az indulás első hulláma innen jöhet, nem hideg hirdetésből. Egy személyes hangú levél Pétertől többet ér, mint egy kampányoldal.",
  },
  {
    id: "i12",
    title: "AI asszisztens az átiratokból",
    category: "Technika",
    status: "Megfontolás alatt",
    note: "A forgatott anyag átiratai lesznek az asszisztens tudásbázisa. Minden válasz a forrás leckére hivatkozik. Ez az, amitől a tudás akkor is elérhető, ha Péter nincs jelen.",
  },
  {
    id: "i13",
    title: "Videótárhely, fizetés, számlázás",
    category: "Technika",
    status: "Ötlet",
    note: "Videó: Mux, Bunny vagy Vimeo, nem YouTube. Fizetés: Stripe, vagy magyar oldalról SimplePay, illetve Barion. Számlázás: Számlázz.hu vagy Billingo integráció. Az előfizetés megújítása automatikus.",
  },
  {
    id: "i14",
    title: "ÁSZF, elállási jog, GDPR",
    category: "Jog és pénzügy",
    status: "Ötlet",
    note: "Automatikusan megújuló digitális előfizetés: kell ÁSZF, a 14 napos elállási jog kezelése digitális tartalomnál, és adatkezelési tájékoztató. Egy ügyvédi kör az indulás előtt, nem utána.",
  },
  {
    id: "i15",
    title: "Egyedi platform vs. Skool / Circle / Podia",
    category: "Üzlet",
    status: "Megfontolás alatt",
    note: "Az egyedi építés melletti érvek: tulajdonlás, magyar számlázás és fizetés, saját arculat, és az AI asszisztens, amit a kész platformok nem tudnak. A díj önmagában nem érv egyik irányba sem.",
  },
  {
    id: "i16",
    title: "Havi élő Q&A ritmusa",
    category: "Tartalom",
    status: "Elfogadva",
    note: "Egy élő alkalom havonta, felvéve, a tárba visszatéve. Ez a minimum jelenlét, ami az előfizetést életben tartja, és az egyetlen rendszeres időigénye Péternek.",
  },
  {
    id: "i17",
    title: "A mentoring-érdeklődők szűrése",
    category: "Üzlet",
    status: "Ötlet",
    note: "Az egyéni, óradíjas munka a csúcson marad. Egy előszűrő az érdeklődőknek, hogy csak az kapjon időpontot, akinek tényleg az való. A többieknek az akadémia a jobb első lépés.",
  },
];

export const IDEA_CATEGORIES: IdeaCategory[] = ["Tartalom", "Közösség", "Üzlet", "Jog és pénzügy", "Technika"];
export const IDEA_STATUSES: IdeaStatus[] = ["Ötlet", "Megfontolás alatt", "Elfogadva", "Elvetve"];
