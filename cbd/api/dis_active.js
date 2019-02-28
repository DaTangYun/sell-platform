import axios from './http'
const disactive = {
  getdisactive(params) {
    // console.log(axios)
    return axios.get('/api/active/lists', { params })
  },
  getuseractiveprofile(params) {
    return axios.get('/api/user_active/profile', { params })
  }
}
export default disactive
