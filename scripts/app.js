// ═══════════════════════════════════════════════════════════════════
// app.js — Logica principale
// I dati vengono caricati da db.json via fetch()
// ═══════════════════════════════════════════════════════════════════

let MATERIE    = [];
let DB         = [];
let TEORIA     = {};
let DOC        = {};
let REAL_QUIZ  = {};
let PROGETTI   = [];

const letters = ['A', 'B', 'C', 'D', 'E'];

let currentFilter = 'all';
let pool = [], idx = 0, tot = 0, ok = 0, ko = 0;
let answered = false;
let quizLength = 20;

let examPool = [], examIdx = 0, examOk = 0, examKo = 0, examLength = 20;

document.addEventListener('DOMContentLoaded', () => {
  fetch('db.json')
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

      init();
    })
    .catch(err => {
      document.body.innerHTML = `
        <div style="font-family:monospace;padding:2rem;color:#f87171;background:#0f1117;min-height:100vh">
          <h2 style="margin-bottom:1rem">⚠️ Errore caricamento dati</h2>
          <p style="color:#8a9099;margin-bottom:.5rem">${err.message}</p>
          <p style="color:#555c66;font-size:13px">
            Assicurati di aprire il sito tramite Live Server (VS Code),
            non con doppio clic su index.html.<br>
            Il file <strong>db.json</strong> deve trovarsi nella stessa cartella di index.html.
          </p>
        </div>`;
    });
});

function init() {
  buildSidebar();
  updateCounts();
  showSection('quiz-view');
  showQuizSelector();
  const firstNav = document.querySelector('.nav-item');
  if (firstNav) firstNav.classList.add('active');
}

function buildSidebar() {
  const quizList  = document.getElementById('sidebar-quiz-list');
  const realList  = document.getElementById('sidebar-real-list');

  MATERIE.forEach(m => {
    quizList.innerHTML += `
      <div class="nav-item" onclick="setQuiz('${m.key}', this)">
        <span class="nav-dot"></span>${m.label}
        <span class="nav-count" id="cnt-${m.key}">0</span>
      </div>`;
  });

  const hasReal = Object.keys(REAL_QUIZ).filter(k => Array.isArray(REAL_QUIZ[k]) && REAL_QUIZ[k].length > 0);
  if (hasReal.length > 0 && realList) {
    document.getElementById('sidebar-real-section').style.display = 'block';
    hasReal.forEach(key => {
      const m = MATERIE.find(x => x.key === key);
      if (!m) return;
      realList.innerHTML += `
        <div class="nav-item" onclick="startRealQuiz('${key}', this)">
          <span class="nav-dot" style="background:var(--yellow)"></span>${m.label}
          <span class="nav-count">${REAL_QUIZ[key].length}</span>
        </div>`;
    });
  }

  buildTheorySections();
  buildDocSections();
  buildProjectsSection();
}

