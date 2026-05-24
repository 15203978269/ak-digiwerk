/* ============================================================
   COOKIE BANNER
   Closes banner and remembers the decision in localStorage.
   ============================================================ */
function closeBanner() {
  const b = document.getElementById('cookie-banner');
  if (b) {
    b.style.transition = 'opacity .3s';
    b.style.opacity = '0';
    setTimeout(() => b.remove(), 300);
  }
  try { localStorage.setItem('ak_cookie', '1'); } catch(e) {}
}

/* Auto-close if user has already dismissed the banner before. */
function initCookieBanner() {
  try {
    if (localStorage.getItem('ak_cookie')) closeBanner();
  } catch(e) {}
}
