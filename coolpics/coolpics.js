console.log('coolpics.js loaded');
window.addEventListener('error', e => console.log('JS error:', e.message));


// ===== Mobile menu toggle =====
const menuBtn = document.getElementById('menu-toggle');
const navList = document.getElementById('primary-nav');

if (menuBtn && navList) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu after tapping a link (mobile UX)
  navList.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A' && navList.classList.contains('open')) {
      navList.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// ===== Modal logic =====
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');

function openModal(src, alt) {
  if (!modal || !modalImg) return;
  modalImg.src = src;
  modalImg.alt = alt || '';
  if (modalCaption) modalCaption.textContent = alt || '';
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('hidden', '');
  modalImg.src = '';
  document.body.style.overflow = '';
}

// Open on gallery image click
document.addEventListener('click', (e) => {
  const t = e.target;
  if (t && t.matches('.gallery img')) {
    const full = t.getAttribute('data-full') || t.getAttribute('src');
    const alt = t.getAttribute('alt') || '';
    openModal(full, alt);
  }
});

// Close by clicking outside the image (backdrop) or the X button
if (modal) {
  modal.addEventListener('click', (e) => {
    const clickTarget = e.target;
    if (!clickTarget) return;
    // Clicked backdrop
    if (clickTarget instanceof Element && clickTarget.closest('[data-close="backdrop"]') && !clickTarget.closest('.modal-content img')) {
      // Ensure we didn't click the image itself
      if (!e.target.closest('img')) closeModal();
      return;
    }
    // Clicked the X button
    if (clickTarget instanceof Element && clickTarget.closest('[data-close="button"]')) {
      closeModal();
    }
  });
}

// Close with Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
    closeModal();
  }
});
