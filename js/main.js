/* ==============================
   Theme toggle (light / dark / system)
   ============================== */
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  function setIcon(btn) {
    const isDark =
      root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    btn.textContent = isDark ? '☀' : '☾';
    btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    setIcon(btn);
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const isDark =
        current === 'dark' ||
        (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
      const next = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setIcon(btn);
    });
  });
})();

/* ==============================
   Mobile sidebar
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  if (!menuBtn || !sidebar) return;
  menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
  sidebar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') sidebar.classList.remove('open');
  });
});

/* ==============================
   Modal system
   ============================== */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // Card click → open modal via data-modal attribute
  document.querySelectorAll('[data-modal]').forEach((el) => {
    el.addEventListener('click', (e) => {
      // Don't trigger if clicking on a link inside the card
      if (e.target.closest('a')) return;
      openModal(el.getAttribute('data-modal'));
    });
    el.style.cursor = 'pointer';
  });

  // Backdrop click closes
  document.querySelectorAll('.modal-backdrop').forEach((bd) => {
    bd.addEventListener('click', (e) => {
      if (e.target === bd) closeModal(bd);
    });
  });

  // Close button
  document.querySelectorAll('.modal-close').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bd = btn.closest('.modal-backdrop');
      if (bd) closeModal(bd);
    });
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.modal-backdrop.open').forEach(closeModal);
    const lb = document.querySelector('.lightbox.open');
    if (lb) lb.classList.remove('open');
  });
});

/* ==============================
   Lightbox for images
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<img alt="" />';
    document.body.appendChild(lightbox);
  }
  const img = lightbox.querySelector('img');

  document.body.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.tagName === 'IMG' &&
      (target.closest('.gallery') || target.dataset.zoom === 'true')
    ) {
      img.src = target.src;
      img.alt = target.alt || '';
      lightbox.classList.add('open');
    } else if (target.closest('.lightbox')) {
      lightbox.classList.remove('open');
    }
  });
});

/* ==============================
   Reveal on scroll
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || items.length === 0) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
});

/* ==============================
   Active nav highlighting
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
