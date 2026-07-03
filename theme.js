// ═══════════════════════════════════════════════════════════════════
// theme.js — Toggle tema chiaro/scuro, condiviso da home.html e index.html
// Applica subito il tema salvato (nessun flash), poi collega il pulsante.
// ═══════════════════════════════════════════════════════════════════

(function () {
  var STORAGE_KEY = 'quiz-theme';
  var saved = localStorage.getItem(STORAGE_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function () {
  var STORAGE_KEY = 'quiz-theme';
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  var icon = btn.querySelector('.material-symbols-outlined');

  function syncIcon() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    if (icon) icon.textContent = current === 'dark' ? 'light_mode' : 'dark_mode';
    btn.title = current === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro';
  }

  syncIcon();

  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    syncIcon();
  });
});
