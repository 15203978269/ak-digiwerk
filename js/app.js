/* ============================================================
   APP — page router + mobile nav + ribbons + partial loader
   ============================================================ */

/* Home is inlined in index.html — only load OTHER pages */
const PAGES = [
  { id: 'services',     file: 'pages/services.html'      },
  { id: 'casestudies',  file: 'pages/case-studies.html'  },
  { id: 'contact',      file: 'pages/contact.html'       },
  { id: 'impressum',    file: 'pages/impressum.html'     },
  { id: 'datenschutz',  file: 'pages/datenschutz.html'   }
];

/* ── Page router ────────────────────────────────────────── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));

  const pg = document.getElementById('page-' + id);
  if (pg) pg.classList.add('active');

  const navId = id === 'casestudies' ? 'cs' : id;
  const nb = document.getElementById('nav-' + navId);
  if (nb) nb.classList.add('active');

  window.scrollTo(0, 0);
}

/* ── Mobile nav toggle ──────────────────────────────────── */
function toggleMobileNav() {
  document.getElementById('nav-links').classList.toggle('open');
  document.getElementById('nav-burger').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('nav-burger').classList.remove('open');
}

/* ── Case study ribbon expand/collapse ───────────────────── */
function toggleRibbon(id) {
  const all = document.querySelectorAll('.ribbon');
  const target = document.getElementById(id);
  if (!target) return;
  const wasOpen = target.classList.contains('open');
  all.forEach(r => r.classList.remove('open'));
  if (!wasOpen) target.classList.add('open');
}

/* ── Problem/Approach/Results tab switcher ──────────────── */
function psrTab(btn, ribbonId, pane) {
  const ribbon = document.getElementById(ribbonId);
  if (!ribbon) return;
  ribbon.querySelectorAll('.psr-tab').forEach(t => t.classList.remove('active'));
  ribbon.querySelectorAll('.psr-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const target = document.getElementById(ribbonId + '-' + pane);
  if (target) target.classList.add('active');
}

/* ── Profile image loader ────────────────────────────────── */
function initProfileImage() {
  const wrap = document.getElementById('profile-wrap');
  if (!wrap) return;
  const img = new Image();
  img.onload = function() {
    const el = document.createElement('img');
    el.src = 'assets/mak.png';
    el.alt = 'Affan Khan';
    el.width = 200;
    el.height = 250;
    wrap.replaceWith(el);
  };
  img.src = 'assets/mak.png';
}

/* ── Load remaining page partials ────────────────────────── */
async function loadPages() {
  const container = document.getElementById('page-container');
  const html = await Promise.all(
    PAGES.map(p => fetch(p.file).then(r => r.text()))
  );
  container.insertAdjacentHTML('beforeend', html.join('\n'));
}

/* ── Boot sequence ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  await loadPages();
  initCookieBanner();
  initContactForm();
  initProfileImage();
  initLang();
});
