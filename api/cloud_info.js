import qs from 'qs'
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
  },
  // 发布信息获得数据
  getsendinfo(params) {
    return axios.get('/api/message/edit', { params })
  },
  getsendedit(params) {
    return axios.post('/api/message/edit', qs.stringify(params))
  },
  // 添加新的嘻嘻
  getaddinfo(params) {
    return axios.post('/api/message/add', qs.stringify(params))
  },
  // 删除
  getdelete(params) {
    return axios.post('/api/message/del', qs.stringify(params))
  }
}
export default cloudinfo
