import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* Karrier — a single open role (full-stack fejlesztő). Built from the shared
   landing primitives (wrap / dash__intro / caps / how / final-cta) so it reads
   as the same site; only the job-specific blocks (.kar-*) are new.
   Voice: informal "te" — the rest of the site addresses buyers as "Ön", but a
   Hungarian dev job ad written in "Ön" reads as a bank letter.
   NOTE: the apply CTA must not contain "#kapcsolat" or start with the word
   "Foglaljon" — BookingRedirect hijacks those clicks to /foglalas. */

const SITE_URL = "https://atriumscaling.com";
const APPLY_EMAIL = "karrier@atriumscaling.com";
const APPLY_HREF = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
  "Jelentkezés — Full-stack fejlesztő",
)}`;

export const metadata: Metadata = {
  title: "Karrier — Full-stack fejlesztőt keresünk",
  description:
    "Full-stack fejlesztőt keresünk 2026 októberi kezdéssel. 1 350 000 Ft nettó / hó, 100% home office, kötetlen munkaidő, teljes munkaidő.",
  alternates: { canonical: "/karrier" },
  openGraph: {
    type: "website",
    title: "Karrier — Full-stack fejlesztőt keresünk · Atrium",
    description:
      "1 350 000 Ft nettó / hó, home office, kötetlen munkaidő, októberi kezdés.",
    url: "/karrier",
  },
  robots: { index: true, follow: true },
};

const FACTS = [
  { k: "Pozíció", v: "Full-stack fejlesztő", n: "Egy fő" },
  { k: "Fizetés", v: "1 350 000 Ft", n: "nettó / hó, fixen", hi: true },
  { k: "Kezdés", v: "2026. október", n: "A pontos napot közösen egyeztetjük" },
  { k: "Munkavégzés", v: "100% home office", n: "Az ország bármely pontjáról" },
  { k: "Munkaidő", v: "Kötetlen", n: "Az eredmény számít, nem a jelenlét" },
  { k: "Jogviszony", v: "Teljes munkaidő", n: "Hosszú távra keresünk" },
];

const WORK = [
  {
    t: "Éles rendszereket építesz",
    d: "Ügyfélportálok, saját CRM, weboldalak és a mögöttük futó folyamatok. Amit ma megírsz, azt jövő héten valódi cégek használják.",
    ico: (
      <>
        <polyline points="8 6 3 12 8 18" />
        <polyline points="16 6 21 12 16 18" />
      </>
    ),
  },
  {
    t: "Végigviszed, amit elvállalsz",
    d: "Adatmodelltől a felületen át az élesítésig a tiéd a feladat. Nem egy sorban zársz jegyeket, hanem működő dolgot adsz át.",
    ico: (
      <>
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    t: "AI-t kötsz a működésbe",
    d: "LLM-hívások, hangügynökök, e-mail- és naptárintegrációk — olyan funkciók, amelyek az ügyfélnek mérhetően pénzt hoznak.",
    ico: (
      <>
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <path d="M12 4v4" />
        <circle cx="12" cy="3" r="1.4" />
        <path d="M9 13h.01M15 13h.01" />
        <path d="M9.5 16.5h5" />
      </>
    ),
  },
  {
    t: "Beleszólsz, hogyan épül",
    d: "Kis csapat, rövid döntési út. Ha valamit máshogy csinálnál jobban, azt megbeszéljük — és úgy csináljuk.",
    ico: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5" />
      </>
    ),
  },
];

const MUST = [
  "Legalább 3 év éles webfejlesztői tapasztalat — olyan rendszereken, amelyeket valaki tényleg használt",
  "Erős TypeScript, React és Next.js tudás",
  "A backend is megy: API-tervezés, SQL-adatbázisok, autentikáció, külső szolgáltatások integrálása",
  "Önállóság — home office-ban is végigviszed, amit elvállaltál, és időben szólsz, ha csúszik",
  "Igényes felület: kiszúrod, ha valami „majdnem jó”, és nem hagyod úgy",
  "Gördülékeny magyar kommunikáció és angol dokumentáció olvasása",
];

const NICE = [
  "LLM-ekkel vagy AI API-kkal épített éles funkció (Anthropic, OpenAI, ElevenLabs)",
  "Hangalapú vagy telefonos rendszerek, telefonintegráció",
  "CRM, folyamatautomatizálás, e-mail- és naptárintegrációk",
  "Kitelepítés és üzemeltetés: monitorozás, hibakeresés éles rendszeren",
  "Bármi, amit meg tudsz mutatni — saját projekt, repó, működő oldal",
];

const OFFER = [
  { t: "1 350 000 Ft nettó havonta", d: "Fix összeg, nem „versenyképes juttatási csomag”." },
  { t: "100% home office", d: "Nincs bejárás, nincs kötelező iroda." },
  { t: "Kötetlen munkaidő", d: "Az számít, ami elkészül, nem az, hogy hánykor ülsz le." },
  { t: "Teljes munkaidő, hosszú távra", d: "Nem projektre veszünk fel, hanem a csapatba." },
  { t: "Modern stack", d: "TypeScript, Next.js, React, Tailwind — és a hozzá tartozó AI-eszközök." },
  { t: "Eszközök tőlünk", d: "Gép, monitor, előfizetések: amivel dolgozol, azt mi álljuk." },
];

const STEPS = [
  {
    n: "01",
    t: "Írj egy e-mailt.",
    d: "Önéletrajz és pár link arra, amit építettél. Motivációs levél nem kell.",
    ico: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    n: "02",
    t: "Beszélgetünk 30 percet.",
    d: "Videóhívás: mit építünk, mit építettél. Kérdezz nyugodtan.",
    ico: (
      <>
        <rect x="2.5" y="6" width="13" height="12" rx="2" />
        <path d="m15.5 11 6-3.5v9L15.5 13" />
      </>
    ),
  },
  {
    n: "03",
    t: "Egy kis, fizetett feladat.",
    d: "Valós, körülhatárolt feladat néhány órában. Kifizetjük akkor is, ha nem folytatjuk.",
    ico: (
      <>
        <path d="M9 11l2 2 4-4" />
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4M16 2v4" />
      </>
    ),
  },
  {
    n: "04",
    t: "Ajánlat.",
    d: "Ha mindkét oldalnak jó, októberben kezdesz.",
    ico: (
      <>
        <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

export default function KarrierPage() {
  const jobLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Full-stack fejlesztő",
    description:
      "Full-stack fejlesztőt keresünk az Atrium csapatába: magyar nyelvű AI értékesítési rendszereket építünk szolgáltató cégeknek. TypeScript, Next.js, React, saját CRM és AI-integrációk. 100% home office, kötetlen munkaidő, teljes munkaidős jogviszony, 2026 októberi kezdéssel.",
    datePosted: "2026-08-10",
    employmentType: "FULL_TIME",
    jobStartDate: "2026-10-01",
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: "Atrium",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "Hungary" },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "HUF",
      value: { "@type": "QuantitativeValue", value: 1350000, unitText: "MONTH" },
    },
  };

  return (
    <div className="page" data-screen-label="atriumscaling.com /karrier">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobLd) }}
      />

      {/* ---------- Hero ---------- */}
      <section className="kar-hero">
        <div className="wrap">
          <div className="kar-hero__in reveal">
            <span className="dash__eyebrow">Karrier</span>
            <h1 className="kar-hero__h">
              Full-stack fejlesztőt keresünk<span className="heading-dot">.</span>
            </h1>
            <p className="kar-hero__p">
              Magyar nyelvű AI értékesítési rendszereket építünk szolgáltató cégeknek — minden
              hívás fogadva, minden időpont a naptárban, minden érdeklődő utánkövetve. Most egy
              embert veszünk fel, aki ezeket a rendszereket velünk együtt építi tovább.
            </p>

            <div className="kar-hero__badges">
              <span className="sys__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /><path d="M10 20v-6h4v6" /></svg>
                Home office
              </span>
              <span className="sys__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
                Kötetlen munkaidő
              </span>
              <span className="sys__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>
                Teljes munkaidő
              </span>
              <span className="sys__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                Kezdés: október
              </span>
            </div>

            <div className="kar-hero__actions">
              <a href={APPLY_HREF} className="btn btn--lg">Jelentkezem</a>
              <a href="#a-pozicio" className="btn btn--lg btn--ghost">A pozíció részletei</a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Key facts ---------- */}
      <section className="kar-facts" id="a-pozicio">
        <div className="wrap">
          <div className="kar-facts__grid reveal" data-delay="1">
            {FACTS.map((f) => (
              <div className={"kar-fact" + (f.hi ? " kar-fact--hi" : "")} key={f.k}>
                <span className="kar-fact__k">{f.k}</span>
                <span className="kar-fact__v">{f.v}</span>
                <span className="kar-fact__n">{f.n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What you'll do ---------- */}
      <section className="kar-sec">
        <div className="wrap">
          <div className="dash__intro reveal">
            <span className="dash__eyebrow">A munka</span>
            <h2 className="dash__h">Mit fogsz csinálni<span className="heading-dot">?</span></h2>
            <p className="dash__p">
              Nem belső eszközöket fejlesztesz egy fióknak. Amin dolgozol, az ügyfeleknél élesben fut.
            </p>
          </div>
          {/* reveal sits on the grid, not the tiles — .caps__item redefines
              `transition`, which would swallow the reveal's opacity fade */}
          <div className="caps caps--kar">
            <div className="caps__grid reveal" data-delay="1">
              {WORK.map((w) => (
                <div className="caps__item" key={w.t}>
                  <span className="caps__ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{w.ico}</svg>
                  </span>
                  <b className="caps__t">{w.t}</b>
                  <span className="caps__d">{w.d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Who we're looking for ---------- */}
      <section className="kar-sec">
        <div className="wrap">
          <div className="dash__intro reveal">
            <span className="dash__eyebrow">Kit keresünk</span>
            <h2 className="dash__h">Ezt várjuk tőled<span className="heading-dot">.</span></h2>
          </div>
          <div className="kar-cols">
            <div className="kar-card reveal">
              <h3 className="kar-card__h">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Amit elvárunk
              </h3>
              <ul className="kar-list">
                {MUST.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div className="kar-card kar-card--soft reveal" data-delay="1">
              <h3 className="kar-card__h">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12h18" /></svg>
                Előny, de nem elvárás
              </h3>
              <ul className="kar-list">
                {NICE.map((n) => <li key={n}>{n}</li>)}
              </ul>
              <p className="kar-card__note">
                Ha a listából csak néhány van meg, attól még írj. A meglévő tudás többet ér, mint a
                hiánytalan felsorolás.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What we offer ---------- */}
      <section className="kar-sec">
        <div className="wrap">
          <div className="dash__intro reveal">
            <span className="dash__eyebrow">Amit kínálunk</span>
            <h2 className="dash__h">Cserébe ezt kapod<span className="heading-dot">.</span></h2>
          </div>
          <div className="kar-offer reveal" data-delay="1">
            {OFFER.map((o) => (
              <div className="kar-offer__i" key={o.t}>
                <span className="kar-offer__ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div>
                  <b className="kar-offer__t">{o.t}</b>
                  <span className="kar-offer__d">{o.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="how">
        <div className="wrap">
          <div className="dash__intro reveal">
            <span className="dash__eyebrow">A folyamat</span>
            <h2 className="dash__h">Hogyan jelentkezhetsz<span className="heading-dot">?</span></h2>
            <p className="dash__p">
              Négy lépés, felesleges körök nélkül. Minden jelentkezésre válaszolunk — akkor is, ha
              nemet mondunk.
            </p>
          </div>
          <div className="how__grid how__grid--4">
            {STEPS.map((s, i) => (
              <div className="how__step reveal" data-delay={i + 1} key={s.n}>
                <div className="how__node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{s.ico}</svg>
                  <span className="how__node-num">{s.n}</span>
                </div>
                <div className="how__body">
                  <h3 className="how__title">{s.t}</h3>
                  <p className="how__desc">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Apply CTA ---------- */}
      <section className="final-cta" id="jelentkezes">
        <div className="wrap">
          <div className="final-cta__panel reveal">
            <h2 className="final-cta__h">Egy embert keresünk. Lehet, hogy téged.</h2>
            <p className="final-cta__p">
              Küldd el az önéletrajzod és pár linket arra, amit építettél. Három munkanapon belül
              válaszolunk.
            </p>
            <a href={APPLY_HREF} className="btn btn--lg">Jelentkezem e-mailben</a>
            <span className="final-cta__note">
              {APPLY_EMAIL} · tárgy: Full-stack fejlesztő
            </span>
            <p className="kar-gdpr">
              A jelentkezéssel küldött adatokat kizárólag a kiválasztáshoz használjuk, és a folyamat
              lezárása után töröljük. Részletek az{" "}
              <a href="/adatvedelem">adatvédelmi tájékoztatóban</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
