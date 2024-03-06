// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    app: {
        buildAssetsDir: '/something/',
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: "/something/static/images/logo-16.png" }],
            titleTemplate:'Paleo Studio'
        },
    },
    modules: [
        'nuxt-icon',
        'nuxt-swiper',
        '@pinia/nuxt',
        'nuxt-anchorscroll',
        '@nuxtjs/seo',
        '@nuxt/image',
        '@nuxtjs/device',
    ],
    device: {
        refreshOnResize: true,
        defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'
      },
    image: {
        dir:'static/images',
        provider: 'ipx',
        // twicpics: {
        //   baseURL: 'https://images-paleo.studio/'
        // }
      },
    site: {
        hostname: process.env.NUXT_PUBLIC_SITE_URL,
        gzip: true,
        exclude: [
          '/secret',
          '/admin/**'
        ],
        routes: [
          '/kipish',
          '/silkway',
          '/parcel'
        ]
    },
    robots: {
        sitemap: 'https://example.com/sitemap.xml',
        enabled: true,
        disallowNonIndexableRoutes: true,
    },
    build: {transpile: ['vuetify'],},
    css: [
        '@/assets/scss/style.scss',
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    vite: {define: {'process.env.DEBUG': false,},},
})
