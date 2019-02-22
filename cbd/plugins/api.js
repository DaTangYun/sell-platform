import api from '@/api/index'
import Vue from 'vue'
export default () => {
  Vue.prototype.$api = api
}
