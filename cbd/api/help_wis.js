import qs from 'qs'
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
  },
  // 文档个人中心
  getdocumentprofile(params) {
    return axios.get('/api/document/profile', { params })
  },
  // 案例个人中心
  getcasesprofile(params) {
    return axios.get('/api/cases/profile', { params })
  },
  // 删除
  getdelete(params) {
    return axios.post('/api/document/del', qs.stringify(params))
  },
  // 获取添加文档中的分类
  getdocuadd(params) {
    return axios.get('/api/document/add', { params })
  },
  getdocument(params) {
    return axios.post('/api/document/add', qs.stringify(params))
  },
  // 添加案例
  getnewcase(params) {
    return axios.post('/api/cases/add', qs.stringify(params))
  },
  // 点击编辑获取案例信息
  getcaseinfo(params) {
    return axios.get('/api/cases/edit', { params })
  },
  // 修改案例点击确定
  getqdcase(params) {
    return axios.post('/api/cases/edit', qs.stringify(params))
  }
}
export default helpwis
