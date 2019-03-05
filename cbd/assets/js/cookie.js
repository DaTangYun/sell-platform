import Cookie from 'js-cookie'
const token = 'token'
const getCookie = () => {
  return Cookie.get(token)
}
const setCookie = tok => {
  return Cookie.set(token, tok)
}
const removeCookie = () => {
  return Cookie.remove(token)
}
const cookie = {
  get: getCookie,
  set: setCookie,
  remove: removeCookie
}
export default cookie
