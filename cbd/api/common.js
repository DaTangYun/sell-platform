import axios from './http'
const common = {
  getSlider(params) {
    console.log(axios)
    return axios.get('/api/carousel/lists', { params })
  }
}
export default common
