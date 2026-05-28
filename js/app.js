/* App — 19-step interactief procesverslag · Sit & Heat afstuderen 2026 */

const TWEAK_DEFAULTS = {
  "showAnnotations": false,
  "showFrameLabels": false,
  "showWheel": true
};

const STEP_LABELS = [
  "",                   // 0 - intro
  "Het beginpunt",      // 1
  "Vraag→opdracht",     // 2
  "Plan van Aanpak",    // 3
  "Methode",            // 4
  "Onderzoek",          // 5
  "Inventarisatie",     // 6
  "Voorlopig PvE",      // 7
  "Brainstorm",         // 8
  "Richtingen",         // 9
  "Schetsen",           // 10
  "Design by doing",    // 11
  "De keuze",           // 12
  "Interview bij Henri",// 13
  "Spanningsveld",      // 14
  "Doelgroep",          // 15
  "Vormonderzoek",      // 16
  "Schetsen",           // 17
  "Vormtest",           // 18
  "Prototype 1",        // 19
  "Prototype 2",        // 20
  "Prototype 3",        // 21
  "Stakeholders",       // 22
  "Prototype 4",        // 23
  "Sociaal Atelier",    // 24
  "Definitief PvE",     // 25
  "Verantwoording",     // 26
  "Cijfers",            // 27
];

