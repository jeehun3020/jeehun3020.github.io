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
   Typewriter rotator
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-typewriter]');
  if (!el) return;
  const phrases = JSON.parse(el.dataset.typewriter);
  let pIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const word = phrases[pIdx];
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
   Mouse-tracking spotlight
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-spotlight]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      el.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });
});

/* ==============================
   Animated counters
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  function animate(el) {
    const target = parseFloat(el.dataset.counter);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = (target * eased).toFixed(decimals);
      el.textContent = value + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => io.observe(el));
  } else {
    counters.forEach(animate);
  }
});

/* ==============================
   Tilt cards (3D mouse parallax)
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  document.querySelectorAll('[data-tilt]').forEach((el) => {
    const max = 8; // degrees
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform =
        `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-2px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
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
    bar.style.width = pct + '%';
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
   Magnetic buttons (cursor-pull)
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const MAX = 10; // px pull
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.transform = `translate(${(dx * MAX).toFixed(2)}px, ${(dy * MAX).toFixed(2)}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
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
      el.style.transitionDelay = `${Math.min(idx, 6) * 70}ms`;
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
