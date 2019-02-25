import axios from './http'
const cloudinfo = {
  getcloudInfo(params) {
    return axios.get('/api/message_cate/lists', { params })
  }
}
export default cloudinfo
