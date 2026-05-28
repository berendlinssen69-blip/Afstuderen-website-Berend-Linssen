/* FRAME SCROLL LANDING
   240 frames scroll-driven, cubesat-style annotations per phase.

   Phase 1 (frames  1– 45): bag closed, 3/4 view      → fabric + strap
   Phase 2 (frames 38– 90): bag rotating open          → zipper + carry-mode
   Phase 3 (frames 82–148): items emerging from bag    → contents
   Phase 4 (frames 140–240): full contents explosion   → material story
*/

const TOTAL_FRAMES = 152;

/* URL-encode spaces and apostrophes in folder names */
const FRAME_BASE =
  "foto%27s%20en%20animaties%20website/scroll%20animation%20landing%20page/";

const frameSrc = (n) =>
  `${FRAME_BASE}${String(n).padStart(4, "0")}.jpg`;

/* ── Annotation definitions ─────────────────────────────────────────────────
   dot    : { x, y } as % of image (1280×720 native)
   label  : { x, y } anchor point in %
   side   : 'right' → label.x is LEFT  edge of label box (label appears to the right of dot)
            'left'  → label.x is RIGHT edge of label box (label appears to the left of dot)
   from/to: frame numbers (1-based, inclusive)
────────────────────────────────────────────────────────────────────────────── */
const ANNOTATIONS = [
  /* ── Phase 1: bag closed ── */
  {
    from: 1, to: 48,
    dot:   { x: 38, y: 58 },   // bag body, left fabric panel
    label: { x: 27, y: 54 },
    side: "left",
    title: "Solution-dyed acrylic",
    body:  "UV-bestendig · weerbestendig · slijtvast\nRestmateriaal van S&H horeca kussens",
  },
  {
    from: 4, to: 50,
    dot:   { x: 63, y: 28 },   // upper strap buckle, right side
    label: { x: 68, y: 16 },
    side: "right",
    title: "Verstelbare schouderband",
    body:  "Slingback voor op de fiets.\nCrossbody voor op het terras.",
  },

  /* ── Phase 2: bag opening ── */
  {
    from: 38, to: 90,
    dot:   { x: 54, y: 43 },   // zipper line across the top
    label: { x: 60, y: 34 },
    side: "right",
    title: "Rits over de volle breedte",
    body:  "Een vloeiende opening.\nVolle toegang tot de inhoud.",
  },
  {
    from: 45, to: 92,
    dot:   { x: 37, y: 60 },   // left strap adjuster/slide
    label: { x: 26, y: 57 },
    side: "left",
    title: "Crossbody ⇄ Slingback",
    body:  "Simpele handeling geen losse onderdelen.\nSchakelbaar zonder gereedschap.",
  },

  /* ── Phase 3: contents emerging ── */
  {
    from: 82, to: 148,
    dot:   { x: 64, y: 27 },   // laptop lid appearing on right
    label: { x: 70, y: 12 },
    side: "right",
    title: "Laptop 14\" · telefoon · sleutels",
    body:  "Alles voor een volle dag op pad.\nBeschermd door gevoerde binnenkant.",
  },
  {
    from: 90, to: 150,
    dot:   { x: 49, y: 30 },   // wallet + passport, left side of opening
    label: { x: 28, y: 22 },
    side: "left",
    title: "Portemonnee · paspoort",
    body:  "Alledaagse spullen, netjes geordend.\nGenoeg ruimte voor de hele dag.",
  },

  /* ── Phase 4: full explosion ── */
  {
    from: 110, to: 152,
    dot:   { x: 52, y: 68 },   // main bag body
    label: { x: 28, y: 65 },
    side: "left",
    title: "Gemaakt van restmateriaal",
    body:  "Geen kwaliteitsverlies.\nDirect hergebruik, 0% nieuwe stof gebruikt.",
  },
];

/* Smooth opacity fade in/out at annotation edges */
const annOpacity = (ann, frameIdx) => {
  const f = frameIdx + 1; // 1-based
  if (f < ann.from || f > ann.to) return 0;
  const FADE = 12;
  return Math.min(
    Math.min(1, (f - ann.from) / FADE),
    Math.min(1, (ann.to - f)   / FADE)
  );
};

