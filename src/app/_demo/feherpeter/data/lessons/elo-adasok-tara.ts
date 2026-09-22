import type { LessonContent } from "../types";

/* Recordings of past live sessions. Every past event in events.ts points at
   one of these — a live session is never lost, it becomes library content. */
export const CONTENT: Record<string, LessonContent> = {
  "qa-2026-szeptember": {
    text: `Az első havi élő Q&A felvétele. Egy órán át a ti kérdéseitekre válaszoltam, abban a sorrendben, ahogy a közösségben beérkeztek.

## Amiről szó volt

- Hogyan emelj árat a meglévő ügyfeleidnél úgy, hogy a kapcsolat megmaradjon
- Mit kezdj azzal az ügyféllel, aki mindig az utolsó pillanatban szól
- Mikor éri meg az első alkalmazott, és mikor jobb még alvállalkozóval dolgozni
- Hogyan mondj nemet egy barátnak, aki kedvezményt kér

A kérdések többsége az árazás körül forgott, ezért a következő workshopot erre szántuk. Ha a te kérdésed nem került sorra, tedd fel újra a közösségben a Kérdés kategóriában.`,
    resources: [
      { label: "Az adás kérdései időbélyeggel", kind: "pdf", size: "120 KB" },
      { label: "Áremelési levél sablon", kind: "docx", size: "48 KB" },
    ],
    comments: [
      {
        id: "qa-2026-szeptember-c1",
        memberId: "m18",
        text: "Az áremelős rész miatt néztem vissza. A levélsablont a hétvégén átírtam a saját ügyfeleimre, hétfőn megy ki az első háromnak.",
        daysAgo: 12,
      },
      {
        id: "qa-2026-szeptember-c2",
        memberId: "m10",
        text: "A barátnak adott kedvezményről szóló válasz nekem szólt. Köszönöm, hogy nem kerülted meg.",
        daysAgo: 9,
      },
    ],
  },
  "nyito-elo-adas": {
    text: `Az akadémia nyitó estje. Arról beszéltem, hogyan érdemes ezt a helyet használni, hogy ne egy újabb befizetett, de el nem végzett kurzus legyen belőle.

## A három dolog, amit kértem tőletek

1. Hetente egy leckét nézz meg, ne egyszerre tízet. A tananyag ezért nyílik meg hétről hétre.
2. A heti feladatot csináld meg, akkor is, ha kicsinek tűnik. A változás a kis lépésekből áll össze.
3. Írd meg a közösségben, mire jutottál. Amit leírsz, azt végig is gondolod.

A végén a közösség szabályairól is szó esett: itt vállalkozók vannak, akik csinálják, nem csak beszélnek róla. Segítünk egymásnak, és nem adunk el egymásnak kéretlenül.`,
    resources: [{ label: "Így használd az akadémiát — egyoldalas összefoglaló", kind: "pdf", size: "96 KB" }],
    comments: [
      {
        id: "nyito-elo-adas-c1",
        memberId: "m19",
        text: "A heti egy lecke szabályt először lassúnak éreztem. Öt hét után látom, hogy ezért csinálom még mindig.",
        daysAgo: 6,
      },
    ],
  },
  "workshop-az-elso-90-nap": {
    text: `Munkaalkalom volt, nem előadás. Mindenki a saját következő 90 napját tervezte meg, én pedig közben kérdeztem és visszajeleztem.

## A terv váza

- Egy cél, amit 90 nap múlva számmal is le tudsz mérni
- Három dolog, amit ezért minden héten megteszel
- Egy dolog, amit abbahagysz, hogy legyen rá időd
- Egy ember, akinek hetente beszámolsz

A felvételen végigkövetheted a lépéseket, és a munkalappal te is elkészítheted a sajátodat. Érdemes a vállalkozói alapok első moduljával együtt feldolgozni.`,
    resources: [
      { label: "90 napos terv — munkalap", kind: "pdf", size: "210 KB" },
      { label: "Heti beszámoló sablon", kind: "docx", size: "52 KB" },
    ],
    comments: [
      {
        id: "workshop-az-elso-90-nap-c1",
        memberId: "m21",
        text: "Az „egy dolog, amit abbahagysz” sor volt a legnehezebb. Végül a hétvégi ajánlatírást húztam ki.",
        daysAgo: 8,
      },
      {
        id: "workshop-az-elso-90-nap-c2",
        memberId: "m06",
        text: "Kinyomtattam, és kitettem a rendelőben az irodám falára. A csapat is látja, mire megyünk.",
        daysAgo: 5,
      },
    ],
  },
  "workshop-arazas": {
    text: `A szeptemberi Q&A után ez lett a legtöbbet kért téma. Valódi, a tagok által behozott árazási helyzeteken dolgoztunk — névtelenül, a számokat kerekítve.

## Amin végigmentünk

- Hogyan számold ki az óradíjad alsó határát a saját költségeidből
- Miért nem a versenytárs ára a kiindulópont
- Csomagár vagy óradíj: melyik mikor működik
- Hogyan mondd ki az árat, és mit csinálj a csend alatt

A táblázatba a saját számaidat írd be. Ha az eredmény meglep, az jó jel: a legtöbben az első számolásnál jönnek rá, hogy évek óta alulárazzák magukat.`,
    resources: [
      { label: "Óradíj-kalkulátor", kind: "xlsx", size: "64 KB" },
      { label: "Csomagár-tervező", kind: "xlsx", size: "58 KB" },
    ],
    comments: [
      {
        id: "workshop-arazas-c1",
        memberId: "m03",
        text: "Beírtam a számaimat a kalkulátorba. Az jött ki, hogy a mostani óradíjam a költségeimet fedezi, engem nem.",
        daysAgo: 4,
      },
    ],
  },
  "belso-kor-2026-augusztus": {
    text: `A Belső kör első kiscsoportos alkalma. Tizennégyen voltunk, és három tag hozott be egy-egy valódi helyzetet, amin a csoport együtt dolgozott.

Az alkalmak menete mindig ugyanaz: a helyzet gazdája öt percben elmondja, miben kell döntenie, a csoport tíz percig csak kérdez, és csak ezután jöhetnek a javaslatok. A kérdezős szakasz a lényeg — a legtöbb döntés ott dől el, amikor valaki rákérdez arra, amit a gazdája addig került.

A felvétel csak a Belső kör tagjainak érhető el, és a résztvevők kérésére a behozott helyzetek részletei a leírásban nem szerepelnek.`,
    resources: [{ label: "A kiscsoportos alkalom menete", kind: "pdf", size: "88 KB" }],
    comments: [
      {
        id: "belso-kor-2026-augusztus-c1",
        memberId: "m05",
        text: "Én voltam az egyik, aki helyzetet hozott. A tíz perc kérdés után már tudtam a választ, mire a javaslatokhoz értünk.",
        daysAgo: 20,
      },
    ],
  },
  "belso-kor-2026-szeptember": {
    text: `A második kiscsoportos alkalom felvétele. A téma magától alakult: mindhárom behozott helyzet arról szólt, hogyan lehet elengedni valamit, ami eddig működött, de a következő szintre már nem visz el.

Az alkalom végén közösen összeírtuk, ki mit vállal a következő hónapra. Ezekre októberben visszatérünk — a Belső kör attól működik, hogy számon tartjuk egymást.

Ha ott voltál, a vállalásodat megtalálod a jegyzőkönyvben. Ha nem tudtál jönni, nézd végig a felvételt, és írd meg nekem közvetlen üzenetben, te mit vállalsz.`,
    resources: [
      { label: "Jegyzőkönyv és vállalások", kind: "pdf", size: "132 KB" },
      { label: "Elengedési lista — munkalap", kind: "pdf", size: "74 KB" },
    ],
    comments: [
      {
        id: "belso-kor-2026-szeptember-c1",
        memberId: "m08",
        text: "A vállalásom: október végéig átadom a beiratkozások kezelését. Leírtam, hogy ne tudjak kihátrálni belőle.",
        daysAgo: 3,
      },
      {
        id: "belso-kor-2026-szeptember-c2",
        memberId: "m01",
        text: "Számon tartom, Judit. Októberben ezzel kezdünk.",
        daysAgo: 3,
      },
    ],
  },
};
