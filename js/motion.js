/* ==========================================================================
   Motion — GSAP + ScrollTrigger
   Progressive enhancement: without GSAP or with reduced motion the page
   stays fully readable (main.js handles the simple reveal fallback).
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var preloader = document.querySelector('.preloader');

  if (!window.gsap || !window.ScrollTrigger || reduce) {
    if (preloader) preloader.remove();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('gsap-on');

  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------------------------------------------------------- Helpers --- */
  // Wrap every word of an element in a mask so it can slide up.
  function splitWords(el) {
    var text = el.textContent;
    el.textContent = '';
    var inner = [];
    text.split(/(\s+)/).forEach(function (part) {
      if (!part) return;
      if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); return; }
      var outer = document.createElement('span');
      outer.className = 'w';
      var wi = document.createElement('span');
      wi.className = 'wi';
      wi.textContent = part;
      outer.appendChild(wi);
      el.appendChild(outer);
      inner.push(wi);
    });
    return inner;
  }

  // Count a number up while keeping its prefix/suffix ("10+", "< 1 dag").
  function countUp(el, duration) {
    var m = el.textContent.match(/^(\D*)(\d+)(.*)$/);
    if (!m) return null;
    var obj = { v: 0 };
    var target = parseInt(m[2], 10);
    el.textContent = m[1] + '0' + m[3];
    return gsap.to(obj, {
      v: target,
      duration: duration || 1.4,
      ease: 'power2.out',
      onUpdate: function () { el.textContent = m[1] + Math.round(obj.v) + m[3]; }
    });
  }

  /* ------------------------------------------------- Initial states ---- */
  var heroWords = [];
  $$('.hero h1 [data-i18n]').forEach(function (span) {
    heroWords = heroWords.concat(splitWords(span));
  });

  gsap.set('.nav', { autoAlpha: 0, y: -16 });
  gsap.set(heroWords, { yPercent: 115 });
  gsap.set(['.hero-sub', '.hero-cta', '.stats .stat'], { autoAlpha: 0, y: 26 });
  gsap.set('.hero-photo', { clipPath: 'inset(100% 0% 0% 0%)' });
  gsap.set('.hero-photo img', { scale: 1.35 });
  gsap.set('.hero-badge', { autoAlpha: 0, scale: .4, rotation: -120 });
  gsap.set('.chip', { autoAlpha: 0, scale: .6, y: 20 });

  /* ------------------------------------------------ Intro timeline ----- */
  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (preloader) {
    preloader.style.animation = 'none';
    intro
      .from('.preloader-word', { yPercent: 115, duration: .75, stagger: .1 })
      .to('.preloader-bar', { scaleX: 1, duration: .8, ease: 'power2.inOut' }, '<.15')
      .to('.preloader-word', { yPercent: -115, duration: .5, stagger: .06, ease: 'power3.in' }, '+=.05')
      .to('.preloader-bar', { scaleX: 0, transformOrigin: 'right center', duration: .4, ease: 'power2.in' }, '<')
      .to(preloader, { yPercent: -100, duration: .9, ease: 'power4.inOut' }, '-=.15')
      .add(function () { preloader.remove(); });
  }

  intro
    .to('.nav', { autoAlpha: 1, y: 0, duration: .7 }, preloader ? '-=.55' : 0)
    .to(heroWords, { yPercent: 0, duration: 1, stagger: .06, ease: 'power4.out' }, '<.05')
    .to('.hero-photo', { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut' }, '<.1')
    .to('.hero-photo img', { scale: 1, duration: 1.6, ease: 'power3.out' }, '<')
    .to('.hero-sub', { autoAlpha: 1, y: 0, duration: .8 }, '<.35')
    .to('.hero-cta', { autoAlpha: 1, y: 0, duration: .8 }, '<.1')
    .to('.hero-badge', { autoAlpha: 1, scale: 1, rotation: 0, duration: 1.1, ease: 'back.out(1.6)' }, '<.1')
    .to('.chip', { autoAlpha: 1, scale: 1, y: 0, duration: .8, stagger: .12, ease: 'back.out(2)' }, '<.15')
    .to('.stats .stat', { autoAlpha: 1, y: 0, duration: .7, stagger: .1 }, '<.1')
    .add(function () {
      $$('.stat-num').forEach(function (el, i) {
        var t = countUp(el, 1.4 + i * .2);
        if (!t) gsap.from(el, { autoAlpha: 0, duration: .6 });
      });
    }, '<');

  /* ------------------------------------------- Hero idle + parallax ---- */
  gsap.to('.hero-badge-ring', { rotation: 360, duration: 16, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });

  $$('.chip').forEach(function (chip, i) {
    gsap.to(chip, { y: '+=' + (8 + i * 3), duration: 2.2 + i * .5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.6 + i * .2 });
  });

  // Photo drifts slower than the page while scrolling out of the hero.
  gsap.to('.hero-photo img', {
    yPercent: -9,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  // Mouse parallax on the whole visual (desktop).
  if (finePointer) {
    var vis = $('.hero-visual-inner');
    var hero = $('.hero');
    if (vis && hero) {
      var vx = gsap.quickTo(vis, 'x', { duration: .8, ease: 'power3.out' });
      var vy = gsap.quickTo(vis, 'y', { duration: .8, ease: 'power3.out' });
      var vr = gsap.quickTo(vis, 'rotation', { duration: .8, ease: 'power3.out' });
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - .5;
        var py = (e.clientY - r.top) / r.height - .5;
        vx(px * 26); vy(py * 18); vr(px * 2.5);
      });
      hero.addEventListener('mouseleave', function () { vx(0); vy(0); vr(0); });
    }
  }

  /* ------------------------------------------------------- Marquee ----- */
  var track = $('.marquee-track');
  if (track) {
    var loop = gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
    var dir = 1;
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: function (self) {
        if (self.direction !== dir) dir = self.direction;
        var boost = Math.min(Math.abs(self.getVelocity()) / 400, 4);
        gsap.to(loop, { timeScale: dir * (1 + boost), duration: .25, overwrite: true });
        gsap.to(loop, { timeScale: dir, duration: 1.2, delay: .25, ease: 'power2.out' });
      }
    });
    gsap.from('.marquee', {
      skewY: 3, y: 40, autoAlpha: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.marquee', start: 'top 92%' }
    });
  }

  /* --------------------------------------------- Section headings ------ */
  $$('.section').forEach(function (sec) {
    var head = $$('.eyebrow, .section-title, .section-sub, .contact-title, .contact-sub', sec);
    if (!head.length) return;
    gsap.from(head, {
      y: 34, autoAlpha: 0, duration: .9, stagger: .08, ease: 'power3.out',
      scrollTrigger: { trigger: sec, start: 'top 80%' }
    });
  });

  /* ---------------------------------------------------- Services ------- */
  gsap.from('.service-row', {
    y: 40, autoAlpha: 0, duration: .8, stagger: .1, ease: 'power3.out',
    scrollTrigger: { trigger: '.services-list', start: 'top 82%' }
  });
  gsap.from('.service-no', {
    x: -16, autoAlpha: 0, duration: .6, stagger: .1, ease: 'power2.out',
    scrollTrigger: { trigger: '.services-list', start: 'top 82%' }
  });

  /* ---------------------------------------------------- Projects ------- */
  gsap.from('.project', {
    y: 60, rotationX: -25, autoAlpha: 0, duration: .9, stagger: { each: .08, from: 'start' }, ease: 'power3.out',
    transformOrigin: '50% 100%',
    scrollTrigger: { trigger: '.projects', start: 'top 85%' }
  });
  gsap.from('.review', {
    y: 40, autoAlpha: 0, duration: .9, stagger: .12, ease: 'power3.out',
    scrollTrigger: { trigger: '.reviews', start: 'top 88%' }
  });

  if (finePointer) {
    $$('.project').forEach(function (card) {
      var rx = gsap.quickTo(card, 'rotationX', { duration: .5, ease: 'power3.out' });
      var ry = gsap.quickTo(card, 'rotationY', { duration: .5, ease: 'power3.out' });
      var lift = gsap.quickTo(card, 'y', { duration: .5, ease: 'power3.out' });
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - .5;
        var py = (e.clientY - r.top) / r.height - .5;
        ry(px * 14); rx(-py * 14); lift(-4);
      });
      card.addEventListener('mouseleave', function () { rx(0); ry(0); lift(0); });
    });
  }

  /* -------------------------------------------------------- Steps ------ */
  $$('.step').forEach(function (step, i) {
    var line = document.createElement('span');
    line.className = 'step-line';
    step.appendChild(line);
    var tl = gsap.timeline({ scrollTrigger: { trigger: step, start: 'top 85%' } });
    tl.to(line, { scaleX: 1, duration: 1.1, ease: 'power3.inOut', delay: i * .15 })
      .from($('.step-n', step), { yPercent: 60, autoAlpha: 0, duration: .7, ease: 'power3.out' }, '<.2')
      .from([$('.step-t', step), $('.step-d', step)], { y: 20, autoAlpha: 0, duration: .7, stagger: .08, ease: 'power3.out' }, '<.1');
  });

  /* -------------------------------------------------------- About ------ */
  var aboutTween = null;
  function buildAbout() {
    var lead = $('.about-lead');
    if (!lead) return;
    if (aboutTween) { aboutTween.scrollTrigger && aboutTween.scrollTrigger.kill(); aboutTween.kill(); }
    var words = splitWords(lead);
    // Words in the lead light up one by one as you scroll through.
    $$('.w', lead).forEach(function (w) { w.style.overflow = 'visible'; });
    aboutTween = gsap.fromTo(words, { opacity: .16 }, {
      opacity: 1, stagger: .05, ease: 'none',
      scrollTrigger: { trigger: lead, start: 'top 80%', end: 'bottom 45%', scrub: .6 }
    });
  }
  buildAbout();
  gsap.from('.about-avatar', {
    scale: 0, rotation: -40, duration: .9, ease: 'back.out(1.8)',
    scrollTrigger: { trigger: '#about', start: 'top 80%' }
  });
  gsap.from('#about .about-body', {
    y: 24, autoAlpha: 0, duration: .8, stagger: .12, ease: 'power3.out',
    scrollTrigger: { trigger: '#about .about-body', start: 'top 90%' }
  });

  /* ------------------------------------------------------ Contact ------ */
  gsap.from('.check, .contact-links > *', {
    x: -20, autoAlpha: 0, duration: .7, stagger: .07, ease: 'power3.out',
    scrollTrigger: { trigger: '#contact', start: 'top 75%' }
  });
  gsap.from('.form > *', {
    y: 24, autoAlpha: 0, duration: .7, stagger: .06, ease: 'power3.out',
    scrollTrigger: { trigger: '.form', start: 'top 85%' }
  });

  /* ------------------------------------------- Nav + scroll progress --- */
  gsap.to('.scroll-progress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: .2 }
  });

  var navHidden = false;
  ScrollTrigger.create({
    start: 'top -120',
    end: 'max',
    onUpdate: function (self) {
      var hide = self.direction === 1;
      if (hide !== navHidden) {
        navHidden = hide;
        gsap.to('.nav', { yPercent: hide ? -110 : 0, duration: .45, ease: 'power3.out' });
      }
    },
    onLeaveBack: function () {
      navHidden = false;
      gsap.to('.nav', { yPercent: 0, duration: .45, ease: 'power3.out' });
    }
  });

  /* --------------------------------------- Magnetic buttons (desktop) -- */
  if (finePointer) {
    $$('.btn-primary, .form-submit, .hero-badge').forEach(function (btn) {
      var mx = gsap.quickTo(btn, 'x', { duration: .5, ease: 'power3.out' });
      var my = gsap.quickTo(btn, 'y', { duration: .5, ease: 'power3.out' });
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        mx((e.clientX - r.left - r.width / 2) * .3);
        my((e.clientY - r.top - r.height / 2) * .35);
      });
      btn.addEventListener('mouseleave', function () { mx(0); my(0); });
    });

    // Cursor follower
    var cursor = $('.cursor');
    if (cursor) {
      var cx = gsap.quickTo(cursor, 'x', { duration: .35, ease: 'power3.out' });
      var cy = gsap.quickTo(cursor, 'y', { duration: .35, ease: 'power3.out' });
      window.addEventListener('mousemove', function (e) {
        cursor.classList.add('is-on');
        cx(e.clientX); cy(e.clientY);
      });
      document.addEventListener('mouseleave', function () { cursor.classList.remove('is-on'); });
      $$('a, button, .project, input, textarea').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cursor.classList.add('is-hover'); });
        el.addEventListener('mouseleave', function () { cursor.classList.remove('is-hover'); });
      });
    }
  }

  /* ---------------------------------------------- Language switch ------ */
  // main.js replaces texts on a language change; rebuild the split lead.
  $$('.lang button[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Wait until main.js has swapped the texts.
      setTimeout(function () {
        buildAbout();
        ScrollTrigger.refresh();
      }, 0);
    });
  });

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
