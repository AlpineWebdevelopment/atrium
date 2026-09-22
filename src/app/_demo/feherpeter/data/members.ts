import type { Member, PersonaSeed, Role, TierId } from "./types";

/* Sample members. Names are common Hungarian names and the businesses are
   trades, never named companies — plausible, but nobody real.

   The list is the single source for every member count in the demo: the
   directory, the leaderboard and the admin overview all derive from it. The 14
   Belső kör rows are exactly CONFIG.innerCircleTaken, so "6 szabad hely" holds
   everywhere. The top of the pyramid is heavy on purpose: the first cohort was
   seeded from Péter's existing one-to-one clients (see Ötletek #4). */

type Row = [
  id: string,
  name: string,
  business: string,
  city: string,
  tier: TierId,
  points: number,
  streak: number,
  joined: string,
  lastActiveDaysAgo: number,
  referrals: number,
  lessonsCompleted: number,
];

const ROWS: Row[] = [
  // Personas — the members each role is signed in as.
  ["m02", "Varga Dóra", "Könyvelőiroda", "Pécs", "alap", 106, 2, "2026-08-24", 0, 0, 6],
  ["m03", "Szabó Gergely", "Webfejlesztő stúdió", "Kaposvár", "halado", 200, 4, "2026-08-17", 0, 1, 11],
  ["m04", "Horváth Katalin", "Rendezvényszervezés", "Pécs", "belso", 640, 5, "2026-08-17", 0, 3, 27],

  // Belső kör (13 more → 14 seats taken)
  ["m05", "Németh Balázs", "Gépészeti kivitelezés", "Pécs", "belso", 712, 5, "2026-08-17", 0, 2, 28],
  ["m06", "Tóth Eszter", "Fogászati rendelő", "Szekszárd", "belso", 588, 5, "2026-08-17", 1, 1, 25],
  ["m07", "Kiss Ádám", "Logisztika", "Székesfehérvár", "belso", 531, 4, "2026-08-17", 0, 0, 24],
  ["m08", "Molnár Judit", "Nyelviskola", "Pécs", "belso", 497, 5, "2026-08-17", 2, 2, 22],
  ["m09", "Farkas Zoltán", "Borászat", "Villány", "belso", 455, 3, "2026-08-17", 1, 0, 21],
  ["m10", "Balogh Réka", "Belsőépítészet", "Budapest", "belso", 418, 4, "2026-08-17", 0, 1, 20],
  ["m11", "Papp Norbert", "Autószerviz", "Mohács", "belso", 372, 2, "2026-08-17", 3, 0, 18],
  ["m12", "Lakatos Ildikó", "Gyógytorna stúdió", "Pécs", "belso", 344, 5, "2026-08-24", 0, 1, 17],
  ["m13", "Juhász Máté", "Napelemes rendszerek", "Szeged", "belso", 301, 3, "2026-08-24", 1, 0, 15],
  ["m14", "Simon Anita", "HR tanácsadás", "Győr", "belso", 266, 2, "2026-08-24", 4, 0, 14],
  ["m15", "Fekete Tamás", "Ingatlaniroda", "Pécs", "belso", 228, 1, "2026-08-31", 2, 1, 12],
  ["m16", "Oláh Viktória", "Cukrászda", "Komló", "belso", 193, 3, "2026-08-31", 1, 0, 10],
  ["m17", "Gál Richárd", "Biztosítási alkusz", "Dombóvár", "belso", 142, 0, "2026-09-07", 6, 0, 7],

  // Haladó (9 more → 10)
  ["m18", "Takács Bence", "Marketingügynökség", "Budapest", "halado", 486, 5, "2026-08-17", 0, 2, 19],
  ["m19", "Vincze Orsolya", "Esküvőszervezés", "Pécs", "halado", 402, 5, "2026-08-17", 0, 1, 17],
  ["m20", "Bíró Levente", "Asztalosműhely", "Szigetvár", "halado", 339, 4, "2026-08-17", 1, 0, 15],
  ["m21", "Hegedűs Nóra", "Online tréning", "Debrecen", "halado", 287, 3, "2026-08-24", 0, 1, 13],
  ["m22", "Pintér Dániel", "IT üzemeltetés", "Pécs", "halado", 251, 4, "2026-08-24", 2, 0, 12],
  ["m23", "Szűcs Boglárka", "Fotóstúdió", "Siklós", "halado", 214, 2, "2026-08-24", 1, 0, 11],
  ["m24", "Antal Krisztián", "Kertépítés", "Harkány", "halado", 168, 1, "2026-08-31", 3, 0, 9],
  ["m25", "Major Lilla", "Fordítóiroda", "Veszprém", "halado", 131, 2, "2026-08-31", 2, 0, 7],
  ["m26", "Sipos Attila", "Villanyszerelés", "Bonyhád", "halado", 84, 0, "2026-09-07", 8, 0, 4],

  // Alap (19 more → 20)
  ["m27", "Bognár Zsófia", "Grafikai tervezés", "Pécs", "alap", 318, 5, "2026-08-17", 0, 2, 13],
  ["m28", "Rácz Márton", "Kávézó", "Pécs", "alap", 274, 5, "2026-08-17", 0, 0, 12],
  ["m29", "Kocsis Emese", "Dietetikus", "Kaposvár", "alap", 241, 4, "2026-08-17", 1, 1, 12],
  ["m30", "Fodor Gábor", "Festő-mázoló", "Pécsvárad", "alap", 207, 3, "2026-08-17", 1, 0, 11],
  ["m31", "Szalai Petra", "Webáruház", "Budapest", "alap", 189, 4, "2026-08-17", 0, 0, 10],
  ["m32", "Vörös Dávid", "Személyi edző", "Pécs", "alap", 176, 3, "2026-08-24", 2, 1, 10],
  ["m33", "Kelemen Ágnes", "Virágüzlet", "Szentlőrinc", "alap", 158, 2, "2026-08-24", 0, 0, 9],
  ["m34", "Bakos István", "Klímaszerelés", "Pécs", "alap", 143, 3, "2026-08-24", 1, 0, 8],
  ["m35", "Csonka Flóra", "Szövegírás", "Szeged", "alap", 127, 2, "2026-08-24", 3, 0, 8],
  ["m36", "Máté Roland", "Kisállat-kereskedés", "Paks", "alap", 112, 1, "2026-08-24", 2, 0, 7],
  ["m37", "Soós Henrietta", "Kozmetika", "Pécs", "alap", 96, 2, "2026-08-31", 1, 0, 6],
  ["m38", "Dudás Ákos", "Kerékpárszerviz", "Baja", "alap", 81, 1, "2026-08-31", 4, 0, 5],
  ["m39", "Pál Tímea", "Gyerekfoglalkozások", "Komló", "alap", 73, 2, "2026-08-31", 0, 0, 5],
  ["m40", "Bodnár Csaba", "Tetőfedés", "Sásd", "alap", 58, 0, "2026-08-31", 9, 0, 4],
  ["m41", "Veres Kinga", "Jógastúdió", "Pécs", "alap", 49, 1, "2026-09-07", 2, 0, 3],
  ["m42", "Barta Szabolcs", "Pékség", "Mohács", "alap", 37, 1, "2026-09-07", 3, 0, 3],
  ["m43", "Halász Nikolett", "Munkavédelem", "Dunaújváros", "alap", 26, 0, "2026-09-07", 6, 0, 2],
  ["m44", "Illés Botond", "Drónfelvételek", "Pécs", "alap", 18, 1, "2026-09-14", 1, 0, 1],
  ["m45", "Szekeres Hanna", "Lakberendezés", "Zalaegerszeg", "alap", 10, 0, "2026-09-14", 5, 0, 1],
];

