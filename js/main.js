/* Food Loss Portal — Main JS */

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav    = document.getElementById('nav-main');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Sticky header shadow on scroll
const header = document.getElementById('site-header');
if (header) {
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 4
      ? '0 4px 20px rgba(0,0,0,0.35)'
      : '0 2px 12px rgba(0,0,0,0.25)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
