import type { Course, CourseModule, Instructor, Lesson, LessonContent, TierId, Track } from "./types";
import { ASSETS } from "./config";
import { CONTENT as ALAPOK } from "./lessons/vallalkozoi-alapok";
import { CONTENT as ONISMERET } from "./lessons/onismeret-a-vezetesben";
import { CONTENT as ERTEKESITES } from "./lessons/ertekesites-cegvezetoknek";
import { CONTENT as NETWORKING } from "./lessons/networking-ami-uzletet-hoz";
import { CONTENT as DELEGALAS } from "./lessons/delegalas-es-csapatepites";
import { CONTENT as DONTES } from "./lessons/donteshozatal-nyomas-alatt";
import { CONTENT as TAR } from "./lessons/elo-adasok-tara";

/* The curriculum outline lives here: slugs, titles, durations and release
   weeks. Tasks, events, the assistant and the persona seeds all point at these
   slugs, so the outline is the stable part; the written lesson bodies sit next
   door in ./lessons/<course>.ts, keyed by lesson slug.

   Release weeks are global academy weeks (1–52). The two foundation courses
   open densely in the first quarter — that is what gets filmed first — and the
   rest of the year fills in behind them. */

export const INSTRUCTORS: Instructor[] = [
  {
    id: "peter",
    name: "Fehér Péter",
    title: "Vállalkozói és önismereti mentor",
    bio: "25 éve vállalkozik, és ugyanennyi ideje foglalkozik önismerettel. Több mint 1500 vállalkozót oktatott értékesítésre, networkingre és kommunikációra. Pécsen él, személyesen és csoportban is mentorál.",
    isGuest: false,
    avatar: `${ASSETS}/peter-avatar.webp`,
  },
  {
    id: "vendeg",
    name: "Vendégoktató — hamarosan",
    title: "Meghívott vállalkozó Péter hálózatából",
    bio: "Ezt a kurzust egy olyan vállalkozó tartja majd Péter köréből, aki a témát a saját cégében élte végig. A nevét az indulás előtt jelentjük be.",
    isGuest: true,
  },
];

type L = [slug: string, title: string, durationMin: number, releaseWeek: number, tier?: TierId];
type M = [title: string, lessons: L[]];

interface Outline {
  slug: string;
  title: string;
  track: Track;
  tier: TierId;
  instructorId: string;
  description: string;
  outcomes: string[];
  cover: Course["cover"];
  content: Record<string, LessonContent>;
  modules: M[];
}

const EMPTY: LessonContent = {
  text: "A lecke jegyzete a videó alatt jelenik meg, amint a felvétel elkészült.",
  resources: [],
  comments: [],
};

