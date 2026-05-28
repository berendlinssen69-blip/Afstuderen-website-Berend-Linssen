/* Materialen page — standalone React app */

/* ── Inject page styles ─────────────────────────────────────────────── */
(() => {
  const s = document.createElement('style');
  s.textContent = `
    /* Material cards */
    .mat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    .mat-card {
      border: 1px solid var(--line);
      padding: 24px;
      background: var(--paper);
    }
    .mat-header {
      display: flex; justify-content: space-between; align-items: center;
    }
    .mat-name { font-family: var(--sans); font-weight: 500; font-size: 18px; color: var(--ink); }
    .mat-badge {
      font-family: var(--mono); font-size: 9px; text-transform: uppercase;
      letter-spacing: 0.12em; padding: 3px 8px; border-radius: 2px; color: white; font-weight: 500;
    }
    .mat-badge-hoog { background: #8DB462; }
    .mat-badge-middel { background: #E8A430; }
    .mat-badge-laag { background: var(--ink-mute); }
    .mat-desc {
      font-size: 13px; color: var(--ink-soft); margin-top: 8px; line-height: 1.5;
    }
    .mat-tags {
      display: flex; flex-direction: row; gap: 6px; flex-wrap: wrap; margin-top: 12px;
    }
    .mat-tag {
      font-family: var(--mono); font-size: 9px; text-transform: uppercase;
      letter-spacing: 0.1em; padding: 3px 8px;
      border: 1px solid var(--line-soft); color: var(--ink-mute);
    }

    /* PDF section */
    .pdf-section { margin-top: 64px; padding-top: 48px; border-top: 1px solid var(--line); }
    .pdf-section-title { font-family: var(--sans); font-weight: 500; font-size: 20px; color: var(--ink); margin-bottom: 8px; }
    .pdf-section-desc { font-size: 13px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 20px; max-width: 60ch; }
    .pdf-link-btn {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em;
      padding: 10px 20px; border: 1px solid var(--line);
      background: var(--paper); color: var(--ink); text-decoration: none;
      transition: background .2s, color .2s; cursor: pointer;
    }
    .pdf-link-btn:hover { background: var(--ink); color: var(--paper); }
    .pdf-link-btn:hover svg { stroke: var(--paper); }
  `;
  document.head.appendChild(s);
})();

/* NavSimple en NavDropdown komen uit nav-shared.js */

/* ── Material card component ───────────────────────────────────────── */
const MatCard = ({ name, level, desc, tags }) => {
  const cls = level === 'HOOG' ? 'mat-badge-hoog' : level === 'MIDDEL' ? 'mat-badge-middel' : 'mat-badge-laag';
  return (
    <div className="mat-card">
      <div className="mat-header">
        <div className="mat-name">{name}</div>
        <span className={`mat-badge ${cls}`}>{level}</span>
      </div>
      <div className="mat-desc">{desc}</div>
      <div className="mat-tags">
        {tags.map((t, i) => <span key={i} className="mat-tag">{t}</span>)}
      </div>
    </div>
  );
};

/* ── Page component ────────────────────────────────────────────────── */
const PageMaterialen = () => {
  const materials = [
    {
      name: 'SDA weefsel',
      level: 'HOOG',
      desc: 'Weerbestendig buitenstof, kleurecht door de vezel.',
      tags: ['naaibaar', 'weerbestendig', 'kleurecht', 'hoofdmateriaal'],
    },
    {
      name: 'Fiberfill vulling',
      level: 'MIDDEL',
      desc: 'Polyester vulmateriaal, herbruikbaar als zachte vulling.',
      tags: ['zacht', 'lichtgewicht', 'beperkte toepassing'],
    },
    {
      name: 'PVC coating',
      level: 'LAAG',
      desc: 'Coating op verwarmingselementen, moeilijk te scheiden.',
      tags: ['waterproof', 'niet naaibaar', 'moeilijk recycleerbaar'],
    },
    {
      name: 'Skai / kunstleer',
      level: 'MIDDEL',
      desc: 'Synthetisch leer voor afwerking, kleine volumes beschikbaar.',
      tags: ['slijtvast', 'kleine volumes'],
    },
    {
      name: 'Schuim',
      level: 'LAAG',
      desc: 'Isolatiemateriaal, volumeus en lastig te integreren in tassen.',
      tags: ['isolerend', 'niet naaibaar', 'volumeus'],
    },
    {
      name: 'Batterijen & elektronica',
      level: 'LAAG',
      desc: 'Verwarmingselementen en accu\'s, vereisen speciale retourlogistiek.',
      tags: ['gevaarlijk afval', 'retourlogistiek'],
    },
  ];

  return (
    <>
      <NavSimple activePage="materialen" />
      <main style={{ paddingTop: 80, minHeight: '100vh' }}>
        {/* Page header */}
        <div style={{ padding: '120px 6vw 60px' }}>
          <WfTag>Materialen</WfTag>
          <h2 className="wf-title" style={{ marginTop: 16, marginBottom: 16 }}>Materialen &amp; reststromen</h2>
          <p className="wf-body" style={{ maxWidth: '60ch' }}>
            Sit &amp; Heat produceert met meerdere materialen. Dit overzicht toont de reststromen en het hergebruikpotentieel per materiaal.
          </p>
        </div>

        {/* Material grid */}
        <div style={{ padding: '0 6vw' }}>
          <div className="mat-grid">
            {materials.map((m, i) => (
              <MatCard key={i} name={m.name} level={m.level} desc={m.desc} tags={m.tags} />
            ))}
          </div>

          {/* Materiaal Inventarisatie PDF */}
          <div className="pdf-section">
            <div className="pdf-section-title">Materiaal Inventarisatie</div>
            <div className="pdf-section-desc">
              Volledige voorraadregistratie van alle stoffen en restmaterialen bij Sit &amp; Heat.
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.65, marginBottom: 16, maxWidth: '60ch' }}>
              Overzicht van alle stoffen en restmaterialen die aanwezig zijn bij Sit &amp; Heat: type, kleur, hoeveelheid en hergebruikstatus. Dit document vormt de basis voor de materialenkeuze in het ontwerp.
            </p>
            <a className="pdf-link-btn" href="Bijlage/Voorraadregistratie_stoffen (version 1).pdf" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Bekijk het volledige onderzoek hier
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <div style={{ borderTop: '1px solid var(--line)', padding: '48px 6vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 80 }}>
          <a href="onderzoek.html" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', textDecoration: 'none' }}>← Terug naar onderzoek</a>
          <a href="index.html" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>Naar het ontwerpproces →</a>
        </div>
      </main>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<PageMaterialen />);
