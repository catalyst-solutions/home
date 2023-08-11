export default defineI18nConfig(() => ({
  legacy: false,
  locale: "de",

  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    redirectOn: "root", // recommended
  },
}));
