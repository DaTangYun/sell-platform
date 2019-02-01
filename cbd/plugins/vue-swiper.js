import Vue from 'vue'
export default () => {
  if (process.client) {
    Vue.use(require('vue-awesome-swiper/dist/ssr'))
  }
}
