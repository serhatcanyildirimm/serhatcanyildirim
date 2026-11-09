/* ==========================================================================
   Serhatcan Yildirim — Portfolio
   Bilingual (NL/EN) i18n, language toggle, contact form, scroll reveal.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------- Content ---- */
  var CONTENT = {
    nl: {
      nav: { experience: 'Ervaring', work: 'Projecten', contact: 'Contact' },
      hero: {
        titleA: 'Software developer',
        titleAccent: '& strategisch adviseur',
        titleTail: '.',
        sub: 'Ik bouw software die echt gebruikt wordt, zet AI-tools slim in en help bedrijven groeien met een heldere strategie. Medeoprichter van Klokit.',
        ctaPrimary: 'Neem contact op',
        ctaSecondary: 'Download mijn cv'
      },
      stats: [
        { n: '8+', l: 'projecten live' },
        { n: '3', l: 'werkgevers & eigen bedrijf' },
        { n: '3', l: 'talen vloeiend: NL, TR, EN' }
      ],
      heroBadge: 'OPEN VOOR EEN NIEUWE ROL • ',
      chip2: 'Strategie',
      aboutEyebrow: 'OVER MIJ',
      aboutBody1: 'Developer die software bouwt die echt gebruikt wordt. Leergierig, oplossingsgericht en klaar voor de volgende stap in een team waar kwaliteit telt.',
      aboutBody2: 'Ik zet AI-tools slim in om sneller en beter te ontwikkelen, en kijk altijd verder dan de code: wat levert het op voor de gebruiker en voor het bedrijf?',
      aboutBody3a: 'Als medeoprichter van',
      aboutBody3b: ' weet ik wat het is om een product van idee naar klant te brengen.',
      experienceEyebrow: 'WERKERVARING',
      experienceTitle: 'Waar ik heb gewerkt',
      experience: [
        { t: 'Medeoprichter', m: 'Klokit · aug 2026 – heden', d: 'Bouw mee aan een SaaS waarmee medewerkers via hun telefoon in- en uitklokken met GPS-verificatie. Verantwoordelijk voor nieuwe features, verkoop en klantondersteuning.' },
        { t: 'Software Developer & Strategisch Adviseur', m: 'Smart Concepts B.V. · okt 2025 – sep 2026', d: 'Webpagina’s en functionaliteit ontwikkeld in Laravel. Groeistrategie opgezet voor Tandartspraktijk Elspeet met wekelijks overleg op locatie: SEO, marketing en conversie, met als doel 30% meer omzet.' },
        { t: 'Laravel Developer (stage)', m: 'International Affairs Group B.V. · feb 2025 – jun 2025', d: 'Meegebouwd aan interne Laravel-applicaties, waaronder het ticketingsysteem, en features voor planning en ticketvalidatie die dagelijks in gebruik zijn.' }
      ],
      skillsEyebrow: 'VAARDIGHEDEN',
      skillsTitle: 'Wat ik meebreng.',
      skills: [
        { t: 'Backend', d: 'C#, .NET, ASP.NET MVC, PHP, Laravel en REST API’s.' },
        { t: 'Frontend', d: 'TypeScript, JavaScript, React, Vue, Tailwind CSS, HTML en CSS.' },
        { t: 'Databases & tools', d: 'SQL, Microsoft SQL Server, Git, GitHub, Docker, Winter CMS en ClickUp.' },
        { t: 'AI-tools', d: 'AI-codeerassistenten, prompt engineering en LLM-API-integratie.' },
        { t: 'Strategie & groei', d: 'Groeistrategie, SEO, marketing en conversie-optimalisatie, in direct overleg met de klant.' }
      ],
      skillsFoot: 'Soft skills: klantcontact, communicatie, samenwerken, probleemoplossend en aanpassingsvermogen. Werkwijze: OOP en Scrum.',
      workEyebrow: 'PROJECTEN',
      workTitle: 'Een greep uit mijn werk',
      workSub: 'Websites, webshops en applicaties waar ik aan heb gewerkt.',
      projects: [
        { tag: 'Co-founder · GPS-kloksysteem' },
        { tag: 'Software & strategie' },
        { tag: 'Groeistrategie · SEO' },
        { tag: 'Printerinkt · Webshop' },
        { tag: 'Reparatie · Webshop' },
        { tag: 'UV-C waterdesinfectie · Offerte' },
        { tag: 'Studio · Portfolio' },
        { tag: 'Voorspellingen · Web-app' }
      ],
      reviews: [
        { q: 'Snel geschakeld en precies wat ik zocht. Denkt goed mee.', a: 'Eigenaar · ifixiteasy.nl · via Google' },
        { q: 'Strakke site en altijd bereikbaar. Echt een aanrader.', a: 'Oprichter · visualstack.nl · via Google' }
      ],
      educationEyebrow: 'OPLEIDING',
      educationTitle: 'Altijd aan het leren.',
      education: [
        { t: 'Full-Stack Developer – Beroepscertificaat', d: 'Microsoft · afronding nov 2026' },
        { t: 'Software Developer, MBO niveau 4', d: 'Aventus · aug 2022 – feb 2026 · keuzedeel klantcontact en grafisch ontwerp' },
        { t: 'Expert IT Systems and Devices, MBO niveau 4', d: 'Aventus · aug 2019 – jun 2022' }
      ],
      cardRole: 'Software Developer & Strategisch Adviseur · Co-founder Klokit',
      contactEyebrow: 'CONTACT',
      contactTitle: 'Laten we kennismaken',
      contactSub: 'Heb je een vacature, een project of wil je gewoon kennismaken? Stuur me een bericht, dan reageer ik binnen één werkdag.',
      checks: ['Open voor een nieuwe rol als developer', 'Reactie binnen één werkdag', 'Direct contact, geen tussenpersonen'],
      waBtn: 'WhatsApp openen',
      form: {
        name: 'Naam', email: 'E-mail', phone: 'Telefoon / WhatsApp', website: 'Bedrijf of vacature',
        message: 'Je bericht', submit: 'Verstuur bericht',
        namePh: 'Je naam', emailPh: 'naam@bedrijf.nl', phonePh: '+31 6 12 34 56 78',
        websitePh: 'Bedrijfsnaam of link naar de vacature',
        messagePh: 'Bijv. een vacature, een kennismaking of een project…'
      },
      formFoot: 'Reactie < 1 werkdag · Geen spam',
      sending: 'Versturen…',
      sendError: 'Er ging iets mis. Probeer het later opnieuw of mail me direct.',
      sentTitle: 'Bericht verstuurd',
      sentMsg: 'Bedankt! Ik reageer binnen één werkdag.',
      footerTagline: 'Software Developer · Strategisch Adviseur',
      footerCopy: '© 2026 Serhatcan Yildirim'
    },
    en: {
      nav: { experience: 'Experience', work: 'Projects', contact: 'Contact' },
      hero: {
        titleA: 'Software developer',
        titleAccent: '& strategic advisor',
        titleTail: '.',
        sub: 'I build software people actually use, put AI tools to smart use and help businesses grow with a clear strategy. Co-founder of Klokit.',
        ctaPrimary: 'Get in touch',
        ctaSecondary: 'Download my CV'
      },
      stats: [
        { n: '8+', l: 'projects live' },
        { n: '3', l: 'employers & own company' },
        { n: '3', l: 'fluent languages: NL, TR, EN' }
      ],
      heroBadge: 'OPEN TO A NEW ROLE • ',
      chip2: 'Strategy',
      aboutEyebrow: 'ABOUT ME',
      aboutBody1: 'A developer who builds software people actually use. Eager to learn, solution-driven and ready for the next step in a team where quality matters.',
      aboutBody2: 'I use AI tools to develop faster and better, and I always look beyond the code: what does it deliver for the user and for the business?',
      aboutBody3a: 'As co-founder of',
      aboutBody3b: ', I know what it takes to bring a product from idea to customer.',
      experienceEyebrow: 'WORK EXPERIENCE',
      experienceTitle: 'Where I have worked',
      experience: [
        { t: 'Co-founder', m: 'Klokit · Aug 2026 – present', d: 'Building a SaaS that lets employees clock in and out on their phone with GPS verification. Responsible for new features, sales and customer support.' },
        { t: 'Software Developer & Strategic Advisor', m: 'Smart Concepts B.V. · Oct 2025 – Sep 2026', d: 'Developed web pages and functionality in Laravel. Set up a growth strategy for Tandartspraktijk Elspeet with weekly on-site meetings: SEO, marketing and conversion, aiming for 30% more revenue.' },
        { t: 'Laravel Developer (intern)', m: 'International Affairs Group B.V. · Feb 2025 – Jun 2025', d: 'Helped build internal Laravel applications, including the ticketing system, and features for scheduling and ticket validation used every day.' }
      ],
      skillsEyebrow: 'SKILLS',
      skillsTitle: 'What I bring.',
      skills: [
        { t: 'Backend', d: 'C#, .NET, ASP.NET MVC, PHP, Laravel and REST APIs.' },
        { t: 'Frontend', d: 'TypeScript, JavaScript, React, Vue, Tailwind CSS, HTML and CSS.' },
        { t: 'Databases & tools', d: 'SQL, Microsoft SQL Server, Git, GitHub, Docker, Winter CMS and ClickUp.' },
        { t: 'AI tools', d: 'AI coding assistants, prompt engineering and LLM API integration.' },
        { t: 'Strategy & growth', d: 'Growth strategy, SEO, marketing and conversion optimisation, working directly with the client.' }
      ],
      skillsFoot: 'Soft skills: customer contact, communication, teamwork, problem solving and adaptability. Ways of working: OOP and Scrum.',
      workEyebrow: 'PROJECTS',
      workTitle: 'A selection of my work',
      workSub: 'Websites, webshops and applications I have worked on.',
      projects: [
        { tag: 'Co-founder · GPS time-clock system' },
        { tag: 'Software & strategy' },
        { tag: 'Growth strategy · SEO' },
        { tag: 'Printer ink · Webshop' },
        { tag: 'Repair · Webshop' },
        { tag: 'UV-C water disinfection · Quote' },
        { tag: 'Studio · Portfolio' },
        { tag: 'Predictions · Web app' }
      ],
      reviews: [
        { q: 'Quick to respond and exactly what I was looking for. Really thinks along.', a: 'Owner · ifixiteasy.nl · via Google' },
        { q: 'Clean site and always reachable. Highly recommended.', a: 'Founder · visualstack.nl · via Google' }
      ],
      educationEyebrow: 'EDUCATION',
      educationTitle: 'Always learning.',
      education: [
        { t: 'Full-Stack Developer – Professional Certificate', d: 'Microsoft · completing Nov 2026' },
        { t: 'Software Developer, MBO level 4', d: 'Aventus · Aug 2022 – Feb 2026 · elective in customer contact and graphic design' },
        { t: 'Expert IT Systems and Devices, MBO level 4', d: 'Aventus · Aug 2019 – Jun 2022' }
      ],
      cardRole: 'Software Developer & Strategic Advisor · Co-founder Klokit',
      contactEyebrow: 'CONTACT',
      contactTitle: 'Let’s get acquainted',
      contactSub: 'Have a vacancy, a project or just want to meet? Send me a message and I’ll reply within one business day.',
      checks: ['Open to a new developer role', 'Reply within one business day', 'Direct contact, no middlemen'],
      waBtn: 'Open WhatsApp',
      form: {
        name: 'Name', email: 'Email', phone: 'Phone / WhatsApp', website: 'Company or vacancy',
        message: 'Your message', submit: 'Send message',
        namePh: 'Your name', emailPh: 'name@company.com', phonePh: '+31 6 12 34 56 78',
        websitePh: 'Company name or link to the vacancy',
        messagePh: 'E.g. a vacancy, an introduction or a project…'
      },
      formFoot: 'Reply < 1 business day · No spam',
      sending: 'Sending…',
      sendError: 'Something went wrong. Please try again later or email me directly.',
      sentTitle: 'Message sent',
      sentMsg: 'Thanks! I’ll reply within one business day.',
      footerTagline: 'Software Developer · Strategic Advisor',
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
