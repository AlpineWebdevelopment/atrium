import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import DirectFooter from "@/components/direct/DirectFooter";

/* The services page the root deliberately leaves out: five offers, each with
   what makes it different, what it actually does, and who it is not for. The
   structure follows the reference the client sent (a numbered rail on the
   left, a dark plate per service, then "why" / "what it gives" blocks); the
   ground, type and tone stay ours — bone, Bebas over Barlow, no published
   prices and no unverifiable figures.

   Shares the /direct vocabulary (the page carries page--direct as well), so
   the two surfaces stay one design once /direct becomes the root. noindex
   until that swap, like /direct itself. */

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

type Service = {
  id: string;
  n: string;
  accent: string;
  name: string;
  tag?: string;
  plate: string;
  lead: string;
  why: string[];
  gives: string[];
  who: string;
};

const SERVICES: Service[] = [
  {
    id: "ertekesitesi-rendszer",
    n: "01",
    accent: "var(--viz-purple)",
    name: "AI értékesítési rendszer",
    tag: "Specialitásunk",
    plate: "A megkeresésből megrendelés.",
    lead:
      "Nem csevegőablak a weboldal sarkában. Egy rendszer, amely a megkeresést végigviszi a foglalásig, az árajánlatig és az utánkövetésig. Minden csatorna ugyanabból a memóriából dolgozik: aki telefonon kezdte és Instagramon folytatja, ugyanaz az ügyfél marad.",
    why: [
      "Egy beszélgetés, nyolc csatorna: telefon, SMS, WhatsApp, Viber, Messenger, Instagram, e-mail, webchat.",
      "Az ügyfélnek semmit nem kell kétszer elmondania.",
      "Nem a bemutatón mérjük, hanem a foglalásokon és a megrendeléseken.",
      "Hétről hétre hangoljuk, az Ön számai alapján.",
    ],
    gives: [
      "Minden hívást fogad, éjjel és hétvégén is.",
      "A webes és közösségi érdeklődőt percek alatt megkeresi.",
      "Kikérdezi és minősíti, mielőtt Önhöz kerül.",
      "Időpontot foglal egyenesen a naptárba, ütközés nélkül.",
      "Visszaigazol, emlékeztet, és lemondás után újat egyeztet.",
      "A kiküldött árajánlatot utánköveti, hogy ne hűljön ki.",
      "Ha emberi szó kell, a megfelelő kollégához kapcsol.",
      "Saját CRM, irányítópult és heti riport jár hozzá.",
    ],
    who:
      "Szolgáltató cégnek, ahol a megkeresés telefonon vagy üzenetben érkezik, és a következő lépés egy időpont vagy egy árajánlat.",
  },
  {
    id: "adatbazis-ujraeleszt",
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
    n: "05",
    accent: "var(--viz-green)",
    name: "Egyedi AI megoldások",
    plate: "Amit a rendszer nem fed le.",
    lead:
      "Ha a cégében van egy ismétlődő, kézi folyamat, amely időt vagy pénzt éget, megnézzük, megoldható-e AI-jal. Ha igen, megépítjük. Ha nem, megmondjuk, és nem raboljuk tovább az idejét.",
    why: [
      "Nem kész dobozt húzunk a folyamatára: a folyamatra tervezünk.",
      "Fix áron, közösen meghatározott eredményre dolgozunk.",
      "Amit megépítünk, az az Öné — a dokumentációval együtt.",
    ],
    gives: [
      "Hang-AI, amely a hideg listát végighívja, és csak az érdeklődőt adja át.",
      "Webshop-asszisztens, amely a kért egységhez minden alkatrészt kosárba tesz.",
      "Árajánlat-piszkozat a felmérés jegyzeteiből, az Ön árlistája alapján.",
      "B2B ügyfélkutatás: profilba illő cégek és személyre szabott első üzenet.",
      "Adatkapocs a nyilvántartás, a számlázó és a naptár között.",
    ],
    who:
      "Annak, akinek konkrét, ismétlődő problémája van — nem általános AI-ötlete.",
  },
];

const GUARANTEE = [
  { t: "Fix ár, működő eredmény", d: "Közösen meghatározott eredményre dolgozunk. Ha több kör kell hozzá, az a mi dolgunk, felár nélkül." },
  { t: "Az Öné marad", d: "A rendszert és a dokumentációt is átadjuk, így soha nem függ kizárólag tőlünk." },
  { t: "Folyamatos rálátás", d: "Nem fekete doboz épül. Rendszeresen megmutatjuk, hol tartunk, és mit hozott eddig." },
];

export default function ServicesPage() {
  return (
    <div className={`page page--direct page--szolg ${barlow.variable}`} data-screen-label="atriumscaling.com /szolgaltatasok">
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

              <div className="svc__cols">
                <div className="svc__col reveal" data-delay="1">
                  <h3 className="svc__h">Miért más</h3>
                  <ul className="svc__list svc__list--dash">
                    {s.why.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
                <div className="svc__col reveal" data-delay="2">
                  <h3 className="svc__h">Amit nyújt</h3>
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
