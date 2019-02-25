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
  cloudhead: state => {
    return state.cloudhead.cloudHead
  },
  helpcloud: state => {
    return state.helpcloud.helpcloud
  },
  helpwis: state => {
    return state.helpwis.helpwis
  },
  dishelpdo: state => {
    return state.dishelpdo.dishelpdo
  },
  headlist: state => {
    return state.headlist.headlist
  },
  infolist: state => {
    return state.infolist.infolist
  },
  cloudintelligence: state => {
    return state.cloudintelligence.cloudintelligence
  }
}
export default getters
