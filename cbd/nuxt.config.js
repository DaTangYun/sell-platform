const path = require('path')
const pkg = require('./package')
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '传帮带',
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
      },
      {
        hid: 'descriptionkeyword',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'descriptioncontent',
        name: 'description',
        content: pkg.description
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    // script: [{ src: path.resolve(__dirname, './static/tinymce4.7.5/tinymce.min.js'), type: 'text/javascript', charset: 'utf-8'}],
    // __dangerouslyDisableSanitizers: ['script']
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
    linkActiveClass: 'active-link',
    linkExactActiveClass: ''
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
    'assets/less/index.less',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  // render: { resourceHints: false },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: true
    },
    {
      src:'@/plugins/vue-quill-editor',
      ssr: false
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
    analyze: true,
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
            priority: 20,
            name: true
          },
          vuearea: {
            test: /node_modules[\\/]vue-area-linkage/,
            chunks: 'all',
            priority: 20,
            name: true
          }
        }
      }
    }
  }
}
