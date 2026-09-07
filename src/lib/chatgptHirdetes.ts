/* Shared copy for the /chatgpt-hirdetes landing that both server and client
   components read: the cited OpenAI sources and the FAQ pairs (the FAQ list
   renders the accordion on the client and the FAQPage JSON-LD on the server,
   so it lives here rather than inside the "use client" component).

   Every dated fact on the page links to one of these sources. Re-verify the
   links before shipping — OpenAI has been rewriting its ad policy monthly.
   Facts verified 2026-09-07. */

export const SOURCES = {
  expansion: {
    label: "OpenAI — ChatGPT Ads expands across Europe (2026. augusztus 18.)",
    url: "https://openai.com/index/chatgpt-ads-expands-across-europe/",
  },
  policies: {
    label: "OpenAI — Ad policies (v1.5, frissítve 2026. augusztus 31.)",
    url: "https://openai.com/policies/ad-policies/",
  },
  budget: {
    label: "OpenAI Help — Create campaigns for ChatGPT Ads (minimális napi büdzsé táblázat)",
    url: "https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt",
  },
  account: {
    label: "OpenAI Help — Ads Manager beta account setup",
    url: "https://help.openai.com/en/articles/20001213-ads-manager-beta-account-setup",
  },
  billing: {
    label: "OpenAI Help — Billing and payment",
    url: "https://help.openai.com/en/articles/20001216-billing-payment",
  },
  collection: {
    label: "OpenAI Help — ChatGPT Ads gyűjtőoldal (mérés, hirdetéscsoportok, kontextus-jelzések)",
    url: "https://help.openai.com/en/collections/20001223-chatgpt-ads",
  },
  hvg: {
    label: "hvg.hu — a magyar indulásról (2026. augusztus 26.)",
    url: "https://hvg.hu/tudomany/20260826_openai-chatgpt-reklamok-megjelenese-magyarorszag",
  },
  media1: {
    label: "media1.hu — az európai, nem személyre szabott indulásról (2026. augusztus 25.)",
    url: "https://media1.hu/2026/08/25/chatgpt-reklamok-hirdetesek-magyarorszag-openai-ads/",
  },
} as const;

export type SourceKey = keyof typeof SOURCES;

export type FaqItem = { q: string; a: string; sources?: SourceKey[] };

export const FAQS: FaqItem[] = [
  {
    q: "Elérhető már a ChatGPT-hirdetés Magyarországon?",
    a: "Igen. Az OpenAI 2026. augusztus 18-án jelentette be, hogy a hirdetések 31 európai országban, köztük Magyarországon is megjelennek; a magyar felhasználók augusztus 25. óta látják őket. Az önkiszolgáló hirdetéskezelő európai hirdetőknek 2026 szeptemberétől érhető el.",
    sources: ["expansion", "hvg"],
  },
  {
    q: "Ki látja a ChatGPT-hirdetéseket?",
    a: "A bejelentkezett, ingyenes és Go csomagos felhasználók. A Plus, Pro és Enterprise előfizetők hirdetés nélkül használják a ChatGPT-t. A hirdetés a válasz alatt jelenik meg, szponzoráltként megjelölve, és nem változtatja meg magát a választ.",
    sources: ["expansion", "policies"],
  },
  {
    q: "Miben más a ChatGPT-hirdetés, mint a Google Ads?",
    a: "A ChatGPT-ben nem kulcsszóra, hanem a beszélgetés témájára jelenik meg a hirdetés: a hirdető kontextus-jelzéseket ad meg, és a rendszer ahhoz illeszti a kártyát, amiről a felhasználó éppen kérdez. Európában induláskor nincs személyre szabás — a beszélgetés kontextusa, a nyelv és a hozzávetőleges hely számít. A kattintás mögött így olyan ember áll, aki éppen egy konkrét kérdésre keres választ.",
    sources: ["media1", "collection"],
  },
  {
    q: "Mennyibe kerül egy kattintás a ChatGPT-ben?",
    a: "Magyar kattintási ár ma még nincs — sem az OpenAI-tól, sem mérésből. Amit az OpenAI közöl: forintos fiókban a minimális napi büdzsé 5 500 Ft, a vásárlás CPM, CPC vagy konverzióra optimalizált CPC alapon történik, utólagos számlázással. A valódi kattintási árat az Ön első kampányának első hetei adják meg.",
    sources: ["budget", "billing"],
  },
  {
    q: "Milyen cégek hirdethetnek a ChatGPT-ben?",
    a: "A jelenlegi szabályok szerint a korai szakasz fókusza a háztartási és fogyasztási cikkek, a helyi szolgáltatások, az utazás és szórakozás, valamint a digitális termékek és az oktatás. Egészségügyi, pénzügyi és jogi szolgáltatók az Egyesült Államokon kívül jelenleg nem hirdethetnek. A landing oldalt a hirdetéssel együtt bírálják el: félrevezető ígéret az eredményről vagy az árról bármelyik kategóriában elutasítást jelent.",
    sources: ["policies"],
  },
  {
    q: "Mit csinál az Atrium a ChatGPT-hirdetéssel?",
    a: "A hirdetési fiók az Öné marad, a kampányt Ön kezeli, vagy aki ma a hirdetéseit viszi. Az Atrium az, ami a kattintás után történik: a rendszer percek alatt visszahívja az érdeklődőt, fogadja a hívást, lefoglalja az időpontot, utánköveti az ajánlatkérést, és havonta megmutatja, mi lett a hirdetési költésből. Nem chatbot, hanem egy értékesítési rendszer, amely az Ön cégére épül.",
  },
  {
    q: "Kell új szoftverre váltania a csapatomnak?",
    a: "Nem. A rendszer a meglévő naptár, CRM és telefon mellé épül, nem a helyükre. Amit a csapata ma használ, azt használja tovább; a rendszer a két oldalt szinkronban tartja. Nincs adatmigráció, nincs átképzés.",
  },
  {
    q: "Mennyibe kerül az Atrium rendszere?",
    a: "Nincs árlista, mert egy általános ár az Ön cégére úgyis rossz lenne. Az ár az Ön számaiból jön ki a találkozón: hány érdeklődő érkezik, mekkora egy munka értéke, mennyi vész el ma. Ebből látszik, mennyit ér a rendszer az Ön cégének, és ebből lesz a szám. Foglaljon időpontot, és a beszélgetés végén tudni fogja.",
  },
];
