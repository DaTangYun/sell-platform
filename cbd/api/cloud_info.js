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
  },
  // 信息列表个人中心
  getinfoprofile(params) {
    return axios.get('/api/message/profile', { params })
  }
}
export default cloudinfo
