// ═══════════════════════════════════════════════════════════════════
// realquiz.js — Logica Quiz Reale (domande ufficiali del docente)
// I dati vengono letti dalle variabili globali popolate da app.js
// dopo il fetch() di db.json. Dipende da app.js caricato prima.
// ═══════════════════════════════════════════════════════════════════

let rqSubject = null;
let rqAnswers = {};   // { questionIndex: selectedOptionIndex }

// ── AVVIA QUIZ REALE ────────────────────────────────────────────────
function startRealQuiz(subject, el) {
  setAllNavInactive();
  if (el) el.classList.add('active');
  rqSubject = subject;

  showSection('realquiz-view');

  const m = MATERIE.find(x => x.key === subject);
  document.getElementById('rq-title').textContent = `Quiz reale — ${m?.label || subject}`;

  document.getElementById('rq-intro').style.display = 'block';
  document.getElementById('rq-area').style.display  = 'none';
  document.getElementById('rq-end').style.display   = 'none';

  setBottomNav('quiz');
  closeSidebar();
}

// ── LANCIA IL QUIZ REALE ────────────────────────────────────────────
function launchRealQuiz() {
  rqAnswers = {};

  document.getElementById('rq-intro').style.display = 'none';
  document.getElementById('rq-end').style.display   = 'none';

  const area      = document.getElementById('rq-area');
  area.style.display = 'block';

  const questions = REAL_QUIZ[rqSubject];
  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    area.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⚠️</div>
        <div class="empty-title">Nessuna domanda disponibile</div>
        <div class="empty-sub">Il quiz reale per questa materia non è ancora stato inserito in db.json.</div>
      </div>`;
    return;
  }

  let html = '';
  questions.forEach((q, qi) => {
    const mLabel = MATERIE.find(m => m.key === rqSubject)?.label || rqSubject;
    html += `
      <div class="q-card" id="rq-q-${qi}" style="margin-bottom:1rem">
        <div class="q-top">
          <span class="q-materia">${mLabel} — Quiz reale</span>
          <div class="q-meta">
            <span class="q-counter">Dom. ${q.n || qi + 1} / ${questions.length}</span>
          </div>
        </div>
        <div class="q-text">${q.q}</div>
        <div class="opts" id="rq-opts-${qi}">
          ${q.opts.map((opt, oi) => `
            <button class="opt" id="rq-opt-${qi}-${oi}" onclick="rqChoose(${qi},${oi})">
              <span class="opt-l">${letters[oi]}</span>${opt}
            </button>`).join('')}
        </div>
      </div>`;
  });

  html += `
    <div style="padding:1.5rem 0;display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn-restart"
        style="background:var(--yellow);color:#000;font-weight:600"
        id="rq-submit-btn"
        onclick="submitRealQuiz()">
        📤 Consegna quiz
      </button>
      <button class="btn-restart-sec" onclick="startRealQuiz('${rqSubject}',null)">
        Annulla
      </button>
    </div>
    <div id="rq-warn" style="display:none;color:var(--red);font-size:13px;margin-top:-8px;padding:0 0 1rem 0"></div>`;

  area.innerHTML = html;
  window.scrollTo(0, 0);
}

// ── SCELTA RISPOSTA ─────────────────────────────────────────────────
function rqChoose(qi, oi) {
  rqAnswers[qi] = oi;
  const opts = document.querySelectorAll(`#rq-opts-${qi} .opt`);
  opts.forEach((b, i) => {
    b.classList.remove('selected-rq');
    if (i === oi) b.classList.add('selected-rq');
  });
}

