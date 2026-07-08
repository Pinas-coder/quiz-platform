// ═══════════════════════════════════════════════════════════════════
// doc.js — Logica pagina documentazione.html
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  loadDB(initDoc);
});

function initDoc() {
  const grid   = document.getElementById('doc-grid');
  const detail = document.getElementById('doc-detail');

  if (!MATERIE.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📂</div>
        <div class="empty-title">Nessuna materia ancora inserita</div>
        <div class="empty-sub">Le materie verranno aggiunte nelle prossime sessioni.</div>
      </div>`;
    return;
  }

  MATERIE.forEach(m => {
    const d    = DOC[m.key];
    const html = d ? d.html : '<div class="empty-state"><div class="empty-icon">📂</div><div class="empty-title">Documentazione in arrivo</div></div>';
    const desc = d ? d.desc : '';

    grid.innerHTML += `
      <a href="#doc-${m.key}" class="home-card" onclick="scrollToSection('doc-${m.key}', event)">
        <div class="icon-wrap tone-secondary">
          <span class="material-symbols-outlined">description</span>
        </div>
        <h3>${m.label}</h3>
        ${desc ? `<p>${desc}</p>` : '<p>Documentazione ufficiale della materia.</p>'}
        <span class="go">Vedi documentazione <span class="material-symbols-outlined icon-xs">arrow_downward</span></span>
      </a>`;

    detail.innerHTML += `
      <div class="doc-section" id="doc-${m.key}" style="scroll-margin-top:1.5rem">
        <div class="section-header">
          <span class="section-badge">📄 DOCUMENTAZIONE</span>
          <h1>${m.label}</h1>
          ${desc ? `<p>${desc}</p>` : ''}
        </div>
        ${html}
      </div>`;
  });
}