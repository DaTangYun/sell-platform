import qs from 'qs'
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
  },
  // 头条列表-个人中心
  gettoplineprofile(params) {
    return axios.get('/api/topline/profile', { params })
  },
  // 获取头条内容
  gettoplinedit(params) {
    return axios.get('/api/topline/edit', { params })
  },
  bctoplineedit(params) {
    return axios.post('/api/topline/edit', qs.stringify(params))
  },
  // 添加新头条
  addnewhead(params) {
    return axios.post('/api/topline/add', qs.stringify(params))
  }
}
export default cloudhead
