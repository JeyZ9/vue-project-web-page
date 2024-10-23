// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      url: process.env.SPRINGAPI_URL || "http://localhost:8080/api/v1",
      urlImage: process.env.SPRINGAPI_IMAGE || "http://localhost:8080/upload"
    }
  },

  modules: ['@nuxt/image'],
});
