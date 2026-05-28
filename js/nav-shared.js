/* nav-shared.js — gedeelde nav componenten voor alle subpagina's */

/* ── Inject dropdown CSS eenmalig ──────────────────────────────────── */
(() => {
  if (document.getElementById('nav-shared-styles')) return;
  const s = document.createElement('style');
  s.id = 'nav-shared-styles';
  s.textContent = `
    .nav-dropdown { position: relative; }
    .nav-dropdown-btn {
      font-family: var(--mono); font-size: 11px; text-transform: uppercase;
      letter-spacing: 0.14em; color: var(--ink-soft); cursor: pointer;
      background: none; border: none; padding: 0; display: flex;
      align-items: center; gap: 4px; transition: color .2s var(--ease-standard);
    }
    .nav-dropdown-btn:hover { color: var(--ink); }
    .nav-dropdown-btn .chev {
      display: inline-block;
      transition: transform 0.22s var(--ease-standard);
    }
    .nav-dropdown-btn.open .chev { transform: rotate(180deg); }
    .nav-dropdown-panel {
      position: absolute; top: calc(100% + 12px); right: 0;
      min-width: 240px; background: var(--paper);
      border: 1px solid var(--line); z-index: 200;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      max-height: 70vh; overflow-y: auto;
    }
    .nav-dropdown-panel a {
      display: block; font-family: var(--mono); font-size: 10px;
      text-transform: uppercase; letter-spacing: 0.14em;
      padding: 8px 14px; color: var(--ink-soft); text-decoration: none;
      transition: background .15s, color .15s;
    }
    .nav-dropdown-panel a:hover { background: var(--fill); color: var(--ink); }
    .nav-dropdown-sep {
      font-family: var(--mono); font-size: 9px; text-transform: uppercase;
      letter-spacing: 0.14em; color: var(--ink-mute);
      padding: 10px 14px 4px; border-top: 1px solid var(--line-soft);
      margin-top: 2px;
    }
    .nav-dropdown-sep:first-child { border-top: none; margin-top: 0; }
  `;
  document.head.appendChild(s);
})();

/* ── Processtappen ────────────────────────────────────────────────────── */
const PROCESS_STEPS = [
  { num: 1,  label: "Het beginpunt" },
  { num: 2,  label: "Vraag naar opdracht" },
  { num: 3,  label: "Plan van Aanpak" },
  { num: 4,  label: "Methode" },
  { num: 5,  label: "Onderzoek" },
  { num: 6,  label: "Inventarisatie" },
  { num: 7,  label: "Voorlopig PvE" },
  { num: 8,  label: "Brainstorm" },
  { num: 9,  label: "Structureren" },
  { num: 10, label: "Schetsen" },
  { num: 11, label: "Design by Doing" },
  { num: 12, label: "Keuze" },
  { num: 13, label: "Interview bij Henri" },
  { num: 14, label: "Spanningsveld" },
  { num: 15, label: "Doelgroep" },
  /* ─── Tasontwerp ─── */
  { num: 16, label: "Vormonderzoek" },
  { num: 17, label: "Schetsen & Vormverkenning" },
  { num: 18, label: "Vormtest" },
  { num: 19, label: "Prototype 1" },
  { num: 20, label: "Prototype 2" },
  { num: 21, label: "Prototype 3" },
  { num: 22, label: "Stakeholders" },
  { num: 23, label: "Prototype 4" },
  { num: 24, label: "Sociaal Atelier" },
  { num: 25, label: "Definitief PvE" },
  /* ─── Afronding ─── */
  { num: 26, label: "Verantwoording" },
  { num: 27, label: "Cijfers" },
];

/* ── NavDropdownBase — herbruikbare wrapper ────────────────────────── */
const NavDropdownBase = ({ label, children }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        className={`nav-dropdown-btn${open ? ' open' : ''}`}
        onClick={() => setOpen(v => !v)}
      >
        {label}
        <svg className="chev" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="1,1 5,5 9,1" />
        </svg>
      </button>
      {open && (
        <div className="nav-dropdown-panel" onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  );
};

/* ── ProcesDropdown ─────────────────────────────────────────────────── */
/* isMainPage=true: scrollt naar stap op index.html                      */
/* isMainPage=false: navigeert naar index.html#step-X                    */
const ProcesDropdown = ({ isMainPage = false }) => (
  <NavDropdownBase label="Het proces">
    {PROCESS_STEPS.map(({ num, label }) => {
      if (isMainPage) {
        return (
          <a
            key={num}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector(`[data-step-num="${num}"]`);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {String(num).padStart(2, '0')} — {label}
          </a>
        );
      }
      return (
        <a key={num} href={`index.html#step-${num}`}>
          {String(num).padStart(2, '0')} — {label}
        </a>
      );
    })}
  </NavDropdownBase>
);

/* ── OnderzoekDropdown ──────────────────────────────────────────────── */
const OnderzoekDropdown = ({ isMainPage = false }) => (
  <NavDropdownBase label="Onderzoek">
    <a href="onderzoek.html">Onderzoek en Analyse</a>
    <a href="miro.html">Miro Proces</a>
    <a href="materialen.html">Materiaal inventaris</a>
    {isMainPage ? (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        const el = document.querySelector('[data-step-num="25"]');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}>Definitief PvE</a>
    ) : (
      <a href="index.html#step-25">Definitief PvE</a>
    )}
  </NavDropdownBase>
);

/* ── NavSimple ──────────────────────────────────────────────────────── */
/* activePage: 'home' | 'onderzoek' | 'materialen' | 'miro' | 'pve'    */
const NavSimple = ({ activePage = '' }) => {
  const link = (href, page, label) => {
    const isActive = activePage === page;
    return (
      <a
        href={href}
        style={{
          color: isActive ? 'var(--ink)' : 'var(--ink-soft)',
          textDecoration: 'none',
          fontFamily: 'var(--mono)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          borderBottom: isActive ? '1px solid var(--ink)' : 'none',
          paddingBottom: isActive ? 1 : 0,
        }}
      >
        {label}
      </a>
    );
  };

  return (
    <nav className="nav">
      <div className="logo">SIT &amp; HEAT AFSTUDEER VERSLAG</div>
      <div className="menu">
        {link('index.html', 'home', 'Home')}
        {link('de-tas.html', 'de-tas', 'De tas')}
        <ProcesDropdown isMainPage={false} />
        <OnderzoekDropdown />
      </div>
    </nav>
  );
};

Object.assign(window, { NavDropdownBase, ProcesDropdown, OnderzoekDropdown, NavSimple });
