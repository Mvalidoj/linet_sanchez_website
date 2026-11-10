/* menu.js — MAQUETA (ADR-004): único JS de la maqueta.
   Menú móvil: toggle, cierre con Esc, focus trap, aria-expanded, scroll lock. */
(function () {
  'use strict';

  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var closeBtn = menu.querySelector('.menu-close');
  var focusables = menu.querySelectorAll('a[href], button');

  function open() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    closeBtn.focus();
  }

  function close() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    toggle.focus();
  }

  toggle.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (!menu.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      close();
      return;
    }

    if (e.key === 'Tab') {
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
