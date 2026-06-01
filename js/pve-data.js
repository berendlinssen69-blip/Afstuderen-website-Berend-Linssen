/* pve-data.js — Definitief PvE data · Sit & Heat 2026
   Geladen door index.html (voor Step25) en onderzoek.html (voor PvE-kaart).
   Stelt DEFINITIEF_PVE beschikbaar via window.                              */

window.DEFINITIEF_PVE = [
  {
    cat: "Duurzaamheid & Circulariteit", kleur: "var(--green)", code: "D",
    rows: [
      { nr: "D.1", t: "Eis",  eis: "Product bestaat minimaal voor 70% uit SDA-restmateriaal van Sit & Heat", meet: "Weeg totaal stofoppervlak; bereken aandeel SDA-restmateriaal. Minimumgrens: 70% van totaal oppervlak.", bron: "Sit & Heat (briefing); Materiaalonderzoek; Materiaalinventarisatie" },
      { nr: "D.2", t: "Eis",  eis: "Materiaalgebruik is aantoonbaar en communiceerbaar", meet: "Gewicht of oppervlak restmateriaal per tas is documenteerbaar en navolgbaar te communiceren via label of productpagina.", bron: "Sit & Heat (briefing); Trendonderzoek" },
      { nr: "D.3", t: "Eis",  eis: "Ontwerp positioneert zich op hergebruik-niveau binnen de R-strategie hiërarchie", meet: "Toetsbaar aan Potting et al. (2017): materiaal wordt direct hergebruikt zonder destructieve bewerking (shredden, smelten).", bron: "Materiaalonderzoek; Circulariteitsonderzoek (Potting et al., 2017)" },
      { nr: "D.4", t: "Wens", eis: "Snijpatronen volgen zero-waste logica", meet: "Kleinere producten worden gesneden uit resterende vlakken van grotere snijronden. Aantoonbaar in snijplan.", bron: "Ontwerptest / eigen gebruik" },
      { nr: "D.5", t: "Wens", eis: "Ontwerp maakt extra patroonvarianten mogelijk uit kleinere restlappen", meet: "Tweede patroonsysteem (patchwork / opgedeelde vlakken) is aantoonbaar te snijden uit lappen kleiner dan A4-formaat.", bron: "Ontwerptest V4; Materiaalinventarisatie (22+ kg kleine stukken)" },
      { nr: "D.6", t: "Wens", eis: "Ontwerp is modulair of herstelbaar", meet: "Riem, sluiting of voering is vervangbaar zonder het product te vernietigen. Toetsbaar via demontageproef.", bron: "Sit & Heat; Marktonderzoek" },
    ],
  },
  {
    cat: "Maakbaarheid & Productie", kleur: "var(--thread)", code: "M",
    rows: [
      { nr: "M.1", t: "Eis",  eis: "Product is maakbaar met de aanwezige machines in het sociale atelier", meet: "Productiestappen vereisen uitsluitend: naaimachine, aflockmaschine, snijmachine. Geen gespecialiseerde machines.", bron: "Stakeholderanalyse; Atelier (machines geïnventariseerd)" },
      { nr: "M.2", t: "Eis",  eis: "Productiestappen zijn eenvoudig en herhaalbaar voor verschillende vaardigheidsniveaus", meet: "Elke stap is uitvoerbaar door een medewerker zonder specifieke naaiopleiding na korte instructie.", bron: "Stakeholderanalyse; Atelier" },
      { nr: "M.3", t: "Eis",  eis: "Ontwerp overschrijdt nergens 10 lagen stof", meet: "Tel lagen op dikste punt (naadkruisingen meegerekend). Maximum: 10 lagen.", bron: "Atelier (machinelimiet); Ontwerptest V1–V4" },
      { nr: "M.4", t: "Eis",  eis: "Alle productiemallen worden aangeleverd met 1 cm stiknaadbreedte inbegrepen", meet: "Contourlijn = snijlijn, gestippelde lijn op 1 cm = stiklijn. Geen mal zonder stiknaadindicatie.", bron: "Atelier (werkstandaard 1 cm naadwaarde)" },
      { nr: "M.5", t: "Eis",  eis: "Alle snijkanten zijn afgewerkt", meet: "Inspecteer elk snijvlak: afgelockt, omgeslagen of afgewerkt. Geen open kanten.", bron: "Materiaalonderzoek (SDA rafelt); Ontwerptest V1–V4" },
      { nr: "M.6", t: "Eis",  eis: "Ritsen en bevestigingen worden aangeleverd door ontwerper; atelier koopt niets zelf in", meet: "Productielijst vermeldt alle hardware met leverancier. Atelier ontvangt hardware kant en klaar.", bron: "Sit & Heat; Atelier" },
      { nr: "M.7", t: "Wens", eis: "Constructie bestaat uit maximaal 15-20 afzonderlijke patroondelen", meet: "Tel het aantal unieke mallen. Streefwaarde: ≤15. Minder onderdelen = lagere foutmarge.", bron: "Stakeholderanalyse; Ontwerptest V1–V4" },
      { nr: "M.8", t: "Wens", eis: "Ontwerp is tolerant voor kleur en maatafwijkingen in het restmateriaal", meet: "Patroon werkt met minimaal drie verschillende kleuren of kleurcombinaties uit de beschikbare voorraad.", bron: "Materiaalinventarisatie (7 kleuren SDA); Marktonderzoek (Freitag)" },
      { nr: "M.9", t: "Wens", eis: "Productieproces biedt ruimte voor ontwikkeling medewerkers", meet: "Minimaal twee stappen zijn te kwalificeren als leerzame handeling (niet puur repetitief).", bron: "Stakeholderanalyse; Sit & Heat" },
    ],
  },
  {
    cat: "Functionaliteit & Gebruik", kleur: "var(--ink)", code: "F",
    rows: [
      { nr: "F.1",  t: "Eis",  eis: "Tas biedt ruimte aan een laptop van minimaal 14 inch", meet: "Meet intern laptopvak: minimaal 34 × 24 × 2 cm. Toetsbaar door een 14 inch laptop in het vak te plaatsen.", bron: "Doelgroepomschrijving; Ontwerptest" },
      { nr: "F.2",  t: "Eis",  eis: "Tas biedt naast de laptop ruimte aan dagelijkse essentials", meet: "Telefoon, portemonnee en sleutels passen gelijktijdig naast een 14 inch laptop.", bron: "Henri (interview 1); Doelgroepomschrijving" },
      { nr: "F.3",  t: "Eis",  eis: "Tas is primair te dragen als crossbody", meet: "Schouderband is standaard draagvorm. Tas hangt stabiel op heupbothoogte bij 165–185 cm.", bron: "Henri (interview 1); Ontwerptest (fietscontext)" },
      { nr: "F.4",  t: "Eis",  eis: "Riem is verstelbaar in lengte", meet: "Instelbaar zonder gereedschap voor dragers van 160–190 cm. Minimaal 30 cm bereik.", bron: "Henri (interview 1); Ontwerptest V1" },
      { nr: "F.5",  t: "Eis",  eis: "Tas heeft een primaire afsluiting die de inhoud vasthoudt", meet: "Inhoud valt niet uit bij 45° kanteling en bij normaal fietsgebruik.", bron: "Ontwerptest; Doelgroepomschrijving" },
      { nr: "F.6",  t: "Eis",  eis: "Primaire sluiting is met een simpele handeling bedienbaar", meet: "Drie testpersonen openen en sluiten de tas in max. 5 seconden.", bron: "Henri (interview 2); Ontwerptest V3" },
      { nr: "F.7",  t: "Eis",  eis: "Rits loopt zonder weerstand over de volledige lengte", meet: "Drie testpersonen bewegen de rits drie keer heen en terug zonder weerstand.", bron: "Ontwerptest V2–V3" },
      { nr: "F.8",  t: "Eis",  eis: "Product is veilig in gebruik", meet: "Geen scherpe randen, uitstekende metaalonderdelen of loslatende sluitingen.", bron: "Stakeholderanalyse; Risicoanalyse" },
      { nr: "F.9",  t: "Wens", eis: "Tas heeft een secundaire draagmogelijkheid via clip of bevestiging", meet: "Optionele clip of bevestigingspunt aanwezig. Functioneel maar niet primair getest.", bron: "Ontwerptest (slingback-systeem)" },
      { nr: "F.10", t: "Wens", eis: "Interne organisatie via minimaal een extra vak of bevestigingspunt", meet: "Minimaal een telefoon of sleutel compartement in binnenhoes.", bron: "Henri (interview 1); Ontwerptest V2–V3" },
      { nr: "F.11", t: "Wens", eis: "Tas is weerbestendig bij normaal buitengebruik", meet: "SDA materiaal is inherent weerbestendig. Naden en sluitingen kanaliseren geen water bij korte regenbui.", bron: "Materiaalonderzoek" },
      { nr: "F.12", t: "Wens", eis: "Tas staat zelfstandig rechtop op een vlakke ondergrond", meet: "Volledig gevulde tas staat zonder steun. Toetsbaar op vlakke tafel.", bron: "Ontwerptest V1; Henri (interview V3)" },
    ],
  },
  {
    cat: "Esthetiek & Merkidentiteit", kleur: "var(--ink-soft)", code: "A",
    rows: [
      { nr: "A.1", t: "Eis",  eis: "Ontwerp past binnen de merkidentiteit van Sit & Heat: duurzaam, rustig, kwalitatief", meet: "Toetsbaar via merktoetsing met Jorg/Jeroen: ontwerp wordt herkend als passend bij Sit & Heat.", bron: "Sit & Heat (briefing); Stakeholderanalyse" },
      { nr: "A.2", t: "Eis",  eis: "Afwerking straalt kwaliteit uit bij visuele inspectie", meet: "Geen losse draden, scheve stiksels of zichtbare lijmresten. Inspectie op 50 cm afstand bij daglicht.", bron: "Henri (interview 1); Ontwerptest V1–V4" },
      { nr: "A.3", t: "Eis",  eis: "Basisontwerp is tijdloos en genderneutraal", meet: "Geen expliciete gender indicatoren. Min. twee personen van verschillend geslacht dragen de tas zonder opmerking.", bron: "Doelgroepomschrijving; Ontwerptest" },
      { nr: "A.4", t: "Eis",  eis: "Product draagt een label met minimaal merknaam en materiaalherkomst", meet: "Label aanwezig met merknaam Sit & Heat + vermelding restmateriaal SDA.", bron: "Henri (interview 2); Sit & Heat" },
      { nr: "A.5", t: "Wens", eis: "Egale buitenkant in een kleur als basisuitvoering", meet: "Basisuitvoering heeft een kleur SDA stof op de buitenkant. Visueel toetsbaar.", bron: "Henri (interview 1); Ontwerptest V4" },
      { nr: "A.6", t: "Wens", eis: "Hardware sluit in kleur aan op de stofkleur", meet: "Kleurverschil tussen hardware en stof is visueel niet storend op 1 meter afstand.", bron: "Henri (interview 2)" },
      { nr: "A.7", t: "Wens", eis: "Variatie tussen individuele exemplaren is toegestaan en gewenst", meet: "Geen twee exemplaren hoeven identiek te zijn. Kleurvariatie per lot is een kenmerk.", bron: "Marktonderzoek (Freitag); Materiaalinventarisatie" },
    ],
  },
  {
    cat: "Economie & Haalbaarheid", kleur: "var(--ink-soft)", code: "E",
    rows: [
      { nr: "E.1", t: "Eis",  eis: "Kostprijs per tas is inzichtelijk en gedocumenteerd", meet: "Kostprijsberekening aanwezig met minimaal: materiaalkosten, hardware, geschatte productietijd × uurtarief.", bron: "Sit & Heat; Marktonderzoek" },
      { nr: "E.2", t: "Eis",  eis: "Consumentenprijs is marktwaardig in segment €60–100", meet: "Berekende kostprijs maakt een verkoopprijs van €60–100 haalbaar met gebruikelijke retailmarge.", bron: "Henri (interview 1: €60–75 middelgroot, €80+ groot); Marktonderzoek" },
      { nr: "E.3", t: "Eis",  eis: "Product is direct verkoopbaar via bestaande retailkanalen", meet: "Voldoet aan basisvereisten Henri voor plaatsing: label, kwaliteitsafwerking, marktconforme prijs.", bron: "Henri (interview 1 en 2); Stakeholderanalyse" },
      { nr: "E.4", t: "Wens", eis: "Geen nieuwe productielijnen of grote investeringen nodig", meet: "Atelier gebruikt bestaande machines. Sit & Heat levert restmateriaal en hardware.", bron: "Sit & Heat; Stakeholderanalyse" },
      { nr: "E.5", t: "Wens", eis: "Omzetsnelheid is acceptabel voor zelfstandige retail", meet: "Kwalitatief toetsbaar via Henri: beoordeling of de tas binnen normale doorlooptijd verkoopt.", bron: "Henri (interview 1)" },
    ],
  },
  {
    cat: "Opleiding & Projectkaders", kleur: "var(--ink-soft)", code: "O",
    rows: [
      { nr: "O.1", t: "Eis",  eis: "Ontwerpproces is onderbouwd en gedocumenteerd", meet: "Verslaglegging beschikbaar via website, Miro bord en productiemappen. Elke keuze heeft expliciete redenering.", bron: "Opleiding (HAN IPO); Plan van Aanpak" },
      { nr: "O.2", t: "Eis",  eis: "Minimaal een fysiek en functioneel prototype wordt opgeleverd", meet: "Eindproduct is draagbaar, bevat alle functionele elementen en is getoetst aan dit PvE.", bron: "Opleiding; Sit & Heat" },
      { nr: "O.3", t: "Eis",  eis: "Alle ontwerpkeuzes zijn toetsbaar aan dit PvE via een toetsingstabel", meet: "Toetsingstabel aanwezig per prototype/iteratie en bij eindproduct.", bron: "Opleiding; Plan van Aanpak" },
      { nr: "O.4", t: "Wens", eis: "Gebruik van passende ontwerptools", meet: "Technische tekeningen en patroontekeningen aanwezig.", bron: "Opleiding" },
      { nr: "O.5", t: "Wens", eis: "Productiehandleiding (atelier manual) wordt opgeleverd", meet: "Stap voor stap snij en naaihandleiding inclusief mallen en (voorbeeld)prototype, afwerkingsinstructies en kleursorteringsgids.", bron: "Atelier; Opleiding" },
    ],
  },
];

