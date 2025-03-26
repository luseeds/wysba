import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-27",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
});
