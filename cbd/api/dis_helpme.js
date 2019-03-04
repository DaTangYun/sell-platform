import axios from './http'
const dishelpme = {
  getdishelpme(params) {
    return axios.get('/api/help_me/lists', { params })
  },
  gethelpmeprofile(params) {
    return axios.get('/api/help_me/profile', { params })
  },
  gethelpdetail(params) {
    return axios.get('/api/help_me/detail', { params })
  }
}
export default dishelpme
