import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-27",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxt/fonts", "@nuxtjs/i18n"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      titleTemplate: "Would you still be alive?",
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.json",
        name: "English",
      },
      {
        code: "fr",
        file: "fr-FR.json",
        name: "Français",
      },
    ],
    lazy: true,
    defaultLocale: "en",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  telemetry: {
    enabled: false,
  },
});
