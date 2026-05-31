/* BRAINSTORM — 3 aparte secties met uitleg + resultaat
   Elke techniek heeft:
   1. Een step-pin tekstsectie met uitleg en verantwoording
   2. Een resultaatsectie met "Dit is er uit gekomen:" + visueel
*/

const CRAZY_BASE = "foto%27s%20en%20animaties%20website/schetsen/crazy%208/";
const CRAZY_IMAGES = [
  "image%20(3).png","image%20(4).png","image%20(5).png","image%20(6).png",
  "image%20(7).png","image%20(8).png","image%20(9).png","image%20(10).png"
];

const BW_BASE = "foto%27s%20en%20animaties%20website/schetsen/446%20brainwriting/";
const BW_IMAGES = [
  "image%20(12).png","image%20(13).png","image%20(14).png",
  "image%20(15).png","image%20(16).png","image%20(17).png",
  "image%20(18).png","image%20(19).png","image%20(20).png"
];

const BRAIN_PHOTO_BASE = "foto%27s%20en%20animaties%20website/Brainstroming/";

/* ─── FASE 1: CRAZY 8s ──────────────────────────────────────────────────── */

const Crazy8sIntro = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="08a Brainstorm · Crazy 8s">
      <FrameLabel num="08" name="Brainstorm — Fase 1 · Crazy 8s" />
      <div className="step-bg" />
      <div className="step-pin">
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet"/>STAP 08 · BRAINSTORM · FASE 1</div>
          <h2 className="wf-title">Crazy 8s</h2>
          <p className="wf-body lg">
            Twee groepen deden elk 8 snelle schetsen in 8 minuten. Groep een: Jeroen (co-founder/sales), Femke (stagiaire facilitair) en Thijs (afstudeerstagiair branding, oud-IPO'er). Groep twee: Jorg (CEO), Niels (head of sales), Milan (afstudeerstagiair sales) en Hugo (oud-stagiair, IPO 3e jaars).
          </p>
          <p className="wf-body">
            <strong>Waarom Crazy 8s?</strong> De tijdsdruk dwingt divergent denken af. Je hebt geen tijd om aan jezelf te twijfelen of te wachten op het perfecte idee. Je schetst wat er in je opkomt. Dat maakt het laagdrempelig als opwarming: schetskwaliteit doet er niet toe, het gaat om kwantiteit en variatie.
          </p>
          <p className="wf-body">
            <strong>Kritisch punt:</strong> Individuele ideekwaliteit is bewust laag bij deze methode, dat is het hele punt. Het risico is dat deelnemers toch in hun eigen vertrouwde denkrichting blijven. Dat is precies waarom Crazy 8s als <em>opwarming</em> is ingezet, en niet als enige generatietechniek. De 446 Brainwriting die erop volgde lost dit op door voort te bouwen op andermans ideeën.
          </p>
        </div>
        <div className="step-stage reveal-right">
          <img
            src={BRAIN_PHOTO_BASE + "20260310_143853%20(1).jpg"}
            alt="Crazy 8s brainstormsessie in uitvoering"
            style={{width:"100%", aspectRatio:"4/5", objectFit:"cover", display:"block"}}
          />
        </div>
      </div>
    </section>
  );
};

