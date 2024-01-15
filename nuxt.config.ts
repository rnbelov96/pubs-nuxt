// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no',
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss" as *;',
        },
      },
    },
  },
  modules: ['@nuxtjs/svg-sprite', '@pinia/nuxt'],
  imports: {
    dirs: ['./stores'],
  },
  components: [
    '~/common/components',
    '~/modules/menu',
    '~/modules/cart',
  ],
});
