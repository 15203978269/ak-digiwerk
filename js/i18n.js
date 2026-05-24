/* ============================================================
   LANGUAGE SWITCHER (i18n)
   Depends on:  window.T.en, window.T.de  (from /js/data/)
   Exposes:     setLang(lang), window.currentLang
   ============================================================ */
window.currentLang = 'en';

function setLang(l) {
  window.currentLang = l;
  const d = window.T[l];
  if (!d) return;

  // Replace every element with a `data-key` attribute
  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.getAttribute('data-key');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });

  // Toggle the EN / DE buttons
  document.getElementById('lb-en').classList.toggle('on', l === 'en');
  document.getElementById('lb-de').classList.toggle('on', l === 'de');
  document.documentElement.lang = l;

  // Cookie banner is outside the data-key system
  const cb = document.getElementById('cb-text');
  if (cb) cb.innerHTML = l === 'de'
    ? 'Diese Website verwendet ausschließlich technisch notwendige Cookies. <a href="#" onclick="showPage(\'datenschutz\');closeBanner();return false;">Datenschutzerklärung</a>'
    : 'This website uses technically necessary cookies only. <a href="#" onclick="showPage(\'datenschutz\');closeBanner();return false;">Privacy Policy</a>';

  try { localStorage.setItem('ak_lang', l); } catch(e) {}
}

/* ── Auto language detection on first visit ───────────────── */
function initLang() {
  try {
    const saved = localStorage.getItem('ak_lang');
    if (saved === 'en' || saved === 'de') { setLang(saved); return; }
  } catch(e) {}
  if ((navigator.language || '').toLowerCase().startsWith('de')) setLang('de');
}
