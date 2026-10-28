/* Run a whole-page change as a short crossfade where the browser supports it */
function crossfade(fn) {
  if (!document.startViewTransition) return fn();
  // A skipped transition (fast double-click, hidden tab) still runs fn; only the fade is dropped
  document.startViewTransition(fn).ready.catch(() => {});
}

/* ==============================
   Theme toggle (light / dark / system)
   ============================== */
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');

  // Icons are drawn, never glyphs: one stroke weight, currentColor.
  const SUN =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/>' +
    '<path d="M12 2.6v2.3M12 19.1v2.3M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.6 12h2.3' +
    'M19.1 12h2.3M4.4 19.6l1.6-1.6M18 6l1.6-1.6"/></svg>';
  const MOON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"/></svg>';
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  function setIcon(btn) {
    const isDark =
      root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    btn.innerHTML = isDark ? SUN : MOON;
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
      localStorage.setItem('theme', next);
      crossfade(() => {
        root.setAttribute('data-theme', next);
        setIcon(btn);
      });
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
  modalEl.querySelectorAll('video').forEach((v) => v.pause());
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
    const shown = document.createElement('img');
    shown.alt = 'Enlarged view';
    lightbox.appendChild(shown);
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
      img.alt = target.alt || 'Enlarged view';
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
   Typewriter rotator
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-typewriter]');
  if (!el) return;
  let pIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    // re-read each tick so the language toggle can swap the phrase list live
    const phrases = JSON.parse(el.dataset.typewriter);
    if (pIdx >= phrases.length) pIdx = 0;
    const word = phrases[pIdx];
    if (cIdx > word.length) cIdx = word.length;
    el.textContent = word.slice(0, cIdx);
    let delay = deleting ? 35 : 75;

    if (!deleting && cIdx === word.length) {
      delay = 1600;
      deleting = true;
    } else if (deleting && cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
      delay = 280;
    } else {
      cIdx += deleting ? -1 : 1;
    }
    setTimeout(tick, delay);
  }
  tick();
});

/* ==============================
   Scroll progress bar (auto-injected)
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.scroll-progress')) return;
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);

  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    bar.style.transform = 'scaleX(' + pct / 100 + ')';
    ticking = false;
  }
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
});

/* ==============================
   Stagger reveal delays
   (apply transition-delay to siblings in the same .reveal group)
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach((el) => {
    if (!el.parentElement) return;
    const siblings = Array.from(el.parentElement.children).filter((c) =>
      c.classList?.contains('reveal')
    );
    const idx = siblings.indexOf(el);
    if (idx > 0) {
      el.style.transitionDelay = `${Math.min(idx, 6) * 50}ms`;
    }
  });
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
