const path = require('path')
const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
    ** Headers of the page
    */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
    ** Customize the progress-bar color
    */
  loading: {
    color: '#fff'
  },

  /*
    ** Global CSS
    */
  css: ['element-ui/lib/theme-chalk/index.css', 'assets/less/index.less',{ src: "swiper/dist/css/swiper.css" },'vue-area-linkage/dist/index.css','vue-area-linkage/dist/index.css'
],

  /*
    ** Plugins to load before mounting the App
    */
  plugins: ['@/plugins/element-ui',{ src: "~/plugins/vue-swiper.js", ssr: false },'@/plugins/province'],

  /*
    ** Nuxt.js modules
    */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
    ** Axios module configuration
    */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
    ** Build configuration
    */
  build: {
    /*
      ** You can extend webpack config here
      */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias = Object.assign(
        {},
        { ...config.resolve.alias },
        {
          style: path.resolve(__dirname, './assets/less'),
          components: path.resolve(__dirname, './components'),
          common: path.resolve(__dirname, './components/common'),
          assets: path.resolve(__dirname, './assets')
        }
      )
    }
  }
}
