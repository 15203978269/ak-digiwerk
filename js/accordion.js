/* ============================================================
   CASE STUDY ACCORDION + PROBLEM/SOLUTION/RESULTS TABS
   ============================================================ */

/* Toggle an accordion card open/closed. Closes any other open card. */
function toggleCS(id) {
  const card = document.getElementById('card-' + id);
  if (!card) return;
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.acc-card').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
}

/* Switch between Problem / Solution / Results tabs inside a card. */
function tab(btn, cid, pane) {
  const right = btn.closest('.acc-right');
  right.querySelectorAll('.psr-tab').forEach(t => t.classList.remove('active'));
  right.querySelectorAll('.psr-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const t = document.getElementById(cid + '-' + pane);
  if (t) t.classList.add('active');
}
