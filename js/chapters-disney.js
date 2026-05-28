/* DISNEY MODEL — Interactief post-it systeem met scroll-gedreven filter-rondes
   Drie fases:
   0.00–0.30  Post-it wall (Dreamer) — alle ideeën zichtbaar, klikbaar
   0.30–0.60  Dreamer → Realist transitie — afvallende ideeën vliegen weg, titel verandert
   0.60–0.85  Realist → Critic transitie — meer ideeën weg, titel verandert
   0.85–1.00  Uitkomst — finale ideeën, samenvatting
*/

/* Alle ideeën uit de brainstormsessie */
const ALL_IDEAS = [
  "powerwall","broodzak","sjaal","barkruk","botterhammenzakje","nachtlampje",
  "knikkerzak","parasol","bakfietshoes","zitzak","spandoek","vershoudzak",
  "bodywarmer","placemats","stuurhoes","hangmat","strandstoel","pijl en boog houder",
  "fleskoelhoes","happysoks","handschoenen","telefoonhoesje","bijzettafel",
  "bakfietskussen","gordijnen","sleutelhanger","babydraagzak","babystoel",
  "knuffel","menu casing","poef","fietszadel","reclameletters","schoolboekenhoes",
  "boekenhoes","nekkussen","fleskaft","muismat","lampenkap","bierviltjes",
  "tafelkleed","vuile was zak","opbergzeil","patchwork stof rol","chalkbag",
  "fruitnet","sportballentas","plantenpot","ovenwanten","onderzetter",
  "keukenschort","geveldecoratie","messensleeve","haarnetje","koksmuts",
  "schuim trampolinepark","geluidsisolatie","bezorgtas","kerstsok","jurk",
  "bakfiets deksel","vlaggetjes","slingers","theemuts","kledinghoes",
  "picknickkleed","armleuningen","slabbertjes","theemok warmhouder","deken",
  "opbergzak","dierenkruikje","herbruikbaar toiletpapier","scheetkussen",
  "schooltas","surfplank","tafelloper","heuptas","sporttas","buideltasje",
  "reistas","skilift kussen","totebag","handtas","crossbody bag","slingback bag",
  "oliedispensor","steunkussen","pizza zak","zout en peper houders","fietsaccu",
  "opblaasboot","liniaal","fietstas","kattenkrabpaal","prullenbakje auto",
  "stressbal","knuffelkussen","picknickmandje","slaapzak","warmte wolk",
  "ns stoelen","opklapstoel","etui","rugzak","laptop sleeve","padel houdertas"
];

/* Ideeën die afvallen bij Dreamer → Realist */
const DREAMER_REMOVE = new Set([
  "herbruikbaar toiletpapier","ns stoelen","haarnetje","zout en peper houders",
  "surfplank","skilift kussen","warmte wolk","fietsaccu","liniaal","kattenkrabpaal",
  "stressbal","prullenbakje auto","steunkussen","scheetkussen","pizza zak",
  "happysoks","oliedispensor","slaapzak"
]);

/* Ideeën die afvallen bij Realist → Critic (alles behalve finale set) */
const FINAL_REMAINING = new Set([
  "nekkussen","opklapstoel","zitzak","strandstoel","menu casing","nachtlampje",
  "spandoek","boekenhoes","tafelloper","vlaggetjes","slingers","fruitnet",
  "placemats","sporttas","buideltasje","heuptas","rugzak","schooltas",
  "crossbody bag","slingback bag","handtas","totebag","etui","reistas",
  "muismat","chalkbag","padel houdertas","sportballentas","plantenpot",
  "lampenkap","parasol","tafelkleed","ovenwanten","keukenschort","onderzetter",
  "vuile was zak","opbergzeil","bierviltjes","fleskaft","patchwork stof rol",
  "laptop sleeve","reclameletters","messensleeve","poef","servetten"
]);

/* Seeded pseudo-random for deterministic positions */
const seededRand = (seed) => {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
};

/* Pre-compute positions + styling for all post-its */
const computePostItLayout = () => {
  return ALL_IDEAS.map((idea, i) => {
    const rand = seededRand(i * 31 + 7);
    return {
      id: idea,
      x: 2 + rand() * 88,         // % left
      y: 2 + rand() * 82,         // % top
      rot: (rand() - 0.5) * 16,   // degrees
      z: Math.floor(rand() * 40) + 1,
      colorIdx: Math.floor(rand() * 5),
    };
  });
};

const POSTIT_COLORS = [
  { bg: "#FFE566", border: "#C9AA00" },
  { bg: "#FFC966", border: "#C97A00" },
  { bg: "#C8E6A0", border: "#6B9E3A" },
  { bg: "#FFB3B3", border: "#C96060" },
  { bg: "#B3D9FF", border: "#4A8FCC" },
];

const POSTIT_LAYOUT = computePostItLayout();