export const PETER_ID = "m01";

export const MEMBERS: Member[] = [
  {
    id: PETER_ID,
    name: "Fehér Péter",
    business: "Vállalkozói és önismereti mentor",
    city: "Pécs",
    tier: "belso",
    points: 0,
    streak: 0,
    joined: "2026-08-17",
    lastActiveDaysAgo: 0,
    referrals: 0,
    lessonsCompleted: 0,
    isMentor: true,
  },
  ...ROWS.map(
    ([id, name, business, city, tier, points, streak, joined, lastActiveDaysAgo, referrals, lessonsCompleted]): Member => ({
      id,
      name,
      business,
      city,
      tier,
      points,
      streak,
      joined,
      lastActiveDaysAgo,
      referrals,
      lessonsCompleted,
    }),
  ),
];

/** Which member each role is signed in as. Vendég is nobody. */
export const ROLE_MEMBER: Record<Role, string | null> = {
  vendeg: null,
  alap: "m02",
  halado: "m03",
  belso: "m04",
  admin: PETER_ID,
};

const ALAPOK = "vallalkozoi-alapok";
const ONISMERET = "onismeret-a-vezetesben";
const ERTEKESITES = "ertekesites-cegvezetoknek";
const NETWORKING = "networking-ami-uzletet-hoz";
const DONTES = "donteshozatal-nyomas-alatt";
const TAR = "elo-adasok-tara";

