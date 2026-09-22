import type { LessonContent } from "../types";

export const CONTENT: Record<string, LessonContent> = {
  "mi-tortenik-benned": {
    text: `Amikor nagy a tét és kevés az idő, nem ugyanaz az ember ül az asztalnál, mint egy nyugodt kedd délelőtt. Beszűkül a figyelmed, felgyorsul a légzésed, és a fejed egyetlen dolgot akar: hogy a feszültség megszűnjön. Ez a lényeg. Nyomás alatt gyakran nem a legjobb döntést keresed, hanem azt, amelyik a leghamarabb véget vet a rossz érzésnek.

25 év alatt három jellegzetes reakciót láttam vezetőknél, és magamon is:

- **Előremenekülés.** Azonnal döntesz, csak hogy túl legyél rajta. Utólag határozottságnak nevezed.
- **Lefagyás.** Újabb adatot kérsz, újabb egyeztetést hívsz össze. Utólag alaposságnak nevezed.
- **Áttolás.** Másra hagyod, vagy megvárod, amíg a helyzet dönt helyetted. Utólag delegálásnak nevezed.

Egyik sem jellemhiba. Mindegyik régi, begyakorolt védekezés, ami valamikor jól szolgált. A gond ott kezdődik, hogy nyomás alatt magától kapcsol be, te pedig azt hiszed, mérlegeltél.

Tapasztalt vezetőként valószínűleg jól leplezed, kifelé mindhárom reakció összeszedettnek látszik. A tested viszont hamarabb jelez, mint a fejed: összeszoruló gyomor, megemelt váll, rövidülő mondatok, hirtelen türelmetlenség a kollégákkal. Ezek nem zavaró tényezők, hanem jelzések arról, hogy most éppen nem látsz tisztán.

Idézd fel az elmúlt év három legnehezebb döntését. Melyik reakció vitt el a háromból, és miből vehetted volna észre időben? Írd le a munkalapra, mert a következő leckék erre építenek.`,
    resources: [
      { label: "Munkalap: a három reakcióm nyomás alatt", kind: "pdf", size: "210 KB" },
      { label: "Ellenőrzőlista: testi jelzések döntés előtt", kind: "pdf", size: "140 KB" },
    ],
    comments: [
      {
        id: "mi-tortenik-benned-c1",
        memberId: "m05",
        text: "Nálam egyértelműen az előremenekülés. Kivitelezésben ezt még dicsérik is, csak a három legdrágább hibámat mind így követtem el, egy telefonhívás alatt.",
        daysAgo: 11,
      },
      {
        id: "mi-tortenik-benned-c2",
        memberId: "m06",
        text: "A lefagyást eddig alaposságnak hívtam. Fél éve kérek be újabb ajánlatokat egy gépcserére, pedig a harmadik után már tudtam, melyik kell.",
        daysAgo: 9,
      },
      {
        id: "mi-tortenik-benned-c3",
        memberId: "m01",
        text: "Eszter, ez pontosan az a felismerés, amiért a lecke készült. Hozd el a gépcserét a kiscsoportos alkalomra, ott végigmegyünk rajta.",
        daysAgo: 8,
      },
    ],
  },

  "gyors-es-lassu-dontesek": {
    text: `Nem minden döntés érdemel ugyanannyi időt. Ezt mindenki tudja, nyomás alatt mégis rendszeresen felcseréljük a kettőt: tíz perc alatt rábólintunk egy ötéves bérleti szerződésre, mert a másik fél sürget, aztán két hétig rágódunk azon, melyik szoftverre fizessünk elő.

Két kérdéssel szoktam szétválasztani őket. Vissza lehet-e csinálni, és mennyibe kerül, ha tévedek. Ami visszafordítható és olcsó benne a tévedés, azt döntsd el gyorsan, vagy add le valakinek. Ott a lassúság a drágább hiba. Ami nehezen fordítható vissza és sokba kerül, az lassú döntés, akkor is, ha valaki más órája ketyeg melletted.

A lassú döntés nem hosszú döntést jelent. Azt jelenti, hogy van rendje:

1. Leírod egy bekezdésben, miről döntesz pontosan.
2. Alszol rá legalább egyet.
3. Elmondod valakinek, akinek nincs benne érdeke.
4. Kitűzöd, mikor döntesz, és akkor döntesz.

Ez gyakran belefér negyvennyolc órába. És itt jön a tárgyalóasztal tapasztalata: a határidők jó része alkudható. Aki ma estig kér választ, az legtöbbször holnap délben is elfogadja, ha nyugodtan megkérdezed: „Mi történik, ha holnap délig válaszolok?” Ha pedig tényleg nem fogadja el, az is elárul valamit arról, kivel ülsz szemben.

A héten nézd át a nyitott döntéseidet, és sorold be őket a két kérdés alapján. Meg fogsz lepődni, hány gyors döntés áll a lassúak polcán, és fordítva.`,
    resources: [
      { label: "Munkalap: gyors vagy lassú döntés, besorolás két kérdéssel", kind: "pdf", size: "190 KB" },
      { label: "Táblázat: nyitott döntéseim listája", kind: "xlsx", size: "64 KB" },
    ],
    comments: [
      {
        id: "gyors-es-lassu-dontesek-c1",
        memberId: "m07",
        text: "Besoroltam a tizennégy nyitott ügyemet. Kilencet még aznap délután lezártam vagy átadtam a diszpécsernek, kettőről viszont kiderült, hogy eddig félvállról kezeltem.",
        daysAgo: 5,
      },
      {
        id: "gyors-es-lassu-dontesek-c2",
        memberId: "m15",
        text: "A holnap déli mondatot kipróbáltam egy eladónál, aki estére kért választ. Szó nélkül belement, én meg másnapra észrevettem egy pontot a szerződésben, amit este biztosan átugrottam volna.",
        daysAgo: 3,
      },
    ],
  },

  "a-halogatott-dontes-ara": {
    text: `A meg nem hozott döntés is döntés, csak nem te hozod meg, hanem az idő. És az idő ritkán dönt a javadra. A halogatás azért veszélyes, mert az ára egyetlen számlán sem jelenik meg. Nincs olyan sor a kimutatásban, hogy „fél évig nem mertem lépni”.

Pedig fizetsz érte, három helyen is. Fizet a csapatod, mert aki rád vár, az addig félgőzzel dolgozik, és a legjobb embereid érzik meg elsőként a bizonytalanságot. Fizet a mozgástered, mert ami tavasszal még öt lehetőség volt, az őszre kettő. És fizetsz te magad, mert egy nyitva hagyott nagy döntés akkor is foglalja a fejed, amikor éppen nem gondolsz rá. Sok vezető azt hiszi, fáradt. Valójában négy lezáratlan ügyet cipel.

A legismertebb példa az a kulcsember, akiről hónapok óta tudod, hogy nincs a helyén. Minden hónap, amíg nem lépsz, többe kerül, mint maga a nehéz beszélgetés.

Fontos különbség: a tudatos várakozás nem halogatás. Ha meg tudod mondani, milyen információra vársz és meddig, akkor vársz. Ha nem tudod, akkor halogatsz.

Írd össze azokat a döntéseidet, amelyek harminc napnál régebben állnak. Mindegyik mellé írj egy becsült havi árat, pénzben vagy energiában, és egy dátumot, ameddig döntesz. A listát hozd el a kiscsoportos alkalomra.`,
    resources: [
      { label: "Táblázat: halogatott döntések és a havi áruk", kind: "xlsx", size: "72 KB" },
    ],
    comments: [
      {
        id: "a-halogatott-dontes-ara-c1",
        memberId: "m11",
        text: "A műhelyvezetőm esete szóról szóra ez. Kiszámoltam a garanciális visszajövetelek alapján, mennyibe kerül havonta, hogy nem beszéltem vele. Péntekre kitűztem a beszélgetést.",
        daysAgo: 1,
      },
      {
        id: "a-halogatott-dontes-ara-c2",
        memberId: "m08",
        text: "Négy tételem lett, a legrégebbi tizenegy hónapos. A várakozás és a halogatás közti különbség sokat segített, mert egyiknél sem tudtam megmondani, mire várok.",
        daysAgo: 0,
      },
    ],
  },

  "dontesi-naplo": {
    text: `Az emlékezeted nem megbízható tanú a saját döntéseid ügyében. Ha jól sült el valami, utólag úgy emlékszel, hogy előre láttad. Ha rosszul, akkor úgy, hogy nem lehetett tudni. Így viszont évekig hozhatsz nagy döntéseket anélkül, hogy bármit tanulnál belőlük. A döntési napló ezt a kört szakítja meg.

Nem kell hozzá más, mint egy füzet vagy egy táblázat, és döntésenként tíz perc. Csak a nagyobb tétű döntéseket írd be, havonta ez jellemzően kettő-négy. Amit rögzíts, még a döntés *előtt*:

- miről döntök, egy mondatban
- mit tudok most, és mit nem tudok
- milyen lehetőségeket vetettem el, és miért
- mire számítok, és mikorra kellene látszania
- milyen állapotban vagyok: kipihent, sürgetett, dühös, megkönnyebbült
- mikor nézek rá újra

Az utolsó előtti sor a legértékesebb. Fél év után kirajzolódik, milyen állapotban hozod a jó döntéseidet, és milyenben a drágákat. Van, akinél a péntek délután a minta, van, akinél az, hogy mindig egy kellemetlen beszélgetés után dönt nagyot.

A napló másik haszna, hogy szétválasztja a döntés minőségét az eredménytől. Lehet jó döntésből rossz eredmény, és fordítva. Ha le van írva, mit tudtál akkor, tisztességesen tudod megítélni magad.

Nyisd meg a sablont, és írd be az első bejegyzést arról a döntésről, ami most a leginkább nyomaszt. Negyedévente együtt is visszanézünk a kiscsoportos alkalmon.`,
    resources: [
      { label: "Sablon: döntési napló", kind: "xlsx", size: "88 KB" },
      { label: "Sablon: döntési napló, nyomtatható változat", kind: "pdf", size: "160 KB" },
      { label: "Munkalap: negyedéves visszatekintés a naplóra", kind: "docx", size: "96 KB" },
    ],
    comments: [
      {
        id: "dontesi-naplo-c1",
        memberId: "m14",
        text: "Az állapot rovat engem is meglepett. Három bejegyzés után látszik, hogy az árengedményeket mindig sürgetve, két ügyfélhívás között adom meg.",
        daysAgo: 6,
      },
      {
        id: "dontesi-naplo-c2",
        memberId: "m13",
        text: "Táblázatban vezetem, a visszanézés dátumát beírom a naptárba is, különben sosem nyitnám meg újra. Az első bejegyzésem egy raktárbérlés lett.",
        daysAgo: 4,
      },
    ],
  },

  "kulso-szem": {
    text: `Minél feljebb vagy a cégedben, annál kevesebben mondanak neked igazat. Nem rosszindulatból. A kollégáid tőled kapják a fizetésüket, a családod félt, a barátaid drukkolnak. Nagy döntés előtt ezért nem az a kérdés, van-e kivel beszélned, hanem az, hogy van-e olyan ember, akinek nem fűződik érdeke a válaszodhoz.

Én mindig társakkal építettem céget, részben éppen emiatt. Egy jó társ belelát abba, amit te már nem veszel észre. De társ nélkül is ki lehet alakítani ezt a kört. Akit érdemes kérdezni:

- nincs tétje abban, hogyan döntesz
- volt már hasonló helyzetben, és nem csak olvasott róla
- inkább kérdez, mint tanácsol
- el mer viselni egy kis feszültséget veled szemben

Legalább ilyen fontos az időzítés. Ha belül már döntöttél, nem külső szemet keresel, hanem megerősítést, és meg is fogod találni. Akkor kérdezz, amikor még tényleg nyitott vagy.

És figyelj arra, hogyan adod elő. Mondd el a helyzetet úgy, hogy nem árulod el, merre hajlasz. Aztán ne azt kérdezd, mit tenne a helyedben, hanem azt, hogy mit nem látsz. Az első kérdésre véleményt kapsz, a másodikra vakfoltot.

Írj fel három nevet, akik megfelelnek a fenti listának. Ha nincs meg a három, az önmagában fontos felismerés, és a kiscsoportos alkalom részben ezt a hiányt pótolja.`,
    resources: [
      { label: "Munkalap: az én három külső szemem", kind: "pdf", size: "170 KB" },
      { label: "Sablon: így mutasd be a helyzetet elfogultság nélkül", kind: "docx", size: "82 KB" },
    ],
    comments: [
      {
        id: "kulso-szem-c1",
        memberId: "m10",
        text: "Két nevet tudtam felírni, és az egyikről rájöttem, hogy mindig azt mondja, amit hallani szeretnék. A mit nem látok kérdést már kipróbáltam egy nagy megbízás előtt, egészen más beszélgetés lett belőle.",
        daysAgo: 7,
      },
      {
        id: "kulso-szem-c2",
        memberId: "m09",
        text: "Családi borászatban ez különösen nehéz, mert mindenkinek van tétje. Péter, szerinted működhet külső szemként egy másik borvidék termelője?",
        daysAgo: 5,
      },
      {
        id: "kulso-szem-c3",
        memberId: "m01",
        text: "Zoltán, igen, sőt gyakran ő a legjobb választás: érti a szakmát, de nem a te piacodon él. Egyet ellenőrizz, hogy inkább kérdez-e, mint tanácsol.",
        daysAgo: 4,
      },
    ],
  },

  "a-legrosszabb-forgatokonyv": {
    text: `A félelem addig a legnagyobb, amíg nincs körvonala. „Mi lesz, ha nem jön be” — ez a mondat hetekig tud ülni az ember gyomrán, és közben semmit sem mond. Amint leírod, pontosan mi történne, mennyibe kerülne és mit lépnél rá, a félelemből feladat lesz. Feladattal pedig tudsz mit kezdeni.

Nagy tétű döntés előtt ezt az öt lépést szoktam végigvinni, írásban:

1. Mi a legrosszabb, ami reálisan megtörténhet? Ne a világvégét írd le, hanem azt, amire józanul van esély.
2. Miből látnám időben, hogy efelé tartunk? Keress két-három korai jelet.
3. Mi lenne akkor az első három lépésem?
4. Mit tehetek már most, hogy kisebb legyen a kár?
5. Együtt tudnék élni vele?

Az ötödik a döntő. Ha a válasz igen, a félelem nagy része elpárolog, és tisztábban látod a lehetőséget is. Ha a válasz nem, akkor nem feltétlenül a döntés rossz, hanem a tét túl nagy. Ilyenkor azt keresd, hogyan lehet kisebb lépésben, kisebb összeggel, kijárattal belevágni.

Egy dolgot szinte mindenki kihagy: ugyanezt végig kell vinni arra az esetre is, ha nem lépsz. A maradásnak is van legrosszabb forgatókönyve, csak lassabban érkezik, ezért kevésbé ijesztő.

Töltsd ki a munkalapot mindkét irányra arra a döntésre, amely most előtted áll, és tedd egymás mellé a két oldalt.`,
    resources: [
      { label: "Munkalap: a legrosszabb forgatókönyv öt lépésben", kind: "pdf", size: "230 KB" },
      { label: "Táblázat: korai figyelmeztető jelek követése", kind: "xlsx", size: "58 KB" },
    ],
    comments: [
      {
        id: "a-legrosszabb-forgatokonyv-c1",
        memberId: "m16",
        text: "A második üzlet megnyitásánál az ötödik kérdésre nem volt a válaszom. Végül fél évre béreltem ki a helyet vásárlás helyett, így már igen lett belőle.",
        daysAgo: 8,
      },
      {
        id: "a-legrosszabb-forgatokonyv-c2",
        memberId: "m12",
        text: "A maradás forgatókönyvét eddig sosem írtam le. Kiderült, hogy a nem bővítek változat három éven belül rosszabb, mint amitől a bővítésnél félek.",
        daysAgo: 3,
      },
    ],
  },

  "strategiai-fordulopont": {
    text: `Van a cégek életében olyan pont, amikor az, ami idáig elhozott, már nem visz tovább. Változik a piac, kiöregszik a fő terméked, egyetlen nagy ügyfélen lóg a forgalom, vagy egyszerűen kinőtted azt, amit építettél. Ez a legnehezebb döntési helyzet, mert a jelek sokáig kétértelműek, és a régi üzlet közben még pénzt hoz. Nincs az a pillanat, amikor megszólal a csengő.

Amire 25 év alatt megtanultam figyelni:

- egyre több munkával tartod ugyanazt az eredményt
- a legjobb ügyfeleid mást kérnek, mint amit kínálsz
- a legjobb embereid mást szeretnének csinálni, mint amire felvetted őket
- téged már nem érdekel az, amiből élsz

Egy rossz negyedév még nem fordulópont. A nyomás ilyenkor két irányba torzít: vagy pánikból mindent felforgatnál, vagy görcsösen kapaszkodsz a régibe. Ezért válaszd szét a kettőt. Ami egyszeri, arra reagálj. Ami három-négy negyedéve egy irányba mutat, arról dönts.

A kérdés, amit ilyenkor felteszek: ha ma kezdeném, azzal a tudással, ami most megvan, ugyanezt építeném? Ha a válasz nem, az még nem azt jelenti, hogy holnap mindent lebontasz. Azt jelenti, hogy elindítasz egy-két kis tétű kísérletet az új irányba, előre leírt feltételekkel és dátummal.

Ezt a döntést ne egyedül hozd meg. Írd le a fenti kérdésre adott őszinte válaszodat egy oldalban, és hozd el a kiscsoportos alkalomra.`,
    resources: [
      { label: "Munkalap: fordulópont vagy rossz negyedév", kind: "pdf", size: "250 KB" },
      { label: "Sablon: kis tétű kísérlet terve feltételekkel és dátummal", kind: "docx", size: "104 KB" },
    ],
    comments: [
      {
        id: "strategiai-fordulopont-c1",
        memberId: "m13",
        text: "A négy jelből három stimmel nálunk, a lakossági telepítések piaca két éve szűkül. Az ipari karbantartás felé indítok egy kísérletet három ügyféllel, év végi kiértékeléssel.",
        daysAgo: 10,
      },
      {
        id: "strategiai-fordulopont-c2",
        memberId: "m04",
        text: "A ha ma kezdeném kérdésre egy oldal helyett három lett. A céges rendezvényeket ma is ugyanígy építeném, a többit őszintén szólva nem.",
        daysAgo: 6,
      },
    ],
  },

  "kilepes-vagy-kitartas": {
    text: `Egy üzletágból, egy projektből vagy egy társas viszonyból kilépni azért olyan nehéz, mert mindkét irányban ott a szégyen. Ha kiszállsz, feladtad. Ha maradsz, és nem jön be, makacs voltál. Közben a kitartás lehet egyszerű félelem a veszteség kimondásától, a kilépés pedig lehet menekülés egy nehéz időszak elől. Kívülről a kettőt nem lehet megkülönböztetni. Belülről igen, ha jó kérdéseket teszel fel.

Az első: amit eddig beletettél, az már elment, akárhogy döntesz. Pénz, évek, éjszakák. Ez fáj, de nem érv. A kérdés mindig az, hogy a *következő* forintot és a következő évet érdemes-e ide tenni.

A második: ha ma valaki ugyanezt az ügyet kínálná fel neked, ebben az állapotában, belevágnál? Ha nem, akkor miért vagy még benne?

A harmadik a leghasznosabb. Írd le előre, minek kell teljesülnie hat hónap múlva ahhoz, hogy megérje folytatni. Számokkal, dátummal. Azért előre, mert nyomás alatt mindenki arrébb tolja a saját kapufáját, és mindig lesz egy újabb ok még egy negyedévre.

> Kiért vagy miért maradok benne valójában?

Ha társakkal dolgozol, erről ne a válság közepén beszéljetek először. A kilépés feltételeit akkor kell rögzíteni, amikor még minden jól megy, és senki sem sértődik meg a kérdésen.

Válaszd ki azt az egy ügyet, amelynél ez a lecke eszedbe jutott, és töltsd ki rá a feltétellapot.`,
    resources: [
      { label: "Sablon: folytatási feltételek hat hónapra", kind: "docx", size: "92 KB" },
      { label: "Ellenőrzőlista: kilépési feltételek társas cégben", kind: "pdf", size: "200 KB" },
    ],
    comments: [
      {
        id: "kilepes-vagy-kitartas-c1",
        memberId: "m08",
        text: "A vállalati nyelvoktatás négy éve viszi az energiámat, és alig hoz valamit. Leírtam a hat hónapos feltételeket, és most először érzem úgy, hogy bármi lesz a vége, rendben leszek vele.",
        daysAgo: 9,
      },
      {
        id: "kilepes-vagy-kitartas-c2",
        memberId: "m17",
        text: "A társammal tíz éve dolgozunk együtt, és sosem beszéltünk arról, mi van, ha egyikünk ki akar szállni. Múlt héten leültünk, kényelmetlen volt az első tíz perc, utána megkönnyebbülés.",
        daysAgo: 2,
      },
    ],
  },

  "a-dontes-utan": {
    text: `A döntés meghozatalával a munka fele van kész. A másik fele az, amit utána csinálsz, és a legtöbb jó döntés itt romlik el: a vezető döntött, de nem mondta ki rendesen, vagy kimondta, aztán két hét múlva láthatóan elbizonytalanodott. A csapat nem a szavaidból, hanem ebből olvas.

Az első negyvennyolc órában mondd el az érintetteknek három mondatban: mit döntöttél, miért, és mit jelent ez nekik. Nem kell, hogy mindenki egyetértsen. Azt kell tudniuk, hogy ez most eldőlt.

Aztán jön a nehezebb rész, a kétely. Éjjel kettőkor minden nagy döntés rossznak látszik. Ilyenkor egy kérdés segít: van új információm, vagy csak új szorongásom? Új információra újra lehet nyitni egy döntést, az nem gyengeség. Szorongásra nem. Arra való a naplódban a visszanézés dátuma: addig végrehajtasz, akkor értékelsz.

Amikor pedig értékelsz, ahhoz mérd magad, amit akkor tudtál, ne ahhoz, ahogy alakult. Aki csak az eredmény alapján ítéli meg a döntéseit, az egy szerencsés rossz döntésből rossz szokást csinál, egy balszerencsés jóból pedig óvatoskodást.

És még valami, amit vezetők ritkán engednek meg maguknak: egy nagy döntés után pihenj. Napokig, hetekig nyomás alatt voltál, a következő döntés minősége azon múlik, mennyire töltődsz vissza.

Nézd végig a naplódat a kurzus elejétől. Mi változott abban, ahogyan döntesz, és mi az az egy szokás, amit biztosan megtartasz?`,
    resources: [
      { label: "Sablon: a döntés kommunikálása három mondatban", kind: "docx", size: "76 KB" },
      { label: "Munkalap: utólagos értékelés, döntés és eredmény külön", kind: "pdf", size: "180 KB" },
    ],
    comments: [
      {
        id: "a-dontes-utan-c1",
        memberId: "m05",
        text: "Az új információ vagy új szorongás kérdést kiírtam az irodában a monitorom mellé. Az elmúlt hónapban kétszer akartam visszavonni egy döntést, és mindkétszer szorongás volt.",
        daysAgo: 4,
      },
      {
        id: "a-dontes-utan-c2",
        memberId: "m14",
        text: "A három mondatos közlést a saját csapatomon próbáltam ki egy átszervezésnél. Kevesebb kérdés jött, mint bármikor korábban, mert nem hagytam nyitva semmit.",
        daysAgo: 1,
      },
    ],
  },
};