const App = () => {
  const [act, setAct] = React.useState(1);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [stepFloat, setStepFloat] = React.useState(0);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const progressRef = React.useRef(null);

  /* ── scroll tracking ── */
  React.useEffect(() => {
    const computeAct = () => {
      const act2Start = document.querySelector('[data-screen-label="02 Hoe is het gemaakt"]');
      if (!act2Start) return 1;
      return act2Start.getBoundingClientRect().top < window.innerHeight * 0.5 ? 2 : 1;
    };

    const computeStep = () => {
      const sections = Array.from(document.querySelectorAll('[data-step-num]'))
        .map(s => ({ el: s, n: parseInt(s.getAttribute('data-step-num'), 10) }))
        .sort((a, b) => a.n - b.n);
      if (!sections.length) return { intStep: 0, floatStep: 0 };

      const focus = window.innerHeight * 0.15;
      let lastPassed = null;
      let nextUpcoming = null;

      for (const s of sections) {
        const r = s.el.getBoundingClientRect();
        if (r.top <= focus) lastPassed = { ...s, top: r.top, height: r.height };
        else { nextUpcoming = { ...s, top: r.top, height: r.height }; break; }
      }

      if (!lastPassed) return { intStep: 0, floatStep: 0 };
      if (!nextUpcoming) return { intStep: lastPassed.n, floatStep: lastPassed.n };

      const denom = nextUpcoming.top - lastPassed.top;
      let frac = denom !== 0 ? (focus - lastPassed.top) / denom : 0;
      frac = Math.max(0, Math.min(1, frac));
      return { intStep: lastPassed.n, floatStep: lastPassed.n + frac };
    };

    const onScroll = () => {
      setAct(computeAct());
      const { intStep, floatStep } = computeStep();
      setCurrentStep(intStep);
      setStepFloat(floatStep);

      /* scroll progress bar */
      if (progressRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressRef.current.style.width = pct + '%';
      }
    };

    onScroll();
    const t1 = setTimeout(onScroll, 60);
    const t2 = setTimeout(onScroll, 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);

    return () => {
      clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, []);

  /* ── tweaks → CSS ── */
  React.useEffect(() => {
    let style = document.getElementById('tweak-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'tweak-style';
      document.head.appendChild(style);
    }
    style.textContent = `
      .anno        { display: ${tweaks.showAnnotations ? 'inline-flex' : 'none'} !important; }
      .frame-label { display: ${tweaks.showFrameLabels ? 'flex'        : 'none'} !important; }
      .wheel       { display: ${tweaks.showWheel       ? 'block'       : 'none'} !important; }
    `;
  }, [tweaks.showAnnotations, tweaks.showFrameLabels, tweaks.showWheel]);

  /* ── Lenis smooth scroll ── */
  React.useEffect(() => {
    if (typeof Lenis === 'undefined') return;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* ── Hash-navigatie: index.html#step-X scrollt naar processtap ── */
  React.useEffect(() => {
    const match = window.location.hash.match(/^#step-(\d+)$/);
    if (!match) return;
    const num = match[1];
    const tryScroll = () => {
      const el = document.querySelector(`[data-step-num="${num}"]`);
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return true; }
      return false;
    };
    if (!tryScroll()) {
      setTimeout(tryScroll, 300);
      setTimeout(tryScroll, 800);
    }
  }, []);

  /* ── reveal-stagger + directional reveals: globale observer ── */
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.06 });
    const scan = () => {
      document.querySelectorAll('.reveal-stagger:not(.in), .reveal-left:not(.in), .reveal-right:not(.in), .reveal-scale:not(.in)').forEach(el => io.observe(el));
    };
    scan();
    const t1 = setTimeout(scan, 200);
    const t2 = setTimeout(scan, 600);
    const t3 = setTimeout(scan, 1400);
    return () => { io.disconnect(); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <>
      <Nav chapter={act} total={2} />

      <FrameScrollLanding />

      {tweaks.showWheel && act === 2 && (
        <ProgressWheel
          stepFloat={stepFloat}
          currentStepNum={currentStep}
          total={28}
          label={STEP_LABELS[currentStep] || ""}
        />
      )}

      <div className="scroll-progress" ref={progressRef} />

      <div>
        <div data-step-num="0"><Act2Intro /></div>

        <div data-step-num="1"><Step01_OpenVraag /></div>
        <div data-step-num="2"><Step02_VraagNaarOpdracht /></div>
        <div data-step-num="3"><Step03_PvA /></div>
        <div data-step-num="4" className="layout-reversed"><Step04_MethodeCirculariteit /></div>
        <div data-step-num="5"><ResearchSection /></div>
        <div data-step-num="6"><MaterialOnderzoekDeep /></div>
        <div data-step-num="7"><Step06_VoorlopigPvE /></div>
        <div data-step-num="8"><BrainstormSection /></div>
        <div data-step-num="9"><Step09_StructurerenIdeeen /></div>
        <div data-step-num="10"><Step10_SchetsVerkenning /></div>
        <div data-step-num="11"><Step11_NaaienExploratie /></div>
        <div data-step-num="12"><Step12_KeuzeTassen /></div>
        <div data-step-num="13"><Step13_RetailHenri /></div>
        <div data-step-num="14"><Step14_Spanningsveld /></div>
        <div data-step-num="15"><Step15_Doelgroep /></div>
        <BagVideoIntro />
        <div data-step-num="16"><Step16_Vormonderzoek /></div>
        <div data-step-num="17"><Step17_Schetsen /></div>
        <div data-step-num="18" className="layout-reversed"><Step18_Vormtest /></div>
        <div data-step-num="19"><Step19_Prototype1 /></div>
        <div data-step-num="20" className="layout-reversed"><Step20_Prototype2 /></div>
        <div data-step-num="21"><Step21_Prototype3 /></div>
        <div data-step-num="22"><Step22_Stakeholders /></div>
        <div data-step-num="23"><Step23_Prototype4 /></div>
        <div data-step-num="24" className="layout-reversed"><Step24_SociaalAtelier /></div>
        <div data-step-num="25"><Step25_DefinitiefPvE /></div>
        <div data-step-num="26"><Step18_Verantwoording /></div>
        <div data-step-num="27"><Step19_HardeCijfers /></div>
      </div>

      <Outro />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Wireframe">
          <TweakToggle label="Frame-labels" value={tweaks.showFrameLabels}
            onChange={(v) => setTweak('showFrameLabels', v)} />
          <TweakToggle label="Annotaties" value={tweaks.showAnnotations}
            onChange={(v) => setTweak('showAnnotations', v)} />
          <TweakToggle label="Voortgangs-wiel" value={tweaks.showWheel}
            onChange={(v) => setTweak('showWheel', v)} />
        </TweakSection>
        <TweakSection title="Foto's en video's">
          <div style={{fontFamily:"var(--mono)", fontSize:11, lineHeight:1.6, color:"#6B6B6B"}}>
            Prototype 4 foto's worden nog toegevoegd zodra ze gemaakt zijn.
            Het slotbeeld in de outro volgt ook nog.
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
