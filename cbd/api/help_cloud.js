import axios from './http'
const helpcloud = {
  gethelpcloud(params) {
    return axios.get('/api/cloud_intelligence/lists', { params })
  },
  getHelpwis(params) {
    // console.log(axios)
    return axios.get('/api/finance/lists', { params })
  }
}
export default helpcloud