/* ── PvE Toetsingstabel · status per eis/wens ──────────────────────────────
   Status: "voldaan" | "deels" | "gepland"
   bewijs: korte verwijzing naar waar het is aangetoond
   Gepland items worden pas getoetst na inlevering (2 juni), bij de
   eindzitting op 30 juni brengt de student het bewijsmateriaal mee.
──────────────────────────────────────────────────────────────────────────── */
window.PVE_TOETSING = [
  /* ── Duurzaamheid & Circulariteit ── */
  { nr: "D.1", status: "deels",    bewijs: "SDA is hoofdmateriaal in alle prototypes. Formeel gewicht per tas (0,72 kg) gedocumenteerd in Stap 27. 70% grens wordt getoetst bij definitief snijplan na v4." },
  { nr: "D.2", status: "voldaan",  bewijs: "Materiaalherkomst gedocumenteerd: materiaalinventarisatie, harde cijfers (Stap 27), CO₂-berekening. Communiceerbaar via label en website." },
  { nr: "D.3", status: "voldaan",  bewijs: "Hergebruikniveau onderbouwd met Potting et al. (2017) R strategie in Stap 04. Direct hergebruik zonder destructieve bewerking." },
  { nr: "D.4", status: "gepland",  bewijs: "Zero waste snijlogica wordt uitgewerkt bij definitief patroon voor Blueview (week 1–2 juni)." },
  { nr: "D.5", status: "gepland",  bewijs: "Patchwork systeem voor kleine lappen (<A4) wordt uitgewerkt in patroonontwikkeling na v4. Concept aangetoond in materiaalinventarisatie." },
  { nr: "D.6", status: "gepland",  bewijs: "Modulariteit/herstelbaarheid wordt getoetst bij demontageproef v4 (juni)." },

  /* ── Maakbaarheid & Productie ── */
  { nr: "M.1", status: "deels",    bewijs: "Blueview heeft na v3 bevestigd dat de tas maakbaar is met hun machines (Stap 24). Formele proefproductie volgt in juni." },
  { nr: "M.2", status: "deels",    bewijs: "Naaiproeven (Stap 11) tonen eenvoudige, herhaalbare stappen. Blueview bevestigt maakbaarheid (Stap 24). Formele validatie bij proefproductie." },
  { nr: "M.3", status: "deels",    bewijs: "Laagdikte bewust beperkt in alle ontwerpiteraties. Formele laagentelling bij definitief patroon." },
  { nr: "M.4", status: "gepland",  bewijs: "Productiemallen inclusief 1 cm naadwaarde worden aangeleverd bij productiehandleiding (juni)." },
  { nr: "M.5", status: "deels",    bewijs: "Afwerking geëvolueerd van V1 (rafels) via V2 (aflocktest) naar V3/V4. Finale inspectie bij eindprototype." },
  { nr: "M.6", status: "deels",    bewijs: "Hardware v4 ingekocht door ontwerper. Formele productielijst voor Blueview volgt in handleiding." },
  { nr: "M.7", status: "deels",    bewijs: "Patroondelen geschat op basis van V3/V4. Formele telling bij definitief patroonset." },
  { nr: "M.8", status: "voldaan",  bewijs: "Ontwerp getest met meerdere kleuren SDA uit de voorraad. Kleurvariatie is bewust onderdeel van het concept (Freitag model, Stap 05)." },
  { nr: "M.9", status: "gepland",  bewijs: "Te beoordelen bij proefproductie in sociaal atelier (juni)." },

  /* ── Functionaliteit & Gebruik ── */
  { nr: "F.1",  status: "deels",   bewijs: "Laptop 14\" past in V2+ (Stap 20). Formele meting binnenmaat volgt bij v4." },
  { nr: "F.2",  status: "deels",   bewijs: "Dagelijkse items getest in V2/V3 (Stap 20–21). Formele gebruikerstest volgt juni." },
  { nr: "F.3",  status: "voldaan", bewijs: "Crossbody als primaire draagvorm aanwezig en getest in alle prototypes (Stap 19–23)." },
  { nr: "F.4",  status: "voldaan", bewijs: "Verstelbaar riemysteem aanwezig V2+. Bereik getest, doorlopend verbeterd (Stap 20–23)." },
  { nr: "F.5",  status: "gepland", bewijs: "45°-kanteltest met meerdere testpersonen wordt uitgevoerd bij gebruikerstest (juni)." },
  { nr: "F.6",  status: "gepland", bewijs: "Sluitingstest (3 personen, max 5 sec) wordt uitgevoerd bij gebruikerstest (juni). Sluitingstype gekozen op basis van V3/V4." },
  { nr: "F.7",  status: "gepland", bewijs: "Ritstest (3 personen, 3× heen-terug) wordt uitgevoerd bij gebruikerstest (juni)." },
  { nr: "F.8",  status: "deels",   bewijs: "Geen scherpe randen in V3/V4. Formele veiligheidsinspectie bij eindprototype." },
  { nr: "F.9",  status: "deels",   bewijs: "Click-systeem voor slingback ingekocht voor V4 (Stap 23). Functionele test volgt bij v4 afronden." },
  { nr: "F.10", status: "deels",   bewijs: "Binnenvak aanwezig in V3 (Stap 21). Binnenhoes V4 nog in productie; definitief bij eindinspectie." },
  { nr: "F.11", status: "voldaan", bewijs: "SDA is inherent UV en weerbestendig (Materiaalonderzoek, Stap 05). Geen extra behandeling nodig." },
  { nr: "F.12", status: "gepland", bewijs: "Stabiliteitstest bij volledig gevulde v4 (juni)." },

  /* ── Esthetiek & Merkidentiteit ── */
  { nr: "A.1", status: "voldaan",  bewijs: "Merkvalidatie door Jorg (Stap 22): ontwerp past bij S&H waarden. Verantwoording in Stap 26." },
  { nr: "A.2", status: "deels",    bewijs: "Kwaliteitsafwerking geëvolueerd V1→V4. Finale inspectie bij eindprototype (50 cm, daglicht)." },
  { nr: "A.3", status: "gepland",  bewijs: "Formele genderneutraliteitstest (2 personen) bij gebruikerstest juni." },
  { nr: "A.4", status: "gepland",  bewijs: "Label ontwerp volgt in brandingtaak (juni, week 1–2)." },
  { nr: "A.5", status: "deels",    bewijs: "V4 buitenste in een kleur SDA. Kleurconfirmatie na Blueview proefproductie." },
  { nr: "A.6", status: "deels",    bewijs: "Hardware toonvast gekozen op basis van Henri interview 2 (Stap 22). Visuele check bij eindproduct." },
  { nr: "A.7", status: "voldaan",  bewijs: "Kleurvariatie per exemplaar is bewust onderdeel van het concept. Freitag als validatie (Stap 05). Geen twee tassen hoeven identiek te zijn." },

  /* ── Economie & Haalbaarheid ── */
  { nr: "E.1", status: "voldaan",  bewijs: "Kostprijsopbouw gedocumenteerd in Stap 27: hardware €6–8, materiaal €0, arbeid €0 → kostprijs ~€7/tas." },
  { nr: "E.2", status: "voldaan",  bewijs: "Retail €70, inkoop €28 (Henri: marge 2,5×). Past in €60–100 segment bevestigd door Henri (Stap 22)." },
  { nr: "E.3", status: "deels",    bewijs: "Henri positief na v3 (Stap 22): 'ik denk dat we dit kunnen verkopen.' Formeel inkoopgesprek volgt na eindprototype." },
  { nr: "E.4", status: "voldaan",  bewijs: "Geen nieuwe machines: Blueview gebruikt bestaande naai en aflock machines (Stap 24). S&H levert restmateriaal en hardware." },
  { nr: "E.5", status: "gepland",  bewijs: "Omzetsnelheid te valideren via Henri na proefexemplaren (juni/juli)." },

  /* ── Opleiding & Projectkaders ── */
  { nr: "O.1", status: "voldaan",  bewijs: "Volledig gedocumenteerd: website (27 stappen), Miro procesboard, PDF bijlagen (PvA, onderzoeksrapporten, risicoanalyse)." },
  { nr: "O.2", status: "deels",    bewijs: "V4 buitenste + verstelsysteem gereed. Binnenhoes wordt afgemaakt (week 1 juni). Eindbeoordeling bij complete v4." },
  { nr: "O.3", status: "voldaan",  bewijs: "Deze toetsingstabel aanwezig als onderdeel van Stap 25. Tevens per prototype gedocumenteerd in Stap 19–23." },
  { nr: "O.4", status: "gepland",  bewijs: "Productiemallen worden aangeleverd bij productiehandleiding voor Blueview (week 1–2 juni)." },
  { nr: "O.5", status: "gepland",  bewijs: "Productiehandleiding (atelier manual) met mallen, knipvolgorde en afwerkingsinstructies wordt opgeleverd voor eindzitting (30 juni)." },
];
