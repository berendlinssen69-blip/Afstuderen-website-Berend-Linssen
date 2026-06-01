/* ACT 2 — 19 stappen · volledige inhoud uit het procesverslag
   Volgorde:
   01  Het beginpunt, de open vraag
   02  Van vraag naar opdracht
   03  Plan van Aanpak — hoofdvraag + 8 deelvragen
   04  Methodische aanpak
   05  Onderzoek (in chapters-research.js)
   06  Voorlopig PvE
   07  Brainstorm (in chapters-brainstorm.js)
   08  Van ideeën naar richtingen
   09  Ideeën structureren, 3 clusters
   10  Schetsen & visuele verkenning
   11  Leren naaien, Design by Doing
   12  De keuze voor tassen
   13  Het retailgesprek — Henri
   14  Het spanningsveld
   15  Doelgroep definiëren
   16  Vormverkenning & schetsproces
   17  Schetsen & vormverkenning (in chapters-bag-design.js)
   18  Verantwoording, waarom past dit bij Sit & Heat
   19  Harde cijfers
*/

/* ---------- 01. HET BEGINPUNT ---------- */
const Step01_OpenVraag = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="03 Het beginpunt">
      <FrameLabel num="01" name="Het beginpunt — de open vraag" />
      <div className="step-bg" />
      <div className="step-pin">
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet"/>STAP 01 · HET BEGINPUNT</div>
          <h2 className="wf-title">Het beginpunt</h2>
          <p className="wf-body lg">
            Sit &amp; Heat maakt verwarmde kussens en stoelen voor buiten. Een energiezuinig alternatief voor de gasheaters die rond 2008 op elk terras in Nederland stonden.
          </p>
          <p className="wf-body">
            Tijdens de kennismaking benoemde Sit &amp; Heat: "Wij hebben hoogwaardige reststoffen die momenteel bij het afval liggen, en we willen daar iets mee."
          </p>
          <p className="wf-body">
            Dat was het vertrekpunt. Geen uitgewerkte briefing, geen bekend product. Alleen een materiaalstroom waarvan we de omvang, samenstelling en mogelijkheden nog moesten ontdekken en de vraag of daar iets zinvols uit te halen viel.
          </p>
        </div>
        <div className="step-stage reveal-right">
          <img
            src="foto%27s%20en%20animaties%20website/remove_the_black_strap_around_202605061019.jpeg"
            alt="Groene bak met reststoffen bij Sit en Heat"
            style={{width:"80%", aspectRatio:"4/5", objectFit:"cover", display:"block"}}
          />
        </div>
      </div>
    </section>
  );
};

/* ---------- 02. VAN VRAAG NAAR OPDRACHT ---------- */
const Step02_VraagNaarOpdracht = () => {
  const ref = useReveal();
  return (
    <section className="step-fullbg" ref={ref} data-screen-label="04 Van vraag naar opdracht">
      <FrameLabel num="02" name="Van vraag naar opdracht" />
      <div className="bg">
        <img
          src="foto%27s%20en%20animaties%20website/stoffen-rollen.jpg"
          alt="Stoffen rollen in de werkplaats van Sit en Heat"
          style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}}
        />
      </div>
      <div className="scrim" />
      <div className="pin">
        <div className="panel reveal-stagger">
          <div className="step-num"><span className="bullet"/>STAP 02 · VAN VRAAG NAAR OPDRACHT</div>
          <h2 className="wf-title">Van open vraag<br/>naar opdracht</h2>
          <p className="wf-body lg">
            Een vraag als "doe iets met onze reststoffen" is geen opdracht. Om tot een werkbare opdracht te komen was het belangrijk om eerst het speelveld te begrijpen: welke materialen er beschikbaar waren, wie er bij het project betrokken zouden zijn, en binnen welke randvoorwaarden het eindproduct moest vallen.
          </p>
          <p className="wf-body">
            Dat vroeg om een brede, parallelle verkenning. Gesprekken met Jorg over de productie en het materiaal, een stakeholderanalyse voor de betrokken partijen Sit &amp; Heat, het sociale atelier, de opleiding en onderzoek naar de randvoorwaarden vanuit maakbaarheid en duurzaamheid.
          </p>
          <p className="wf-body">
            Het resultaat was het Plan van Aanpak. Dat document formaliseerde de opdracht, stelde de onderzoeksvraag scherp en bepaalde het kader waarbinnen het project zich zou bewegen.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- 03. HOOFDVRAAG + DEELVRAGEN (PvA) ---------- */
const Step03_PvA = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="05 Plan van Aanpak">
      <FrameLabel num="03" name="Plan van Aanpak — hoofdvraag + 8 deelvragen" />
      <div className="step-bg" />
      <div className="step-pin" style={{gridTemplateColumns:"1fr", height:"auto", minHeight:"80vh", position:"relative", top:"auto"}}>
        <div className="step-content reveal-stagger" style={{maxWidth:"960px", margin:"0 auto"}}>
          <div className="step-num"><span className="bullet"/>STAP 03 · PLAN VAN AANPAK</div>
          <h2 className="wf-title">Wat het Plan van<br/>Aanpak opleverde</h2>
          <p className="wf-body" style={{marginBottom:16}}>De verkenning leidde tot een centrale onderzoeksvraag die de drie kernlagen van de opdracht samenvat: materiaal, productiecontext en marktrelevantie</p>
          <div style={{border:"1px solid var(--line)", padding:28, background:"var(--paper)"}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--thread)", marginBottom:6}}>Probleemstelling</div>
            <p style={{fontSize:13, lineHeight:1.6, margin:"0 0 16px", color:"var(--ink)"}}>
              Het ontwerpprobleem is niet simpelweg "maak iets van reststof". De uitdaging zit in de spanning tussen drie domeinen die elk hun eigen eisen stellen: het materiaal is hoogwaardig maar variabel van maat en kleur, het sociaal atelier beperkt de complexiteit van productietechnieken, en het eindproduct moet commercieel passen. Deze drie domeinen staan niet los van elkaar. Een materiaalkeuze die de maakbaarheid vergroot kan de marktwaarde verlagen, en omgekeerd. Het ontwerp moet dus op alle drie de lagen tegelijk functioneren.
            </p>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--ink-soft)", marginBottom:14}}>Centrale onderzoeksvraag</div>
            <h2 className="wf-title" style={{fontSize:"clamp(22px, 2.8vw, 38px)"}}>
              "Hoe kan Sit &amp; Heat haar <span style={{color:"var(--thread)"}}>reststromen</span> omzetten in een of meerdere <span style={{color:"var(--green)"}}>circulaire, marktwaardige productconcepten</span> die produceerbaar zijn door mensen met een afstand tot de arbeidsmarkt?"
            </h2>
          </div>
          <p className="wf-body" style={{marginTop:4}}>
            Uit deze hoofdvraag zijn acht deelvragen afgeleid die elk een specifiek aspect van het ontwerpprobleem adresseren:
          </p>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:8}}>
            {[
              ["DV 1","Welke eigenschappen, volumes en variaties hebben de beschikbare restmaterialen?"],
              ["DV 2","Welke productcategorieën zijn geschikt voor circulaire soft goods binnen de maakbaarheid van een sociaal atelier?"],
              ["DV 3","Welke technische en organisatorische randvoorwaarden gelden binnen het atelier?"],
              ["DV 4","Welke productconcepten zijn te produceren met de telkens variërende materialen en maten?"],
              ["DV 5","Welke beperkingen moet rekening mee gehouden worden binnen de productie?"],
              ["DV 6","Welke relevante duurzaamheidstrends beïnvloeden de ontwerpopgave?"],
              ["DV 7","Naar wat voor soort producten is er vraag binnen de doelgroep van Sit & Heat?"],
              ["DV 8","Hoe verhouden de geselecteerde concepten zich tot kostprijs, verkoopprijs en duurzaamheidsimpact?"],
            ].map(([k,v],i)=>(
              <div key={i} style={{border:"1px solid var(--line)", padding:14, background:"var(--paper)"}}>
                <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--thread)"}}>{k}</div>
                <div style={{marginTop:8, fontSize:13, lineHeight:1.5}}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{border:"1px solid var(--line-soft)", padding:16, background:"var(--fill)", marginTop:4}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--ink-soft)", marginBottom:8}}>RISICOANALYSE</div>
            <p className="wf-body">
              Als onderdeel van het Plan van Aanpak werden 19 risico's in kaart gebracht, verdeeld over
              acht categorieën: materiaal, atelier, techniek, markt, duurzaamheid, planning, onderzoek en
              communicatie. 
              De risico's die hier als hoog werden beoordeeld, variatie in materiaaleigenschappen, beperkte
              ateliercapaciteit en tijdoverschrijding bij prototyping kwamen later daadwerkelijk terug als
              sturende factoren in de ontwerpkeuzes. (voor het volledige overzicht van risico's, zie het <a href="onderzoek.html?open=risico" style={{color:"var(--green)", textDecoration:"underline"}}>risicodocument</a> onder het kopje onderzoek).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- 04. METHODISCHE AANPAK ---------- */
const Step04_MethodeCirculariteit = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="06 Methodische aanpak" style={{minHeight:"280vh", padding:"80px 0 120px"}}>
      <FrameLabel num="04" name="Methodische aanpak" />
      <div className="step-bg" style={{
        backgroundImage:  
          "repeating-linear-gradient(0deg, transparent 0 39px, var(--line-soft) 39px 40px)," +
          "repeating-linear-gradient(90deg, transparent 0 39px, var(--line-soft) 39px 40px)",
        opacity: 0.25
      }} />
      <div className="step-pin" style={{position:"relative", top:"auto", height:"auto"}}>
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet"/>STAP 04 · METHODE</div>
          <h2 className="wf-title">Methodische aanpak</h2>
          <p className="wf-body lg">
            De Double Diamond werd gekozen als hoofdstructuur voor het project, omdat deze een duidelijke opbouw biedt van breed verkennen naar een concrete oplossing. Voor de dagelijkse ontwerpbeslissingen bleek deze methode echter te globaal. Daarom is de basiscyclus van Roozenburg &amp; Eekels (1995) gebruikt als aanvullende werkwijze. Deze cyclus van analyseren, bedenken, uitwerken en evalueren maakte het mogelijk om ontwerpkeuzes stapsgewijs en iteratief te ontwikkelen. De volledige methodische verantwoording staat in het <a href="onderzoek.html?open=pva" style={{color:"var(--green)", textDecoration:"underline"}}>Plan van Aanpak</a>.
          </p>
          <p className="wf-body">
            Die combinatie sloot goed aan bij de aard van de opdracht. De beschikbare restmaterialen verschilden per partij en de ontwerpopgave raakte meerdere thema's tegelijk: materiaal, productie, markt en duurzaamheid. Door beide methoden te combineren kon zowel op projectniveau als op detailniveau gestructureerd worden gewerkt.
          </p>
          <p className="wf-body">
            Tijdens het proces bleek dat een derde aanpak nodig was. Sommige eigenschappen van het materiaal konden niet goed worden begrepen vanuit onderzoek alleen. Daarom is gewerkt volgens het principe van Design by Doing. Deze aanpak sluit aan bij het concept reflection in action van Donald Schön (1983), waarin ontwerpers kennis opbouwen door te handelen en tegelijkertijd te reflecteren op hun handelen. Door direct met het restmateriaal te werken, te naaien en te experimenteren, ontstond inzicht in de mogelijkheden en beperkingen van het materiaal. Deze praktische leerfase leverde kennis op die met deskresearch alleen niet bereikbaar was.
          </p>
          <p className="wf-body">
            Daarnaast hielp deze aanpak om het risico op tijdsoverschrijding tijdens het prototypen te verkleinen. Door eerst ervaring op te doen met het materiaalgedrag, konden prototypes later sneller en gerichter worden ontwikkeld.
          </p>
          <div style={{border:"1px solid var(--line)", padding:14, background:"var(--paper)", marginTop:4, fontSize:13, lineHeight:1.5}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--thread)", marginBottom:8}}>CIRCULARITEIT ALS UITGANGSPUNT</div>
            <p>Bij de uitleg van circulariteit is gebruikgemaakt van het kader van de Ellen MacArthur Foundation. Hierbij draait het om het zo lang mogelijk behouden en hergebruiken van materialen en producten. Binnen de R-strategiehiërarchie van Potting et al. (PBL, 2017) richt dit project zich op hergebruik en upcycling: restmateriaal van goede kwaliteit wordt direct verwerkt in een nieuw product, zonder het eerst af te breken of ingrijpend te bewerken.</p>
            <p style={{marginTop:8}}>Deze keuze was niet vanzelfsprekend. Acryl is als synthetische vezel technisch gezien recyclebaar, maar in de praktijk is de benodigde infrastructuur beperkt en gaat de kwaliteit van het materiaal tijdens recycling vaak achteruit. Door het materiaal direct opnieuw te gebruiken als buitenstof in een nieuw product, blijft die kwaliteit behouden. Daarom past hergebruik in dit geval beter dan recycling.</p>
          </div>
        </div>
        <div className="step-stage reveal-right" style={{flexDirection:"column", gap:32, justifyContent:"center", alignItems:"center"}}>
          <img
            src="PVA/Double-Diamond-framework-Nessler-2018.webp"
            alt="Double Diamond framework"
            style={{width:"100%", display:"block"}}
          />
          <img
            src="PVA/image008.gif"
            alt="Roozenburg &amp; Eekels basiscyclus"
            style={{width:"55%", display:"block"}}
          />
        </div>
      </div>
    </section>
  );
};

/* ---------- 05. ONDERZOEK ---------- */