const Crazy8sResult = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="08a Crazy 8s resultaat">
      <div className="step-bg" />
      <div className="step-pin" style={{gridTemplateColumns:"1fr", height:"auto", minHeight:"auto", position:"relative", top:"auto", padding:"8vh 6vw"}}>
        <div className="step-content reveal-stagger" style={{maxWidth:"100%"}}>
          <WfTag>Dit is er uit gekomen</WfTag>
          <p className="wf-body" style={{marginTop:8, marginBottom:32, color:"var(--ink-soft)"}}>
            64 schetsen in totaal · 8 per persoon · 2 groepen · 1 dag
          </p>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(4, 1fr)",
            gap:8,
            width:"100%"
          }}>
            {CRAZY_IMAGES.map((src, i) => (
              <img key={i} src={CRAZY_BASE + src}
                alt={`Crazy 8 schets ${i+1}`}
                style={{width:"100%", height:"auto", display:"block",
                  border:"1px solid var(--line)"}} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── FASE 2: 446 BRAINWRITING ──────────────────────────────────────────── */

const BrainwritingIntro = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="08b Brainstorm · 446 Brainwriting">
      <FrameLabel num="08" name="Brainstorm — Fase 2 · 446 Brainwriting" />
      <div className="step-bg" />
      <div className="step-pin">
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet"/>STAP 08 · BRAINSTORM · FASE 2</div>
          <h2 className="wf-title">446 Brainwriting</h2>
          <p className="wf-body lg">
            Zes ideeën per ronde, zes rondes. Iedereen schrijft ideeën op, geeft het blad door en bouwt voort op de ideeën van de vorige persoon.
          </p>
          <p className="wf-body">
            <strong>Waarom 446 Brainwriting?</strong> Dit voorkomt de klassieke groepsdynamiek problemen die bij verbaal brainstormen optreden: anchoring (het eerste idee domineert), de luidste stem wint, en niet iedereen durft iets te zeggen. De doorgeefstructuur dwingt iedereen gelijkwaardig bij te dragen en forceert het combineren en doorontwikkelen van andermans ideeën. Ook creeren met de Crazy 8's en de brainwriting samen ongeveer 144 verschillende ideeën. Dit is bewust gedaan zodat we zo veel mogelijk richtingen bekijken die kunnen met het materiaal. 
          </p>
          <p className="wf-body">
            <strong>Kritisch punt:</strong> Het doorgeefmechanisme brengt een risico met zich mee: als iedereen verder bouwt op dezelfde ideeën, ontstaat vanzelf een gerichte richting. Om dat te voorkomen zijn twee verschillende groepen op twee verschillende dagen ingezet. Daardoor leverden de Crazy 8’s van dag een een ander startpunt op dan die van dag twee.
          </p>
        </div>
        <div className="step-stage reveal-right">
          <img
            src={BRAIN_PHOTO_BASE + "20260310_151044%20(1).jpg"}
            alt="446 Brainwriting sessie in uitvoering"
            style={{width:"100%", aspectRatio:"4/5", objectFit:"cover", display:"block"}}
          />
        </div>
      </div>
    </section>
  );
};

const BrainwritingResult = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="08b Brainwriting resultaat">
      <div className="step-bg" />
      <div className="step-pin" style={{gridTemplateColumns:"1fr", height:"auto", minHeight:"auto", position:"relative", top:"auto", padding:"8vh 6vw"}}>
        <div className="step-content reveal-stagger" style={{maxWidth:"100%"}}>
          <WfTag>Dit is er uit gekomen</WfTag>
          <p className="wf-body" style={{marginTop:8, marginBottom:32, color:"var(--ink-soft)"}}>
            144 ideeën in totaal · 4 deelnemers · 6 rondes · 6 ideeën per ronde
          </p>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(3, 1fr)",
            gap:8,
            width:"100%"
          }}>
            {BW_IMAGES.map((src, i) => (
              <img key={i} src={BW_BASE + src}
                alt={`446 Brainwriting vel ${i+1}`}
                style={{width:"100%", height:"auto", display:"block",
                  border:"1px solid var(--line)"}} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── FASE 3: DISNEY MODEL ──────────────────────────────────────────────── */

const DisneyIntro = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="08c Brainstorm · Disney Model">
      <FrameLabel num="08" name="Brainstorm — Fase 3 · Disney Model" />
      <div className="step-bg" />
      <div className="step-pin">
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet"/>STAP 08 · BRAINSTORM · FASE 3</div>
          <h2 className="wf-title">Disney Model</h2>
          <p className="wf-body lg">
            Alle ideeën uit de Crazy 8s en 446 Brainwriting zijn samengevoegd en daarna systematisch gefilterd aan de hand van het disney model, die haalt de ideeën door 3 fazes heen: Dreamer, Realist en Critic.
          </p>
          <p className="wf-body">
            <strong>Waarom het Disney Model?</strong> De twee generatiefasen leverden ruim 140 ideeën op. Zonder een gestructureerde selectiemethode zou de keuze willekeurig worden of domineren door persoonlijke voorkeur. Het Disney Model structureert de selectie zo dat creatieve ideeën niet te vroeg worden afgeschoten: de Dreamer fase accepteert alles, de Realist fase toetst haalbaarheid, de Critic fase evalueert kritisch op waarde en fit.
          </p>
          <p className="wf-body">
            <strong>Kritisch punt:</strong> Het beoordelen van ideeën als “haalbaar” of “waardevol” is altijd deels subjectief en hangt af van de kennis en het perspectief van de deelnemers op dat moment. Dat geldt eigenlijk voor elke vorm van selectie. De kracht van deze aanpak zit juist in het bewust scheiden van drie denkrollen. Als je die door elkaar gebruikt, ontstaat al snel de neiging om in de Dreamer-fase al te gaan oordelen. Door de methode pas toe te passen na twee gestructureerde generatiefases, begon het selectieproces vanuit een breed en divers palet aan ideeën.
          </p>
        </div>
        <div className="step-stage reveal-right">
          <img
            src={BRAIN_PHOTO_BASE + "Screenshot%202026-05-05%20102610.png"}
            alt="Overzicht van alle ideeën in het Disney Model"
            style={{width:"100%", aspectRatio:"4/3", objectFit:"cover", display:"block"}}
          />
        </div>
      </div>
    </section>
  );
};

/* Disney Model wrapper — eigen scroll container voor de interactieve post-it wand */
const DisneyModelWrapper = () => {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  return (
    <section ref={ref} className="brainstorm" data-screen-label="08c Disney Model interactief">
      <div className="pin" style={{background:"var(--bg)", color:"var(--ink)"}}>
        <div style={{position:"absolute", top:"4vh", left:"6vw", zIndex:20, pointerEvents:"none"}}>
          <WfTag>Dit is er uit gekomen</WfTag>
        </div>
        <DisneyModelSection scrollProgress={p} />
      </div>
    </section>
  );
};

/* ─── Brainstorm intro ──────────────────────────────────────────────────── */
const BrainstormIntroSection = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="08 Brainstorm · Intro">
      <FrameLabel num="08" name="Brainstorm" />
      <div className="step-bg" />
      <div className="step-pin">
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet"/>STAP 08 · BRAINSTORM</div>
          <h2 className="wf-title">Van probleem<br/>naar ideeën.</h2>
          <p className="wf-body lg">
            Op dit punt in het project was het probleem duidelijk gedefinieerd, maar was er nog geen concrete oplossing of richting. Daarom was het belangrijk om in korte tijd zo veel mogelijk verschillende ideeën te verzamelen. Brainstormen was hiervoor de meest effectieve aanpak.
          </p>
          <p className="wf-body">
            De sessie begon niet met "ga maar schetsen". Voorafgaand aan het brainstormen werd een uitgebreide briefing gegeven via een presentatie (<a href="onderzoek.html?open=brainstorm" style={{color:"var(--green)", textDecoration:"underline"}}>zie bijlage</a>). Daarin werden het probleem, de beschikbare materialen, de concurrentie analyse, relevante trends, inspiratie uit de markt (o.a. Freitag als referentie) en de ontwerpcriteria (moet/mag niet/wens) behandeld. Pas na die gezamenlijke context werd de centrale vraag gesteld:
          </p>
          <div style={{border:"1px solid var(--line)", padding:20, background:"var(--paper)", margin:"8px 0 0"}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--thread)", marginBottom:8}}>Centrale vraag brainstorm</div>
            <p style={{fontSize:"clamp(15px, 1.8vw, 20px)", fontWeight:600, lineHeight:1.4, margin:0}}>
              "Welk product kunnen wij maken van het restmateriaal van Sit &amp; Heat dat duurzaam, maakbaar en betekenisvol is?"
            </p>
          </div>
        </div>

        <div className="step-stage" style={{flexDirection:"column", justifyContent:"center", alignItems:"stretch", gap:12}}>
          {/* Groep 1 */}
          <div style={{border:"1px solid var(--line)", padding:"14px 16px", background:"var(--paper)"}}>
            <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--thread)", marginBottom:10}}>Groep 1 · dag 1</div>
            {[
              ["Jeroen","Co-founder & sales, marktkennis en netwerk"],
              ["Femke","Stagiaire facilitair MBO, diversiteit in perspectief"],
              ["Thijs","Afstudeerstagiair Branding (oud IPO’er), ontwerpervaring"],
            ].map(([name, desc], i) => (
              <div key={i} style={{display:"grid", gridTemplateColumns:"64px 1fr", gap:8, padding:"5px 0", borderBottom:"1px solid var(--line-soft)", alignItems:"baseline"}}>
                <span style={{fontFamily:"var(--mono)", fontSize:11, fontWeight:600, color:"var(--ink)"}}>{name}</span>
                <span style={{fontSize:11, lineHeight:1.5, color:"var(--ink-soft)"}}>{desc}</span>
              </div>
            ))}
          </div>

          {/* Groep 2 */}
          <div style={{border:"1px solid var(--line)", padding:"14px 16px", background:"var(--paper)"}}>
            <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--thread)", marginBottom:10}}>Groep 2 · dag 2</div>
            {[
              ["Jorg","CEO & oud IPO’er, strategie en marktrichting"],
              ["Niels","Head of Sales, klantperspectief en commercie"],
              ["Milan","Afstudeerstagiair Sales, frisse commerciële blik"],
              ["Hugo","Oud-stagiair, 3e-jaars IPO HAN, ontwerpdenken"],
            ].map(([name, desc], i) => (
              <div key={i} style={{display:"grid", gridTemplateColumns:"64px 1fr", gap:8, padding:"5px 0", borderBottom:"1px solid var(--line-soft)", alignItems:"baseline"}}>
                <span style={{fontFamily:"var(--mono)", fontSize:11, fontWeight:600, color:"var(--ink)"}}>{name}</span>
                <span style={{fontSize:11, lineHeight:1.5, color:"var(--ink-soft)"}}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── EXPORT — BrainstormSection (naam behouden zodat app.js niet hoeft te veranderen) */
const BrainstormSection = () => (
  <>
    <BrainstormIntroSection />
    <Crazy8sIntro />
    <Crazy8sResult />
    <BrainwritingIntro />
    <BrainwritingResult />
    <DisneyIntro />
    <DisneyModelWrapper />
  </>
);

Object.assign(window, { BrainstormSection });
