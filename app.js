// ═══════════════════════════════════════════════════════════════════
// app.js — Logica principale
// IFTS Quiz · ANAP Sardegna
// I dati vengono caricati da db.json via fetch()
// ═══════════════════════════════════════════════════════════════════

// ── VARIABILI GLOBALI (riempite dopo il fetch) ──────────────────────
let MATERIE    = [];
let DB         = [];
let TEORIA     = {};
let DOC        = {};
let REAL_QUIZ  = {};

// ── STATO APPLICAZIONE ─────────────────────────────────────────────
const letters = ['A', 'B', 'C', 'D', 'E'];

let currentFilter = 'all';
let pool = [], idx = 0, tot = 0, ok = 0, ko = 0;
let answered = false;
let quizLength = 20;

let examPool = [], examIdx = 0, examOk = 0, examKo = 0, examLength = 20;

// ── CARICAMENTO DB.JSON ────────────────────────────────────────────
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

      // Rimuove eventuali chiavi di servizio (_istruzioni, _esempio)
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

// ── INIZIALIZZAZIONE ───────────────────────────────────────────────
function init() {
  buildSidebar();
  updateCounts();
  showSection('quiz-view');
  showQuizSelector();
  const firstNav = document.querySelector('.nav-item');
  if (firstNav) firstNav.classList.add('active');
}

// ── COSTRUZIONE DINAMICA SIDEBAR ───────────────────────────────────
function buildSidebar() {
  const quizList  = document.getElementById('sidebar-quiz-list');
  const theorList = document.getElementById('sidebar-theory-list');
  const docList   = document.getElementById('sidebar-doc-list');
  const realList  = document.getElementById('sidebar-real-list');

  MATERIE.forEach(m => {
    quizList.innerHTML += `
      <div class="nav-item" onclick="setQuiz('${m.key}', this)">
        <span class="nav-dot"></span>${m.label}
        <span class="nav-count" id="cnt-${m.key}">0</span>
      </div>`;

    // Storia Sardegna usa icona linea temporale nella sidebar teoria
    const theoriaIcon = m.key === 'storia_sardegna' ? '🗺️ ' : '';
    theorList.innerHTML += `
      <div class="nav-item" onclick="setTheory('${m.key}', this)">
        <span class="nav-dot"></span>${theoriaIcon}${m.label}
      </div>`;

    if (DOC[m.key]) {
      docList.innerHTML += `
        <div class="nav-item" onclick="setDoc('${m.key}', this)">
          <span class="nav-dot"></span>${m.label}
        </div>`;
    }
  });

  // Quiz reale — solo materie con dati
  const hasReal = Object.keys(REAL_QUIZ).filter(k => Array.isArray(REAL_QUIZ[k]));
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
}

function buildTheorySections() {
  const container = document.getElementById('theory-view');
  MATERIE.forEach(m => {
    const t    = TEORIA[m.key];
    const html = t ? t.html : '<div class="empty-state"><div class="empty-icon">📝</div><div class="empty-title">Contenuti in arrivo</div><div class="empty-sub">Il materiale per questa materia verrà inserito nelle prossime sessioni.</div></div>';
    const desc = t ? t.desc : '';

    // Badge speciale per Storia Sardegna
    const badge = m.key === 'storia_sardegna'
      ? '<span class="section-badge" style="color:var(--sand);background:var(--sand-dim);border-color:rgba(217,181,106,.2)">🗺️ STORIA &amp; TERRITORIO</span>'
      : '<span class="section-badge">📖 TEORIA</span>';

    container.innerHTML += `
      <div class="theory-section" id="th-${m.key}">
        <div class="section-header">
          ${badge}
          <h1>${m.label}</h1>
          ${desc ? `<p>${desc}</p>` : ''}
        </div>
        ${html}
      </div>`;
  });
}

function buildDocSections() {
  const container = document.getElementById('doc-view');
  MATERIE.forEach(m => {
    const d    = DOC[m.key];
    if (!d) return;
    const html = d ? d.html : '<div class="empty-state"><div class="empty-icon">📂</div><div class="empty-title">Documentazione in arrivo</div><div class="empty-sub">Il materiale per questa materia verrà inserito nelle prossime sessioni.</div></div>';
    const desc = d ? d.desc : '';
    container.innerHTML += `
      <div class="doc-section" id="doc-${m.key}">
        <div class="section-header">
          <span class="section-badge">📄 DOCUMENTAZIONE</span>
          <h1>${m.label}</h1>
          ${desc ? `<p>${desc}</p>` : ''}
        </div>
        ${html}
      </div>`;
  });
}

// ── CONTATORI ──────────────────────────────────────────────────────
function updateCounts() {
  MATERIE.forEach(m => {
    const n  = DB.filter(q => q.m === m.key).length;
    const el = document.getElementById('cnt-' + m.key);
    if (el) el.textContent = n;
  });
  const allEl = document.getElementById('cnt-all');
  if (allEl) allEl.textContent = DB.length;
}

