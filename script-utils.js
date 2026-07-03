const fs = require('fs');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function bulletList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function tagRow(...tags) {
  return (
    '<div class="tag-row">' +
    tags
      .map((tag) => {
        const [label, accent] = Array.isArray(tag) ? tag : [tag, false];
        const klass = accent ? 'tag accent' : 'tag';
        return `<span class="${klass}">${escapeHtml(label)}</span>`;
      })
      .join('') +
    '</div>'
  );
}

function conceptCard(title, intro, bullets, ...tags) {
  return (
    '<div class="concept-card">' +
    `<h3>${escapeHtml(title)}</h3>` +
    `<p>${escapeHtml(intro)}</p>` +
    bulletList(bullets) +
    (tags.length ? tagRow(...tags) : '') +
    '</div>'
  );
}

function docCard(title, intro, sections) {
  const body = [`<h3>${escapeHtml(title)}</h3>`, `<p>${escapeHtml(intro)}</p>`];
  for (const [subtitle, paragraph, bullets] of sections) {
    body.push(`<h4>${escapeHtml(subtitle)}</h4>`);
    body.push(`<p>${escapeHtml(paragraph)}</p>`);
    if (bullets && bullets.length) {
      body.push(bulletList(bullets));
    }
  }
  return `<div class="doc-card">${body.join('')}</div>`;
}

function mcq(m, diff, q, opts, ans, exp) {
  return { m, diff, q, opts, ans, exp };
}

function ensureSubject(list, key, label) {
  const items = Array.isArray(list) ? [...list] : [];
  if (!items.some((item) => item && item.key === key)) {
    items.push({ key, label });
  }
  return items;
}

function removeQuestionsForSubject(list, key) {
  return (Array.isArray(list) ? list : []).filter((item) => item && item.m !== key);
}

function sortQuestions(list) {
  return [...(Array.isArray(list) ? list : [])].sort((a, b) => {
    const aSubject = a?.m || '';
    const bSubject = b?.m || '';
    if (aSubject !== bSubject) return aSubject.localeCompare(bSubject);
    const aDiff = a?.diff || '';
    const bDiff = b?.diff || '';
    if (aDiff !== bDiff) return aDiff.localeCompare(bDiff);
    const aQ = a?.q || '';
    const bQ = b?.q || '';
    return aQ.localeCompare(bQ);
  });
}

module.exports = {
  bulletList,
  conceptCard,
  docCard,
  ensureSubject,
  escapeHtml,
  mcq,
  readJson,
  removeQuestionsForSubject,
  sortQuestions,
  tagRow,
  writeJson,
};
