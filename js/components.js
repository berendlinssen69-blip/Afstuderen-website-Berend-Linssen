/* Wireframe primitives + scroll utilities */


const WfTag = ({ children, solid = false }) => (
  <span className={`wf-tag ${solid ? 'solid' : ''}`}>
    {!solid && <span className="dot" />}
    {children}
  </span>
);

const Anno = ({ children }) => <span className="anno">{children}</span>;

const FrameLabel = ({ num, name, full = false }) => (
  <div className="frame-label">
    <span className="num">{num}</span>
    <span className="name">{name}</span>
    {full && <span className="full-flag">FULL-BLEED</span>}
  </div>
);

/* Hook: scroll progress 0..1 across an element */
const useScrollProgress = (ref) => {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const el = ref.current; if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      if (total <= 0) { setP(0); return; }
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setP(passed / total);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [ref]);
  return p;
};

/* clamp + lerp */
const clamp = (v, a=0, b=1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const slice = (p, start, end) => clamp((p - start) / (end - start));

/* Reveal */
const useReveal = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};
const Reveal = ({ children, className = "" }) => {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

/* ========== ART STAGES ========== */

const ArtMaterials = ({ alpha = 1, scale = 1 }) => (
  <svg viewBox="0 0 400 400" style={{ opacity: alpha, transform: `scale(${scale})` }}>
    <defs>
      <pattern id="hatch1" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.3"/>
      </pattern>
      <pattern id="hatch2" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(-45)">
        <line x1="0" y1="0" x2="0" y2="6" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.2"/>
      </pattern>
    </defs>
    <g stroke="#1A1A1A" strokeWidth="1.2">
      <rect x="60" y="240" width="280" height="40" fill="url(#hatch1)" />
      <rect x="80" y="200" width="240" height="40" fill="url(#hatch2)" />
      <rect x="50" y="160" width="300" height="40" fill="#FFFFFF" />
      <rect x="90" y="120" width="220" height="40" fill="url(#hatch1)" />
      <rect x="70" y="80" width="260" height="40" fill="#FFFFFF" />
      <rect x="100" y="40" width="200" height="40" fill="url(#hatch2)" />
    </g>
    <text x="200" y="320" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill="#6B6B6B">
      RESTSTOF · 78 KG · 7 KLEUREN
    </text>
  </svg>
);

const ArtSketch = ({ alpha = 1, scale = 1, draw = 1 }) => {
  const dash = 600;
  return (
    <svg viewBox="0 0 400 400" style={{ opacity: alpha, transform: `scale(${scale})` }}>
      <g fill="none" stroke="#1A1A1A" strokeWidth="1.4"
         strokeDasharray={dash} strokeDashoffset={dash * (1 - draw)}>
        <path d="M 100 180 Q 100 280 200 280 Q 300 280 300 180 Q 300 150 270 145 L 130 145 Q 100 150 100 180 Z" />
        <path d="M 130 145 Q 200 132 270 145" />
        <path d="M 140 155 C 130 90 270 90 260 155" />
        <path d="M 100 180 L 300 180" strokeDasharray="3 4" opacity="0.4"/>
        <path d="M 200 145 L 200 280" strokeDasharray="3 4" opacity="0.4"/>
      </g>
      <g fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1.5" fill="#6B6B6B" opacity={alpha}>
        <text x="200" y="320" textAnchor="middle">SCHETS · HALF-MOON · V03</text>
        <text x="60" y="180">A1</text>
        <text x="335" y="180">A2</text>
      </g>
    </svg>
  );
};

const Art3D = ({ alpha = 1, scale = 1, rotation = 0 }) => (
  <svg viewBox="0 0 400 400" style={{ opacity: alpha, transform: `scale(${scale}) rotateY(${rotation}deg)`, transformStyle:"preserve-3d" }}>
    <defs>
      <linearGradient id="bagShade" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#D6D2CB" />
      </linearGradient>
      <pattern id="grid3d" patternUnits="userSpaceOnUse" width="14" height="14">
        <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#1A1A1A" strokeWidth="0.3" opacity="0.25"/>
      </pattern>
    </defs>
    <g transform={`translate(200 200) rotate(${rotation * 0.4})`}>
      <ellipse cx="0" cy="120" rx="130" ry="14" fill="#1A1A1A" opacity="0.12"/>
      <g transform="translate(-110 -90)">
        <path d="M 0 60 Q 0 180 110 180 Q 220 180 220 60 Q 220 30 195 25 L 25 25 Q 0 30 0 60 Z"
              fill="url(#bagShade)" stroke="#1A1A1A" strokeWidth="1.4" />
        <path d="M 0 60 Q 0 180 110 180 Q 220 180 220 60 Q 220 30 195 25 L 25 25 Q 0 30 0 60 Z"
              fill="url(#grid3d)" />
        <path d="M 25 25 Q 110 14 195 25" fill="none" stroke="#1A1A1A" strokeWidth="0.8" opacity="0.5"/>
        <path d="M 30 35 C 0 -40 220 -40 190 35" fill="none" stroke="#1A1A1A" strokeWidth="2" />
        <circle cx="32" cy="36" r="4" fill="#1A1A1A"/>
        <circle cx="188" cy="36" r="4" fill="#1A1A1A"/>
        <line x1="110" y1="25" x2="110" y2="180" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.4"/>
      </g>
    </g>
    <text x="200" y="380" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill="#6B6B6B" opacity={alpha}>
      3D RENDER · ROTATIE {Math.round(rotation)}°
    </text>
  </svg>
);

const BgRotate = ({ rotation = 0, alpha = 0 }) => (
  <svg viewBox="0 0 800 800" style={{ opacity: alpha, transform: `rotate(${rotation}deg)`, transformOrigin:"50% 50%" }}>
    <g fill="none" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.5">
      {[...Array(24)].map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const x2 = 400 + Math.cos(a) * 380;
        const y2 = 400 + Math.sin(a) * 380;
        return <line key={i} x1="400" y1="400" x2={x2} y2={y2} />;
      })}
      <circle cx="400" cy="400" r="200" strokeDasharray="2 6"/>
      <circle cx="400" cy="400" r="280" strokeDasharray="2 6"/>
      <circle cx="400" cy="400" r="350" strokeDasharray="2 6"/>
    </g>
    <g fontFamily="JetBrains Mono" fontSize="10" fill="#6B6B6B" opacity="0.6">
      <text x="400" y="60" textAnchor="middle">N</text>
      <text x="740" y="404" textAnchor="middle">E</text>
      <text x="400" y="754" textAnchor="middle">S</text>
      <text x="60" y="404" textAnchor="middle">W</text>
    </g>
  </svg>
);

