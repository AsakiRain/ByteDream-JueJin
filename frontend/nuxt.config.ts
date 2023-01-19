export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    'nuxt-umami',
    '@nuxtjs/strapi',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
    componentIslands: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://bytedream.top',
      siteName: 'JueJin | ByteDream',
      siteDescription: 'Yet Another Blog In JueJin Style By ByteDream',
      language: 'zh-CN',
      titleSeparator: '·',
      trailingSlash: true,
      mode: process.env.NODE_ENV,
      strapi_base_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:1337' : 'https://cms.bytedream.top',
    },
    indexable: true,
    siteUrl: 'https://bytedream.top',
  },
  sitemap: {
    hostname: 'https://bytedream.top',
    exclude: [
      './*',
    ],
  },
  head: {
    ogTitleTemplate: '%s | ByteDream',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },
  linkChecker: { failOn404: false },
  umami: {
    enable: true, // enable the module? true by default
    autoTrack: true,
    doNotTrack: false,
    cache: false,
    domains: 'bytedream.top',
    websiteId: 'f0ab5003-8840-46dc-956b-36dbabc6fa4f',
    scriptUrl: 'https://analytics.umami.is/script.js',
  },
  strapi: {
    url: process.env.STRAPI_API_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
})
