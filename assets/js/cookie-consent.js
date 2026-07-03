/* GDPR cookie consent via orestbida/cookieconsent v3 (opt-in mode).
 * Same setup as jalaei.com, adapted for this single-language (EN) site.
 *
 * Tracking tags in each page are marked <script type="text/plain" data-category="...">,
 * which keeps them inert. They are activated ONLY after the visitor grants the matching
 * category here. Nothing non-essential runs before consent.
 *
 *   analytics  -> Cloudflare Web Analytics, Microsoft Clarity
 *   marketing  -> RB2B
 *
 * Styling lives in assets/css/blog.css ("Cookie consent").
 */
(function () {
  if (!window.CookieConsent || typeof window.CookieConsent.run !== 'function') {
    console.warn('[cookie-consent] CookieConsent library did not load; tracking stays disabled.');
    return;
  }

  var en = {
    consentModal: {
      title: 'Cookies 🍪',
      description: 'This site keeps analytics and marketing scripts switched off until you choose. ' +
        'Accept everything, reject everything, or pick what runs. The choice is yours, and you can change it any time.',
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Reject all',
      showPreferencesBtn: 'Manage preferences'
    },
    preferencesModal: {
      title: 'Cookie Preferences',
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Reject all',
      savePreferencesBtn: 'Save my choices',
      closeIconLabel: 'Close',
      serviceCounterLabel: 'Service|Services',
      sections: [
        {
          title: 'How this site uses cookies',
          description: 'Nothing non-essential runs until you allow it. Use the toggles below to choose ' +
            'exactly what loads. Changes take effect right away.'
        },
        {
          title: 'Strictly necessary',
          description: 'Needed for the site to work, including remembering the choices you make here. Always on.',
          linkedCategory: 'necessary'
        },
        {
          title: 'Analytics',
          description: 'Privacy-aware analytics that show me what is working: Cloudflare Web Analytics ' +
            '(page performance) and Microsoft Clarity (anonymized usage and heatmaps).',
          linkedCategory: 'analytics'
        },
        {
          title: 'Marketing',
          description: 'RB2B, which helps identify the companies visiting so I can follow up. Off by default.',
          linkedCategory: 'marketing'
        },
        {
          title: 'More information',
          description: 'Questions about the data collected? ' +
            '<a href="mailto:reza@jalaei.com">Email me</a>.'
        }
      ]
    }
  };

  CookieConsent.run({
    // opt-in is the default in v3 (categories below stay off until granted). Stated here for clarity.
    mode: 'opt-in',
    // Require a choice before browsing: dim + block the page until the visitor decides.
    // GDPR-safe because "Reject all" is a single click, weighted equally with "Accept all".
    disablePageInteraction: true,
    guiOptions: {
      consentModal: { layout: 'box', position: 'middle center', flipButtons: false, equalWeightButtons: false },
      preferencesModal: { layout: 'box', position: 'right', flipButtons: false, equalWeightButtons: false }
    },
    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {
        autoClear: {
          cookies: [
            { name: /^_cl(ck|sk)$/ },          // Microsoft Clarity
            { name: /^(CLID|ANONCHK|MUID|MR|SM)$/ },
            { name: '__cf_bm' },               // Cloudflare
            { name: '_cfuvid' }
          ]
        },
        services: {
          cloudflare: { label: 'Cloudflare Web Analytics' },
          clarity: { label: 'Microsoft Clarity' }
        }
      },
      marketing: {
        autoClear: {
          cookies: [{ name: /^(_?reb2b)/ }]    // RB2B
        },
        services: {
          rb2b: { label: 'RB2B' }
        }
      }
    },
    language: {
      default: 'en',
      translations: { en: en }
    }
  });
})();
