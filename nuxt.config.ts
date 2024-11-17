// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    '@nuxt/icon',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})
