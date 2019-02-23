import axios from './http'
const helpcloud = {
  gethelpcloud(params) {
    return axios.get('/api/cloud_intelligence/lists', { params })
  }
}
export default helpcloud
