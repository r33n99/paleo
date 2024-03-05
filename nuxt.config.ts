// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    app: {
        buildAssetsDir: '/something/',
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: "/something/assets/images/logo-16.png" }]
        },
    },
    modules: [
        'nuxt-icon',
        '@nuxt/image',
        'nuxt-swiper',
        '@nuxtjs/robots',
        '@pinia/nuxt',
        'nuxt-anchorscroll'
    ],
    image: {
        dir: 'assets'
    },
    build: {transpile: ['vuetify'],},
    css: [
        '@/assets/scss/style.scss',
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    vite: {define: {'process.env.DEBUG': false,},},
})
