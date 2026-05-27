/* ============================================================
   APP — page router + mobile nav + partial loader (v3)
   Home page is INLINED in index.html for SEO.
   Other pages load via fetch.
   ============================================================ */

/* Pages to load — home is excluded because it's inlined */
const PAGES = [
  { id: 'services',     file: 'pages/services.html'      },
  { id: 'casestudies',  file: 'pages/case-studies.html'  },
  { id: 'contact',      file: 'pages/contact.html'       },
  { id: 'impressum',    file: 'pages/impressum.html'     },
  { id: 'datenschutz',  file: 'pages/datenschutz.html'   }
];

/* ── Page router ──────────────────────────────────────────── */
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

/* ── Mobile nav toggle ────────────────────────────────────── */
function toggleMobileNav() {
  document.getElementById('nav-links').classList.toggle('open');
  document.getElementById('nav-burger').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('nav-burger').classList.remove('open');
}

/* ── Profile image loader ─────────────────────────────────── */
function initProfileImage() {
  const wrap = document.getElementById('profile-wrap');
  if (!wrap) return;
  const img = new Image();
  img.onload = function() {
    const el = document.createElement('img');
    el.src = 'assets/mak.png';
    el.alt = 'Affan Khan';
    el.width = 240;
    el.height = 300;
    wrap.replaceWith(el);
  };
  img.src = 'assets/mak.png';
}

/* ── Load remaining page partials ─────────────────────────── */
async function loadPages() {
  const container = document.getElementById('page-container');
  const html = await Promise.all(
    PAGES.map(p => fetch(p.file).then(r => r.text()))
  );
  // Append after the inlined home page
  container.insertAdjacentHTML('beforeend', html.join('\n'));
}

/* ── Boot sequence ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  await loadPages();
  initCookieBanner();
  initContactForm();
  initProfileImage();
  initLang();
});
