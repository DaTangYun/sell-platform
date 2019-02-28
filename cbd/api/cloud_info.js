import axios from './http'
const cloudinfo = {
  getcloudInfo(params) {
    return axios.get('/api/message_cate/lists', { params })
  },
  getinfolist(params) {
    return axios.get('/api/message/lists', { params })
  },
  getinfodetail(params) {
    return axios.get('/api/message/detail', { params })
  }
}
export default cloudinfo