/* ── Main component ─────────────────────────────────────────────────────────── */
const DisneyModelSection = ({ scrollProgress: p }) => {
  const [pushed, setPushed] = React.useState(null);

  // Sub-phase thresholds
  const wallP    = clamp(p / 0.30);           // 0.00–0.30: wall appears
  const dreamP   = clamp((p - 0.40) / 0.40);  // 0.30–0.60: dreamer→realist
  const realistP = clamp((p - 0.60) / 0.25);  // 0.60–0.85: realist→critic
  const outroP   = clamp((p - 0.80) / 0.20);  // 0.80–1.00: finale stays longer

  const titlePhase = p < 0.40 ? "Dreamer" : (p < 0.60 ? "Realist" : (p < 0.85 ? "Critic" : "Uitkomst"));

  const getIdeaStyle = (item) => {
    const isDreamerRemoved = DREAMER_REMOVE.has(item.id);
    const isRealistRemoved = !FINAL_REMAINING.has(item.id) && !isDreamerRemoved;

    let translateX = 0;
    let opacity = wallP;
    let scale = 0.4 + wallP * 0.6;

    if (isDreamerRemoved && p >= 0.40) {
      const removeStart = 0.40;
      const removeEnd = 0.60;
      const t = easeOutCubic(clamp((p - removeStart) / (removeEnd - removeStart)));
      const dir = item.x < 50 ? -1 : 1;
      translateX = dir * t * 120;
      opacity = 1 - t;
      scale = 1;
    } else if (isRealistRemoved && p >= 0.60) {
      const t = easeOutCubic(realistP);
      const dir = item.x < 50 ? -1 : 1;
      translateX = dir * t * 140;
      opacity = 1 - t;
      scale = 1;
    }

    if (pushed === item.id) {
      translateX += item.x < 50 ? -8 : 8;
    }

    return {
      left: `${item.x}%`,
      top: `${item.y}%`,
      zIndex: item.z + (pushed === item.id ? 50 : 0),
      transform: `translate(-50%, -50%) rotate(${item.rot}deg) translateX(${translateX}vw) scale(${scale})`,
      opacity,
      background: POSTIT_COLORS[item.colorIdx].bg,
      borderColor: POSTIT_COLORS[item.colorIdx].border,
      transition: isDreamerRemoved || isRealistRemoved
        ? "transform 0.6s cubic-bezier(.2,.8,.2,1), opacity 0.5s linear"
        : "transform 0.3s cubic-bezier(.34,1.56,.64,1)",
      willChange: "transform, opacity",
    };
  };

  return (
    <div style={{position:"absolute", inset:0, overflow:"hidden"}}>

      {/* Big title watermark */}
      <div style={{
        position:"absolute", inset:0,
        display:"flex", alignItems:"center", justifyContent:"center",
        pointerEvents:"none", zIndex:0
      }}>
        <div style={{
          fontFamily:"var(--sans)", fontWeight:300,
          fontSize:"clamp(80px, 18vw, 260px)",
          letterSpacing:"-0.03em", opacity: 0.07,
          lineHeight:1, userSelect:"none",
          transition:"opacity 0.4s"
        }}>{titlePhase}</div>
      </div>

      {/* Phase label */}
      <div className="bs-sublabel" style={{zIndex:10}}>
        Fase 3 · Disney Model · {titlePhase}
      </div>

      {/* Transition explanation text */}
      {p >= 0.40 && p < 0.60 && (
        <div style={{
          position:"absolute", bottom:"8vh", left:"50%", transform:"translateX(-50%)",
          maxWidth:"52ch", textAlign:"center", fontFamily:"var(--mono)", fontSize:12,
          letterSpacing:"0.08em", zIndex:20, opacity: Math.min(dreamP * 3, 1),
          background:"rgba(255,255,255,0.9)", padding:"12px 20px",
          border:"1px solid var(--line-soft)"
        }}>
          Van Dreamer naar Realist, onhaalbare of niet passende ideeën vallen af.
        </div>
      )}
      {p >= 0.60 && p < 0.85 && (
        <div style={{
          position:"absolute", bottom:"8vh", left:"50%", transform:"translateX(-50%)",
          maxWidth:"52ch", textAlign:"center", fontFamily:"var(--mono)", fontSize:12,
          letterSpacing:"0.08em", zIndex:20, opacity: Math.min(realistP * 3, 1),
          background:"rgba(255,255,255,0.9)", padding:"12px 20px",
          border:"1px solid var(--line-soft)"
        }}>
          Van Realist naar Critic, ideeën die te niche, te complex of buiten scope vallen vallen af.
        </div>
      )}

      {/* Post-it wall */}
      <div style={{position:"absolute", inset:0, pointerEvents: p < 0.60 ? "auto" : "none"}}>
        {POSTIT_LAYOUT.map((item) => (
          <div
            key={item.id}
            className="disney-postit"
            style={getIdeaStyle(item)}
            onClick={() => setPushed(prev => prev === item.id ? null : item.id)}
          >
            {item.id}
          </div>
        ))}
      </div>

      {/* Finale uitkomst */}
      {p >= 0.80 && (
        <div style={{
          position:"absolute", inset:0, overflow:"auto",
          display:"flex", flexDirection:"column", alignItems:"center",
          justifyContent:"flex-start", padding:"12vh 6vw 4vh",
          gap:20, opacity: outroP,
          transform: `scale(${0.85 + outroP * 0.15})`,
          background:"var(--bg)", zIndex:30
        }}>
          <div className="step-num"><span className="bullet"/>UITKOMST · CRITIC FASE</div>
          <h3 style={{fontFamily:"var(--sans)", fontWeight:500,
            fontSize:"clamp(24px, 3vw, 42px)", textAlign:"center"}}>
            De ideeën die overblijven.
          </h3>
          <div style={{display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center", maxWidth:1000}}>
            {[...FINAL_REMAINING].map((idea, i) => (
              <div key={i} style={{
                background: POSTIT_COLORS[i % 5].bg,
                border:`1px solid ${POSTIT_COLORS[i % 5].border}`,
                padding:"8px 14px",
                fontFamily:"var(--mono)", fontSize:11, letterSpacing:"0.06em",
                transform:`rotate(${(i * 7) % 7 - 3}deg)`,
              }}>{idea}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { DisneyModelSection });
