import type { LessonContent } from "../types";

export const CONTENT: Record<string, LessonContent> = {
  "adj-mielott-kersz": {
    text: `A legtöbb vállalkozó akkor kezd el kapcsolatot építeni, amikor kevés a munka. Elmegy egy eseményre, kiosztja a névjegyeit, és várja, hogy csörögjön a telefon. Nem fog. Az emberek megérzik, ha valaki csak vinni jött, és ilyenkor udvariasan bezárnak.

25 év alatt sokszor láttam, hogy a jó háló fordítva épül. Előbb adsz valamit, ami a másiknak számít, és csak jóval később derül ki, mi jön vissza belőle. Nem is mindig attól, akinek adtál. Ez nem önzetlenség, és nem is taktika. Így működik a bizalom: aki megtapasztalta, hogy figyelsz rá, az szívesen gondol rád, amikor valakinek éppen te kellesz.

Adni nem pénzbe kerül, hanem figyelembe. Néhány dolog, amit szinte bárkinek adhatsz:

- egy bemutatás valakinek, akivel érdemes beszélnie
- egy hasznos információ, ami az ő szakmáját érinti
- egy őszinte visszajelzés, ha kéri
- egy ajánlás, ha ismered a munkáját, és vállalod érte a nevedet

Egy dologra figyelj: ne vezess fejben számlát. Ha adsz, és közben azt számolod, mikor jön vissza, a másik azt is megérzi. Adj annyit, amennyit jó szívvel tudsz, és ne többet, mert a sértődött adakozásból nem lesz kapcsolat. Erre a hétre: írj fel három embert a meglévő ismerőseid közül, és mindegyik mellé egy dolgot, amivel most segíteni tudsz neki. Aztán tedd meg úgy, hogy semmit nem kérsz cserébe.`,
    resources: [
      { label: "Munkalap: három ember, három segítség", kind: "pdf", size: "190 KB" },
      { label: "Ellenőrzőlista: mit tudsz adni pénz nélkül", kind: "pdf", size: "160 KB" },
    ],
    comments: [
      {
        id: "adj-mielott-kersz-c1",
        memberId: "m04",
        text: "Felírtam a három nevet, és az egyiknél rájöttem, hogy két éve csak akkor hívom, ha dekoratőr kell egy rendezvényre. Most összekötöttem egy helyszínnel, amelyik épp ilyet keresett. Jó érzés volt, hogy nem kértem semmit.",
        daysAgo: 6,
      },
      {
        id: "adj-mielott-kersz-c2",
        memberId: "m20",
        text: "A fejben vezetett számla nálam nagyon betalált. Volt egy kőműves ismerősöm, akinek sok munkát adtam, és megsértődtem, hogy nem jött vissza semmi. Pedig sosem mondtam el neki, kit keresek.",
        daysAgo: 4,
      },
    ],
  },

  "bemutatkozas-60-masodpercben": {
    text: `Amikor megkérdezik, mivel foglalkozol, a legtöbben a szakmájuk nevét mondják. Könyvelő vagyok. Webfejlesztő vagyok. Ez igaz, csak éppen semmit nem ad a másik kezébe. Könyvelőt mindenki ismer már egyet, és ebből a mondatból nem derül ki, miért éppen rád kellene emlékeznie.

Egy jó bemutatkozás nem rólad szól, hanem arról, akinek segítesz. Négy dolog legyen benne: kinek dolgozol, milyen gondját oldod meg az ő szavaival, egy rövid példa, amit maga elé tud képzelni, és az, hogy kit keresel most. Az utolsót hagyják ki a legtöbben, pedig ettől tudja a másik, kire gondoljon. Egy asztalosnál ez így hangzik:

> Beépített bútort készítek olyan családoknak, akiknél minden centi számít. Legutóbb egy hat négyzetméteres előszobába terveztem gardróbot. Olyan belsőépítészt keresek, akivel rendszeresen dolgozhatnék.

Ez nagyjából húsz másodperc, és sokszor ennyi elég is. A hatvan másodperc a felső határ, nem a cél. Ha egy mondatot ki tudsz húzni úgy, hogy nem hiányzik, húzd ki. A szakzsargont is: amit a vevőd nem mondana ki, azt te se mondd.

Írd le a saját változatodat, és mondd el hangosan háromszor, mert leírva más, mint kimondva. Aztán próbáld ki valakin, aki nem ismeri a szakmádat, és másnap kérdezd meg, mire emlékszik belőle. Amit visszamond, az a valódi bemutatkozásod. Ha nem az, amit szerettél volna, azon dolgozz tovább.`,
    resources: [
      { label: "Sablon: a bemutatkozásod négy eleme", kind: "docx", size: "140 KB" },
      { label: "Munkalap: három változat, egy győztes", kind: "pdf", size: "210 KB" },
    ],
    comments: [
      {
        id: "bemutatkozas-60-masodpercben-c1",
        memberId: "m22",
        text: "Eddig azt mondtam, hogy IT üzemeltetéssel foglalkozom, és láttam, ahogy kialszik a másik szeme. Most azt mondom, hogy húsz fő alatti irodáknál elintézem, hogy hétfő reggel minden működjön. Tegnap először kérdeztek vissza.",
        daysAgo: 3,
      },
      {
        id: "bemutatkozas-60-masodpercben-c2",
        memberId: "m25",
        text: "A másnapi visszakérdezés kijózanító volt. A barátnőm annyira emlékezett, hogy valamit fordítok. A szerződéseket és a határidőt, amire a legbüszkébb vagyok, meg sem említette.",
        daysAgo: 2,
      },
      {
        id: "bemutatkozas-60-masodpercben-c3",
        memberId: "m01",
        text: "Lilla, ez teljesen rendben van elsőre. Tedd a szerződéseket az első mondatba, és nézd meg, mi marad meg belőle legközelebb.",
        daysAgo: 1,
      },
    ],
  },

  "kit-keresel": {
    text: `Ha azt mondod, hogy bárki jó ügyfél, akinek honlap kell, azzal senkit nem juttatsz a másik eszébe. Az emberi emlékezet nem kategóriákban keres, hanem arcokban. Minél pontosabban írod le, kit keresel, annál valószínűbb, hogy valaki azt mondja: várj csak, ismerek egy ilyet.

Sokan attól félnek, hogy ha szűkítenek, lemaradnak a többi munkáról. A tapasztalatom az ellenkezője. Aki pontosan kér, az pontos ajánlást kap, a többi munka pedig ettől még ugyanúgy megtalálja. A szűkítés nem azt jelenti, hogy másnak nem dolgozol, hanem azt, hogy a másiknak könnyű dolga van veled.

Két kört érdemes külön leírnod. Az egyik a jó ügyfeled: milyen helyzetben van, amikor szüksége lesz rád, mekkora a cége, miről ismered fel. A másik kör legalább ilyen fontos: azok, akik előbb találkoznak vele, mint te. A belsőépítész ügyfele előbb beszél az ingatlanossal. A napelemes vevője előbb a kivitelezővel. Ha ezekkel az emberekkel jó viszonyban vagy, nem kell minden ügyfelet egyenként megkeresned.

Vedd elő az utolsó öt olyan ügyfeledet, akivel jó volt dolgozni, és akin kerestél is. Írd melléjük, hogyan jutottak el hozzád, és milyen helyzetben voltak éppen. Ami közös bennük, az a leírás, amit mostantól mondasz. Aki pedig többször is felbukkan a hogyan oszlopban, azzal ülj le egy kávéra.`,
    resources: [
      { label: "Munkalap: az utolsó öt jó ügyfeled", kind: "xlsx", size: "95 KB" },
      { label: "Sablon: kit keresek, egy bekezdésben", kind: "docx", size: "120 KB" },
    ],
    comments: [
      {
        id: "kit-keresel-c1",
        memberId: "m10",
        text: "Az öt ügyfélből három ugyanattól az ingatlanostól jött, és ezt eddig észre sem vettem. Jövő hétre megbeszéltünk egy kávét.",
        daysAgo: 5,
      },
      {
        id: "kit-keresel-c2",
        memberId: "m13",
        text: "Nálam a tetőfedők és a villanyszerelők a második kör, ők járnak a háznál előttem. Egy kérdésem van: hánynál többet nem érdemes egyszerre figyelni?",
        daysAgo: 2,
      },
    ],
  },

  "az-elso-beszelgetes": {
    text: `Egy eseményre nem eladni mész, és nem is névjegyet gyűjteni. Azért mész, hogy két vagy három emberrel tényleg beszélj. Ha ennyi sikerül, jó estéd volt. Ha húsz névjegy van a zsebedben, és egyik archoz sem tudsz történetet kötni, akkor csak elfáradtál.

Érkezz korán. Az első negyedórában még kevesen vannak, senki nem áll zárt körben, és aki egyedül ácsorog, az hálás, ha megszólítod. Nem kell hozzá ügyes nyitómondat. Elég annyi, hogy mi hozta ide, vagy hogy ismeri-e a szervezőt. Utána kérdezz, és figyelj arra, amit válaszol. Ezek a kérdések szinte mindig működnek:

- Min dolgozol mostanában a legtöbbet?
- Milyen ügyfélnek örülnél most igazán?
- Mi a nehéz ebben a szakmában, amit kívülről nem látni?

A saját bemutatkozásodat akkor mondd el, amikor kérdeznek. Addigra tudni fogod, melyik része érdekli a másikat. Ha pedig látod, hogy nincs miről beszélnetek, nyugodtan búcsúzz el. Annyi elég, hogy örültél a beszélgetésnek, és még szeretnél köszönni valakinek. Ez nem udvariatlanság, mindkettőtök idejét tiszteled vele.

Ami az esemény után történik, az többet számít, mint ami ott. Két napon belül írj annak, akivel jó volt beszélni, és hivatkozz valamire, amit mondott. Ha ígértél valamit, azzal kezdd. Aki ezt megteszi, az már ezzel kilóg a sorból.`,
    resources: [
      { label: "Ellenőrzőlista: esemény előtt, közben, után", kind: "pdf", size: "170 KB" },
      { label: "Sablon: utókövető üzenet két napon belül", kind: "docx", size: "110 KB" },
    ],
    comments: [
      {
        id: "az-elso-beszelgetes-c1",
        memberId: "m23",
        text: "Fotósként mindig a gép mögé bújok az eseményeken, úgyhogy a korai érkezés nekem nagy segítség. Múlt héten két emberrel beszéltem húsz perc alatt, és egyikük már írt is.",
        daysAgo: 7,
      },
      {
        id: "az-elso-beszelgetes-c2",
        memberId: "m18",
        text: "A búcsúzós mondatot régóta kerestem. Eddig vagy beragadtam egy beszélgetésbe, vagy a telefonomra néztem, ami sokkal rosszabb.",
        daysAgo: 3,
      },
    ],
  },

  "hogyan-kerj-ajanlast": {
    text: `Az ajánláskérés azért kínos a legtöbbünknek, mert rosszkor és rosszul csináljuk. A számla mellé odaírjuk, hogy ha tudsz valakit, szólj. Erre mindenki azt feleli, hogy persze, és senki nem szól. Nem rosszindulatból. Egyszerűen nem adtunk neki semmit, amin elindulhatna.

A jó pillanat nem a munka vége, hanem az, amikor az ügyfél maga mondja ki, hogy elégedett. Amikor megköszöni, amikor elmeséli, mi lett jobb. Ilyenkor nem szívességet kérsz, hanem folytatod azt, amit ő kezdett el. A kérés pedig legyen olyan pontos, mint a bemutatkozásod:

> Örülök, hogy így sikerült. Olyan húsz fő körüli gyártó cégeket keresek, ahol most vált vezetőt a család. Ismersz ilyet, akinek szívesen bemutatnál?

Figyeld meg, mi van ebben. Egy konkrét kép, akire rá lehet ismerni. És bemutatást kérsz, nem telefonszámot. Ha csak egy számot kapsz, hideg hívás lesz belőle egy ismerős nevével. Ha az ügyfeled ír két mondatot mindkettőtöknek, akkor már bizalommal indulsz.

Tedd könnyűvé a dolgát. Ha kéri, írd meg helyette a bemutató üzenetet, neki csak el kell küldenie. Utána pedig mindig jelezz vissza, mi lett a beszélgetésből, akkor is, ha semmi. Aki ajánlott, az a nevét adta hozzád, és tudni szeretné, jól tette-e. Aki visszajelzést kap, az legközelebb is ajánl. Nézd végig az elmúlt fél év munkáit. Kitől hallottál őszinte köszönetet? Tőle kérj a héten.`,
    resources: [
      { label: "Sablon: ajánláskérő mondatok három helyzetre", kind: "docx", size: "130 KB" },
      { label: "Sablon: bemutató üzenet, amit az ügyfeled elküldhet", kind: "docx", size: "105 KB" },
      { label: "Munkalap: kitől kérhetsz most ajánlást", kind: "pdf", size: "180 KB" },
    ],
    comments: [
      {
        id: "hogyan-kerj-ajanlast-c1",
        memberId: "m06",
        text: "A rendelőben sosem mertem kérni, mert tolakodásnak éreztem. Most egy páciens maga mondta, hogy évek óta először nem fél a fogorvostól, és megkérdeztem, van-e a családban, aki ugyanígy halogatja. Kettőt is mondott.",
        daysAgo: 8,
      },
      {
        id: "hogyan-kerj-ajanlast-c2",
        memberId: "m03",
        text: "A bemutatás és a telefonszám közti különbség sokat ért. Eddig számot kértem, és a hívások fele el sem jutott a beszélgetésig.",
        daysAgo: 4,
      },
    ],
  },

  "hogyan-adj-ajanlast": {
    text: `Amikor ajánlasz valakit, a saját nevedet adod kölcsön. Ha jól sül el, két embernél nőtt a hiteled. Ha rosszul, akkor nem azt mondják, hogy a festő késett, hanem azt, hogy te ajánlottad. Ezért az ajánlás nem udvariassági gesztus, és nem is viszonzás. Csak azt ajánld, akinek a munkáját láttad, vagy akiről megbízható embertől hallottál jót. Ha egyik sem igaz, mondd azt, hogy ismerek valakit, de még nem dolgoztam vele. Ez tipp, nem ajánlás, és tisztességes a kettőt külön kezelni.

A gyenge ajánlás így hangzik: hívd fel, mondd, hogy én küldtelek. Ezzel a munkát a másikra hagytad, és egyik fél sem tudja, mire számítson. A jó ajánlásnak három lépése van:

1. Megkérdezed azt, akinek a gondja van, hogy szeretné-e a bemutatást.
2. Megkérdezed azt, akit ajánlanál, hogy van-e most ideje és kedve ehhez a munkához.
3. Összekötöd őket egy közös üzenetben, két mondattal arról, ki kicsoda, és miért érdemes beszélniük.

A két kérdés fél percbe kerül, és rengeteg kínos helyzettől megkímél. Előfordul, hogy a szakember tele van, vagy az ügyfél már mással tárgyal.

Két hét múlva kérdezz rá mindkettőnél, mi lett belőle. Ebből tudod meg, kit ajánlhatsz jó szívvel legközelebb is. És ebből látják ők, hogy neked ez nem egy elintézett üzenet volt, hanem fontos.`,
    resources: [
      { label: "Sablon: közös bemutató üzenet", kind: "docx", size: "100 KB" },
      { label: "Ellenőrzőlista: mielőtt a nevedet adod valakihez", kind: "pdf", size: "150 KB" },
    ],
    comments: [
      {
        id: "hogyan-adj-ajanlast-c1",
        memberId: "m15",
        text: "Ingatlanosként hetente kérnek tőlem festőt, ügyvédet, költöztetőt. Eddig mindenkinek mondtam egy nevet, most kettéválasztottam a listát: akikért vállalom a nevem, és akiket csak ismerek. Az első lista rövidebb lett, mint hittem.",
        daysAgo: 5,
      },
      {
        id: "hogyan-adj-ajanlast-c2",
        memberId: "m24",
        text: "A második lépést mindig kihagytam. Tavasszal háromszor ajánlottam egy medenceépítőt úgy, hogy közben őszig tele volt, és mindhárom ember nálam reklamált.",
        daysAgo: 1,
      },
    ],
  },

  "egy-az-egyben-talalkozok": {
    text: `Egy eseményen megismersz valakit. Megbízni egy nyugodt óra alatt kezdesz benne, amikor csak ketten ültök egy asztalnál. Az ajánlások nagy része nem a teremben születik, hanem ezeken a beszélgetéseken, mert itt derül ki, hogy a másik hogyan gondolkodik az ügyfeleiről és a munkájáról.

Ez nem értékesítési találkozó. Ha a kávé felénél előkerül az árlistád, a másik joggal érzi úgy, hogy becsaptad. A cél annyi, hogy az óra végére mindketten tudjátok, kit küldhettek a másikhoz, és miről ismeritek fel. Ehhez érdemes egy laza keretet tartani: az idő fele az övé, a fele a tiéd. Aki hagyja, hogy a másik végigbeszélje az órát, az udvarias volt, de nem épített kapcsolatot.

Néhány kérdés, amit mindig felteszek:

- Ki neked a jó ügyfél, és miről ismerem fel, ha találkozom vele?
- Mit mond az az ember, akinek éppen rád van szüksége?
- Min dolgozol most, amiben jól jönne egy ismeretség?
- Kinek ne ajánljalak, mert nem neked való munka?

Az utolsó kérdés szokatlan, de sokat elárul, és a másik hálás lesz érte. Ne álljatok fel úgy, hogy majd beszélünk. Mindketten mondjatok egy konkrét dolgot, amit a következő két hétben megtesztek a másikért, és írd fel ott helyben. Heti egy ilyen találkozó bőven elég. Egy év alatt ez ötven ember, aki tényleg tudja, mit csinálsz.`,
    resources: [
      { label: "Sablon: egyórás találkozó menete és kérdései", kind: "pdf", size: "200 KB" },
      { label: "Táblázat: találkozók és vállalások követése", kind: "xlsx", size: "85 KB" },
    ],
    comments: [
      {
        id: "egy-az-egyben-talalkozok-c1",
        memberId: "m19",
        text: "Leültem egy virágkötővel, akivel három éve dolgozunk egymás mellett az esküvőkön, és most először kérdeztem meg, kinek ne ajánljam. Kiderült, hogy a kis létszámú esküvőket nem szívesen vállalja, én pedig pont azokat küldtem neki.",
        daysAgo: 6,
      },
      {
        id: "egy-az-egyben-talalkozok-c2",
        memberId: "m14",
        text: "A fele-fele idő nálam a nehéz, tanácsadóként hajlamos vagyok végig kérdezni. Most tudatosan elmondtam a saját részemet is, és a végén ő ajánlott fel egy bemutatást.",
        daysAgo: 2,
      },
    ],
  },

  "a-kapcsolat-apolasa": {
    text: `A legtöbb kapcsolat nem veszekedés miatt hal el, hanem csendben. Fél évig nem beszéltek, aztán már kínos írni, mert érződne rajta, hogy kell valami. A megoldás nem több lelkesedés, hanem egy rendszer, ami akkor is működik, amikor tele vagy munkával. Pont akkor szoktuk elhanyagolni a hálót, és három hónappal később ezért lesz kevés a munka.

Írd össze egy táblázatba azokat, akik számítanak, és oszd őket három körbe:

1. Szűk kör, tíz-tizenöt ember: havonta legyen köztetek valami érintkezés.
2. Középső kör, harminc-negyven ember: negyedévente.
3. Tág kör: évente kétszer, és amikor okod van rá.

Mindenki mellé kerüljön oda, mikor beszéltetek utoljára, és miről. Ennyi elég, nem kell hozzá külön szoftver. A lényeg az, hogy mivel jelentkezel. A mi újság veled üzenet terhet tesz a másikra, mert neki kell kitalálnia, mit feleljen. Jelentkezz okkal: láttál valamit, ami őt érinti. Eszedbe jutott valakiről, akit érdemes megismernie. Rákérdezel arra, amiről legutóbb mesélt, hogy mi lett a pályázattal, az új kollégával, a költözéssel. Ebből látja, hogy figyeltél.

Foglalj le a naptáradban heti fél órát erre, mindig ugyanakkor. Nyisd meg a táblázatot, nézd meg, kinél járt le az idő, és írj három embernek. Fél óra nem sok, de egy év alatt ez százötven jelentkezés, és egyik sem kérés.`,
    resources: [
      { label: "Táblázat: kapcsolati lista három körrel", kind: "xlsx", size: "120 KB" },
      { label: "Munkalap: tíz ok, amiért írhatsz valakinek", kind: "pdf", size: "175 KB" },
    ],
    comments: [
      {
        id: "a-kapcsolat-apolasa-c1",
        memberId: "m05",
        text: "Kivitelezőként szezonban élek, tavasztól őszig senkinek nem írok, télen meg csodálkozom. Péntek reggel hétre tettem be a fél órát, mert akkor még nem csörög a telefon.",
        daysAgo: 9,
      },
      {
        id: "a-kapcsolat-apolasa-c2",
        memberId: "m08",
        text: "Összeírtam a listát, és a szűk körömben negyvenegy név lett. Ennyivel biztosan nem tudok havonta beszélni. Mi alapján húzzam meg a határt?",
        daysAgo: 3,
      },
      {
        id: "a-kapcsolat-apolasa-c3",
        memberId: "m01",
        text: "Judit, kérdezd meg magadtól, kinek vennéd fel a telefont vasárnap este is. Az a szűk kör. A többiek a középsőbe valók, és ott is jó helyen vannak.",
        daysAgo: 2,
      },
    ],
  },

  "strategiai-partnerek": {
    text: `Van a hálódban néhány ember, aki többet ér az összes többinél. Nem azért, mert befolyásos, hanem mert ugyanannak az ügyfélnek dolgozik, mint te, csak mást ad neki. A könyvelő és a jogász. Az esküvőszervező és a fotós. A gépész és a villanyszerelő. Ha két ilyen szakember megbízik egymásban, mindketten rendszeresen kapnak olyan ügyfelet, akit nem kellett megkeresniük.

A cégeimet mindig társakkal építettem, ezért korán megtanultam, hogy a jó partnerség nem szimpátián múlik, hanem azon, hogy néhány dologban egyformán gondolkodtok-e. Mielőtt valakit a partneredként kezelsz, három kérdésre keress választ. Ugyanazt az ügyfelet szolgáljátok-e, hasonló árszinten. Hasonló-e a minőség, amit kiadtok a kezetekből. És hogyan viselkedik, amikor valami félremegy, mert előbb-utóbb félre fog.

Ne szerződéssel kezdjétek, hanem egy közös munkával. Egyetlen ügyfél, akinél mindketten ott vagytok. Ebből több kiderül, mint tíz kávéból. Ha jól ment, akkor üljetek le, és beszéljétek meg előre a kényes részeket: jár-e jutalék, vagy kölcsönösségre építetek. Ki tartja a kapcsolatot az ügyféllel. Mi történik, ha az ügyfél egyikőtökre panaszkodik a másiknál. Amit most kimondtok, azon később nem kell összevesznetek.

Három-öt ilyen partner bőven elég, többre nem is jut figyelmed. Írd fel, kik dolgoznak ugyanannak az ügyfélnek, mint te, és jelöld meg, kivel próbálnál ki egy közös munkát.`,
    resources: [
      { label: "Munkalap: ki dolgozik ugyanannak az ügyfélnek", kind: "pdf", size: "220 KB" },
      { label: "Ellenőrzőlista: amit egy partnerrel előre tisztázz", kind: "pdf", size: "165 KB" },
    ],
    comments: [
      {
        id: "strategiai-partnerek-c1",
        memberId: "m05",
        text: "A gépész és a villanyszerelő példája szó szerint az életem. Van egy villanyszerelő, akivel évek óta egymás után dolgozunk ugyanazokon a házakon, és még sosem beszéltük meg, hogy ez partnerség. Most megbeszéljük.",
        daysAgo: 7,
      },
      {
        id: "strategiai-partnerek-c2",
        memberId: "m17",
        text: "Alkuszként az ingatlanos és a hitelügyintéző a természetes párom. A jutalék kérdését eddig kerültem, mert kényelmetlen volt, és pont ebből lett tavaly egy sértődés.",
        daysAgo: 4,
      },
    ],
  },

  "sajat-kor-epitese": {
    text: `Eljön az a pont, amikor nem elég mások eseményeire járni. Ott azokkal találkozol, akiket más hívott meg, olyan keretek között, amiket más talált ki. Ha magad hívsz össze néhány embert, te döntöd el, kik ülnek az asztalnál, és mindenki úgy emlékszik rád, mint aki összehozta őket. Ez a szerep többet ér bármilyen bemutatkozásnál.

Nem kell nagyra gondolni. Hat-nyolc vállalkozó, mindegyik más szakmából, hogy ne legyen köztük versengés, és nagyjából hasonló ügyfélkörrel, hogy legyen mit adniuk egymásnak. Havonta egy reggeli, mindig ugyanazon a napon, másfél óra. A rendszeresség fontosabb, mint a helyszín. Az alkalmaknak legyen egyszerű menete:

1. Mindenki elmondja egy percben, min dolgozik, és kit keres éppen.
2. Egy ember tíz percben bemutatja a munkáját egy valódi eseten keresztül.
3. Körben mindenki mond egy kérést vagy egy felajánlást.

A harmadik pont a lényeg. Ettől lesz a reggeliből kör, és nem csak kellemes beszélgetés. Néhány szabályt mondj ki az elején. Ami az asztalnál elhangzik, ott marad. Aki háromszor nem jön el szó nélkül, annak a helyét más kapja. Új tagot csak akkor hívtok, ha mindenki egyetért. Ezek nem szigorúságból kellenek, hanem azért, hogy meg merjetek nyílni egymás előtt.

Kezdd néggyel. Írd fel azt a három embert, akivel szívesen ülnél le minden hónapban, és a héten kérdezd meg őket.`,
    resources: [
      { label: "Sablon: a havi reggeli menete", kind: "pdf", size: "185 KB" },
      { label: "Sablon: meghívó az első alkalomra", kind: "docx", size: "115 KB" },
      { label: "Ellenőrzőlista: a kör alapszabályai", kind: "pdf", size: "140 KB" },
    ],
    comments: [
      {
        id: "sajat-kor-epitese-c1",
        memberId: "m09",
        text: "Villányban adja magát a helyszín, a pincében van egy asztal nyolc embernek. Egy szállásadót, egy séfet és egy túraszervezőt hívtam elsőre, mindhárman igent mondtak.",
        daysAgo: 5,
      },
      {
        id: "sajat-kor-epitese-c2",
        memberId: "m21",
        text: "Nálam minden online zajlik, a tagok négy városban élnek. Működhet ez a forma videóhívásban is, vagy ott elvész a lényege?",
        daysAgo: 2,
      },
    ],
  },

  "online-jelenlet": {
    text: `Mielőtt valaki felhív egy ajánlás után, rád keres. Amit talál, az vagy megerősíti, amit hallott rólad, vagy elbizonytalanítja. Az online jelenléted első dolga tehát nem az, hogy idegeneket hozzon, hanem hogy ne rontsa el azt, amit a személyes kapcsolataid felépítettek.

Kezdd a profiloddal. Az első két sora legyen ugyanaz, amit a bemutatkozásodnál kidolgoztál: kinek segítesz, és miben. Nem a beosztásod és nem a végzettséged. Legyen rajta egy friss fénykép, amin felismernek, amikor belépsz egy terembe. És legyen egyértelmű, hogyan lehet elérni téged. Utána jön a rendszeres rész, amihez heti egy óra elég:

- hetente egy rövid bejegyzés egy valódi helyzetről a munkádból, és arról, mit tanultál belőle
- néhány érdemi hozzászólás azoknál, akik a hálódban fontosak
- egy-két személyes üzenet annak, akivel élőben is szívesen beszélnél

A hozzászólás többet ér, mint gondolnád. Aki rendszeresen értelmesen reagál a másik gondolataira, azt a másik ismerősnek érzi, mire először találkoznak. A kedvelések számát viszont ne figyeld. Nem az a kérdés, hányan látták, hanem hogy az a tíz ember látta-e, aki számít.

Az online tér folyosó, nem tárgyaló. Arra jó, hogy észrevegyétek egymást, de a bizalom beszélgetésben épül. Ha valakivel háromszor váltottál üzenetet, hívd el egy kávéra vagy egy húszperces hívásra. Nézd meg még ma a profilodat egy idegen szemével: kiderül belőle tíz másodperc alatt, kinek dolgozol?`,
    resources: [
      { label: "Ellenőrzőlista: a profilod tíz másodperces próbája", kind: "pdf", size: "155 KB" },
      { label: "Sablon: heti egy óra online, beosztva", kind: "docx", size: "125 KB" },
    ],
    comments: [
      {
        id: "online-jelenlet-c1",
        memberId: "m18",
        text: "Ügynökségként mindenkinek azt mondjuk, hogy posztoljon többet, a saját profilomon meg kétéves a fénykép és a beosztásom áll az első sorban. Átírtam. A folyosó és a tárgyaló hasonlatát pedig elviszem az ügyfeleknek.",
        daysAgo: 4,
      },
      {
        id: "online-jelenlet-c2",
        memberId: "m12",
        text: "Megkértem egy pácienst, hogy nézze meg a profilomat tíz másodpercig. Azt mondta, tornát tartok. A derékfájós irodistákról, akikkel a legtöbbet dolgozom, egy szó sem volt rajta.",
        daysAgo: 1,
      },
    ],
  },

  "a-halod-merese": {
    text: `A networking könnyen válik kellemes időtöltéssé, amiről nem tudod, hoz-e valamit. Sok kávé, sok jó beszélgetés, és év végén csak egy érzésed van arról, hogy megérte-e. Néhány szám ezt az érzést tudássá alakítja. Nem azért mérsz, hogy az embereket pontozd, hanem hogy lásd, hová megy az időd.

Negyedévente elég öt dolgot felírnod:

- hány egy az egyben találkozód volt
- hány ajánlást adtál
- hány ajánlást kaptál
- ezekből hányból lett munka
- mekkora bevétel jött ajánlásból, az összes bevételedhez képest

Ehhez egyetlen szokás kell: minden új ügyfélnél írd fel, honnan jött, és ha ajánlásból, akkor kitől. Egy oszlop a táblázatodban, de egy év múlva ez lesz a legértékesebb adatod. A számokból három dolgot olvass ki. Ki az a néhány ember, akitől a munkáid nagy része érkezik, és kapnak-e tőled elég figyelmet. Kinek adtál sokat úgy, hogy rendben van, hogy nem jött vissza semmi, és kinél érzed már tehernek. És hol van sok találkozó kevés eredménnyel, mert lehet, hogy rossz teremben ülsz.

Egy dologra vigyázz. A háló lassan fizet, egy kapcsolatból sokszor egy vagy két év után lesz üzlet. Ezért ne egy negyedév alapján ítélj, hanem az irányt figyeld. Ha többet adsz, mint tavaly, és pontosabban kérsz, a többi szám követni fogja. Töltsd ki a táblázatot az elmúlt három hónapra, és válaszolj egy kérdésre: kinek tartozol egy köszönettel?`,
    resources: [
      { label: "Táblázat: negyedéves hálómérő", kind: "xlsx", size: "135 KB" },
      { label: "Munkalap: negyedéves áttekintés kérdései", kind: "pdf", size: "170 KB" },
    ],
    comments: [
      {
        id: "a-halod-merese-c1",
        memberId: "m07",
        text: "Logisztikában mindent mérünk, csak pont ezt nem. Visszanéztem az idei új megbízókat, és a nagyobbik felük két embertől jött, akiket idén egyszer sem hívtam fel. Holnap felhívom őket.",
        daysAgo: 3,
      },
      {
        id: "a-halod-merese-c2",
        memberId: "m16",
        text: "A cukrászdában a vendégnél nehéz felírni, honnan jött, de a rendezvényes és céges rendeléseknél megy. Ott szinte minden ajánlásból érkezik, és ezt eddig szerencsének hittem.",
        daysAgo: 1,
      },
      {
        id: "a-halod-merese-c3",
        memberId: "m01",
        text: "Viktória, ez nem szerencse, hanem a munkád híre. Most, hogy látod, el is kezdheted gondozni.",
        daysAgo: 0,
      },
    ],
  },
};
