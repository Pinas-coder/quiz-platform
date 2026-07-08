// ═══════════════════════════════════════════════════════════════════
// quiz.js — Logica pagina quiz.html
// Contiene: quiz per materia/misto + Modalità Esame (tab in alto)
// ═══════════════════════════════════════════════════════════════════

let currentFilter = 'all';
let pool = [], idx = 0, tot = 0, ok = 0, ko = 0;
let answered = false;
let quizLength = 20;

let examPool = [], examIdx = 0, examOk = 0, examKo = 0, examLength = 20;

document.addEventListener('DOMContentLoaded', () => {
  loadDB(initQuiz);
});

function initQuiz() {
  const sel = document.getElementById('materia-select');
  MATERIE.forEach(m => {
    sel.innerHTML += `<option value="${m.key}">${m.label}</option>`;
  });
  updateStats();
  showQuizSelector();
}

// ── TAB: Quiz / Esame ────────────────────────────────────────────
function switchMode(mode, btn) {
  document.querySelectorAll('.mode-tab').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('quiz-panel').style.display = mode === 'quiz' ? 'block' : 'none';
  document.getElementById('exam-panel').style.display = mode === 'exam' ? 'block' : 'none';
}

// ── QUIZ PER MATERIA / MISTO ─────────────────────────────────────
function onMateriaChange(sel) {
  currentFilter = sel.value;
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
  document.getElementById('q-card').style.display         = 'block';
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

// ── MODALITÀ ESAME ────────────────────────────────────────────────
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