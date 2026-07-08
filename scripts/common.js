// ═══════════════════════════════════════════════════════════════════
// common.js — Caricamento dati condiviso da tutte le pagine
// Ogni pagina richiama loadDB(callback) e poi la propria logica.
// ═══════════════════════════════════════════════════════════════════

let MATERIE   = [];
let DB        = [];
let TEORIA    = {};
let DOC       = {};
let REAL_QUIZ = {};
let PROGETTI  = [];

const letters = ['A', 'B', 'C', 'D', 'E'];

function loadDB(callback) {
  fetch('/db.json')
    .then(r => {
      if (!r.ok) throw new Error(`Errore caricamento db.json: ${r.status}`);
      return r.json();
    })
    .then(data => {
      MATERIE   = data.materie        || [];
      DB        = data.domande        || [];
      TEORIA    = data.teoria         || {};
      DOC       = data.documentazione || {};
      REAL_QUIZ = data.quiz_reale     || {};
      PROGETTI  = (data.progetti      || []).filter(p => !p._istruzioni);

      Object.keys(REAL_QUIZ).forEach(k => {
        if (k.startsWith('_')) delete REAL_QUIZ[k];
      });

      callback();
    })
    .catch(err => {
      document.body.innerHTML = `
        <div style="font-family:monospace;padding:2rem;color:#f87171;background:#0f1117;min-height:100vh">
          <h2 style="margin-bottom:1rem">⚠️ Errore caricamento dati</h2>
          <p style="color:#8a9099;margin-bottom:.5rem">${err.message}</p>
          <p style="color:#555c66;font-size:13px">
            Assicurati di aprire il sito tramite Live Server (VS Code),
            non con doppio clic sui file .html.<br>
            Il file <strong>db.json</strong> deve trovarsi nella stessa cartella.
          </p>
        </div>`;
    });
}

// Scroll fluido verso un id (usato da Teoria, Documentazione, Progetti)
function scrollToSection(id, event) {
  if (event) event.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}