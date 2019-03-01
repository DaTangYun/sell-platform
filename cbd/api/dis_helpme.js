import axios from './http'
const dishelpme = {
  getdishelpme(params) {
    return axios.get('/api/help_me/lists', { params })
  },
  gethelpmeprofile(params) {
    return axios.get('/api/help_me/profile', { params })
  }
}
export default dishelpme
