/* ============================================================
   CONTACT FORM HANDLER
   Posts the form to Formspree (or any compatible endpoint).
   To activate:
     1. Sign up at https://formspree.io
     2. Create a form → copy your endpoint URL
     3. Replace the `action="..."` on the <form> in pages/contact.html
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('form-submit');
    const ok  = document.getElementById('form-ok');
    const err = document.getElementById('form-err');

    btn.disabled = true;
    btn.textContent = '…';
    ok.style.display  = 'none';
    err.style.display = 'none';

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        ok.style.display = 'block';
        form.reset();
      } else {
        err.style.display = 'block';
      }
    } catch (_) {
      err.style.display = 'block';
    }

    btn.disabled = false;
    btn.innerHTML = (window.T[window.currentLang] && window.T[window.currentLang].fsub) || 'Send message →';
  });
}
