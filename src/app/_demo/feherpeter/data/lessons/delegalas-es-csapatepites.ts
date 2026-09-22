import type { LessonContent } from "../types";

/* Delegálás és csapatépítés — a vendégoktató kurzusa. Első személyben egy
   meg nem nevezett, tapasztalt cégtulajdonos beszél; a szövegben szándékosan
   nincs név, iparág vagy bármilyen ellenőrizhető adat róla. */

export const CONTENT: Record<string, LessonContent> = {
  "miert-nem-adod-at": {
    text: `Sokáig azt hittem, azért nem adok át semmit, mert nincs kinek. Aztán lett kinek, és akkor sem adtam át. Ekkor kellett beismernem, hogy a gond nem a csapatban van, hanem bennem.

A saját cégemben évekig én voltam a szűk keresztmetszet. Minden ajánlat, minden reklamáció, minden nagyobb számla az én asztalomon ment át. Büszke voltam rá, hogy mindenről tudok. Közben a cég pontosan akkora volt, amekkora terhet én egyedül elbírtam, és egyetlen napra sem tudtam úgy elmenni, hogy ne csörögjön a telefonom.

Amikor őszintén megnéztem, miért nem engedek el dolgokat, négy mondatot találtam a fejemben:

- *Gyorsabb, ha megcsinálom magam.* Ma igen. Csak így jövőre is te fogod csinálni.
- *Úgysem lesz olyan jó.* Eleinte valóban nem. A kérdés az, hogy elég jó lesz-e.
- *Nincs időm betanítani.* Éppen azért nincs, mert eddig senkit nem tanítottál be.
- *Ha nélkülem is megy, mi szükség rám.* Ez a legmélyebb, és erről beszélünk a legritkábban.

Az utolsó nálam sokáig rejtve maradt. Jólesett nélkülözhetetlennek lenni. Csakhogy a nélkülözhetetlen ember nem vezeti a céget, hanem fogva tartja, és a cég is őt.

A delegálás ezért nem technikával kezdődik, hanem ezzel a beismeréssel. A technika jön a következő leckékben. Addig egy feladat: írd le azt a három dolgot, amit a héten csak megszokásból csináltál te. Mindegyik mellé írd oda, a négy mondat közül melyik tartja nálad.`,
    resources: [
      { label: "Munkalap: mi tartja nálam a feladatot", kind: "pdf", size: "210 KB" },
    ],
    comments: [
      {
        id: "miert-nem-adod-at-c1",
        memberId: "m05",
        text: "A negyedik mondat talált. Tizenkét emberrel dolgozom, és még mindig én hagyok jóvá minden anyagrendelést, pedig a művezetőm jobban ismeri az árakat, mint én.",
        daysAgo: 6,
      },
      {
        id: "miert-nem-adod-at-c2",
        memberId: "m20",
        text: "Nálam az úgysem lesz olyan jó a fő mondat. Asztalosként nehéz elfogadni, hogy a megrendelő sokszor nem is látja azt a különbséget, amit én látok.",
        daysAgo: 4,
      },
      {
        id: "miert-nem-adod-at-c3",
        memberId: "m18",
        text: "Leírtam a három dolgot. Mindhárom mellé a gyorsabb, ha megcsinálom magam került, és ezt a mondatot már harmadik éve mondogatom.",
        daysAgo: 1,
      },
    ],
  },

  "mit-delegalj-eloszor": {
    text: `A legtöbben azt adnák át először, amit a legjobban utálnak. Én is így kezdtem, és rosszul sült el. Azt a területet akartam lerázni magamról, amihez a legkevésbé értettem, így azt sem tudtam elmondani, mit kérek, és azt sem tudtam megítélni, amit visszakaptam. Amit nem értesz, azt nem delegálod, hanem magára hagyod.

Jobb kiindulópont a naptárad. Egy héten át írd fel félóránként, mivel telt az időd. Nem kell szépnek lennie, elég egy füzet. A hét végén menj végig a listán, és keresd azokat a tételeket, amelyekre egyszerre igaz ez a négy:

- hetente vagy naponta ismétlődik,
- el tudod mondani, mitől jó az eredmény,
- ha elsőre félremegy, az bosszantó, de nem végzetes,
- nem ez az, amiért az ügyfél éppen téged választ.

Nálam az első ilyen tétel az időpontok egyeztetése és az ajánlatok utánkövetése volt. Apróságnak tűnt, mégis heti hat-hét órát vitt el, és senki nem hiányolta belőle a személyemet.

Az első átadott feladatnak két dolga van. Időt szabadít fel, és megtanít téged átadni. Ezért legyen kicsi és jól körülhatárolt. A nagy, kényes ügyek ráérnek akkor, amikor ebben már mindketten gyakorlottak vagytok.

Amit viszont még sokáig ne adj ki a kezedből: a legfontosabb ügyfélkapcsolatok, az árazás és a pénzügyi döntések. Ezeknél előbb rendszer kell, csak utána ember.

A feladatod erre a hétre az időnapló. A végén válassz ki belőle egyetlen tételt, és karikázd be.`,
    resources: [
      { label: "Táblázat: egyhetes időnapló", kind: "xlsx", size: "96 KB" },
      { label: "Ellenőrzőlista: átadható-e ez a feladat", kind: "pdf", size: "180 KB" },
    ],
    comments: [
      {
        id: "mit-delegalj-eloszor-c1",
        memberId: "m06",
        text: "Az időnaplóból kiderült, hogy heti öt órát töltök időpontok átszervezésével a rendelőben. Ez lett a bekarikázott tétel, az asszisztensem hétfőtől átveszi.",
        daysAgo: 9,
      },
      {
        id: "mit-delegalj-eloszor-c2",
        memberId: "m03",
        text: "Én pont a könyvelési előkészítést akartam elsőként lepasszolni, mert utálom. Most már értem, miért nem tudtam elmondani a kollégának, mit is várok tőle.",
        daysAgo: 3,
      },
    ],
  },

  "a-feladat-atadasa": {
    text: `Az átadás nem egy mondat a folyosón. Amikor nálam egy delegálás félrement, utólag szinte mindig kiderült, hogy a másik pontosan azt csinálta, amit mondtam. Csak én nem azt mondtam, amit gondoltam.

Azóta minden átadásnál ugyanazon a hat lépésen megyek végig:

1. **Az eredményt írd le, ne a lépéseket.** Mi lesz kész, és miről látszik, hogy jó.
2. **Mondd el, miért fontos.** Aki érti a célt, az a váratlan helyzetben is jól dönt.
3. **Add meg a kereteket.** Határidő, költségkeret, és hogy miben dönthet egyedül.
4. **Kérd meg, hogy mondja vissza a saját szavaival.** Itt derül ki a félreértések nagy része.
5. **Egyeztessetek előre ellenőrzési pontot.** Így nem kell a válla fölött állnod, és ő sem érzi bizalmatlanságnak, amikor ránézel.
6. **Adj visszajelzést az eredményre.** Arra is, ami jó lett.

A legnehezebb rész ezután jön. A feladat vissza akar majd kerülni hozzád, általában egy kérdés formájában: ezzel most mit csináljak. Ha ilyenkor megoldod helyette, a feladat újra a tiéd. Én azt szoktam visszakérdezni, hogy ő mit javasol. Az esetek nagy részében van javaslata, és többnyire használható.

Számolj azzal is, hogy az első két-három alkalom több idődbe kerül, mint ha magad csinálnád. Ez nem kudarc, hanem a betanítás ára, és egyszer kell kifizetni.

Vedd elő a múlt héten bekarikázott feladatot, és írd le hozzá az első három lépést egy fél oldalon, mielőtt bárkinek szólnál róla.`,
    resources: [
      { label: "Sablon: feladatátadó lap", kind: "docx", size: "74 KB" },
      { label: "Ellenőrzőlista: az átadás hat lépése", kind: "pdf", size: "160 KB" },
    ],
    comments: [
      {
        id: "a-feladat-atadasa-c1",
        memberId: "m22",
        text: "A negyedik lépést eddig mindig kihagytam, mert kínosnak éreztem visszakérdezni. Tegnap kipróbáltam egy szerverátállásnál, és két komoly félreértés derült ki öt perc alatt.",
        daysAgo: 5,
      },
      {
        id: "a-feladat-atadasa-c2",
        memberId: "m19",
        text: "A te mit javasolsz kérdést felírtam a monitorom szélére. Az asszisztensem először meglepődött, aztán kiderült, hogy a helyszínbejárásokról jobb ötletei vannak, mint nekem.",
        daysAgo: 2,
      },
      {
        id: "a-feladat-atadasa-c3",
        memberId: "m24",
        text: "Kérdés: ha a kollégám a brigáddal kint van a terepen, az ellenőrzési pont lehet egy fotó a nap végén, vagy az már túl kevés?",
        daysAgo: 0,
      },
    ],
  },

  "az-elso-kulcsember": {
    text: `Feladatokat átadni egy dolog. A cég akkor lép szintet, amikor először adsz át egy egész területet valakinek, aki onnantól nem végrehajt, hanem gazdája annak a résznek. Én őt hívom kulcsembernek.

Az első hibám az volt, hogy saját magam másolatát kerestem. Olyat, aki úgy gondolkodik, úgy beszél és úgy dönt, mint én. Ilyen ember nincs, és ha lenne, a saját cégét vezetné. Aki mellettem végül bevált, abban volt erős, amiben én gyenge: rendet tartott ott, ahol én csak lendületet vittem.

Érdemes először házon belül körülnézni. Sokszor ott van már az, akihez a többiek maguktól fordulnak, ha te nem vagy bent. Ő már félig kulcsember, csak még senki nem mondta ki.

Három dolgot kell ilyenkor odaadnod, és mindhárom nehéz:

- **Döntési jogot.** Terület döntési jog nélkül csak több munka.
- **Nyilvános felhatalmazást.** A csapat előtt mondd ki, hogy ebben mostantól ő dönt, és tartsd is magad hozzá.
- **A hibázás jogát.** Másképp fogja csinálni, mint te, és egy része jobb lesz.

Van egy kockázat, amiről ritkán esik szó. Ha minden tudás egyetlen emberhez vándorol, a függést nem szüntetted meg, csak áthelyezted. Ezért kérem mindig, hogy a kulcsember írja le, hogyan működik a területe, és legyen valaki, aki helyettesíteni tudja.

Gondold végig: ha holnaptól egy területet teljesen ki kellene adnod a kezedből, melyik lenne az, és kire néznél először.`,
    resources: [
      { label: "Munkalap: a kulcsember profilja", kind: "pdf", size: "230 KB" },
      { label: "Sablon: területátadási megállapodás", kind: "docx", size: "88 KB" },
    ],
    comments: [
      {
        id: "az-elso-kulcsember-c1",
        memberId: "m11",
        text: "A szervizben a legrégebbi szerelőmhöz megy mindenki, ha nem vagyok bent. Eddig ezt inkább zavarónak éreztem, most látom, hogy ő a műhelyvezetőm, csak még nem mondtam ki.",
        daysAgo: 11,
      },
      {
        id: "az-elso-kulcsember-c2",
        memberId: "m08",
        text: "A nyilvános felhatalmazáson csúsztam el. Kineveztem egy tanulmányi vezetőt, aztán a tanárok továbbra is hozzám jöttek, én pedig válaszoltam nekik. Jövő héttől visszairányítom őket.",
        daysAgo: 7,
      },
    ],
  },

  "felvetel-ertekek-menten": {
    text: `A legdrágább felvételem papíron a legjobb volt. Hibátlan önéletrajz, magabiztos interjú, erős szakmai tudás. Fél év múlva a fél csapat kerülte, mert soha nem ismert be hibát, és mindig talált valakit, akire rátolhatta. A szaktudását tudtam volna pótolni. A hozzáállását nem tudtam megváltoztatni.

Azóta fordított sorrendben nézem az embereket. A szakmát nagyrészt meg lehet tanítani. Azt, hogy valaki szól-e, ha bajt lát, vagy befejezi-e, amit elkezdett, nem.

Ehhez előbb neked kell tudnod, mik a céged értékei. Nem a falra írt szavakra gondolok, hanem viselkedésre. Gondolj a két legjobb emberedre, és írd le, mit csinálnak másképp, mint a többiek. Abból a három-négy mondatból lesz a szűrőd.

Az interjún pedig ne arról kérdezz, mit tenne, hanem arról, mit tett:

- Mesélj egy esetről, amikor hibáztál a munkádban. Mi történt utána.
- Mikor mondtál utoljára ellent a főnöködnek, és hogyan.
- Mi volt az a feladat, amit senki nem kért tőled, mégis megcsináltad.

A válasz tartalma mellett azt figyeld, mennyire konkrét. Aki átélte, az részleteket mond. Aki kitalálja, az általánosságokat.

Ha lehet, a döntés előtt dolgozzatok együtt egy fizetett próbanapot. Egy közös nap többet mutat, mint három beszélgetés, és a jelölt is látja, hová kerülne.

Írd le még ma a céged három értékét egy-egy megfigyelhető viselkedésként. Ha nem megy könnyen, az is fontos információ.`,
    resources: [
      { label: "Munkalap: értékekből viselkedés", kind: "pdf", size: "200 KB" },
      { label: "Sablon: interjúkérdések múltbeli helyzetekre", kind: "docx", size: "82 KB" },
      { label: "Táblázat: jelöltek összehasonlítása", kind: "xlsx", size: "110 KB" },
    ],
    comments: [
      {
        id: "felvetel-ertekek-menten-c1",
        memberId: "m14",
        text: "HR-esként csak megerősíteni tudom a múltbeli helyzetekre kérdezést. Annyit tennék hozzá, hogy érdemes minden jelöltnek ugyanazt a három kérdést feltenni, különben nem lehet összevetni őket.",
        daysAgo: 8,
      },
      {
        id: "felvetel-ertekek-menten-c2",
        memberId: "m16",
        text: "A próbanap nálunk régóta megvan, de eddig csak azt néztem, hogy bírja-e a tempót a cukrászdában. Mostantól azt is figyelem, szól-e, ha valamit elrontott.",
        daysAgo: 3,
      },
      {
        id: "felvetel-ertekek-menten-c3",
        memberId: "m26",
        text: "Nehezebben ment a három érték, mint gondoltam. Az első, ami végül leírható lett: nálunk senki nem hagy ott nyitott elosztószekrényt, akkor sem, ha csak öt percre megy el.",
        daysAgo: 1,
      },
    ],
  },

  "heti-csapatmegbeszeles": {
    text: `Évekig úgy vezettem a csapatot, hogy mindenkivel külön beszéltem, amikor éppen összefutottunk. Ugyanazt elmondtam ötször, mindenki mást értett belőle, és egyedül én láttam a teljes képet. Ez a helyzet kényelmes annak, aki szeret nélkülözhetetlen lenni, a cégnek viszont rossz.

A heti megbeszélés erre a legegyszerűbb ellenszer, ha három szabályt betartasz. Mindig ugyanakkor van. Legfeljebb negyvenöt perc. És minden héten ugyanaz a napirendje:

1. **Számok.** Két-három mutató, amelyekből látszik, hogyan állunk. Öt perc.
2. **Múlt heti vállalások.** Mindenki annyit mond: kész vagy nincs kész. Magyarázkodás nélkül.
3. **Elakadások.** Mi az, amiben valaki segítséget kér.
4. **E heti vállalások.** Ki, mit, mikorra. Valaki leírja, és mindenki látja.

Amit nem szabad engedni: hogy a megbeszélés problémamegoldó műhellyé váljon. Ha egy ügy csak két embert érint, ők ketten beszéljék meg utána, a többiek pedig menjenek dolgozni.

A cél az, hogy ez a ritmus nélküled is működjön. Ezért nálunk hetente más vezeti az alkalmat, a napirend pedig ki van függesztve. Eleinte nehéz volt csendben maradnom, és nem mindenre azonnal választ adnom. Amikor sikerült, kiderült, hogy a csapat többet tud, mint amennyit addig hagytam neki megmutatni.

A próba egyszerű. Ha a megbeszélés már négy-öt hete megy, hagyj ki egyet szándékosan. Ha nélküled is megtartják, és a vállalások listája elkészül, akkor van csapatritmusod. Ha elmarad, akkor az a megbeszélés még a tiéd, nem az övék.`,
    resources: [
      { label: "Sablon: a heti megbeszélés napirendje", kind: "docx", size: "68 KB" },
      { label: "Táblázat: heti vállalások követése", kind: "xlsx", size: "120 KB" },
    ],
    comments: [
      {
        id: "heti-csapatmegbeszeles-c1",
        memberId: "m07",
        text: "Nálunk a hétfő reggeli megbeszélés rendszeresen másfél órásra nyúlt, mert minden fuvarproblémát ott akartunk megoldani. Két hete tartjuk a negyvenöt percet, és a diszpécserek hálásak érte.",
        daysAgo: 12,
      },
      {
        id: "heti-csapatmegbeszeles-c2",
        memberId: "m12",
        text: "Kihagytam egyet szándékosan. Megtartották, csak a vállalásokat nem írta le senki, úgyhogy ezt a szerepet most név szerint kiosztottam.",
        daysAgo: 4,
      },
    ],
  },

  "tarsakkal-vallalkozni": {
    text: `Társsal vállalkozni olyan, mint összeköltözni valakivel. Az első hónapok lendülete semmit nem árul el arról, milyen lesz a harmadik év. Dolgoztam társakkal jól is, rosszul is, és a különbség szinte soha nem a szakmai tudáson múlt, hanem azon, miről beszéltünk az elején, és miről nem.

Először azt érdemes tisztázni magadban, miért akarsz társat. Jó ok az, ha a másik olyasmit hoz, ami belőled hiányzik: tudást, kapcsolatokat, tőkét, másfajta gondolkodást. Rossz ok, ha egyedül félsz belevágni, vagy ha valójában munkatársra volna szükséged, csak nincs pénzed fizetésre. Az ilyen társulásból később drága alkalmazotti viszony lesz, tulajdonrésszel.

Négy beszélgetést tartok kötelezőnek, mielőtt bármit aláírtok:

- **Hová tartunk.** Eladni akarjuk a céget tíz év múlva, vagy ebből akarunk nyugodtan élni.
- **Pénz.** Ki mennyit tesz be, ki mennyit vesz ki, és mi történik a nyereséggel.
- **Idő.** Ki hány órát dolgozik benne, és mi van, ha ez megváltozik.
- **Kiszállás.** Hogyan válunk el, ha valamelyikünk menni akar.

Az utolsót kerüli el a legtöbb páros, mert ünneprontásnak érzi. Pedig békeidőben tíz perc alatt megegyeztek abban, amin vita közben hónapokig marakodnátok. Amit az elején kínos kimondani, azt később sokszoros áron kell megbeszélni.

Ha még nem dolgoztatok együtt, ne céggel kezdjétek, hanem egy közös projekttel, amelynek van eleje és vége. Három hónap közös munka után mindketten tudni fogjátok, amit tudni kell. Ha pedig már van társad, nézd meg, a négy beszélgetésből melyik maradt el nálatok.`,
    resources: [
      { label: "Munkalap: négy beszélgetés a társulás előtt", kind: "pdf", size: "250 KB" },
      { label: "Ellenőrzőlista: mit rögzítsetek írásban", kind: "pdf", size: "170 KB" },
    ],
    comments: [
      {
        id: "tarsakkal-vallalkozni-c1",
        memberId: "m13",
        text: "Hat éve vagyunk ketten a cégben, és a kiszállásról soha nem beszéltünk. Pénteken leültünk, furcsa volt elkezdeni, de egy óra alatt a nagyján túl voltunk.",
        daysAgo: 10,
      },
      {
        id: "tarsakkal-vallalkozni-c2",
        memberId: "m21",
        text: "A próbaprojekt ötlete jókor jött. Épp közös céget akartunk alapítani egy trénertársammal, most inkább egyetlen közös képzéssel indulunk, és decemberben döntünk.",
        daysAgo: 5,
      },
      {
        id: "tarsakkal-vallalkozni-c3",
        memberId: "m09",
        text: "Családi borászatnál ez még kényesebb, mert a társad a testvéred. Az idő kérdése nálunk a legnehezebb: ki mennyit van kint a szőlőben, és ki mennyit a pincében a vendégekkel.",
        daysAgo: 2,
      },
    ],
  },

  "szerepek-es-felelosseg": {
    text: `A társas cégek visszatérő mondata, hogy ezért mindketten felelünk. Jól hangzik, a gyakorlatban viszont azt jelenti, hogy senki. Nálunk így maradt gazdátlan hónapokig a kintlévőségek behajtása. Mindketten azt hittük, a másik figyeli, és mindketten megsértődtünk, amikor kiderült, hogy nem.

Az alapszabály, amihez azóta tartom magam: minden területnek egy gazdája van. Nem kettő. A másik beleszólhat, kérdezhet, segíthet, de a végén egyvalaki dönt, és ugyanő felel az eredményért. A tulajdoni arány és a szerep két külön dolog. Lehettek fele-fele arányban tulajdonosok úgy, hogy az értékesítésben az egyikőtök szava dönt, a pénzügyekben a másiké.

A döntéseket három szintre osztottuk:

- **Egyedül döntök.** A saját területemen belül, egy megbeszélt összeghatárig.
- **Döntök, de előtte kikérem a véleményed.** Nagyobb tételek és minden, ami a másik területére is hat.
- **Csak együtt döntünk.** Hitel, új társ, kulcsember felvétele vagy elküldése, irányváltás.

A határokat számmal írjátok le, ne jelzőkkel. A nagyobb kiadás mindenkinek mást jelent.

Ez nem csak kettőtök ügye. Ha a csapat nem tudja, melyik kérdéssel kihez menjen, ahhoz megy, akitől kedvezőbb választ remél. Ebből lesz az a helyzet, amikor a társak egymás döntéseit írják felül, többnyire úgy, hogy nem is tudnak róla.

Készítsetek egy egyoldalas szereptérképet: területek, gazdák, döntési szintek. Függesszétek ki, és félévente nézzétek át, mert a cég változik, és a szerepeknek követniük kell. Kezdd azzal, hogy felírod, melyik terület gazdátlan most nálatok.`,
    resources: [
      { label: "Sablon: egyoldalas szereptérkép", kind: "docx", size: "90 KB" },
      { label: "Táblázat: döntési szintek és összeghatárok", kind: "xlsx", size: "105 KB" },
    ],
    comments: [
      {
        id: "szerepek-es-felelosseg-c1",
        memberId: "m10",
        text: "A kollégák tényleg ahhoz mennek, akitől jobb választ várnak. Nálunk a határidő-módosításokat mindig a társamtól kérték, mert ő engedékenyebb. A szereptérkép óta ez egyértelműen hozzám tartozik.",
        daysAgo: 9,
      },
      {
        id: "szerepek-es-felelosseg-c2",
        memberId: "m15",
        text: "Az összeghatár hiányzott nálunk. Az irodában a nagyobb hirdetési költés nekem százezer forint fölött kezdődik, a társamnak ötszázezer fölött. Most már le van írva egy szám.",
        daysAgo: 3,
      },
    ],
  },

  "amikor-el-kell-valni": {
    text: `Ezt a leckét senki nem várja, mégis ezen múlik a legtöbb. Azt, hogy valakitől el kell válnom, szinte mindig hónapokkal korábban tudtam, mint ahogy megléptem. Addig magyarázatokat gyártottam: majd belejön, most nehéz időszaka van, nincs a helyére más. Közben a legjobb embereim azt figyelték, mit tűrök el, és ebből szűrték le, mi számít nálunk valójában.

A halogatás ára nem az illető fizetése. Hanem az, amit a többiek a csendedből megtanulnak.

A tisztességes út nálam három lépés. Először egy egyenes beszélgetés: mit várok, ehhez képest mit látok, és mikorra kell változásnak lennie. Konkrétan, írásban is. Aztán valódi esély és segítség a megbeszélt időre. Ha ezután sincs elmozdulás, akkor döntés, és nem egy újabb határidő.

Maga a beszélgetés legyen rövid és világos. A döntést közlöd, nem alkudozol róla. Nem sorolod fel újra a sérelmeket, mert azokon már túl vagytok. Megköszönöd, ami jó volt, és elmondod a gyakorlati lépéseket. Az ember méltósága akkor is számít, amikor a közös munka véget ér, és a csapatod pontosan látni fogja, hogyan bántál vele.

Társsal elválni nehezebb, mert ott pénz, tulajdon és gyakran barátság is van a tétben. Ilyenkor térül meg, ha a kiszállás szabályait békeidőben leírtátok. Ha nem tettétek meg, vonjatok be egy külső, mindkettőtök által elfogadott embert, mielőtt az indulatok döntenek helyettetek.

Egy kérdést hagyok itt a végére. Van-e most valaki a cégedben, akiről fél éve tudod a választ, csak még nem mondtad ki.`,
    resources: [
      { label: "Sablon: a tisztázó beszélgetés vázlata", kind: "docx", size: "76 KB" },
      { label: "Ellenőrzőlista: tisztességes elválás lépésről lépésre", kind: "pdf", size: "190 KB" },
    ],
    comments: [
      {
        id: "amikor-el-kell-valni-c1",
        memberId: "m04",
        text: "A végén a kérdésre azonnal volt egy nevem. Tavasz óta halogatom, és közben két jó koordinátorom kérdezte meg, meddig viszik még helyette a munkát a rendezvényeken.",
        daysAgo: 7,
      },
      {
        id: "amikor-el-kell-valni-c2",
        memberId: "m17",
        text: "Az első lépést eddig mindig kihagytam, célozgattam, aztán egyszer csak elegem lett. A következőnél írásban is odaadom, mit várok és mikorra.",
        daysAgo: 2,
      },
      {
        id: "amikor-el-kell-valni-c3",
        memberId: "m23",
        text: "Kis stúdióban ez különösen nehéz, mert hárman vagyunk, és mindenki mindent lát. Pont ezért segített az, amit a méltóságról írtál.",
        daysAgo: 0,
      },
    ],
  },
};
