import qs from 'qs'
import axios from './http'
const common = {
  getSlider(params) {
    return axios.get('/api/carousel/lists', { params })
  },
  getLianjie(params) {
    return axios.get('/api/link/lists', { params })
  },
  getBanquan(params) {
    return axios.get('/api/config/site', { params })
  },
  about(params) {
    return axios.post('/api/page/detail', qs.stringify(params))
  },
  // 注册
  usergister(params) {
    return axios.post('/api/user/register', qs.stringify(params))
  },
  // 个人空间
  getusershowmeInfor(params) {
    return axios.get('/api/user/showmeInfo', { params })
  },
  uploadimage(params) {
    return axios.post('/api/common/upload', qs.stringify(params))
  },
  getlogin(params) {
    return axios.post('/api/user/login', qs.stringify(params))
  },
  // 获取验证码
  getsmssend(params) {
    return axios.post('/api/sms/send', qs.stringify(params))
  },
  // 退出
  getlogout(params) {
    return axios.post('/api/user/logout', qs.stringify(params))
  },
  // 查看自己的评论
  getusercommit(params) {
    return axios.get('/api/user_comment/profile', { params })
  },
  // 修改手机号
  getchangemobile(params) {
    return axios.post('/api/user/changemobile', qs.stringify(params))
  },
  getchangepass(params) {
    return axios.post('/api/user/changePass', qs.stringify(params))
  },
  // 获取用户信息
  getuserinfo(params) {
    return axios.get('/api/user/info', { params })
  },
  // 设置用户信息
  getuserchangeinfo(params) {
    return axios.post('/api/user/changeInfo', qs.stringify(params))
  },
  getexit(params) {
    return axios.post('/api/user/logout', qs.stringify(params))
  },
  // 用户认证
  getuseridenty(params) {
    return axios.post('/api/user/identy', qs.stringify(params))
  }
}
export default common