/* ── FrameScrollLanding component ─────────────────────────────────────────── */
const FrameScrollLanding = () => {
  const containerRef  = React.useRef(null);
  const canvasRef     = React.useRef(null);
  const framesRef     = React.useRef([]);        // Image objects, index 0..239
  const frameIdxRef   = React.useRef(0);
  const [frameIdx,    setFrameIdx]    = React.useState(0);
  const [loadCount,   setLoadCount]   = React.useState(0);

  /* ── 1. Preload all frames ── */
  React.useEffect(() => {
    framesRef.current = Array(TOTAL_FRAMES).fill(null);
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        framesRef.current[i] = img;
        setLoadCount((c) => c + 1);
      };
      img.src = frameSrc(i + 1);
    }
  }, []);

  /* ── 2. Scroll → frame index ── */
  React.useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      const scrolled    = Math.max(0, -rect.top);
      const p  = totalScroll > 0 ? Math.min(1, scrolled / totalScroll) : 0;
      const idx = Math.min(TOTAL_FRAMES - 1, Math.round(p * (TOTAL_FRAMES - 1)));
      if (idx !== frameIdxRef.current) {
        frameIdxRef.current = idx;
        setFrameIdx(idx);
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* ── 3. Canvas draw loop (RAF, skips identical frames) ── */
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf;
    let lastIdx    = -0.5;
    let lastLoaded = null;

    const setSize = () => {
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      const idx = frameIdxRef.current;
      const img = framesRef.current[idx];
      if (idx === lastIdx && img === lastLoaded) return; // nothing changed
      lastIdx    = idx;
      lastLoaded = img;

      const ctx = canvas.getContext("2d");
      const w   = canvas.offsetWidth;
      const h   = canvas.offsetHeight;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#131313";
      ctx.fillRect(0, 0, w, h);
      if (!img) return;

      /* contain-fit: keep full image visible, dark bg fills letterbox */
      const iw    = img.naturalWidth  || 1280;
      const ih    = img.naturalHeight || 720;
      const scale = Math.min(w / iw, h / ih);
      const dw    = iw * scale;
      const dh    = ih * scale;
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  /* Derived values */
  const titleOpacity = Math.max(0, 1 - frameIdx / 25);
  const hintOpacity  = Math.max(0, 1 - frameIdx / 14);
  const progress     = frameIdx / (TOTAL_FRAMES - 1);

  return (
    <section
      ref={containerRef}
      className="fsl-section"
      data-screen-label="01 Landing"
    >
      <div className="fsl-pin">
        {/* ── Frame canvas ── */}
        <canvas ref={canvasRef} className="fsl-canvas" />

        {/* ── Annotation layer ── */}
        <div className="fsl-ann-layer">

          {/* SVG: dots + connecting lines */}
          <svg className="fsl-ann-svg" xmlns="http://www.w3.org/2000/svg">
            {ANNOTATIONS.map((ann, i) => {
              const op = annOpacity(ann, frameIdx);
              if (op === 0) return null;
              /* Line end: for 'left', label.x is the RIGHT edge → that's where the line meets */
              const lx = `${ann.label.x}%`;
              const ly = `${ann.label.y + 1.1}%`;
              return (
                <g key={i} style={{ opacity: op, transition: "opacity 0.4s" }}>
                  <line
                    x1={`${ann.dot.x}%`} y1={`${ann.dot.y}%`}
                    x2={lx}             y2={ly}
                    stroke="rgba(255,255,255,0.50)" strokeWidth="0.8"
                    strokeDasharray="3 2"
                  />
                  <circle
                    cx={`${ann.dot.x}%`} cy={`${ann.dot.y}%`} r="6"
                    fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1"
                  />
                  <circle
                    cx={`${ann.dot.x}%`} cy={`${ann.dot.y}%`} r="2.5"
                    fill="white"
                  />
                </g>
              );
            })}
          </svg>

          {/* HTML text labels */}
          {ANNOTATIONS.map((ann, i) => {
            const op = annOpacity(ann, frameIdx);
            const posStyle =
              ann.side === "right"
                ? { left: `${ann.label.x}%`, top: `${ann.label.y}%` }
                : { right: `${100 - ann.label.x}%`, top: `${ann.label.y}%` };
            return (
              <div
                key={i}
                className={`fsl-ann-label ${ann.side}`}
                style={{ ...posStyle, opacity: op, transition: "opacity 0.4s" }}
              >
                <div className="fsl-ann-title">{ann.title}</div>
                <div className="fsl-ann-body">{ann.body}</div>
              </div>
            );
          })}
        </div>

        {/* ── Title overlay (fades out on first scroll) ── */}
        <div
          className="fsl-title-overlay"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${(1 - titleOpacity) * -18}px)`,
            pointerEvents: titleOpacity < 0.05 ? "none" : "auto",
          }}
        >
          <span className="fsl-eyebrow">
            Afstudeerproject · Sit &amp; Heat · 2026 · Berend Linssen
          </span>
          <h1 className="fsl-h1">
            Van reststof<br />
            <em>tot tas</em>
          </h1>
          <p className="fsl-sub">
            Een circulaire collectie uit het restmateriaal van verwarmde
            horeca-kussens, gemaakt in een sociaal atelier.
          </p>
        </div>

        {/* ── Scroll cue ── */}
        <div className="fsl-scroll-cue" style={{ opacity: hintOpacity }}>
          scroll langzaam ↓
        </div>

        {/* ── Bottom progress bar ── */}
        <div className="fsl-progress-wrap">
          <div
            className="fsl-progress-fill"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* ── Loading indicator (early frames only) ── */}
        {loadCount < 10 && (
          <div className="fsl-loading">
            <div
              className="fsl-loading-bar"
              style={{ width: `${(loadCount / TOTAL_FRAMES) * 100}%` }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { FrameScrollLanding });
