/* INTERACTIVE MATERIAL SHOWER — falling waste-material sprites with mouse repulsion */

const InteractiveMaterial = () => {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({ x: -9999, y: -9999 });
  const piecesRef = React.useRef([]);
  const imgsRef = React.useRef([]);

  React.useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let running = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    /* ---- individual PNG sprites (transparent backgrounds) ---- */
    const BASE = "foto%27s%20en%20animaties%20website/falling%20fabrics/";
    const SPRITE_FILES = [
      "SDA%201.png", "SDA%202.png", "SDA%203.png", "SDA%204.png",
      "SDA%205.png", "SDA%206.png", "SDA%207.png", "SDA%208.png",
      "SDA%209.png", "SDA%2010.png", "SDA%2011.png",
      "Fiberfill%201.png", "fiberfill%203.png",
      "foam1.png", "foam%202.png", "foam%203.png", "foam%204.png", "foam%205.png"
    ];

    /* ---- load all sprites then start ---- */
    let loadedCount = 0;
    SPRITE_FILES.forEach((file, i) => {
      const img = new Image();
      img.onload = () => {
        imgsRef.current[i] = img;
        loadedCount++;
        if (loadedCount === SPRITE_FILES.length) initPieces();
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === SPRITE_FILES.length) initPieces();
      };
      img.src = BASE + file;
    });

    /* ---- create falling pieces ---- */
    const N = 60;
    function initPieces() {
      const available = imgsRef.current.filter(Boolean);
      if (!available.length) return;
      const W = canvas.getBoundingClientRect().width;
      const H = canvas.getBoundingClientRect().height;
      piecesRef.current = [...Array(N)].map((_, i) => ({
        x: Math.random() * W,
        y: -Math.random() * H * 1.5,
        vx: 0,
        vy: 0.36 + Math.random() * 0.72,
        r: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        size: 700 + Math.random() * 700,
        img: available[i % available.length],
      }));
    }

    /* ---- mouse interaction ---- */
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouseRef.current.x = -9999; mouseRef.current.y = -9999; };
    const parent = canvas.parentElement.parentElement; // section — dekt ook de tekst-kolom
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);

    /* ---- animation loop ---- */
    const tick = () => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x, my = mouseRef.current.y;
      const REP_R = 200;

      piecesRef.current.forEach(p => {
        /* physics */
        p.vy += 0.0144;
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.hypot(dx, dy);
        if (d < REP_R) {
          const f = (1 - d / REP_R) * 0.6;
          p.vx += (dx / (d || 1)) * f;
          p.vy += (dy / (d || 1)) * f;
          p.vr += (Math.random() - 0.5) * 0.015;
        }
        p.vx *= 0.97;
        p.vy *= 0.988;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        p.vr *= 0.96;

        /* wrap edges */
        if (p.x < -160) p.x = W + 160;
        if (p.x > W + 160) p.x = -160;
        if (p.y > H + 120) {
          p.y = -120;
          p.x = Math.random() * W;
          p.vy = 0.45 + Math.random() * 0.9;
          p.vx = 0;
        }

        /* draw sprite */
        if (p.img) {
          const aspect = p.img.naturalHeight / p.img.naturalWidth;
          const drawW = p.size;
          const drawH = drawW * aspect;
          ctx.save();
          ctx.globalAlpha = 0.7;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.r);
          ctx.drawImage(p.img, -drawW / 2, -drawH / 2, drawW, drawH);
          ctx.restore();
        }
      });

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="mat-canvas" />;
};

const MaterialOnderzoekDeep = () => {
  const ref = useReveal();
  return (
    <section className="step tall" ref={ref} data-screen-label="20 Materiaal interactief">
      <FrameLabel num="—" name="Materiaal — beweeg de muis" />
      <div className="step-bg matbg">
        <InteractiveMaterial />
      </div>
      <div className="step-pin">
        <div className="step-stage">
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, width:"95%"}}>
            <img src="foto%27s%20en%20animaties%20website/Reststoffen.jpg"
              alt="Reststoffen van Sit en Heat" style={{width:"100%", aspectRatio:"1/1", objectFit:"cover", display:"block"}} />
            <img src="foto%27s%20en%20animaties%20website/schuim.jpeg"
              alt="Schuim restmateriaal" style={{width:"100%", aspectRatio:"1/1", objectFit:"cover", display:"block"}} />
            <img src="foto%27s%20en%20animaties%20website/fiberfill.jpeg"
              alt="Fiberfill restmateriaal" style={{width:"100%", aspectRatio:"1/1", objectFit:"cover", display:"block"}} />
          </div>
        </div>
        <div className="step-content reveal-stagger">
          <div className="step-num"><span className="bullet"/>STAP 06 · MATERIAALINVENTARISATIE</div>
          <h2 className="wf-title">Materiaal­inventarisatie</h2>
          <p className="wf-body lg">
            Verreweg het grootste aandeel: solution dyed acrylic. UV bestendig,
            weerbestendig, slijtvast, in de materialensector een premiummateriaal.
            Dit is het materiaal waar de meeste focus op is gelegd.
          </p>
          <div className="stat-row">
            <div className="stat"><div className="v">78kg</div><div className="l">totaal</div></div>
            <div className="stat"><div className="v">37kg</div><div className="l">acrylic</div></div>
            <div className="stat"><div className="v">22kg</div><div className="l">losse stukken</div></div>
            <div className="stat"><div className="v">9kg</div><div className="l">fiberfill</div></div>
          </div>
        </div>
      </div>
      <div className="mat-hint">↳ beweeg je muis door dit blok om de stoffen weg te duwen</div>
    </section>
  );
};

Object.assign(window, { InteractiveMaterial, MaterialOnderzoekDeep });
