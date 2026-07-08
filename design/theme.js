// theme.js — gestione tema chiaro/scuro + bottone "torna su" (persistente su localStorage)
(function () {
  const KEY = 'quiz-theme';
  const stored = localStorage.getItem(KEY);
  if (stored === 'light') document.documentElement.classList.add('light');

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const icon = btn.querySelector('.material-symbols-outlined');
      const sync = () => {
        const isLight = document.documentElement.classList.contains('light');
        if (icon) icon.textContent = isLight ? 'light_mode' : 'dark_mode';
      };
      sync();
      btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        localStorage.setItem(KEY, document.documentElement.classList.contains('light') ? 'light' : 'dark');
        sync();
      });
    }

    // ── Bottone "torna su" ─────────────────────────────────────────
    const topBtn = document.getElementById('back-to-top');
    if (topBtn) {
      const toggleVisible = () => {
        topBtn.classList.toggle('visible', window.scrollY > 400);
      };
      toggleVisible();
      window.addEventListener('scroll', toggleVisible, { passive: true });
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
})();