// ── NAVIGAZIONE ────────────────────────────────────────────────────
function showSection(id) {
  ['quiz-view', 'exam-view', 'theory-view', 'doc-view', 'realquiz-view'].forEach(s => {
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

// ── QUIZ ───────────────────────────────────────────────────────────
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
  setBottomNav('quiz');
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

  const diffMap      = { base: 'diff-base', medio: 'diff-medio', avanzato: 'diff-avanzato' };
  const materiaLabel = MATERIE.find(m => m.key === q.m)?.label || q.m;
  const nextLabel    = (isExam ? examIdx : idx) < (isExam ? examPool.length : pool.length)
    ? 'Prossima →' : 'Vedi risultati →';

  const pct = Math.round((qNum / qTotal) * 100);

  return `
    <div class="quiz-progress-wrap">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${pct}%"></div>
      </div>
      <span class="quiz-progress-label">${qNum} / ${qTotal}</span>
    </div>
    <div class="q-top">
      <span class="q-materia">${materiaLabel}</span>
      <div class="q-meta">
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
    if (j === correct)         b.classList.add(i === j ? 'correct' : 'show-c');
    else if (j === i && !isOk) b.classList.add('wrong');
  });

  if (!isExam) {
    const fb = document.getElementById('feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.className     = 'feedback ' + (isOk ? 'ok' : 'ko');
      fb.innerHTML     = `
        <div class="fb-title">${isOk ? '✅ Esatto!' : '❌ Risposta errata'}</div>
        <div class="fb-exp">${q.exp}</div>`;
    }
    updateStats();
  }

  const acts = document.getElementById('q-actions-' + containerId);
  if (acts) acts.style.display = 'flex';
}

function updateStats() {
  const pct = tot > 0 ? Math.round(ok / tot * 100) : 0;
  [['st-tot','ms-tot', tot], ['st-ok','ms-ok', ok], ['st-ko','ms-ko', ko]].forEach(([sid, mid, val]) => {
    const se = document.getElementById(sid); if (se) se.textContent = val;
    const me = document.getElementById(mid); if (me) me.textContent = val;
  });
  [['st-pct','ms-pct'], ['st-bar','ms-bar'], ['st-pl','ms-pl'], ['st-pr','ms-pr']].forEach(([sid, mid]) => {
    const pctStr = tot > 0 ? pct + '%' : '—';
    if (sid.includes('pct')) {
      const se = document.getElementById(sid); if (se) se.textContent = pctStr;
      const me = document.getElementById(mid); if (me) me.textContent = pctStr;
    } else if (sid.includes('bar')) {
      const se = document.getElementById(sid); if (se) se.style.width = pct + '%';
      const me = document.getElementById(mid); if (me) me.style.width = pct + '%';
    } else if (sid.includes('pl')) {
      const se = document.getElementById(sid); if (se) se.textContent = ok + '/' + tot;
      const me = document.getElementById(mid); if (me) me.textContent = ok + '/' + tot;
    } else if (sid.includes('pr')) {
      const se = document.getElementById(sid); if (se) se.textContent = pct + '%';
      const me = document.getElementById(mid); if (me) me.textContent = pct + '%';
    }
  });
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

// ── TEORIA ─────────────────────────────────────────────────────────
function setTheory(key, el) {
  setAllNavInactive();
  if (el) el.classList.add('active');
  showSection('theory-view');
  document.querySelectorAll('.theory-section').forEach(s => s.classList.remove('active'));
  const th = document.getElementById('th-' + key);
  if (th) th.classList.add('active');
  setBottomNav('teoria');
  closeSidebar();
}

// ── DOCUMENTAZIONE ──────────────────────────────────────────────────
function setDoc(key, el) {
  setAllNavInactive();
  if (el) el.classList.add('active');
  showSection('doc-view');
  document.querySelectorAll('.doc-section').forEach(s => s.classList.remove('active'));
  const dc = document.getElementById('doc-' + key);
  if (dc) dc.classList.add('active');
  setBottomNav('doc');
  closeSidebar();
}

// ── ESAME ───────────────────────────────────────────────────────────
function startExam(el) {
  if (el?.classList) { setAllNavInactive(); el.classList.add('active'); }
  showSection('exam-view');
  document.getElementById('exam-intro').style.display     = 'block';
  document.getElementById('exam-quiz-area').style.display = 'none';
  document.getElementById('exam-end').style.display       = 'none';
  setBottomNav('esame');
  closeSidebar();
}

function selectExamLen(n, btn) {
  examLength = n;
  document.querySelectorAll('#exam-intro .btn-mode').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function launchExam() {
  document.getElementById('exam-intro').style.display     = 'none';
  document.getElementById('exam-quiz-area').style.display = 'block';
  document.getElementById('exam-end').style.display       = 'none';

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
  document.getElementById('exam-intro').style.display     = 'block';
  document.getElementById('exam-quiz-area').style.display = 'none';
  document.getElementById('exam-end').style.display       = 'none';
}

// ── MOBILE: SIDEBAR ─────────────────────────────────────────────────
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

// ── MOBILE: BOTTOM NAV ──────────────────────────────────────────────
function setBottomNav(id) {
  ['quiz', 'esame', 'teoria', 'doc', 'stats'].forEach(k => {
    document.getElementById('bn-' + k)?.classList.remove('active');
  });
  document.getElementById('bn-' + id)?.classList.add('active');
}

function bnQuiz()  { setBottomNav('quiz');  showSection('quiz-view'); showQuizSelector(); }
function bnEsame() { setBottomNav('esame'); startExam(null); }
function bnTeoria() {
  setBottomNav('teoria'); showSection('theory-view');
  document.querySelectorAll('.theory-section').forEach(s => s.classList.remove('active'));
  const first = document.querySelector('.theory-section');
  if (first) first.classList.add('active');
}
function bnDoc() {
  setBottomNav('doc'); showSection('doc-view');
  document.querySelectorAll('.doc-section').forEach(s => s.classList.remove('active'));
  const first = document.querySelector('.doc-section');
  if (first) first.classList.add('active');
}
function bnStats() { setBottomNav('stats'); openStats(); }

function openStats() {
  const m = document.getElementById('stats-modal');
  if (m) m.style.display = 'flex';
}
function closeStats() {
  const m = document.getElementById('stats-modal');
  if (m) m.style.display = 'none';
  setBottomNav('quiz');
}
