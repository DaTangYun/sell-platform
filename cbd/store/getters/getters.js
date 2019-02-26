const getters = {
  city: state => {
    return state.app.city
  },
  // 首页轮播图
  slider: state => {
    return state.common.slider
  },
  // 友情链接
  lianjie: state => {
    return state.common.lianjie
  },
  error: state => {
    return state.common.error
  },
  // 首页版权
  banquan: state => {
    return state.common.banquan
  },
  // 首页秀秀我
  showme: state => {
    return state.showme.showmelist
  },
  showerror: state => {
    return state.showme.error
  },
  cloudInfo: state => {
    return state.cloudinfo.cloudInfo
  },
  headcate: state => {
    return state.cloudhead.headcate
  },
  helpcloud: state => {
    return state.helpcloud.helpcloud
  },
  helpwis: state => {
    return state.helpwis.helpwis
  },
  caselist: state => {
    return state.helpwis.caselist
  },
  dishelpdo: state => {
    return state.dishelpdo.dishelpdo
  },
  activelist: state => {
    return state.disactive.activelist
  },
  helpmelist: state => {
    return state.dishelpme.helpmelist
  },
  headlist: state => {
    return state.cloudhead.headlist
  },
  infolist: state => {
    return state.cloudinfo.infolist
  },
  infototal: state => {
    return state.cloudinfo.total
  },
  callme: state => {
    return state.common.callme
  }
}
export default getters
