import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import DirectFooter from "@/components/direct/DirectFooter";
import ServiceArt from "@/components/szolg/ServiceArt";

/* The services page the landing deliberately leaves out. Structure from the
   reference the client sent — a rail with the service name on the left, then
   "why", "what it does" and "who it is for" on the right — and the substance
   from the old root: the three phases of the sales system, the nine bespoke
   projects, the guarantees. Ground, type and tone stay ours: bone, Bebas over
   Barlow, no published prices, no unverifiable figures.

   Shares the landing's vocabulary (the page carries page--direct as well), so
   the two surfaces stay one design. */

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-src",
});

export const metadata: Metadata = {
  alternates: { canonical: "/szolgaltatasok" },
  title: "Szolgáltatások",
  description:
    "Öt dolgot csinálunk: AI értékesítési rendszert, adatbázis-újraélesztést, szöveges és hang ügynököket, és egyedi AI-megoldásokat. Mindegyikről megmondjuk, mit ad és kinek nem való.",
};

type Phase = { k: string; t: string; items: [string, string][] };
type Example = { t: string; who: string; d: string };

type Service = {
  id: string;
  n: string;
  accent: string;
  art: "system" | "revive" | "text" | "voice" | "custom";
  name: string;
  tag?: string;
  plate: string;
  lead: string;
  why: string[];
  gives: string[];
  who: string;
  phases?: Phase[];
  examples?: Example[];
  build?: { k: string; items: string[] }[];
};