// ── CONSEGNA ────────────────────────────────────────────────────────
function submitRealQuiz() {
  const questions  = REAL_QUIZ[rqSubject] || [];
  const unanswered = questions.filter((_, i) => rqAnswers[i] === undefined).length;
  const warnEl     = document.getElementById('rq-warn');
  const submitBtn  = document.getElementById('rq-submit-btn');

  if (unanswered > 0) {
    warnEl.style.display = 'block';
    warnEl.textContent   =
      `⚠️ Hai lasciato ${unanswered} domanda/e senza risposta. Saranno conteggiate come errate.`;

    // Evidenzia la prima senza risposta e scrolla
    const firstUnanswered = questions.findIndex((_, i) => rqAnswers[i] === undefined);
    if (firstUnanswered >= 0) {
      const el = document.getElementById(`rq-q-${firstUnanswered}`);
      if (el) {
        el.style.borderColor = 'var(--red)';
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    // Al secondo clic consegna comunque
    submitBtn.textContent = '📤 Consegna comunque';
    submitBtn.onclick     = finalizeRealQuiz;
    return;
  }

  finalizeRealQuiz();
}

// ── MOSTRA RISULTATI ────────────────────────────────────────────────
function finalizeRealQuiz() {
  const questions = REAL_QUIZ[rqSubject] || [];
  let correct     = 0;

  let reviewHTML = `
    <div style="margin-top:1rem">
      <h3 style="font-size:15px;font-weight:600;margin-bottom:1rem;color:var(--text2)">
        📋 Revisione risposte
      </h3>`;

  questions.forEach((q, qi) => {
    const userAns = rqAnswers[qi];
    const isOk    = userAns === q.ans;
    if (isOk) correct++;

    const color = isOk ? 'var(--green)' : 'var(--red)';
    const icon  = isOk ? '✅' : '❌';

    reviewHTML += `
      <div style="background:var(--surface2);border:1px solid ${color};border-radius:var(--radius);padding:1rem;margin-bottom:.75rem">
        <div style="font-size:13px;font-weight:600;color:${color};margin-bottom:.4rem">
          ${icon} Dom. ${q.n || qi + 1} — ${isOk ? 'Corretta' : 'Errata'}
        </div>
        <div style="font-size:13px;color:var(--text);margin-bottom:.75rem">${q.q}</div>`;

    q.opts.forEach((opt, oi) => {
      let bg  = 'var(--surface3)';
      let col = 'var(--text2)';
      let pre = '';

      if (oi === q.ans)                        { bg = 'var(--green-dim)';  col = 'var(--green)';  pre = '✓ '; }
      if (!isOk && oi === userAns)              { bg = 'var(--red-dim)';    col = 'var(--red)';    pre = '✗ '; }
      if (userAns === undefined && oi === q.ans){ bg = 'var(--yellow-dim)'; col = 'var(--yellow)'; pre = '→ '; }

      reviewHTML += `
        <div style="font-size:12px;padding:5px 8px;border-radius:6px;background:${bg};color:${col};margin-bottom:3px">
          ${pre}${letters[oi]}. ${opt}
        </div>`;
    });

    if (!isOk) {
      reviewHTML += `
        <div style="margin-top:.6rem;font-size:12px;background:var(--surface);
          border-left:2px solid var(--accent);padding:.6rem .75rem;
          border-radius:0 6px 6px 0;color:var(--text2)">
          <strong style="color:var(--accent)">Spiegazione:</strong> ${q.exp}
        </div>`;
    }

    reviewHTML += `</div>`;
  });

  reviewHTML += `</div>`;

  const total = questions.length;
  const pct   = Math.round(correct / total * 100);
  const cls   = pct >= 90 ? 'score-ottimo' : pct >= 70 ? 'score-medio' : 'score-basso';
  const msg   = pct >= 90 ? 'Eccellente!' : pct >= 70 ? 'Buon risultato.' : 'Da ripassare.';

  document.getElementById('rq-area').style.display = 'none';
  document.getElementById('rq-end').style.display  = 'block';

  document.getElementById('rq-score').className  = `end-score ${cls}`;
  document.getElementById('rq-score').textContent = pct + '%';
  document.getElementById('rq-ok').textContent    = correct;
  document.getElementById('rq-ko').textContent    = total - correct;
  document.getElementById('rq-tot').textContent   = total;
  document.getElementById('rq-sub2').textContent  = `${correct} su ${total} risposte corrette`;
  document.getElementById('rq-msg').textContent   = msg;
  document.getElementById('rq-review').innerHTML  = reviewHTML;

  window.scrollTo(0, 0);
}