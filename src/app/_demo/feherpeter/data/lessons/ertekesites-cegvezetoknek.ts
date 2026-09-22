import type { LessonContent } from "../types";

export const CONTENT: Record<string, LessonContent> = {
  "eladni-nem-szegyen": {
    text: `A legtöbb cégvezető, akivel dolgozom, kiválóan ért a szakmájához, és közben kerüli az eladást. Nem lustaságból. Azért, mert az eladásról egy kép él benne: valaki, aki rábeszél, nyomul, és nem hagyja abba. Senki nem akar ilyen lenni, úgyhogy inkább vár, hátha az ügyfelek maguktól is megtalálják.

Ez a kép hamis. Az eladás nem az, hogy meggyőzöl valakit valamiről, amire nincs szüksége. Az eladás az, hogy kideríted, van-e olyan gondja, amin tudsz segíteni, és ha van, őszintén megmondod, hogyan és mennyiért. Ha nincs, azt is megmondod. Ebben nincs semmi szégyellnivaló. Ha jó a munkád, és hallgatsz róla, azzal nem szerény vagy, hanem elveszel egy lehetőséget attól, akinek épp rád volna szüksége.

25 év alatt sokszor láttam, hogy a szégyen valójában nem az eladásról szól, hanem a visszautasítástól való félelemről. Ha nem ajánlok semmit, nemet sem mondhatnak. Csakhogy a cég ebből nem él meg. A vezető az első értékesítő, akár tetszik, akár nem, és amíg te nem tudsz nyugodtan beszélni arról, amit adsz, addig más sem fog helyetted.

> Nem rábeszélni akarsz valakit, hanem eldönteni vele együtt, hogy tudsz-e neki segíteni.

Gondold végig ezen a héten: mikor vettél utoljára valamit úgy, hogy a végén hálás voltál az eladónak? Mit csinált másképp, mint a többiek? Írd le három mondatban, mert ez lesz a mércéd a kurzus végéig.`,
    resources: [{ label: "Munkalap: a legjobb vásárlásom három mondatban", kind: "pdf", size: "160 KB" }],
    comments: [
      {
        id: "eladni-nem-szegyen-c1",
        memberId: "m20",
        text: "Húsz éve csinálok bútort, de az ajánlatadást mindig halogattam, mert kunyerálásnak éreztem. Az a gondolat, hogy a hallgatással elveszek egy lehetőséget attól, akinek szüksége volna rám, sokáig velem marad.",
        daysAgo: 24,
      },
      {
        id: "eladni-nem-szegyen-c2",
        memberId: "m12",
        text: "Nálunk a szakmában szinte illetlenségnek számít bérletet ajánlani a páciensnek. Pedig aki csak egyszer jön el, annak nem is tudok igazán segíteni.",
        daysAgo: 19,
      },
      {
        id: "eladni-nem-szegyen-c3",
        memberId: "m03",
        text: "Leírtam a három mondatot. Az eladó többet kérdezett, mint amennyit beszélt, és a végén lebeszélt a drágább gépről. Azóta is nála vásárolok.",
        daysAgo: 12,
      },
    ],
  },

  "kerdezz-mielott-ajanlasz": {
    text: `Az első tárgyalásokon szinte mindenki ugyanazt a hibát követi el: túl korán kezd arról beszélni, amit kínál. Érthető. Ismered a szolgáltatásodat, büszke vagy rá, és a csend kínos. Csakhogy amíg te beszélsz, semmit nem tudsz meg a másikról, és amit ajánlasz, az találgatás.

A jó értékesítési beszélgetésben a másik beszél többet. Ha a végén úgy érzed, alig mondtál valamit, de pontosan tudod, mi a helyzet nála, akkor jól csináltad. Ehhez nyitott kérdések kellenek, olyanok, amelyekre nem lehet igennel vagy nemmel felelni. Néhány, amit szinte bármilyen szakmában használhatsz:

- Mi történt, ami miatt épp most kerestél meg?
- Hogyan oldjátok meg ezt jelenleg?
- Mi az, ami ebben a leginkább zavar?
- Mi változna, ha ez rendben lenne?
- Ki dönt még ebben rajtad kívül?

Kérdezni még nem elég, a választ meg is kell hallani. Ne a következő kérdéseden gondolkodj, amíg ő beszél. Jegyzetelj, és ha valami fontosat mond, kérj még: mesélj erről többet. A hasznos dolgok többnyire a második, harmadik mondatban jönnek, nem az elsőben. Ajánlatot csak akkor tegyél, ha a saját szavaiddal vissza tudod mondani neki a helyzetét, és ő rábólint. Ha nem tudod visszamondani, még kérdezned kell.

A következő beszélgetésed előtt írj fel öt kérdést egy lapra, és vállald, hogy az első tíz percben nem beszélsz magadról. Utána nézd meg, mit tudtál meg, amit korábban nem szoktál.`,
    resources: [
      { label: "Kérdéslista: húsz nyitott kérdés az első beszélgetéshez", kind: "pdf", size: "210 KB" },
      { label: "Sablon: jegyzetlap az első beszélgetéshez", kind: "docx", size: "95 KB" },
    ],
    comments: [
      {
        id: "kerdezz-mielott-ajanlasz-c1",
        memberId: "m18",
        text: "Kipróbáltam egy új érdeklődővel: az első tíz percben csak kérdeztem. Kiderült, hogy nem kampányt akar, hanem azt, hogy a kollégái végre egy helyen kövessék a beérkező megkereséseket. Egészen más ajánlat lett belőle.",
        daysAgo: 18,
      },
      {
        id: "kerdezz-mielott-ajanlasz-c2",
        memberId: "m22",
        text: "Azt, hogy ki dönt még, eddig sosem kérdeztem meg, és az ajánlataim rendszeresen az ügyvezetőnél akadtak el. Mikor érdemes ezt feltenni, hogy ne legyen sértő?",
        daysAgo: 15,
      },
      {
        id: "kerdezz-mielott-ajanlasz-c3",
        memberId: "m01",
        text: "Dániel, minél korábban, és természetes hangon: hogyan szoktatok nálatok az ilyen döntéseket meghozni? Ez nem az ő súlyát kérdőjelezi meg, csak a folyamatra kérdez rá.",
        daysAgo: 14,
      },
    ],
  },

  "az-igeny-mogotti-igeny": {
    text: `Amit az ügyfél először mond, az ritkán az, amiért valójában jött. Azt mondja, új honlapot szeretne. Valójában azt szeretné, hogy ne kelljen szégyenkeznie, amikor egy komolyabb partner rákeres a cégére. Azt mondja, konyhabútort kér. Valójában azt szeretné, hogy végre elférjen a család az asztalnál. Az első a megrendelés. A második az ok.

Ha csak a megrendelésre válaszolsz, árversenybe kerülsz, mert honlapot és konyhabútort sokan csinálnak. Ha az okot érted, már nem hasonlítanak össze olyan könnyen senkivel, mert te vagy az, aki megértette, miről van szó. Az okhoz egyszerű kérdések vezetnek, csak türelem kell hozzájuk:

1. Miért fontos ez neked éppen most?
2. Mi lesz, ha nem változik semmi?
3. Honnan fogod tudni egy év múlva, hogy jól döntöttél?

Ezeknél a kérdéseknél gyakran csend lesz. Hagyd. A másik ilyenkor gondolkodik, és lehet, hogy most fogalmazza meg először saját magának is. Ne segíts neki a válasszal, és ne töltsd ki a csendet a saját feltevéseiddel. Egy dologra vigyázz: ez nem kihallgatás és nem trükk. Ha azért kérdezel, hogy fogást találj rajta, azt megérzi. Ha azért, mert tényleg érdekel, azt is. A mögöttes igényt aztán az ajánlatodban is mondd ki, az ő szavaival. Ettől érzi úgy, hogy neki szól, nem sablon.

Vedd elő az utolsó három ügyfeledet. Mit kértek, és valójában mit akartak? Ha valamelyiknél nem tudod, ott legközelebb tovább kell kérdezned.`,
    resources: [{ label: "Munkalap: mit kért, és valójában mit akart", kind: "pdf", size: "180 KB" }],
    comments: [
      {
        id: "az-igeny-mogotti-igeny-c1",
        memberId: "m10",
        text: "Az egyik ügyfelem új nappalit kért, és a harmadik kérdésnél derült ki, hogy otthonról dolgozik, és nincs egyetlen nyugodt sarka sem. Azóta a miért éppen most kérdést minden első találkozón felteszem.",
        daysAgo: 11,
      },
      {
        id: "az-igeny-mogotti-igeny-c2",
        memberId: "m23",
        text: "A csendet a legnehezebb kibírni. Rájöttem, hogy eddig szinte mindig én fejeztem be az ügyfél mondatát.",
        daysAgo: 6,
      },
    ],
  },

  "felkeszules-targyalasra": {
    text: `A tárgyalások nagy része nem az asztalnál dől el, hanem előtte. Aki felkészülten ül le, az nyugodt, és a nyugalom többet ér bármilyen tárgyalási fogásnál. A tárgyalóasztalnál töltött több mint tízezer óra alatt azt láttam, hogy rögtönözni is csak annak megy jól, aki előtte alaposan felkészült. Egy fontos tárgyalás előtt öt dolgot írok le, kézzel, egyetlen oldalra:

- Mit tudok a másikról: a cégéről, a helyzetéről, arról, hogy ki dönt.
- Mi a célom: a legjobb kimenet, amit reálisan el tudok érni.
- Mi a minimumom: az a pont, ami alatt felállok az asztaltól.
- Mit adhatok engedményként, ami nekem keveset, neki sokat ér.
- Mit kérdezek: három-négy kérdés, amire mindenképp választ akarok.

A legfontosabb a harmadik. Ha nincs előre eldöntött minimumod, a tárgyalás hevében fogod eldönteni, és ott rosszul fogsz dönteni. Attól, hogy tudod, hol a határ, nem leszel merev. Épp ellenkezőleg: mivel nem félsz, hogy rossz üzletbe sodródsz, nyitottabban tudsz figyelni.

Gondold végig a másik oldalt is. Neki mi a tét? Mitől tart? Kinek kell majd megindokolnia a döntését? Ha ezekre van tipped, a kérdéseid is pontosabbak lesznek. Végül a gyakorlati rész: ki lesz ott, mennyi idő van, és mi az a következő lépés, amit a végén kérni fogsz. Tárgyalásról ne gyere el úgy, hogy nincs megbeszélve, ki mit csinál és mikorra.

Töltsd ki a munkalapot a következő komolyabb megbeszélésed előtt. Húsz perc, és másképp fogsz leülni.`,
    resources: [
      { label: "Munkalap: egyoldalas tárgyalási felkészülés", kind: "pdf", size: "220 KB" },
      { label: "Ellenőrzőlista: a tárgyalás előtti nap", kind: "pdf", size: "140 KB" },
    ],
    comments: [
      {
        id: "felkeszules-targyalasra-c1",
        memberId: "m04",
        text: "Egy nagyobb céges rendezvény egyeztetése előtt töltöttem ki a munkalapot. A minimumot most először írtam le előre, és nem mentem alá, pedig máskor biztosan megtettem volna.",
        daysAgo: 5,
      },
      {
        id: "felkeszules-targyalasra-c2",
        memberId: "m16",
        text: "Jövő héten egy szállodával tárgyalok desszertbeszállításról. Eddig csak az árból tudtam engedni, most összeírtam három dolgot, ami nekem alig kerül valamibe, nekik viszont sokat ér, például a rugalmasabb szállítási időpontot.",
        daysAgo: 3,
      },
    ],
  },

  "az-ar-kimondasa": {
    text: `Az ár kimondása a legtöbb vállalkozónak a beszélgetés legnehezebb pillanata. Hallani is lehet: elhalkul a hang, felgyorsul a beszéd, és az összeg után azonnal jön a magyarázat. Hogy ebben persze benne van ez is, az is, és ha sok, akkor lehet róla beszélni. Ezzel már azelőtt engedtél, hogy a másik bármit mondott volna. Az ár nem bocsánatkérés. Tény, amit ugyanolyan hangon mondasz ki, mint a határidőt. A sorrend sokat segít:

1. Foglald össze, mit értettél meg a helyzetéből, és mit fogsz csinálni.
2. Mondd ki az összeget, egyetlen mondatban.
3. Hallgass.

A harmadik a legnehezebb. A csend ilyenkor hosszúnak tűnik, pedig a másik csak számol és gondolkodik. Ha te töröd meg, szinte biztosan kedvezménnyel töröd meg.

Az alapoknál beszéltünk arról, hogyan árazz úgy, hogy az ár ne az önbecsülésedről szóljon. Itt a kimondás a téma. Ha magad sem hiszed el az áradat, az hallatszik. Ezért az árat ne a tárgyaláson találd ki, hanem előtte, nyugodtan, számokból. Amit kiszámoltál, azt könnyebb képviselni, mint amit csak megéreztél. Ha engedsz az árból, mindig kérj érte valamit: kisebb tartalmat, gyorsabb fizetést, hosszabb szerződést. Az ok nélküli kedvezmény azt üzeni, hogy az eredeti ár sem volt komoly.

Gyakorold hangosan. Mondd ki az áradat tízszer egyedül, a kocsiban vagy a tükör előtt, magyarázat nélkül. Furcsa lesz, de a tizedik már egészen másképp szól, mint az első.`,
    resources: [{ label: "Gyakorlólap: az ár kimondása három lépésben", kind: "pdf", size: "150 KB" }],
    comments: [
      {
        id: "az-ar-kimondasa-c1",
        memberId: "m19",
        text: "A csomagár után eddig mindig rögtön hozzátettem, hogy persze lehet belőle engedni. Reggel meghallgattam a leckét, és a délelőtti párnál először hagytam ki ezt a mondatot. Nem kértek kedvezményt.",
        daysAgo: 0,
      },
      {
        id: "az-ar-kimondasa-c2",
        memberId: "m07",
        text: "Magamra ismertem az azonnali magyarázkodásban. Meddig érdemes hallgatni, mielőtt mégis megszólalok?",
        daysAgo: 0,
      },
      {
        id: "az-ar-kimondasa-c3",
        memberId: "m01",
        text: "Ádám, tovább, mint ameddig kényelmes. Ha ő kérdez, arra válaszolj, de az árat ne kezdd el magadtól védeni.",
        daysAgo: 0,
      },
    ],
  },

  kifogasok: {
    text: `A kifogás nem elutasítás. Legtöbbször kérdés, amit a másik nem kérdés formájában tett fel. Ha vitatkozni kezdesz vele, védekezni fog. Ha megérted, mi van mögötte, tudtok tovább beszélni. A leggyakoribbak, és amit a tapasztalatom szerint többnyire jelentenek:

- *Drága.* Még nem látom, miért ér ennyit. Kérdezd meg, mihez hasonlítja.
- *Még átgondolom.* Valami nem tiszta, vagy tartok valamitől, de nem akarom kimondani.
- *Meg kell beszélnem valakivel.* Nem egyedül döntök. Ezt jó lett volna korábban megtudnod.
- *Most nem aktuális.* Nem elég fontos a gond, vagy nem látszik, mibe kerül a halogatás.
- *Küldj egy ajánlatot.* Néha valódi kérés, néha udvarias búcsú.

A válaszod mindegyikre ugyanúgy kezdődik: nem érveléssel, hanem kérdéssel. Értem. Mi az, amit még át szeretnél gondolni? Mi kellene ahhoz, hogy nyugodtan tudj dönteni? Ezekre meglepően gyakran őszinte választ kapsz, és kiderül, hogy a gond nem is az ár, hanem mondjuk a határidő vagy egy korábbi rossz tapasztalat.

Fogadd el azt is, hogy némelyik kifogás egyszerűen igaz. Van, akinek tényleg drága, és van, akinek tényleg nem most időszerű. Ilyenkor nem legyőznöd kell, hanem tisztán elköszönni. A kifogások nagy részét egyébként nem a végén kell kezelni, hanem az elején megelőzni, jó kérdésekkel.

Írd össze azt a három kifogást, amit a leggyakrabban hallasz. Mindegyik mellé írj egy kérdést, amit legközelebb az érvelés helyett felteszel.`,
    resources: [
      { label: "Munkalap: a három leggyakoribb kifogásom", kind: "pdf", size: "170 KB" },
      { label: "Segédlet: kifogások és a mögöttük álló kérdések", kind: "pdf", size: "230 KB" },
    ],
    comments: [
      {
        id: "kifogasok-c1",
        memberId: "m13",
        text: "Nálunk a „még átgondolom” szinte mindig azt jelenti, hogy a házastárs nem volt ott a felmérésen. Mostantól úgy egyeztetek időpontot, hogy mindketten otthon legyenek.",
        daysAgo: 4,
      },
      {
        id: "kifogasok-c2",
        memberId: "m17",
        text: "A „küldj egy ajánlatot” nálam legtöbbször udvarias búcsú volt. Most visszakérdezek, mit szeretne pontosan látni benne, és ebből rögtön kiderül, mennyire komoly a szándék.",
        daysAgo: 7,
      },
    ],
  },

  "ertekesitesi-tolcser": {
    text: `Ha megkérdezem egy cégvezetőtől, hogyan lesz nála egy érdeklődőből ügyfél, a válasz legtöbbször ez: attól függ. Vagyis nincs folyamat, csak esetek vannak. Amíg kevés az érdeklődő, ez elmegy. Amikor sok lesz, vagy amikor másnak kell átadnod, szétesik. A tölcsér szó nagyobbnak hangzik, mint ami mögötte van. Azoknak a lépéseknek a sora, amelyeken egy ügyfél végigmegy az első érintkezéstől a fizetésig. Egy szolgáltatónál ez sokszor ennyi:

1. Beérkezik az érdeklődés
2. Első beszélgetés, ahol kérdezel
3. Kimegy az ajánlat
4. Döntés
5. Szerződés és indulás

A te lépéseid mások lehetnek. A lényeg, hogy le legyenek írva, és mindegyiknél tudd, mi a következő teendő, és ki a felelőse. Ne a tankönyvi folyamatot írd le, hanem azt, ami nálad valójában történik. Négy-hat lépésnél több ritkán kell.

Ha ez megvan, minden élő érdeklődőt be tudsz sorolni valamelyik lépéshez. Szoftver nem kell hozzá, egy táblázat elég, ha hetente ránézel. Itt jön az első meglepetés: látni fogod, hol akadnak el az emberek. Van, akinél az ajánlat után tűnnek el. Van, akinél már az első beszélgetésig sem jutnak el, mert két napig senki nem hívja vissza őket. A két gond egészen más megoldást kér, tölcsér nélkül viszont csak annyit érzel, hogy kevés az üzlet.

Írd fel a saját lépéseidet, és sorold be melléjük a mostani érdeklődőidet. Melyik lépésnél áll a legtöbb?`,
    resources: [
      { label: "Táblázat: egyszerű értékesítési tölcsér", kind: "xlsx", size: "85 KB" },
      { label: "Munkalap: a saját lépéseim és felelőseik", kind: "pdf", size: "190 KB" },
    ],
    comments: [
      {
        id: "ertekesitesi-tolcser-c1",
        memberId: "m21",
        text: "Felírtam az öt lépésemet, és kiderült, hogy kilenc érdeklődőmből hat hetek óta a kiment ajánlatnál áll. Eddig azt hittem, kevés az érdeklődő.",
        daysAgo: 2,
      },
      {
        id: "ertekesitesi-tolcser-c2",
        memberId: "m11",
        text: "Nálunk a visszahívás a gyenge pont. Aki délután telefonál, és aznap már nem érjük el, az másnapra máshol kér időpontot.",
        daysAgo: 5,
      },
    ],
  },

  utankovetes: {
    text: `Az ajánlat kiment, és csend van. A legtöbben ilyenkor két rossz megoldás közül választanak. Vagy nem jelentkeznek többet, mert nem akarnak tolakodni. Vagy megírják azt a levelet, hogy csak érdeklődnék, sikerült-e átnézni. Az első üzletet hagy az asztalon. A második terhet tesz a másikra, és nem ad neki semmit.

A csend ritkán jelent nemet. Többnyire annyit jelent, hogy a másiknak is tele a hete, és nem a te ajánlatod a legsürgősebb ügye. Az utánkövetés ezért nem zaklatás, hanem segítség, ha jól csinálod. Három szabály, amihez tartom magam:

- A következő lépést még a beszélgetés végén beszéld meg. Csütörtökön felhívlak, jó így? Amire ő igent mondott, az nem tolakodás.
- Minden jelentkezésed adjon valamit: választ egy kérdésére, egy példát, egy egyszerűsítést az ajánlaton. Ne csak kérj.
- Legyen vége. Három-négy megkeresés után írj egy tiszta záró üzenetet.

A záró üzenet szólhat úgy, hogy úgy látod, ez most nem időszerű, ezért a magad részéről lezárod, és ha később újra előkerül, szívesen folytatod. Nincs benne sértődés, és nincs benne nyomás. Meglepően sokan épp erre válaszolnak, mert most kell először dönteniük. A ritmus is számít. Az első jelentkezés néhány napon belül jöjjön, a későbbiek ritkábban. A telefon többnyire többet ér, mint egy újabb e-mail.

Nézd meg, hány kiküldött ajánlatod áll most válasz nélkül. Mindegyikhez írj be a naptáradba egy időpontot, és azt is, mit fogsz adni abban a megkeresésben.`,
    resources: [
      { label: "Sablon: három utánkövető üzenet és egy záró levél", kind: "docx", size: "110 KB" },
      { label: "Táblázat: nyitott ajánlatok követése", kind: "xlsx", size: "70 KB" },
    ],
    comments: [
      {
        id: "utankovetes-c1",
        memberId: "m25",
        text: "Megírtam a záró üzenetet négy régóta néma ajánlatkérőnek. Ketten még aznap válaszoltak, az egyikük meg is rendelte a fordítást.",
        daysAgo: 3,
      },
      {
        id: "utankovetes-c2",
        memberId: "m24",
        text: "Tavasszal annyi az ajánlatkérés, hogy az utánkövetésre sosem jut időm. Van értelme hetente egy fix délutánt kijelölni rá?",
        daysAgo: 6,
      },
      {
        id: "utankovetes-c3",
        memberId: "m01",
        text: "Krisztián, van. Egy fix óra a naptárban többet ér, mint a jó szándék. Kezdd a legnagyobb értékű ajánlatokkal, és onnan haladj lefelé.",
        daysAgo: 5,
      },
    ],
  },

  "a-nem-utan": {
    text: `Nemet fogsz kapni, rendszeresen. Ha soha nem kapsz, az nem jó jel: vagy túl olcsó vagy, vagy csak azoknak ajánlasz, akik már úgyis döntöttek. A kérdés nem az, hogyan kerüld el a nemet, hanem az, mit kezdesz vele utána. Először magaddal. A nem az ajánlatnak szól, ebben a helyzetben, ebben az időpontban. Nem neked, és nem a munkád értékének. Ezt könnyű leírni és nehéz elhinni, főleg ha a céget a saját neveddel azonosítják. Adj magadnak egy estét, aztán nézd meg hidegebb fejjel.

Aztán a másikkal. Köszönd meg, hogy egyenesen megmondta, mert a tiszta nem sokkal többet ér, mint a hetekig húzódó talán. És tegyél fel egy kérdést, védekezés nélkül:

> Segítenél azzal, hogy elmondod, min múlt a döntésed?

Amit erre hallasz, abból tanulsz a legtöbbet az egész értékesítésedről. Ne vitatkozz vele, és ne kezdd újra az ajánlatot. Csak írd le. A nem ritkán végleges. A másik helyzete változik, a választott szolgáltató csalódást okozhat, jövőre más lesz a költségvetés. Ha rendesen köszöntél el, fél év múlva nyugodtan jelentkezhetsz egy rövid kérdéssel, hogy mi lett a dologgal. És aki nemet mondott, még ajánlhat másnak, ha jó benyomást hagytál benne.

Vezess egyszerű listát a nemekről és az okukról. Tíz után nézd át. Ha ugyanaz az ok háromszor szerepel, az már nem balszerencse, hanem visszajelzés.`,
    resources: [{ label: "Táblázat: elveszett ajánlatok és az okuk", kind: "xlsx", size: "60 KB" }],
    comments: [
      {
        id: "a-nem-utan-c1",
        memberId: "m14",
        text: "Megkérdeztem egy cégvezetőt, min múlt a döntése. Azt mondta, az ajánlatom jó volt, csak túl hosszú, és nem találta benne az árat. Magamtól ezt sosem tudtam volna meg.",
        daysAgo: 8,
      },
      {
        id: "a-nem-utan-c2",
        memberId: "m09",
        text: "Egy étterem tavaly nemet mondott a boraimra. A lecke után felhívtam őket egy rövid kérdéssel, és az őszi borlaphoz kóstolót kértek.",
        daysAgo: 3,
      },
    ],
  },

  "az-elso-ertekesito": {
    text: `Az első értékesítőt a legtöbben rossz okból és rosszkor veszik fel. A rossz ok az, hogy a vezető nem szeret eladni, és reméli, hogy valaki majd leveszi róla. A rossz időpont az, amikor még ő maga sem tudja megbízhatóan eladni, amit a cég kínál. Az új ember ilyenkor olyan feladatot kap, amit előtte senki nem oldott meg, és fél év múlva mindketten csalódottak. Mielőtt felveszel valakit, három dolognak meg kell lennie:

- Te már sokszor, ismételhetően eladtad ugyanazt.
- Le van írva a folyamatod: a lépések, a kérdéseid, a gyakori kifogások.
- Több az érdeklődő, mint amennyit bírsz, vagy pontosan tudod, honnan lesz több.

Ha ezek megvannak, működő rendszert adsz át. Ha nincsenek, a problémádat adod át. A kiválasztásnál kevésbé nézném, ki mennyire jó beszédű. Azt figyelném, kérdez-e. Az interjún adj neki egy helyzetet, legyél te az ügyfél, és nézd meg, mit csinál az első öt percben. Aki azonnal ajánlani kezd, az később is ezt fogja tenni. Aki kérdez és jegyzetel, azt a többire meg lehet tanítani.

A betanítás a te dolgod, nem lehet megúszni. Az első hetekben ő ül be melléd, aztán te őmellé, és minden beszélgetés után tíz perc megbeszélés. Számolj azzal, hogy hónapok telnek el, mire önállóan hoz eredményt, és erre az időre legyen meg a fedezet.

Írd le egy oldalon, mit adnál át holnap egy új embernek. Ha az oldal üres marad, még nem az értékesítő hiányzik.`,
    resources: [
      { label: "Ellenőrzőlista: készen áll-e a cég az első értékesítőre", kind: "pdf", size: "175 KB" },
      { label: "Sablon: interjús helyzetgyakorlat", kind: "docx", size: "90 KB" },
      { label: "Sablon: betanítási terv az első kilenc hétre", kind: "docx", size: "120 KB" },
    ],
    comments: [
      {
        id: "az-elso-ertekesito-c1",
        memberId: "m05",
        text: "Az üres oldal engem is megfogott. Két éve keresek üzletkötőt, de abból, ahogyan én eladok, semmi nincs leírva. Előbb ezt pótolom.",
        daysAgo: 1,
      },
      {
        id: "az-elso-ertekesito-c2",
        memberId: "m08",
        text: "A helyzetgyakorlatot kipróbáltam két jelölttel. Az egyik öt percig a tanfolyamainkat sorolta, a másik megkérdezte, miért akarok nyelvet tanulni. Könnyű döntés volt.",
        daysAgo: 4,
      },
    ],
  },

  "jutalek-es-motivacio": {
    text: `A jutalékrendszer azt mondja meg a munkatársadnak, mit tartasz fontosnak. Nem azt, amit az értekezleten mondasz, hanem azt, amiért fizetsz. Ezért mielőtt számokat írsz le, döntsd el, milyen viselkedést szeretnél látni. Néhány összefüggés, amit érdemes végiggondolni:

- Ha csak árbevétel után fizetsz, kedvezményekkel fog eladni, mert neki a nagy szám számít, nem a fedezet.
- Ha csak új ügyfél után fizetsz, a meglévőkkel senki nem fog törődni.
- Ha aláíráskor fizetsz, nem a befizetéskor, olyan ügyfeleket is kapsz, akik később nem fizetnek.
- Ha nincs fix, csak jutalék, az embered a gyors üzletet hajtja, és a gyenge hónapokban szorongani fog.

Kis cégnél legtöbbször egy tisztes alapbér és egy egyszerű, fedezethez vagy befolyt bevételhez kötött jutalék működik. A legfontosabb szabály: a munkatársad fejben, egy perc alatt ki tudja számolni, mennyit keresett egy üzleten. Ha ehhez táblázat kell, a rendszer nem motivál, csak vitát szül. Amit pedig egyszer kimondtál, azt év közben ne írd át a kárára. Egy visszavont jutalék többe kerül bizalomban, mint amennyit megspórolsz vele.

A pénz csak az egyik fele. Azt láttam, hogy a jó értékesítőt ugyanennyire megtartja, ha hisz abban, amit elad, ha a cég tényleg teljesíti, amit ő az ügyfélnek megígért, és ha a vezető észreveszi a munkáját. Ha a kollégák rendszeresen cserben hagyják az ügyfeleit, semmilyen jutalék nem tartja ott.

Írd le egy mondatban, milyen viselkedést akarsz jutalmazni. Aztán nézd meg, a mostani vagy a tervezett rendszered tényleg azt jutalmazza-e.`,
    resources: [
      { label: "Táblázat: jutalékmodellek összehasonlítása", kind: "xlsx", size: "95 KB" },
      { label: "Munkalap: milyen viselkedést jutalmazok", kind: "pdf", size: "155 KB" },
    ],
    comments: [
      {
        id: "jutalek-es-motivacio-c1",
        memberId: "m15",
        text: "Az ingatlanosoknál szinte mindenhol tiszta jutalék van, fix nélkül. Most értettem meg, miért hajtják a kollégáim a gyors eladást akkor is, amikor az eladónak megérné várni. Januártól kis fixszel próbálom ki.",
        daysAgo: 2,
      },
      {
        id: "jutalek-es-motivacio-c2",
        memberId: "m22",
        text: "Nálunk az értékesítő aláíráskor kapta a jutalékot, és volt, hogy a szerződés végül el sem indult. Átkötjük az első befizetéshez, de csak az új évtől, nem év közben.",
        daysAgo: 5,
      },
    ],
  },

  "a-szamok-kovetese": {
    text: `Amíg egyedül adsz el, érzésből is tudod, hogy áll az értékesítés. Amint más is elad, vagy több lesz az érdeklődő, az érzés csalni kezd. Egy jó hét után mindent rózsásnak látsz, egy rossz után mindent sötétnek. A számok ezen segítenek, de csak akkor, ha kevés van belőlük, és rendszeresen ránézel. Egy kis cég értékesítéséhez nekem öt szám elég:

- Hány új érdeklődő jött a héten.
- Hány érdemi első beszélgetés volt.
- Hány ajánlat ment ki, és mekkora összértékben.
- Hány ajánlatból lett üzlet.
- Mennyi idő telik el az első érintkezéstől a döntésig.

Ezek a tölcséred lépéseihez tartoznak, amit korábban felírtál. Az első háromra ezen a héten is hatásod van. Az utolsó kettő eredmény, amit csak utólag látsz. Ha csak a bevételt figyeled, mindig későn tudod meg a bajt, mert a mai bevétel a hetekkel, hónapokkal ezelőtti munkád. Ha az érdeklődők és a beszélgetések száma esik, azt most látod, és most tudsz tenni valamit.

Az arányok mutatják meg, hol kell javítani. Ha sok a beszélgetés, de kevés ajánlat megy ki, a kérdezéssel vagy a célcsoporttal van gond. Ha sok az ajánlat, de kevés lesz belőle üzlet, akkor az ajánlattal, az árral vagy az utánkövetéssel. Így a szám nem ítélet, hanem útjelző.

Jelölj ki egy fix időpontot a hétben, mondjuk hétfő reggel, és töltsd ki az öt számot négy héten át. Ha van értékesítőd, vele együtt, nem számonkérésként. Egy hónap után már lesz mihez viszonyítanod.`,
    resources: [
      { label: "Táblázat: heti értékesítési számok", kind: "xlsx", size: "80 KB" },
      { label: "Sablon: a félórás heti értékesítési megbeszélés menete", kind: "pdf", size: "130 KB" },
    ],
    comments: [
      {
        id: "a-szamok-kovetese-c1",
        memberId: "m18",
        text: "Hétfő reggel fél óra, három hete tartjuk. Kiderült, hogy sok ajánlatunk megy ki, de kevésből lesz üzlet, úgyhogy most az utánkövetést tesszük rendbe.",
        daysAgo: 1,
      },
      {
        id: "a-szamok-kovetese-c2",
        memberId: "m06",
        text: "Nálunk az ajánlat a kezelési terv. Összeszámoltam, hányból lesz végül kezelés, és az is kiderült, hogy eddig senki nem hívta fel azokat, akik nem jelentkeztek vissza.",
        daysAgo: 2,
      },
    ],
  },
};
