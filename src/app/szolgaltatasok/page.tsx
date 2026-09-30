import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Barlow } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import DirectFooter from "@/components/direct/DirectFooter";
import ServiceArt from "@/components/szolg/ServiceArt";

/* The services page, built from the landing's parts rather than its own: the
   same sky band at the top, the same centred cards, the same closing
   statement line. Only the dark plate is this page's own, and it does what the
   landing's offer panel does — it names the thing in one line.

   The substance comes from the old root: the three phases of the sales
   system, the bespoke projects, the guarantees. No published prices, no
   unverifiable figures. */

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-src",
});

export const metadata: Metadata = {
  alternates: { canonical: "/szolgaltatasok" },
  robots: { index: false, follow: true },
  title: "Szolgáltatások",
  description:
    "Öt dolgot csinálunk: AI értékesítési rendszert, adatbázis-újraélesztést, szöveges és hang ügynököket, és egyedi AI-megoldásokat. Mindegyikről megmondjuk, mit ad és kinek nem való.",
};

type Phase = { k: string; t: string; items: [string, string][] };
type Example = { t: string; who: string; d: string };
type Card = { a: string; b: string };

type Service = {
  id: string;
  n: string;
  accent: string;
  art: "system" | "revive" | "text" | "voice" | "custom";
  name: string;
  plate: string;
  lead: string;
  cards: Card[];
  who: string;
  phases?: Phase[];
  examples?: Example[];
};

