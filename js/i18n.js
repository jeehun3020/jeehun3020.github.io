/* ==============================
   Language toggle (en / ko)

   Markup contract: English lives in the HTML, Korean lives in data-ko.
   Elements needing a Korean typewriter list use data-ko-typewriter.
   ============================== */
(function () {
  const KEY = 'lang';

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-ko]').forEach((el) => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      el.innerHTML = lang === 'ko' ? el.dataset.ko : el.dataset.en;
    });

    document.querySelectorAll('[data-ko-typewriter]').forEach((el) => {
      if (el.dataset.enTypewriter === undefined) el.dataset.enTypewriter = el.dataset.typewriter;
      el.dataset.typewriter = lang === 'ko' ? el.dataset.koTypewriter : el.dataset.enTypewriter;
    });

    const btn = document.querySelector('.lang-toggle');
    if (btn) {
      btn.textContent = lang === 'ko' ? 'EN' : '한';
      btn.setAttribute('aria-label', lang === 'ko' ? 'Switch to English' : '한국어로 전환');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem(KEY);
    if (lang !== 'ko' && lang !== 'en') {
      lang = (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en';
    }
    apply(lang);

    const btn = document.querySelector('.lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      lang = lang === 'ko' ? 'en' : 'ko';
      localStorage.setItem(KEY, lang);
      apply(lang);
    });
  });
})();
