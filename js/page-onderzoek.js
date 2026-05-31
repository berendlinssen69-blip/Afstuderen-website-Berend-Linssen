/* page-onderzoek.js — Onderzoek & Analyse · Sit & Heat 2026 */

/* ── Inject page styles ─────────────────────────────────────────────── */
(() => {
  if (document.getElementById('page-onderzoek-styles')) return;
  const s = document.createElement('style');
  s.id = 'page-onderzoek-styles';
  s.textContent = `
    /* Accordion */
    .acc-card { border-top: 1px solid var(--line); }
    .acc-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 20px 0; cursor: pointer; user-select: none;
    }
    .acc-header:hover .acc-title { opacity: 0.7; }
    .acc-left { display: flex; flex-direction: row; gap: 16px; align-items: center; }
    .acc-title-block { display: flex; flex-direction: column; gap: 3px; }
    .acc-title { font-family: var(--sans); font-weight: 500; font-size: 18px; color: var(--ink); transition: opacity .2s; }
    .acc-summary { font-size: 13px; color: var(--ink-soft); }
    .acc-chev { transition: transform 0.25s var(--ease-standard); }
    .acc-chev.open { transform: rotate(180deg); }
    .acc-content { overflow: hidden; transition: max-height 0.45s var(--ease-out); }
    .acc-inner { padding: 0 0 32px 40px; }

    /* PDF link button */
    .pdf-link-btn {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em;
      padding: 10px 20px; border: 1px solid var(--line);
      background: var(--paper); color: var(--ink); text-decoration: none;
      transition: background .2s, color .2s; cursor: pointer; margin-top: 4px;
    }
    .pdf-link-btn:hover { background: var(--ink); color: var(--paper); }
    .pdf-link-btn svg { transition: stroke .2s; }
    .pdf-link-btn:hover svg { stroke: var(--paper); }
    .pdf-placeholder {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      height: 200px; border: 1px dashed var(--line); color: var(--ink-mute);
      font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; gap: 8px;
    }
    .maatregel { font-size: 12px; color: var(--ink-soft); margin-top: 3px; }

    /* Image gallery with long-press zoom */
    .gallery-section-label {
      font-family: var(--mono); font-size: 9px; letter-spacing: 0.16em;
      text-transform: uppercase; color: var(--ink-soft);
      margin: 28px 0 10px; padding-bottom: 6px;
      border-bottom: 1px solid var(--line);
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 6px;
      margin-bottom: 24px;
    }
    .gallery-thumb {
      position: relative; cursor: pointer; overflow: hidden;
      background: var(--fill); border: 1px solid var(--line);
      user-select: none; -webkit-user-select: none;
      transition: opacity .15s;
    }
    .gallery-thumb:hover { opacity: 0.85; }
    .gallery-thumb img { width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; pointer-events: none; }
    .gallery-thumb.landscape img { aspect-ratio: 4/3; }
    .gallery-zoom-overlay {
      position: fixed; inset: 0; z-index: 9000;
      background: rgba(0,0,0,0.92);
      display: flex; align-items: center; justify-content: center;
      cursor: zoom-out;
    }
    .gallery-zoom-overlay img {
      max-width: 90vw; max-height: 90vh;
      object-fit: contain; display: block;
      box-shadow: 0 8px 48px rgba(0,0,0,0.6);
    }
    .gallery-zoom-close {
      position: absolute; top: 20px; right: 24px;
      font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em;
      color: rgba(255,255,255,0.6); background: none; border: none;
      cursor: pointer; padding: 8px;
    }

    /* Bronvermelding */
    .bron-item {
      font-size: 12px; line-height: 1.75; color: var(--ink-soft);
      padding: 12px 0; border-bottom: 1px solid var(--fill-2);
    }
    .bron-item:last-child { border-bottom: none; }
    .bron-cat {
      font-family: var(--mono); font-size: 9px; letter-spacing: 0.16em;
      text-transform: uppercase; color: var(--ink-mute);
      margin: 24px 0 8px; padding-bottom: 4px;
      border-bottom: 1px solid var(--line);
    }
    .bron-cat:first-child { margin-top: 0; }

    /* Schetsboek collapsible groups */
    .sb-group { border-top: 1px solid var(--line); }
    .sb-group-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 14px 0; cursor: pointer; user-select: none; transition: opacity .15s;
    }
    .sb-group-header:hover { opacity: 0.65; }
    .sb-group-title { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--ink); }
    .sb-group-count { font-family: var(--mono); font-size: 9px; color: var(--ink-soft); letter-spacing: 0.1em; }
    .sb-group-chev { transition: transform 0.25s var(--ease-standard); color: var(--ink-soft); margin-right: 10px; }
    .sb-group-chev.open { transform: rotate(180deg); }
    .sb-group-content { overflow: hidden; transition: max-height 0.45s var(--ease-out); }
  `;
  document.head.appendChild(s);
})();

