const HISTORY = route => {
  if (process.client) {
    console.log(sessionStorage, '888888')
    sessionStorage.setItem('HISTORY', JSON.stringify(route.meta))
    return route
  }
}
export default ({ route, isDev }) => {
  if (isDev) {
    HISTORY(route)
  } else {
    HISTORY(route)
  }
}
