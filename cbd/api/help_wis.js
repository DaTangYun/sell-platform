import axios from './http'
const helpwis = {
  getHelpwis(params) {
    // 智慧库
    return axios.get('/api/finance/lists', { params })
  },
  // 智慧库=>财经法规详情
  getfinancedetail(params) {
    return axios.get('/api/finance/detail', { params })
  },
  // 经典案例
  getcaselist(params) {
    return axios.get('/api/cases/lists', { params })
  },
  // 文档列表
  getdocumentlist(params) {
    return axios.get('/api/document/lists', { params })
  }
}
export default helpwis