const SERVICES: Service[] = [
  {
    id: "ertekesitesi-rendszer",
    n: "01",
    accent: "var(--viz-purple)",
    art: "system",
    name: "AI értékesítési rendszer",
    plate: "A megkeresésből megrendelés.",
    lead:
      "Nem csevegőablak a weboldal sarkában. Egy rendszer, amely a megkeresést végigviszi a foglalásig, az árajánlatig és az utánkövetésig, majd gondoskodik arról, hogy az ügyfél vissza is jöjjön.",
    cards: [
      { a: "Nyolc csatorna, egy beszélgetés.", b: "Az ügyfélnek semmit nem kell kétszer elmondania." },
      { a: "Nem a bemutatón mérjük.", b: "Foglaláson és megrendelésen." },
      { a: "A cége méretéhez igazítjuk.", b: "A pár fős csapattól a nagyvállalatig." },
      { a: "Saját CRM és irányítópult.", b: "Heti riport arról, mi lett belőle." },
    ],
    phases: [
      {
        k: "01",
        t: "Megkeresés",
        items: [
          ["Hívásfogadás", "minden hívást felvesz, éjjel és hétvégén is"],
          ["Azonnali utánkövetés", "a webes vagy közösségi érdeklődőt percek alatt felhívja"],
          ["Minősítés", "felteszi a fontos kérdéseket, mielőtt Önhöz kerül"],
          ["Válaszadás", "a gyakori kérdésekre a cég saját anyagaiból felel"],
          ["Árajánlat-utánkövetés", "a kiküldött ajánlat nem hűl ki"],
          ["Élő átadás", "ha ember kell, a megfelelő kollégához kapcsol"],
        ],
      },
      {
        k: "02",
        t: "Foglalás",
        items: [
          ["Időpontfoglalás", "egyenesen a naptárba, ütközés nélkül"],
          ["Visszaigazolás", "azonnal, automatikusan"],
          ["Emlékeztető", "hogy az időpont meg is legyen tartva"],
          ["Átütemezés", "lemondás után visszahív, és új időpontot egyeztet"],
        ],
      },
      {
        k: "03",
        t: "Megtartás",
        items: [
          ["Esedékesség", "szól, amikor a következő alkalom esedékes"],
          ["Elégedettség", "a munka után rákérdez, és a gondot időben jelzi"],
          ["Értékelés", "elégedett ügyféltől értékelést kér"],
          ["Reaktiválás", "hónapokkal később visszahozza a régit"],
          ["Kimutatás", "megmutatja, mi lett belőle"],
        ],
      },
    ],
    who: "Annak a cégnek, ahol a megkeresés telefonon vagy üzenetben érkezik, és a következő lépés egy időpont vagy egy árajánlat.",
  },
  {
    id: "adatbazis-ujraeleszt",
    n: "02",
    accent: "var(--viz-amber)",
    art: "revive",
    name: "AI adatbázis-újraélesztés",
    plate: "A régi listája a legolcsóbb bevétel.",
    lead:
      "A korábbi ügyfelek és a rég elhalt érdeklődők már ismerik Önt. Őket visszahozni olcsóbb, mint új embert szerezni. Csak senkinek nincs ideje végigtelefonálni ezer sort.",
    cards: [
      { a: "Nem tömeges körüzenet.", b: "Beszélgetés, ami a válaszra reagál." },
      { a: "A listát előbb rendbe tesszük.", b: "Duplikátum, halott elérhetőség, szegmensek." },
      { a: "Aki válaszol, időpontot kap.", b: "Vagy ajánlatot, azonnal." },
      { a: "Aki nemet mond, lekerül.", b: "Nem zaklatjuk tovább." },
    ],
    who: "Annak, akinek több száz vagy több ezer régi ügyfele ül egy táblázatban vagy egy CRM-ben, használatlanul.",
  },
  {
    id: "szoveges-ugynokok",
    n: "03",
    accent: "var(--viz-blue)",
    art: "text",
    name: "AI szöveges ügynökök",
    plate: "Írásban, azonnal, éjjel is.",
    lead:
      "Az írásos megkeresésnél a válaszidő dönt: aki fél óra múlva válaszol, gyakran már a második helyre ír. Az ügynök másodpercek alatt válaszol, és nem hagyja lebegni a beszélgetést.",
    cards: [
      { a: "A cég saját anyagaiból válaszol.", b: "Nem találgat." },
      { a: "Kérdez és minősít.", b: "Egy időponttal zárja a beszélgetést." },
      { a: "Ha nem tudja, nem improvizál.", b: "Embert hív." },
      { a: "Hét csatorna, egy felület.", b: "A lényeget a CRM-be írja." },
    ],
    who: "Annak a cégnek, ahol sok az írásos megkeresés, és a gyors válasz dönti el, kinél foglalnak.",
  },
  {
    id: "hang-ugynokok",
    n: "04",
    accent: "var(--viz-cyan)",
    art: "voice",
    name: "AI hang ügynökök",
    plate: "Felveszi. Mindig.",
    lead:
      "Természetes magyar beszéd, menü és robothang nélkül, bejövő és kimenő hívásra is. A hangot a cégéhez hangoljuk, mielőtt élesedik.",
    cards: [
      { a: "Hétköznapi magyar, valódi szünetekkel.", b: "Nem gépi felolvasás." },
      { a: "Nem titkoljuk, hogy AI.", b: "A hívók többsége mégsem veszi észre." },
      { a: "Hívás közben foglal időpontot.", b: "És vissza is igazolja." },
      { a: "Minden hívás visszahallgatható.", b: "Nem kell elhinnie, hogy jól ment." },
    ],
    who: "Ahol a telefon az elsődleges csatorna, és egy elmulasztott hívás konkrét pénz.",
  },
  {
    id: "egyedi",
    n: "05",
    accent: "var(--viz-green)",
    art: "custom",
    name: "Egyedi AI megoldások",
    plate: "Amit a kész csomag nem fed le.",
    lead:
      "Ha az előre gyártott csomagok nem illeszkednek a működéséhez, arra építünk rendszert, amire szüksége van. Konkrét, ismétlődő problémára tervezünk megoldást, nem általánosságban beszélünk AI-ról.",
    cards: [
      { a: "Nem dobozt húzunk a folyamatára.", b: "A folyamatra tervezünk." },
      { a: "Fix ár, közös eredmény.", b: "Ha több kör kell, az a mi dolgunk." },
      { a: "Amit megépítünk, az az Öné.", b: "A dokumentációval együtt." },
      { a: "Ha nem oldható meg AI-jal,", b: "megmondjuk, és nem raboljuk az idejét." },
    ],
    examples: [
      { t: "Hang-AI értékesítő hívásokhoz", who: "Telemarketinggel értékesítő cégnek", d: "Bemutatja az ajánlatot, válaszol a kérdésekre, rögzíti az eredményt. Az értékesítők már az érdeklődőkkel beszélnek." },
      { t: "Telefonos asszisztens foglalással", who: "Fogászati rendelőnek", d: "Fogadja a hívást, elmond mindent a szolgáltatásokról, és lefoglalja az időpontot. Utána emlékeztet rá." },
      { t: "Érdeklődő-előminősítő rendszer", who: "Sok írásos megkereséssel", d: "Kikérdezi az érdeklődőt, és csak a komolyat adja át, mindennel, amit előre tudni kell róla." },
      { t: "Webshop-asszisztens", who: "Autóalkatrész-webshopnak", d: "Ha az ügyfél komplett egységet kér, a hozzá tartozó összes alkatrészt kosárba teszi. Nem kell cikkszámot keresni." },
      { t: "Árajánlat-készítő rendszer", who: "Árajánlatot készítő cégeknek", d: "A felmérés jegyzeteiből, az Ön árlistája alapján elkészíti az ajánlat piszkozatát. Önnek már csak átnéznie kell." },
      { t: "Ügyfél-felkutató rendszer", who: "B2B értékesítéssel", d: "Megkeresi a profilba illő cégeket, elküldi az első üzenetet, és csak a válaszolót adja át." },
      { t: "Rendszerek közötti adatkapocs", who: "Több programot használó cégnek", d: "A nyilvántartás, a számlázó és a naptár egyben marad, és szól, ha valami nem stimmel." },
      { t: "Személyes kapcsolattartó felület", who: "Hosszú döntési idővel", d: "Egy felületről küldhet személyre szabott üzenetet minden érdeklődőjének, amíg még nem döntöttek." },
    ],
    who: "Annak, akinek konkrét, ismétlődő problémája van, nem általános AI-ötlete.",
  },
];

