import qs from 'qs'
// import fetch from '@nuxtjs/axios'
import axios from './http'
const disactive = {
  getdisactive(params) {
    // console.log(axios)
    return axios.get('/api/active/lists', { params })
  },
  getuseractiveprofile(params) {
    return axios.get('/api/user_active/profile', { params })
  },
  // 个人中心活动列表
  getactiveprofile(params) {
    return axios.get('/api/active/profile', { params })
  },
  // 删除我组织的活动
  getdeleteactive(params) {
    return axios.post('/api/active/del', qs.stringify(params))
  },
  // 删除我参与的活动
  getdeleteuseractive(params) {
    return axios.post('/api/user_active/del', qs.stringify(params))
  },
  // 用户使用优惠卷
  getusedactive(params) {
    return axios.post('/api/user_active/used', qs.stringify(params))
  },
  // 组织活动编辑获取
  getactivitybj(params) {
    return axios.get('/api/active/edit', { params })
  },
  // 编辑活动保存
  getactivebc(params) {
    return axios.post('/api/active/edit', qs.stringify(params))
  },
  // 添加新活动
  getaddactivity(params) {
    return axios.post('/api/active/add', qs.stringify(params))
  }
}
export default disactive