const OUTLINES: Outline[] = [
  {
    slug: "vallalkozoi-alapok",
    title: "Vállalkozói alapok — a cégvezetés első éve",
    track: "vallalkozoi",
    tier: "alap",
    instructorId: "peter",
    description:
      "Az első év dönti el, hogy vállalkozásod lesz, vagy egy rosszul fizetett állásod, amit magadnak teremtettél. Ebben a kurzusban végigmegyünk azon, amit az elején érdemes jól megalapozni: miért csinálod, mennyit kérsz érte, kinek dolgozol, és milyen ritmusban.",
    outcomes: [
      "Tisztán látod, miért vállalkozol, és mit vársz a cégedtől",
      "Olyan árat mondasz, amit számokkal is meg tudsz indokolni",
      "Tudod, honnan jön az első tíz ügyfeled",
      "Van heti és negyedéves ritmusod, amihez tartod magad",
    ],
    cover: { from: "hsl(220 40% 15%)", to: "hsl(220 30% 9%)", motif: "Alapok" },
    content: ALAPOK,
    modules: [
      [
        "Honnan indulsz",
        [
          ["miert-vallalkozol", "Miért vállalkozol valójában", 12, 1],
          ["a-ceg-nem-te-vagy", "A cég nem te vagy", 14, 1],
          ["az-elso-ev-terkepe", "Az első év térképe", 16, 2],
          ["szamok-amiket-ismerned-kell", "Öt szám, amit fejből kell tudnod", 18, 2],
        ],
      ],
      [
        "Pénz és ár",
        [
          ["arazas-onbecsules-nelkul", "Árazás: mennyit érsz, és mennyit kérsz", 17, 3],
          ["cash-flow-egyszeruen", "Cash flow, egyszerűen", 15, 3],
          ["az-elso-tartalek", "Az első három hónapnyi tartalék", 11, 4],
          ["mikor-mondj-nemet", "Mikor mondj nemet egy megrendelésre", 13, 5],
        ],
      ],
      [
        "Ügyfelek",
        [
          ["az-idealis-ugyfel", "Kinek dolgozol szívesen — az ideális ügyfél", 14, 6],
          ["az-elso-tiz-ugyfel", "Az első tíz ügyfél honnan jön", 16, 7],
          ["ajanlat-amit-elolvasnak", "Ajánlat, amit végigolvasnak", 12, 8],
          ["panaszbol-ajanlas", "Panaszból ajánlás", 10, 9],
        ],
      ],
      [
        "Ritmus",
        [
          ["a-heted-felepitese", "A heted felépítése", 13, 10],
          ["negyedeves-terv", "Negyedéves terv egy oldalon", 15, 11],
          ["mikor-vegyel-fel-embert", "Mikor vegyél fel embert", 14, 12],
          ["az-elso-ev-merlege", "Az első év mérlege", 12, 13],
        ],
      ],
    ],
  },
  {
    slug: "onismeret-a-vezetesben",
    title: "Önismeret a vezetésben",
    track: "onismereti",
    tier: "alap",
    instructorId: "peter",
    description:
      "A külső siker belülről indul. Amit a cégedben újra és újra elrontasz, annak ritkán üzleti oka van: többnyire egy minta, amit magaddal hoztál. Ez a kurzus abban segít, hogy észrevedd ezeket, és tudatosabban dönts — az üzletben és otthon is.",
    outcomes: [
      "Felismered a saját visszatérő mintáidat a döntéseidben",
      "Meg tudod húzni a határaidat ügyféllel, kollégával, családdal",
      "Visszajelzést kapsz és adsz úgy, hogy a kapcsolat megmarad",
      "Észreveszed a kiégés korai jeleit, mielőtt a cég látná kárát",
    ],
    cover: { from: "hsl(30 30% 20%)", to: "hsl(30 25% 9%)", motif: "Önismeret" },
    content: ONISMERET,
    modules: [
      [
        "A saját mintáid",
        [
          ["a-kulso-siker-belul-indul", "A külső siker belülről indul", 13, 3],
          ["mintak-amiket-hozol", "Minták, amiket otthonról hozol", 16, 4],
          ["a-belso-kritikus", "A belső kritikus hangja", 12, 5],
          ["ertekek-es-dontesek", "Az értékeid és a döntéseid", 14, 6],
        ],
      ],
      [
        "Te és a többiek",
        [
          ["hatarok", "Határok, amiket nem húztál meg", 15, 9],
          ["konfliktus-kerules", "Miért kerülöd a konfliktust", 13, 12],
          ["visszajelzest-kapni", "Visszajelzést kapni, sértődés nélkül", 11, 15],
          ["bizalom", "Bizalom: mikor adod, mikor vonod vissza", 14, 18],
        ],
      ],
      [
        "Egyensúly",
        [
          ["a-kieges-korai-jelei", "A kiégés korai jelei", 12, 21],
          ["pihenes-bunttudat-nelkul", "Pihenés bűntudat nélkül", 10, 24],
          ["csalad-es-ceg", "Család és cég egy asztalnál", 15, 27],
          ["sajat-iranytu", "A saját iránytűd", 13, 30],
        ],
      ],
    ],
  },
  {
    slug: "ertekesites-cegvezetoknek",
    title: "Értékesítés cégvezetőknek",
    track: "vallalkozoi",
    tier: "halado",
    instructorId: "peter",
    description:
      "A legtöbb cégvezető azért nem szeret eladni, mert rábeszélésnek gondolja. Pedig az értékesítés kérdezés: megérteni, mire van szüksége a másiknak, és őszintén megmondani, tudsz-e segíteni. Innen jutunk el a tárgyalásig, az ár kimondásáig, és addig, hogy már ne csak te adj el a cégben.",
    outcomes: [
      "Úgy vezetsz le egy értékesítési beszélgetést, hogy a másik beszél többet",
      "Ki tudod mondani az áradat magyarázkodás nélkül",
      "Van egyszerű, követhető értékesítési folyamatod",
      "Tudod, mikor és hogyan vedd fel az első értékesítődet",
    ],
    cover: { from: "hsl(40 45% 22%)", to: "hsl(35 35% 9%)", motif: "Értékesítés" },
    content: ERTEKESITES,
    modules: [
      [
        "Az értékesítés nem rábeszélés",
        [
          ["eladni-nem-szegyen", "Eladni nem szégyen", 12, 2],
          ["kerdezz-mielott-ajanlasz", "Kérdezz, mielőtt ajánlasz", 15, 3],
          ["az-igeny-mogotti-igeny", "Az igény mögötti igény", 14, 4],
        ],
      ],
      [
        "A tárgyalás",
        [
          ["felkeszules-targyalasra", "Felkészülés egy fontos tárgyalásra", 18, 5],
          ["az-ar-kimondasa", "Az ár kimondása", 11, 6],
          ["kifogasok", "Kifogások: mit hallasz, és mit jelent", 16, 8],
        ],
      ],
      [
        "Folyamat",
        [
          ["ertekesitesi-tolcser", "A saját értékesítési tölcséred", 17, 11],
          ["utankovetes", "Utánkövetés, tolakodás nélkül", 12, 14],
          ["a-nem-utan", "Mi történik a nem után", 10, 17],
        ],
      ],
      [
        "Amikor már nem te adsz el",
        [
          ["az-elso-ertekesito", "Az első értékesítő felvétele", 16, 20],
          ["jutalek-es-motivacio", "Jutalék és motiváció", 13, 23],
          ["a-szamok-kovetese", "Az értékesítés számai", 14, 26],
        ],
      ],
    ],
  },
  {
    slug: "networking-ami-uzletet-hoz",
    title: "Networking, ami üzletet hoz",
    track: "vallalkozoi",
    tier: "halado",
    instructorId: "peter",
    description:
      "A networking nem névjegygyűjtés. Kapcsolatépítés, amiből idővel üzlet lesz — ha előbb adsz, mint kérsz, és ha rendszerben csinálod, nem csak akkor, amikor épp kevés a munka. Ebben a kurzusban azt a módszert adom át, amivel a saját hálómat építettem.",
    outcomes: [
      "Egy perc alatt úgy mutatkozol be, hogy emlékeznek rád",
      "Tudsz ajánlást kérni és adni, kínos pillanatok nélkül",
      "Rendszerben ápolod a kapcsolataidat, nem kampányszerűen",
      "Látod, melyik kapcsolatodból lesz valóban üzlet",
    ],
    cover: { from: "hsl(200 30% 18%)", to: "hsl(215 30% 8%)", motif: "Networking" },
    content: NETWORKING,
    modules: [
      [
        "A kapcsolat előbb, az üzlet utána",
        [
          ["adj-mielott-kersz", "Adj, mielőtt kérsz", 11, 5],
          ["bemutatkozas-60-masodpercben", "Bemutatkozás 60 másodpercben", 14, 6],
          ["kit-keresel", "Kit keresel valójában", 12, 7],
          ["az-elso-beszelgetes", "Az első beszélgetés egy eseményen", 13, 10],
        ],
      ],
      [
        "Ajánlások",
        [
          ["hogyan-kerj-ajanlast", "Hogyan kérj ajánlást", 15, 13],
          ["hogyan-adj-ajanlast", "Hogyan adj jó ajánlást", 12, 16],
          ["egy-az-egyben-talalkozok", "Egy az egyben találkozók", 14, 19],
          ["a-kapcsolat-apolasa", "A kapcsolat ápolása, rendszerben", 16, 22],
        ],
      ],
      [
        "Hálózatból üzlet",
        [
          ["strategiai-partnerek", "Stratégiai partnerek", 17, 25],
          ["sajat-kor-epitese", "A saját köröd építése", 13, 28],
          ["online-jelenlet", "Online jelenlét, ami kapcsolatot hoz", 12, 31],
          ["a-halod-merese", "A hálód mérése", 10, 34],
        ],
      ],
    ],
  },
  {
    slug: "delegalas-es-csapatepites",
    title: "Delegálás és csapatépítés",
    track: "vallalkozoi",
    tier: "halado",
    instructorId: "vendeg",
    description:
      "Egy ponton túl a céged akkora lesz, amekkora terhet egyedül elbírsz — hacsak nem tanulsz meg átadni. Ez a kurzus az elengedésről, az első kulcsemberről és a társakkal való közös munkáról szól. Vendégoktató tartja, aki mindezt a saját cégében csinálta végig.",
    outcomes: [
      "Tudod, mit adj át először, és hogyan",
      "Értékek mentén veszel fel embert, nem csak önéletrajz alapján",
      "Van heti csapatritmusod, ami nélküled is működik",
      "Tisztázott szerepekkel dolgozol a társaiddal",
    ],
    cover: { from: "hsl(150 18% 16%)", to: "hsl(180 20% 7%)", motif: "Csapat" },
    content: DELEGALAS,
    modules: [
      [
        "Elengedni",
        [
          ["miert-nem-adod-at", "Miért nem adod át", 13, 29],
          ["mit-delegalj-eloszor", "Mit delegálj először", 12, 32],
          ["a-feladat-atadasa", "A feladat átadása lépésről lépésre", 16, 35],
        ],
      ],
      [
        "Csapat",
        [
          ["az-elso-kulcsember", "Az első kulcsember", 15, 38],
          ["felvetel-ertekek-menten", "Felvétel értékek mentén", 14, 40],
          ["heti-csapatmegbeszeles", "A heti csapatmegbeszélés", 11, 42],
        ],
      ],
      [
        "Társak",
        [
          ["tarsakkal-vallalkozni", "Társakkal vállalkozni", 17, 44],
          ["szerepek-es-felelosseg", "Szerepek és felelősség", 13, 46],
          ["amikor-el-kell-valni", "Amikor el kell válni valakitől", 14, 48],
        ],
      ],
    ],
  },
  {
    slug: "donteshozatal-nyomas-alatt",
    title: "Döntéshozatal nyomás alatt",
    track: "onismereti",
    tier: "belso",
    instructorId: "peter",
    description:
      "A nagy döntések ritkán nyugodt körülmények között születnek. Ez a kurzus arról szól, mi történik benned, amikor szorít az idő és nagy a tét, és milyen eszközökkel tudsz ilyenkor is tisztán gondolkodni. A Belső kör kiscsoportos alkalmain a saját döntéseiden dolgozunk tovább.",
    outcomes: [
      "Felismered, hogyan reagálsz nyomás alatt, és mit torzít ez a döntéseiden",
      "Van döntési naplód, amiből tanulni tudsz",
      "Tudod, kit és mikor érdemes bevonni külső szemként",
      "Nagy tétű helyzetben is végig tudod gondolni a forgatókönyveket",
    ],
    cover: { from: "hsl(40 60% 28%)", to: "hsl(30 40% 8%)", motif: "Döntés" },
    content: DONTES,
    modules: [
      [
        "A nyomás természete",
        [
          ["mi-tortenik-benned", "Mi történik benned nyomás alatt", 14, 4],
          ["gyors-es-lassu-dontesek", "Gyors és lassú döntések", 13, 5],
          ["a-halogatott-dontes-ara", "A halogatott döntés ára", 11, 6],
        ],
      ],
      [
        "Eszközök",
        [
          ["dontesi-naplo", "A döntési napló", 12, 12],
          ["kulso-szem", "Külső szem: kit kérdezz", 15, 20],
          ["a-legrosszabb-forgatokonyv", "A legrosszabb forgatókönyv végiggondolása", 16, 28],
        ],
      ],
      [
        "Nagy tétek",
        [
          ["strategiai-fordulopont", "Stratégiai fordulópont", 18, 36],
          ["kilepes-vagy-kitartas", "Kilépés vagy kitartás", 17, 44],
          ["a-dontes-utan", "A döntés után", 12, 50],
        ],
      ],
    ],
  },
  {
    slug: "elo-adasok-tara",
    title: "Élő adások tára",
    track: "elo",
    tier: "halado",
    instructorId: "peter",
    description:
      "Minden élő alkalom felvétele ide kerül: a havi Q&A-k, a workshopok, és — a Belső kör tagjainak — a kiscsoportos alkalmak. Ha lemaradtál, itt bepótolod; ha ott voltál, itt visszakeresed.",
    outcomes: [
      "Visszanézheted az összes élő Q&A-t és workshopot",
      "A felvételek témák szerint kereshetők",
      "A Belső kör alkalmai csak a Belső kör tagjainak látszanak",
    ],
    cover: { from: "hsl(220 15% 18%)", to: "hsl(220 20% 7%)", motif: "Élő" },
    content: TAR,
    modules: [
      ["Élő Q&A", [["qa-2026-szeptember", "Élő Q&A — 2026. szeptember", 62, 3]]],
      [
        "Nyitó estek és workshopok",
        [
          ["nyito-elo-adas", "Nyitó élő adás: hogyan hozd ki a legtöbbet az akadémiából", 48, 1],
          ["workshop-az-elso-90-nap", "Workshop: az első 90 nap terve", 75, 4],
          ["workshop-arazas", "Workshop: árazás a gyakorlatban", 80, 4],
        ],
      ],
      [
        "Belső kör alkalmak",
        [
          ["belso-kor-2026-augusztus", "Belső kör kiscsoport — 2026. augusztus", 90, 2, "belso"],
          ["belso-kor-2026-szeptember", "Belső kör kiscsoport — 2026. szeptember", 90, 5, "belso"],
        ],
      ],
    ],
  },
];

function build(o: Outline): Course {
  const modules: CourseModule[] = o.modules.map(([title, lessons], mi) => ({
    id: `${o.slug}-m${mi + 1}`,
    title,
    lessons: lessons.map(([slug, lessonTitle, durationMin, releaseWeek, tier]): Lesson => {
      const c = o.content[slug] ?? EMPTY;
      return { slug, title: lessonTitle, durationMin, releaseWeek, tier, ...c };
    }),
  }));
  return {
    slug: o.slug,
    title: o.title,
    track: o.track,
    tier: o.tier,
    instructorId: o.instructorId,
    description: o.description,
    outcomes: o.outcomes,
    cover: o.cover,
    modules,
  };
}

export const COURSES: Course[] = OUTLINES.map(build);

export const TRACK_LABEL: Record<Track, string> = {
  vallalkozoi: "Vállalkozói",
  onismereti: "Önismereti",
  elo: "Élő adások",
};
