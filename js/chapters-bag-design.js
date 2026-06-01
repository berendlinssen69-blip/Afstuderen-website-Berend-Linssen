/* chapters-bag-design.js
   Het ontwerp van de tas: video-intro + 9 interactieve stappen (16–24)

   BagVideoIntro       — scroll-driven video als overgang
   Step16_Vormonderzoek — filter-grid tastypen + draagwijzen
   Step17_Schetsen      — canvas carousel 33 schetsen (+ annotaties)
   Step18_Vormtest      — split-screen mockup + maten reveal
   Step19_Prototype1    — bevindingen met why/fix/pve + conclusie
   Step20_Prototype2    — fixes checklijst + bevindingen + conclusie
   Step21_Prototype3    — bevindingen + sluitingen + conclusie (was Step22)
   Step22_Stakeholders  — Henri interview 2 + Jorg update + doorvertaling (nieuw)
   Step23_Prototype4    — huidige staat + bekende aanpassingen
   Step24_SociaalAtelier— Blueview interview + definitief PvE
*/

/* ─── PHOTO GALLERY COMPONENT ───────────────────────────────────────────── */
const PhotoGallery = ({ base, files, alt = "Foto" }) => {
  const [idx, setIdx] = React.useState(0);
  const total = files.length;

  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  /* Swipe support */
  const touchRef = React.useRef(null);
  const onTouchStart = (e) => { touchRef.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchRef.current;
    if (Math.abs(diff) > 40) { diff > 0 ? prev() : next(); }
    touchRef.current = null;
  };

  return (
    <div className="photo-gallery">
      {/* Hoofdfoto */}
      <div className="pg-main" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {files.map((f, i) => (
          <img key={i} src={base + f} alt={`${alt} ${i + 1}`}
            className={`pg-img${i === idx ? ' active' : ''}`} />
        ))}
        {total > 1 && (
          <>
            <button className="pg-arrow pg-prev" onClick={prev} aria-label="Vorige">‹</button>
            <button className="pg-arrow pg-next" onClick={next} aria-label="Volgende">›</button>
          </>
        )}
        <div className="pg-counter">
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>
      {/* Thumbnails */}
      {total > 1 && (
        <div className="pg-thumbs">
          {files.map((f, i) => (
            <div key={i} className={`pg-thumb${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}>
              <img src={base + f} alt={`${alt} ${i + 1} thumbnail`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* Inject gallery styles */
(() => {
  if (document.getElementById('pg-styles')) return;
  const s = document.createElement('style');
  s.id = 'pg-styles';
  s.textContent = `
    .photo-gallery { display: flex; flex-direction: column; gap: 8px; width: 100%; height: 100%; }
    .pg-main { position: relative; flex: 1; overflow: hidden; background: var(--fill, #f5f5f5); }
    .pg-img {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover; display: block;
      opacity: 0; transition: opacity 0.3s ease;
    }
    .pg-img.active { opacity: 1; }
    .pg-arrow {
      position: absolute; top: 50%; transform: translateY(-50%);
      width: 36px; height: 36px; border: none; cursor: pointer;
      background: rgba(255,255,255,0.85); color: var(--ink, #1a1a1a);
      font-size: 20px; line-height: 1; display: flex;
      align-items: center; justify-content: center;
      z-index: 2; transition: background 0.2s;
    }
    .pg-arrow:hover { background: rgba(255,255,255,1); }
    .pg-prev { left: 8px; }
    .pg-next { right: 8px; }
    .pg-counter {
      position: absolute; bottom: 8px; right: 10px;
      font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em;
      color: white; background: rgba(0,0,0,0.5); padding: 3px 8px;
    }
    .pg-thumbs {
      display: flex; gap: 4px; overflow-x: auto;
      scrollbar-width: thin; padding-bottom: 2px;
    }
    .pg-thumb {
      width: 52px; height: 52px; flex-shrink: 0; overflow: hidden;
      cursor: pointer; border: 2px solid transparent;
      transition: border-color 0.2s; opacity: 0.6;
    }
    .pg-thumb.active { border-color: var(--thread, #E8A430); opacity: 1; }
    .pg-thumb:hover { opacity: 1; }
    .pg-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  `;
  document.head.appendChild(s);
})();

/* ─── AFBEELDINGS- EN VIDEOPADEN ─────────────────────────────────────────── */
const IMG_BASE       = "foto%27s%20en%20animaties%20website/";
const SKETCH_BASE    = IMG_BASE + "proces%20tas/Tas%20schetsen/";
const VORM_BASE      = IMG_BASE + "proces%20tas/vormonderzoek/";
const VORM_IMG       = "Screenshot%202026-05-19%20145227.png";
const SPUG_BASE      = IMG_BASE + "proces%20tas/tas%20prototypes/spugmodelen/";
const PROTO1_BASE    = IMG_BASE + "proces%20tas/tas%20prototypes/prototype%20v1/";
const PROTO2_BASE    = IMG_BASE + "proces%20tas/tas%20prototypes/prototype%20v2/";
const PROTO3_BASE    = IMG_BASE + "proces%20tas/tas%20prototypes/v3/";

const SPUG_FILES = [
  "20260420_153154%20(1).jpg", "20260420_160731%20(1).jpg", "20260420_161139%20(1).jpg",
  "20260421_094022%20(1).jpg", "20260421_094132%20(1)%20(1).jpg",
  "20260421_094158%20(1)%20(1).jpg",
  "IMG-20260420-WA0003%20(2).jpg", "IMG-20260420-WA0004%20(1).jpg", "IMG-20260420-WA0005%20(1).jpg",
];

const PROTO1_FILES = [
  "image%20(22).png", "image%20(23).png", "image%20(24).png", "image%20(25).png",
];

const PROTO2_FILES = [
  "20260430_142811%20(1).jpg", "20260430_142815%20(2).jpg", "20260430_142816%20(1).jpg",
  "20260501_083555.jpg", "20260501_083903%20(1).jpg", "20260501_094141.jpg",
  "20260505_142228.jpg", "20260505_142232.jpg", "20260505_142345.jpg",
];

/* ─── SCHETS CAROUSEL ────────────────────────────────────────────────────── */
const SKETCH_FILES = [
  "VORM2_000540_Page_01.jpg", "VORM2_000540_Page_02.jpg", "VORM2_000540_Page_03.jpg",
  "VORM2_000540_Page_04.jpg", "VORM2_000540_Page_05.jpg", "VORM2_000540_Page_06.jpg",
  "VORM2_000540_Page_07.jpg", "VORM2_000540_Page_08.jpg", "VORM2_000540_Page_09.jpg",
  "VORM2_000540_Page_10.jpg", "VORM2_000540_Page_11.jpg",
  "VORM3_000551_Page_1.jpg",  "VORM3_000551_Page_2.jpg",
  "SCHETS21.4_000554_Page_1.png", "SCHETS21.4_000554_Page_2.png",
  "SCHETS21.4_000554_Page_3.png", "SCHETS21.4_000554_Page_4.png",
  "SCHETS21.4_000554_Page_5.png", "SCHETS21.4_000554_Page_6.png",
  "SCHETS2904_000565_Page_02.png", "SCHETS2904_000565_Page_03.png",
  "SCHETS2904_000565_Page_04.png", "SCHETS2904_000565_Page_05.png",
  "SCHETS2904_000565_Page_06.png", "SCHETS2904_000565_Page_07.png",
  "SCHETS2904_000565_Page_08.png", "SCHETS2904_000565_Page_09.png",
  "DGDSJFDHGSDH_000561_Page_1.png", "DGDSJFDHGSDH_000561_Page_2.png",
  "HDHDD_000560.png",
];
const TOTAL_SKETCHES = SKETCH_FILES.length; // 33

const SKETCH_ANNOTATIONS = [
  {
    from: 9, to: 19,
    dot:   { x: 54, y: 38 }, label: { x: 60, y: 22 }, side: "right",
    title: "Halve maan · levervorm",
    body:  "Organisch · tijdloos\nVolgt lichaamscontour in crossbody",
  },
  {
    from: 21, to: 31,
    dot:   { x: 42, y: 58 }, label: { x: 18, y: 43 }, side: "left",
    title: "Vierkante basisvorm",
    body:  "Strak · maakbaar in atelier\nEen extra model in de collectie",
  },
];

const sketchAnnOp = (ann, idx) => {
  if (idx < ann.from || idx > ann.to) return 0;
  const FADE = 3;
  return Math.min(
    Math.min(1, (idx - ann.from) / FADE),
    Math.min(1, (ann.to - idx)   / FADE)
  );
};

/* ─── PROTOTYPE 1 FEEDBACK ───────────────────────────────────────────────── */
const PROTO1_FEEDBACK = [
  {
    cat: "Vorm",
    text: "Tas te vierkant: ronding zo minimaal dat je het niet zag",
    why:  "Bij wisselen cross↔sling draait de tas ~60°. De hoek stak uit op de rug en de inhoud leunde op de rits. Te hoekig voor de unisex uitstraling.",
    fix:  "Radius hoeken vergroten",
    pve:  "F.3 + A.3",
  },
  {
    cat: "Maat",
    text: "Inhoud kleiner dan verwacht: Tas breder maken",
    why:  "Laptop 14\" past niet goed. De vorm werkt niet als de onderkant niet breder is dan de bovenkant.",
    fix:  "Bottom panel breder maken",
    pve:  "F.1 + F.2",
  },
  {
    cat: "Maat",
    text: "Niet universeel: past op Berend, niet op Hannan",
    why:  "Moet voor meerdere lichaamstypes werken (160–190 cm).",
    fix:  "Tas verstelbaar maken voor lengte",
    pve:  "F.4",
  },
  {
    cat: "Hardware",
    text: "Verstelsysteem trekt stof samen bij startpunt, trekt langs de tas af",
    why:  "Dagelijks gebruik wordt onpraktisch; het systeem functioneert niet naar ontwerp.",
    fix:  "Treksysteem over de hele onderkant vaststikken",
    pve:  "F.3 + F.6",
  },
  {
    cat: "Hardware",
    text: "Treksysteem te dun, touw hangt snel vast",
    why:  "Belemmert dagelijks gebruik en draagcomfort.",
    fix:  "Treksysteem breder (25 mm)",
    pve:  "A.2 + F.6",
  },
  {
    cat: "Materiaal",
    text: "Slijtage bij veelvuldig verstellen verwacht",
    why:  "Duurzaamheid bij dagelijks gebruik, het systeem wordt regelmatig bediend.",
    fix:  "Ander materiaal voor het verstelsysteem onderzoeken",
    pve:  "D.6",
  },
  {
    cat: "Patroon",
    text: "Patronen hadden geen stikrandmarge, elk stuk viel kleiner uit dan het ontwerp",
    why:  "Constructiefout: de tas was overall kleiner dan bedoeld door het ontbreken van naadmarge.",
    fix:  "+1 cm naadmarge op alle patronen (atelier standaard: voetje naaimachine = 1 cm)",
    pve:  "M.4",
  },
];

const PROTO1_FIXES = [
  "Radius hoeken vergroot",
  "Onderkant 4 cm breder",
  "Treksysteem: 25 mm breed",
  "1 cm naadmarge op alle patronen",
  "Tas lengteverstelbaar",
];

/* ─── PROTOTYPE 2 BEVINDINGEN ────────────────────────────────────────────── */
const PROTO2_FEEDBACK = [
  {
    cat: "Hardware",
    text: "Verstelsysteem niet geïntegreerd: voelt als latere toevoeging",
    sub:  ["Los hangend van de tas", "Trekt stof samen aan een kant", "Dubbel verstellen nodig bij wissel naar slingback", "Frommelt op op de schouder"],
    why:  "Goed ontwerp voelt als een geheel. Dit systeem voelde als een toevoeging 'ohja, dat is een leuke oplossing', niet als integraal onderdeel.",
    fix:  "Volledig herontwerpen: 2 straps samenvoegen tot 1 (v4)",
    pve:  "A.2 + F.3",
  },
  {
    cat: "Hardware",
    text: "Strap te dun (3,5 cm) schouderdruk bij hoger gewicht",
    why:  "Dunne strap concentreert het gewicht op een klein oppervlak van de schouder.",
    fix:  "Strap naar 5,0 cm",
    pve:  "F.3",
  },
  {
    cat: "Hardware",
    text: "Lengte en draagwijzeverstelling zitten aan dezelfde kant",
    why:  "Lengteclipje hoort aan de voorkant: verstellen terwijl je de tas draagt (gebruiksgemak) en is de standaardpositie bij crossbody tassen (herkenbaarheid).",
    fix:  "Scheiden: lengteclipje naar voorkant, draagwijze systeem naar achterkant",
    pve:  "F.4 + F.6",
  },
  {
    cat: "Hardware",
    text: "Geen haaksysteem, aantrekken kan, maar niet vastmaken",
    why:  "Slingback is niet functioneel zonder een punt om vast te zetten op het lichaam.",
    fix:  "Haaksysteem ontwerpen voor v3",
    pve:  "F.9",
  },
  {
    cat: "Constructie",
    text: "Tas voelt te stijf op slingback positie, steekt uit",
    why:  "Draagcomfort en uitstraling bij slingback worden aangetast door de stijfheid.",
    fix:  "→ aangepakt in v4",
    pve:  "F.9 + A.3",
  },
  {
    cat: "Hardware",
    text: "Rits te dun, trekkoord ontbreekt",
    why:  "Dunne rits is minder prettig in dagelijks gebruik en straalt minder kwaliteit uit.",
    fix:  "Dikkere rits + touwtje aan rits",
    pve:  "F.7 + A.2",
  },
  {
    cat: "Gebruik",
    text: "Geen binnenindeling voor dagelijkse essentials",
    why:  "Doelgroep gebruikt de tas dagelijks. Zonder indeling liggen sleutels, telefoon en portemonnee los bij de laptop.",
    fix:  "Vakjes aan binnenkant toevoegen",
    pve:  "F.10 + F.2",
  },
  {
    cat: "Materiaal",
    text: "Alleen gemaakt met grote stukken restmateriaal",
    why:  "Grote lappen zijn schaars in de voorraad. Zonder alternatief patroon voor kleinere stukken wordt de kernmissie, restmateriaalhergebruik is dan beperkt.",
    fix:  "Optie ontwerpen voor kleinere stukken restmateriaal",
    pve:  "D.1 + D.5 + M.8",
  },
];

/* ─── PROTOTYPE 3 BEVINDINGEN ────────────────────────────────────────────── */
const PROTO3_FEEDBACK = [
  {
    cat: "Hardware",
    text: "Haaksysteem werkt niet universeel",
    sub:  ["Haakpositie verschilt per lichaamsbouw (Berend vs. Hannan)", "Haken moeizaam met 1 hand, lus niet te vinden achter de rug", "3D geprint haaksysteem is duurder dan bestaande oplossingen"],
    why:  "Het systeem is niet universeel inzetbaar. Bovendien is 3D printen duurder dan een ingekocht click systeem.",
    fix:  "Click systeem inkopen (goedkoper, universeler)",
    pve:  "F.6 + F.9 + E.4",
  },
  {
    cat: "Hardware",
    text: "Verstelsysteem nog steeds niet geïntegreerd, 2 banden werken los van elkaar",
    why:  "Opfrommeling blijft aanwezig. De twee banden voelen als aparte onderdelen, niet als een systeem.",
    fix:  "2 straps samenvoegen tot 1 strap in v4",
    pve:  "A.2",
  },
  {
    cat: "Constructie",
    text: "Binnenhoes zit te los, vakjes vallen naar binnen",
    why:  "De organisatie functie werkt niet als de binnenhoes niet strak in de tas zit.",
    fix:  "Binnenhoes op meerdere punten vaststikken aan buitenhoes (gebruik 1 cm stikrand)",
    pve:  "F.10 + A.2",
  },
  {
    cat: "Productie",
    text: "Kleinere stukken vereisen heel consequent naaien voor uitlijning",
    why:  "Naaisters in het atelier hebben variërende ervaring. Een patroon dat uitlijning vereist verhoogt de foutmarge en productietijd.",
    fix:  "Organischer patroon ontwerpen voor v4, meer ruimte voor kleine afwijkingen",
    pve:  "M.2 + M.8",
  },
  {
    cat: "Gebruik",
    text: "Iedereen doet de tas verkeerd om aan, voorkant niet herkenbaar",
    why:  "Zonder instructie pakt iedereen de korte kant als voorkant. Het systeem werkt dan niet correct.",
    fix:  "D ringetje aan voorkant als herkenningspunt",
    pve:  "F.3",
  },
  {
    cat: "Gebruik",
    text: "Mensen trekken verstelsysteem over de draagband in plaats van onder de oksel door",
    why:  "Foutief gebruik maakt de wissel naar slingback onmogelijk.",
    fix:  "Instructiekaart of schets met stappen bij aankoop meegeven",
    pve:  "O.5",
  },
];

/* ─── PROTOTYPE 3 FOTO'S ─────────────────────────────────────────────────── */
const PROTO3_FILES = [
  "20260513_112122.jpg",
  "20260513_112312.jpg", "20260513_112322.jpg", "20260513_112331.jpg",
  "20260513_112342.jpg",
];

/* ─── TASTYPEN DATA ──────────────────────────────────────────────────────── */
const BAG_TYPES = [
  { name: "Crossbody",  detail: "Primaire draagvorm · gekozen",                    chosen: true  },
  { name: "Slingback",  detail: "Secundaire draagvorm · schakelbaar",              chosen: true  },
  { name: "Bucket bag", detail: "Maakbaar maar minder compact",                    chosen: false },
  { name: "Tote",       detail: "Te simpel voor fietsgebruik",                     chosen: false },
  { name: "Backpack",   detail: "Sterk alternatief maar materiaal te warm op rug", chosen: false },
  { name: "Fold bag",   detail: "Complex om te vervaardigen",                      chosen: false },
];

const DRAAG_WIJZEN = [
  { name: "Crossbody", chosen: true  },
  { name: "Slingback", chosen: true  },
  { name: "Heup",      chosen: false },
  { name: "Rug",       chosen: false },
  { name: "Hand",      chosen: false },
];

const SLUIT_OPTIONS = [
  { name: "Rits",        detail: "Veilig · toegankelijk · gekozen",    chosen: true  },
  { name: "Magneet",     detail: "Makkelijk maar onveilig op de fiets", chosen: false },
  { name: "Klittenband", detail: "Onvoldoende voor dagelijks gebruik",  chosen: false },
  { name: "Drukknoop",   detail: "Te klein, minder duurzaam",           chosen: false },
  { name: "Gesp",        detail: "Goed maar te complex bij fietsen",    chosen: false },
  { name: "Open top",    detail: "Niet geschikt voor daggebruik",       chosen: false },
];

/* ══════════════════════════════════════════════════════════════════════════
   BAG FRAME INTRO  —  scroll-driven frame animatie (64 frames)
══════════════════════════════════════════════════════════════════════════ */
const BAG_TOTAL_FRAMES = 64;
const BAG_FRAME_BASE   =
  "foto%27s%20en%20animaties%20website/proces%20tas/video%20frames/" +
  "Bag_falls_onto_floor_202605181646_frames/";

const bagFrameSrc = (n) =>
  `${BAG_FRAME_BASE}Bag_falls_onto_floor_202605181646_${String(n).padStart(3, "0")}.jpg`;

const BAG_COLS = 5;

const BagVideoIntro = () => {
  const containerRef = React.useRef(null);
  const canvasRef    = React.useRef(null);
  const framesRef    = React.useRef([]);
  const frameIdxRef  = React.useRef(0);
  const [frameIdx,   setFrameIdx]  = React.useState(0);
  const [loadCount,  setLoadCount] = React.useState(0);

  /* 1. Preload alle 64 frames */
  React.useEffect(() => {
    framesRef.current = Array(BAG_TOTAL_FRAMES).fill(null);
    for (let i = 0; i < BAG_TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        framesRef.current[i] = img;
        setLoadCount((c) => c + 1);
      };
      img.src = bagFrameSrc(i + 1);
    }
  }, []);

  /* 2. Scroll → frame index */
  React.useEffect(() => {
    const update = () => {
      const el = containerRef.current; if (!el) return;
      const rect        = el.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      const scrolled    = Math.max(0, -rect.top);
      const p           = totalScroll > 0 ? Math.min(1, scrolled / totalScroll) : 0;
      const idx         = Math.min(BAG_TOTAL_FRAMES - 1, Math.round(p * (BAG_TOTAL_FRAMES - 1)));
      if (idx !== frameIdxRef.current) {
        frameIdxRef.current = idx;
        setFrameIdx(idx);
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* 3. Canvas draw loop — 5 tiles naast elkaar */
  React.useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
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
      if (idx === lastIdx && img === lastLoaded) return;
      lastIdx    = idx;
      lastLoaded = img;

      const ctx  = canvas.getContext("2d");
      const W    = canvas.offsetWidth;
      const H    = canvas.offsetHeight;
      const TW   = W / BAG_COLS;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#131313";
      ctx.fillRect(0, 0, W, H);
      if (!img) return;

      const iw    = img.naturalWidth  || 1920;
      const ih    = img.naturalHeight || 1080;
      const scale = Math.max(TW / iw, H / ih);
      const dw    = iw * scale;
      const dh    = ih * scale;
      const ox    = (TW - dw) / 2;
      const oy    = (H  - dh) / 2;

      for (let t = 0; t < BAG_COLS; t++) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(t * TW, 0, TW, H);
        ctx.clip();
        ctx.drawImage(img, t * TW + ox, oy, dw, dh);
        ctx.restore();
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  const progress = frameIdx / (BAG_TOTAL_FRAMES - 1);

  return (
    <section ref={containerRef} className="bag-video-intro" data-screen-label="— Tasontwerp intro">
      <div className="bag-video-pin">
        <canvas ref={canvasRef} className="bag-video-el" style={{ display: 'block', width: '100%', height: '100%' }} />

        {/* 4 verticale scheidingslijnen */}
        <div className="bag-tile-dividers" aria-hidden="true">
          {Array.from({ length: BAG_COLS - 1 }, (_, i) => i + 1).map(i => (
            <div key={i} className="bag-tile-div bag-tile-div-v" style={{ left: `${(i / BAG_COLS) * 100}%` }} />
          ))}
        </div>

        <div className="bag-video-scrim" />

        {/* Titel — altijd zichtbaar */}
        <div className="bag-video-title">
          <span className="bag-video-eyebrow">Tasontwerp · 4 prototypes · 2026</span>
          <h2 className="bag-video-h">Het<br /><em>ontwerp</em></h2>
          <p className="bag-video-sub">Van typenkeuze tot vierde prototype.</p>
        </div>

        <div className="bag-video-hint">scroll langzaam ↓</div>

        <div className="bag-video-progress">
          <div style={{ width: `${progress * 100}%`, height: '100%', background: 'var(--thread)', transition: 'width 0.06s linear' }} />
        </div>

        {loadCount < 8 && (
          <div className="fsl-loading">
            <div className="fsl-loading-bar" style={{ width: `${(loadCount / BAG_TOTAL_FRAMES) * 100}%` }} />
          </div>
        )}
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 16 · VORMONDERZOEK  —  filter-grid tastypen
══════════════════════════════════════════════════════════════════════════ */
/* ─── KEUZEMATRIX STAP 16 ────────────────────────────────────────────────── */
const KEUZE_CRITERIA_16 = [
  { criterium: "Hands-free op fiets",        bron: "Doelgroepanalyse" },
  { criterium: "Ergonomie dagelijks gebruik", bron: "Ahn, 2006" },
  { criterium: "Maakbaarheid in atelier",    bron: "PvE" },
  { criterium: "Past laptop 14\"",           bron: "Doelgroep + Henri" },
  { criterium: "Tijdloos ontwerp",           bron: "Spanningsveld stap 14" },
  { criterium: "Compactheid op lichaam",     bron: "Doelgroep stadsfietser" },
  { criterium: "Ademend draagcomfort",       bron: "Materiaalonderzoek" },
];
const KEUZE_NAMEN_16   = ["Crossbody", "Slingback", "Bucket bag", "Tote", "Backpack", "Fold bag"];
const KEUZE_SCORES_16  = [
  ["++", "++", "+",  "--", "++", "+"],  // hands-free
  ["++", "+",  "-",  "-",  "++", "0"],  // ergonomie
  ["+",  "+",  "+",  "++", "-",  "--"], // maakbaarheid
  ["+",  "+",  "0",  "++", "++", "-"],  // laptop
  ["++", "0",  "+",  "++", "++", "0"],  // tijdloos
  ["++", "++", "0",  "-",  "++", "+"],  // compactheid
  ["+",  "-",  "+",  "+",  "--", "0"],  // ademend
];
const KEUZE_TOTALEN_16 = ["+11", "+6", "+3", "+3", "+7", "-1"];

const SCORE_KLEUR_BAG = {
  "++": "var(--green)", "+": "var(--ink)", "0": "var(--ink-soft)",
  "-": "var(--thread)", "--": "var(--thread)"
};

const KeuzematrixTable16 = () => (
  <div style={{marginTop:20}}>
    <div style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", marginBottom:8}}>
      Criteria gebaseerd op doelgroepanalyse, PvE en onderzoek
    </div>
    {/* Header */}
    <div style={{display:"grid", gridTemplateColumns:"1fr 68px 68px 68px 68px 68px 68px", gap:4, padding:"4px 0", borderBottom:"2px solid var(--line)", fontFamily:"var(--mono)", fontSize:8, letterSpacing:"0.06em", textTransform:"uppercase", color:"var(--ink-soft)"}}>
      <span>Criterium · bron</span>
      {KEUZE_NAMEN_16.map((n,i) => <span key={i} style={{textAlign:"center", lineHeight:1.2}}>{n}</span>)}
    </div>
    {/* Rijen */}
    {KEUZE_CRITERIA_16.map(({criterium, bron}, ci) => (
      <div key={ci} style={{display:"grid", gridTemplateColumns:"1fr 68px 68px 68px 68px 68px 68px", gap:4, padding:"5px 0", borderBottom:"1px solid var(--fill-2)", fontSize:11, lineHeight:1.4, alignItems:"center"}}>
        <span>
          {criterium}
          <span style={{display:"block", fontFamily:"var(--mono)", fontSize:8, color:"var(--ink-soft)", marginTop:1}}>{bron}</span>
        </span>
        {KEUZE_SCORES_16[ci].map((score, ri) => (
          <span key={ri} style={{textAlign:"center", fontFamily:"var(--mono)", fontSize:13, fontWeight:"bold", color: SCORE_KLEUR_BAG[score]}}>{score}</span>
        ))}
      </div>
    ))}
    {/* Totaalrij */}
    <div style={{display:"grid", gridTemplateColumns:"1fr 68px 68px 68px 68px 68px 68px", gap:4, padding:"7px 0", borderTop:"2px solid var(--line)", fontFamily:"var(--mono)", fontSize:10, fontWeight:"bold", letterSpacing:"0.08em"}}>
      <span style={{textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--ink-soft)"}}>Totaal</span>
      {KEUZE_TOTALEN_16.map((t,i) => (
        <span key={i} style={{textAlign:"center", color: i === 0 ? "var(--green)" : "var(--ink-soft)"}}>{t}</span>
      ))}
    </div>
  </div>
);

const Step16_Vormonderzoek = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="step" style={{ minHeight: 'auto', padding: '80px 0 120px' }} data-screen-label="16 Vormonderzoek">
      <FrameLabel num="16" name="Vormonderzoek" />
      <div className="step-bg" />
      <div className="step-pin" style={{ position: 'relative', top: 'auto', height: 'auto' }}>

        {/* Linker kolom — tekst */}
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet" />STAP 16 · VORMONDERZOEK</div>
          <h2 className="wf-title">Van alle tastypen<br />naar een draagvorm.</h2>
          <p className="wf-body lg">
            Eerst een breed overzicht: welke tasvormen bestaan er, hoe worden ze gedragen
            en welke past bij de doelgroep? Bucket bag, gusset bag, crescent, fold, tote,
            crossbody, backpack. 
          </p>
          <p className="wf-body">
            Uit de doelgroep kwam naar voren dat de tas ook veel <strong>op de fiets</strong> wordt
            gebruikt. Een crossbody is dan niet de meest comfortabele keuze. Een rugzak of
            de minder gebruikelijke slingback liggen dan beter. 
          </p>
          <p className="wf-body">
            Dit leidde tot het idee om een crossbody te ontwerpen die met een of enkele
            eenvoudige handelingen ombouwt naar een slingback, zodat de tas ook op de rug
            gedragen kan worden. Het ontwerp wordt primair gericht op de crossbody houding,
            omdat dit de meest gebruikelijke manier van dragen is.
          </p>

          {/* Tastypen */}
          <div style={{ marginTop: 16 }}>
            <div className="bag-grid-label">Tastypen</div>
            <div className="bag-type-grid">
              {BAG_TYPES.map((t, i) => (
                  <div
                    key={i}
                  className={`bag-type-card${t.chosen ? ' chosen' : ''}`}
                  style={{ opacity: t.chosen ? 1 : 0.35 }}
                  >
                    <div className="bag-type-name">{t.name}</div>
                    <div className="bag-type-detail">{t.detail}</div>
                  </div>
              ))}
            </div>
          </div>

          {/* Draagwijzen */}
          <div style={{ marginTop: 14 }}>
            <div className="bag-grid-label">Draagwijzen</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {DRAAG_WIJZEN.map((d, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
                    padding: '6px 14px',
                    border: d.chosen ? '1.5px solid var(--thread)' : '1px solid var(--line)',
                    color:  d.chosen ? 'var(--thread)' : 'var(--ink-soft)',
                    background: d.chosen ? 'rgba(241,90,41,0.04)' : 'transparent',
                  }}
                >
                  {d.name}
                  {d.chosen && <span style={{ marginLeft: 6 }}>↗</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Keuzematrix */}
          <KeuzematrixTable16 />
          <div style={{border:"1px solid var(--line-soft)", background:"var(--fill)", padding:"12px 16px", marginTop:12, fontSize:12, lineHeight:1.6}}>
            <span style={{fontFamily:"var(--mono)", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-soft)", display:"block", marginBottom:6}}>Toelichting keuze</span>
            Crossbody scoort het hoogst (+11) en wint op 6 van de 7 criteria. De backpack (+7) is de sterkste concurrent, het verschil zit in ademend draagcomfort: het dichte SDA materiaal laat weinig lucht door, waardoor een tas op de rug warm wordt. De slingback (+6) wordt als secundaire draagwijze meegenomen via een schakelbaar bandsysteem (slingback is gekozen boven een backpack omdat een crossbody net als een slingback maar 1 strap gebruikt in de draagwijze).
          </div>
        </div>

        {/* Rechter kolom — vormonderzoek image */}
        <div className="step-stage reveal-right">
          <img
            src={VORM_BASE + VORM_IMG}
            alt="Vormonderzoek tastypen en draagwijzen"
            style={{ width: '80%', height: '80%', objectFit: 'contain', display: 'block', margin: 'auto' }}
          />
        </div>

      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 17 · SCHETSEN & VORMVERKENNING  —  horizontale drag gallery
══════════════════════════════════════════════════════════════════════════ */

/* Tilt patroon: -3 -1.5 0 +1.5 +3 graden per 5 kaarten */
const CARD_ROTS = [-3, -1.5, 0, 1.5, 3];

/* 3 herhalingen: begin · midden · eind — start in het midden, spring terug aan de rand */
const LOOP_REPS = 3;
const LOOPED_FILES = [...SKETCH_FILES, ...SKETCH_FILES, ...SKETCH_FILES];

const Step17_Schetsen = () => {
  const trackRef    = React.useRef(null);
  const dragging    = React.useRef(false);
  const startX      = React.useRef(0);
  const startScroll = React.useRef(0);
  const moved       = React.useRef(0);

  /* ── Long-press zoom state ── */
  const [zoomedIdx,  setZoomedIdx]  = React.useState(null);
  const pressTimer  = React.useRef(null);
  const pressingIdx = React.useRef(null);

  const cancelPress = () => {
    clearTimeout(pressTimer.current);
    pressingIdx.current = null;
  };

  const dismissZoom = () => {
    setZoomedIdx(null);
    cancelPress();
  };

  /* ── Loop: spring naar midden zodra we te ver naar links/rechts zijn ── */
  const loopCheck = () => {
    const track = trackRef.current;
    if (!track) return;
    const setW = track.scrollWidth / LOOP_REPS;
    if (track.scrollLeft < setW * 0.25) {
      track.scrollLeft += setW;
      startScroll.current += setW;
    } else if (track.scrollLeft > setW * (LOOP_REPS - 1.25)) {
      track.scrollLeft -= setW;
      startScroll.current -= setW;
    }
  };

  /* Start in het midden zodra de track gerenderd is */
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const setW = track.scrollWidth / LOOP_REPS;
    track.scrollLeft = setW; // begin bij set 2 van de 3
  }, []);

  /* ── Mouse drag ── */
  const onMouseDown = (e) => {
    const track = trackRef.current;
    dragging.current    = true;
    moved.current       = 0;
    startX.current      = e.pageX;
    startScroll.current = track.scrollLeft;
    track.classList.add('is-dragging');
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    const dx = e.pageX - startX.current;
    moved.current = Math.abs(dx);
    if (moved.current > 6) cancelPress();
    trackRef.current.scrollLeft = startScroll.current - dx;
    loopCheck();
  };

  const onMouseUp = () => {
    dragging.current = false;
    trackRef.current && trackRef.current.classList.remove('is-dragging');
    cancelPress();
  };

  /* ── Per-card press handlers ── */
  const onCardMouseDown = (e, i) => {
    if (e.button !== 0) return;
    /* i is de index in LOOPED_FILES, normaliseer naar 0..32 */
    const realIdx = i % TOTAL_SKETCHES;
    pressingIdx.current = realIdx;
    pressTimer.current  = setTimeout(() => {
      if (pressingIdx.current === realIdx) setZoomedIdx(realIdx);
    }, 900);
  };

  const onCardTouchStart = (e, i) => {
    startX.current      = e.touches[0].pageX;
    startScroll.current = trackRef.current.scrollLeft;
    moved.current       = 0;
    const realIdx = i % TOTAL_SKETCHES;
    pressingIdx.current = realIdx;
    pressTimer.current  = setTimeout(() => {
      if (pressingIdx.current === realIdx) setZoomedIdx(realIdx);
    }, 900);
  };

  /* ── Touch drag ── */
  const onTouchMove = (e) => {
    const dx = e.touches[0].pageX - startX.current;
    moved.current = Math.abs(dx);
    if (moved.current > 6) cancelPress();
    if (moved.current > 8) e.preventDefault();
    trackRef.current.scrollLeft = startScroll.current - dx;
    loopCheck();
  };

  const onTouchEnd = () => cancelPress();

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => track.removeEventListener('touchmove', onTouchMove);
  }, []);

  /* Escape sluit zoom */
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') dismissZoom(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="sketch-gallery-section" data-screen-label="17 Schetsen">
      <FrameLabel num="17" name="Schetsen &amp; vormverkenning" />

      {/* ── Header ── */}
      <div className="sketch-gallery-header reveal-stagger">
        <span className="sketch-eyebrow">Stap 17 · Schetsen &amp; Vormverkenning</span>
        <h2 className="sketch-h2">30 schetsen,<br /><em>twee vormen over.</em></h2>
        <p className="sketch-sub">
          De selectie is gebaseerd op drie criteria: maakbaarheid in het atelier (eenvoudige, rechte naden), tolerantie voor materiaalvariatie (werkt ook met kleinere restlappen) en functionele haalbaarheid voor de gekozen doelgroep. Vormen met curves, complexe constructies of afhankelijkheid van grote aaneengesloten lappen zijn in deze fase afgevallen.
        </p>
        <p className="sketch-sub" style={{ marginTop: 6 }}>
          Scroll snel langs alle schetsen, of sleep de kaarten een voor een door.
        </p>
        <div className="sketch-drag-hint">
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
            <path d="M2 7h24M18 2l6 5-6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          sleep om te bladeren · houd ingedrukt om te vergroten
        </div>
      </div>

      {/* ── Draggable card strip (3× geloopt) ── */}
      <div
        ref={trackRef}
        className="sketch-gallery-track"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {LOOPED_FILES.map((f, i) => {
          const realIdx = i % TOTAL_SKETCHES;
          const rot     = CARD_ROTS[realIdx % CARD_ROTS.length];
          return (
            <div
              key={i}
              className="sketch-card"
              style={{ '--rot': `${rot}deg` }}
              onMouseDown={(e) => onCardMouseDown(e, i)}
              onMouseUp={onMouseUp}
              onTouchStart={(e) => onCardTouchStart(e, i)}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={SKETCH_BASE + f}
                alt={`Schets ${realIdx + 1}`}
                className="sketch-card-img"
                loading="lazy"
                draggable="false"
              />
              <div className="sketch-card-num">{String(realIdx + 1).padStart(2, '0')}</div>
            </div>
          );
        })}
      </div>

      {/* ── Zoom overlay ── */}
      {zoomedIdx !== null && (
        <div
          className="sketch-zoom-overlay is-open"
          onMouseUp={dismissZoom}
          onTouchEnd={dismissZoom}
        >
          <div className="sketch-zoom-inner">
            <img
              src={SKETCH_BASE + SKETCH_FILES[zoomedIdx]}
              alt={`Schets ${zoomedIdx + 1} vergroot`}
              className="sketch-zoom-img"
              draggable="false"
            />
            <div className="sketch-zoom-label">
              {String(zoomedIdx + 1).padStart(2, '0')} / {TOTAL_SKETCHES} · laat los om te sluiten
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 18 · VORMTEST  —  kartonnen mockup + maten reveal
══════════════════════════════════════════════════════════════════════════ */
const Step18_Vormtest = () => {
  const ref = React.useRef(null);
  const p   = useScrollProgress(ref);

  const photo2Op  = slice(p, 0.20, 0.40);
  const photo3Op  = slice(p, 0.40, 0.60);
  const maat1Op   = slice(p, 0.28, 0.42);
  const maat2Op   = slice(p, 0.44, 0.58);
  const maat3Op   = slice(p, 0.58, 0.72);
  const conclusOp = slice(p, 0.76, 0.94);

  return (
    <section ref={ref} className="step tall" data-screen-label="18 Vormtest">
      <FrameLabel num="18" name="Vormtest — kartonnen mockup op het lichaam" />
      <div className="step-bg" />
      <div className="step-pin">
        {/* Rechter kolom eerst (stage) zodat tekst links staat */}
        <div className="step-content reveal-stagger">
          <div className="step-num"><span className="bullet" />STAP 18 · VORMTEST</div>
          <h2 className="wf-title">Karton op het lichaam:<br />welke vorm past?</h2>
          <p className="wf-body lg">
            Beide basisvormen werden uitgetest als kartonnen mock-up, gedragen in
            crossbody en slingback positie. Zo werd getoetst hoe de tas zich gedraagt
            bij beweging, welke proporties kloppen en of een laptop van 14" past.
          </p>

          {/* Maatvoering onthulling */}
          <div className="bag-measurements" style={{ marginTop: 8 }}>
            <div className="bag-grid-label">Vastgestelde maatvoering</div>
            {[
              { val: '32 cm', lbl: 'breedte · past laptop 14"',      op: maat1Op },
              { val: '26 cm', lbl: 'hoogte · compact op het lichaam', op: maat2Op },
              { val: '10 cm',  lbl: 'diepte · genoeg voor daginhoud',  op: maat3Op },
            ].map(({ val, lbl, op }, i) => (
              <div key={i} className="bag-maat-item"
                style={{ opacity: op, transform: `translateX(${(1 - op) * -14}px)`, transition: 'none' }}>
                <span className="bag-maat-val">{val}</span>
                <span className="bag-maat-label">{lbl}</span>
              </div>
            ))}
          </div>

          {/* Conclusie */}
          <div
            style={{ opacity: conclusOp, transform: `translateY(${(1 - conclusOp) * 12}px)`, transition: 'none', marginTop: 16, borderLeft: '3px solid var(--green)', paddingLeft: 14 }}
          >
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--green)', marginBottom: 6 }}>CONCLUSIE VORMTEST</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              Geen van beide basisvormen voldoet afzonderlijk. De vierkante basis past
              de laptop en biedt aan de onderkant stabiliteit in slingback, de brede onderkant voorkomt
              draaien op het lichaam. Doorgetrokken naar boven wordt de tas echter te
              groot. De halve maan volgt de lichaamscontour in crossbody, maar biedt
              onvoldoende ruimte voor dagelijkse inhoud. De oplossing is een
              combinatievorm: vierkante basis met afgeronde bovenkant. De radius
              verkleint het volume waar de tas het lichaam raakt, terwijl de brede
              onderkant stabiel en functioneel blijft. Beide basisvormen zijn unisex,
              maar vierkant leunt mannelijk en halve maan vrouwelijk, de combinatie
              neutraliseert dit.
            </p>
          </div>
        </div>

        {/* Stage — spugmodel fotogalerij */}
        <div className="step-stage">
          <PhotoGallery base={SPUG_BASE} files={SPUG_FILES} alt="Spugmodel"
            />
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 19 · PROTOTYPE 1  —  scroll-driven feedbacklijst
══════════════════════════════════════════════════════════════════════════ */
const Step19_Prototype1 = () => {
  const ref = React.useRef(null);
  const p   = useScrollProgress(ref);

  const itemCount  = PROTO1_FEEDBACK.length;
  const itemStep   = 0.75 / itemCount;
  const conclusOp  = slice(p, 0.80, 0.96);

  return (
    <section ref={ref} className="step" style={{ minHeight: '520vh' }} data-screen-label="19 Prototype 1">
      <FrameLabel num="19" name="Prototype 1 — eerste naaiversie" />
      <div className="step-bg" />
      <div className="step-pin">

        {/* Linker kolom — tekst + feedbacklijst */}
        <div className="step-content">
          <div className="step-num"><span className="bullet" />STAP 19 · PROTOTYPE 1</div>
          <h2 className="wf-title">Eerste naaiversie:<br />wat werkt nog niet?</h2>
          <p className="wf-body" style={{ marginBottom: 20 }}>
            Het eerste prototype laat zien wat op papier klopt maar in de
            praktijk schuurt. Scroll door de bevindingen, elke foto leidt
            direct tot een aanpassing in de volgende versie.
          </p>

          <div className="bag-feedback-list">
            {PROTO1_FEEDBACK.map((item, i) => {
              const start = i * itemStep;
              const op    = slice(p, start, start + itemStep * 0.65);
              return (
                <div
                  key={i}
                  className="bag-feedback-item bag-feedback-item--expanded"
                  style={{ opacity: op, transform: `translateY(${(1 - op) * 16}px)`, transition: 'none' }}
                >
                  <div className="bag-fb-header">
                  <span className="bag-fb-cat">{item.cat}</span>
                    <span className="bag-fb-pve">{item.pve}</span>
                  </div>
                  <span className="bag-fb-text">{item.text}</span>
                  <span className="bag-fb-why">{item.why}</span>
                  <div className="bag-fb-fix">
                    <span className="bag-fb-fix-label">→</span>
                    <span>{item.fix}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ opacity: conclusOp, transform: `translateY(${(1 - conclusOp) * 10}px)`, transition: 'none', marginTop: 20, borderLeft: '3px solid var(--green)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--green)', marginBottom: 6 }}>CONCLUSIE PROTOTYPE 1</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              Drie kernproblemen bepalen de overgang naar prototype 2: de vorm was te
              hoekig voor de slingback-wissel (F.3/A.3), het verstelsysteem functioneerde
              niet naar ontwerp (F.3/F.6), en de patronen misten een stikrandmarge
              waardoor de tas overall kleiner uitviel dan bedoeld (M.4).
              Alle zeven bevindingen zijn verwerkt in de volgende versie.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.55, marginTop: 10, color: 'var(--ink-soft)', borderTop: '1px solid var(--line-soft)', paddingTop: 10 }}>
              <strong style={{ color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Aanvaard compromis</strong><br />
              Het basisconcept van een tas, twee draagwijzen is ondanks de problemen behouden. Overwogen alternatief: twee losse tassen (een crossbody, een slingback). Verworpen omdat dat de kern van het ontwerp zou loslaten en de productiecomplexiteit zou verdubbelen. De keuze om door te itereren op dit concept was een bewuste designbeslissing, geen gebrek aan alternatief.
            </p>
          </div>
        </div>

        {/* Rechter kolom — prototype 1 fotogalerij */}
        <div className="step-stage reveal-right">
          <PhotoGallery base={PROTO1_BASE} files={PROTO1_FILES} alt="Prototype 1"
            />
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 20 · PROTOTYPE 2  —  fixes + bevindingen + conclusie
══════════════════════════════════════════════════════════════════════════ */
const Step20_Prototype2 = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="step" data-screen-label="20 Prototype 2" style={{minHeight:"480vh"}}>
      <FrameLabel num="20" name="Prototype 2 — verbeteringen en nieuwe bevindingen" />
      <div className="step-bg" />
      <div className="step-pin">

        {/* Linker kolom */}
        <div className="step-content reveal-stagger">
          <div className="step-num"><span className="bullet" />STAP 20 · PROTOTYPE 2</div>
          <h2 className="wf-title">Versie 2: wat werkt,<br />wat nog niet?</h2>
          <p className="wf-body" style={{ marginBottom: 16 }}>
            De bevindingen van prototype 1 zijn systematisch doorgevoerd.
            De vorm werkt nu goed. Maar prototype 2 brengt nieuwe inzichten
            aan het licht, met name rond het verstelsysteem.
          </p>

          {/* Wat werkte */}
          <div style={{ marginBottom: 16 }}>
            <div className="bag-grid-label">Wat werkte ✓</div>
            {[
              "Vorm is beter, radius en bredere onderkant werken",
              "Inhoud past nu beter, laptop 14\" past",
              "Tas is verstelbaar voor lengte",
              "1 cm naadmarge verwerkt in alle patronen",
            ].map((t, i) => (
              <div key={i} className="bag-fix-item">
                  <span className="bag-fix-check">✓</span>
                <span>{t}</span>
                </div>
            ))}
          </div>

          {/* Bevindingen proto 2 */}
          <div>
            <div className="bag-grid-label">Bevindingen prototype 2</div>
            {PROTO2_FEEDBACK.map((item, i) => (
              <div key={i} className="bag-feedback-item bag-feedback-item--expanded">
                <div className="bag-fb-header">
                  <span className="bag-fb-cat">{item.cat}</span>
                  <span className="bag-fb-pve">{item.pve}</span>
                </div>
                <span className="bag-fb-text">{item.text}</span>
                {item.sub && (
                  <ul style={{ margin: '3px 0 3px 12px', padding: 0, listStyle: 'disc' }}>
                    {item.sub.map((s, j) => (
                      <li key={j} style={{ fontSize: 11, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{s}</li>
                    ))}
                  </ul>
                )}
                <span className="bag-fb-why">{item.why}</span>
                <div className="bag-fb-fix">
                  <span className="bag-fb-fix-label">→</span>
                  <span>{item.fix}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusie */}
          <div style={{ marginTop: 20, borderLeft: '3px solid var(--thread)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--thread)', marginBottom: 6 }}>CONCLUSIE PROTOTYPE 2</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              De vorm is nu goed. Het kernprobleem van prototype 2 is het
              verstelsysteem: het voelt niet als integraal onderdeel van de tas
              maar als een latere toevoeging (A.2/F.3). Daarnaast ontbreekt een
              haaksysteem voor de slingback functie (F.9) en is het materiaalhergebruik
              nog beperkt tot grote lappen (D.1/D.5). Deze drie punten
              sturen de ontwikkeling van prototype 3.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.55, marginTop: 10, color: 'var(--ink-soft)', borderTop: '1px solid var(--line-soft)', paddingTop: 10 }}>
              <strong style={{ color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Aanvaarde compromissen</strong><br />
              Het verstelsysteem is bewust nog niet herontworpen in deze versie: eerst het basisconcept valideren, dan pas het systeem integreren. Het patchwork patroon voor kleine restlappen verhoogt de productietijd, maar materiaalbenutting (D.1) weegt zwaarder dan productie efficiëntie. Dat is een bewuste keuze, niet een onopgemerkt nadeel.
            </p>
          </div>
        </div>

        {/* Rechter kolom — prototype 2 fotogalerij */}
        <div className="step-stage">
          <PhotoGallery base={PROTO2_BASE} files={PROTO2_FILES} alt="Prototype 2" />
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 21 · PROTOTYPE 3  —  bevindingen + sluitingen + conclusie
══════════════════════════════════════════════════════════════════════════ */
const Step21_Prototype3 = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="step" data-screen-label="21 Prototype 3" style={{minHeight:"480vh"}}>
      <FrameLabel num="21" name="Prototype 3 — haaksysteem + bevindingen" />
      <div className="step-bg" />
      <div className="step-pin">

        {/* Linker kolom */}
        <div className="step-content reveal-stagger">
          <div className="step-num"><span className="bullet" />STAP 21 · PROTOTYPE 3</div>
          <h2 className="wf-title">Versie 3: haaksysteem<br />en materiaalvariatie.</h2>
          <p className="wf-body lg">
            In het derde prototype is een haaksysteem geïntegreerd voor de
            crossbody ⇄ slingback wissel. De ritsopening loopt over de volle
            breedte. Twee S&amp;H reststoffen (donkergrijs + brique/terra) laten
            de materiaalvariatie zien die de collectie kan bieden.
          </p>

          {/* Wat werkte */}
          <div style={{ marginBottom: 16 }}>
            <div className="bag-grid-label">Wat werkte ✓</div>
            {[
              "Dikkere strap (5 cm): comfortabeler op schouder",
              "Vakjes binnenkant: fijn, veel opslagmogelijkheden",
              "Kleinere stukken restmateriaal: concept werkt",
            ].map((t, i) => (
              <div key={i} className="bag-fix-item">
                <span className="bag-fix-check">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>

          {/* Sluitingen vergelijking */}
          <div style={{ marginBottom: 16 }}>
            <div className="bag-grid-label">Sluitingen, vergeleken in deze fase</div>
            <div className="bag-type-grid" style={{ marginTop: 8 }}>
              {SLUIT_OPTIONS.map((s, i) => (
                <div key={i} className={`bag-type-card${s.chosen ? ' chosen' : ''}`}>
                    <div className="bag-type-name">{s.name}</div>
                    <div className="bag-type-detail">{s.detail}</div>
                  </div>
              ))}
            </div>
          </div>

          {/* Bevindingen proto 3 */}
          <div>
            <div className="bag-grid-label">Bevindingen prototype 3</div>
            {PROTO3_FEEDBACK.map((item, i) => (
              <div key={i} className="bag-feedback-item bag-feedback-item--expanded">
                <div className="bag-fb-header">
                  <span className="bag-fb-cat">{item.cat}</span>
                  <span className="bag-fb-pve">{item.pve}</span>
                </div>
                <span className="bag-fb-text">{item.text}</span>
                {item.sub && (
                  <ul style={{ margin: '3px 0 3px 12px', padding: 0, listStyle: 'disc' }}>
                    {item.sub.map((s, j) => (
                      <li key={j} style={{ fontSize: 11, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{s}</li>
                    ))}
                  </ul>
                )}
                <span className="bag-fb-why">{item.why}</span>
                <div className="bag-fb-fix">
                  <span className="bag-fb-fix-label">→</span>
                  <span>{item.fix}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusie */}
          <div style={{ marginTop: 20, borderLeft: '3px solid var(--thread)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--thread)', marginBottom: 6 }}>CONCLUSIE PROTOTYPE 3</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              Het haaksysteem is functioneel maar niet universeel, het werkt
              niet hands-free en verschilt per lichaamsbouw (F.6/F.9). Het
              verstelsysteem is nog steeds niet geïntegreerd (A.2). Voor v4
              worden beide samengevoegd tot een systeem, het haaksysteem
              vervangen door een click-systeem en het patroon organischer
              gemaakt voor de maakbaarheid in het atelier (M.2/M.8).
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.55, marginTop: 10, color: 'var(--ink-soft)', borderTop: '1px solid var(--line-soft)', paddingTop: 10 }}>
              <strong style={{ color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Keuze sluitingssysteem</strong><br />
              Rits gekozen boven magneet (te onveilig voor fietsgebruik), gesp (te complex bij één hand), klittenband (slijtage bij dagelijks gebruik) en open top (onveilig). De rits is de meest universele optie: beperktere openingshoek dan een magneet of open top.<br /><br />
              <strong style={{ color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Haaksysteem → click-systeem</strong><br />
              Het 3D-geprinte haaksysteem werkte, maar niet universeel (verschilt per lichaamsbouw) en was duurder dan een ingekocht click-systeem. Het compromis: minder volledig eigen ontwerp, maar betrouwbaarder en goedkoper in serieproductie.
            </p>
          </div>
        </div>

        {/* Rechter kolom — prototype 3 fotogalerij */}
        <div className="step-stage">
          <PhotoGallery base={PROTO3_BASE} files={PROTO3_FILES} alt="Prototype 3" />
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 22 · STAKEHOLDER VALIDATIE  —  Henri interview 2 + Jorg update
══════════════════════════════════════════════════════════════════════════ */
const Step22_Stakeholders = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="22 Stakeholder validatie" style={{minHeight:"480vh"}}>
      <FrameLabel num="22" name="Stakeholder validatie: Henri &amp; Jorg" />
      <div className="step-bg" />
      <div className="step-pin" style={{ gridTemplateColumns: '1fr 1fr', gap: 40 }}>

        {/* Henri */}
        <div className="step-content reveal-stagger">
          <div className="step-num"><span className="bullet" />STAP 22 · STAKEHOLDER VALIDATIE</div>
          <h2 className="wf-title">Validatie door<br />Henri &amp; Jorg.</h2>
          <p className="wf-body lg">
            Na prototype 3 is het ontwerp getoetst bij Henri (retailinformant) en
            Jorg ( Sit &amp; Heat). Beide gesprekken bevestigen de richting
            en geven concrete input voor prototype 4.
          </p>

          <div style={{ marginTop: 16 }}>
            <div className="bag-grid-label">Henri, interview 2 · prototype 3 getoond</div>
            {[
              { label: "Oordeel", text: "Positief: 'Ik vind het heel leuk, ik denk wel dat we dit kunnen verkopen'", ok: true },
              { label: "Vorm", text: "Banaancurve werkt. Fijn dat de tas rechtop blijft staan.", ok: true },
              { label: "Materiaal", text: "SDA is waterbestendig en UV bestendig, duurzaamheid als verkooppunt.", ok: true },
              { label: "Branding", text: "Hard plastic tag/logo nodig voor herkenbaarheid op straat. Vergelijkbaar met de Sit & Heat kussens. → A.4", ok: true },
              { label: "Hardware kleur", text: "Voorkeur voor tonale hardware (rits/gespen matchen stofkleur) → A.6 (wens). Niet realistisch per tas vanwege materiaalvariatie. Alternatief: alle hardware in een egale kleur.", ok: null },
              { label: "Klittenband", text: "Afgewezen: slijt, niet 'fraai'. Bevestigt keuze voor click systeem.", ok: false },
              { label: "Prijs", text: "Verkoopbaar in segment €60–100. Retailmarge: 2,5×. → E.2", ok: true },
              { label: "Focus", text: "Eerst een maat perfect maken, dan uitbreiden.", ok: true },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--line-soft)', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: r.ok === true ? 'var(--green)' : r.ok === false ? 'var(--thread)' : 'var(--ink-soft)', minWidth: 72, paddingTop: 2, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--ink)' }}>{r.text}</span>
                </div>
              ))}
            </div>
          </div>

        {/* Jorg + doorvertaling */}
        <div className="step-content reveal-stagger" style={{ paddingTop: 60 }}>
          <div style={{ marginBottom: 24 }}>
            <div className="bag-grid-label">Jorg, tussentijdse update</div>
            {[
              { label: "Voortgang", text: "Positief: 'Je bent goed bezig'", ok: true },
              { label: "Branding", text: "Eens met Henri: logo/tag voor herkenbaarheid nodig. → A.4", ok: true },
              { label: "Prototype 4", text: "Benieuwd naar v4, ver genoeg voor inkoop onderdelen.", ok: true },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--line-soft)', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green)', minWidth: 72, paddingTop: 2, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--ink)' }}>{r.text}</span>
              </div>
            ))}
        </div>

          <div style={{ borderLeft: '3px solid var(--green)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--green)', marginBottom: 8 }}>DOORVERTALING NAAR V4</div>
            {[
              "D ringetje aan voorkant als herkenningspunt (A.4/F.3)",
              "Alle hardware in een egale kleur, samenhang ongeacht stofkleur (A.6)",
              "Bevestiging systeem bevesteging, klittenband afgewezen door Henri",
              "Focus op een maat: crossbody tas volledig afmaken voor oplevering",
            ].map((t, i) => (
              <div key={i} className="bag-fix-item" style={{ marginBottom: 4 }}>
                <span className="bag-fix-check">→</span>
                <span style={{ fontSize: 12 }}>{t}</span>
        </div>
            ))}
      </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 23 · PROTOTYPE 4  —  huidige staat + bekende aanpassingen
══════════════════════════════════════════════════════════════════════════ */
const Step23_Prototype4 = () => {
  const ref = useReveal();
  return (
    <section className="step" ref={ref} data-screen-label="23 Prototype 4">
      <FrameLabel num="23" name="Prototype 4: in ontwikkeling" />
      <div className="step-bg" />
      <div className="step-pin">
        <div className="step-content reveal-stagger">
          <div className="step-num"><span className="bullet" />STAP 23 · PROTOTYPE 4</div>
          <h2 className="wf-title">Prototype 4:<br />een geïntegreerd systeem.</h2>
          <p className="wf-body lg">
            Op basis van de bevindingen van prototype 3 en de stakeholder validatie
            zijn de volgende aanpassingen doorgevoerd. De buitenhoes en het nieuwe
            verstelsysteem zijn klaar. Hierna volgt de ingekochte
            hardware.
          </p>

          <div style={{ marginBottom: 16 }}>
            <div className="bag-grid-label">Doorgevoerde aanpassingen + redenering</div>
            {[
              {
                cat: "Hardware",
                text: "2 straps → 1 geïntegreerde strap (A.2)",
                why: "In v2 en v3 voelde het verstelsysteem steeds als een toevoeging, niet als onderdeel van de tas. Overwogen: (a) koppelstuk behouden is te complex voor atelier; (b) vaste maten S/M/L beperkt universaliteit. Gekozen voor een strap: simpelste constructie, minste onderdelen, past bij ateliereis M.2."
              },
              {
                cat: "Hardware",
                text: "Click-systeem ingekocht, 3D-print vervangen (F.6/E.4)",
                why: "Het 3D-geprinte haaksysteem was functioneel maar werkte niet universeel (verschilt per lichaamsbouw) en was duurder. Compromis: minder volledig eigen ontwerp, maar betrouwbaarder en goedkoper in serieproductie."
              },
              {
                cat: "Hardware",
                text: "D-ring aan voorkant als herkenningspunt (F.3/A.4)",
                why: "Standaardpositie bij crossbody tassen, herkenbaarheid en gebruiksgemak bij het omschakelen cross↔sling. Geen noemenswaardige alternatieven: dit volgt de conventie in het tassenontwerp."
              },
              {
                cat: "Patroon",
                text: "Organischer patroon met meer foutmarge (M.2/M.8)",
                why: "Atelier naaisters hebben wisselende ervaring. Strak patroon verhoogt foutmarge en productietijd. Compromis: iets meer materiaalverspilling per patroon, maar het atelier kan zelfstandiger werken."
              },
              {
                cat: "Inkoop",
                text: "Rits, band, click-systeem, lengteclips, D-ring ingekocht",
                why: "Niet uit restmateriaal te produceren. Compromis: het percentage restmateriaal per tas daalt, maar de functionele betrouwbaarheid stijgt. Eis D.1 (min. 70% restmateriaal) wordt nog steeds gehaald."
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid var(--line-soft)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green)', minWidth: 60, paddingTop: 2, flexShrink: 0 }}>{item.cat}</span>
                  <span style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--ink)', fontWeight: 500 }}>{item.text}</span>
                </div>
                <p style={{ fontSize: 11, lineHeight: 1.55, color: 'var(--ink-soft)', margin: '0 0 0 70px' }}>{item.why}</p>
              </div>
            ))}
          </div>

          <div style={{ padding: '10px 14px', border: '1px dashed var(--line)', background: 'var(--fill)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--ink-mute)', textTransform: 'uppercase', marginBottom: 4 }}>Status</div>
            <p style={{ fontSize: 12, margin: 0, lineHeight: 1.6 }}>
              Buitenhoes + verstelsysteem gereed. Binnenhoes volgt.
              Daarna volledig testen aan het PvE.
            </p>
          </div>
        </div>
        <div className="step-stage" style={{display:"flex", flexDirection:"column", gap:8, overflow:"auto"}}>
          {["20260527_135510.jpg","20260527_135522.jpg"].map((f,i) => (
            <img key={i}
              src={`foto%27s%20en%20animaties%20website/proces%20tas/tas%20prototypes/v4/${f}`}
              alt={`Prototype 4 foto ${i+1}`}
              style={{width:"100%", display:"block", objectFit:"cover"}}
            />
          ))}
          <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:4, marginTop:4}}>
            {["SCHETS0527_000590_Page_1.jpg","SCHETS0527_000590_Page_2.jpg","SCHETS0527_2_000595_Page_1.jpg"].map((f,i) => (
              <img key={i}
                src={`foto%27s%20en%20animaties%20website/proces%20tas/tas%20prototypes/v4/${f}`}
                alt={`Prototype 4 schets ${i+1}`}
                style={{width:"100%", display:"block", objectFit:"cover"}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 24 · SOCIAAL ATELIER  —  Blueview interview + definitief PvE
══════════════════════════════════════════════════════════════════════════ */
const Step24_SociaalAtelier = () => {
  const ref = useReveal();

  const BLUEVIEW_ITEMS = [
    { cat: "Werkwijze",    text: "Blueview werkt op basis van een compleet aangeleverd pakket: stof, garen en hardware worden niet door hen ingekocht.", pve: "M.6" },
    { cat: "Knippen",      text: "Het atelier kan zelf knippen (in overleg) of met voorgesneden materiaal werken.", pve: "M.1" },
    { cat: "Vakexpert",    text: "Assad is de vaste naaier en vakexpert, hij begeleidt andere medewerkers en geeft constructieadvies.", pve: "M.2" },
    { cat: "Ervaring",     text: "Blueview heeft eerder tassen van restmateriaal (banners) gemaakt en maakt nu handschoenen van productieoverschotten, het project past in hun werkwijze.", pve: "M.1" },
    { cat: "Snijlogica",   text: "De zero waste snijlogica met meerdere vlakken en kleinere stukken stof werd positief ontvangen.", pve: "D.4" },
    { cat: "Kleuradvies",  text: "Assad geeft aan behoefte te hebben aan een kleurcombinatie overzicht, variatie is gewenst, maar binnen een logisch kleuradvies.", pve: "M.8 + O.5" },
    { cat: "Planning",     text: "Mallen en een stappenplan moeten 2 tot 4 weken na het eerste interview worden aangeleverd voor een eerste proefproductie.", pve: "O.5" },
    { cat: "Aanspreekpunt", text: "Jan Horendonk (bedrijfsleider) is het aanspreekpunt voor praktische afspraken; levertijden en logistiek per mail.", pve: "—" },
    { cat: "Ontvangst",    text: "Alle aanwezigen (directeur, Assad, Jan) reageerden enthousiast op het concept en het prototype.", pve: "—" },
    { cat: "Kostprijs",    text: "Productiekosten per tas zijn nog niet besproken, worden vastgesteld in een vervolgafspraak.", pve: "E.1" },
    { cat: "Machines",     text: "Max. 10 lagen stof (machinelimiet). Alle snijkanten afgewerkt vereist.", pve: "M.3 + M.5" },
    { cat: "Naadmarge",    text: "Atelier werkstandaard: 1 cm naadwaarde (voetje naaimachine). Toegepast vanaf v1 patronen.", pve: "M.4" },
  ];

  return (
    <section className="step tall" ref={ref} data-screen-label="24 Sociaal Atelier">
      <FrameLabel num="24" name="Sociaal Atelier Blueview interview" />
      <div className="step-bg" />
      <div className="step-pin" style={{ height: 'auto', minHeight: '80vh', alignItems: 'flex-start', paddingTop: '10vh', paddingBottom: '6vh' }}>

        {/* Linker kolom */}
        <div className="step-content reveal-stagger">
          <div className="step-num"><span className="bullet" />STAP 24 · SOCIAAL ATELIER</div>
          <h2 className="wf-title">Blueview Apeldoorn:<br />maakbaarheid als eis.</h2>
          <p className="wf-body lg">
            De tas wordt geproduceerd door Blueview, een sociaal atelier in Apeldoorn.
            Stappen moeten herhaalbaar zijn voor naaisters met variërende ervaring,
            het patroon moet tolerant zijn voor kleine afwijkingen en materialen
            worden aangeleverd als reststof. Het eerste interview leverde concrete
            productie eisen op die zijn verwerkt in het definitief PvE.
          </p>

          {/* Interview bevindingen */}
          <div style={{ marginTop: 8 }}>
            <div className="bag-grid-label">Bevindingen interview Blueview</div>
            {BLUEVIEW_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 50px', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--line-soft)', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--thread)', paddingTop: 2 }}>{item.cat}</span>
                <span style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--ink)' }}>{item.text}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--green)', textAlign: 'right', paddingTop: 2 }}>{item.pve}</span>
              </div>
            ))}
          </div>

          {/* Definitief PvE */}
          <div style={{ marginTop: 20, borderLeft: '3px solid var(--green)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--green)', marginBottom: 6 }}>DEFINITIEF PvE</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: '0 0 12px' }}>
              De bevindingen uit de prototypefase en dit Blueview interview hebben
              geleid tot het definitief PvE (v2). Nieuwe eisen t.o.v. het voorlopig PvE:
              1 cm naadwaarde (M.4), max. 10 lagen stof (M.3), afgewerkte snijkanten (M.5)
              en hardware aanlevering door de ontwerper (M.6).
            </p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); const el = document.querySelector('[data-step-num="25"]'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--green)', textDecoration: 'none',
                borderBottom: '1px solid var(--green)', paddingBottom: 2,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              Stap 25 Definitief PvE
            </a>
          </div>

          <div style={{ marginTop: 14, padding: '12px 16px', border: '1px dashed var(--line)', background: 'var(--paper)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--ink-mute)', textTransform: 'uppercase', marginBottom: 6 }}>Vervolgafspraak gepland</div>
            <p style={{ fontSize: 13, margin: 0, lineHeight: 1.6 }}>
              Productiekosten per tas worden vastgesteld in het tweede gesprek.
              Mallen en stappenplan worden 3 tot 4 weken na dit interview aangeleverd
              voor een eerste proefproductie.
            </p>
          </div>
        </div>

        {/* Rechter kolom — logo + atelierfoto */}
        <div className="step-stage" style={{ flexDirection: 'column', gap: 16, alignItems: 'stretch', justifyContent: 'flex-start' }}>
          <img
            src="foto%27s%20en%20animaties%20website/Blueview%20Logo.jpeg"
            alt="Blueview logo"
            style={{ width: '100%', objectFit: 'contain', alignSelf: 'flex-start' }}
          />
          <img
            src="foto%27s%20en%20animaties%20website/UitlegGevenAtelierMedewerker.jpg"
            alt="Berend legt uit aan ateliermedewerker hoe de tas in elkaar zit"
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>

      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   STAP 25 · DEFINITIEF PROGRAMMA VAN EISEN
══════════════════════════════════════════════════════════════════════════ */
/* helper: status badge config */
const PVE_STATUS_CFG = {
  voldaan: { label: "Voldaan",      bg: "var(--green)",   fg: "#fff" },
  deels:   { label: "Deels",        bg: "var(--thread)",  fg: "#fff" },
  gepland: { label: "Gepland (juni)", bg: "var(--fill-2)", fg: "var(--ink-soft)" },
};

const ToetsStatusBadge = ({ status }) => {
  const cfg = PVE_STATUS_CFG[status] || PVE_STATUS_CFG.gepland;
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.1em',
      textTransform: 'uppercase', whiteSpace: 'nowrap',
      background: cfg.bg, color: cfg.fg,
      padding: '3px 6px', lineHeight: 1,
    }}>{cfg.label}</span>
  );
};

const PvEToetsingstabel = () => {
  /* Bouw lookup: nr → toetsing row */
  const toetsMap = {};
  (window.PVE_TOETSING || []).forEach(t => { toetsMap[t.nr] = t; });

  const counts = { voldaan: 0, deels: 0, gepland: 0 };
  (window.PVE_TOETSING || []).forEach(t => { if (counts[t.status] !== undefined) counts[t.status]++; });
  const total = counts.voldaan + counts.deels + counts.gepland;

  return (
    <div style={{ marginTop: 48 }}>
      {/* Header */}
      <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 20, marginBottom: 20 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 8 }}>
          O.3 · TOETSINGSTABEL STAND VAN ZAKEN BIJ INLEVERING 1 JUNI 2026
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0, maxWidth: '60ch' }}>
          Onderstaande tabel toont per eis en wens de huidige status. <strong style={{color:'var(--ink)'}}>Voldaan</strong> is aangetoond in het verslag. <strong style={{color:'var(--thread)'}}>Deels</strong> is in gang maar nog niet formeel gevalideerd. <strong style={{color:'var(--ink)'}}>Gepland (juni)</strong> wordt uitgevoerd in de periode tot de eindzitting op 30 juni.
        </p>
        {/* Teller */}
        <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
          {Object.entries(counts).map(([k, v]) => {
            const cfg = PVE_STATUS_CFG[k];
            return (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 10, height: 10, background: cfg.bg, border: k === 'gepland' ? '1px solid var(--line-soft)' : 'none', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>
                  {cfg.label}: <strong style={{color:'var(--ink)'}}>{v}/{total}</strong>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabel per categorie */}
      {DEFINITIEF_PVE.map((cat, ci) => (
        <div key={ci} style={{ marginBottom: 20 }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: cat.kleur,
            borderBottom: `1px solid ${cat.kleur}`, paddingBottom: 4, marginBottom: 4,
          }}>
            {cat.cat}
          </div>
          {/* Kolomhoofden */}
          <div style={{
            display: 'grid', gridTemplateColumns: '44px 90px 1fr 1.6fr',
            gap: 8, padding: '3px 0', borderBottom: '1px solid var(--fill-2)',
            fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--ink-mute)',
          }}>
            <span>Nr.</span><span>Status</span><span>Eis / Wens</span><span>Toelichting / bewijs</span>
          </div>
          {cat.rows.map((r, ri) => {
            const toets = toetsMap[r.nr] || { status: 'gepland', bewijs: '—' };
            return (
              <div key={ri} style={{
                display: 'grid', gridTemplateColumns: '44px 90px 1fr 1.6fr',
                gap: 8, padding: '7px 0', borderBottom: '1px solid var(--fill-2)',
                fontSize: 11, lineHeight: 1.45, alignItems: 'start',
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: cat.kleur, fontWeight: 500 }}>{r.nr}</span>
                <ToetsStatusBadge status={toets.status} />
                <span style={{ color: 'var(--ink)' }}>{r.eis}</span>
                <span style={{ color: 'var(--ink-soft)', fontSize: 10, lineHeight: 1.5 }}>{toets.bewijs}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const Step25_DefinitiefPvE = () => {
  const ref = useReveal();
  const eisCount  = DEFINITIEF_PVE.reduce((n, c) => n + c.rows.filter(r => r.t === "Eis").length, 0);
  const wensCount = DEFINITIEF_PVE.reduce((n, c) => n + c.rows.filter(r => r.t === "Wens").length, 0);

  return (
    <section ref={ref} className="step tall" data-screen-label="25 Definitief PvE">
      <FrameLabel num="25" name="Definitief Programma van Eisen" />
      <div className="step-bg" />
      <div className="step-pin">

        {/* Linker kolom — sticky intro */}
        <div className="step-content reveal-stagger reveal-left">
          <div className="step-num"><span className="bullet" />STAP 25 · DEFINITIEF PvE</div>
          <h2 className="wf-title">Toetsingskader<br />voor het ontwerp.</h2>
          <p className="wf-body lg">
            Opgesteld na de prototypefase en het Blueview interview.
            Bevat {eisCount} eisen en {wensCount} wensen, elk met een
            meetbaar testcriterium en traceerbare bron.
          </p>
          <p className="wf-body" style={{ marginTop: 8 }}>
            Eisen zijn verplichte randvoorwaarden. Wensen worden nagestreefd
            maar vormen geen uitsluitingscriterium.
          </p>

          <div style={{ marginTop: 20, borderLeft: '3px solid var(--green)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--green)', marginBottom: 8 }}>GEBRUIK ALS TOETSINGSINSTRUMENT</div>
            <ol style={{ fontSize: 12, lineHeight: 1.8, margin: 0, paddingLeft: 16 }}>
              <li><strong>Conceptkeuze</strong>  keuzematrix op basis van eisen</li>
              <li><strong>Prototypeevaluatie</strong>  toetsingstabel per iteratie (V1–V4)</li>
              <li><strong>Eindtoetsing</strong>  definitieve tabel bij oplevering</li>
            </ol>
          </div>
        </div>

        {/* Rechter kolom — scrollbare PvE tabel */}
        <div className="step-stage reveal-right" style={{ flexDirection: 'column', overflowY: 'auto', maxHeight: '80vh', paddingRight: 4, alignItems: 'stretch', justifyContent: 'flex-start' }}>
          {DEFINITIEF_PVE.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: ci < DEFINITIEF_PVE.length - 1 ? 20 : 0 }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: cat.kleur,
                borderBottom: `2px solid ${cat.kleur}`, paddingBottom: 6, marginBottom: 4,
              }}>
                {cat.cat}
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: '44px 38px 1fr 1fr 140px',
                gap: 8, padding: '4px 0', borderBottom: '1px solid var(--fill-2)',
                fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--ink-soft)',
              }}>
                <span>Nr.</span><span>Type</span><span>Eis / Wens</span><span>Meetcriterium</span><span>Bron</span>
              </div>
              {cat.rows.map((r, ri) => (
                <div key={ri} style={{
                  display: 'grid', gridTemplateColumns: '44px 38px 1fr 1fr 140px',
                  gap: 8, padding: '7px 0', borderBottom: '1px solid var(--fill-2)',
                  fontSize: 11, lineHeight: 1.4, alignItems: 'start',
                }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: cat.kleur, fontWeight: 500 }}>{r.nr}</span>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.1em',
                    color: r.t === "Eis" ? 'var(--thread)' : 'var(--ink-soft)', paddingTop: 2,
                  }}>{r.t === "Eis" ? "EIS" : "WENS"}</span>
                  <span style={{ color: 'var(--ink)' }}>{r.eis}</span>
                  <span style={{ color: 'var(--ink-soft)', fontSize: 10 }}>{r.meet}</span>
                  <span style={{ color: 'var(--ink-soft)', fontSize: 9, fontFamily: 'var(--mono)', lineHeight: 1.5 }}>{r.bron || '—'}</span>
                </div>
              ))}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

Object.assign(window, {
  BagVideoIntro,
  Step16_Vormonderzoek,
  Step17_Schetsen,
  Step18_Vormtest,
  Step19_Prototype1,
  Step20_Prototype2,
  Step21_Prototype3,
  Step22_Stakeholders,
  Step23_Prototype4,
  Step24_SociaalAtelier,
  Step25_DefinitiefPvE,
  PvEToetsingstabel,
});
