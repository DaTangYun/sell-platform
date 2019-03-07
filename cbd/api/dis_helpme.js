import qs from 'qs'
import axios from './http'
const dishelpme = {
  getdishelpme(params) {
    return axios.get('/api/help_me/lists', { params })
  },
  gethelpmeprofile(params) {
    return axios.get('/api/help_me/profile', { params })
  },
  gethelpdetail(params) {
    return axios.get('/api/help_me/detail', { params })
  },
  gethelpeditid(params) {
    return axios.get('/api/help_me/edit', { params })
  },
  gethelpedit(params) {
    return axios.post('/api/help_me/edit', qs.stringify(params))
  },
  getheloadd(params) {
    return axios.get('/api/help_me/add', { params })
  },
  // 添加帮帮我
  getaddlist(params) {
    return axios.post('/api/help_me/add', qs.stringify(params))
  },
  getdeletehelp(params) {
    return axios.post('/api/help_me/del', qs.stringify(params))
  }
}
export default dishelpme
