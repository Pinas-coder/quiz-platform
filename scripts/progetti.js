// ═══════════════════════════════════════════════════════════════════
// progetti.js — Logica pagina progetti.html
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  loadDB(initProgetti);
});

function initProgetti() {
  const grid   = document.getElementById('projects-grid');
  const detail = document.getElementById('projects-detail');

  if (!PROGETTI.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🧩</div>
        <div class="empty-title">Nessun progetto ancora inserito</div>
        <div class="empty-sub">I progetti verranno aggiunti nelle prossime sessioni.</div>
      </div>`;
    return;
  }

  PROGETTI.forEach(p => {
    grid.innerHTML += `
      <a href="#proj-${p.key}" class="home-card" onclick="scrollToSection('proj-${p.key}', event)">
        <div class="icon-wrap tone-tertiary">
          <span class="material-symbols-outlined">deployed_code</span>
        </div>
        <h3>${p.title}</h3>
        ${p.desc ? `<p>${p.desc}</p>` : ''}
        <span class="go">Vedi dettaglio <span class="material-symbols-outlined icon-xs">arrow_downward</span></span>
      </a>`;

    detail.innerHTML += `
      <div class="project-card" id="proj-${p.key}" style="scroll-margin-top:1.5rem">
        <h3>${p.title}</h3>
        ${p.desc ? `<p><em>${p.desc}</em></p>` : ''}
        ${p.html || ''}
      </div>`;
  });
}