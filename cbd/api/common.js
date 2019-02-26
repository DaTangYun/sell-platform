import qs from 'qs'
import axios from './http'
const common = {
  getSlider(params) {
    return axios.get('/api/carousel/lists', { params })
  },
  getLianjie(params) {
    return axios.get('/api/link/lists', { params })
  },
  getBanquan(params) {
    return axios.get('/api/config/site', { params })
  },
  about(params) {
    return axios.post('/api/page/detail', qs.stringify(params))
  }
}
export default common
