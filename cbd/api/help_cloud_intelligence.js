import axios from './http'
const cloudintelligence = {
  getcloudintelligence(params) {
    // console.log(axios)
    return axios.get('/api/cloud_intelligence/lists', { params })
  }
}
export default cloudintelligence
