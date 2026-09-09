/* Shared copy for the /chatgpt-hirdetes landing that both server and client
   components read: the cited OpenAI sources and the FAQ pairs (the FAQ list
   renders the accordion on the client and the FAQPage JSON-LD on the server,
   so it lives here rather than inside the "use client" component).

   Positioning: Atrium is the AI growth partner that runs the whole customer
   acquisition system — ChatGPT ads, landing page, lead handling, reporting.
   We sell customers, not marketing.

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
    q: "Mi az a ChatGPT-hirdetés?",
    a: "Egy szponzorált kártya, amely a ChatGPT válasza alatt jelenik meg, amikor valaki olyat kérdez, amiben az Ön cége tud a legjobb válasz lenni. Címmel, rövid leírással, képpel és linkkel, szponzoráltként megjelölve. Nem szakítja félbe a beszélgetést, és nem változtatja meg magát a választ. Magyarországon 2026. augusztus 25. óta látják a felhasználók.",
    sources: ["expansion", "hvg"],
  },
  {
    q: "Mennyibe kerül?",
    a: "Két része van. A hirdetési költést Ön közvetlenül az OpenAI-nak fizeti a saját fiókjából: forintos fiókban a minimális napi büdzsé 5 500 Ft. A mi díjunk az Ön számaiból jön ki a beszélgetésen, mekkora egy ügyfél értéke, hány új ügyfél fér be egy hónapba, és nem a kattintások számából. Magyar kattintási ár ma még nincs, sem az OpenAI-tól, sem mérésből; az első hetek adják meg.",
    sources: ["budget", "billing"],
  },
  {
    q: "Mennyi idő, amíg elindul?",
    a: "A beszélgetés után néhány napon belül megkapja a kérdéstérképet: a kérdéseket, amelyekre az Ön cége szóba jön, az ajánlat-koncepciókat szöveggel, és a céloldal vázlatát. Ha Ön jóváhagyja, a hirdetési fiók létrehozása és az OpenAI cégellenőrzése néhány nap, a céloldal és a kampány ezzel párhuzamosan készül.",
    sources: ["account"],
  },
  {
    q: "Kicsi cégként is van értelme?",
    a: "Igen, ha ma is érkeznek érdeklődők, és van hova fogadni őket. A ChatGPT-ben ma még kevés magyar cég hirdet, és a napi minimum nem milliós keret. Ami számít: az Ön területén és régiójában mi egy céggel dolgozunk, így nem saját maga ellen licitál.",
    sources: ["budget"],
  },
  {
    q: "Miben más, mint a Google Ads?",
    a: "A ChatGPT-ben nem kulcsszóra, hanem a beszélgetés témájára jelenik meg a hirdetés: a hirdető kontextus-jelzéseket ad meg, és a rendszer ahhoz illeszti a kártyát, amiről a felhasználó éppen kérdez. Európában induláskor nincs személyre szabás, a beszélgetés kontextusa, a nyelv és a hozzávetőleges hely számít. A kattintás mögött olyan ember áll, aki éppen dönt, nem böngész.",
    sources: ["media1", "collection"],
  },
  {
    q: "Ki látja a ChatGPT-hirdetéseket?",
    a: "A bejelentkezett, ingyenes és Go csomagos felhasználók. A Plus, Pro és Enterprise előfizetők hirdetés nélkül használják a ChatGPT-t.",
    sources: ["expansion", "policies"],
  },
  {
    q: "Milyen cégek hirdethetnek a ChatGPT-ben?",
    a: "A jelenlegi szabályok szerint a korai szakasz fókusza a háztartási és fogyasztási cikkek, a helyi szolgáltatások, az utazás és szórakozás, valamint a digitális termékek és az oktatás. Egészségügyi, pénzügyi és jogi szolgáltatók az Egyesült Államokon kívül jelenleg nem hirdethetnek. A céloldalt a hirdetéssel együtt bírálják el: félrevezető ígéret az eredményről vagy az árról elutasítást jelent. Ezért a céloldalt is mi készítjük, a szabályok szerint.",
    sources: ["policies"],
  },
  {
    q: "Mit kell nekem csinálnom?",
    a: "Egy beszélgetést, és utána jóváhagyni a tervet. A kérdéskutatást, az ajánlatot, a szövegeket, a céloldalt, a hirdetési fiók beállítását, a kampány kezelését és a havi riportot mi visszük. Ha az érdeklődők fogadását is ránk bízza, a rendszer percek alatt visszahívja őket és időpontot foglal, de ez az Ön döntése, nem feltétel.",
  },
  {
    q: "Kié lesz a hirdetési fiók és a céloldal?",
    a: "Az Öné. A hirdetési fiók az Ön cége nevén fut, a költést az OpenAI-nak fizeti, nem nekünk. A céloldal az Ön tulajdona, a szövegekkel és az adatokkal együtt. Ha elválunk, minden Önnél marad.",
  },
];
