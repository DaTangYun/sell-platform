import axios from './http'
const dishelpme = {
  getdishelpme(params) {
    // console.log(axios)
    return axios.get('/api/help_me/lists', { params })
  }
}
export default dishelpme