const key = (course: string, lessons: string[]) => lessons.map((l) => `${course}/${l}`);

/* Seed activity behind each persona's points and streak. Dóra sits 14 points
   under level 3, so ticking this week's task in front of the client moves her
   up a rank and unlocks Siker posting — the rank mechanic shown live. */
export const PERSONA_SEEDS: PersonaSeed[] = [
  {
    memberId: "m02",
    completedLessons: key(ALAPOK, [
      "miert-vallalkozol",
      "a-ceg-nem-te-vagy",
      "az-elso-ev-terkepe",
      "szamok-amiket-ismerned-kell",
      "arazas-onbecsules-nelkul",
      "cash-flow-egyszeruen",
    ]),
    taskWeeksDone: [4, 5],
    badges: ["Első lecke", "Első hét"],
  },
  {
    memberId: "m03",
    completedLessons: [
      ...key(ALAPOK, [
        "miert-vallalkozol",
        "a-ceg-nem-te-vagy",
        "az-elso-ev-terkepe",
        "szamok-amiket-ismerned-kell",
        "arazas-onbecsules-nelkul",
        "cash-flow-egyszeruen",
        "az-elso-tartalek",
        "mikor-mondj-nemet",
      ]),
      ...key(ERTEKESITES, ["eladni-nem-szegyen", "kerdezz-mielott-ajanlasz", "az-igeny-mogotti-igeny"]),
    ],
    taskWeeksDone: [2, 3, 4, 5],
    badges: ["Első lecke", "Első hét", "Négyhetes sorozat", "Első ajánlás"],
  },
  {
    memberId: "m04",
    completedLessons: [
      ...key(ALAPOK, [
        "miert-vallalkozol",
        "a-ceg-nem-te-vagy",
        "az-elso-ev-terkepe",
        "szamok-amiket-ismerned-kell",
        "arazas-onbecsules-nelkul",
        "cash-flow-egyszeruen",
        "az-elso-tartalek",
        "mikor-mondj-nemet",
      ]),
      ...key(ONISMERET, ["a-kulso-siker-belul-indul", "mintak-amiket-hozol", "a-belso-kritikus"]),
      ...key(ERTEKESITES, [
        "eladni-nem-szegyen",
        "kerdezz-mielott-ajanlasz",
        "az-igeny-mogotti-igeny",
        "felkeszules-targyalasra",
      ]),
      ...key(NETWORKING, ["adj-mielott-kersz"]),
      ...key(DONTES, ["mi-tortenik-benned", "gyors-es-lassu-dontesek"]),
      ...key(TAR, [
        "nyito-elo-adas",
        "belso-kor-2026-augusztus",
        "qa-2026-szeptember",
        "workshop-az-elso-90-nap",
        "belso-kor-2026-szeptember",
      ]),
    ],
    taskWeeksDone: [1, 2, 3, 4, 5],
    badges: ["Első lecke", "Első hét", "Négyhetes sorozat", "Első ajánlás", "Három ajánlás", "Péter reagált"],
  },
  { memberId: PETER_ID, completedLessons: [], taskWeeksDone: [], badges: [] },
];
