import type { WeeklyTask } from "./types";

/* One short task a week from Péter, for every member regardless of tier — so a
   task only ever links to an Alap-tier lesson, in the week that lesson opens.
   Each one should take under half an hour and leave something behind: a
   number, a sentence, a sent message. */

type Row = [title: string, text: string, lesson?: [courseSlug: string, lessonSlug: string]];

const A = "vallalkozoi-alapok";
const O = "onismeret-a-vezetesben";

const ROWS: Row[] = [
  [
    "Írd le, miért csinálod",
    "Három mondatban írd le, miért vállalkozol. Ne azt, amit egy befektetőnek mondanál, hanem azt, amit magadnak. Tedd el, egy év múlva elővesszük.",
    [A, "miert-vallalkozol"],
  ],
  [
    "Az öt számod",
    "Írd fel fejből a havi bevételedet, a költségedet, az átlagos megrendelésed értékét, az ügyfeleid számát és a kintlévőségedet. Utána nézd meg a valódi számokat. Melyiknél tévedtél a legnagyobbat.",
    [A, "szamok-amiket-ismerned-kell"],
  ],
  [
    "Számold ki az óradíjad alsó határát",
    "Vedd a havi költségeidet és azt az összeget, amiből meg akarsz élni, és oszd el a ténylegesen kiszámlázható óráiddal. Ez alatt nem vállalsz munkát. Írd le a számot.",
    [A, "arazas-onbecsules-nelkul"],
  ],
  [
    "Nyiss tartalékszámlát",
    "Ha még nincs külön számlád a tartaléknak, ezen a héten nyiss egyet, és utalj rá bármekkora összeget. Nem az összeg számít, hanem hogy a szokás elindul.",
    [A, "az-elso-tartalek"],
  ],
  [
    "Egy nem, amit régóta halogatsz",
    "Van egy ügyfél, egy munka vagy egy szívesség, amire régóta nemet kellene mondanod. Ezen a héten mondd ki, udvariasan és magyarázkodás nélkül.",
    [A, "mikor-mondj-nemet"],
  ],
  [
    "Írd le az ideális ügyfeled egy bekezdésben",
    "Gondolj arra az ügyfeledre, akivel a legszívesebben dolgoztál. Írd le egy bekezdésben, ki ő, mi a gondja, és miért volt jó vele dolgozni. Ezt a leírást használjuk majd a jövő heti leckében.",
    [A, "az-idealis-ugyfel"],
  ],
  [
    "Tíz név",
    "Írj fel tíz embert, aki ismer téged, és ismerhet olyat, akinek szüksége van rád. Hármat hívj fel közülük ezen a héten — nem eladni, csak elmondani, min dolgozol mostanában.",
    [A, "az-elso-tiz-ugyfel"],
  ],
  [
    "Rövidítsd felére az ajánlatodat",
    "Vedd elő a legutóbb kiküldött ajánlatodat, és húzd ki belőle mindazt, ami rólad szól, nem az ügyfélről. Ami marad, az az ajánlat.",
    [A, "ajanlat-amit-elolvasnak"],
  ],
  [
    "Hívj fel egy elégedetlen ügyfelet",
    "Válassz ki valakit, aki nem volt maradéktalanul elégedett, és hívd fel. Ne védekezz, csak kérdezd meg, mit csinálnál másképp a helyében. Jegyzetelj.",
    [A, "panaszbol-ajanlas"],
  ],
  [
    "Tervezd meg a jövő hetedet pénteken",
    "Péntek délután ülj le húsz percre, és írd be a naptáradba a jövő hét három legfontosabb dolgát, időponttal. A többi köré szerveződik.",
    [A, "a-heted-felepitese"],
  ],
  [
    "Negyedéves terv egy oldalon",
    "Töltsd ki a lecke munkalapját: egy cél, három heti teendő, egy dolog, amit abbahagysz. Tedd ki oda, ahol minden nap látod.",
    [A, "negyedeves-terv"],
  ],
  [
    "Mire megy el az időd",
    "Három napon át írd fel félóránként, mit csinálsz. A végén húzd alá azt, amit más is meg tudna csinálni helyetted. Ez lesz az első munkaköri leírásod alapja.",
    [A, "mikor-vegyel-fel-embert"],
  ],
  [
    "Az első negyedév mérlege",
    "Tizenhárom hete vagy itt. Írd meg a közösségben, mi változott a cégedben azóta — egy dolog elég. A többieknek is segít, ha látják.",
    [A, "az-elso-ev-merlege"],
  ],
  [
    "Kérj egy ajánlást",
    "Kérd meg egy elégedett ügyfeledet, hogy ajánljon tovább egy konkrét embernek. Ne általában kérd, hanem név szerint: kinek, és miért éppen neki.",
  ],
  [
    "Kérj visszajelzést magadról",
    "Kérdezz meg három embert, akivel együtt dolgozol: mi az az egy dolog, amit másképp csinálhatnál. Csak köszönd meg, ne magyarázd meg.",
    [O, "visszajelzest-kapni"],
  ],
  [
    "Emelj árat egy ügyfélnél",
    "Válassz ki egy ügyfelet, akinél régóta nem emeltél, és írd meg neki az új árat a következő hónaptól. Egy ügyfél, egy levél.",
  ],
  [
    "Köszönj meg valamit kézzel írva",
    "Írj egy rövid, kézzel írt köszönetet valakinek, aki az elmúlt évben segített a cégednek. Add postára. Ritka gesztus, ezért emlékeznek rá.",
  ],
  [
    "Kiben bízol, és miért",
    "Írd fel azt a három embert a cégedben vagy körülötte, akire rábíznád a kulcsot. Mellé azt is, mit tettek, amiért megbízol bennük. Ebből látod, neked mit jelent a bizalom.",
    [O, "bizalom"],
  ],
  [
    "Nézd át a kintlévőségeidet",
    "Szedd össze, ki mennyivel tartozik, és mióta. A legrégebbit hívd fel még ezen a héten. Nem kellemetlenkedsz: a pénzedről van szó.",
  ],
  [
    "Egy folyamat, leírva",
    "Válassz egy feladatot, amit hetente megcsinálsz, és írd le lépésről lépésre úgy, hogy más is meg tudja csinálni belőle. Egy oldal elég.",
  ],
  [
    "A saját figyelmeztető jeleid",
    "Írd le, miből veszed észre magadon, hogy túl sok. Rossz alvás, türelmetlenség, halogatás — mindenkinél más. Mutasd meg valakinek, aki közel áll hozzád, és kérd meg, hogy szóljon.",
    [O, "a-kieges-korai-jelei"],
  ],
  [
    "Találkozz valakivel cél nélkül",
    "Hívj meg egy kávéra egy vállalkozót, akitől nem akarsz semmit. Kérdezd a cégéről, és figyelj. A legjobb üzleti kapcsolataim így kezdődtek.",
  ],
  [
    "Mondj le egy előfizetést",
    "Nézd át a céges kártyád havi terheléseit. Legalább egy olyat találsz, amit fizetsz, de nem használsz. Mondd le még ma.",
  ],
  [
    "Egy szabad délután",
    "Jelölj ki ezen a héten egy délutánt, amikor nem dolgozol és nem is vagy elérhető. Írd be a naptárba, mint egy ügyféltalálkozót. Figyeld meg, mit érzel közben.",
    [O, "pihenes-bunttudat-nelkul"],
  ],
  [
    "Félidő",
    "Huszonöt hét van mögötted. Vedd elő, amit az első héten írtál arról, miért vállalkozol. Igaz még. Ha változott, írd át.",
  ],
  [
    "Kérdezd meg, miért téged választottak",
    "Hívd fel három ügyfeledet, és kérdezd meg, miért téged választottak. A válaszaik többet érnek bármilyen marketingszövegnél — használd a szavaikat.",
  ],
  [
    "Beszélgetés otthon a cégről",
    "Ülj le a társaddal vagy a családoddal, és kérdezd meg, ők hogyan élik meg a cégedet. Ne védd meg, csak hallgasd végig.",
    [O, "csalad-es-ceg"],
  ],
  [
    "Frissítsd a bemutatkozásodat",
    "Mondd el hangosan, egy percben, mivel foglalkozol és kinek segítesz. Vedd fel telefonnal, és hallgasd vissza. Addig csiszold, amíg te is szívesen hallgatnád.",
  ],
  [
    "A legrosszabb ügyfeled",
    "Gondold végig, melyik ügyfeled viszi a legtöbb energiádat a legkevesebb pénzért. Döntsd el: árat emelsz nála, keretet szabsz, vagy elengeded.",
  ],
  [
    "Az iránytűd három szava",
    "Válassz három szót, ami leírja, milyen vállalkozó akarsz lenni. Ezen a héten minden nagyobb döntésednél nézz rájuk, mielőtt válaszolsz.",
    [O, "sajat-iranytu"],
  ],
  [
    "Egy ügyfél, akit rég nem kerestél",
    "Nézd át a régi ügyfeleid listáját, és írj egynek, akivel több mint egy éve nem beszéltél. Kérdezd meg, hogy van. Nem kell több.",
  ],
  [
    "Mérd meg, honnan jönnek az ügyfeleid",
    "Írd össze az idei új ügyfeleidet, és mindegyik mellé, honnan jött. Ajánlás, hirdetés, régi ismeretség. Ahová a legtöbb vonás kerül, oda tedd az idődet.",
  ],
  [
    "Tanulj meg valamit a saját cégedről",
    "Ülj be egy napra egy olyan munkafolyamatba, amit már rég nem te csinálsz. Figyeld meg, hol akad el. A kollégáid évek óta tudják, csak senki nem kérdezte.",
  ],
  [
    "Írd meg a nem-listádat",
    "Írj fel öt dolgot, amit a céged nem vállal: munkatípust, határidőt, ügyfélkört. A stratégia ott kezdődik, ahol kimondod, mit nem csinálsz.",
  ],
  [
    "Adj egy ajánlást",
    "Gondold végig, kit tudnál összekötni kivel a körödből úgy, hogy mindketten jól járjanak. Hívd fel őket, és mutasd be őket egymásnak. Ne várj érte semmit.",
  ],
  [
    "A következő év egy mondatban",
    "Írd le egy mondatban, mit akarsz elérni a cégeddel jövő ilyenkorra. Ha nem fér egy mondatba, még nem elég tiszta.",
  ],
  [
    "Rendezd a jelszavaidat és a hozzáféréseidet",
    "Írd össze, ki mihez fér hozzá a cégedben: bank, levelezés, domain, közösségi oldalak. Ami csak a te fejedben van meg, az kockázat. Tedd biztonságos helyre.",
  ],
  [
    "Dicsérj meg valakit konkrétan",
    "Mondd el egy kollégádnak vagy alvállalkozódnak, pontosan mit csinált jól a héten. Ne azt, hogy „szép munka”, hanem azt, hogy mi volt benne a jó.",
  ],
  [
    "Nézd meg a szerződéseidet",
    "Vedd elő a sablonszerződésedet, és olvasd el úgy, mintha az ügyfél lennél. Ami nem érthető, azt írd át. Ami hiányzik, azt kérdezd meg egy ügyvédtől.",
  ],
  [
    "Egy nap telefon nélkül dolgozva",
    "Válassz egy délelőttöt, amikor a telefonod néma, és a legfontosabb feladatodon dolgozol. Mérd meg, mennyivel jutsz előrébb, mint egy átlagos napon.",
  ],
  [
    "Kérdezd meg a csapatot",
    "Tedd fel a kollégáidnak ezt az egy kérdést: mi az, amit ha holnaptól másképp csinálnánk, könnyebb lenne a munkád. Egy javaslatot valósíts meg a hónap végéig.",
  ],
  [
    "Az árad, hangosan",
    "Állj a tükör elé, és mondd ki az áradat tízszer, magyarázat nélkül. Furcsán hangzik, de a következő tárgyaláson nem fog remegni a hangod.",
  ],
  [
    "Számold ki egy ügyfél értékét",
    "Vedd egy átlagos ügyfeledet, és számold ki, mennyit hoz a cégednek a teljes kapcsolat alatt. Ennyit ér meg neked egy új ügyfél megszerzése — nem többet, de nem is kevesebbet.",
  ],
  [
    "Írj egy hasznos posztot",
    "Írd meg a közösségben azt az egy dolgot, amit idén a legdrágábban tanultál meg. Valaki éppen előtte áll, és megspórolod neki.",
  ],
  [
    "Tervezz szabadságot",
    "Írd be a naptáradba a jövő évi szabadságodat, és szólj róla az ügyfeleidnek időben. Ha a cég nem bír ki nélküled két hetet, azon dolgoznunk kell.",
  ],
  [
    "Mit hagysz abba jövőre",
    "Írj fel három dolgot, amit jövőre nem csinálsz tovább: egy szolgáltatást, egy szokást, egy kapcsolatot. A helyükre fér be az, ami előre visz.",
  ],
  [
    "Nézd át az éves számaidat",
    "Ülj le a könyvelőddel egy órára, és kérd meg, hogy magyarázza el az évedet úgy, mintha először látnál mérleget. Kérdezz, amíg nem érted.",
  ],
  [
    "Köszönd meg az ügyfeleidnek az évet",
    "Írj személyes üzenetet az öt legfontosabb ügyfelednek. Ne körlevelet. Egy mondat arról, mit jelentett neked a közös munka.",
  ],
  [
    "Mire vagy büszke idén",
    "Írj fel öt dolgot, amit idén jól csináltál a cégedben. A vállalkozók ritkán állnak meg ezen a ponton — most állj meg.",
  ],
  [
    "A jövő évi három célod",
    "Három cél, mindegyik mellett egy szám és egy határidő. Oszd meg a közösségben: amit mások előtt vállalsz, azt nehezebb elengedni.",
  ],
  [
    "Hívd meg, aki jó helyen lenne itt",
    "Gondolj egy vállalkozóra, akinek most épp arra van szüksége, amit te itt kaptál. Küldd el neki az ajánlói linkedet egy személyes mondattal.",
  ],
  [
    "Egy év mérlege",
    "Ötvenkét hét. Vedd elő az első heti három mondatodat, és írd mellé a mostanit. Oszd meg a közösségben, mi változott benned és a cégedben.",
  ],
];

export const TASKS: WeeklyTask[] = ROWS.map(([title, text, lesson], i) => ({
  week: i + 1,
  title,
  text,
  lesson: lesson ? { courseSlug: lesson[0], lessonSlug: lesson[1] } : undefined,
}));
