import qs from 'qs'
export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    config.data = qs.stringify(config.data, {
      allowDots: true
    })
    return config
  })

  $axios.onResponse(response => {
    return Promise.resolve(response.data)
  })

  $axios.onError(error => {
    return Promise.reject(error)
  })
}
