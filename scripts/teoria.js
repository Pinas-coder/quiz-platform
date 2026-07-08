// ═══════════════════════════════════════════════════════════════════
// teoria.js — Logica pagina teoria.html
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  loadDB(initTeoria);
});

function initTeoria() {
  const grid   = document.getElementById('theory-grid');
  const detail = document.getElementById('theory-detail');

  if (!MATERIE.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <div class="empty-title">Nessuna materia ancora inserita</div>
        <div class="empty-sub">Le materie verranno aggiunte nelle prossime sessioni.</div>
      </div>`;
    return;
  }

  MATERIE.forEach(m => {
    const t    = TEORIA[m.key];
    const html = t ? t.html : '<div class="empty-state"><div class="empty-icon">📝</div><div class="empty-title">Contenuti in arrivo</div></div>';
    const desc = t ? t.desc : '';

    grid.innerHTML += `
      <a href="#th-${m.key}" class="home-card" onclick="scrollToSection('th-${m.key}', event)">
        <div class="icon-wrap tone-primary">
          <span class="material-symbols-outlined">lightbulb</span>
        </div>
        <h3>${m.label}</h3>
        ${desc ? `<p>${desc}</p>` : '<p>Sintesi teorica della materia.</p>'}
        <span class="go">Vedi teoria <span class="material-symbols-outlined icon-xs">arrow_downward</span></span>
      </a>`;

    detail.innerHTML += `
      <div class="theory-section" id="th-${m.key}" style="scroll-margin-top:1.5rem">
        <div class="section-header">
          <span class="section-badge">📖 TEORIA</span>
          <h1>${m.label}</h1>
          ${desc ? `<p>${desc}</p>` : ''}
        </div>
        ${html}
      </div>`;
  });
}