/* ==========================================================================
   Мария Добродеева — портфолио
   Чистый JavaScript, без библиотек.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Текущий год ---------- */
  var year = String(new Date().getFullYear());
  ['year', 'year-footer'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  /* ---------- Ссылки-заглушки (href="#") не должны прыгать наверх ----------
     ЗАМЕНИТЬ: когда подставите настоящие ссылки, атрибут data-placeholder уберите. */
  document.querySelectorAll('a[data-placeholder]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (a.getAttribute('href') === '#') e.preventDefault();
    });
  });

  /* ---------- Появление слайдов при скролле ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