// ── TEORIA — griglia di card per materia + dettaglio sotto (scroll) ─
function buildTheorySections() {
  const container = document.getElementById('theory-view');
  container.innerHTML = `
    <div class="section-header">
      <span class="section-badge">📖 TEORIA</span>
      <h1>Teoria</h1>
      <p>Scegli una materia dalla griglia per scorrere fino alla sua sintesi teorica.</p>
    </div>
    <div id="theory-grid" class="home-bento" style="margin-bottom:2.5rem"></div>
    <div id="theory-detail"></div>`;

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

// ── DOCUMENTAZIONE — griglia di card per materia + dettaglio sotto ──
function buildDocSections() {
  const container = document.getElementById('doc-view');
  container.innerHTML = `
    <div class="section-header">
      <span class="section-badge">📄 DOCUMENTAZIONE</span>
      <h1>Documentazione</h1>
      <p>Scegli una materia dalla griglia per scorrere fino alla documentazione ufficiale.</p>
    </div>
    <div id="doc-grid" class="home-bento" style="margin-bottom:2.5rem"></div>
    <div id="doc-detail"></div>`;

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

// Scroll generico usato da Teoria e Documentazione
function scrollToSection(id, event) {
  if (event) event.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── PROGETTI — sezione unica, lista indipendente dalle materie ─────
// Griglia di card (stesso stile della home) + dettaglio completo sotto,
// raggiunto tramite scroll cliccando la card corrispondente.
function buildProjectsSection() {
  const container = document.getElementById('projects-view');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header">
      <span class="section-badge">🧩 PROGETTI</span>
      <h1>Progetti</h1>
      <p>Scegli un progetto dalla griglia per scorrere fino al suo dettaglio completo.</p>
    </div>
    <div id="projects-grid" class="home-bento" style="margin-bottom:2.5rem"></div>
    <div id="projects-detail"></div>`;

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
      <a href="#proj-${p.key}" class="home-card" onclick="scrollToProject('${p.key}', event)">
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

function scrollToProject(key, event) {
  if (event) event.preventDefault();
  const el = document.getElementById('proj-' + key);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateCounts() {
  MATERIE.forEach(m => {
    const n  = DB.filter(q => q.m === m.key).length;
    const el = document.getElementById('cnt-' + m.key);
    if (el) el.textContent = n;
  });
  const allEl = document.getElementById('cnt-all');
  if (allEl) allEl.textContent = DB.length;

  const projEl = document.getElementById('cnt-progetti');
  if (projEl) projEl.textContent = PROGETTI.length;
}

function showSection(id) {
  ['quiz-view', 'exam-view', 'theory-view', 'doc-view', 'realquiz-view', 'projects-view'].forEach(s => {
    const el = document.getElementById(s);
    if (el) el.style.display = 'none';
  });
  const target = document.getElementById(id);
  if (target) target.style.display = 'block';
  window.scrollTo(0, 0);
}

function setAllNavInactive() {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
}

function setQuiz(filter, el) {
  setAllNavInactive();
  if (el) el.classList.add('active');
  currentFilter = filter;
  showSection('quiz-view');
  tot = ok = ko = idx = 0;
  updateStats();
  showQuizSelector();
  const label = filter === 'all'
    ? 'Tutte le materie'
    : (MATERIE.find(m => m.key === filter)?.label || filter);
  document.getElementById('quiz-title').textContent = label;
  closeSidebar();
}

function showQuizSelector() {
  document.getElementById('quiz-selector').style.display = 'block';
  document.getElementById('q-card').style.display        = 'none';
  document.getElementById('end-card').style.display      = 'none';
}

function selectLen(n, btn) {
  quizLength = n;
  document.querySelectorAll('#quiz-selector .btn-mode').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  startQuiz();
}

function startQuiz() {
  document.getElementById('quiz-selector').style.display = 'none';
  document.getElementById('end-card').style.display      = 'none';
  document.getElementById('q-card').style.display        = 'block';
  tot = ok = ko = idx = 0;
  buildPool();
  updateStats();
  nextQ();
}

function buildPool() {
  let src = currentFilter === 'all' ? DB : DB.filter(q => q.m === currentFilter);
  src = src.map(q => ({...q}));
  for (let i = src.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [src[i], src[j]] = [src[j], src[i]];
  }
  pool = src.slice(0, quizLength);
}

function nextQ() {
  answered = false;
  if (idx >= pool.length) { showEnd(); return; }
  const q    = pool[idx]; idx++;
  const card = document.getElementById('q-card');
  card.innerHTML = renderQuestionHTML(q, 'q-card', false, idx, pool.length);
  card.querySelectorAll('.opt').forEach(b => { b.disabled = false; });
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderQuestionHTML(q, containerId, isExam, qNum, qTotal) {
  const indices = q.opts.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const shuffledOpts = indices.map(i => q.opts[i]);
  q._correct     = indices.indexOf(q.ans);
  q._containerId = containerId;

  const diffMap     = { base: 'diff-base', medio: 'diff-medio', avanzato: 'diff-avanzato' };
  const materiaLabel = MATERIE.find(m => m.key === q.m)?.label || q.m;
  const nextLabel    = (isExam ? examIdx : idx) < (isExam ? examPool.length : pool.length)
    ? 'Prossima →' : 'Vedi risultati →';

  return `
    <div class="q-top">
      <span class="q-materia">${materiaLabel}</span>
      <div class="q-meta">
        <span class="q-counter">${qNum} / ${qTotal}</span>
        ${q.diff ? `<span class="q-diff ${diffMap[q.diff] || ''}">${q.diff}</span>` : ''}
      </div>
    </div>
    <div class="q-text">${q.q}</div>
    ${q.code ? `<div class="code-block">${q.code}</div>` : ''}
    <div class="opts">
      ${shuffledOpts.map((opt, i) => `
        <button class="opt" id="${containerId}-opt-${i}"
          onclick="choose(${i}, '${containerId}', ${isExam})" disabled>
          <span class="opt-l">${letters[i]}</span>${opt}
        </button>`).join('')}
    </div>
    ${!isExam ? '<div class="feedback" id="feedback"></div>' : ''}
    <div class="q-actions" id="q-actions-${containerId}">
      <button class="btn-next" onclick="${isExam ? 'examNextQ()' : 'nextQ()'}">
        ${nextLabel}
      </button>
    </div>`;
}

function choose(i, containerId, isExam) {
  if (answered) return;
  answered = true;

  const q       = isExam ? examPool[examIdx - 1] : pool[idx - 1];
  const correct = q._correct;
  const isOk    = i === correct;

  if (!isExam) { tot++; if (isOk) ok++; else ko++; }
  else         { if (isOk) examOk++; else examKo++; }

  document.querySelectorAll(`#${containerId} .opt`).forEach((b, j) => {
    b.disabled = true;
    if (j === correct)       b.classList.add(i === j ? 'correct' : 'show-c');
    else if (j === i && !isOk) b.classList.add('wrong');
  });

  if (!isExam) {
    const fb = document.getElementById('feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.className     = 'feedback ' + (isOk ? 'ok' : 'ko');
      fb.innerHTML     = `
        <div class="fb-title">${isOk ? '✓ Esatto!' : '✗ Risposta errata'}</div>
        <div class="fb-exp">${q.exp}</div>`;
    }
    updateStats();
  }

  const acts = document.getElementById('q-actions-' + containerId);
  if (acts) acts.style.display = 'flex';
}

function updateStats() {
  const pct = tot > 0 ? Math.round(ok / tot * 100) : 0;
  [['st-tot', tot], ['st-ok', ok], ['st-ko', ko]].forEach(([sid, val]) => {
    const se = document.getElementById(sid); if (se) se.textContent = val;
  });
  const pe = document.getElementById('st-pct'); if (pe) pe.textContent = tot > 0 ? pct + '%' : '—';
  const be = document.getElementById('st-bar'); if (be) be.style.width = pct + '%';
  const ple = document.getElementById('st-pl'); if (ple) ple.textContent = ok + '/' + tot;
  const pre = document.getElementById('st-pr'); if (pre) pre.textContent = pct + '%';
}

function showEnd() {
  const pct = tot > 0 ? Math.round(ok / tot * 100) : 0;
  const cls = pct >= 70 ? 'score-ottimo' : pct >= 50 ? 'score-medio' : 'score-basso';
  const msg = pct >= 70 ? 'Ottimo risultato! Continua così.'
    : pct >= 50 ? 'Buona base. Ripassate le domande sbagliate.'
    : 'Torna sulla teoria e riprova — puoi farcela!';

  document.getElementById('q-card').style.display   = 'none';
  document.getElementById('end-card').style.display = 'block';
  document.getElementById('end-score').className    = `end-score ${cls}`;
  document.getElementById('end-score').textContent  = pct + '%';
  document.getElementById('end-sub').textContent    = ok + '/' + tot + ' risposte corrette';
  document.getElementById('end-msg').textContent    = msg;
  document.getElementById('ef-ok').textContent      = ok;
  document.getElementById('ef-ko').textContent      = ko;
  document.getElementById('ef-tot').textContent     = tot;
  window.scrollTo(0, 0);
}

function restartQuiz() {
  document.getElementById('end-card').style.display = 'none';
  document.getElementById('q-card').style.display   = 'block';
  tot = ok = ko = idx = 0;
  updateStats(); buildPool(); nextQ();
}

function backToSelector() {
  document.getElementById('end-card').style.display = 'none';
  document.getElementById('q-card').style.display   = 'none';
  showQuizSelector();
}

function setTheory(el) {
  setAllNavInactive();
  if (el) el.classList.add('active');
  showSection('theory-view');
  closeSidebar();
}

function setDoc(el) {
  setAllNavInactive();
  if (el) el.classList.add('active');
  showSection('doc-view');
  closeSidebar();
}

// ── Navigazione sezione Progetti ────────────────────────────────────
function setProjects(el) {
  setAllNavInactive();
  if (el) el.classList.add('active');
  showSection('projects-view');
  closeSidebar();
}

function startExam(el) {
  if (el?.classList) { setAllNavInactive(); el.classList.add('active'); }
  showSection('exam-view');
  document.getElementById('exam-intro').style.display    = 'block';
  document.getElementById('exam-quiz-area').style.display = 'none';
  document.getElementById('exam-end').style.display      = 'none';
  closeSidebar();
}

function selectExamLen(n, btn) {
  examLength = n;
  document.querySelectorAll('#exam-intro .btn-mode').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function launchExam() {
  document.getElementById('exam-intro').style.display    = 'none';
  document.getElementById('exam-quiz-area').style.display = 'block';
  document.getElementById('exam-end').style.display      = 'none';

  let src = [...DB];
  for (let i = src.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [src[i], src[j]] = [src[j], src[i]];
  }
  examPool = src.slice(0, examLength);
  examIdx = 0; examOk = 0; examKo = 0; answered = false;
  examNextQ();
}

function examNextQ() {
  answered = false;
  if (examIdx >= examPool.length) { showExamEnd(); return; }
  const q    = examPool[examIdx]; examIdx++;
  const area = document.getElementById('exam-quiz-area');
  area.innerHTML = '<div id="exam-q-card" class="q-card"></div>';
  document.getElementById('exam-q-card').innerHTML =
    renderQuestionHTML(q, 'exam-q-card', true, examIdx, examPool.length);
  setTimeout(() => {
    document.querySelectorAll('#exam-q-card .opt').forEach(b => { b.disabled = false; });
    document.getElementById('exam-q-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
}

function showExamEnd() {
  document.getElementById('exam-quiz-area').style.display = 'none';
  const pct = examPool.length > 0 ? Math.round(examOk / examPool.length * 100) : 0;
  const cls = pct >= 70 ? 'score-ottimo' : pct >= 50 ? 'score-medio' : 'score-basso';
  const msg = pct >= 70
    ? `Esame superato! ${examOk}/${examPool.length} corrette — oltre la soglia del 70%.`
    : `Soglia non raggiunta (70%). Hai risposto correttamente a ${examOk}/${examPool.length}. Riprova!`;

  document.getElementById('exam-end').style.display  = 'block';
  document.getElementById('ex-score').className      = `end-score ${cls}`;
  document.getElementById('ex-score').textContent    = pct + '%';
  document.getElementById('ex-sub').textContent      = `${examOk}/${examPool.length} corrette`;
  document.getElementById('ex-msg').textContent      = msg;
  document.getElementById('ex-ok').textContent       = examOk;
  document.getElementById('ex-ko').textContent       = examKo;
  document.getElementById('ex-tot').textContent      = examPool.length;
  window.scrollTo(0, 0);
}

function resetExam() {
  document.getElementById('exam-intro').style.display    = 'block';
  document.getElementById('exam-quiz-area').style.display = 'none';
  document.getElementById('exam-end').style.display      = 'none';
}

function toggleSidebar() {
  const sb   = document.getElementById('sidebar');
  const ov   = document.getElementById('overlay');
  const hb   = document.getElementById('btn-hamburger');
  const open = sb.classList.toggle('open');
  hb.classList.toggle('open', open);
  ov.classList.toggle('visible', open);
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
  document.getElementById('btn-hamburger').classList.remove('open');
}