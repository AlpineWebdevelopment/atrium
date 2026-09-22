import type { LessonContent } from "../types";

export const CONTENT: Record<string, LessonContent> = {
  "miert-vallalkozol": {
    text: `A legtöbben, akikkel dolgozom, a *mit* kérdésével érkeznek: mit adjak el, mit írjak a honlapra, mit válaszoljak az ügyfélnek. A *miért* ritkán kerül elő, pedig ez dönti el, mit bírsz ki az első évben. Aki nem tudja, miért csinálja, az az első nehéz hónapban álláshirdetéseket kezd nézegetni.

25 év alatt három őszinte választ hallottam a legtöbbször: szabadságot akarok, több pénzt akarok, vagy valamit a magam módján akarok csinálni. Mindhárom rendben van. A baj ott kezdődik, amikor az egyiket mondod, de a másik szerint döntesz. Szabadságot akarsz, közben minden megrendelést elvállalsz, és este tízkor is felveszed a telefont. Ilyenkor nem a cég rossz, hanem a miérted és a hétköznapjaid nem beszélnek egymással.

Egy próba, amit érdemes elvégezni:

1. Írd le egy mondatban, miért vállalkozol. Ne szépítsd.
2. Kérdezd meg magadtól: és ez miért fontos nekem? Ismételd meg háromszor, mindig az előző válaszodra.
3. Nézd meg az elmúlt heted naptárát. Melyik elfoglaltságod szolgálta azt, amit a harmadik válaszban leírtál?

A harmadik válasz általában már nem a pénzről szól, hanem arról, milyen életet szeretnél. Ezt a mondatot tedd el, a kurzus végén elő fogjuk venni. Ha a naptárad és a mondatod között nagy a távolság, az nem kudarc, hanem a kiindulópontod.`,
    resources: [{ label: "Munkalap: a három miért", kind: "pdf", size: "210 KB" }],
    comments: [
      {
        id: "miert-vallalkozol-c1",
        memberId: "m28",
        text: "Szabadságot írtam, aztán ránéztem a naptáramra: heti hat napot állok a pult mögött. Van min gondolkodnom.",
        daysAgo: 21,
      },
      {
        id: "miert-vallalkozol-c2",
        memberId: "m01",
        text: "Márton, ez pont jó kiindulópont. Ne a hat napot akard azonnal megváltoztatni, előbb nézd meg, melyik napodat tudná más is vinni.",
        daysAgo: 20,
      },
      {
        id: "miert-vallalkozol-c3",
        memberId: "m45",
        text: "A harmadik miértnél jöttem rá, hogy nem a pénz miatt jöttem el a munkahelyemről, hanem mert nem akartam többé mások ízlése szerint tervezni. Furcsa volt leírva látni.",
        daysAgo: 5,
      },
    ],
  },

  "a-ceg-nem-te-vagy": {
    text: `Az elején te vagy a cég: te adsz el, te teljesítesz, te számlázol, te takarítasz ki este. Ez természetes. A gond akkor van, ha fejben is így marad, mert akkor minden visszautasított ajánlat téged utasít vissza, és minden reklamáció rólad szól. Így nem lehet jó döntéseket hozni, csak védekezni.

Én mindig társakkal építettem céget, és ez korán megtanított valamire: a cég egy külön dolog, saját pénzzel, saját érdekkel és saját szabályokkal. Te dolgozol benne, és te vagy a tulajdonosa is, de ez két különböző szerep. A tulajdonos azt kérdezi, merre menjen a cég. A munkatárs azt, hogy mi a mai feladat. Ha csak az utóbbit hallod meg, évekig lehet szorgalmasan dolgozni egy helyben álló vállalkozásban.

Három egyszerű elválasztás, amit már az első hónapban megtehetsz:

- **Külön pénz.** A cég bevétele nem a te fizetésed. Utalj magadnak fix összeget, fix napon.
- **Külön idő.** Hetente egy óra, amikor nem a cégben dolgozol, hanem a cégen gondolkodsz.
- **Külön mondat.** Ne azt mondd, hogy *drága vagyok*, hanem azt, hogy *ennyibe kerül ez a szolgáltatás*.

Az utolsó apróságnak tűnik, pedig sokat változtat azon, hogyan ülsz le tárgyalni. Figyeld meg ezen a héten, hányszor beszélsz magadról, amikor valójában a vállalkozásodról van szó.`,
    resources: [
      { label: "Munkalap: tulajdonos és munkatárs — két szerep", kind: "pdf", size: "190 KB" },
      { label: "Sablon: a heti tulajdonosi óra kérdései", kind: "docx", size: "85 KB" },
    ],
    comments: [
      {
        id: "a-ceg-nem-te-vagy-c1",
        memberId: "m27",
        text: "A külön mondat nálam nagyon betalált. Eddig úgy éltem meg minden alkut, mintha engem értékelnének le, nem a logótervezés árát.",
        daysAgo: 18,
      },
      {
        id: "a-ceg-nem-te-vagy-c2",
        memberId: "m02",
        text: "Könyvelőként az ügyfeleimnek folyton mondom, hogy a cég pénze nem az övék, közben én sem utaltam magamnak fix fizetést. Ettől a hónaptól tizedikén megy az utalás.",
        daysAgo: 12,
      },
      {
        id: "a-ceg-nem-te-vagy-c3",
        memberId: "m44",
        text: "Tegnap először mondtam azt, hogy ennyibe kerül egy légi felvétel, és nem azt, hogy ennyit kérek. Apróság, de máshogy ültem a széken.",
        daysAgo: 1,
      },
    ],
  },

  "az-elso-ev-terkepe": {
    text: `Az első évet kevesen tervezik meg, a legtöbben túlélik. Pedig elég jól megjósolható, mi mikor jön, és ha tudod, hogy egy nehéz szakasz a térképen is rajta van, kevésbé ijedsz meg tőle. Négy negyedévre szoktam bontani.

### Első negyedév: bizonyíték
Nem logó és nem honlap kell, hanem az első fizető ügyfelek. Azt keresed, ad-e valaki pénzt azért, amit kínálsz.

### Második negyedév: ár és számok
Már van tapasztalatod arról, mennyi munka egy megrendelés. Most kell kiszámolni, megéri-e, és ha nem, árat emelni.

### Harmadik negyedév: ügyfélszerzés rendszerben
Eddig jött, aki jött. Most eldöntöd, kinek dolgozol szívesen, és tudatosan feléjük fordulsz.

### Negyedik negyedév: ritmus
Heti és negyedéves rend, hogy a cég ne csak akkor haladjon, amikor éppen ráérsz.

A kurzus moduljai ugyanezt a sorrendet követik, nem véletlenül. A leggyakoribb hiba, amit látok, a sorrend felcserélése: valaki hónapokig csiszolja az arculatát, mielőtt egyetlen ügyféllel beszélt volna. A másik a harmadik-negyedik hónap környéki hullámvölgy, amikor az ismerősi kör elfogyott, a rendszer pedig még nincs meg. Ez nem annak a jele, hogy rossz az ötleted. Ez a térkép része.

Jelöld be a munkalapon, hol tartasz most, és írd mellé azt az egy dolgot, amit ebben a negyedévben le kell zárnod ahhoz, hogy továbbléphess.`,
    resources: [{ label: "Munkalap: az első év térképe négy negyedévben", kind: "pdf", size: "320 KB" }],
    comments: [
      {
        id: "az-elso-ev-terkepe-c1",
        memberId: "m21",
        text: "A hullámvölgy a negyedik hónapban nálam pontosan így volt, azt hittem, csak én csinálok valamit rosszul. Jó lett volna ezt akkor látni.",
        daysAgo: 15,
      },
      {
        id: "az-elso-ev-terkepe-c2",
        memberId: "m38",
        text: "Én vagyok az, aki két hónapig a logóval foglalkozott. A térkép szerint még mindig az első negyedévben járok, de most legalább tudom, mi a dolgom.",
        daysAgo: 9,
      },
    ],
  },

  "szamok-amiket-ismerned-kell": {
    text: `Ha megkérdezem egy vállalkozótól, mennyi volt a múlt havi bevétele, általában tudja. Ha azt kérdezem, mennyi maradt belőle, a legtöbben a könyvelőjükre hivatkoznak. A könyvelő a múltat rögzíti, a döntéseket viszont neked kell meghoznod, ahhoz pedig néhány számnak a fejedben kell lennie.

1. **Havi fix költség.** Amit akkor is kifizetsz, ha egyetlen ügyfél sem jön: bérleti díj, járulékok, előfizetések, könyvelő.
2. **Fedezeti pont.** Mekkora bevételnél vagy nullán úgy, hogy a saját fizetésedet is beleszámoltad.
3. **Átlagos megrendelés értéke.** Ebből látod, hány ügyfél kell a fedezeti ponthoz.
4. **Valós óradíjad.** A havi eredményed elosztva az összes ledolgozott órával, az ajánlatírást és az adminisztrációt is beleértve.
5. **Hány hónapig bírnád bevétel nélkül.** A számlán lévő pénz osztva a havi fix költséggel.

A negyedik szokott a legjobban fájni. Sokan ilyenkor szembesülnek vele, hogy alkalmazottként többet kerestek óránként. Ez nem szégyen, hanem információ: a következő modulban pontosan erre építjük az árazást.

Nem kell bonyolult rendszer. Havonta egyszer, mindig ugyanazon a napon, fél óra alatt frissíthető mind az öt. Aki ismeri a számait, az tárgyaláson is nyugodtabban ül.

Töltsd ki a táblázatot a múlt hónap adataival. Ha valamelyik számot csak becsülni tudod, az is eredmény: most már tudod, mit kell elkezdened követni.`,
    resources: [
      { label: "Táblázat: az öt szám havi követése", kind: "xlsx", size: "64 KB" },
      { label: "Ellenőrzőlista: mi számít fix költségnek", kind: "pdf", size: "150 KB" },
    ],
    comments: [
      {
        id: "szamok-amiket-ismerned-kell-c1",
        memberId: "m32",
        text: "Kiszámoltam a valós óradíjamat az utazással és az edzéstervek megírásával együtt. Majdnem a fele annak, amit az ügyfél óránként fizet.",
        daysAgo: 14,
      },
      {
        id: "szamok-amiket-ismerned-kell-c2",
        memberId: "m33",
        text: "A fedezeti pontot eddig csak érzésre tudtam. Most kiderült, hogy a hétköznapok alig hozzák, a hétvégi rendelések tartják el a boltot.",
        daysAgo: 10,
      },
      {
        id: "szamok-amiket-ismerned-kell-c3",
        memberId: "m01",
        text: "Ágnes, ez fontos felismerés. A következő kérdés az, mit tudnál a hétköznapokra átvinni abból, ami hétvégén működik.",
        daysAgo: 9,
      },
    ],
  },

  "arazas-onbecsules-nelkul": {
    text: `Az árazásról szóló beszélgetések ritkán szólnak számokról. Többnyire arról, hogy *mit fognak szólni*, *ki vagyok én, hogy ennyit kérjek*, és *a másik olcsóbban csinálja*. Amíg az árad az önbecsülésedből jön, addig minden rossz napodon engedményt fogsz adni. Ezért válasszuk szét a kettőt: hogy mennyit érsz emberként, az nem árazási kérdés. Hogy mennyit kérsz, az számtan.

Az alsó határt az előző lecke számai adják. A havi fix költségedhez add hozzá a fizetést, amiből tisztességesen megélsz, és egy kevés tartalékot. Ezt oszd el azzal az óraszámmal, amit *valóban ki tudsz számlázni*. Ez mindig kevesebb a teljes munkaidődnél, mert az ajánlatírás, az utazás és az adminisztráció is idő. Ami így kijön, az alatt nem dolgozol, mert ott minden munka ráfizetés.

A felső határt nem a költséged, hanem az ügyfél haszna szabja meg. Egy klímaszerelő nem két óra munkát ad el, hanem egy hűvös hálószobát júliusban. Minél pontosabban meg tudod fogalmazni, mit nyer veled az ügyfél, annál kevésbé lesz téma az óradíj.

> Az ár nem vélemény rólad, hanem egy ajánlat, amire igent vagy nemet lehet mondani.

Tízezer órányi tárgyalás után azt mondom: az árat ki kell mondani, és utána csendben maradni. Aki a saját árát azonnal magyarázni kezdi, az már alkudik, csak saját magával. Számold ki az alsó határodat, és hasonlítsd össze a legutóbbi három ajánlatoddal.`,
    resources: [
      { label: "Táblázat: az alsó árhatár kiszámítása", kind: "xlsx", size: "72 KB" },
      { label: "Munkalap: mit nyer veled az ügyfél", kind: "pdf", size: "180 KB" },
    ],
    comments: [
      {
        id: "arazas-onbecsules-nelkul-c1",
        memberId: "m34",
        text: "A hűvös hálószoba júliusban kikerült a műhely falára. Az alsó határom egyébként jóval magasabb, mint amennyiért eddig kiszálltam.",
        daysAgo: 11,
      },
      {
        id: "arazas-onbecsules-nelkul-c2",
        memberId: "m35",
        text: "A csendben maradás a legnehezebb. Tegnap kimondtam az árat egy hívásban, és nem kezdtem el magyarázni. Hosszú öt másodperc volt, de elfogadták.",
        daysAgo: 8,
      },
      {
        id: "arazas-onbecsules-nelkul-c3",
        memberId: "m37",
        text: "Kérdés: a régi vendégeknél hogyan érdemes árat emelni úgy, hogy ne érezzék büntetésnek?",
        daysAgo: 6,
      },
    ],
  },

  "cash-flow-egyszeruen": {
    text: `Lehet egy cég nyereséges úgy, hogy közben nem tudja kifizetni a jövő heti számláit. A nyereség azt mutatja meg, megéri-e, amit csinálsz. A cash flow azt, hogy kibírod-e addig, amíg a pénz megérkezik. Az első évben a második a sürgősebb kérdés.

A lényeg egyetlen különbség: a számla kiállítása nem bevétel. Bevétel az, ami a bankszámládon van. Ha harmincnapos fizetési határidővel dolgozol, és az ügyfél még két hetet késik, akkor a januári munkádból márciusban lesz pénz, miközben a bérleti díjat és a járulékot januárban és februárban is kifizetted.

Ehhez elég egy egyszerű táblázat a következő tizenhárom hétre. Minden hét egy oszlop, három sorral: mi jön be várhatóan, mi megy ki biztosan, és mennyi marad a hét végén. Ahol a harmadik sor negatívba fordul, ott van teendőd, és jó esetben ezt hetekkel előre látod, nem aznap reggel.

Néhány dolog, ami a leggyakrabban segít:

- Kérj előleget. Aki komolyan gondolja, annak ez természetes.
- Számlázz azonnal, amikor elkészültél, ne a hónap végén.
- A lejárt számlára a határidő utáni napon szólj rá, udvariasan és tárgyszerűen.
- A nagy kiadásokat igazítsd a várható bevételekhez.

A pénz elkérése nem kellemetlenkedés, hanem a munka része. Töltsd ki a táblázatot a következő négy hétre, és nézd meg, melyik héten a legszűkebb a mozgástered.`,
    resources: [
      { label: "Táblázat: tizenhárom hetes cash flow", kind: "xlsx", size: "96 KB" },
      { label: "Sablon: udvarias fizetési emlékeztető", kind: "docx", size: "48 KB" },
    ],
    comments: [
      {
        id: "cash-flow-egyszeruen-c1",
        memberId: "m03",
        text: "A tizenhárom hetes táblázatból derült ki, hogy két nagy projekt között lenne egy üres hónapom. Most még van időm tenni ellene.",
        daysAgo: 13,
      },
      {
        id: "cash-flow-egyszeruen-c2",
        memberId: "m30",
        text: "Eddig mindig a munka végén kértem pénzt, az anyagot is én előlegeztem meg. A következő festésnél az anyagköltséget előre kérem.",
        daysAgo: 7,
      },
    ],
  },

  "az-elso-tartalek": {
    text: `Az előző leckében láttad, melyik heteken lesz szűkös a pénz. A tartalék arra való, hogy ezek a hetek kellemetlenek legyenek, ne végzetesek. A három hónapnyi fix költség nem varázsszám, hanem józan cél: ennyi idő alatt általában pótolni lehet egy kiesett nagy ügyfelet, vagy ki lehet húzni egy betegséget kapkodás nélkül.

A tartaléknak van egy kevésbé nyilvánvaló haszna is. Akinek nincs, az rosszul tárgyal. Elvállalja a rosszul fizető munkát, enged az árból, és igent mond olyan ügyfélre, akiről az első percben tudja, hogy baj lesz vele. A tartalék tehát nem csak biztonság, hanem döntési szabadság. A következő lecke, a nemet mondás, enélkül alig működik.

Így épül fel, ha most nulláról indulsz:

1. Nyiss külön alszámlát, amihez nem tartozik kártya.
2. Minden beérkező összegből azonnal tegyél félre egy fix hányadot. Kezdd kicsiben, a rendszeresség fontosabb, mint az összeg.
3. Az első cél egy hónapnyi fix költség. Ha megvan, jöhet a második.
4. Írd le előre, mire nyúlhatsz hozzá. Bevételkiesésre igen, új telefonra nem.

Ne várd meg vele a jó hónapot, mert a jó hónap pénzének mindig lesz más helye. A tartalék és az adóra félretett pénz két külön dolog, ne keverd össze őket, különben az egyik mindig megeszi a másikat.

Számold ki a munkalapon, mennyi a te három hónapod, és a mostani tempóval mikorra érsz oda.`,
    resources: [{ label: "Munkalap: a három hónapos tartalék terve", kind: "pdf", size: "170 KB" }],
    comments: [
      {
        id: "az-elso-tartalek-c1",
        memberId: "m29",
        text: "Megnyitottam az alszámlát, kártya nélkül. Egyelőre minden beérkező díj tizede megy rá, a rendszeresség kedvéért.",
        daysAgo: 5,
      },
      {
        id: "az-elso-tartalek-c2",
        memberId: "m36",
        text: "Nálam a tartalék eddig mindig árukészletté változott. A lista arról, hogy mire nyúlhatok hozzá, sokat segít.",
        daysAgo: 4,
      },
    ],
  },

  "mikor-mondj-nemet": {
    text: `Az elején minden megrendelés ajándéknak tűnik, a nem kimondása pedig luxusnak. Pedig a rossz munka nem csak a saját idejét viszi el. Elviszi a jó munka helyét, a kedvedet, és gyakran a híredet is, mert amit félszívvel csinálsz, azon meglátszik.

Négy helyzet, amikor érdemes komolyan megfontolni a nemet:

- **Az ár a kiszámolt alsó határod alatt van.** Ami alatta van, az nem bevétel, hanem ráfizetés.
- **Nem ehhez értesz.** Ha az ügyfél pénzén tanulnád meg menet közben, az ritkán végződik jól.
- **Az ügyfél már az elején nem tiszteli a kereteidet.** Aki az ajánlatnál sürget, alkudozik és éjjel ír, az munka közben sem lesz más.
- **Nincs rá kapacitásod.** A túlvállalás árát mindig a meglévő ügyfeleid fizetik meg.

Van olyan, hogy tudatosan vállalsz el kevésbé jó munkát, mert referencia kell, vagy mert szűk a hónap. Ez rendben van, ha döntés, és nem sodródás. Mondd ki magadnak: ezt most ezért vállalom, és eddig.

A nemet lehet úgy mondani, hogy a kapcsolat megmarad. Köszönd meg a megkeresést, mondd el röviden, hogy ez most nem neked való, és ha tudsz, ajánlj mást. Mentegetőzni nem kell. Aki tisztán mond nemet, azt sokszor éppen ezért keresik meg újra, egy jobb munkával.

Gondold végig: melyik volt az utóbbi időben az a munka, amire nemet kellett volna mondanod, és a négy jel közül melyik látszott már az elején?`,
    resources: [
      { label: "Ellenőrzőlista: négy jel, mielőtt igent mondasz", kind: "pdf", size: "140 KB" },
      { label: "Sablon: udvarias visszautasítás három változatban", kind: "docx", size: "56 KB" },
    ],
    comments: [
      {
        id: "mikor-mondj-nemet-c1",
        memberId: "m20",
        text: "A harmadik jel nálam mindig ott volt a problémás munkáknál. Aki az első találkozón a másik asztalos áraival jön, azzal az átadásnál is vita lett.",
        daysAgo: 6,
      },
      {
        id: "mikor-mondj-nemet-c2",
        memberId: "m04",
        text: "Múlt héten nemet mondtam egy háromhetes határidejű céges rendezvényre, és ajánlottam helyette egy kollégát. Tegnap ugyanaz a cég megkeresett a tavaszi eseményével.",
        daysAgo: 3,
      },
    ],
  },

  "az-idealis-ugyfel": {
    text: `Ha azt mondod, bárkinek szívesen dolgozol, akkor senkit sem szólítasz meg igazán. Az ideális ügyfél meghatározása nem kizárás, hanem irány: tudod, kinek beszélsz, hol keresed, és kire érdemes a legtöbb energiát fordítanod.

Nem kitalált figurából érdemes kiindulni, hanem abból, ami már megtörtént. Vedd elő az eddigi ügyfeleid listáját, és mindegyik mellé írj három jelet: jól fizetett-e a ráfordított időhöz képest, jó volt-e vele dolgozni, és ajánlott-e tovább. Akinél mindhárom igen, azok a te embereid. Általában kevesebben vannak, mint gondolnád, és több bennük a közös, mint elsőre látszik.

Keresd meg ezt a közöset:

- Milyen helyzetben voltak, amikor megkerestek? Mi történt előtte?
- Mit próbáltak már, ami nem vált be?
- Mi alapján döntöttek melletted?
- Honnan hallottak rólad?

A válaszok nem életkort és lakhelyet adnak, hanem egy helyzetet. Egy könyvelő ideális ügyfele nem a *harmincas budapesti vállalkozó*, hanem az, *aki most lépett túl az egyszemélyes működésen, és megijedt a papíroktól*. Ezt a mondatot az ügyfél magára ismerve olvassa.

Ha még kevés ügyfeled van, a gyakorlat akkor is működik, csak a lista rövidebb, és fél év múlva újra elő kell venned. Írd meg a saját egymondatos leírásodat, és olvasd fel valakinek, aki ismeri a munkádat. Ha visszakérdez, hogy ez pontosan kit jelent, még nem elég konkrét.`,
    resources: [
      { label: "Táblázat: ügyféllista három jellel", kind: "xlsx", size: "58 KB" },
      { label: "Munkalap: az ideális ügyfél egy mondatban", kind: "pdf", size: "160 KB" },
    ],
    comments: [
      {
        id: "az-idealis-ugyfel-c1",
        memberId: "m23",
        text: "A három jel alapján kiderült, hogy a legjobb ügyfeleim nem az esküvők, hanem a kisvállalkozók, akiknek arculati fotó kell. A hirdetéseim közben csak esküvőkről szólnak.",
        daysAgo: 5,
      },
      {
        id: "az-idealis-ugyfel-c2",
        memberId: "m25",
        text: "Felolvastam a mondatomat egy régi ügyfélnek, és rögtön visszakérdezett. A harmadik változatnál tartok.",
        daysAgo: 2,
      },
    ],
  },

  "az-elso-tiz-ugyfel": {
    text: `Az első tíz ügyfél szinte soha nem hirdetésből jön. Emberektől jön: akik ismernek, akiket ők ismernek, és akiknek már dolgoztál. Ez jó hír, mert ehhez nem kell költségvetés, csak rendszeresség és egy kis bátorság.

Három kör van, ebben a sorrendben érdemes végigmenni rajtuk.

1. **Akik ismernek.** Volt kollégák, évfolyamtársak, szomszédok, sporttársak. Nem eladni kell nekik, hanem elmondani, mit csinálsz és kinek. Az előző leckében megírt mondatod itt dolgozik először.
2. **Akiket ők ismernek.** A jó kérés konkrét: *ismersz olyat, aki most nyit üzletet, és még nincs villanyszerelője?* Az általános *szólj, ha valakinek kell* kérésre ritkán történik bármi.
3. **Akiknek már dolgoztál.** Az elégedett ügyfél a legjobb forrás, mégis kevesen kérdezik meg tőle, kinek ajánlaná őket.

Több mint 1500 vállalkozót tanítottam networkingre, és a leggyakoribb akadály nem a kapcsolatok hiánya volt, hanem a szégyenérzet. Pedig ha jó munkát végzel, azzal teszel szívességet, hogy szólsz róla. Aki nem tud rólad, az nem tud téged választani.

A mennyiség is számít. Heti öt valódi beszélgetés egy negyedév alatt több mint hatvan. A beszélgetés nem körlevél és nem poszt, hanem az, amikor két ember figyel egymásra.

Írj egy ötvenes névsort a három körből, és jelöld meg, kit keresel meg ezen a héten. Az első ötöt még ma.`,
    resources: [
      { label: "Táblázat: ötvenes névsor három körben", kind: "xlsx", size: "62 KB" },
      { label: "Sablon: konkrét ajánláskérő mondatok", kind: "docx", size: "44 KB" },
    ],
    comments: [
      {
        id: "az-elso-tiz-ugyfel-c1",
        memberId: "m40",
        text: "Az ötvenes lista elsőre lehetetlennek tűnt, aztán a harmincadik névnél rájöttem, hogy több építési vállalkozót ismerek, mint hittem.",
        daysAgo: 10,
      },
      {
        id: "az-elso-tiz-ugyfel-c2",
        memberId: "m01",
        text: "Csaba, náluk a második körrel kezdj: kérdezd meg, kinek adnak át épületet a következő hónapokban, és kinél nincs még tetős.",
        daysAgo: 9,
      },
      {
        id: "az-elso-tiz-ugyfel-c3",
        memberId: "m26",
        text: "A konkrét kérés tényleg működik. Megkérdeztem egy festő ismerőst, tud-e most induló felújításról, és két címet kaptam.",
        daysAgo: 8,
      },
    ],
  },

  "ajanlat-amit-elolvasnak": {
    text: `A legtöbb ajánlat a küldőjéről szól: bemutatkozunk, felsoroljuk, mit tudunk, a végén ott egy szám. Az ügyfél pedig a végére lapoz, megnézi a számot, és összeveti a másik két ajánlat számával. Ha nem akarod, hogy csak az ár alapján döntsenek, adj neki mást is, amit összehasonlíthat.

A sorrend, ami nálam bevált:

1. **Az ő helyzete, az ő szavaival.** Két-három mondat arról, amit a beszélgetésben elmondott. Ebből látja, hogy figyeltél.
2. **Az eredmény.** Mi lesz más, amikor elkészültél. Nem a munkafolyamat, hanem ami neki számít.
3. **Hogyan jutunk oda.** Lépések, határidők, és hogy mire van szükséged tőle.
4. **Az ár, és ami benne van.** Egyértelműen, apró betű nélkül. Ha lehet, két csomag, hogy ne az legyen a kérdés, kéri-e, hanem az, melyiket.
5. **A következő lépés.** Meddig érvényes az ajánlat, és mit kell tennie, ha igent mond.

Ebből az is következik, hogy ajánlatot nem lehet beszélgetés nélkül írni. Ha valaki e-mailben csak egy árat kér, kérj tőle negyedórát telefonon. Aki ennyit sem szán rá, az ritkán lesz jó ügyfél.

Két oldalnál ne legyen hosszabb. Küldéskor beszéld meg, mikor hívod fel, és akkor valóban hívd fel. Az ajánlat követése nem tolakodás, hanem a munkád része.

Vedd elő a legutóbb elküldött ajánlatodat, és számold meg, hány mondat szól benne rólad, és hány az ügyfélről.`,
    resources: [
      { label: "Sablon: ötrészes ajánlat", kind: "docx", size: "92 KB" },
      { label: "Ellenőrzőlista: küldés előtt", kind: "pdf", size: "120 KB" },
    ],
    comments: [
      {
        id: "ajanlat-amit-elolvasnak-c1",
        memberId: "m18",
        text: "Megszámoltam: tizenkilenc mondat rólunk, négy az ügyfélről. Átírtuk az ügynökségi sablont erre a sorrendre.",
        daysAgo: 3,
      },
      {
        id: "ajanlat-amit-elolvasnak-c2",
        memberId: "m31",
        text: "A viszonteladóknak eddig csak egy árlistát küldtem. Kipróbálom a kétcsomagos változatot, kíváncsi vagyok, változik-e a visszajelzések aránya.",
        daysAgo: 2,
      },
    ],
  },

  "panaszbol-ajanlas": {
    text: `A panasz elsőre támadásnak érződik, főleg ha a cég és te még nagyon közel vagytok egymáshoz. Pedig a panaszkodó ügyfél szívességet tesz: elmondja azt, amit a többiek szó nélkül magukkal visznek máshoz. Aki szól, az még adna egy esélyt.

Amikor befut egy reklamáció, ezt a sorrendet tartsd:

1. **Hallgasd végig.** Ne szakítsd félbe, ne magyarázz. Kérdezz rá, mi történt pontosan.
2. **Mondd vissza.** *Ha jól értem, azt várta, hogy péntekre kész, és hétfőn sem hívtuk.* Sokan már itt megnyugszanak.
3. **Vállald, ami a tiéd.** Kifogás nélkül. Ami nem a te hibád, azt később, nyugodt hangon is tisztázhatod.
4. **Mondj konkrét megoldást, határidővel.** És tartsd be, mert a második csalódást már nehéz helyrehozni.
5. **Jelentkezz utána.** Egy hét múlva kérdezd meg, minden rendben van-e.

Az ötödik lépést szinte mindenki kihagyja, pedig itt fordul át a történet. Az ügyfél nem arra fog emlékezni, hogy hibáztál, hanem arra, hogyan kezelted. Sokszor láttam, hogy a legjobb ajánlók éppen azokból lesznek, akiknek egyszer rendesen helyrehoztak valamit, mert ők már tudják, mi történik, ha baj van.

Egy dologra figyelj: a jóvátétel ne legyen automatikusan árengedmény. Először a problémát oldd meg, és csak utána gondolkodj gesztuson.

Idézd fel az utolsó panaszt, amit kaptál. Melyik lépés maradt ki, és jelentkeztél-e utána?`,
    resources: [{ label: "Ellenőrzőlista: a panaszkezelés öt lépése", kind: "pdf", size: "130 KB" }],
    comments: [
      {
        id: "panaszbol-ajanlas-c1",
        memberId: "m11",
        text: "Nálunk a visszamondás hiányzott. Mostantól a pultnál kimondjuk, mit értettünk, mielőtt bármit megígérnénk az autóval kapcsolatban.",
        daysAgo: 5,
      },
      {
        id: "panaszbol-ajanlas-c2",
        memberId: "m16",
        text: "Egy elrontott tortafelirat után egy héttel felhívtam a vendéget. Annyira meglepődött, hogy azóta két ismerősét is hozzánk küldte.",
        daysAgo: 2,
      },
    ],
  },

  "a-heted-felepitese": {
    text: `Ha a hetednek nincs szerkezete, akkor az ügyfeleid és a postafiókod adnak neki. Mindig a leghangosabb feladat nyer, és az marad el, amit senki nem sürget: az ügyfélszerzés, a számok, a gondolkodás. Néhány hónap múlva ez látszik meg a bevételen.

Nem percre beosztott naptárra gondolok, hanem néhány rögzített blokkra, amelyek köré a többi elrendeződik.

- **Teljesítés.** A fizetett munka. Védd meg a legjobb óráidat, és ilyenkor ne nézz leveleket.
- **Ügyfélszerzés.** Hetente legalább két fix alkalom, akkor is, ha éppen tele vagy. Főleg akkor, mert a mai beszélgetésből hónapok múlva lesz munka.
- **Pénz és adminisztráció.** Egy blokk a számlázásra, a kintlévőségekre és a tizenhárom hetes táblázatra.
- **Tulajdonosi óra.** Amiről a kurzus elején beszéltünk: egy óra a cégen, nem a cégben.
- **Szabadidő.** Ezt is írd be, különben nem lesz.

A hét elejére tedd, ami a legtöbb figyelmet kéri, a végére azt, ami rutinból megy. Péntek délután tíz percben nézd át, mi valósult meg a blokkokból, és rakd össze a következő hetet, hogy hétfő reggel ne tervezéssel, hanem munkával kezdj.

Az első hetek nem fognak sikerülni, és ez rendben van. Nem a tökéletes hét a cél, hanem az, hogy lásd, mi borítja fel. Ha hétről hétre ugyanaz a blokk esik ki, az többet mond a cégedről, mint bármelyik kimutatás.

Rajzold meg a sablonban a jövő hetedet, és az ügyfélszerzés blokkját írd be elsőnek.`,
    resources: [
      { label: "Sablon: heti terv öt blokkal", kind: "xlsx", size: "54 KB" },
      { label: "Munkalap: pénteki tízperces áttekintés", kind: "pdf", size: "110 KB" },
    ],
    comments: [
      {
        id: "a-heted-felepitese-c1",
        memberId: "m22",
        text: "Nálam a hibabejelentések borítják fel a hetet. Hogyan védjek meg egy blokkot, ha közben egy ügyfél rendszere áll?",
        daysAgo: 3,
      },
      {
        id: "a-heted-felepitese-c2",
        memberId: "m01",
        text: "Dániel, ne a teljes hetet védd, csak napi másfél órát, és legyen valaki, aki ez alatt felveszi a bejelentést. A valódi leállás kivétel, a többi várhat kilencven percet.",
        daysAgo: 3,
      },
      {
        id: "a-heted-felepitese-c3",
        memberId: "m39",
        text: "Délután foglalkozásokat tartok, úgyhogy az ügyfélszerzés blokkom kedd és csütörtök délelőtt lett. Két hete először nem marad el.",
        daysAgo: 1,
      },
    ],
  },

  "negyedeves-terv": {
    text: `Az éves terv egy induló cégnél többnyire kívánságlista, a heti terv pedig csak a tennivalókat látja. A negyedév az a távolság, amit még be lehet látni, és ami alatt már érdemi dolog történhet. Tizenhárom hét: elég hosszú egy komoly változáshoz, és elég rövid ahhoz, hogy ne lehessen halogatni.

A terv férjen el egy oldalon. Ha nem fér el, akkor még nem döntöttél.

### Mi kerül rá
- **Egy fő cél**, ami a negyedév végén egyértelműen eldönthető: megvan vagy nincs meg.
- **Legfeljebb három részcél**, amelyek a fő célt szolgálják.
- **Egy-egy szám** mindegyik mellé, az öt számod közül, vagy azokhoz kapcsolódva.
- **Amit ebben a negyedévben nem csinálsz.** Ez a rész a legfontosabb, és ezt a legnehezebb megírni.

Az utolsó pont azért számít, mert jó ötletből mindig több van, mint hétből. Amit felírtál a nem listára, azt nem dobtad el, csak eltetted a következő negyedévre, és addig nem foglalja a fejedet.

A terv akkor él, ha találkozik a heteddel. A pénteki tíz percben tedd fel a kérdést, mi vitt közelebb a fő célhoz. Ha három hétig semmi, akkor vagy a cél rossz, vagy a heted. A negyedév végén szánj rá egy délelőttöt: mi teljesült, mi nem, és miért. Ítélkezés nélkül, ahogy egy társsal beszélnéd meg.

Írd meg a következő negyedéved egyoldalas tervét, és mutasd meg valakinek, aki vissza mer kérdezni.`,
    resources: [
      { label: "Sablon: negyedéves terv egy oldalon", kind: "docx", size: "68 KB" },
      { label: "Munkalap: negyedévzáró kérdések", kind: "pdf", size: "125 KB" },
    ],
    comments: [
      {
        id: "negyedeves-terv-c1",
        memberId: "m13",
        text: "Egy fő cél, egy szám. Nálunk ez az átlagos kivitelezési idő csökkentése lett, és végre a csapat is érti, mire megyünk.",
        daysAgo: 4,
      },
      {
        id: "negyedeves-terv-c2",
        memberId: "m19",
        text: "A nem listát volt a legnehezebb megírni. Felkerült rá az új honlap, és meglepően megkönnyebbültem.",
        daysAgo: 2,
      },
    ],
  },

  "mikor-vegyel-fel-embert": {
    text: `Az első ember felvétele a legtöbb vállalkozónál túl későn történik, és rossz okból. Akkor, amikor már fuldoklik, és bárkit felvenne, aki leveszi a válláról a terhet. Ilyenkor nincs idő betanítani, nincs leírva semmi, és két hónap múlva jön a következtetés, hogy *egyszerűbb, ha magam csinálom*.

Három jel, hogy ideje gondolkodni rajta:

1. Rendszeresen mondasz nemet jó munkákra, csak azért, mert nincs rájuk időd.
2. A heted nagy részét olyan feladat viszi el, amit a valós óradíjadnál jóval olcsóbban is el lehetne végeztetni.
3. A tizenhárom hetes táblázatod és a tartalékod alapján a bér a járulékokkal együtt hónapokig kifizethető akkor is, ha az új kolléga eleinte nem termel bevételt.

Ha a harmadik nem teljesül, még nem alkalmazott kell, hanem alvállalkozó, részmunkaidős segítség vagy egy kiszervezett feladat. Ez nem kisebb lépés, hanem jó főpróba: kiderül, tudsz-e úgy feladatot átadni, hogy az rendesen elvégezve jöjjön vissza.

Mielőtt bárkit keresnél, egy hétig írj fel mindent, amit csinálsz, és jelöld meg, mi az, amit csak te tudsz elvégezni. A többiből lesz a munkakör. Amit át akarsz adni, azt előbb írd le lépésenként, mert amit te sem tudsz elmagyarázni, azt más sem fogja jól csinálni.

Egy gondolat a végére: ne saját magadat keresd meg még egyszer. Azt keresd, aki abban jó, amiben te nem, és szívesen csinálja azt, amit te halogatsz.`,
    resources: [
      { label: "Munkalap: egyhetes feladatnapló", kind: "xlsx", size: "60 KB" },
      { label: "Ellenőrzőlista: az első felvétel előtt", kind: "pdf", size: "145 KB" },
    ],
    comments: [
      {
        id: "mikor-vegyel-fel-embert-c1",
        memberId: "m12",
        text: "Én pontosan saját magamat kerestem még egyszer, egy második gyógytornászt. A feladatnaplóból kiderült, hogy valójában valaki kell, aki leveszi rólam az időpontegyeztetést.",
        daysAgo: 4,
      },
      {
        id: "mikor-vegyel-fel-embert-c2",
        memberId: "m24",
        text: "A harmadik jel nálam még nem teljesül, úgyhogy a szezonra alvállalkozóval dolgozom. Közben elkezdtem leírni a lépéseket, hogy legyen mit átadni.",
        daysAgo: 3,
      },
    ],
  },

  "az-elso-ev-merlege": {
    text: `Az év végén a könyvelőd készít egy mérleget a cégről. Én azt kérem, készíts mellé egy másikat is, amit nem kér be senki. Ebben nem csak az szerepel, mennyi pénz jött be, hanem az is, mibe került ez neked, és mit kaptál érte a pénzen túl.

Vedd elő azt a mondatot, amit az első leckében írtál le arról, miért vállalkozol. Ehhez mérd az évet, ne máséhoz. A szomszéd cége, a volt kollégád fizetése és mások sikertörténetei rossz mércék, mert nem a te miértedre adnak választ.

Négy kérdéskör, mindegyikre szánj legalább negyedórát:

- **Pénz.** Hogyan változott az öt számod az év elejéhez képest? Van-e tartalékod, és hány hónapra elég?
- **Ügyfelek.** Kikkel dolgoztál szívesen, honnan jöttek, és kinek kellett volna nemet mondanod?
- **Te magad.** Mit tudsz ma, amit egy éve nem tudtál? Hogy vagy, hogyan alszol, mennyi időd jutott azokra, akik fontosak neked?
- **A cég.** Mi működik már nélküled is, és mi áll meg, ha egy hétre kiesel?

Ha a számok jók, de a harmadik kérdésnél elakadsz, azt vedd komolyan. 25 év alatt sokszor láttam, hogy a cég előbb nő meg, mint az, aki vezeti, és ennek később ára van.

A végére írj három mondatot: mit tartasz meg, mit hagysz el, és mit kezdesz el a második évben. Aztán írd meg a következő negyedéves tervedet, mert a második év is úgy indul, ahogy az első véget ér: egy héttel, amit te építesz fel.`,
    resources: [
      { label: "Munkalap: a személyes éves mérleg", kind: "pdf", size: "230 KB" },
      { label: "Sablon: megtartom, elhagyom, elkezdem", kind: "docx", size: "52 KB" },
    ],
    comments: [
      {
        id: "az-elso-ev-merlege-c1",
        memberId: "m42",
        text: "Még csak az elején járok, de előre elolvastam. Kitettem a miért-mondatomat a kemence mellé, hogy egy év múlva legyen mihez mérni.",
        daysAgo: 3,
      },
      {
        id: "az-elso-ev-merlege-c2",
        memberId: "m08",
        text: "A harmadik kérdéskörnél akadtam el. A nyelviskola számai jók, de nem emlékszem, mikor voltam utoljára úgy szabadságon, hogy nem néztem leveleket.",
        daysAgo: 2,
      },
    ],
  },
};
