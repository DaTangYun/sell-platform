import axios from 'axios'
import base from '../api/base'
const tip = msg => {
  this.$message.success({
    message: '登录成功',
    duration: 1000
  })
}
const errorHandle = (status, other) => {
  switch (status) {
    // 404 请求不存在
    case 403:
      tip('请升级为会员')
      break
    case 401:
      tip('登录失效请重新登录')
      break
    default:
      break
  }
}
// 创建拦截器
const host = process.client ? '' : base.dev
const instance = axios.create({
  timeout: 1000 * 10,
  baseURL: host
})
// 请求头
instance.defaults.headers.post['Content-type'] =
  'application/json;charset=UTF-8'

// 每次请求有token携带Token
instance.interceptors.request.use(
  config => {
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.error(error)
)
// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    if (res.status === 200) {
      return res.data.code === 403
        ? errorHandle(res.data.code)
        : res.data.code === 401
          ? errorHandle(res.data.code)
          : Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  // 请求失败
  error => {
    const { response } = error
    if (response) {
      // 请求已经发出但不在2xx范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    }
  }
)
export default instance