const RESEARCHES = [
  {
    n: "01", ttl: "Materiaalonderzoek",
    href: "onderzoek.html?open=materialen",
    meta: "Materiaal · technisch onderzoek",
    body: ["Voordat er aan een product kon worden gedacht, was het noodzakelijk om het beschikbare restmateriaal systematisch in kaart te brengen. Het productieproces van Sit & Heat levert namelijk verschillende materiaalstromen op, elk met eigen eigenschappen, hoeveelheden en beperkingen. Het onderzoek identificeerde de volgende reststromen: solution dyed acryl buitenstof, fiberfill, PVC/polyester composiettextiel, PE stof, synthetisch skai leer, polyurethaanschuim, stroomkabels, bedieningspanelen, omvormers en lithiumbatterijen. Per materiaal is gekeken naar de samenstelling, de mechanische en functionele eigenschappen, de geschiktheid voor recycling of hergebruik, en bestaande toepassingen. Voor de solution dyed acryl is daarbij extra ingezoomd op de prestaties: het materiaal is UV-bestendig, weerbestendig, slijtvast en wasbaar. 'Solution dyed' betekent dat de kleur al in de vezel zit en er niet uit kan lopen. In de textielindustrie is dit een hoogwaardige eigenschap."],
    opl: [
      ["Reststromen in kaart", "Solution dyed acrylic buitenstof, fiberfill, PVC/polyester composiettextiel, PE fabric, synthetisch skai-leer, polyurethaanschuim, stroomkabels, bedieningspanelen, omvormers en lithiumbatterijen."],
      ["Per materiaal onderzocht", "Chemische samenstelling, mechanische en functionele eigenschappen, verhouding tot recycling en hergebruik, bestaande toepassingen in de praktijk."],
      ["Resultaat", "Een volledig overzicht van wat er beschikbaar was, niet als selectie, maar als feitelijke inventarisatie."]
    ],
    concl: "SDA is het meest waardevolle en meest voorkomende restmateriaal bij Sit & Heat. De eigenschappen UV bestendig, weerbestendig, en slijtvast maken het geschikt als hoogwaardig eindproduct. Binnen de R-strategie hiërarchie (Potting et al., 2017) scoort direct hergebruik hoger dan recyclen: de materiaalwaarde blijft volledig behouden zonder destructieve bewerking. Dit maakte SDA tot het meest voor de handligende ontwerpmateriaal voor het verdere project.",
    pve: [
      { eis:"Circulaire ontwerpprincipes", toel:"R-strategie: hergebruik scoort hoger dan recycling (Potting et al., 2017)" },
      { eis:"Afwerking straalt kwaliteit uit", toel:"SDA is UV bestendig, slijtvast en kleurvast (solution dyed)" },
      { eis:"Duurzaam verhaal zichtbaar/uitlegbaar", toel:"Solution dyed = kleur in de vezel, vertelbaar materiaalverhaal" },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="14" y="56" width="72" height="10"/>
        <rect x="20" y="44" width="60" height="10"/>
        <rect x="12" y="32" width="76" height="10"/>
        <rect x="22" y="20" width="56" height="10"/>
        <line x1="14" y1="76" x2="86" y2="76" strokeDasharray="2 3"/>
      </svg>
    )
  },
  {
    n: "02", ttl: "Marktonderzoek",
    href: "onderzoek.html?open=markt",
    meta: "Markt · circulaire softgoods + S&H markt",
    body: ["Naast het materiaal is ook de markt onderzocht. Niet om een commercieel product te positioneren, maar om te begrijpen waar een circulair concept logisch en haalbaar zou kunnen zijn, ook kijkend naar de bestaande markt van Sit & Heat. Drie merken zijn als referentie geanalyseerd. Freitag is daarbij het meest relevante voorbeeld. Dit merk heeft zijn hele positionering gebouwd rond een restmateriaal dat per definitie varieert. Elke tas is uniek door de willekeurige patronen van vrachtwagenzeil. Dat sluit goed aan op de situatie in dit project, waar restmaterialen van Sit & Heat ook variëren in kleur, formaat en samenstelling per batch. Freitag laat zien dat je die variatie niet hoeft te vermijden, maar juist kunt gebruiken als onderdeel van je merkverhaal. Die les is hier direct toepasbaar. Patagonia en Vaude laten zien dat ook kleinere accessoires een geschikte bestemming kunnen zijn voor reststromen (denk aan toilettassen, sleutelhangers etc.). Zij werken echter met relatief stabiele, gestandaardiseerde materiaalstromen, waardoor hun aanpak minder goed past bij de wisselende aard van de Sit & Heat restmaterialen. Binnen de markt voor verwarmde comfortproducten is circulariteit in materiaalgebruik nog nauwelijks toegepast. Dat biedt ruimte om een eigen positie in te nemen. Een belangrijke conclusie is dat het uiteindelijke product niet per se een verwarmd product hoeft te zijn. De restmaterialen zijn breed inzetbaar. De opdracht draaide vooral om het creëren van circulaire waarde, niet om het vasthouden aan de bestaande merkcategorie."],
    opl: [
      ["Circulaire softgoods", "Freitag is het meest uitgesproken voorbeeld, een merk dat volledig is opgebouwd rondom een reststof, waarbij het materiaal zelf het kernverhaal is. Patagonia en VAUDE laten zien dat ook kleinere accessoires geschikt zijn als bestemming voor reststromen."],
      ["S&H markt", "Binnen de markt voor verwarmde comfortproducten (waar Sit & Heat de grootste horecaspeler is) bleek circulariteit in materiaalgebruik nog nauwelijks toegepast. Dat is een vrije positie."],
      ["Belangrijkste conclusie", "Het te ontwikkelen product hoeft niet per se een verwarmd product te zijn. De opdracht was circulaire waardecreatie, niet merkconsistentie."]
    ],
    concl: "De markt voor circulaire softgoods is bestaand en schaalbaar (Freitag, Patagonia, VAUDE). Freitag toont aan dat variatie in restmateriaal geen productiefout is maar een merkpropositie, direct toepasbaar op de wisselende SDA voorraad van Sit & Heat. Binnen de eigen markt van Sit & Heat is circulariteit in materiaalgebruik nog nauwelijks toegepast, wat een vrije positie oplevert. De opdracht is daarmee circulaire waardecreatie, niet merkconsistentie. Het product hoeft geen verwarmd product te zijn.",
    pve: [
      { eis:"Marktwaardig", toel:"Bewezen markt voor circulaire softgoods (Freitag, Patagonia, VAUDE)" },
      { eis:"Tolerant voor materiaalvariatie", toel:"Freitag les: variatie als merkpropositie, niet als productiefout" },
      { eis:"Herkenbaar als circulair", toel:"Vrije positie in Sit & Heat's eigen markt" },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="16" y="64" width="14" height="22"/>
        <rect x="36" y="46" width="14" height="40"/>
        <rect x="56" y="32" width="14" height="54"/>
        <rect x="76" y="20" width="14" height="66" strokeDasharray="2 3"/>
        <line x1="14" y1="86" x2="92" y2="86"/>
      </svg>
    )
  },
  {
    n: "03", ttl: "Trendonderzoek",
    href: "onderzoek.html?open=trends",
    meta: "Trend · 8 trends geanalyseerd",
    body: ["Om de ontwerpopgave in een bredere context te plaatsen is onderzocht welke trends relevant zijn voor zowel Sit & Heat als het restmateriaalvraagstuk. Daarbij zijn acht trends geïdentificeerd. Een belangrijke trend is dat reststromen steeds vaker worden gezien als grondstof in plaats van afval. Tegelijkertijd is duurzaamheid niet langer een extra keuze, maar een basisvereiste. Dit sluit direct aan op de kern van de opdracht en op de principes van het circulaire systeem van de Ellen MacArthur Foundation. Daarnaast laat de trend van zichtbare duurzaamheid zien dat variatie in materialen niet per se een nadeel is. Authenticiteit, zichtbare stiksels en het verhaal achter een product worden juist steeds meer gewaardeerd. Dat is relevant, omdat de reststromen van Sit & Heat per definitie variëren. Ook het ontwerpen voor sociale ateliers past binnen een bredere ontwikkeling richting inclusieve werkgelegenheid. Tot slot bevestigt de Horecava 2026 trendrapportage de blijvende relevantie van het bestaande product van Sit & Heat binnen de markt."],
    opl: [
      ["Circulaire economie", "Reststromen worden in toenemende mate gezien als grondstof in plaats van afval. Duurzaamheid ontwikkelt zich van extra keuze naar basisvoorwaarde."],
      ["Zichtbare duurzaamheid", "Variatie in restmateriaal hoeft geen probleem te zijn, authenticiteit, zichtbare stiksels en materiaalverhalen worden soms juist gewaardeerd."],
      ["Sociale duurzaamheid", "Ontwerpen voor een sociaal atelier past bij de bredere maatschappelijke trend richting inclusieve werkgelegenheid."],
      ["Horecava 2026", "Duurzaamheid als systeemvraagstuk en energiezuinig comfort (bevestigt de relevantie van Sit & Heat's kernproduct)."]
    ],
    concl: "Van de acht geanalyseerde trends zijn er drie direct richtinggevend voor het project. De circulaire economie (Ellen MacArthur Foundation) laat zien dat reststromen steeds vaker als volwaardige grondstof worden behandeld. Duurzaamheid ontwikkelt zich van extra optie naar basisverwachting. Zichtbare duurzaamheid bevestigt dat de materiaalvariatie in de SDA voorraad geen probleem is maar juist een kracht: authenticiteit en het verhaal achter een materiaal worden gewaardeerd. Sociale duurzaamheid valideert het ateliermodel als productiecontext. De Horecava 2026 trendrapportage bevestigt daarnaast de marktrelevantie van het bestaande Sit & Heat product. Samen bevestigen deze trends dat het project aansluit bij bestaande marktontwikkelingen.",
    pve: [
      { eis:"Materiaalgebruik aantoonbaar duurzaam", toel:"Circulaire economie: duurzaamheid als basisverwachting (Ellen MacArthur Foundation)" },
      { eis:"Duurzaam verhaal zichtbaar/uitlegbaar", toel:"Zichtbare duurzaamheid: authenticiteit en materiaalverhaal worden gewaardeerd" },
      { eis:"Maakbaar in sociaal atelier", toel:"Sociale duurzaamheid valideert het ateliermodel" },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M 14 70 L 30 56 L 46 64 L 62 40 L 78 30 L 90 22"/>
        <circle cx="30" cy="56" r="2.5" fill="currentColor"/>
        <circle cx="46" cy="64" r="2.5" fill="currentColor"/>
        <circle cx="62" cy="40" r="2.5" fill="currentColor"/>
        <circle cx="78" cy="30" r="2.5" fill="currentColor"/>
        <line x1="14" y1="84" x2="90" y2="84" strokeDasharray="2 3"/>
      </svg>
    )
  },
  {
    n: "04", ttl: "Materiaalinventarisatie",
    href: "materialen.html",
    meta: "Inventarisatie · gewogen voorraad",
    body: "Naast het technische materiaalonderzoek werd de daadwerkelijk beschikbare voorraad geïnventariseerd. Alle restmaterialen bij Sit & Heat werden gewogen en geregistreerd per materiaalsoort en kleur. De inventarisatie maakte in een oogopslag duidelijk wat de verhoudingen waren.",
    opl: [
      ["Totaal geregistreerd", "Ruim 78 kilo restmateriaal."],
      ["Agora: solution dyed acrylic", "Ruim 37 kilo verspreid over een breed kleurenpallet: rood, oranje, bruin, grijs, geel, groen en blauw."],
      ["Losse stukken < A4 (solution dyed acrylic)", "Meer dan 22 kilo."],
      ["Fiberfill", "Circa 9 kilo."]
    ],
    concl: "Stof is in volume en variatie de dominante reststroom bij Sit & Heat: 37 kg SDA verspreid over zeven kleur groepen, plus 22 kg losse stukken kleiner dan A4. Daarnaast is circa 9 kg fiberfill beschikbaar als secundair materiaal. Het totaal van ruim 78 kg geregistreerd restmateriaal bevestigt dat er voldoende volume en kleurvariatie beschikbaar is voor een consistente productie.",
    pve: [
      { eis:"Min. 70% restmateriaal Sit & Heat", toel:"78 kg restmateriaal beschikbaar, SDA dominant (37 kg + 22 kg)" },
      { eis:"Tolerant voor materiaalvariatie", toel:"Zeven kleuren, wisselende grotes" },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="50" cy="50" r="32"/>
        <path d="M 50 18 L 50 50 L 78 50" />
        <path d="M 50 50 L 22 62" strokeDasharray="2 3"/>
        <text x="50" y="92" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor" stroke="none">78 KG</text>
      </svg>
    )
  },
  {
    n: "05", ttl: "Stakeholderanalyse",
    href: "onderzoek.html?open=risico",
    meta: "Stakeholders · primair + secundair",
    body: ["Om te begrijpen binnen welke context het ontwerp moest landen, zijn alle betrokken partijen in kaart gebracht op rol en invloed.", "Primair: Sit & Heat als opdrachtgever en materiaalexpert, het sociale atelier als toekomstige productiepartner, en de eindgebruiker. De ontwerprol was uitvoerend én verbindend: het samenbrengen van belangen die niet vanzelf op één lijn lagen.", "Sit & Heat bepaalde de randvoorwaarden rond duurzaamheid en merkidentiteit. Het sociale atelier stelde eisen aan de complexiteit: eenvoudige constructies, herhaalbare handelingen. De eindgebruiker vroeg om een product dat functioneel en relevant is."],
    opl: [
      ["Primaire stakeholders", "Sit & Heat als opdrachtgever, materiaalexpert en projectbegeleider in een. Het sociale atelier als toekomstige productiepartner. De eindgebruiker van het te ontwikkelen product."],
      ["Interface stakeholder", "De afstudeerstudent: uitvoerend en verbindend tussen alle partijen."],
      ["Secundaire stakeholders", "Marketing en brandingafdeling van Sit & Heat, materiaaleveranciers, de HAN als onderwijsinstelling die de academische kaders stelt."]
    ],
    concl: "De analyse liet zien dat de eisen uit meerdere lagen kwamen. Sit & Heat stelde voorwaarden op het gebied van duurzaamheid en merkidentiteit. Het sociale atelier stelde eisen aan de maakbaarheid: het werk moest bestaan uit eenvoudige, herhaalbare handelingen, zonder ingewikkelde machines (deze eisen moeten nog verder worden afgestemd). De eindgebruiker vroeg vooral om functionaliteit en relevantie. Opvallend is dat deze eisen niet altijd goed samen gaan. Zo moet een product kwaliteit uitstralen, terwijl het tegelijk simpel genoeg moet zijn om in een atelier te maken. Die spanning heeft het hele ontwerpproces beïnvloed.",
    pve: [
      { eis:"Past bij merkidentiteit Sit & Heat", toel:"Randvoorwaarde gesteld door Sit & Heat" },
      { eis:"Eenvoudige, herhaalbare stappen", toel:"Eis sociaal atelier: geen gespecialiseerde machines" },
      { eis:"Functioneel inzetbaar", toel:"Eis eindgebruiker: functionaliteit en relevantie" },
      { eis:"Overzichtelijke constructie", toel:"Atelier als meest beperkende factor voor ontwerpvrijheid" },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="50" cy="50" r="10"/>
        <circle cx="50" cy="22" r="6"/>
        <circle cx="50" cy="78" r="6"/>
        <circle cx="22" cy="50" r="6"/>
        <circle cx="78" cy="50" r="6"/>
        <line x1="50" y1="28" x2="50" y2="40"/>
        <line x1="50" y1="60" x2="50" y2="72"/>
        <line x1="28" y1="50" x2="40" y2="50"/>
        <line x1="60" y1="50" x2="72" y2="50"/>
      </svg>
    )
  }
];

