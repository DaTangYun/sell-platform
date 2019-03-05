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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#00a0e9',
    height: '3px'
  },
  router: {
    middleware: ['redirect', 'routers'],
    linkActiveClass: 'active-link'
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src: 'swiper/dist/css/swiper.css'
    },
    'element-ui/lib/theme-chalk/index.css',
    'vue-area-linkage/dist/index.css',
    'assets/less/index.less'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: true
    },
    {
      src: '~/plugins/vue-swiper',
      ssr: false
    },
    {
      src: '~/plugins/province',
      ssr: false
    },
    '~plugins/ellipsis.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    proxy: true
  },
  proxy: [['/api', { target: 'http://cbd.zyuu.cn' }]],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // analyze: true,
    babel: {
      'plugins': [
        ['component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    },
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
        {
          ...config.resolve.alias
        },
        {
          style: path.resolve(__dirname, './assets/less'),
          components: path.resolve(__dirname, './components'),
          common: path.resolve(__dirname, './components/common'),
          assets: path.resolve(__dirname, './assets')
        }
      )
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxAsyncRequests: 7,
        cacheGroups: {
          vueswiper: {
            test: /node_modules[\\/]swiper/,
            chunks: 'all',
            priority: 21,
            name: true
          },
          vuearea: {
            test: /node_modules[\\/]vue-area-linkage/,
            chunks: 'all',
            priority: 21,
            name: true
          }
        }
      }
    }
  }
}
