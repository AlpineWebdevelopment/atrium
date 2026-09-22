import type { AssistantPair } from "./types";

/* Curated answers for the "Kérdezz Pétertől" demo. The production assistant
   answers from the transcripts of Péter's lessons; here a small matcher
   (lib/assistant.ts) picks the closest pair. Every answer cites its lesson —
   that rule carries over to production unchanged. */

const A = "vallalkozoi-alapok";
const O = "onismeret-a-vezetesben";
const E = "ertekesites-cegvezetoknek";
const N = "networking-ami-uzletet-hoz";
const D = "donteshozatal-nyomas-alatt";

export const ASSISTANT_PAIRS: AssistantPair[] = [
  {
    id: "q01",
    question: "Hogyan határozzam meg az áraimat",
    keywords: ["ár", "árazás", "áraz", "óradíj", "mennyit kérjek", "díj", "drága", "olcsó"],
    answer:
      "Ne a versenytárs árából indulj ki, hanem a saját számaidból. Add össze a havi költségeidet és azt az összeget, amiből meg akarsz élni, majd oszd el a ténylegesen kiszámlázható óráiddal. Ez az alsó határ, ami alatt nem vállalsz munkát. Az, hogy mennyit érsz, és az, hogy mennyit mersz kérni, két külön kérdés — a lecke második fele az utóbbiról szól.",
    lesson: { courseSlug: A, lessonSlug: "arazas-onbecsules-nelkul" },
  },
  {
    id: "q02",
    question: "Hogyan emeljek árat a meglévő ügyfeleimnél",
    keywords: ["áremelés", "emelés", "emeljek", "emelni", "régi ügyfél", "meglévő ügyfél"],
    answer:
      "Előre, írásban, és magyarázkodás nélkül. Mondd meg, mikortól érvényes az új ár, és köszönd meg az eddigi közös munkát. Aki azért van veled, mert jól dolgozol, maradni fog. Aki csak az ár miatt volt ott, annak a helyére olyan ügyfél fér be, aki megfizet. A szeptemberi élő Q&A-ban erre egy levélsablont is adtam.",
    lesson: { courseSlug: A, lessonSlug: "arazas-onbecsules-nelkul" },
  },
  {
    id: "q03",
    question: "Hogyan kezeljem a cash flow-t",
    keywords: ["cash flow", "cashflow", "pénzforgalom", "likviditás", "kintlévőség", "előleg", "nem fizet", "késve fizet"],
    answer:
      "A nyereséges cég is csődbe mehet, ha rossz ütemben jön a pénz. Három dolgot nézz hetente: mi van a számlán, mi jön be a következő négy hétben, és mi megy ki. Ha anyagot előlegezel meg, kérj előleget. Ez nem bizalmatlanság, hanem rend.",
    lesson: { courseSlug: A, lessonSlug: "cash-flow-egyszeruen" },
  },
  {
    id: "q04",
    question: "Mennyi tartalékot képezzek",
    keywords: ["tartalék", "megtakarítás", "vésztartalék", "félretenni", "biztonsági"],
    answer:
      "Az első cél három hónapnyi működési költség, külön számlán. Ne egyszerre akard összerakni: minden beérkező számla egy fix százaléka menjen oda automatikusan. Szezonális cégnél a leggyengébb három hónapod költségével számolj, ne az átlaggal.",
    lesson: { courseSlug: A, lessonSlug: "az-elso-tartalek" },
  },
  {
    id: "q05",
    question: "Mikor mondjak nemet egy ügyfélre vagy megrendelésre",
    keywords: ["nemet mondani", "nemet", "visszautasít", "rossz ügyfél", "nehéz ügyfél", "elutasít", "nem vállalom"],
    answer:
      "Három jel: az alsó határod alatt akar fizetni, már az elején nem tiszteli az idődet, vagy olyan munkát kér, amiben nem vagy jó. Az egyik is elég. A nem helyet csinál az igennek — amíg a rossz munkával vagy tele, a jót nem tudod elvállalni.",
    lesson: { courseSlug: A, lessonSlug: "mikor-mondj-nemet" },
  },
  {
    id: "q06",
    question: "Honnan szerezzek új ügyfeleket",
    keywords: ["új ügyfél", "ügyfélszerzés", "ügyfelet szerezni", "honnan ügyfél", "első ügyfél", "vevő", "megrendelő"],
    answer:
      "Az első tíz ügyfél szinte mindig ismeretségből jön, nem hirdetésből. Írj fel tíz embert, aki ismer téged, és ismerhet olyat, akinek szüksége van rád. Hívd fel őket, és mondd el, min dolgozol. Nem eladsz: tájékoztatsz. A hirdetés akkor jön, amikor már tudod, kinek és mit mondasz.",
    lesson: { courseSlug: A, lessonSlug: "az-elso-tiz-ugyfel" },
  },
  {
    id: "q07",
    question: "Ki az ideális ügyfelem",
    keywords: ["ideális ügyfél", "célcsoport", "célpiac", "kinek dolgozzak", "kinek adjak el", "niche"],
    answer:
      "Gondolj arra az ügyfeledre, akivel a legszívesebben dolgoztál, és aki rendesen fizetett is. Írd le egy bekezdésben: ki ő, mi a gondja, miért volt jó a közös munka. Ez a leírás többet ér bármilyen célcsoport-táblázatnál, mert valódi emberről szól.",
    lesson: { courseSlug: A, lessonSlug: "az-idealis-ugyfel" },
  },
  {
    id: "q08",
    question: "Mikor vegyek fel alkalmazottat",
    keywords: ["alkalmazott", "munkatárs", "felvenni", "felvétel", "első ember", "kolléga", "alvállalkozó"],
    answer:
      "Akkor, amikor pontosan tudod, mit adsz át neki, és a számaid elbírják hat hónapig akkor is, ha nem hoz azonnal bevételt. Előtte három napig írd fel, mire megy el az időd, és húzd alá, amit más is meg tudna csinálni. Ha ez a lista rövid, még nem ember kell, hanem rend.",
    lesson: { courseSlug: A, lessonSlug: "mikor-vegyel-fel-embert" },
  },
  {
    id: "q09",
    question: "Hogyan tervezzem meg a hetemet",
    keywords: ["hét", "heti terv", "időbeosztás", "időgazdálkodás", "nincs időm", "naptár", "prioritás", "szétesik"],
    answer:
      "Péntek délután húsz perc: írd be a naptáradba a jövő hét három legfontosabb dolgát, időponttal. A többi köréjük szerveződik. Ha a naptáradban csak mások kérései vannak, akkor mások cégét építed, nem a sajátodat.",
    lesson: { courseSlug: A, lessonSlug: "a-heted-felepitese" },
  },
  {
    id: "q10",
    question: "Nem szeretek eladni, mit tegyek",
    keywords: ["eladni", "eladás", "értékesítés", "értékesíteni", "rámenős", "tukmál", "nem szeretek"],
    answer:
      "Azért nem szeretsz eladni, mert rábeszélésnek gondolod. Az értékesítés kérdezés: megérteni, mire van szüksége a másiknak, és őszintén megmondani, tudsz-e segíteni. Ha igen, szívességet teszel azzal, hogy elmondod. Ha nem, azzal, hogy megmondod. Egyik sem szégyen.",
    lesson: { courseSlug: E, lessonSlug: "eladni-nem-szegyen" },
  },
  {
    id: "q11",
    question: "Hogyan mondjam ki az áramat egy tárgyaláson",
    keywords: ["ár kimondása", "kimondani", "tárgyalás", "tárgyalni", "alku", "kedvezmény", "alkudik", "csend"],
    answer:
      "Mondd ki a számot, és maradj csendben. Ne indokold, ne enyhítsd, ne ajánlj fel azonnal kedvezményt. A csend nem a te gondod: a másik gondolkodik. Aki a saját árát magyarázza, az maga sem hisz benne. Gyakorold hangosan, tükör előtt — furcsa, de működik.",
    lesson: { courseSlug: E, lessonSlug: "az-ar-kimondasa" },
  },
  {
    id: "q12",
    question: "Hogyan építsek kapcsolatokat, amiből üzlet lesz",
    keywords: ["networking", "kapcsolatépítés", "kapcsolat", "ajánlás", "ismeretség", "üzleti reggeli", "esemény", "bemutatkozás"],
    answer:
      "Adj, mielőtt kérsz. Aki egy eseményen azonnal eladni akar, azt mindenki kerüli. Kérdezz, figyelj, és ha tudsz, köss össze két embert, akik jól járnak egymással. A háló, amit így építesz, évek múlva is hoz üzletet — a névjegygyűjtemény soha.",
    lesson: { courseSlug: N, lessonSlug: "adj-mielott-kersz" },
  },
  {
    id: "q13",
    question: "Miért követem el újra és újra ugyanazt a hibát a cégemben",
    keywords: ["minta", "ugyanaz a hiba", "újra és újra", "ismétlődik", "önismeret", "berögződés", "mindig ugyanaz"],
    answer:
      "Amit a cégedben újra és újra elrontasz, annak ritkán üzleti oka van. Többnyire egy minta, amit magaddal hoztál: ahogy a pénzről, a konfliktusról vagy a segítségkérésről otthon tanultál. Az első lépés nem a változtatás, hanem az észrevétel — írd le a három legutóbbi esetet, és keresd meg, mi bennük a közös.",
    lesson: { courseSlug: O, lessonSlug: "mintak-amiket-hozol" },
  },
  {
    id: "q14",
    question: "Hogyan húzzam meg a határaimat az ügyfelekkel",
    keywords: ["határ", "határok", "hétvégén", "este ír", "mindig elérhető", "kihasznál", "nem tisztel"],
    answer:
      "A határt nem az ügyfél lépi át, hanem te engeded át rajta. Írd le, mikor és hogyan vagy elérhető, és közöld előre, mindenkivel egyformán. Aki emiatt elmegy, az nem az ügyfeled volt, hanem a főnököd.",
    lesson: { courseSlug: O, lessonSlug: "hatarok" },
  },
  {
    id: "q15",
    question: "Halogatok egy nagy döntést, mit tegyek",
    keywords: ["döntés", "dönteni", "halogat", "nem tudok dönteni", "bizonytalan", "nyomás", "stressz", "tét"],
    answer:
      "A halogatott döntés is döntés, csak nem te hozod meg, hanem az idő. Írd le, mibe kerül neked hetente, hogy nem döntesz: pénzben, alvásban, figyelemben. Ha ez a szám nagyobb, mint a rossz döntés kockázata, akkor már tudod, mi a teendő.",
    lesson: { courseSlug: D, lessonSlug: "a-halogatott-dontes-ara" },
  },
  {
    id: "q16",
    question: "Jól csinálom-e, ha minden a cégemről szól",
    keywords: ["a cég én vagyok", "nélkülem", "minden rajtam", "nem tudok kiszállni", "szabadság", "pihenés", "kiégés", "fáradt"],
    answer:
      "A cég nem te vagy. Ha nélküled két hétig sem működik, akkor nem vállalkozásod van, hanem egy állásod, amiből nem lehet szabadságra menni. Ez nem szégyen, a legtöbben innen indulnak — de érdemes kimondani, mert innen lehet elkezdeni átadni.",
    lesson: { courseSlug: A, lessonSlug: "a-ceg-nem-te-vagy" },
  },
];

export const ASSISTANT_SUGGESTIONS = [
  "Hogyan emeljek árat a régi ügyfeleimnél",
  "Honnan szerezzek új ügyfeleket",
  "Mikor vegyek fel alkalmazottat",
  "Halogatok egy nagy döntést",
];

/** Where the fallback answer points: "erre a kurzus 3. moduljában térek ki". */
export const ASSISTANT_FALLBACK = {
  courseSlug: A,
  lessonSlug: "az-idealis-ugyfel",
  moduleNumber: 3,
};
