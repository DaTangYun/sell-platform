import axios from './http'
const cloudinfo = {
  getcloudInfo(params) {
    return axios.get('/api/message_cate/lists', { params })
  },
  getinfolist(params) {
    return axios.get('/api/message/lists', { params })
  }
}
export default cloudinfo
