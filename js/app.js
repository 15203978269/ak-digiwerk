/* ============================================================
   APP — page router, partial loader, boot sequence (v2)
   ============================================================ */

/* Pages to load, in order */
const PAGES = [
  { id: 'home',         file: 'pages/home.html'          },
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

  // Nav button highlight ("casestudies" → "cs" in the nav id)
  const navId = id === 'casestudies' ? 'cs' : id;
  const nb = document.getElementById('nav-' + navId);
  if (nb) nb.classList.add('active');

  window.scrollTo(0, 0);
}

/* ── Profile image loader (replaces placeholder if image exists) ── */
function initProfileImage() {
  const wrap = document.getElementById('profile-wrap');
  if (!wrap) return;
  const img = new Image();
  img.onload = function() {
    const el = document.createElement('img');
    el.src = 'assets/mak.png';
    el.alt = 'Affan Khan';
    wrap.replaceWith(el);
  };
  img.src = 'assets/mak.png';
}

/* ── Load all page partials in parallel ───────────────────── */
async function loadPages() {
  const container = document.getElementById('page-container');
  const html = await Promise.all(
    PAGES.map(p => fetch(p.file).then(r => r.text()))
  );
  container.innerHTML = html.join('\n');
}

/* ── Boot sequence ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  await loadPages();
  initCookieBanner();
  initContactForm();
  initProfileImage();
  initLang();
});
