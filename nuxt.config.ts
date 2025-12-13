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
  modules: [
    '@pinia/nuxt',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  colorMode: {
    preference: 'light', 
    fallback: 'light'
  },
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/myHotelSolutions/'
    }, 
    presets: {
      cover: {
        modifiers: {
          fit: 'cover',
          format: 'webp',
        }
      }
    },
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    }
  }
})