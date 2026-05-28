/* Miro page — standalone React app */
/* NavSimple en NavDropdown komen uit nav-shared.js */

/* ── Page component ────────────────────────────────────────────────── */
const PageMiro = () => {
  return (
    <>
      <NavSimple activePage="miro" />
      <main style={{ paddingTop: 80, minHeight: '100vh' }}>
        {/* Page header */}
        <div style={{ padding: '120px 6vw 0' }}>
          <WfTag>Procesboard</WfTag>
          <h2 className="wf-title" style={{ marginTop: 16, marginBottom: 16 }}>Procesboard</h2>
          <p className="wf-body" style={{ maxWidth: '60ch' }}>
            Het volledige ontwerpproces is gedocumenteerd op dit Miro-board. Gebruik scroll en zoom om door het board te navigeren. Liever direct openen? Klik <a href="https://miro.com/app/board/uXjVGz9AD2M=/?share_link_id=498925364571" target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline", color:"var(--ink)"}}>hier</a>.
          </p>
        </div>

        {/* Miro embed */}
        <div style={{ padding: '0 6vw' }}>
          <div style={{ width: '100%', height: '75vh', border: '1px solid var(--line)', overflow: 'hidden', marginTop: 32 }}>
            <iframe
              src="https://miro.com/app/live-embed/uXjVGz9AD2M=/?moveToViewport=-50000,-50000,100000,100000&embedId=graduation"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="fullscreen; clipboard-read; clipboard-write"
              style={{ display: 'block' }}
            />
          </div>
          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
            <a href="https://miro.com/app/board/uXjVGz9AD2M=/?share_link_id=498925364571"
               target="_blank" rel="noopener noreferrer"
               style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              Open in Miro →
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <div style={{ borderTop: '1px solid var(--line)', padding: '48px 6vw', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 80 }}>
          <a href="index.html" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>Terug naar home →</a>
        </div>
      </main>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<PageMiro />);
