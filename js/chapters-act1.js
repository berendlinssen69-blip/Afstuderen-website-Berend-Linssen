/* ACT 1 — landing */

const Nav = ({ chapter, total }) => (
  <nav className="nav">
    <div className="logo">SIT &amp; HEAT AFSTUDEER VERSLAG</div>
    <div className="menu">
      <a className={chapter <= 1 ? "active" : ""} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</a>
      <a href="de-tas.html">De tas</a>
      <ProcesDropdown isMainPage={true} />
      <OnderzoekDropdown isMainPage={true} />
    </div>
  </nav>
);

/* Easing helpers */
const easeIO = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2;
const easeOutCubic = (t) => 1 - Math.pow(1-t, 3);
const easeOutBack = (t) => { const c1=1.70158, c3=c1+1; return 1 + c3 * Math.pow(t-1, 3) + c1 * Math.pow(t-1, 2); };

/* =====================================================
   ACT 1 — LANDING
   0.00–0.18  TITLE — vastgehouden
   0.18–0.34  Title fades, materials sliden in
   0.34–0.55  Materials → sketch
   0.55–0.74  Sketch → 3D render
   0.74–0.95  3D draait + sales info
   0.95–1.00  uitfade
===================================================== */
const ActOne = () => {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);

  const pTitle    = 1 - easeIO(slice(p, 0.14, 0.30));
  const pMat      = easeIO(slice(p, 0.20, 0.40)) * (1 - easeIO(slice(p, 0.42, 0.58)));
  const pSketch   = easeOutCubic(slice(p, 0.40, 0.60)) * (1 - easeIO(slice(p, 0.60, 0.74)));
  const p3d       = easeOutBack(slice(p, 0.58, 0.78));
  const pSales    = easeOutCubic(slice(p, 0.74, 0.92));
  const pSuck     = easeIO(slice(p, 0.95, 1.00));

  const rotation = p > 0.55 ? (p - 0.55) * 540 : 0;
  const suckScale = 1 - pSuck * 0.7;
  const suckOpacity = 1 - pSuck;
  const draw = easeOutCubic(slice(p, 0.42, 0.62));

  const phase =
    p < 0.20 ? 0 :
    p < 0.40 ? 1 :
    p < 0.60 ? 2 :
    p < 0.78 ? 3 : 4;

  return (
    <section ref={ref} className="act1" data-screen-label="01 Landing">
      <FrameLabel num="ACT 1" name="Scroll om te beginnen" full />
      <div className="stage">

        <div className="bg-rotate" style={{ opacity: 0.5 * Math.min(p3d,1) + 0.4 * pSales }}>
          <BgRotate rotation={rotation * 0.4} alpha={clamp(p3d + pSales * 0.4)} />
        </div>

        <div className="title-overlay" style={{
          opacity: pTitle * suckOpacity,
          transform: `translateY(${(1-pTitle) * -40}px) scale(${suckScale})`,
          filter: `blur(${(1-pTitle) * 6}px)`
        }}>
          <div className="group">
            <span className="eyebrow">Afstudeerproject · Sit &amp; Heat · 2026 · Berend Linssen</span>
            <h1>
              Van reststof<br/>
              <em style={{fontStyle:"italic"}}>tot tas</em>
            </h1>
            <p className="sub">
              Een circulaire ontwerp uit het restmateriaal van verwarmde
              horeca kussens, gemaakt in een sociaal atelier.
            </p>
          </div>
          <div className="scroll-cue">scroll langzaam om te beginnen</div>
        </div>

        <div className="art" style={{
          transform: `scale(${suckScale})`,
          opacity: suckOpacity
        }}>
          <div className="art-frame">
            <div style={{
              opacity: Math.min(pMat,1),
              transform: `translateY(${(1-Math.min(pMat*1.4,1)) * 80}px) rotate(${(1-Math.min(pMat,1)) * -3}deg)`
            }}>
              <ArtMaterials alpha={1} />
            </div>
            <div style={{
              opacity: Math.min(pSketch,1),
              transform: `scale(${0.86 + Math.min(pSketch,1) * 0.14})`
            }}>
              <ArtSketch alpha={1} draw={draw} />
            </div>
            <div style={{
              opacity: Math.min(p3d + pSales * 0.6, 1),
              transform: `scale(${0.88 + Math.min(p3d + pSales * 0.4, 1) * 0.16})`
            }}>
              <Art3D alpha={1} rotation={rotation} />
            </div>
          </div>
        </div>

        <div className="info-left" style={{
          opacity: clamp(Math.min(pMat,1) + Math.min(pSketch,1) + p3d * 0.5) * suckOpacity,
          transform: `translateY(calc(-50% + ${(1 - clamp(Math.min(pMat,1) + Math.min(pSketch,1))) * 30}px))`
        }}>
          {phase === 1 && (
            <>
              <WfTag>Stap 1 · Het materiaal</WfTag>
              <h3 className="wf-sub">Reststof.<br/>Hoogwaardig. Variërend.</h3>
              <p className="wf-body">
                78 kilo solution dyed acrylic uit verwarmde horeca kussens.
                UV-bestendig, weerbestendig, slijtvast, een premiummateriaal
                dat anders de verbranding in zou gaan.
              </p>
            </>
          )}
          {phase === 2 && (
            <>
              <WfTag>Stap 2 · De schets</WfTag>
              <h3 className="wf-sub">Een tijdloze vorm.</h3>
              <p className="wf-body">
                handsfree gedragen, tolerant voor variatie in
                materiaal, eenvoudig te produceren in een sociaal atelier.
              </p>
            </>
          )}
          {phase === 3 && (
            <>
              <WfTag>Stap 3 · De tas</WfTag>
              <h3 className="wf-sub">Eén beweging.<br/>Twee draagwijzen.</h3>
              <p className="wf-body">
                Crossbody voor op de fiets. Slingback voor op het terras.
                Schakelbaar zonder gereedschap.
              </p>
            </>
          )}
          {phase === 4 && (
            <>
              <WfTag>Stap 4 · Het verhaal</WfTag>
              <h3 className="wf-sub">Fysiek en sociaal duurzaam.</h3>
              <p className="wf-body">
                100% restmateriaal. 0% kwaliteitsverlies.               
              </p>
            </>
          )}
        </div>

        <div className="info-col" style={{
          opacity: pSales * suckOpacity,
          transform: `translate(${(1 - pSales) * 60}px, -50%)`
        }}>
          <WfTag>De tas</WfTag>
          <h2 className="wf-title" style={{maxWidth:"14ch"}}>Onderweg, thuis en op het terras.</h2>
          <div className="feat">
            <div className="n">01</div>
            <div>
              <div className="t">Crossbody ⇄ Slingback</div>
              <div className="d">Een handeling. Geen losse onderdelen.</div>
            </div>
          </div>
          <div className="feat">
            <div className="n">02</div>
            <div>
              <div className="t">14" laptop · telefoon · sleutels</div>
              <div className="d">Dagelijks gebruik, hele dag mee.</div>
            </div>
          </div>
          <div className="feat">
            <div className="n">03</div>
            <div>
              <div className="t">100% S&amp;H restmateriaal</div>
              <div className="d">Direct hergebruik, geen kwaliteitsverlies.</div>
            </div>
          </div>
          <div className="feat">
            <div className="n">04</div>
            <div>
              <div className="t">Sociaal atelier</div>
              <div className="d">Werk voor mensen met een afstand tot de arbeidsmarkt.</div>
            </div>
          </div>
        </div>

        <div className="phase-ind">
          {[0,1,2,3,4].map(i => (
            <span key={i} className={`pip ${i === phase ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ACT 2 INTRO */
const Act2Intro = () => {
  const ref = useReveal();
  return (
    <section className="act2-hero" ref={ref} data-screen-label="02 Hoe is het gemaakt">
      <FrameLabel num="ACT 2" name="Hoe is het gemaakt? het volledige proces" />
      <div className="act2-hero-pin">
        <h2 className="reveal">
          Hoe is het<br/><em style={{fontStyle:"italic", color:"var(--thread)"}}>gemaakt?</em>
        </h2>
        <div className="sub">
          van een open vraag naar een tas die past bij Sit &amp; Heat.
          27 stappen, alle keuzemomenten zichtbaar.
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  Nav, ActOne, Act2Intro, easeIO, easeOutCubic, easeOutBack
});
