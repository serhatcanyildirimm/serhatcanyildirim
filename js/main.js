/* ==========================================================================
   Serhatcan Yildirim — Portfolio
   Bilingual (NL/EN) i18n, language toggle, contact form, scroll reveal.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------- Content ---- */
  var CONTENT = {
    nl: {
      nav: { work: 'Werk', services: 'Diensten', contact: 'Contact' },
      hero: {
        titleA: 'Meer klanten uit je website',
        titleAccent: 'met een sterk ontwerp',
        titleTail: '.',
        sub: 'Wij ontwerpen en bouwen websites en webshops voor ondernemers. Snel, goed vindbaar en gemaakt om te converteren.',
        ctaPrimary: 'Plan een gesprek',
        ctaSecondary: 'WhatsApp openen'
      },
      stats: [
        { n: '3+', l: 'jaar ervaring in web & design' },
        { n: '10+', l: 'projecten opgeleverd' },
        { n: '< 1 dag', l: 'reactie op je aanvraag' }
      ],
      servicesEyebrow: 'WAT WE DOEN',
      servicesTitle: 'Alles voor je online aanwezigheid.',
      services: [
        { t: 'Websites & landingspagina’s', d: 'Een site die bezoekers omzet in klanten. Snel, strak en goed vindbaar.' },
        { t: 'Webshops', d: 'Verkoop online met een shop die is ingericht om te converteren.' },
        { t: 'Onderhoud & hosting', d: 'Snel, veilig en altijd up-to-date. Jij hoeft nergens naar om te kijken.' },
        { t: 'SEO & vindbaarheid', d: 'Gevonden worden door de mensen die actief naar jou zoeken.' }
      ],
      servicesFoot: 'Ook mogelijk: webshop-koppelingen, e-mailmarketing en branding.',
      workEyebrow: 'RECENT WERK',
      workTitle: 'Een greep uit ons werk',
      workSub: 'Websites en webshops die wij bouwden voor ondernemers door heel Nederland.',
      projects: [
        { tag: 'Reparatie · Webshop' },
        { tag: 'Studio · Portfolio' },
        { tag: 'Printerinkt · Webshop' },
        { tag: 'UV-C waterdesinfectie · Offerte' },
        { tag: 'Voorspellingen · Web-app' },
        { tag: 'Co-founder · GPS-kloksysteem' }
      ],
      workFoot: 'En nog veel meer. Vraag gerust naar voorbeelden uit jouw branche.',
      reviews: [
        { q: 'Snel geschakeld en precies wat ik zocht. Denkt goed mee.', a: 'Eigenaar · ifixiteasy.nl · via Google' },
        { q: 'Strakke site en altijd bereikbaar. Echt een aanrader.', a: 'Oprichter · visualstack.nl · via Google' }
      ],
      stepsEyebrow: 'HOE HET WERKT',
      stepsTitle: 'De aanpak in drie stappen',
      heroBadge: 'BESCHIKBAAR VOOR PROJECTEN • ',
      cardRole: 'Webdeveloper · Co-founder Klokit',
      steps: [
        { t: 'Strategie', d: 'We ontdekken en formuleren jouw Why, missie, visie, kernwaarden en ambities. We bepalen wat echt belangrijk is en waar de organisatie naartoe wil.' },
        { t: 'Plan van Aanpak', d: 'We vertalen de strategie naar concrete doelen, prioriteiten, verantwoordelijkheden en acties. Geen dikke rapporten, maar een praktisch en begrijpelijk plan.' },
        { t: 'Realisatie', d: 'Een strategie heeft pas waarde wanneer deze wordt uitgevoerd. We begeleiden de implementatie, creëren eigenaarschap en zorgen dat plannen daadwerkelijk resultaten worden.' }
      ],
      aboutEyebrow: 'OVER SERHATCAN',
      aboutBody1: 'Wij bouwen websites en webshops voor ondernemers door heel Nederland. Van het eerste ontwerp tot livegang en onderhoud — alles onder één dak.',
      aboutBody2: 'Je werkt rechtstreeks met ons: korte lijnen, snelle reactie en geen tussenlagen die alles vertragen.',
      aboutBody3a: 'Daarnaast hebben we',
      aboutBody3b: ' opgericht, een GPS-kloksysteem voor bedrijven.',
      contactEyebrow: 'AAN DE SLAG',
      contactTitle: 'Plan een gesprek',
      contactSub: 'Vertel kort waar je mee zit. Je hoort binnen één werkdag van ons, met eerlijk advies. Helemaal vrijblijvend.',
      checks: ['Reactie binnen één werkdag', 'Eerlijk advies, geen verkooppraat', 'Je werkt direct met ons'],
      waBtn: 'WhatsApp openen',
      form: {
        name: 'Naam', email: 'E-mail', phone: 'Telefoon / WhatsApp', website: 'Website',
        message: 'Waar kunnen we je mee helpen?', submit: 'Verstuur bericht',
        namePh: 'Je naam', emailPh: 'naam@bedrijf.nl', phonePh: '+31 6 12 34 56 78',
        websitePh: 'https://jouwbedrijf.nl',
        messagePh: 'Bijv. een nieuwe website, een webshop, of onderhoud aan je huidige site…'
      },
      formFoot: 'Reactie < 1 werkdag · Geen spam',
      sending: 'Versturen…',
      sendError: 'Er ging iets mis. Probeer het later opnieuw of mail ons direct.',
      sentTitle: 'Bericht verstuurd',
      sentMsg: 'Bedankt! We reageren binnen één werkdag.',
      footerTagline: 'Websites · webshops · onderhoud',
      footerCopy: '© 2026 Serhatcan Yildirim'
    },
    en: {
      nav: { work: 'Work', services: 'Services', contact: 'Contact' },
      hero: {
        rating: 'Rated 5.0 on Google',
        titleA: 'More customers from your website',
        titleAccent: 'with strong design',
        titleTail: '.',
        sub: 'We design and build websites and webshops for entrepreneurs. Fast, easy to find and made to convert.',
        ctaPrimary: 'Book a call',
        ctaSecondary: 'Open WhatsApp'
      },
      stats: [
        { n: '3+', l: 'years in web & design' },
        { n: '10+', l: 'projects delivered' },
        { n: '< 1 day', l: 'reply to your request' }
      ],
      servicesEyebrow: 'WHAT WE DO',
      servicesTitle: 'Everything for your online presence.',
      services: [
        { t: 'Websites & landing pages', d: 'A site that turns visitors into customers. Fast, clean and easy to find.' },
        { t: 'Webshops', d: 'Sell online with a shop built to convert.' },
        { t: 'Maintenance & hosting', d: 'Fast, secure and always up to date. Nothing for you to worry about.' },
        { t: 'SEO & visibility', d: 'Get found by the people actively searching for you.' }
      ],
      servicesFoot: 'Also possible: shop integrations, email marketing and branding.',
      workEyebrow: 'RECENT WORK',
      workTitle: 'A selection of our work',
      workSub: 'Websites and webshops we built for entrepreneurs across the Netherlands.',
      projects: [
        { tag: 'Repair · Webshop' },
        { tag: 'Studio · Portfolio' },
        { tag: 'Printer ink · Webshop' },
        { tag: 'UV-C water disinfection · Quote' },
        { tag: 'Predictions · Web app' },
        { tag: 'Co-founder · GPS time-clock system' }
      ],
      workFoot: 'And plenty more. Just ask for examples from your industry.',
      reviews: [
        { q: 'Quick to respond and exactly what I was looking for. Really thinks along.', a: 'Owner · ifixiteasy.nl · via Google' },
        { q: 'Clean site and always reachable. Highly recommended.', a: 'Founder · visualstack.nl · via Google' }
      ],
      stepsEyebrow: 'HOW IT WORKS',
      stepsTitle: 'Our approach in three steps',
      heroBadge: 'AVAILABLE FOR NEW PROJECTS • ',
      cardRole: 'Web developer · Co-founder Klokit',
      steps: [
        { t: 'Strategy', d: 'We uncover and define your Why, mission, vision, core values and ambitions. We decide what really matters and where the organisation wants to go.' },
        { t: 'Plan of approach', d: 'We translate the strategy into concrete goals, priorities, responsibilities and actions. No thick reports, but a practical plan that is easy to follow.' },
        { t: 'Execution', d: 'A strategy only has value once it is carried out. We guide the implementation, create ownership and make sure plans actually turn into results.' }
      ],
      aboutEyebrow: 'ABOUT SERHATCAN',
      aboutBody1: 'We build websites and webshops for entrepreneurs across the Netherlands. From first design to launch and maintenance — all under one roof.',
      aboutBody2: 'You work directly with us: short lines, quick replies and no layers in between slowing things down.',
      aboutBody3a: 'We also co-founded',
      aboutBody3b: ', a GPS time-clock system for businesses.',
      contactEyebrow: 'GET STARTED',
      contactTitle: 'Book a call',
      contactSub: 'Tell us briefly what you need. You’ll hear back within one business day, with honest advice. No obligation.',
      checks: ['Reply within one business day', 'Honest advice, no sales talk', 'You work directly with us'],
      waBtn: 'Open WhatsApp',
      form: {
        name: 'Name', email: 'Email', phone: 'Phone / WhatsApp', website: 'Website',
        message: 'How can we help you?', submit: 'Send message',
        namePh: 'Your name', emailPh: 'name@company.com', phonePh: '+31 6 12 34 56 78',
        websitePh: 'https://yourcompany.com',
        messagePh: 'E.g. a new website, a webshop, or maintenance on your current site…'
      },
      formFoot: 'Reply < 1 business day · No spam',
      sending: 'Sending…',
      sendError: 'Something went wrong. Please try again later or email us directly.',
      sentTitle: 'Message sent',
      sentMsg: 'Thanks! We’ll reply within one business day.',
      footerTagline: 'Websites · webshops · maintenance',
      footerCopy: '© 2026 Serhatcan Yildirim'
    }
  };

  /* ------------------------------------------------------- Utilities ---- */
  function resolve(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc == null ? undefined : acc[key];
    }, obj);
  }

  var STORAGE_KEY = 'sy-lang';
  var formSent = false;

  function applyLang(lang) {
    var dict = CONTENT[lang] || CONTENT.nl;

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = resolve(dict, el.getAttribute('data-i18n'));
      if (typeof val === 'string') el.textContent = val;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = resolve(dict, el.getAttribute('data-i18n-placeholder'));
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });

    // Reflect on <html>, toggle buttons and persisted state
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang button[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    // Keep an already-shown "message sent" panel translated
    if (formSent) {
      var st = document.querySelector('.form-sent [data-sent-title]');
      var sm = document.querySelector('.form-sent [data-sent-msg]');
      if (st) st.textContent = dict.sentTitle;
      if (sm) sm.textContent = dict.sentMsg;
    }
  }

  function currentLang() {
    return document.documentElement.getAttribute('lang') || 'nl';
  }

  /* ---------------------------------------------------- Initialisation -- */
  function init() {
    // Restore preferred language (default NL)
    var saved = 'nl';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'nl'; } catch (e) {}
    if (saved !== 'nl' && saved !== 'en') saved = 'nl';
    applyLang(saved);

    // Language toggle
    document.querySelectorAll('.lang button[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });

    // Contact form -> /api/contact (Mailgun) -> confirmation state
    var form = document.getElementById('contact-form');
    if (form) {
      var submitBtn = form.querySelector('.form-submit');
      var submitLabel = submitBtn ? submitBtn.querySelector('[data-i18n="form.submit"]') : null;

      // Foutmelding-element (eenmalig aangemaakt, herbruikt)
      var errBox = document.createElement('div');
      errBox.className = 'form-error';
      errBox.setAttribute('role', 'alert');
      errBox.style.display = 'none';

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var dict = CONTENT[currentLang()] || CONTENT.nl;

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        // Loading-state
        errBox.style.display = 'none';
        if (submitBtn) submitBtn.disabled = true;
        var originalLabel = submitLabel ? submitLabel.textContent : '';
        if (submitLabel) submitLabel.textContent = dict.sending;

        var payload = {
          name: (form.elements.name && form.elements.name.value || '').trim(),
          email: (form.elements.email && form.elements.email.value || '').trim(),
          phone: (form.elements.phone && form.elements.phone.value || '').trim(),
          website: (form.elements.website && form.elements.website.value || '').trim(),
          message: (form.elements.message && form.elements.message.value || '').trim(),
          company: (form.elements.company && form.elements.company.value || '') // honeypot
        };

        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function (res) {
            if (!res.ok) throw new Error('Request failed');
          })
          .then(function () {
            // Succes: vervang formulier door bevestiging
            var panel = document.createElement('div');
            panel.className = 'form-sent';
            panel.setAttribute('role', 'status');
            panel.innerHTML =
              '<div class="mark" aria-hidden="true">✓</div>' +
              '<h3 data-sent-title></h3>' +
              '<p data-sent-msg></p>';
            panel.querySelector('[data-sent-title]').textContent = dict.sentTitle;
            panel.querySelector('[data-sent-msg]').textContent = dict.sentMsg;
            form.replaceWith(panel);
            formSent = true;
          })
          .catch(function () {
            errBox.textContent = dict.sendError;
            errBox.style.display = '';
            if (!errBox.parentNode && submitBtn) {
              submitBtn.parentNode.insertBefore(errBox, submitBtn.nextSibling);
            }
            if (submitBtn) submitBtn.disabled = false;
            if (submitLabel) submitLabel.textContent = originalLabel;
          });
      });
    }

    // Scroll reveal (progressive enhancement)
    var reveals = document.querySelectorAll('.reveal');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