const SERVICES: Service[] = [
  {
    id: "ertekesitesi-rendszer",
    art: "system",
    n: "01",
    accent: "var(--viz-purple)",
    name: "AI értékesítési rendszer",
    tag: "Specialitásunk",
    plate: "A megkeresésből megrendelés.",
    lead:
      "Nem csevegőablak a weboldal sarkában. Egy rendszer, amely a megkeresést végigviszi a foglalásig, az árajánlatig és az utánkövetésig — majd gondoskodik arról, hogy az ügyfél vissza is jöjjön. Minden csatorna ugyanabból a memóriából dolgozik: aki telefonon kezdte és Instagramon folytatja, ugyanaz az ügyfél marad, és nem kell kétszer elmondania.",
    why: [
      "Nyolc csatorna, egy beszélgetés: telefon, SMS, WhatsApp, Viber, Messenger, Instagram, e-mail, webchat.",
      "Az ügyfélnek semmit nem kell kétszer elmondania.",
      "Nem a bemutatón mérjük, hanem a foglalásokon és a megrendeléseken.",
      "A rendszert a cége méretéhez igazítjuk, a pár fős csapattól a nagyvállalatig.",
      "Saját CRM, irányítópult és heti riport jár hozzá.",
    ],
    phases: [
      {
        k: "01",
        t: "Megkeresés",
        items: [
          ["Hívásfogadás", "minden hívást felvesz, éjjel és hétvégén is"],
          ["Azonnali utánkövetés", "a webes, Instagram- vagy Viber-érdeklődőt is percek alatt felhívja"],
          ["Minősítés", "felteszi a fontos kérdéseket, és minősíti az érdeklődőt"],
          ["Válaszadás", "a gyakori kérdésekre azonnal válaszol, a cég saját anyagaiból"],
          ["Árajánlat-utánkövetés", "a kiküldött árajánlatot utánköveti, hogy ne hűljön ki"],
          ["Élő átadás", "ha emberi segítség kell, a megfelelő kollégához kapcsol"],
        ],
      },
      {
        k: "02",
        t: "Foglalás",
        items: [
          ["Időpontfoglalás", "egyenesen a naptárba, ütközés nélkül"],
          ["Visszaigazolás", "azonnal visszaigazolja az időpontot"],
          ["Emlékeztető", "időben szól, hogy az időpont ne maradjon el"],
          ["Átütemezés", "lemondás vagy meg nem jelenés után visszahív, és új időpontot egyeztet"],
        ],
      },
      {
        k: "03",
        t: "Megtartás",
        items: [
          ["Esedékesség-emlékeztető", "szól, amikor esedékes a következő alkalom — mielőtt az ügyfél elmaradna"],
          ["Elégedettség-ellenőrzés", "a munka után rákérdez, minden rendben volt-e, és a gondot időben jelzi"],
          ["Értékelés", "elégedett ügyféltől értékelést kér"],
          ["Reaktiválás", "hónapokkal később visszahozza a régit"],
          ["Kimutatás", "megmutatja, mit hozott a rendszer, és hol szivárog még"],
        ],
      },
    ],
    gives: [
      "Egy felület, ahol minden beszélgetés és ügyfél egy helyen van.",
      "Heti riport arról, mi történt és mi lett belőle.",
      "Magyar nyelv, EU-s adattárolás, GDPR-megfelelés.",
    ],
    who:
      "Szolgáltató cégnek, ahol a megkeresés telefonon vagy üzenetben érkezik, és a következő lépés egy időpont vagy egy árajánlat.",
  },
  {
    id: "adatbazis-ujraeleszt",
    art: "revive",
    n: "02",
    accent: "var(--viz-amber)",
    name: "AI adatbázis-újraélesztés",
    plate: "A régi listája a legolcsóbb bevétel.",
    lead:
      "A korábbi ügyfelek és a rég elhalt érdeklődők már ismerik Önt. Őket visszahozni olcsóbb, mint új embert szerezni — csak senkinek nincs ideje végigtelefonálni ezer sort.",
    why: [
      "Nem tömeges körüzenet, hanem beszélgetés, amely a válaszra reagál.",
      "A listát előbb rendbe tesszük: duplikátumok, halott elérhetőségek, szegmensek.",
      "Ott folytatja, ahol az ügyfél reagál: telefonon, üzenetben vagy e-mailben.",
    ],
    gives: [
      "Végigmegy a régi ügyfeleken és a lezáratlan érdeklődőkön.",
      "Aki válaszol, annak azonnal időpontot vagy ajánlatot ad.",
      "Aki nemet mond, lekerül a listáról — nem zaklatjuk tovább.",
      "A végén számot kap: hány embert értünk el, és mennyi jött vissza.",
    ],
    who:
      "Annak, akinek több száz vagy több ezer régi ügyfele és érdeklődője ül egy táblázatban vagy egy CRM-ben, használatlanul.",
  },
  {
    id: "szoveges-ugynokok",
    art: "text",
    n: "03",
    accent: "var(--viz-blue)",
    name: "AI szöveges ügynökök",
    plate: "Írásban, azonnal, éjjel is.",
    lead:
      "Az írásos megkeresésnél a válaszidő dönt: aki fél óra múlva válaszol, gyakran már a második helyre ír. Az ügynök másodpercek alatt válaszol, és nem hagyja lebegni a beszélgetést.",
    why: [
      "A cég saját anyagaiból válaszol, nem találgat.",
      "Kérdez, minősít, és egy időponttal zárja a beszélgetést.",
      "Ha nem tudja a választ, nem improvizál, hanem embert hív.",
    ],
    gives: [
      "Webchat, Messenger, Instagram, WhatsApp, Viber, e-mail és SMS, egy helyen.",
      "A nap 24 órájában válaszol, ünnepnapon is.",
      "A lényeget beírja a CRM-be, így a kolléga felkészülten veszi át.",
      "Időpontot foglal, vagy átadja a beszélgetést élő kollégának.",
    ],
    who:
      "Annak a cégnek, ahol sok az írásos megkeresés, és a gyors válasz dönti el, kinél foglalnak.",
  },
  {
    id: "hang-ugynokok",
    art: "voice",
    n: "04",
    accent: "var(--viz-cyan)",
    name: "AI hang ügynökök",
    plate: "Felveszi. Mindig.",
    lead:
      "Természetes magyar beszéd, menü és robothang nélkül, bejövő és kimenő hívásra is. A hangot a cégéhez hangoljuk, mielőtt élesedik.",
    why: [
      "Hétköznapi magyar, valódi szünetekkel — nem gépi felolvasás.",
      "Nem titkoljuk, hogy AI. A hívók többsége mégsem veszi észre.",
      "Minden hívás visszahallgatható, nem kell elhinnie, hogy jól ment.",
    ],
    gives: [
      "Fogadja a hívást munkaidőn kívül, hétvégén és csúcsidőben is.",
      "Hívás közben foglal időpontot, és vissza is igazolja.",
      "A nem fogadott hívásokat visszahívja.",
      "Kimenő hívásokat indít: emlékeztető, utánkövetés, régi ügyfél.",
      "Minden hívásról összefoglalót ír a CRM-be.",
    ],
    who:
      "Ahol a telefon az elsődleges csatorna, és egy elmulasztott hívás konkrét pénz.",
  },
  {
    id: "egyedi",
    art: "custom",
    n: "05",
    accent: "var(--viz-green)",
    name: "Egyedi AI megoldások",
    plate: "Amit a kész csomagok nem fednek le.",
    lead:
      "Ha az előre gyártott csomagok nem illeszkednek a működéséhez, arra építünk rendszert, amire szüksége van. Nem általánosságban beszélünk AI-ról: konkrét, ismétlődő problémára tervezünk és fejlesztünk megoldást. Lehet egyetlen automatizálás, néhány összekötött folyamat vagy egy teljes, testre szabott rendszer.",
    why: [
      "Nem kész dobozt húzunk a folyamatára: a folyamatra tervezünk.",
      "Fix áron, közösen meghatározott eredményre dolgozunk.",
      "Amit megépítünk, az az Öné — a dokumentációval együtt.",
      "Ha nem oldható meg AI-jal, megmondjuk, és nem raboljuk tovább az idejét.",
    ],
    examples: [
      {
        t: "Hang-AI értékesítő hívásokhoz",
        who: "Telemarketinggel értékesítő cégnek",
        d: "A kimenő hívásokat egy hang-AI indítja: bemutatja az ajánlatot, válaszol a kérdésekre, és rögzíti a hívás eredményét. Az értékesítők már az érdeklődőkkel beszélnek, nem a hideg listával.",
      },
      {
        t: "Telefonos asszisztens időpontfoglalással",
        who: "Fogászati rendelőnek",
        d: "Fogadja a bejövő hívásokat, mindent elmond a szolgáltatásokról, és a telefonáló nevében lefoglalja az időpontot. Utána megerősíti, és az időpontig emlékeztet rá.",
      },
      {
        t: "Érdeklődő-előminősítő rendszer",
        who: "Sok írásos megkereséssel dolgozó cégnek",
        d: "Az írásos csatornákon kikérdezi az érdeklődőt, és felméri, mennyire komoly. A munkatárshoz csak a komoly érdeklődő kerül, és vele együtt minden, amit előre tudni kell róla.",
      },
      {
        t: "Webshop-asszisztens, amely összeállítja a kosarat",
        who: "Autóalkatrész-webshopnak",
        d: "Írásban és élőszóban is válaszol a termékkérdésekre, és ha az ügyfél komplett egységet kér, a hozzá tartozó összes alkatrészt kosárba teszi. Nem kell cikkszámokat keresni.",
      },
      {
        t: "Árajánlat-készítő rendszer",
        who: "Árajánlatot készítő cégeknek",
        d: "A felmérés jegyzeteiből és fotóiból, az Ön árlistája alapján elkészíti az ajánlat piszkozatát, egységes, küldhető formában. Önnek már csak átnéznie kell, nem megírnia.",
      },
      {
        t: "Ügyfél-felkutató és megkereső rendszer",
        who: "B2B értékesítéssel dolgozó cégeknek",
        d: "Nyilvános cégadatbázisokban keresi a profilba illő cégeket, elküldi a személyre szabott első üzenetet, és csak a ténylegesen válaszolót adja át.",
      },
      {
        t: "Személyes kapcsolattartó felület",
        who: "Hosszú döntési idővel dolgozó cégnek",
        d: "Egy felületről küldhet minden érdeklődőjének személyre szabott üzenetet — névnapra, születésnapra, más alkalomra. A kapcsolat akkor is él, amíg az érdeklődő még nem döntött.",
      },
      {
        t: "Rendszerek közötti adatkapocs",
        who: "Több, össze nem kötött programot használó cégeknek",
        d: "A nyilvántartás, a számlázó és a naptár a háttérben egyben marad, és szól, ha valami nem stimmel. Egy ismétlődő gépelős feladat kerül le a napról.",
      },
    ],
    gives: [
      "Egyetlen automatizálástól a teljes, testre szabott rendszerig.",
      "A meglévő eszközeivel együtt dolgozik, nem helyettük.",
      "Fix ár, közösen meghatározott eredmény.",
      "A kész rendszert dokumentációval adjuk át.",
    ],
    who:
      "Annak, akinek konkrét, ismétlődő problémája van — nem általános AI-ötlete.",
  },
];