const GUARANTEE: Card[] = [
  { a: "Fix ár, működő eredmény.", b: "Ha több kör kell hozzá, az a mi dolgunk, felár nélkül." },
  { a: "Az Öné marad.", b: "A rendszert és a dokumentációt is átadjuk." },
  { a: "Nem fekete doboz épül.", b: "Rendszeresen megmutatjuk, hol tartunk." },
  { a: "Magyar nyelv, EU-s tárolás.", b: "GDPR-megfelelés, papíron is." },
];

export default function ServicesPage() {
  return (
    <div
      className={`page page--direct page--szolg ${barlow.variable}`}
      data-screen-label="atriumscaling.com /szolgaltatasok"
    >
      <ScrollReveal />

      <section className="sk-hero sk-hero--svc">
        {/* Same sky as the landing, cropped higher so this band is not the
            same picture twice. */}
        <div className="sk-hero__bg" aria-hidden="true">
          <Image src="/img/hero-eg.jpg" alt="" fill priority sizes="100vw" className="sk-hero__img" />
        </div>
        <header className="sk-top">
          <a className="sk-top__brand" href="/">Atrium<i /></a>
          <nav className="sk-top__nav">
            <a href="/">Főoldal</a>
            <a className="is-active" href="/szolgaltatasok" aria-current="page">Szolgáltatások</a>
          </nav>
          <a className="sk-top__cta" href="/foglalas?from=szolgaltatasok">Foglaljon időpontot</a>
        </header>
        <div className="sk-in">
          <h1 className="sk-h1 reveal" data-delay="1">
            Öt dolgot csinálunk.
            <span>Mindegyik pénzről szól.</span>
          </h1>
          <p className="sk-lead reveal" data-delay="2">
            Mindegyiknél megmondjuk, mit ad, és kinek nem való. Ha a cégéhez
            egyik sem illik, azt is kimondjuk.
          </p>
          <ul className="sk-jump reveal" data-delay="3">
            {SERVICES.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.name}</a></li>
            ))}
          </ul>
        </div>
      </section>

      {SERVICES.map((s) => (
        <section className="dr-sec svc" id={s.id} key={s.id} style={{ "--svc-accent": s.accent } as CSSProperties}>
          <div className="dr-wrap">
            <div className="svc__plate reveal">
              <span className="svc__plate-k">{s.n} · {s.name}</span>
              <p className="svc__plate-t">{s.plate}</p>
            </div>

            <p className="svc__lead reveal" data-delay="1">{s.lead}</p>

            <div className="dr-cards dr-cards--2">
              {s.cards.map((c, i) => (
                <div className="dr-card dr-card--x reveal" data-delay={(i % 2) + 1} key={c.a}>
                  <p>
                    <span className="dr-card__a">{c.a}</span>
                    <span className="dr-card__b">{c.b}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="svc__art reveal" data-delay="2">
              <ServiceArt kind={s.art} />
            </div>

            {s.phases && (
              <div className="svc__phase-grid">
                {s.phases.map((p, i) => (
                  <div className="svc__phase reveal" data-delay={i + 1} key={p.k}>
                    <span className="svc__phase-k">{p.k}</span>
                    <h3 className="svc__phase-t">{p.t}</h3>
                    <ul>
                      {p.items.map(([t, d]) => (
                        <li key={t}><b>{t}</b>: {d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {s.examples && (
              <div className="svc__ex">
                <p className="svc__ex-note">
                  Ezek megépült rendszerek típusai, nem árlista. Az Öné másképp
                  fog kinézni: a folyamata dönti el, hogyan.
                </p>
                <div className="svc__ex-grid">
                  {s.examples.map((e, i) => (
                    <article className="svc__ex-item reveal" data-delay={(i % 2) + 1} key={e.t}>
                      <span className="svc__ex-who">{e.who}</span>
                      <h4>{e.t}</h4>
                      <p>{e.d}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            <p className="dr-statement svc__who reveal" data-delay="3">
              <em>Kinek való</em>
              {s.who}
            </p>
          </div>
        </section>
      ))}

      <section className="dr-sec">
        <div className="dr-wrap">
          <div className="dr-center">
            <h2 className="dr-h2 reveal">Amit vállalunk rá.</h2>
          </div>
          <div className="dr-cards dr-cards--2">
            {GUARANTEE.map((g, i) => (
              <div className="dr-card dr-card--x reveal" data-delay={(i % 2) + 1} key={g.a}>
                <p>
                  <span className="dr-card__a">{g.a}</span>
                  <span className="dr-card__b">{g.b}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dr-close" id="kapcsolat">
        <div className="dr-wrap">
          <div className="dr-close__panel reveal">
            <h2 className="dr-h2">Melyik kell Önnek?</h2>
            <p className="dr-close__p">
              Ezt előre nem mondjuk meg. Fél óra beszélgetés, és a végén tudni
              fogja, akkor is, ha a válasz az, hogy egyik sem.
            </p>
            <a className="dr-btn dr-btn--lg" href="/foglalas?from=szolgaltatasok">Foglaljon időpontot</a>
          </div>
        </div>
      </section>

      <DirectFooter />
    </div>
  );
}
