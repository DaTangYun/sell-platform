import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\swiper\\dist\\css\\swiper.css'

import '..\\node_modules\\element-ui\\lib\\theme-chalk\\index.css'

import '..\\node_modules\\vue-area-linkage\\dist\\index.css'

import '..\\assets\\less\\index.less'

import '..\\node_modules\\quill\\dist\\quill.snow.css'

import '..\\node_modules\\quill\\dist\\quill.bubble.css'

import '..\\node_modules\\quill\\dist\\quill.core.css'

import _6f6c098b from '..\\layouts\\default.vue'
import _72edf111 from '..\\layouts\\footer.vue'
import _75c41e03 from '..\\layouts\\header.vue'
import _77a66d33 from '..\\layouts\\login.vue'

const layouts = { "_default": _6f6c098b,"_footer": _72edf111,"_header": _75c41e03,"_login": _77a66d33 }

export default {
  head: {"title":"传帮带","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"My marvelous Nuxt.js project"},{"hid":"descriptionkeyword","name":"description","content":"My marvelous Nuxt.js project"},{"hid":"descriptioncontent","name":"description","content":"My marvelous Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