/* Directional reveal hooks */
const useRevealDir = (dir = 'left') => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, className: `reveal-${dir}` };
};

Object.assign(window, {
  WfTag, Anno, FrameLabel, Reveal, useReveal, useRevealDir,
  useScrollProgress, clamp, lerp, slice,
  ArtMaterials, ArtSketch, Art3D, BgRotate
});

/* ====== PROGRESS WHEEL ====== */
const ProgressWheel = ({ stepFloat = 1, currentStepNum, total = 19, label = "" }) => {
  const GREEN = "#8DB462";
  const stepAngle = 360 / total;
  const rotation = currentStepNum !== undefined
    ? -currentStepNum * stepAngle
    : -stepFloat * stepAngle;
  const nums = [];
  const R = 470;
  for (let i = 0; i < total; i++) {
    const ang = i * stepAngle;
    const rad = (ang * Math.PI) / 180;
    const x = 500 + R * Math.cos(rad);
    const y = 500 + R * Math.sin(rad);
    const tilt = ang + 90;
    const isCurrent = currentStepNum !== undefined
      ? currentStepNum === i
      : Math.round(stepFloat) === i;
    nums.push(
      <g key={i} transform={`translate(${x} ${y}) rotate(${tilt})`}>
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Jost, sans-serif"
          fontWeight={isCurrent ? 500 : 400}
          fontSize={isCurrent ? 64 : 44}
          letterSpacing="-0.02em"
          fill={isCurrent ? GREEN : "#1A1A1A"}
          opacity={isCurrent ? 0.9 : 0.32}
        >
          {String(i).padStart(2, "0")}
        </text>
      </g>
    );
  }

  const stepIdx = currentStepNum !== undefined
    ? Math.max(0, Math.min(total - 1, currentStepNum))
    : Math.max(0, Math.min(total - 1, Math.round(stepFloat)));

  return (
    <div className="wheel" aria-hidden="true">
      <div className="ring" style={{ transform: `translateY(-50%) rotate(${rotation}deg)`, transition: 'transform 1.8s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
        <svg viewBox="0 0 1000 1000">
          <circle cx="500" cy="500" r="495" fill="none" stroke={GREEN} strokeWidth="0.6" opacity="0.25" />
          <circle cx="500" cy="500" r="430" fill="none" stroke={GREEN} strokeWidth="0.4" opacity="0.14" strokeDasharray="2 6" />
          {[...Array(total)].map((_, i) => {
            const ang = (i * stepAngle * Math.PI) / 180;
            const tx = 500 + 430 * Math.cos(ang);
            const ty = 500 + 430 * Math.sin(ang);
            const isCurrent = currentStepNum !== undefined
              ? currentStepNum === i
              : Math.round(stepFloat) === i;
            return <circle key={`t${i}`} cx={tx} cy={ty} r={isCurrent ? 5 : 3} fill={isCurrent ? GREEN : "#1A1A1A"} opacity={isCurrent ? 0.8 : 0.3} />;
          })}
          {nums}
        </svg>
      </div>
      <div className="center-mark" />
      <div className="current-block">
        <div className="big" style={{ color: GREEN }}>{String(stepIdx).padStart(2, "0")}</div>
        <div className="meta">
          <div className="ttl">{label}</div>
          <div className="sub">Stap {stepIdx} / {total - 1}</div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ProgressWheel });
