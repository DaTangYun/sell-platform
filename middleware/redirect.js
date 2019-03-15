const path = [
  { router: '/cloud', redirectroute: '/cloud/cloudInfo' },
  { router: '/help', redirectroute: '/help/show' },
  { router: '/discont', redirectroute: '/discont/helpcando' }
]
export default ({ route, isDev, redirect }) => {
  if (isDev) {
    path.map((item, index) => {
      if (route.path === item.router) {
        redirect({ path: item.redirectroute })
      }
    })
    return route
  } else {
    path.map((item, index) => {
      if (route.path === item.router) {
        redirect({ path: item.redirectroute })
      }
    })
    return route
  }
}
