import axios from './http'
const cloudhead = {
  getcloudMessage(params) {
    return axios.get('/api/topline_cate/lists', { params })
  },
  getheadlist(params) {
    return axios.get('/api/topline/lists', { params })
  },
  // 头条详情
  gettoplinedetail(params) {
    return axios.get('/api/topline/detail', { params })
  }
}
export default cloudhead
