
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'en'],
    reloadOnPrerender: false,
    preload: ['uz'],
    debug: false,
    defaultNS: 'common',
    ns: ['common'],
    ignoreRoutes: [],
    react: {
      useSuspense: true,
    },
    localeDetection: false,
    partialBundledLanguages: true,
    localePath: path.resolve('./public/locales'),
  },
};