const ResearchBlock = ({ r, idx }) => {
  const ref = useReveal();
  const flip = idx % 2 === 1;
  return (
    <div ref={ref} className={`r-block reveal ${flip ? "flip" : ""}`}>
      <a href={r.href} className="r-ico-wrap" style={{textDecoration:'none', color:'inherit'}}>
        <div className="r-ico">{r.icon}</div>
        <div className="r-num">{r.n}</div>
      </a>
      <div className="r-body">
        <div className="r-meta">{r.meta}</div>
        <h3 className="r-title">{r.ttl}</h3>
        {(Array.isArray(r.body) ? r.body : [r.body]).map((para, i) => (
          <p key={i} className="r-text" style={i > 0 ? {marginTop:10} : {}}>{para}</p>
        ))}
        <div className="r-opl">
          {r.opl.map(([k,v], j) => (
            <div key={j} className="r-row">
              <div className="r-k">{k}</div>
              <div className="r-v">{v}</div>
            </div>
          ))}
        </div>
        <div className="r-concl">
          <div className="r-concl-h">Conclusie</div>
          <p>{r.concl}</p>
        </div>
        {r.pve && r.pve.length > 0 && (
          <div style={{marginTop:16, borderTop:"1px solid var(--line-soft)", paddingTop:12}}>
            <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--green)", marginBottom:8}}>Voorlopig PvE — eisen uit dit onderzoek</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4px 12px", borderBottom:"1px solid var(--fill-2)", paddingBottom:4, marginBottom:4, fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--ink-soft)"}}>
              <span>PvE-eis</span><span>Onderbouwing</span>
            </div>
            {r.pve.map(({eis, toel}, pi) => (
              <div key={pi} style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4px 12px", padding:"5px 0", borderBottom:"1px solid var(--fill-2)", fontSize:11, lineHeight:1.4}}>
                <span>{eis}</span>
                <span style={{color:"var(--ink-soft)", fontSize:10}}>{toel}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ResearchSection = () => {
  const ref = useReveal();
  return (
    <section className="research-v" ref={ref} data-screen-label="07 Onderzoek" style={{minHeight:"300vh"}}>
      <FrameLabel num="05" name="Onderzoek, vijf onderzoeken" />
      <div className="r-intro reveal-stagger">
        <div className="step-num"><span className="bullet"/>STAP 05 · ONDERZOEK</div>
        <h2 className="wf-title">Vijf onderzoeken,<br/><span style={{color:"var(--green)"}}>een basis</span> voor het PvE.</h2>
        <p className="wf-body lg">
          Voordat er een product kon worden ontwikkeld, moest eerst duidelijk worden wat de mogelijkheden en beperkingen waren. De vijf onderzoeken zijn bewust gekozen om elk een andere laag van de opdracht te benoemen: materiaal (wat is er?), markt (waar past het?), trends (waarom nu?), inventarisatie (hoeveel is er?) en stakeholders (voor wie?). Samen leverden deze onderzoeken het feitelijk kader voor alle ontwerpkeuzes die daarna volgden.
        </p>
      </div>
      <div className="r-stack">
        {RESEARCHES.map((r, i) => <ResearchBlock key={i} r={r} idx={i} />)}
      </div>
    </section>
  );
};

/* ---------- 06. VOORLOPIG PvE ---------- */
const PVE_CATS = [
  {
    cat: "Duurzaamheid & Circulariteit", kleur: "var(--green)",
    rows: [
      {t:"E", eis:"Het product maakt primair gebruik van restmaterialen van Sit & Heat.", info:"Minimaal 70% restmateriaal van Sit & Heat per product.", sk:"Sit & Heat", bron:"Materiaalinventarisatie"},
      {t:"E", eis:"Materiaalgebruik moet aantoonbaar duurzaam zijn.", info:"Inzichtelijk maken hoeveel restmateriaal wordt hergebruikt.", sk:"Sit & Heat", bron:"Trendonderzoek"},
      {t:"E", eis:"Ontwerp volgt circulaire ontwerpprincipes.", info:"Hergebruik, levensduurverlenging of herbestemming.", sk:"Opleiding", bron:"Materiaalonderzoek"},
      {t:"E", eis:"Duurzaam verhaal is zichtbaar of uitlegbaar.", info:"Communiceerbaar naar gebruiker.", sk:"Marketing", bron:"Materiaalonderzoek + Trendonderzoek"},
      {t:"W", eis:"Ontwerp is modulair of demontabel.", info:"Stimuleert hergebruik of reparatie.", sk:"Sit & Heat", bron:""},
    ]
  },
  {
    cat: "Maakbaarheid & Productie", kleur: "var(--thread)",
    rows: [
      {t:"E", eis:"Product is maakbaar binnen een sociaal atelier.", info:"Geen complexe machines en een maakbaar simpel ontwerp.", sk:"Sociaal atelier", bron:"Stakeholderanalyse + Trendonderzoek"},
      {t:"E", eis:"Productiestappen zijn eenvoudig en herhaalbaar.", info:"Geschikt voor verschillende vaardigheidsniveaus.", sk:"Sociaal atelier", bron:"Stakeholderanalyse"},
      {t:"W", eis:"Ontwerp is tolerant voor materiaalvariatie.", info:"Wisselende afmetingen en volumes toegestaan.", sk:"Productie", bron:"Marktonderzoek + Materiaalinventarisatie"},
      {t:"W", eis:"Constructie is overzichtelijk.", info:"Beperkt aantal onderdelen en stappen.", sk:"Productie", bron:"Stakeholderanalyse"},
      {t:"W", eis:"Productieproces is leerzaam.", info:"Ruimte voor ontwikkeling medewerkers.", sk:"Sociaal atelier", bron:""},
    ]
  },
  {
    cat: "Functionaliteit & Gebruik", kleur: "var(--ink)",
    rows: [
      {t:"E", eis:"Product is veilig in gebruik.", info:"Geen scherpe randen of loslatende onderdelen.", sk:"Eindgebruiker", bron:""},
      {t:"W", eis:"Product is functioneel inzetbaar.", info:"Duidelijke gebruiksfunctie.", sk:"Eindgebruiker", bron:"Stakeholderanalyse"},
    ]
  },
  {
    cat: "Esthetiek & Merkidentiteit", kleur: "var(--ink-soft)",
    rows: [
      {t:"E", eis:"Ontwerp past binnen de merkidentiteit van Sit & Heat.", info:"Duurzaam, rustig, kwalitatief.", sk:"Marketing", bron:"Stakeholderanalyse"},
      {t:"E", eis:"Afwerking straalt kwaliteit uit.", info:"Ook bij gebruik van restmateriaal.", sk:"Eindgebruiker", bron:"Materiaalonderzoek"},
      {t:"W", eis:"Product is herkenbaar als circulair.", info:"Materiaalgebruik mag zichtbaar zijn.", sk:"Marketing", bron:"Marktonderzoek"},
    ]
  },
  {
    cat: "Economie & Haalbaarheid", kleur: "var(--ink-soft)",
    rows: [
      {t:"E", eis:"Kostprijs is inzichtelijk.", info:"Globale berekening voldoende.", sk:"Sit & Heat", bron:""},
      {t:"E", eis:"Product is marktwaardig.", info:"Realistisch inzetbaar of verkoopbaar.", sk:"Sit & Heat", bron:"Marktonderzoek"},
      {t:"W", eis:"Lage extra investeringen nodig.", info:"Geen nieuwe productielijnen.", sk:"Sit & Heat", bron:""},
    ]
  },
  {
    cat: "Opleiding & Projectkaders", kleur: "var(--ink-soft)",
    rows: [
      {t:"E", eis:"Ontwerpproces is onderbouwd en gedocumenteerd.", info:"Verslaglegging verplicht voor afstuderen.", sk:"Opleiding", bron:""},
      {t:"E", eis:"Minimaal een fysiek prototype.", info:"Meer dan een advies of schets.", sk:"Opleiding & Sit & Heat", bron:""},
      {t:"W", eis:"Gebruik van passende ontwerptools.", info:"SolidWorks, prototyping.", sk:"Opleiding", bron:""},
      {t:"W", eis:"Ruimte voor experiment en iteratie.", info:"Voor persoonlijke ontwikkeling student.", sk:"Opleiding", bron:""},
    ]
  },
];

const PveTable = () => (
  <div style={{display:"flex", flexDirection:"column", gap:0}}>
    {PVE_CATS.map(({cat, kleur, rows}, ci) => (
      <div key={ci} style={{marginBottom: ci < PVE_CATS.length - 1 ? 20 : 0}}>
        <div style={{
          fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em",
          textTransform:"uppercase", color:kleur,
          borderBottom:`2px solid ${kleur}`, paddingBottom:6, marginBottom:4
        }}>{cat}</div>
        <div style={{
          display:"grid", gridTemplateColumns:"38px 1fr 1fr 80px 120px",
          gap:6, padding:"4px 0", borderBottom:"1px solid var(--fill-2)",
          fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.08em",
          textTransform:"uppercase", color:"var(--ink-soft)"
        }}>
          <span>Type</span><span>Eis / Wens</span><span>Toelichting</span><span>Stakeholder</span><span>Bron</span>
        </div>
        {rows.map(({t, eis, info, sk, bron}, ri) => (
          <div key={ri} style={{
            display:"grid", gridTemplateColumns:"38px 1fr 1fr 80px 120px",
            gap:6, padding:"6px 0", borderBottom:"1px solid var(--fill-2)",
            fontSize:11, lineHeight:1.4, alignItems:"start"
          }}>
            <span style={{
              fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.1em",
              color: t === "E" ? "var(--thread)" : "var(--ink-soft)", paddingTop:2
            }}>{t === "E" ? "EIS" : "WENS"}</span>
            <span>{eis}</span>
            <span style={{color:"var(--ink-soft)", fontSize:10}}>{info}</span>
            <span style={{fontFamily:"var(--mono)", fontSize:9, color:"var(--ink-soft)"}}>{sk}</span>
            <span style={{fontFamily:"var(--mono)", fontSize:9, color:"var(--green)"}}>{bron}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Step06_VoorlopigPvE = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="08 Voorlopig PvE">
      <FrameLabel num="06" name="Voorlopig PvE" />
      <div className="step-bg" />
      <div className="step-pin" style={{height:"auto", minHeight:"80vh", position:"relative", top:"auto"}}>
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet"/>STAP 06 · VOORLOPIG PvE</div>
          <h2 className="wf-title">Voorlopig programma<br/>van eisen</h2>
          <p className="wf-body lg">
            Na het afronden van alle analyses is een <strong>voorlopig</strong> PvE opgesteld (bewust zonder vaste productcategorie). De reden: op dit punt in het proces was nog niet besloten wat er gemaakt zou worden, alleen waaraan het moest voldoen. Het voorlopige PvE functioneerde daarmee als toetsingsinstrument voor de brainstorm en keuzefase. Later in het project volgt een definitief PvE op basis van de gekozen richting. De eisen waren onderverdeeld in zes thema's:
          </p>
          <ul style={{listStyle:"none", display:"flex", flexDirection:"column", gap:6, marginTop:8}}>
            {[
              ["Duurzaamheid en circulariteit","minimaal 70% restmateriaal van Sit & Heat, aantoonbaar hergebruik, communiceerbaar verhaal."],
              ["Maakbaarheid","produceerbaar in sociaal atelier, eenvoudige en herhaalbare stappen."],
              ["Functionaliteit","veilig"],
              ["Esthetiek"," kwalitatief in afwerking."],
              ["Economie","inzichtelijke kostprijs en marktwaardige inzetbaarheid."],
              ["Opleidingskaders","minimaal een fysiek prototype en gedocumenteerd ontwerpproces."],
            ].map(([title, desc], i) => (
              <li key={i} style={{padding:"7px 0", borderBottom:"2px solid var(--line-soft)", fontSize:13, lineHeight:1.5}}>
                <strong>{title}</strong>{": "}{desc}
              </li>
            ))}
          </ul>
          <p className="wf-body" style={{marginTop:12}}>
            Het PvE functioneerde vanaf dit punt als toetsingsinstrument.
            Elke eis heeft een unieke code (bijv. <span style={{fontFamily:"var(--mono)", color:"var(--green)", fontSize:12}}>D.1</span>, <span style={{fontFamily:"var(--mono)", color:"var(--green)", fontSize:12}}>F.6</span>, <span style={{fontFamily:"var(--mono)", color:"var(--green)", fontSize:12}}>A.3</span>).
            Verderop in het verslag verwijzen groene codes in de rechterkolom steeds naar deze eisen, zodat elke ontwerpkeuze traceerbaar is naar een eis uit het PvE.
            Voor het volledig uitgewerkte definitieve PvE, zie stap 25.
          </p>
        </div>
        <div className="step-stage reveal-right" style={{flexDirection:"column", overflowY:"auto", maxHeight:"80vh", paddingRight:4, alignItems:"stretch", justifyContent:"flex-start"}}>
          <PveTable />
        </div>
      </div>
    </section>
  );
};

/* ---------- 09. IDEEËN STRUCTUREREN ---------- */
const MARKET_COLORS = {
  b2b:   { bg:"#4A90D9", text:"#fff", label:"B2B (horeca)" },
  b2c:   { bg:"#F5C542", text:"#111", label:"B2C" },
  both:  { bg:"#E88EAA", text:"#111", label:"B2B + B2C" },
  overig:{ bg:"#CCCCCC", text:"#111", label:"Overig" },
};

const MarketChip = ({label, type}) => {
  const c = MARKET_COLORS[type];
  return (
    <span style={{
      display:"inline-block", background:c.bg, color:c.text,
      fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.1em",
      padding:"3px 7px", marginRight:4, marginBottom:4,
    }}>{label}</span>
  );
};

const RICHTINGEN_SCHEMA = [
  {cat:"Zit opties",             items:[["zitzak","both"],["poef","both"],["strandstoel","b2c"]]},
  {cat:"(Horeca) Tafeldecoratie",items:[["placemats","both"],["tafelloper","both"],["menu casing","b2b"],["servetten","b2b"],["tafelkleed","b2b"]]},
  {cat:"Tassen",                 items:[["fruitnet","b2c"],["bakfietstas","b2c"],["sporttas","b2c"],["rugzak","b2c"],["heuptas","b2c"],["schooltas","b2c"],["crossbody bag","b2c"],["totebag","b2c"],["reistas","b2c"],["handtas","b2c"],["etui","b2c"],["buideltasje","b2c"],["chalkbag","b2c"],["padel houdertas","b2c"],["sportballentas","b2c"],["slingback bag","b2c"]]},
  {cat:"(Bescherm) Hoezen",      items:[["boekenhoes","b2c"],["menu casing","b2b"],["fleskaft","b2c"],["laptop sleeve","b2c"],["messensleeve","b2b"]]},
  {cat:"Opberg hoezen/zakken",   items:[["etui","b2c"],["chalkbag","b2c"],["opbergzeil","both"],["bierviltjes","b2b"],["vuile was zak","b2c"],["messensleeve","b2b"]]},
  {cat:"(Overige) Decoratie",    items:[["lampenkap","b2c"],["plantenpot","b2c"],["spandoek","b2b"],["reclameletters","b2b"],["vlaggetjes","overig"],["slingers","overig"]]},
  {cat:"Grote lappen stof",      items:[["spandoek","b2b"],["patchwork stof rol","overig"],["tafelkleed","b2b"]]},
  {cat:"Sport",                  items:[["sporttas","b2c"],["chalkbag","b2c"],["padel houdertas","b2c"],["sportballentas","b2c"]]},
  {cat:"Luxe items",             items:[["nekkussen","b2c"],["muismat","b2c"]]},
  {cat:"Schorten",               items:[["keukenschort","both"],["horeca schort","b2b"]]},
  {cat:"Overig",                 items:[["nachtlampje","b2c"],["parasol","b2c"]]},
];

const Step09_StructurerenIdeeen = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="11 Ideeën structureren">
      <FrameLabel num="09" name="9 Richtingen — groeperen en structureren" />
      <div className="step-bg" />
      <div className="step-pin" style={{gridTemplateColumns:"1fr"}}>
        <div className="step-content reveal-stagger" style={{maxWidth:"1200px", margin:"0 auto"}}>
          <div className="step-num"><span className="bullet"/>STAP 09 · 9 RICHTINGEN</div>
          <h2 className="wf-title">Van ideeën naar geordende richtingen.</h2>
          <p className="wf-body lg">
            Na de brainstormsessie zijn de gefilterde ideeën individueel verder gegroepeerd.
            De categorisatie volgde twee assen: eerst op markt (B2B horeca, B2C, en B2B + B2C),
            vervolgens op productlijn (decoratie, zitopties, horeca-voorwerpen,
            beschermhoezen, schorten en sport). Deze structuur maakte het mogelijk om per cluster de haalbaarheid te beoordelen.
          </p>
          <p className="wf-body lg">
             Kleurcodering geeft aan voor welke markt het idee geschikt is.
          </p>

          {/* Legenda */}
          <div style={{display:"flex", gap:12, flexWrap:"wrap", margin:"8px 0"}}>
            {Object.entries(MARKET_COLORS).map(([key, c]) => (
              <div key={key} style={{display:"flex", alignItems:"center", gap:6, fontSize:12}}>
                <span style={{width:14, height:14, background:c.bg, display:"inline-block", border:"1px solid #ccc"}}/>
                <span style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.1em"}}>{c.label}</span>
              </div>
            ))}
          </div>

          {/* Schema tabel */}
          <div style={{display:"flex", flexDirection:"column", gap:0, border:"1px solid var(--line)", marginTop:8}}>
            {RICHTINGEN_SCHEMA.map(({cat, items}, ci) => (
              <div key={ci} style={{
                display:"grid", gridTemplateColumns:"200px 1fr",
                borderBottom: ci < RICHTINGEN_SCHEMA.length-1 ? "1px solid var(--line-soft)" : "none",
                minHeight:44
              }}>
                <div style={{
                  padding:"10px 14px", fontFamily:"var(--mono)", fontSize:10,
                  letterSpacing:"0.1em", textTransform:"uppercase",
                  borderRight:"1px solid var(--line-soft)",
                  background:"var(--fill)", display:"flex", alignItems:"center"
                }}>{cat}</div>
                <div style={{padding:"8px 12px", display:"flex", flexWrap:"wrap", alignContent:"center"}}>
                  {items.map(([label, type], ii) => (
                    <MarketChip key={ii} label={label} type={type} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Productlijnen convergentie */}
          <div style={{marginTop:20, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16}}>
            {[
              {title:"Horeca items", color:"var(--green)", items:["placemats","menu casing","keukenschort","horeca schort","tafelloper","tafelkleed"]},
              {title:"Tassen", color:"var(--thread)", items:["etui","totebag","crossbody bag","buideltasje","reistas","sporttas","chalkbag"]},
              {title:"Zit opties", color:"var(--ink)", items:["zitzak","poef","strandstoel"]},
            ].map(({title, color, items}, pi) => (
              <div key={pi} style={{border:`2px solid ${color}`, padding:14}}>
                <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em",
                  textTransform:"uppercase", color, marginBottom:10}}>Productlijn · {title}</div>
                <div style={{display:"flex", flexWrap:"wrap", gap:6}}>
                  {items.map((item, ii) => (
                    <span key={ii} style={{
                      background:"var(--fill)", padding:"4px 8px",
                      fontFamily:"var(--mono)", fontSize:10, border:"1px solid var(--line-soft)"
                    }}>{item}</span>
                  ))}
                </div>
              </div>
              
            ))}
          </div>

          {/* Experimentatie tekst */}
          <div style={{marginTop:28, padding:"16px", background:"var(--paper)", border:"1px solid var(--line-soft)", fontFamily:"var(--sans)", fontSize:14, lineHeight:1.6, color:"var(--ink)"}}>
            Na het groeperen volgde experimentatie en exploratie binnen de drie meest kansrijke clusters (horeca-items, tassen, zitopties). De keuze voor deze drie richtingen is in overleg met Sit &amp; Heat bepaald op basis van geschat marktpotentieel en materiaalbenutting.
          </div>
        </div>
      </div>

    </section>
  );
};

/* ---------- 10. SCHETSEN & VISUELE VERKENNING (NIEUW) ---------- */
const Step10_SchetsVerkenning = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="12 Schetsen en visuele verkenning">
      <FrameLabel num="10" name="Schetsen &amp; visuele verkenning" />
      <div className="step-bg" />
      <div className="step-pin">
        <div className="step-stage reveal-left">
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, width:"75%"}}>
            {[
              "BRWA8934A7EE77E_000526_Page_3.jpg",
              "BRWA8934A7EE77E_000412_Page_03_Image_0001.jpg",
              "BRWA8934A7EE77E_000526_Page_2.jpg",
              "BRWA8934A7EE77E_000412_Page_10_Image_0001.jpg",
            ].map((f, i) => (
              <img
                key={i}
                src={`foto%27s%20en%20animaties%20website/Design%20by%20doing/${f}`}
                alt={`Schets ${i + 1}`}
                style={{width:"100%", height:"auto", display:"block"}}
              />
            ))}
          </div>
        </div>
        <div className="step-content reveal-stagger reveal-right">
          <div className="step-num"><span className="bullet"/>STAP 10 · SCHETSEN</div>
          <h2 className="wf-title">Vorm volgt<br/>materiaal.</h2>
          <p className="wf-body lg">
            Voor elk van de drie richtingen werden
            schetsen gemaakt en werd via <a href="https://nl.pinterest.com/bilinssen/sit-and-heat-restproducten/?request_params=%7B%221%22%3A%20130%2C%20%227%22%3A%204155794821323821034%2C%20%228%22%3A%201072630904940932949%2C%20%2230%22%3A%20%22Sit%20and%20Heat%20restproducten%22%2C%20%2232%22%3A%2045%2C%20%2233%22%3A%20%5B1072630836269373639%2C%201072630836269373636%2C%201072630836269344915%2C%201072630836269343479%2C%201072630836269343244%2C%201072630836269343227%2C%201072630836269341099%2C%201072630836269283401%2C%201072630836269281962%2C%201072630836269281410%2C%201072630836269281026%2C%201072630836269281025%2C%201072630836269075953%2C%201072630836269075914%2C%201072630836269075913%2C%201072630836269075885%2C%201072630836269075872%2C%201072630836269075776%2C%201072630836269049837%2C%201072630836269048344%5D%2C%20%2236%22%3A%20%5B1072630904940932949%5D%2C%20%2237%22%3A%20%22Sit%20and%20Heat%20restproducten%22%2C%20%2234%22%3A%200%2C%20%22102%22%3A%204%7D&full_feed_title=Sit%20and%20Heat%20restproducten&view_parameter_type=3069&pins_display=3" target="_blank" style={{textDecoration:"underline", color:"#8DB462", cursor:"pointer"}}>Pinterest</a> gezocht naar bestaande vormen, toepassingen
            en inspiratie. Het doel was niet om direct tot een concept te komen, maar om te
            begrijpen wat er binnen elke richting mogelijk was.
          </p>
          <p className="wf-body">
            Wat dit opleverde was een belangrijk inzicht: alle drie de richtingen waren
            vormtechnisch haalbaar met het beschikbare materiaal. De kwaliteit van de solution
            dyed acrylic was hoog genoeg voor elk van de productcategorieën.
          </p>
          <p className="wf-body">
            De vraag was dus niet wat het materiaal kon( die vraag was al beantwoord)
            maar <em>voor wie</em> het product gemaakt werd. En dat was op dit moment nog niet
            te beantwoorden, omdat er nog geen richting was gekozen en dus ook geen doelgroep
            bepaald kon worden.
          </p>
          <div style={{border:"1px solid var(--line-soft)", padding:14, background:"var(--fill)", marginTop:4}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--ink-soft)", marginBottom:6}}>BEWUST SPANNINGSVELD</div>
            <p style={{fontSize:13, lineHeight:1.55}}>De doelgroep bepaalt de richting, maar de richting bepaalt de doelgroep.
            Zonder een keuze te forceren werd dit probleem gedocumenteerd als een open vraag
            die pas later in het proces beantwoord kon worden.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- 11. LEREN NAAIEN ---------- */
const DBD_BASE = "foto%27s%20en%20animaties%20website/Design%20by%20doing/";
const DBD_IMAGES = [
  "1000062614%20(1).jpg","1000062629%20(1).jpg","1000062667.jpg","1000062668.jpg",
  "1000062762%20(1).jpg","1000062815.jpg","1000062816.jpg","1000062817.jpg",
  "20260323_091733.jpg","20260323_091844.jpg","20260323_091923.jpg","20260323_092011.jpg",
  "20260407_161557.jpg","20260407_161609.jpg","20260407_161835.jpg","20260407_162051.jpg",
  "20260416_161436%20(1).jpg","20260416_161454%20(1).jpg","20260416_161512%20(1).jpg",
  "20260416_161518%20(1).jpg","20260416_161611%20(1).jpg","20260416_161617%20(1).jpg",
  "20260506_093149.jpg",
  "BRWA8934A7EE77E_000412_Page_01_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_02_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_04_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_05_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_06_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_07_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_08_Image_0001.jpg",
];

const Step11_NaaienExploratie = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="13 Leren naaien" style={{minHeight:"480vh"}}>
      <FrameLabel num="11" name="Design by Doing — leren naaien" />
      <div className="step-bg dbd-bg">
        {DBD_IMAGES.map((src, i) => {
          const r = ((i * 31 + 7) * 1664525 + 1013904223) & 0xffffffff;
          const r2 = ((r * 1664525 + 1013904223) & 0xffffffff) >>> 0;
          const r3 = ((r2 * 1664525 + 1013904223) & 0xffffffff) >>> 0;
          const top = 5 + (r >>> 0) / 0xffffffff * 70;
          const dur = 24 + (r2 / 0xffffffff) * 20;
          const delay = -(i * 2.8);
          const rot = ((r3 / 0xffffffff) - 0.5) * 14;
          return (
            <div key={i} className="dbd-float" style={{
              top: `${top}%`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              "--r": `${rot}deg`,
            }}>
              <img src={DBD_BASE + src} alt={`Design by doing ${i+1}`}
                style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}} />
            </div>
          );
        })}
      </div>
      <div className="step-pin">
        <div className="step-stage">
          <img
            src="foto%27s%20en%20animaties%20website/naaimachine.jpg"
            alt="Leren naaien proefstuk"
            style={{width:"auto", height:"auto", maxWidth:"100%", maxHeight:"72vh", objectFit:"contain", display:"block"}}
          />
        </div>
        <div className="step-content reveal-stagger" style={{background:"rgba(255,255,255,0.92)", padding:28}}>
          <div className="step-num"><span className="bullet"/>STAP 11 · DESIGN BY DOING</div>
          <h2 className="wf-title">Pas door te doen,<br/>werd het materiaal begrepen.</h2>
          <p className="wf-body lg">
            Nul ervaring achter een naaimachine. Toch werd begonnen met het zelf maken
            van kleine items met het restmateriaal. Geen prototypes. Gewoon leren.
          </p>
          <p className="wf-body">
            Aflocken, naden wegwerken, plooien, patchwork. Elk proefstuk liet iets zien
            over hoe dit materiaal zich gedraagt onder de naald, wat werkt met eenvoudige
            handelingen, en waar je vastloopt zonder geavanceerde machines.
          </p>
          <p className="wf-body">
            Later moest er ook een atelier handleiding komen. Om die te kunnen schrijven,
            was het noodzakelijk om eerst te begrijpen wat die handelingen precies inhouden, kennis die alleen door zelf te maken ontstaat.
          </p>
          <div className="sew-grid">
            {[
              ["NAAIPROEF 01","Enkellaags","Werkt niet. Rafelt na twee weken"],
              ["NAAIPROEF 02","Dubbellaags + aflock","Werkt. Opgenomen in handleiding"],
              ["NAAIPROEF 03","Patchwork blok","Werkt. Makkelijk te maken, maar rafelt aan de randen"],
              ["NAAIPROEF 04","Plooi vouw","Werkt deels. Niet voor curve-naden"],
              ["NAAIPROEF 05","Gevouwen handvat","Werkt. Atelier vriendelijk"],
              ["NAAIPROEF 06","Elastische sluiting","Werkt niet. Geen rek in materiaal"],
            ].map(([h,t,d],i)=>(
              <div key={i} className="sew-card">
                <div className="h">{h}</div>
                <div className="t">{t}</div>
                <div className="d">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- 12. DE KEUZE VOOR TASSEN ---------- */
const KEUZE_CRITERIA = [
  { criterium: "Materiaalbenutting",         pve: "Min. 70% restmateriaal Sit & Heat" },
  { criterium: "Maakbaarheid sociaal atelier", pve: "Maakbaar in sociaal atelier" },
  { criterium: "Marktwaardigheid",           pve: "Product is marktwaardig" },
  { criterium: "Circulariteit",              pve: "Circulaire ontwerpprincipes" },
  { criterium: "Investeringsniveau",         pve: "Lage extra investeringen nodig" },
  { criterium: "Merkidentiteit",             pve: "Past bij merkidentiteit Sit & Heat" },
];
const KEUZE_RICHTINGEN = ["Zitopties", "Horeca-accessoires", "Tassen"];
const KEUZE_SCORES = [
  ["+",  "+",  "++"],
  ["0",  "+",  "+"],
  ["0",  "-",  "+"],
  ["+",  "+",  "++"],
  ["--", "+",  "+"],
  ["++", "++", "0"],
];
const KEUZE_TOTALEN = ["+2", "+5", "+7"];
const SCORE_KLEUR = {
  "++": "var(--green)", "+": "var(--ink)", "0": "var(--ink-soft)",
  "-": "var(--thread)", "--": "var(--thread)"
};

const KeuzematrixTable = () => (
  <div style={{marginTop:16}}>
    <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", marginBottom:8}}>
      Criteria gebaseerd op voorlopig PvE
    </div>
    <div style={{display:"grid", gridTemplateColumns:"1fr 80px 80px 80px 80px", gap:6, padding:"4px 0", borderBottom:"2px solid var(--line)", fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--ink-soft)"}}>
      <span>Criterium (PvE-bron)</span>
      {KEUZE_RICHTINGEN.map((r,i) => <span key={i} style={{textAlign:"center"}}>{r}</span>)}
    </div>
    {KEUZE_CRITERIA.map(({criterium, pve}, ci) => (
      <div key={ci} style={{display:"grid", gridTemplateColumns:"1fr 80px 80px 80px 80px", gap:6, padding:"6px 0", borderBottom:"1px solid var(--fill-2)", fontSize:11, lineHeight:1.4, alignItems:"center"}}>
        <span>
          {criterium}
          <span style={{display:"block", fontFamily:"var(--mono)", fontSize:9, color:"var(--ink-soft)", marginTop:2}}>{pve}</span>
        </span>
        {KEUZE_SCORES[ci].map((score, ri) => (
          <span key={ri} style={{textAlign:"center", fontFamily:"var(--mono)", fontSize:13, fontWeight:"bold", color: SCORE_KLEUR[score]}}>{score}</span>
        ))}
      </div>
    ))}
    <div style={{display:"grid", gridTemplateColumns:"1fr 80px 80px 80px 80px", gap:6, padding:"8px 0", borderTop:"2px solid var(--line)", fontFamily:"var(--mono)", fontSize:10, fontWeight:"bold", letterSpacing:"0.08em"}}>
      <span style={{textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--ink-soft)"}}>Totaal</span>
      {KEUZE_TOTALEN.map((t,i) => (
        <span key={i} style={{textAlign:"center", color: i === 2 ? "var(--green)" : "var(--ink-soft)"}}>{t}</span>
      ))}
    </div>
  </div>
);

const Step12_KeuzeTassen = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="14 De keuze voor tassen" style={{minHeight:"220vh", padding:"80px 0 80px", zIndex:5, position:"relative"}}>
      <FrameLabel num="12" name="De keuze: tassencollectie" />
      <div className="step-bg" />
      <div className="step-pin" style={{position:"relative", top:"auto", height:"auto", gridTemplateColumns:"1fr"}}>
        <div className="step-content reveal-stagger" style={{maxWidth:"none"}}>
          <div className="step-num"><span className="bullet"/>STAP 12 · DE KEUZE</div>
          <h2 className="wf-title" style={{textAlign:"center", margin:"0 auto"}}>
            Drie richtingen, een methode, een keuze.
          </h2>
          <p className="wf-body" style={{margin:"0 auto", textAlign:"center", maxWidth:"60ch"}}>
            Na de schets en naaiperiode hadden alle drie de richtingen nog steeds kansen.
            Om tot een onderbouwde keuze te komen werden de richtingen getoetst aan het voorlopige PvE en werd er samen met Sit &amp; Heat gekeken welke richting het beste aansloot bij hun ambities en mogelijkheden.
            Elk criterium is direct afgeleid van een eis of wens uit het PvE.
          </p>
          <KeuzematrixTable />
          <div style={{border:"1px solid var(--line-soft)", background:"var(--fill)", padding:"14px 18px", marginTop:16, fontSize:12, lineHeight:1.6}}>
            <span style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", display:"block", marginBottom:6}}>Toelichting merkidentiteit</span>
            In een gezamenlijke meeting met Jorg en Jeroen (productontwikkeling en sales bij Sit &amp; Heat) werd bevestigd dat de lagere score op merkidentiteit geen bezwaar was. Hun prioriteit lag bij bewust omgaan met het restmateriaal en daarmee duurzamer worden, niet bij merkconsistentie. Dit sluit aan op de eerder getrokken conclusie uit het marktonderzoek: de opdracht is circulaire waardecreatie, niet merkconsistentie.
          </div>
          <div className="direction-cards" style={{marginTop:24}}>
            <div className="dir-card faded">
              <WfTag>Richting A</WfTag>
              <h3 className="wf-sub" style={{marginTop:10}}>Zitopties</h3>
              <p className="wf-body" style={{marginTop:8}}>
                Sit &amp; Heat zit al in deze markt en wilde geen nieuwe materialen en
                investeringen doen om daar een nieuw product in te produceren. Het investeringsniveau
                was te hoog en de stap te ver verwijderd van de bestaande productcontext.
              </p>
              <div className="dir-label">Afgevallen</div>
            </div>
            <div className="dir-card faded">
              <WfTag>Richting B</WfTag>
              <h3 className="wf-sub" style={{marginTop:10}}>Horeca-accessoires</h3>
              <p className="wf-body" style={{marginTop:8}}>
                Navraag bij Roel (sales) maakte duidelijk dat er onvoldoende marktvraag was.
                Horecaklanten wilden de producten wel ontvangen als weggever, maar zouden er geen
                waarde aan toekennen als ze ervoor moesten betalen. De waterafstotende eigenschap
                van het materiaal bleek bovendien een bezwaar voor meerdere horeca-toepassingen.
              </p>
              <div className="dir-label">Afgevallen</div>
            </div>
            <div className="dir-card chosen">
              <WfTag solid>Richting C</WfTag>
              <h3 className="wf-sub" style={{marginTop:10, color:"var(--bg)"}}>Tassencollectie</h3>
              <p className="wf-body" style={{marginTop:8, color:"rgba(255,255,255,0.85)"}}>
                De meest logische categorie voor een sociaal atelier: de productie is haalbaar
                zonder extra investeringen, het SDA materiaal is direct bruikbaar als buitenstof,
                en via het netwerk van Jeroen was er een direct verkoopkanaal bij kledingverkopers
                in Nijmegen.
              </p>
              <div className="dir-label" style={{color:"rgba(255,255,255,0.9)"}}>Gekozen richting</div>
            </div>
          </div>
          <p className="wf-body" style={{margin:"8px auto 0", textAlign:"center", maxWidth:"60ch"}}>
            Met deze keuze verschoof het project naar het ontwikkelen van een tassencollectie.
            De volgende stap: uitzoeken waar precies de vraag lag binnen het segment tassen,
            via een gesprek met een retailcontact.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- 13. HET RETAILGESPREK — HENRI ---------- */
const Step13_RetailHenri = () => {
  const ref = useReveal();
  return (
    <section className="step-fullbg" ref={ref} data-screen-label="15 Henri interview">
      <FrameLabel num="13" name="Het retailgesprek — Henri" />
      <div className="bg">
        <img
          src="foto%27s%20en%20animaties%20website/De%20tempel.jpeg"
          alt="Tempel kledingwinkel Nijmegen"
          style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}}
        />
      </div>
      <div className="scrim" />
      <div className="pin">
        <div className="panel reveal-stagger">
          <div className="step-num"><span className="bullet"/>STAP 13 · INTERVIEW BIJ HENRI</div>
          <h2 className="wf-title">Een marktretail gesprek<br/>binnen de markt van tassen.</h2>
          <p className="wf-body lg">
            Via het netwerk van Jeroen ontstond contact met Henri, eigenaar van modezaak Tempel
            in Nijmegen. Als potentieel verkoopkanaal had zijn perspectief directe waarde voor
            de ontwerpaanpak. Het gesprek leverde scherpe criteria op voor wat in zijn winkel
            daadwerkelijk verkoopt.
          </p>
          <p className="wf-body">
            Wat opviel: Henri dacht niet in termen van materiaal of duurzaamheid maar in
            omzetsnelheid en doelgroepfit. Om deze reden is Henri ook gebruikt als markt informant voor de doelgroep. 
            Henri's input op vorm en esthetiek was gebaseerd op zijn eigen mening en niet op de doelgroep, 
            hierdoor is hij op gebied van design alleen gebruikt om conformatie en richting te geven, niet om specifieke eisen te formuleren.
          </p>
          <div style={{marginTop:16, borderTop:"1px solid var(--line)", paddingTop:16}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em",
              color:"var(--thread)", marginBottom:12}}>WENSEN EN EISEN HENRI</div>
            <div style={{display:"flex", flexDirection:"column", gap:0}}>
              {[
                "Grote tas met diepte, geschikt voor iPad en dagelijkse spullen",
                "Primair voor vrouwen ongeveer 30+, modisch maar ook duurzaam georiënteerd",
                "Dagelijks gebruik, stadsleven, fietsers en bakfietsers",
                "Omhangbaar: schouder of crossbody",
                "Afgesloten binnenvak voor portemonnee, telefoon, sleutels",
                "Verstelbare riem",
                "Aardtinten: groen, zand, beige, bruin. Geen zwart, geen felle kleuren, geen mix van kleuren",
                "Prijs: €60-75 middelgroot, €80+ groot",
                "Egale stof, zo min mogelijk patchwork",
                "Twee evergreen basismodellen plus ruimte voor trendgevoelige varianten",
                "Omzetsnelheid telt: de tas moet snel verkopen",
                "Naden geen dealbreaker mits subtiel verwerkt",
                "Sociaal ateliersverhaal leuk, maar geen verkoopargument voor de klant",
              ].map((item, i) => (
                <div key={i} style={{display:"grid", gridTemplateColumns:"24px 1fr", gap:10,
                  padding:"9px 0", borderBottom:"1px solid var(--fill-2)", fontSize:13, lineHeight:1.5}}>
                  <span style={{fontFamily:"var(--mono)", fontSize:9, color:"var(--thread)", paddingTop:3}}>
                    {String(i+1).padStart(2,'0')}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- 14. HET SPANNINGSVELD ---------- */
const Step14_Spanningsveld = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="16 Spanningsveld">
      <FrameLabel num="14" name="Het spanningsveld" />
      <div className="step-bg" style={{
        background: "radial-gradient(circle at 50% 50%, var(--fill) 0%, transparent 60%)"
      }}/>
      <div className="step-pin">
        <div className="step-stage reveal-left" style={{flexDirection:"column", gap:12, alignItems:"flex-start"}}>
          <img
            src="foto%27s%20en%20animaties%20website/spanningsveld/_-%20visual%20selection%20(4)%20(1).png"
            alt="Spanningsveld visualisatie"
            style={{width:"100%", display:"block"}}
          />
        </div>
        <div className="step-content reveal-stagger reveal-right">
          <div className="step-num"><span className="bullet"/>STAP 14 · HET SPANNINGSVELD</div>
          <h2 className="wf-title">Drie belangen.<br/><span style={{color:"var(--thread)"}}>Een oplossing.</span></h2>
          <p className="wf-body lg">
            Na het gesprek met Henri werd duidelijk dat er drie perspectieven door elkaar liepen
            die niet vanzelf op elkaar aansloten. Henri keek puur vanuit verkoop: wat werkt nu,
            wat kennen klanten. Vanuit de rol als ontwerper was het doel iets maken dat niet
            trendgebonden is, iets niews, maar een consistente en tijdloze basis heeft (anders verkoopt de tas niet meer nadat de trend voorbij is). Tegelijkertijd had
            Sit &amp; Heat de behoefte dat het product daadwerkelijk marktwaardig is.
          </p>
          <p className="wf-body">
            Om hier systematisch doorheen te komen werden de mogelijke posities een voor een
            afgewogen in een overwegingen tijdlijn met drie vertrekpunten:
          </p>
          <ul style={{listStyle:"none", display:"flex", flexDirection:"column", gap:10, marginTop:4}}>
            <li style={{fontSize:14, padding:"10px 0", borderBottom:"1px solid var(--line-soft)"}}>
              <span style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--ink-soft)"}}>AFGEVALLEN</span><br/>
              <strong>Ontwerpen voor Henri's doelgroep:</strong> Past bij commerciële haalbaarheid,
              maar leidt tot een trendgevoelig ontwerp. Het project wordt een producent van iets bestaands zonder echt te ontwerpen.
            </li>
            <li style={{fontSize:14, padding:"10px 0", borderBottom:"1px solid var(--line-soft)"}}>
              <span style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--ink-soft)"}}>AFGEVALLEN</span><br/>
              <strong>Horeca als afzetmarkt:</strong> Logische link met S&amp;H, maar horecabedrijven kopen geen tassen.
            </li>
            <li style={{fontSize:14, padding:"10px 0"}}>
              <span style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--thread)"}}>AANGEHOUDEN</span><br/>
              <strong>De terrasganger als gedragscontext:</strong> Breed genoeg voor een universeel ontwerp en
              direct te linken aan Sit &amp; Heat's kerngebruiker.
            </li>
          </ul>
          <div style={{border:"1px solid var(--line)", padding:14, background:"var(--paper)", marginTop:4}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--thread)", marginBottom:6}}>DE OPLOSSING</div>
            <p style={{fontSize:13, lineHeight:1.55}}>Een <strong>tweedelige ontwerpstrategie</strong>: een neutrale basisvorm, tijdloos, functioneel,
            niet trendgedreven uitgewerkt in twee varianten. Een commerciële neutrale variant die aansluit bij
            de wensen van Henri. En een ontwerpvisie variant waarin restmateriaal, gelaagdheid en meer
            uitgesproken materiaalgebruik sterker doorklinken.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- 15. DOELGROEP DEFINITIEF ---------- */
const Step15_Doelgroep = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="17 Doelgroep" style={{minHeight:"380vh"}}>
      <FrameLabel num="15" name="Doelgroep — definitief" />
      <div className="step-bg"/>
      <div className="step-pin">
        <div className="step-stage reveal-left">
          <img
            src="foto%27s%20en%20animaties%20website/doelgroep.png"
            alt="Doelgroep terrasganger stadsbewoner"
            style={{width:"100%", display:"block", objectFit:"cover"}}
          />
        </div>
        <div className="step-content reveal-stagger reveal-right">
          <div className="step-num"><span className="bullet"/>STAP 15 · DOELGROEP</div>
          <h2 className="wf-title">De terrasganger.<br/>Fietst dagelijks.</h2>
          <p className="wf-body lg">
            De gebruiker werd niet bepaald door wie Henri's klant is, maar door de gedragscontext
            van de gebruiker van Sit &amp; Heat zelf: iemand die zich door de stad beweegt, vaak
            te voet of met de fiets, en onderweg stopt om ergens te zitten (bijvoorbeeld een terras).
          </p>
          <p className="wf-body">
            De primaire gebruiker is een werkende stadsbewoner tussen de 20 en 50 jaar, komt regelmatig in de stad. 
            Fietst meerdere keren per week.
            Het gebruiksmoment loopt van werk naar terras, kroeg of eetgelegenheid na werk. De tas
            gaat de hele dag mee. Inhoud: een laptop (14 inch) plus dagelijkse spullen.
          </p>
          <p className="wf-body">
            De houding en waarden van deze gebruiker sluiten direct aan op het materiaalverhaal.
            Kiest voor producten met een eerlijke herkomst en een verhaal, heeft oog voor materiaal
            en afwerking. De tas is unisex.
          </p>
          <div className="stat-row">
            <div className="stat"><div className="v">20-50</div><div className="l">leeftijd</div></div>
            <div className="stat"><div className="v">unisex</div><div className="l">gender</div></div>
            <div className="stat"><div className="v">14"</div><div className="l">laptop</div></div>
            <div className="stat"><div className="v">€60-100</div><div className="l">prijs</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- 16 & 17 zijn verplaatst naar chapters-bag-design.js ---------- */

/* ---------- 26. VERANTWOORDING — WAAROM PAST DIT BIJ SIT & HEAT ---------- */
const Step18_Verantwoording = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="26 Verantwoording">
      <FrameLabel num="26" name="Verantwoording, waarom past dit bij Sit &amp; Heat" />
      <div className="step-bg" />
      <div className="step-pin" style={{gridTemplateColumns:"1fr", height:"auto", minHeight:"auto", position:"relative", top:"auto", paddingTop:"10vh", paddingBottom:"8vh"}}>
        <div className="step-content reveal-stagger" style={{maxWidth:"none"}}>
          <div className="step-num"><span className="bullet"/>STAP 26 · VERANTWOORDING</div>

          <h2 className="wf-title">Geen klassiek S&amp;H product,<br/>Wel een echt S&amp;H product.</h2>

          {/* SVG zweeft rechts — tekst loopt eromheen */}
          <svg viewBox="0 0 400 400" style={{float:"right", width:"clamp(180px,22vw,280px)", margin:"4px 0 24px 40px", flexShrink:0}}>
            <g fill="none" stroke="#F15A29" strokeWidth="1.4">
              <circle cx="200" cy="200" r="150" strokeDasharray="6 6"/>
            </g>
            <g fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill="currentColor" textAnchor="middle">
              <text x="200" y="45">KUSSEN</text>
              <text x="370" y="225">RESTSTOF</text>
              <text x="200" y="370">TAS</text>
              <text x="40" y="225">GEBRUIKER</text>
            </g>
            <g fill="#F15A29">
              <circle cx="200" cy="50" r="5"/>
              <circle cx="350" cy="200" r="5"/>
              <circle cx="200" cy="350" r="5"/>
              <circle cx="50" cy="200" r="5"/>
            </g>
            <path d="M 200 50 L 350 200 L 200 350 L 50 200 Z" fill="none" stroke="#F15A29" strokeWidth="0.5" opacity="0.4"/>
          </svg>
          <p className="wf-body lg">
            De tas is geen verwarmd product en valt daarmee buiten het bestaande productportfolio en doelgroep
            van Sit &amp; Heat. De vraag of een
            product past bij een merk gaat verder dan productcategorie. De vraag of een product past bij een merk gaat om merkwaarden,
            gebruiker en herkomst.
          </p>
          <p className="wf-body">
            Sit &amp; Heat staat voor drie dingen: duurzaamheid, specialisme en gastvrijheid.
            Die drie waarden zijn terug te vinden in de tas.
          </p>
          <ul style={{listStyle:"none", display:"flex", flexDirection:"column", gap:14, marginTop:8}}>
            <li style={{padding:"12px 0", borderBottom:"1px solid var(--line-soft)"}}>
              <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--thread)", marginBottom:4}}>DUURZAAMHEID</div>
              <p style={{fontSize:14, lineHeight:1.55}}>Niet alleen een belofte maar een aantoonbaar feit. Het materiaal is letterlijk
              restmateriaal uit Sit &amp; Heat's eigen productieproces, dat anders zou worden weggegooid.
              De productie vindt plaats in het sociale atelier waarmee Sit &amp; Heat al heeft samen gewerkt.
              Het duurzame verhaal zit in het product, niet als marketinglaag erover.</p>
            </li>
            <li style={{padding:"12px 0", borderBottom:"1px solid var(--line-soft)"}}>
              <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--thread)", marginBottom:4}}>SPECIALISME</div>
              <p style={{fontSize:14, lineHeight:1.55}}>Sit &amp; Heat is specialist in buitenstof. Die expertise zit nu ook in de tas.
              Het SDA-materiaal is UV-bestendig, waterafstotend en slijtvast — dezelfde kwaliteit
              die Sit &amp; Heat in hun kernproducten levert. De keuze om dit restmateriaal direct
              te hergebruiken als buitenstof komt voort uit materiaalkennis, niet uit toeval.</p>
            </li>
            <li style={{padding:"12px 0"}}>
              <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--thread)", marginBottom:4}}>GASTVRIJHEID</div>
              <p style={{fontSize:14, lineHeight:1.55}}>Sit &amp; Heat ontwerpt voor het moment waarop iemand gaat zitten. De tas
              ontwerpt voor het moment daarvoor en daarna: onderweg naar het terras, de kroeg,
              de stad. De gebruiker van de tas is dezelfde persoon die op een Sit &amp; Heat kussen
              zit. Door voor diezelfde persoon te ontwerpen, blijft het merk aanwezig in het hele
              traject van de gebruiker, niet alleen op het terras.</p>
            </li>
          </ul>
          <div style={{border:"1px solid var(--line)", padding:14, background:"var(--paper)", marginTop:8}}>
            <p style={{fontSize:14, lineHeight:1.55, fontStyle:"italic"}}>
              De tas is daarmee geen klassiek Sit &amp; Heat product, maar wel een product dat
              voortkomt uit Sit &amp; Heat, voor de gebruiker van Sit &amp; Heat, gemaakt van de
              materialen van Sit &amp; Heat.
            </p>
          </div>

          {/* Beantwoording hoofdvraag */}
          <div style={{marginTop:40, paddingTop:32, borderTop:"1px solid var(--line)"}}>
            <div className="step-num" style={{marginBottom:12}}><span className="bullet"/>BEANTWOORDING CENTRALE ONDERZOEKSVRAAG</div>
            <div style={{border:"1px solid var(--line)", padding:20, background:"var(--paper)", marginBottom:20}}>
              <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--ink-soft)", marginBottom:10}}>Centrale onderzoeksvraag</div>
              <p style={{fontSize:13, lineHeight:1.65, fontStyle:"italic"}}>
                "Hoe kan Sit &amp; Heat haar reststromen omzetten in een of meerdere circulaire, marktwaardige productconcepten die produceerbaar zijn door mensen met een afstand tot de arbeidsmarkt?"
              </p>
            </div>
            <p className="wf-body" style={{marginBottom:16}}>
              Het antwoord is: door van SDA restmateriaal een draagbare tascollectie te maken, geproduceerd door Sociaal Atelier Blueview Apeldoorn, verkoopbaar bij retailpartners in het segment €60–100. De collectie is circulair (directe hergebruikhiërarchie), marktwaardig (bevestigd door retailer Henri) en atelierproduceerbaar (bevestigd door Blueview na prototype v3).
            </p>
          </div>

          {/* Beantwoording deelvragen */}
          <div style={{marginTop:24}}>
            <div className="step-num" style={{marginBottom:12}}><span className="bullet"/>BEANTWOORDING DEELVRAGEN</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
              {[
                ["DV 1", "Welke eigenschappen, volumes en variaties hebben de beschikbare restmaterialen?",
                  "SDA-weefsel domineert de reststroom (~78 kg/maand). Weerbestendig, kleurecht, 7 kleurgroepen. Volledig gedocumenteerd in materiaalinventarisatie. Andere materialen (schuim, batterijen, PVC) zijn niet geschikt voor tassen.",
                  "Beperking: de inventarisatie is een momentopname. De voorraad varieert per productiesprint, kleurgroepen en volumes zijn niet stabiel voorspelbaar."],
                ["DV 2", "Welke productcategorieën zijn geschikt voor circulaire soft goods?",
                  "Tassen scoren het hoogst in de keuzematrix: hoge materiaalbehoefte, marktwaarde en atelierhaalbaarheid. Aangetoond via brainstorm (>100 ideeën), clustering en vormonderzoek.",
                  "Beperking: de keuzematrix is gebaseerd op expert inschatting, niet op marktonderzoek per categorie. Horeca accessoires zijn afgevallen mede op basis van een gesprek met Roel (sales)."],
                ["DV 3", "Welke technische randvoorwaarden gelden binnen het atelier?",
                  "Max 10 lagen stof, standaard naaimachines, 1 cm naadwaarde, geen gespecialiseerde hardware. Vastgelegd in PvE categorieën M.1–M.6.",
                  "Beperking: de ateliereisen zijn gebaseerd op een oriënterend bezoek aan Blueview Apeldoorn. Validatie via een volledige productierun volgt in juni 2026."],
                ["DV 4", "Welke concepten zijn produceerbaar met wisselend materiaal?",
                  "Drie tasvarianten met een basispatroon plus een patchwork optie voor kleine restlappen. Kleurvariatie is een toevoeging, geen probleem (Freitag-model).",
                  "Beperking: het patchwork patroon is nog niet getest in het atelier. De productietijd per tas is daardoor nog onbekend."],
                ["DV 5", "Welke beperkingen gelden binnen de productie?",
                  "Beperkte atelieruren, wisselende materiaalvlakken, geen industriële machines. Opgelost via eenvoudig patroonsysteem en productiehandleiding (in ontwikkeling).",
                  "Beperking: de productiehandleiding is nog niet af. De werkelijke maakbaarheid is daarmee nog niet volledig gevalideerd."],
                ["DV 6", "Welke duurzaamheidstrends beïnvloeden de opgave?",
                  "Circulaire economie, zichtbare duurzaamheid en sociale impact zijn de drie dominante trends. De tas scoort op alle drie: het materiaalverhaal is zichtbaar en communiceerbaar.",
                  "Beperking: trendanalyse is desk research, geen primaire bronnen of consumentenonderzoek. De vertaling van trend naar koopbereidheid is niet empirisch getoetst."],
                ["DV 7", "Naar welke producten is er vraag in de doelgroep?",
                  "Actieve stadsbewoners, 20–50 jaar, €60–€100 budget. Bevestigd via Henri interview 1 (marktverkenning).",
                  "Beperking: doelgroep is gevalideerd via een retailer in Nijmegen. Bredere doelgroepvalidatie (gebruikerstest) volgt in juni 2026."],
                ["DV 8", "Hoe verhouden de concepten zich tot kostprijs, duurzaamheidsimpact en verkoopprijs?",
                  "~€28 inkoopprijs, €70 verkoopprijs. ~53 tassen/maand uit huidige reststroom. ~874 kg CO₂e vermeden per maand. Volledig uitgewerkt in stap 27 (harde cijfers).",
                  "Beperking: de kostprijsberekening is gedeeltelijk gebaseerd op schattingen. De CO₂-berekening volgt de Higg MSI methodiek met aannames voor transportafstand."],
              ].map(([k, vraag, antwoord, beperking], i) => (
                <div key={i} style={{border:"1px solid var(--line)", padding:14, background:"var(--paper)"}}>
                  <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"var(--thread)", marginBottom:4}}>{k}</div>
                  <p style={{fontSize:11, lineHeight:1.5, color:"var(--ink-soft)", marginBottom:8, fontStyle:"italic"}}>{vraag}</p>
                  <p style={{fontSize:13, lineHeight:1.55, color:"var(--ink)", marginBottom:8}}>{antwoord}</p>
                  <p style={{fontSize:11, lineHeight:1.5, color:"var(--ink-soft)", borderTop:"1px solid var(--fill-2)", paddingTop:8, margin:0}}>
                    <span style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--ink-mute)"}}>Beperking · </span>
                    {beperking}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verantwoording materiaalkeuze */}
          <div style={{marginTop:40, paddingTop:32, borderTop:"1px solid var(--line)"}}>
            <div className="step-num" style={{marginBottom:12}}><span className="bullet"/>VERANTWOORDING MATERIAALKEUZE</div>
            <h3 style={{fontFamily:"var(--sans)", fontWeight:500, fontSize:"clamp(18px,2vw,26px)", marginBottom:12}}>
              Waarom specifiek SDA-stof?
            </h3>
            <p className="wf-body" style={{marginBottom:14}}>
              De keuze voor Solution Dyed Acrylic als basismateriaal is niet vanzelfsprekend. Er waren meerdere materiaalstromen beschikbaar bij Sit &amp; Heat. De keuze voor SDA rust op vier samenhangende argumenten:
            </p>
            <div style={{display:"flex", flexDirection:"column", gap:12}}>
              {[
                ["Beschikbaarheid en volume",
                  "SDA vormt de dominante reststroom: ~78 kg per maand in consistente kwaliteit. Andere restmaterialen (schuim ~15 kg, fiberfill ~8 kg, PVC-coating) zijn te beperkt in volume, te moeilijk te bewerken of niet geschikt voor productie in een sociaal atelier."],
                ["Materiaalwaarde en kwaliteit",
                  "SDA is een hoogwaardig technisch weefsel: UV bestendig, waterafstotend, kleurecht door de verf in de vezel te verankeren (solution dyed proces). Dat zijn precies de eigenschappen die een buitentas nodig heeft. Het restmateriaal heeft daarmee dezelfde kwaliteitswaarden als nieuw materiaal."],
                ["Relatie met het sociale atelier",
                  "Blueview verwerkt dit materiaal al voor de kussens van Sit & Heat. Kennis van het materiaal is aanwezig in het atelier. Dat verlaagt de drempel voor productie aanzienlijk en maakt de materiaalkeuze logisch vanuit productieperspectief."],
                ["Circulariteitsargument",
                  "Door het SDA weefsel direct te hergebruiken voor tassen, blijft de materiaalwaarde volledig behouden. Binnen de R-strategiehiërarchie van Potting et al. (2017) valt dit daardoor in een van de hoogste vormen van circulariteit. Het alternatief (het recyclen van SDA) zorgt voor kwaliteitsverlies en vraagt om een infrastructuur die in Nederland nog beperkt aanwezig is. Daarom is direct hergebruik in dit geval de duurzamere keuze."],
              ].map(([titel, tekst], i) => (
                <div key={i} style={{display:"flex", gap:16, alignItems:"flex-start",
                  padding:"14px 0", borderBottom: i < 3 ? "1px solid var(--fill-2)" : "none"}}>
                  <div style={{fontFamily:"var(--mono)", fontSize:10, color:"var(--thread)",
                    minWidth:24, paddingTop:2, letterSpacing:"0.06em"}}>{String(i+1).padStart(2,"0")}</div>
                  <div>
                    <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.12em",
                      textTransform:"uppercase", color:"var(--ink-soft)", marginBottom:5}}>{titel}</div>
                    <p style={{fontSize:13, lineHeight:1.65}}>{tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Toetsingstabel — stand van zaken */}
          {(() => { const T = window.PvEToetsingstabel; return T ? <T /> : null; })()}

          {/* Link naar bronvermelding */}
          <div style={{marginTop:16, paddingTop:16, borderTop:"1px solid var(--line-soft)"}}>
            <a href="onderzoek.html?open=bronvermelding" style={{fontFamily:"var(--mono)", fontSize:11, color:"var(--green)", textDecoration:"underline", letterSpacing:"0.06em"}}>
              → Volledige bronvermelding op de Onderzoekspagina
            </a>
          </div>

          {/* Vervolg */}
          <div style={{marginTop:40, paddingTop:32, borderTop:"1px solid var(--line)"}}>
            <div className="step-num" style={{marginBottom:12}}><span className="bullet"/>VERVOLG</div>
            <h3 style={{fontFamily:"var(--sans)", fontWeight:500, fontSize:"clamp(18px,2vw,26px)", marginBottom:16}}>
              Wat dit betekent voor Sit &amp; Heat
            </h3>
            <p className="wf-body" style={{marginBottom:0}}>
              Dit project levert Sit &amp; Heat een productieklaar concept op, een onderbouwde businesscase en een directe
              samenwerking met Blueview Sociaal Atelier. De volgende stap is een pilotproductierun in juni 2026, waarbij het patroon
              en de productiehandleiding worden gevalideerd in het atelier.
              Op langere termijn biedt het Freitag-model van kleurvariatie als feature een kans om de collectie per seizoen
              te differentiëren zonder extra inkoopkosten. Dit project is daarmee niet het eindpunt van een afstudeertraject,
              maar de start van een reële productlijn.
            </p>
          </div>

          <div style={{clear:"both"}} />
        </div>
      </div>
    </section>
  );
};

/* ---------- 19. HARDE CIJFERS ---------- */
const Step19_HardeCijfers = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="27 Harde cijfers">
      <FrameLabel num="27" name="Harde cijfers — meetbaar effect" />
      <div className="step-bg" />
      <div className="step-pin" style={{
        gridTemplateColumns:"1fr 1fr",
        height:"auto", minHeight:"80vh",
        alignItems:"flex-start",
        paddingTop:"10vh", paddingBottom:"8vh"
      }}>

        {/* LINKS — sticky highlights */}
        <div className="step-content reveal-stagger reveal-left" style={{position:"sticky", top:"10vh"}}>
          <div className="step-num"><span className="bullet"/>STAP 27 · HARDE CIJFERS</div>
          <h2 className="wf-title">Wat het kan opleveren,<br/><span style={{color:"var(--green)"}}>in getallen.</span></h2>
          <p className="wf-body" style={{fontSize:13, lineHeight:1.6}}>
            Hieronder laten we zien
            hoe we aan de getallen komen, inclusief aannames en onzekerheden.
          </p>
          <div style={{marginTop:16}}>
            <p style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", marginBottom:6}}>Huidig (~49% hergebruik) per maand</p>
            <div className="cijfers-highlights" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
            <div className="nbig">
                <div className="v">~53</div>
                <div className="l">tassen/maand</div>
                <div className="note">uit ~38 kg</div>
            </div>
            <div className="nbig">
                <div className="v">~874<span className="u">kg</span></div>
                <div className="l">CO₂e vermeden/maand</div>
                <div className="note">23 kgCO₂e/kg</div>
            </div>
            <div className="nbig">
                <div className="v">€1.484</div>
                <div className="l">omzet/maand</div>
                <div className="note">inkoopprijs retail</div>
            </div>
            <div className="nbig">
                <div className="v">€1.113</div>
                <div className="l">winst/maand</div>
                <div className="note">na hardware ~€7/tas</div>
            </div>
            </div>
            <p style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", margin:"10px 0 6px"}}>Huidig — per jaar (× 12)</p>
            <div className="cijfers-highlights" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
            <div className="nbig">
                <div className="v">~636</div>
                <div className="l">tassen/jaar</div>
            </div>
            <div className="nbig">
                <div className="v">~10.488<span className="u">kg</span></div>
                <div className="l">CO₂e/jaar (~10,5 ton)</div>
            </div>
            <div className="nbig">
                <div className="v">€17.8k</div>
                <div className="l">omzet/jaar</div>
            </div>
            <div className="nbig">
                <div className="v">€13.4k</div>
                <div className="l">winst/jaar</div>
            </div>
          </div>
          </div>
          <div style={{marginTop:20}}>
            <p style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", marginBottom:6}}>70% scenario (PvE D.1) per maand</p>
            <div className="cijfers-highlights" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
              <div className="nbig">
                <div className="v">~76</div>
                <div className="l">tassen/maand</div>
                <div className="note">uit ~55 kg</div>
              </div>
              <div className="nbig">
                <div className="v">~1.265<span className="u">kg</span></div>
                <div className="l">CO₂e vermeden/maand</div>
                <div className="note">23 kgCO₂e/kg</div>
              </div>
              <div className="nbig">
                <div className="v">€2.128</div>
                <div className="l">omzet/maand</div>
                <div className="note">inkoopprijs retail</div>
              </div>
              <div className="nbig">
                <div className="v">€1.596</div>
                <div className="l">winst/maand</div>
                <div className="note">na hardware ~€7/tas</div>
              </div>
            </div>
            <p style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", margin:"10px 0 6px"}}>70% scenario per jaar (× 12)</p>
            <div className="cijfers-highlights" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
              <div className="nbig">
                <div className="v">~912</div>
                <div className="l">tassen/jaar</div>
              </div>
              <div className="nbig">
                <div className="v">~15.180<span className="u">kg</span></div>
                <div className="l">CO₂e/jaar (~15,2 ton)</div>
              </div>
              <div className="nbig">
                <div className="v">€25.5k</div>
                <div className="l">omzet/jaar</div>
              </div>
              <div className="nbig">
                <div className="v">€19.2k</div>
                <div className="l">winst/jaar</div>
              </div>
            </div>
          </div>
        </div>

        {/* RECHTS — berekeningen, scrollt binnen de hoogte van de linkerkolom */}
        <div className="step-stage reveal-right" style={{
          alignSelf:"stretch", position:"relative",
          padding:0
        }}>
          <div style={{position:"absolute", top:0, left:0, right:0, bottom:0,
            overflowY:"auto", padding:"0 0 24px 40px"}}>
          <div className="cijfers-col">

            {/* SECTIE 1: Materiaal + scenario's */}
            <div className="calc-section">
              <h4>1 · Materiaalberekening</h4>
              <p style={{fontSize:12, lineHeight:1.65, marginBottom:10}}>
                Sit &amp; Heat produceert maandelijks <strong>~78 kg</strong> SDA restmateriaal
                (variërende kleuren, variërende lapgrootte). Niet elk stuk is direct bruikbaar,
                kleine lappen (&lt;A4) zijn vooralsnog buiten beschouwing gelaten.
              </p>
              <div className="calc-block">
                <b>Huidig scenario (~50% hergebruik) per maand:</b><br/>
                Restmateriaal: <b>78 kg/maand</b><br/>
                Bruikbaar: <b>~38 kg</b> eigen inschatting op basis van lapgrootte<br/>
                Resterend: ~40 kg (kleine stukken → patchwork variant D.5)<br/>
                Materiaal per tas: ~0,72 kg → <b>~53 tassen/maand</b><br/>
                Per jaar: 53 × 12 = <b>~636 tassen/jaar</b> uit <b>~456 kg</b>
        </div>
              <div className="calc-block">
                <b>70% scenario (PvE D.1 minimumdoel) per maand:</b><br/>
                Bruikbaar: 78 × 70% = <b>~55 kg/maand</b><br/>
                Tassen: 55 ÷ 0,72 = <b>~76 tassen/maand</b><br/>
                Per jaar: 76 × 12 = <b>~912 tassen/jaar</b> uit <b>~660 kg</b><br/>
                Dit vereist ook kleinere lappen inzetten (patchwork systeem D.5)
              </div>
              <div className="warning-note">
                <span className="wi">⚠</span>
                <span>De 38 kg schatting is niet opnieuw gewogen per categorie. Het maandvolume van 78 kg is een schatting op basis van de huidige voorraad, niet langdurig gemeten.</span>
              </div>
            </div>

            {/* SECTIE 2: CO₂ — twee perspectieven */}
            <div className="calc-section">
              <h4>2 · CO₂ besparing: twee perspectieven</h4>
              <p style={{fontSize:12, lineHeight:1.65, marginBottom:10}}>
                Je kunt de besparing op twee manieren bekijken. Ze overlappen deels en zijn
                <em> niet</em> op te tellen.
              </p>
              <div className="calc-block">
                <b>Perspectief A  Vermeden afvalverwerking:</b><br/>
                Het materiaal gaat niet naar verbranding maar wordt hergebruikt.<br/>
                Factor: <b>3,4 kgCO₂e/kg</b> <span className="source-tag">Recycling Nederland</span><br/><br/>
                Huidig: per maand: 38 × 3,4 = <b>~129 kgCO₂e</b><br/>
                Huidig: per jaar: 129 × 12 = <b>~1.548 kgCO₂e</b><br/>
                70%-scenario: per maand: 55 × 3,4 = <b>~186 kgCO₂e</b><br/>
                70%-scenario: per jaar: 186 × 12 = <b>~2.232 kgCO₂e</b>
              </div>
              <div className="calc-block">
                <b>Perspectief B Vermeden productie van nieuw SDA (hoofdgetal):</b><br/>
                Er hoeft geen nieuw solution dyed acrylic geproduceerd te worden voor het maken van de tassen.<br/>
                Onderbouwing factor <b>~23 kgCO₂e/kg</b>:<br/>
                &nbsp;• "Cradle-to-gate" acrylvezelproductie: <b>21,1 kgCO₂e/kg</b> <span className="source-tag">ADEME via Selvane.co</span><br/>
                &nbsp;• Verwerkingsfase (weven, finishing, scope 1+2): <b>~1,9 kgCO₂e/kg</b> <span className="source-tag">Vade &amp; Athalye 2025</span><br/>
                &nbsp;• SDA-besparing: verfproces valt weg (kleur tijdens extrusie) → som ~23<br/>
                &nbsp;• Per tas (0,72 kg): <b>~16,6 kgCO₂e</b><br/><br/>
                <b>Huidig: per maand (38 kg):</b><br/>
                38 × 23 = <b>~874 kgCO₂e</b><br/>
                <b>Huidig: per jaar:</b><br/>
                874 × 12 = <b>~10.488 kgCO₂e (~10,5 ton)</b><br/><br/>
                <b>70%-scenario: per maand (55 kg):</b><br/>
                55 × 23 = <b>~1.265 kgCO₂e</b><br/>
                <b>70%-scenario: per jaar:</b><br/>
                1.265 × 12 = <b>~15.180 kgCO₂e (~15,2 ton)</b>
              </div>
            </div>

            {/* SECTIE 3: Vergelijking */}
            <div className="calc-section">
              <h4>3 · Vergelijking: wat betekent dit?</h4>
              <div className="calc-block">
                <b>10,5 ton CO₂</b> staat gelijk aan de jaarlijkse uitstoot van ongeveer <b>6 tot 7 gemiddelde Nederlandse huishoudens</b>.<br/><br/>
                Om deze hoeveelheid CO₂ uit de lucht te halen, moeten er grofweg <b>500 tot 1.000 volwassen bomen</b> een heel jaar lang groeien.<br/><br/>
                <span style={{fontSize:10, color:"var(--ink-soft)"}}>Bron: <a href="https://www.nn.nl/Inspiratie/CO2-uitstoot.htm" target="_blank" rel="noopener noreferrer" style={{color:"var(--ink-soft)", textDecoration:"underline"}}>nn.nl/Inspiratie/CO2-uitstoot</a></span>
              </div>

              <p style={{fontSize:12, lineHeight:1.65, marginTop:10, fontStyle:"italic", color:"var(--ink-soft)"}}>
                <strong>Displacement (theoretisch):</strong> Elke verkochte tas voorkomt ook de aankoop van
                een andere tas die wel nieuw geproduceerd zou zijn. Dit "avoided product" effect is een
                erkend LCA-concept, maar te speculatief om realistisch mee te rekenen, het hangt af van welke
                tas, welk materiaal en welk productieland. Niet als getal opgenomen.
              </p>
            </div>

            {/* SECTIE 4: Tijdsframing */}
            <div className="calc-section">
              <h4>4 · Totaaloverzicht: maand vs. jaar</h4>
              <p style={{fontSize:12, lineHeight:1.65, marginBottom:10}}>
                Sit &amp; Heat genereert ~78 kg SDA restmateriaal per maand.
                Alle berekeningen zijn gebaseerd op deze maandelijkse stroom.
              </p>
              <div className="calc-block">
                <b>Huidig scenario (~49% hergebruik):</b><br/>
                Per maand: ~53 tassen · ~874 kgCO₂e · €1.484 omzet · €1.113 winst<br/>
                Per jaar: <b>~636 tassen · ~10.488 kgCO₂e (~10,5 ton) · €17.808 omzet · €13.356 winst</b>
              </div>
              <div className="calc-block">
                <b>70%-scenario (PvE D.1):</b><br/>
                Per maand: ~76 tassen · ~1.265 kgCO₂e · €2.128 omzet · €1.596 winst<br/>
                Per jaar: <b>~912 tassen · ~15.180 kgCO₂e (~15,2 ton) · €25.536 omzet · €19.152 winst</b>
              </div>
              <div className="warning-note">
                <span className="wi">⚠</span>
                <span>Het maandvolume van 78 kg is gebaseerd op de huidige inventaris, niet langdurig gemeten. De jaarprojectie (× 12) gaat ervan uit dat de afvalstroom constant is.</span>
              </div>
            </div>

            {/* SECTIE 5: Economie */}
            <div className="calc-section">
              <h4>5 · Economie &amp; kostprijsopbouw</h4>
              <p style={{fontSize:12, lineHeight:1.65, marginBottom:10}}>
                Blueview leidt via de gemeente mensen op met een afstand tot de arbeidsmarkt. De arbeid die zij leveren wordt daarom <strong>niet gefactureerd</strong>: de productiekosten voor Sit &amp; Heat bestaan alleen uit hardware en materiaal. Blueview heeft 1 fte beschikbaar voor de productie van de tassen.
              </p>
              <div className="calc-block">
                <b>Productietijd:</b> ~2 uur/tas ⚠ schatting<br/>
                53 tassen = 106 uur = ~13 werkdagen (8u/dag) → past binnen 1 fte<br/><br/>
                <b>Inkoopprijs voor Henri (retailmarge 2,5×):</b> <span className="source-tag">Henri interview 2</span><br/>
                Verkoopprijs consument: €70 → inkoopprijs: €70 ÷ 2,5 = <b>~€28/tas</b><br/><br/>
                <b>Kostprijsopbouw:</b><br/>
                Materiaal SDA: <b>€0</b> (restmateriaal, geen inkoopkosten)<br/>
                Arbeid: <b>€0</b> (opleidingstraject via gemeente, niet gefactureerd)<br/>
                Hardware (rits, clips, D-ring, band): <b>~€6–8</b> ⚠ schatting<br/>
                Kostprijs per tas: <b>~€7</b><br/><br/>
                <b>Winst per tas voor Sit &amp; Heat:</b><br/>
                €28 − €7 = <b>~€21/tas</b><br/><br/>
                <b>Winst bij volledige verkoop:</b><br/>
                Huidig: 53 tassen × €21 = <b>~€1.113/maand</b> · <b>~€13.356/jaar</b><br/>
                70%-scenario: 76 tassen × €21 = <b>~€1.596/maand</b> · <b>~€19.152/jaar</b>
              </div>
              <div className="warning-note">
                <span className="wi">⚠</span>
                <span>Productietijd (2 uur/tas) en hardwarekosten worden gevalideerd in vervolgafspraak Blueview. Bij meer dan 53 tassen/maand kan de 1 fte capaciteit een bottleneck worden.</span>
              </div>
            </div>

            {/* SECTIE 6: Recyclebaarheid */}
            <div className="calc-section">
              <h4>6 · Recyclebaarheid einde leven</h4>
              <div className="calc-block">
                SDA (solution-dyed acrylic) is als mono materiaal <b>100% recyclebaar</b>
                <span className="source-tag">Recycling Nederland</span>
              </div>
              <p style={{fontSize:12, lineHeight:1.65, marginTop:10}}>
                Nuance: <em>recyclebaar</em> ≠ <em>wordt gerecycled</em>. In Nederland wordt slechts
                ~36% van textiel ingezameld, terwijl 65% recyclebaar zou zijn. De infrastructuur voor
                textielrecycling in NL is beperkt, zeker voor synthetische weefsels.
              </p>
            </div>

            {/* BRONNEN */}
            <div className="bronnen-list">
              <p style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", margin:"0 0 8px"}}>Bronnen</p>
              <div className="br">Selvane.co: Carbon Footprint of Natural vs. Synthetic Fibers: A Life Cycle Assessment Comparison (ADEME database, 21,1 kgCO₂e/kg acrylvezel). selvane.co/blogs/knowledge/carbon-footprint-of-natural-vs-synthetic-fibers-a-life-cycle-assessment-comparison</div>
              <div className="br">Vade, V.B. &amp; Athalye, A. (2025). Climate Impact Measurement of Acrylic Manufacturing Unit. Chemical and Biomolecular Engineering, 10(3), pp. 37–43. doi:10.11648/j.cbe.20251003.11</div>
              <div className="br">Recycling Nederland: recyclingnederland.nl/artikelen/nieuwe-kleding-maken-uit-oud-textiel-gebeurt-mondjesmaat/</div>
              <div className="br">Henri (interview 1 &amp; 2, 2025/2026): prijsindicatie en retailmarge 2,5×.</div>
            </div>

          </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ---------- OUTRO ---------- */
const Outro = () => (
  <section className="outro" data-screen-label="22 Outro">
    <FrameLabel num="—" name="Outro / colofon" />
    <WfTag>Einde van het verslag</WfTag>
    <h2 className="wf-title" style={{maxWidth:"22ch"}}>
      Gemaakt van wat over was.<br/>Gedragen waar het thuishoort.
    </h2>

    {/* Vervolgstappen — juni 2026 */}
    <div style={{marginTop:56, marginBottom:48, borderTop:"1px solid rgba(255,255,255,0.15)", paddingTop:40}}>
      <div className="step-num" style={{marginBottom:16, color:"rgba(255,255,255,0.4)"}}><span className="bullet"/>WAT HIERNA KOMT</div>
      <h3 className="wf-title" style={{fontSize:"clamp(20px, 2.5vw, 32px)", marginBottom:16}}>
        Testplan: 1 juni → 30 juni
      </h3>
      <p className="wf-body" style={{marginBottom:12, fontSize:16, lineHeight:1.7}}>
        Het verslag wordt ingeleverd op <strong style={{color:"var(--bg)"}}>1 juni</strong>. De eindzitting is op <strong style={{color:"var(--bg)"}}>30 juni</strong>. In de tussenliggende vier weken wordt het ontwerp afgerond, getest en gedocumenteerd. Het eindproduct en de validatie worden gepresenteerd buiten het verslag om, als onderdeel van de zitting.
      </p>

      {/* Tijdlijn */}
      <div style={{marginBottom:40, padding:"16px 20px", border:"1px solid rgba(255,255,255,0.12)", display:"flex", gap:0}}>
        {[
          {week:"Week 1", datum:"2–6 juni",   kleur:"var(--thread)", items:["Prototype v4 afmaken (binnenhoes)", "PvE-toetsing v4 uitvoeren"]},
          {week:"Week 2", datum:"9–13 juni",  kleur:"var(--thread)", items:["Productiehandleiding schrijven", "Branding/label ontwerpen"]},
          {week:"Week 3", datum:"16–20 juni", kleur:"var(--green)",  items:["Proefproductie bij Blueview", "Documentatie atelier"]},
          {week:"Week 4", datum:"23–27 juni", kleur:"var(--green)",  items:["Gebruikerstesten (draagtest, functietest)", "Presentatie voorbereiden"]},
        ].map(({week, datum, kleur, items}, i) => (
          <div key={i} style={{flex:1, padding:"12px 16px", borderLeft: i>0 ? "1px solid rgba(255,255,255,0.08)" : "none"}}>
            <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", color:kleur, marginBottom:4}}>{week}</div>
            <div style={{fontFamily:"var(--mono)", fontSize:10, color:"rgba(255,255,255,0.5)", marginBottom:10}}>{datum}</div>
            {items.map((item, j) => (
              <div key={j} style={{display:"flex", gap:6, alignItems:"flex-start", marginBottom:6}}>
                <span style={{color:kleur, fontSize:10, flexShrink:0, marginTop:1}}>→</span>
                <span style={{fontFamily:"var(--mono)", fontSize:10, color:"rgba(255,255,255,0.7)", lineHeight:1.4}}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 6 stappen */}
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"2px"}}>
        {[
          {
            num:"01",
            week:"Week 1",
            pve:"F.1 · F.3 · F.4 · F.5 · M.3 · O.2",
            title:"Prototype v4 afronden en keuren",
            body:"De binnenhoes en definitieve hardware worden afgemaakt. Daarna volgt een volledige toetsing aan het PvE: lagentelling, laptopruimte meten, riemlengte controleren, 45° kanteltest uitvoeren. Op basis van die toetsing wordt besloten: gaat v4 rechtstreeks naar productie, of is er een kleine v4.1 nodig? Het criterium is niet perfectie, maar of de tas productierijp is voor Blueview."
          },
          {
            num:"02",
            week:"Week 2",
            pve:"M.4 · M.6 · O.4 · O.5",
            title:"Productiehandleiding schrijven",
            body:"Blueview heeft gevraagd om mallen en een gedetailleerd stappenplan. Die worden uitgewerkt: een visuele handleiding met knipvolgorde (incl. zero-waste logica D.4), naadmarges van 1 cm (M.4), afwerkingseisen en een kleursorteringsgids. Doel: elke naaister kan de tas maken zonder directe begeleiding van de ontwerper."
          },
          {
            num:"03",
            week:"Week 2",
            pve:"A.4",
            title:"Branding uitwerken",
            body:"De tas heeft nog geen label. Branding die niet aansluit op het product ondermijnt het verhaal. Nu het product concreet is, wordt een eenvoudig naailabel ontworpen van restmateriaal of gerecycled plastic, met merknaam en materiaalherkomst (A.4). Het label maakt de circulaire herkomst zichtbaar op straat."
          },
          {
            num:"04",
            week:"Week 3",
            pve:"M.1 · M.2 · M.7 · M.9 · D.4",
            title:"Proefproductie bij Blueview",
            body:"De eerste proefproductie bij Blueview wordt ingepland. Doel: niet een perfecte eindtas, maar inzicht in hoe het patroon en de handleiding werken in de praktijk van het atelier. Hoeveel lagen worden bereikt? Welke stappen zijn moeilijk? Afwijkingen worden gedocumenteerd en verwerkt in de definitieve versie van het patroon en de handleiding."
          },
          {
            num:"05",
            week:"Week 4",
            pve:"F.5 · F.6 · F.7 · F.8 · F.12 · A.3",
            title:"Gebruikerstesten",
            body:"De tas wordt door minimaal drie personen getest: 45° kanteltest (F.5), sluiting in max. 5 seconden (F.6), rits drie keer heen en terug (F.7). Daarnaast een week dagelijks gebruik door de ontwerper: fiets, stad, terras. Draagcomfort, click systeem en stabiliteit worden gedocumenteerd. Tegelijk: promotie ­foto's en korte video voor de presentatie."
          },
          {
            num:"06",
            week:"Week 4",
            pve:"O.1 · O.2 · O.3",
            title:"Presentatie voorbereiden",
            body:"De presentatie voor HAN IPO op 30 juni vat het volledige traject samen: van reststroom tot productierijp concept. De PvE-toetsing van v4 (inclusief de testresultaten van stap 05) is onderdeel van de presentatie. Dit is het moment waarop het product formeel getoetst wordt aan alle eisen. Na de presentatie ligt er een compleet dossier klaar voor Sit & Heat."
          },
        ].map(({num, week, pve, title, body}) => (
          <div key={num} style={{padding:"28px 24px", borderTop:"1px solid rgba(255,255,255,0.12)"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12}}>
              <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", color:"rgba(255,255,255,0.35)"}}>{num}</div>
              <div style={{fontFamily:"var(--mono)", fontSize:8, letterSpacing:"0.1em", color:"var(--thread)"}}>{week}</div>
            </div>
            <div style={{fontFamily:"var(--mono)", fontSize:11, letterSpacing:"0.06em", color:"var(--bg)", marginBottom:8, lineHeight:1.4}}>{title}</div>
            <div style={{fontFamily:"var(--mono)", fontSize:8, letterSpacing:"0.08em", color:"rgba(255,255,255,0.3)", marginBottom:10}}>PvE: {pve}</div>
            <p className="wf-body" style={{margin:0, fontSize:13, lineHeight:1.7}}>{body}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Colofon */}
    <div style={{borderTop:"1px solid rgba(255,255,255,0.15)", paddingTop:32}}>
      <p className="wf-body lg">Afstudeerproject · 2026 · HAN Industrial Product Ontwerpen</p>
      <p className="wf-body" style={{marginTop:8}}>Berend Linssen · bi.linssen@student.han.nl</p>
      <p className="wf-body" style={{marginTop:4}}>Sit &amp; Heat · Sociaal atelier BlueView Apeldoorn</p>
      <p className="wf-body" style={{marginTop:16, color:"rgba(255,255,255,0.4)"}}>
        Met dank aan Jorg (CEO Sit &amp; Heat), Jeroen (co-founder/sales Sit &amp; Heat), Niels (head of sales), Milan, Femke, Thijs, Hugo, Henri (Tempel Mode), Roel
        en iedereen bij het sociale atelier die dit mogelijk maakte.
      </p>
    </div>
  </section>
);

/* ────────────────────────────────────────────────────────────────────────
   TERUGKOPPELING BLOKKEN
   Geen data-step-num verschijnen niet in het progress wheel.
   Staan als bruggen tussen de grote fasen.
   ────────────────────────────────────────────────────────────────────── */

const _TK = {
  outer: { padding:"36px 0", background:"var(--paper)", borderTop:"1px solid var(--line-soft)" },
  inner: { maxWidth:700, margin:"0 auto", padding:"0 6vw" },
};

const TerugkoppelingBrainstorm = () => {
  const ref = useReveal();
  return (
    <section ref={ref} style={_TK.outer}>
      <div style={_TK.inner}>
        <div className="reveal-stagger" style={{borderLeft:"3px solid var(--green)", paddingLeft:20}}>
          <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--green)", marginBottom:10}}>Terugkoppeling · Brainstormfase</div>
          <p style={{fontSize:13, lineHeight:1.65, margin:"0 0 10px"}}>
            Het materiaalonderzoek (stap 5) wees SDA aan als meest waardevolle reststroom voor directe hergebruik. De Freitag referentie uit het marktonderzoek (variabel afvalmateriaal als uniek verkoopargument) werd hiermee niet alleen als strategie bevestigd, maar ook als productcategorie.
          </p>
          <p style={{fontSize:12, lineHeight:1.65, margin:"0 0 8px", color:"var(--ink-soft)"}}>
            Het voorlopig PvE (stap 6) was bewust opgesteld zonder vaste productcategorie, als filter voor de brainstorm. De uitkomsten zitopties, horeca items en tassen voldoen aan de gestelde eisen: min. 70% restmateriaal haalbaar, maakbaar in een sociaal atelier, en marktwaardig. De risicoanalyse (stap 3) had materiaelvariatie als hoog risico aangemerkt. Tassen kunnen variabele kleuren en maten opvangen, waardoor dit risico direct werd geadresseerd door de productkeuze zelf.
          </p>
        </div>
      </div>
    </section>
  );
};

const TerugkoppelingPrototyping = () => {
  const ref = useReveal();
  return (
    <section ref={ref} style={_TK.outer}>
      <div style={_TK.inner}>
        <div className="reveal-stagger" style={{borderLeft:"3px solid var(--green)", paddingLeft:20}}>
          <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--green)", marginBottom:10}}>Terugkoppeling · Prototypingfase</div>
          <p style={{fontSize:13, lineHeight:1.65, margin:"0 0 10px"}}>
            De methodische keuze voor Design by Doing (stap 4) werd door de prototypefase gerechtvaardigd: materiaaleigenschappen zoals fraying, stijfheid en benodigde naadmarge waren niet op papier te voorspellen, maar kwamen pas naar voren door fysiek te maken. De risicoanalyse (stap 3) had materiaelvariatie en beperkte ateliercapaciteit als hoge risico's aangemerkt, beide kwamen daadwerkelijk terug als sturende factoren. Materiaelvariatie vroeg om organischere patronen (v4). Atelierbeperkingen (max. 10 lagen stof, 1 cm naadmarge, afgewerkte snijkanten) kwamen pas bij het Blueview gesprek (stap 24) aan het licht en ontbraken in het voorlopig PvE.
          </p>
          <p style={{fontSize:12, lineHeight:1.65, margin:"0 0 8px", color:"var(--ink-soft)"}}>
            Het marktonderzoek (stap 5) suggereerde een consumentenprijs van 60–100 euro. Henri bevestigde dit segment bij de validatie van prototype 3 (stap 22), waarmee de aanname uit het onderzoek werd omgezet in een gevalideerde eis (E.2). Het voorlopig PvE (stap 6) groeide door de prototypefase van een kader zonder productie-eisen naar een levend document: vier nieuwe maakbaarheidseisen (M.3–M.6) zijn direct afkomstig uit de praktijk, niet uit deskresearch.
          </p>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  Step01_OpenVraag, Step02_VraagNaarOpdracht, Step03_PvA, Step04_MethodeCirculariteit,
  ResearchSection,
  Step06_VoorlopigPvE,
  Step09_StructurerenIdeeen,
  Step10_SchetsVerkenning, Step11_NaaienExploratie,
  Step12_KeuzeTassen, Step13_RetailHenri, Step14_Spanningsveld,
  Step15_Doelgroep,
  Step18_Verantwoording, Step19_HardeCijfers,
  Outro,
  TerugkoppelingBrainstorm, TerugkoppelingPrototyping,
});
