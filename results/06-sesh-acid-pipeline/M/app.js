/* VoltSwap — app.js : interacciones del sitio (sin build step) */
(function () {
  'use strict';

  /* ---- Watermark banner dismiss ---- */
  var wm = document.querySelector('.watermark');
  var wmBtn = document.querySelector('.watermark button');
  if (wmBtn) {
    wmBtn.addEventListener('click', function () {
      wm.classList.add('hidden');
      document.body.style.paddingTop = '0';
      var h = document.querySelector('.header');
      if (h) h.style.top = '0';
    });
  }

  /* ---- Mobile menu ---- */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Before/After comparators ---- */
  document.querySelectorAll('.ba').forEach(function (ba) {
    var before = ba.querySelector('.ba__before');
    var handle = ba.querySelector('.ba__handle');
    var range = ba.querySelector('.ba__range');
    function set(pct) {
      pct = Math.max(0, Math.min(100, pct));
      before.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
      handle.style.left = pct + '%';
      // recalcula el medidor de rango asociado (la "única cosa")
      var gaugeFill = ba.closest('.gallery-feature') &&
        ba.closest('.gallery-feature').querySelector('.range-fill');
      var gaugeNum = ba.closest('.gallery-feature') &&
        ba.closest('.gallery-feature').querySelector('.range-num');
      if (gaugeFill && gaugeNum) {
        var maxKm = parseInt(gaugeFill.getAttribute('data-max') || '240', 10);
        var km = Math.round((pct / 100) * maxKm);
        gaugeFill.style.width = pct + '%';
        gaugeNum.textContent = km;
      }
    }
    if (range) {
      range.addEventListener('input', function () { set(parseFloat(range.value)); });
      set(parseFloat(range.value || 50));
    }
  });

  /* ---- Contact form (demo, sin backend) ---- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = document.querySelector('.form-success');
      if (ok) ok.classList.add('show');
      form.reset();
    });
  }

  /* ---- Chatbot demo ---- */
  var fab = document.querySelector('.chat-fab');
  var win = document.querySelector('.chat-win');
  var chatClose = document.querySelector('.chat-head button');
  var chatForm = document.querySelector('.chat-foot');
  var chatBody = document.querySelector('.chat-body');
  if (fab && win) {
    fab.addEventListener('click', function () { win.classList.toggle('open'); });
  }
  if (chatClose) chatClose.addEventListener('click', function () { win.classList.remove('open'); });
  if (chatForm && chatBody) {
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = chatForm.querySelector('input');
      var txt = (input.value || '').trim();
      if (!txt) return;
      var u = document.createElement('div');
      u.className = 'msg msg--user';
      u.textContent = txt;
      chatBody.appendChild(u);
      input.value = '';
      setTimeout(function () {
        var b = document.createElement('div');
        b.className = 'msg msg--bot';
        b.textContent = 'Esta es una vista previa demo. Una vez activado, te ayudaré con cotizaciones de conversión, agendar tu diagnóstico y resolver dudas técnicas (rango, baterías, garantía) las 24 horas.';
        chatBody.appendChild(b);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 480);
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  }

  /* ---- Footer year ---- */
  var yr = document.querySelector('.js-year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
