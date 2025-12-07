// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  plugins: [{ src: 'plugins/vue-plyr', mode: 'client' }],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@pinia/nuxt', '@pinia/nuxt', '@nuxt/icon', '@vueuse/nuxt', '@nuxt/ui', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'light', 
    fallback: 'light'
  }
})  