const GUARANTEE = [
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
    d: "Nem fekete doboz épül. Rendszeresen megmutatjuk, hol tartunk, és mit hozott eddig.",
  },
];

const BADGES = ["Magyar nyelvű", "EU-s adattárolás", "GDPR-megfelelő"];

export default function ServicesPage() {
  return (
    <div
      className={`page page--direct page--szolg ${barlow.variable}`}
      data-screen-label="atriumscaling.com /szolgaltatasok"
    >
      <ScrollReveal />

      <header className="dr-top">
        <a className="dr-top__brand" href="/">Atrium<span className="dr-top__dot">.</span></a>
        <nav className="dr-top__nav">
          <a href="/">Főoldal</a>
        </nav>
        <a className="dr-top__cta" href="/foglalas?from=szolgaltatasok">Foglaljon időpontot</a>
      </header>

      <section className="svc-hero">
        <div className="svc-wrap">
          <span className="dr-eyebrow reveal">Szolgáltatások</span>
          <h1 className="dr-h1 reveal" data-delay="1">Öt dolgot csinálunk. Mindegyik pénzről szól.</h1>
          <p className="dr-lead reveal" data-delay="2">
            Mindegyiknél megmondjuk, mit ad, mit kap belőle valójában, és kinek
            nem való. Ha a cégéhez egyik sem illik, azt is kimondjuk.
          </p>
          <ul className="svc-jump reveal" data-delay="3">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} style={{ "--svc-accent": s.accent } as CSSProperties}>
                  <i aria-hidden="true" /><b>{s.n}</b> {s.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="svc-badges reveal" data-delay="3">
            {BADGES.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </section>

      {SERVICES.map((s) => (
        <section className="svc" id={s.id} key={s.id} style={{ "--svc-accent": s.accent } as CSSProperties}>
          <div className="svc-wrap svc__grid">
            <aside className="svc__rail">
              <span className="svc__n">{s.n}</span>
              <span className="svc__rail-name">{s.name}</span>
              {s.tag && <span className="svc__tag">{s.tag}</span>}
            </aside>

            <div className="svc__body">
              <div className="svc__plate reveal">
                <span className="svc__plate-k">{s.n} · {s.name}</span>
                <p className="svc__plate-t">{s.plate}</p>
              </div>

              <p className="svc__lead reveal" data-delay="1">{s.lead}</p>

              <div className="svc__art reveal" data-delay="1">
                <ServiceArt kind={s.art} />
              </div>

              <div className="svc__cols">
                <div className="svc__col reveal" data-delay="1">
                  <h3 className="svc__h">Miért más</h3>
                  <ul className="svc__list svc__list--dash">
                    {s.why.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
                <div className="svc__col reveal" data-delay="2">
                  <h3 className="svc__h">Amit kap</h3>
                  <ul className="svc__list svc__list--ok">
                    {s.gives.map((t) => (
                      <li key={t}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The sales system is the one service with a shape: three phases
                  that follow the customer, not a list of features. */}
              {s.phases && (
                <div className="svc__phases">
                  <h3 className="svc__h svc__h--wide">Mit csinál, lépésről lépésre</h3>
                  <div className="svc__phase-grid">
                    {s.phases.map((p, i) => (
                      <div className="svc__phase reveal" data-delay={i + 1} key={p.k}>
                        <span className="svc__phase-k">{p.k}</span>
                        <h4 className="svc__phase-t">{p.t}</h4>
                        <ul>
                          {p.items.map(([t, d]) => (
                            <li key={t}><b>{t}</b> — {d}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {s.examples && (
                <div className="svc__ex">
                  <h3 className="svc__h svc__h--wide">Példa projektek</h3>
                  <p className="svc__ex-note">
                    Ezek megépült rendszerek típusai, nem árlista. Az Öné másképp
                    fog kinézni — a folyamata dönti el, hogyan.
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

              <p className="svc__who reveal" data-delay="2">
                <span>Kinek való</span>
                {s.who}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="svc-sec">
        <div className="svc-wrap">
          <h2 className="dr-h2 reveal">Amit vállalunk rá.</h2>
          <div className="svc-gua">
            {GUARANTEE.map((g, i) => (
              <div className="svc-gua__item reveal" data-delay={i + 1} key={g.t}>
                <h3>{g.t}</h3>
                <p>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dr-close" id="kapcsolat">
        <div className="svc-wrap">
          <div className="dr-close__panel reveal">
            <h2 className="dr-h2">Melyik kell Önnek?</h2>
            <p className="dr-close__p">
              Ezt előre nem mondjuk meg. Fél óra beszélgetés, és a végén tudni
              fogja — akkor is, ha a válasz az, hogy egyik sem.
            </p>
            <a className="dr-btn dr-btn--lg" href="/foglalas?from=szolgaltatasok">Foglaljon időpontot</a>
          </div>
        </div>
      </section>

      <DirectFooter />
    </div>
  );
}
