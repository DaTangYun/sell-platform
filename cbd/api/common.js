import axios from './http'
const common = {
  getSlider(params) {
    return axios.get('/api/carousel/lists', { params })
  },
  getLianjie(params) {
    // console.log(axios)
    return axios.get('/api/link/lists', { params })
  },
  getBanquan(params) {
    // console.log(axios)
    return axios.get('/api/config/site', { params })
  }
}
export default common