/* ── Chevron ────────────────────────────────────────────────────────── */
const ChevronDown = ({ open }) => (
  <svg className={`acc-chev${open ? ' open' : ''}`} width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="2,2 9,8 16,2" />
  </svg>
);

/* ── Schetsboek collapsible group ───────────────────────────────────── */
const SketchbookGroup = ({ title, count, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="sb-group">
      <div className="sb-group-header" onClick={() => setOpen(o => !o)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg className={`sb-group-chev${open ? ' open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <div className="sb-group-title">{title}</div>
        </div>
      </div>
      <div className="sb-group-content" style={{ maxHeight: open ? '9999px' : '0px' }}>
        <div style={{ paddingBottom: 8 }}>{children}</div>
      </div>
    </div>
  );
};

/* ── Accordion card ─────────────────────────────────────────────────── */
const AccCard = ({ icon, title, summary, defaultOpen, children }) => {
  const [open, setOpen] = React.useState(defaultOpen || false);
  const contentRef = React.useRef(null);

  /* re-measure on open */
  const [height, setHeight] = React.useState('0px');
  React.useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + 'px');
      /* Na animatie maxHeight opheffen zodat inner accordeons niet afgeknipt worden */
      const t = setTimeout(() => setHeight('none'), 460);
      return () => clearTimeout(t);
    } else {
      /* Bij sluiten eerst terug naar px zodat de close-animatie werkt */
      if (contentRef.current && height === 'none') {
        setHeight(contentRef.current.scrollHeight + 'px');
        requestAnimationFrame(() => requestAnimationFrame(() => setHeight('0px')));
      } else {
        setHeight('0px');
      }
    }
  }, [open]);

  return (
    <div className="acc-card">
      <div className="acc-header" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <div className="acc-left">
          <div style={{ width: 24, height: 24, flexShrink: 0 }}>{icon}</div>
          <div className="acc-title-block">
            <div className="acc-title">{title}</div>
            <div className="acc-summary">{summary}</div>
          </div>
        </div>
        <ChevronDown open={open} />
      </div>
      <div className="acc-content" ref={contentRef} style={{ maxHeight: height }}>
        <div className="acc-inner">{children}</div>
      </div>
    </div>
  );
};

/* ── Icons ──────────────────────────────────────────────────────────── */
const IconClipboard = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);
const IconFileText = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <line x1="8" y1="9" x2="10" y2="9" />
  </svg>
);
const IconTrendingUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const IconBarChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconAlertTriangle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconCheckSquare = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

/* ── PDF link component — opens PDF in new tab on click ────────────── */
const PdfLink = ({ src, children }) => (
  <div>
    <div style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.65, marginBottom: 16 }}>
      {children}
    </div>
    <a className="pdf-link-btn" href={src} target="_blank" rel="noopener noreferrer">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
      Bekijk het volledige onderzoek hier
    </a>
  </div>
);

/* ── Placeholder for PVE (nog toe te voegen) ───────────────────────── */
const PdfPlaceholder = ({ label }) => (
  <div className="pdf-placeholder">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
    <span>{label}</span>
  </div>
);

/* ── Image gallery with long-press zoom ─────────────────────────────── */
const GalleryGrid = ({ images, landscape = false }) => {
  const [zoomed, setZoomed] = React.useState(null);
  const pressTimer = React.useRef(null);
  const pressing = React.useRef(null);

  const startPress = (src) => {
    pressing.current = src;
    pressTimer.current = setTimeout(() => {
      if (pressing.current === src) setZoomed(src);
    }, 600);
  };

  const cancelPress = () => {
    clearTimeout(pressTimer.current);
    pressing.current = null;
  };

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setZoomed(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i}
            className={`gallery-thumb${landscape ? ' landscape' : ''}`}
            onMouseDown={() => startPress(src)}
            onMouseUp={cancelPress}
            onMouseLeave={cancelPress}
            onTouchStart={() => startPress(src)}
            onTouchEnd={cancelPress}
            onClick={() => setZoomed(src)}
            title="Klik of houd ingedrukt om te vergroten"
          >
            <img src={src} alt={`Afbeelding ${i+1}`} />
          </div>
        ))}
      </div>
      {zoomed && (
        <div className="gallery-zoom-overlay" onClick={() => setZoomed(null)}>
          <button className="gallery-zoom-close" onClick={() => setZoomed(null)}>ESC · sluiten</button>
          <img src={zoomed} alt="Vergroot" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

/* ── Icons extra ─────────────────────────────────────────────────────── */
const IconBook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

/* ── Image path helpers ─────────────────────────────────────────────── */
const B = "foto%27s%20en%20animaties%20website/";

const CRAZY8S_IMGS = [3,4,5,6,7,8,9,10,11].map(n =>
  `${B}schetsen/crazy%208/image%20(${n}).png`);
const BW446_IMGS = [12,13,14,15,16,17,18,19,20].map(n =>
  `${B}schetsen/446%20brainwriting/image%20(${n}).png`);

// Brainstroming map: Crazy 8s sessie schetsen (met Copy-varianten)
const BRAIN_CRAZY8S_IMGS = [
  "image%20(12)%20-%20Copy.png","image%20(12).png",
  "image%20(13)%20-%20Copy.png","image%20(13).png",
  "image%20(14)%20-%20Copy.png","image%20(14).png",
  "image%20(15)%20-%20Copy.png","image%20(15).png",
  "image%20(16).png","image%20(17).png","image%20(18).png",
  "image%20(19).png","image%20(20).png",
].map(f => `${B}Brainstroming/Crazy%208s/${f}`);

// Brainstroming map: 446 Brainwriting sessie schetsen (met Copy-varianten)
const BRAIN_BW446_IMGS = [
  "image%20(3).png","image%20(4).png","image%20(5).png",
  "image%20(6)%20-%20Copy.png","image%20(6).png",
  "image%20(7)%20-%20Copy.png","image%20(7).png",
  "image%20(8)%20-%20Copy.png","image%20(8).png",
  "image%20(9)%20-%20Copy.png","image%20(9).png",
  "image%20(10)%20-%20Copy.png","image%20(10).png",
  "image%20(11)%20-%20Copy.png","image%20(11).png",
].map(f => `${B}Brainstroming/446%20brainwriting/${f}`);

const TASSCHETSEN_IMGS = [
  "VORM2_000540_Page_01.jpg","VORM2_000540_Page_02.jpg","VORM2_000540_Page_03.jpg",
  "VORM2_000540_Page_04.jpg","VORM2_000540_Page_05.jpg","VORM2_000540_Page_06.jpg",
  "VORM2_000540_Page_07.jpg","VORM2_000540_Page_08.jpg","VORM2_000540_Page_09.jpg",
  "VORM2_000540_Page_10.jpg","VORM2_000540_Page_11.jpg",
  "VORM3_000551_Page_1.jpg","VORM3_000551_Page_2.jpg",
  "SCHETS21.4_000554_Page_1.png","SCHETS21.4_000554_Page_2.png",
  "SCHETS21.4_000554_Page_3.png","SCHETS21.4_000554_Page_4.png",
  "SCHETS21.4_000554_Page_5.png","SCHETS21.4_000554_Page_6.png",
  "SCHETS2904_000565_Page_02.png","SCHETS2904_000565_Page_03.png",
  "SCHETS2904_000565_Page_04.png","SCHETS2904_000565_Page_05.png",
  "SCHETS2904_000565_Page_06.png","SCHETS2904_000565_Page_07.png",
  "SCHETS2904_000565_Page_08.png","SCHETS2904_000565_Page_09.png",
  "HDHDD_000560.png",
  "DGDSJFDHGSDH_000561_Page_1.png","DGDSJFDHGSDH_000561_Page_2.png",
].map(f => `${B}proces%20tas/Tas%20schetsen/${encodeURIComponent(f)}`);

const BRAINSTORM_SESSION_IMGS = [
  "20260310_143853%20(1).jpg",
  "20260310_151044%20(1).jpg",
  "IMG-20260310-WA0006%20(1).jpg",
  "Screenshot%202026-05-05%20102610.png",
  "Screenshot%202026-05-05%20102620.png",
  "Screenshot%202026-05-05%20102630.png",
  "Screenshot%202026-05-05%20102638.png",
  "Screenshot%202026-05-05%20102653.png",
  "Screenshot%202026-05-05%20102656.png",
  "Screenshot%202026-05-05%20102706.png",
  "Screenshot%202026-05-05%20102712.png",
].map(f => `${B}Brainstroming/${f}`);

const DBD_IMGS = [
  "1000062614%20(1).jpg","1000062629%20(1).jpg","1000062667.jpg","1000062668.jpg",
  "1000062762%20(1).jpg","1000062815.jpg","1000062816.jpg","1000062817.jpg",
  "20260323_091733.jpg","20260323_091844.jpg","20260323_091923.jpg","20260323_092011.jpg",
  "20260407_161557.jpg","20260407_161609.jpg","20260407_161835.jpg","20260407_162051.jpg",
  "20260416_161436%20(1).jpg","20260416_161454%20(1).jpg","20260416_161512%20(1).jpg",
  "20260416_161518%20(1).jpg","20260416_161611%20(1).jpg","20260416_161617%20(1).jpg",
  "20260506_093149.jpg",
  "BRWA8934A7EE77E_000412_Page_01_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_02_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_03_Image_0001%20(1).jpg",
  "BRWA8934A7EE77E_000412_Page_03_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_04_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_05_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_06_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_07_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_08_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_09_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_10_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_11_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_12_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_13_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_14_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_15_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_16_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_17_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_18_Image_0001.jpg",
  "BRWA8934A7EE77E_000412_Page_19_Image_0001.jpg",
  "BRWA8934A7EE77E_000526_Page_1.jpg",
  "BRWA8934A7EE77E_000526_Page_2.jpg",
  "BRWA8934A7EE77E_000526_Page_3.jpg",
  "SCHETS0527_2_000595_Page_2.jpg",
  "SCHETS0527_2_000595_Page_3.jpg",
  "SCHETS0527_2_000595_Page_4.jpg",
].map(f => `${B}Design%20by%20doing/${f}`);

const SPUG_IMGS = [
  "20260420_153154%20(1).jpg","20260420_160731%20(1).jpg","20260420_161139%20(1).jpg",
  "20260421_094022%20(1).jpg","20260421_094132%20(1)%20(1).jpg","20260421_094158%20(1)%20(1).jpg",
  "IMG-20260420-WA0003%20(2).jpg","IMG-20260420-WA0004%20(1).jpg","IMG-20260420-WA0005%20(1).jpg",
].map(f => `${B}proces%20tas/tas%20prototypes/spugmodelen/${f}`);

const PROTO1_IMGS = ["image%20(22).png","image%20(23).png","image%20(24).png","image%20(25).png"]
  .map(f => `${B}proces%20tas/tas%20prototypes/prototype%20v1/${f}`);
const PROTO2_IMGS = [
  "20260430_142811%20(1).jpg","20260430_142815%20(2).jpg","20260430_142816%20(1).jpg",
  "20260501_083555.jpg","20260501_083903%20(1).jpg","20260501_094141.jpg",
  "20260505_142228.jpg","20260505_142232.jpg","20260505_142345.jpg",
  "image%20(22).png","image%20(23).png","image%20(24).png","image%20(25).png",
  "SCHETS2904_000565_Page_10.png","SCHETS2904_000565_Page_11.png",
].map(f => `${B}proces%20tas/tas%20prototypes/prototype%20v2/${f}`);
const PROTO3_IMGS = [
  "20260513_112122.jpg","20260513_112312.jpg","20260513_112322.jpg",
  "20260513_112331.jpg","20260513_112342.jpg",
].map(f => `${B}proces%20tas/tas%20prototypes/v3/${f}`);
const PROTO4_IMGS = [
  "20260527_135510.jpg","20260527_135522.jpg",
  "SCHETS0527_000590_Page_1.jpg","SCHETS0527_000590_Page_2.jpg",
  "SCHETS0527_2_000595_Page_1.jpg",
].map(f => `${B}proces%20tas/tas%20prototypes/v4/${f}`);
const VORMONDERZOEK_IMGS = [
  `${B}proces%20tas/vormonderzoek/Screenshot%202026-05-19%20145227.png`,
  `${B}proces%20tas/Afbeelding1.png`,
];
const MULTIVIEW_IMGS = [
  "multiview%20with%20background.png",
  "multiview%20without%20background.png",
].map(f => `${B}proces%20tas/tas%20prototypes/${f}`);

/* ── Main page component ────────────────────────────────────────────── */
const PageOnderzoek = () => {
  const [openSlug, setOpenSlug] = React.useState(null);

  React.useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('open');
    if (slug) setOpenSlug(slug);
  }, []);

  const cards = [
    {
      slug: 'pva',
      icon: <IconClipboard />,
      title: 'Plan van Aanpak',
      summary: 'Probleemstelling, onderzoeksvraag en methodologische aanpak van het project.',
      content: (
        <PdfLink src="Bijlage/plan van aanpak.pdf">
          <p>Sit &amp; Heat produceert jaarlijks snijverlies van Solution Dyed Acrylic (SDA) buitenstof. Dit materiaal is weerbestendig, kleurecht en duurzaam, maar wordt momenteel niet benut.</p>
          <p style={{ marginTop: 8 }}>De centrale vraag: hoe kan dit productieafval worden omgezet in een tascollectie die aansluit bij de merkidentiteit, produceerbaar is door een sociaal atelier, en verkoopbaar is via een retailkanaal? Methode: Double Diamond gecombineerd met Roozenburg &amp; Eekels.</p>
        </PdfLink>
      ),
    },
    {
      slug: 'materialen',
      icon: <IconFileText />,
      title: 'Materialenonderzoek',
      summary: 'Analyse van alle materialen in de productiestroom van Sit & Heat op hergebruikpotentieel.',
      content: (
        <PdfLink src="Bijlage/Materialen onderzoek.pdf">
          <p>Analyse van zes materialen uit de productiestroom van Sit &amp; Heat. SDA weefsel scoort het hoogst op hergebruikpotentieel: weerbestendig, kleurecht, naaibaar en in grote hoeveelheden beschikbaar als reststof. Andere materialen zoals fiberfill, PVC coating en schuim zijn beperkt of niet geschikt voor verwerking in tassen.</p>
        </PdfLink>
      ),
    },
    {
      slug: 'trends',
      icon: <IconTrendingUp />,
      title: 'Trendonderzoek',
      summary: 'Analyse van acht relevante trends in de markt voor duurzame gebruiksproducten.',
      content: (
        <PdfLink src="Bijlage/trend onderzoek.pdf">
          <p>Acht relevante trends ge&iuml;dentificeerd op basis van deskresearch: circulaire economie, energie effici&euml;nt comfort, zichtbare duurzaamheid, sociale duurzaamheid, modulariteit, verlenging van het buitenseizoen, transparantie en comfort &amp; zachtheid.</p>
        </PdfLink>
      ),
    },
    {
      slug: 'markt',
      icon: <IconBarChart />,
      title: 'Marktonderzoek',
      summary: 'Analyse van de markt voor softgoods, verwarmde producten en het retaillandschap.',
      content: (
        <PdfLink src="Bijlage/Marktonderzoek.pdf">
          <p>In de Nederlandse maakindustrie bestaat gemiddeld 15–30% van het gebruikte weefsel uit restmateriaal. De concurrentieanalyse laat daarnaast een duidelijke ruimte in de markt zien tussen Stoov, dat zich vooral richt op design en indoorgebruik, en Sit & Heat, dat juist functioneel en buitengericht is. Freitag fungeerde hierbij als belangrijk precedent. Het merk laat zien dat een sterke materiaalidentiteit ook commercieel kan werken. De conclusie is dat er ruimte is voor een tascollectie waarin de oorsprong en het karakter van het materiaal centraal staan.</p>
        </PdfLink>
      ),
    },
    {
      slug: 'brainstorm',
      icon: <IconFileText />,
      title: 'Brainstorm Presentatie',
      summary: 'De volledige briefing die voorafgaand aan de brainstormsessie is gegeven aan de deelnemers.',
      content: (
        <PdfLink src="Bijlage/Brainstorm_Presentatie.pdf">
          <p>De presentatie waarmee de brainstormdeelnemers werden gebrieft. Bevat: probleemstelling, beschikbare materialen en hun eigenschappen, concurrentie-analyse, zes relevante markttrends, inspiratie (Freitag als referentie), ontwerpcriteria (moet/mag niet/wens) en de centrale vraag. Deze gestructureerde briefing zorgde ervoor dat alle deelnemers vanuit dezelfde kennisbasis konden brainstormen.</p>
        </PdfLink>
      ),
    },
    {
      slug: 'risico',
      icon: <IconAlertTriangle />,
      title: 'Risicoanalyse',
      summary: 'Acht geïdentificeerde projectrisico\'s, geordend op prioriteit met maatregelen.',
      content: (
        <PdfLink src="Bijlage/Risicoanalyse_Sit_Heat.pdf">
          <p>Acht projectrisico's in kaart gebracht met maatregelen. Hoge risico's: atelierproductie binnen kwaliteitseisen, SDA-stof die franjt bij snijden, krappe tijdlijn voor fysiek eindproduct. Per risico zijn concrete maatregelen geformuleerd.</p>
        </PdfLink>
      ),
    },
    {
      slug: 'pve',
      icon: <IconCheckSquare />,
      title: 'Definitief Programma van Eisen',
      summary: 'Toetsingskader opgesteld na de prototypefase, met meetcriteria en bronnen.',
      content: (() => {
        const eisCount  = DEFINITIEF_PVE.reduce((n, c) => n + c.rows.filter(r => r.t === "Eis").length, 0);
        const wensCount = DEFINITIEF_PVE.reduce((n, c) => n + c.rows.filter(r => r.t === "Wens").length, 0);
        return (
          <div>
            <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.65, marginBottom: 20 }}>
              Opgesteld na prototypefase V1–V3 en het interview met Blueview (sociaal atelier).
              Bevat {eisCount} eisen en {wensCount} wensen, elk met meetcriterium en traceerbare bron.
            </p>

            {DEFINITIEF_PVE.map((cat, ci) => (
              <div key={ci} style={{ marginBottom: 24 }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: cat.kleur,
                  borderBottom: `2px solid ${cat.kleur}`, paddingBottom: 5, marginBottom: 2,
                }}>
                  {cat.cat}
                </div>
                <div style={{
                  display: 'grid', gridTemplateColumns: '44px 36px 1fr 1fr',
                  gap: 8, padding: '5px 0', borderBottom: '1px solid var(--fill-2)',
                  fontFamily: 'var(--mono)', fontSize: 7, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--ink-mute)',
                }}>
                  <span>Nr.</span><span>Type</span><span>Eis / Wens</span><span>Meetcriterium</span>
                </div>
                {cat.rows.map((r, ri) => (
                  <div key={ri} style={{
                    display: 'grid', gridTemplateColumns: '44px 36px 1fr 1fr',
                    gap: 8, padding: '8px 0', borderBottom: '1px solid var(--fill-2)',
                    fontSize: 12, lineHeight: 1.5, alignItems: 'start',
                  }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: cat.kleur, fontWeight: 500 }}>{r.nr}</span>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: 7, letterSpacing: '0.1em',
                      color: r.t === "Eis" ? 'var(--thread)' : 'var(--ink-soft)', paddingTop: 2,
                    }}>{r.t === "Eis" ? "EIS" : "WENS"}</span>
                    <span style={{ color: 'var(--ink)', fontSize: 12 }}>{r.eis}</span>
                    <span style={{ color: 'var(--ink-soft)', fontSize: 11 }}>{r.meet}</span>
                  </div>
                ))}
              </div>
            ))}

            <div style={{display:"flex", gap:10, flexWrap:"wrap", marginTop:8}}>
              <a className="pdf-link-btn" href="index.html#step-25">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                Bekijk in het procesverslag (stap 25)
              </a>
              <a className="pdf-link-btn" href="pve-print.html" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                PvE als PDF downloaden
              </a>
            </div>
          </div>
        );
      })(),
    },
    {
      slug: 'schetsboek',
      icon: <IconBook />,
      title: 'Schetsboek & Fotocollage',
      summary: 'Alle schetsen en procesfoto\'s van brainstorm tot prototypes. Klik op een foto om te vergroten.',
      content: (
        <div>
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 20 }}>
            Een overzicht van alle schetsen en foto's uit het ontwerpproces. Klik op een afbeelding om te vergroten.
          </p>

          <SketchbookGroup title="Brainstorm" count={5}>
            <div className="gallery-section-label">Crazy 8s schetsen</div>
            <GalleryGrid images={CRAZY8S_IMGS} />
            <div className="gallery-section-label">Crazy 8s sessie</div>
            <GalleryGrid images={BRAIN_CRAZY8S_IMGS} />
            <div className="gallery-section-label">446 Brainwriting schetsen</div>
            <GalleryGrid images={BW446_IMGS} />
            <div className="gallery-section-label">446 Brainwriting sessie</div>
            <GalleryGrid images={BRAIN_BW446_IMGS} />
            <div className="gallery-section-label">Sessie foto's</div>
            <GalleryGrid images={BRAINSTORM_SESSION_IMGS} landscape={true} />
          </SketchbookGroup>

          <SketchbookGroup title="Schetsen &amp; Vormverkenning" count={2}>
            <div className="gallery-section-label">Tas schetsen</div>
            <GalleryGrid images={TASSCHETSEN_IMGS} />
            <div className="gallery-section-label">Vormonderzoek</div>
            <GalleryGrid images={VORMONDERZOEK_IMGS} landscape={true} />
          </SketchbookGroup>

          <SketchbookGroup title="Design by Doing" count={1}>
            <div className="gallery-section-label">Leren naaien</div>
            <GalleryGrid images={DBD_IMGS} landscape={true} />
          </SketchbookGroup>

          <SketchbookGroup title="Prototypes" count={5}>
            <div className="gallery-section-label">Spugmodellen</div>
            <GalleryGrid images={SPUG_IMGS} landscape={true} />
            <div className="gallery-section-label">Prototype v1</div>
            <GalleryGrid images={PROTO1_IMGS} />
            <div className="gallery-section-label">Prototype v2</div>
            <GalleryGrid images={PROTO2_IMGS} landscape={true} />
            <div className="gallery-section-label">Prototype v3</div>
            <GalleryGrid images={PROTO3_IMGS} landscape={true} />
            <div className="gallery-section-label">Prototype v4</div>
            <GalleryGrid images={PROTO4_IMGS} landscape={true} />
          </SketchbookGroup>

          <SketchbookGroup title="Renders" count={1}>
            <div className="gallery-section-label">Multiview</div>
            <GalleryGrid images={MULTIVIEW_IMGS} landscape={true} />
          </SketchbookGroup>
        </div>
      ),
    },
    {
      slug: 'bronvermelding',
      icon: <IconLink />,
      title: 'Bronvermelding',
      summary: 'Volledige lijst van gebruikte literatuur, methoden en bronnen in dit verslag.',
      content: (
        <div>
          <div className="bron-cat">Ontwerpmethoeden</div>
          <div className="bron-item">Design Council (2005). <em>The Double Diamond Design Process Model.</em> London: Design Council. designcouncil.org.uk/our-resources/framework-for-innovation/</div>
          <div className="bron-item">Roozenburg, N.F.M. &amp; Eekels, J. (1995). <em>Product Design: Fundamentals and Methods.</em> Chichester: John Wiley &amp; Sons.</div>
          <div className="bron-item">Knapp, J., Zeratsky, J. &amp; Kowitz, B. (2016). <em>Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days.</em> New York: Simon &amp; Schuster. [Crazy 8s methode]</div>
          <div className="bron-item">Rohrbach, B. (1969). Kreativ nach Regeln – Methode 635, eine neue Technik zum Lösen von Problemen. <em>Absatzwirtschaft, 12</em>(19), pp. 73–75. [446 / 635 Brainwriting methode]</div>
          <div className="bron-item">Dilts, R.B. (1994). <em>Strategies of Genius, Volume I.</em> Capitola: Meta Publications. [Disney Creative Strategy / Disney Model]</div>
          <div className="bron-item">Schön, D.A. (1983). <em>The Reflective Practitioner: How Professionals Think In Action.</em> New York: Basic Books. [Reflectief ontwerpen]</div>

          <div className="bron-cat">Materiaalonderzoek &amp; Duurzaamheid</div>
          <div className="bron-item">Selvane.co. Carbon Footprint of Natural vs. Synthetic Fibers: A Life Cycle Assessment Comparison. Geraadpleegd mei 2026. selvane.co/blogs/knowledge/carbon-footprint-of-natural-vs-synthetic-fibers-a-life-cycle-assessment-comparison [ADEME database, 21,1 kgCO₂e/kg acrylvezel]</div>
          <div className="bron-item">Vade, V.B. &amp; Athalye, A. (2025). Climate Impact Measurement of Acrylic Manufacturing Unit. <em>Chemical and Biomolecular Engineering, 10</em>(3), pp. 37–43. doi:10.11648/j.cbe.20251003.11</div>
          <div className="bron-item">Recycling Nederland. Nieuwe kleding maken uit oud textiel gebeurt mondjesmaat. Geraadpleegd mei 2026. recyclingnederland.nl/artikelen/nieuwe-kleding-maken-uit-oud-textiel-gebeurt-mondjesmaat/</div>
          <div className="bron-item">Potting, J., Hekkert, M., Worrell, E. &amp; Hanemaaijer, A. (2017). <em>Circulaire economie: Innovatie meten in de keten.</em> Den Haag: PBL Planbureau voor de Leefomgeving. [R-strategiehiërarchie — circulaire waardebehoud]</div>
          <div className="bron-item">Ellen MacArthur Foundation (2013). <em>Towards the Circular Economy, Vol. 1.</em> Cowes: Ellen MacArthur Foundation. [Circulaire economie — definitie en principes]</div>

          <div className="bron-cat">Marktonderzoek &amp; Trends</div>
          <div className="bron-item">CBS Statline (2024). Afvalproductie industrie per branche. Centraal Bureau voor de Statistiek. [15–30% weefselafval in Nederlandse maakindustrie]</div>
          <div className="bron-item">Freitag AG. Filosofie en aanpak materiaalhergebruik. freitag.ch/en/about/</div>
          <div className="bron-item">Stoov. Productlijn verwarmde accessoires. stoov.com [Concurrentieanalyse]</div>

          <div className="bron-cat">Visueel Onderzoek &amp; Inspiratie</div>
          <div className="bron-item">Linssen, B. (2026). <em>Sit and Heat restproducten</em> [Pinterest board]. Geraadpleegd april–mei 2026. <a href="https://nl.pinterest.com/bilinssen/sit-and-heat-restproducten/?request_params=%7B%221%22%3A%20130%2C%20%227%22%3A%204155794821323821034%2C%20%228%22%3A%201072630904940932949%2C%20%2230%22%3A%20%22Sit%20and%20Heat%20restproducten%22%2C%20%2232%22%3A%2045%2C%20%2233%22%3A%20%5B1072630836269373639%2C%201072630836269373636%2C%201072630836269344915%2C%201072630836269343479%2C%201072630836269343244%2C%201072630836269343227%2C%201072630836269341099%2C%201072630836269283401%2C%201072630836269281962%2C%201072630836269281410%2C%201072630836269281026%2C%201072630836269281025%2C%201072630836269075953%2C%201072630836269075914%2C%201072630836269075913%2C%201072630836269075885%2C%201072630836269075872%2C%201072630836269075776%2C%201072630836269049837%2C%201072630836269048344%5D%2C%20%2236%22%3A%20%5B1072630904940932949%5D%2C%20%2237%22%3A%20%22Sit%20and%20Heat%20restproducten%22%2C%20%2234%22%3A%200%2C%20%22102%22%3A%204%7D&full_feed_title=Sit%20and%20Heat%20restproducten&view_parameter_type=3069&pins_display=3" target="_blank" rel="noopener noreferrer" style={{color:'#8DB462', textDecoration:'underline'}}>nl.pinterest.com/bilinssen/sit-and-heat-restproducten</a></div>

          <div className="bron-cat">Interviews &amp; Primaire bronnen</div>
          <div className="bron-item">Jorg (Sit &amp; Heat). Gesprekken over materiaalstroom, productie en randvoorwaarden. Februari–mei 2026. [Materiaaldata, technische eisen]</div>
          <div className="bron-item">Henri (retailer). Interview 1: prijsindicatie en marktpositie, 2025. Interview 2: feedback prototype v3, april 2026. [Retailmarge 2,5×, doelgroep inzichten]</div>
          <div className="bron-item">Roel (Blueview Sociaal Atelier Apeldoorn). Interview over productiecapaciteit, ateliertarieven en haalbaarheid. Mei 2026. [Productieeisen, maakbaarheid]</div>

          <div className="bron-cat">Gebruik van AI</div>
          <div className="bron-item">Claude (Anthropic, 2025–2026). Ingezet als ondersteuning bij: bronnenonderzoek en literatuursynthese; tekstredactie en formulering van verslagteksten; structurering en opbouw van het interactieve verslag; schrijven van code voor de website (JavaScript/React); voorbereiding van reflectiemomenten als conceptteksten. AI is gebruikt als denk- en redactiehulpmiddel — alle inhoudelijke keuzes, waardeoordelen en ontwerpbeslissingen zijn van de ontwerper zelf.</div>
        </div>
      ),
    },
  ];

  return (
    <>
      <NavSimple activePage="onderzoek" />
      <main style={{ paddingTop: 80, minHeight: '100vh' }}>

        {/* Two-column: left = accordion (breed), right = sticky image (smal) */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40, padding: '120px 6vw 0' }}>

          {/* Left: header + accordion — neemt alle beschikbare ruimte */}
          <div style={{ flex: '1 1 auto', minWidth: 0 }}>
            <div style={{ paddingBottom: 60 }}>
              <WfTag>Onderzoek</WfTag>
              <h2 className="wf-title" style={{ marginTop: 16, marginBottom: 16 }}>
                Onderzoek &amp; Analyse
              </h2>
              <p className="wf-body" style={{ maxWidth: '60ch' }}>
                De onderbouwing van het ontwerp: van probleemstelling en materiaalanalyse
                tot trendverkenning, marktpositie en risicokaart. Klik op een kaart om de volledige inhoud te lezen.
              </p>
            </div>

            {/* Accordion cards */}
            <div>
              {cards.map((card) => (
                <AccCard
                  key={card.slug}
                  icon={card.icon}
                  title={card.title}
                  summary={card.summary}
                  defaultOpen={openSlug === card.slug}
                >
                  {card.content}
                </AccCard>
              ))}
              <div style={{ borderTop: '1px solid var(--line)' }} />
            </div>
          </div>

          {/* Right: afbeelding — originele maat, sticky */}
          <div style={{ flex: '0 0 auto', position: 'sticky', top: 100 }}>
            <img
              src="foto%27s%20en%20animaties%20website/proces%20tas/tas%20prototypes/multiview%20without%20background.png"
              alt="Tas prototypes — vijf varianten"
              style={{ width: 700, display: 'block' }}
            />
          </div>

        </div>

        {/* Footer nav */}
        <div style={{
          borderTop: '1px solid var(--line)',
          padding: '48px 6vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 80,
        }}>
          <a href="index.html" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', textDecoration: 'none' }}>
            ← Terug naar home
          </a>
          <a href="materialen.html" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none' }}>
            Bekijk de materialen →
          </a>
        </div>
      </main>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<PageOnderzoek />);
