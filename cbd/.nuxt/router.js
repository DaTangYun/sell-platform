import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _2e9ab1f4 = () => interopDefault(import('..\\pages\\authentication.vue' /* webpackChunkName: "pages_authentication" */))
const _77262cf2 = () => interopDefault(import('..\\pages\\callme.vue' /* webpackChunkName: "pages_callme" */))
const _eeb42218 = () => interopDefault(import('..\\pages\\discont.vue' /* webpackChunkName: "pages_discont" */))
const _c813eb0c = () => interopDefault(import('..\\pages\\discont\\active.vue' /* webpackChunkName: "pages_discont_active" */))
const _034312ad = () => interopDefault(import('..\\pages\\discont\\help\\index.vue' /* webpackChunkName: "pages_discont_help_index" */))
const _423ecdcc = () => interopDefault(import('..\\pages\\discont\\helpcando\\index.vue' /* webpackChunkName: "pages_discont_helpcando_index" */))
const _4bdfdc55 = () => interopDefault(import('..\\pages\\discont\\help\\_id.vue' /* webpackChunkName: "pages_discont_help__id" */))
const _8b045998 = () => interopDefault(import('..\\pages\\discont\\helpcando\\_id.vue' /* webpackChunkName: "pages_discont_helpcando__id" */))
const _8ecdc186 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages_help" */))
const _74c4f7c9 = () => interopDefault(import('..\\pages\\help\\cloudwisdom.vue' /* webpackChunkName: "pages_help_cloudwisdom" */))
const _7deb406a = () => interopDefault(import('..\\pages\\help\\fuwu.vue' /* webpackChunkName: "pages_help_fuwu" */))
const _071eef7a = () => interopDefault(import('..\\pages\\help\\show.vue' /* webpackChunkName: "pages_help_show" */))
const _700d943a = () => interopDefault(import('..\\pages\\help\\wisdombank.vue' /* webpackChunkName: "pages_help_wisdombank" */))
const _ad4747c6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _7578e0ea = () => interopDefault(import('..\\pages\\messageComp.vue' /* webpackChunkName: "pages_messageComp" */))
const _71546b9f = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _d0febd34 = () => interopDefault(import('..\\pages\\releaseDemand.vue' /* webpackChunkName: "pages_releaseDemand" */))
const _ef11b1fa = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages_reset" */))
const _4d69ac2f = () => interopDefault(import('..\\pages\\submitheads.vue' /* webpackChunkName: "pages_submitheads" */))
const _10967a83 = () => interopDefault(import('..\\pages\\submitMessage.vue' /* webpackChunkName: "pages_submitMessage" */))
const _d6821c72 = () => interopDefault(import('..\\pages\\submitnbhg.vue' /* webpackChunkName: "pages_submitnbhg" */))
const _6485ff0d = () => interopDefault(import('..\\pages\\submitxq.vue' /* webpackChunkName: "pages_submitxq" */))
const _64e8a394 = () => interopDefault(import('..\\pages\\submitxx.vue' /* webpackChunkName: "pages_submitxx" */))
const _c083ac74 = () => interopDefault(import('..\\pages\\cloud\\cloudhead\\index.vue' /* webpackChunkName: "pages_cloud_cloudhead_index" */))
const _30d23390 = () => interopDefault(import('..\\pages\\cloud\\cloudinfo\\index.vue' /* webpackChunkName: "pages_cloud_cloudinfo_index" */))
const _1e37e5ae = () => interopDefault(import('..\\pages\\cloud\\cloudhead\\_id.vue' /* webpackChunkName: "pages_cloud_cloudhead__id" */))
const _8ccdd2c0 = () => interopDefault(import('..\\pages\\cloud\\cloudinfo\\_id.vue' /* webpackChunkName: "pages_cloud_cloudinfo__id" */))
const _55e0ab65 = () => interopDefault(import('..\\pages\\myqzone\\_id.vue' /* webpackChunkName: "pages_myqzone__id" */))
const _42e9c5eb = () => interopDefault(import('..\\pages\\myqzone\\_id\\active.vue' /* webpackChunkName: "pages_myqzone__id_active" */))
const _d603e756 = () => interopDefault(import('..\\pages\\myqzone\\_id\\case.vue' /* webpackChunkName: "pages_myqzone__id_case" */))
const _4fd26e36 = () => interopDefault(import('..\\pages\\myqzone\\_id\\helpcando.vue' /* webpackChunkName: "pages_myqzone__id_helpcando" */))
const _3d5b55fe = () => interopDefault(import('..\\pages\\myqzone\\_id\\helpme.vue' /* webpackChunkName: "pages_myqzone__id_helpme" */))
const _c39c8d1e = () => interopDefault(import('..\\pages\\myqzone\\_id\\myhead.vue' /* webpackChunkName: "pages_myqzone__id_myhead" */))
const _29638d82 = () => interopDefault(import('..\\pages\\myqzone\\_id\\myinfo.vue' /* webpackChunkName: "pages_myqzone__id_myinfo" */))
const _5a708d8a = () => interopDefault(import('..\\pages\\myqzone\\_id\\pingjia.vue' /* webpackChunkName: "pages_myqzone__id_pingjia" */))
const _30447502 = () => interopDefault(import('..\\pages\\myqzone\\_id\\team.vue' /* webpackChunkName: "pages_myqzone__id_team" */))
const _76d29940 = () => interopDefault(import('..\\pages\\myqzone\\_id\\team\\index.vue' /* webpackChunkName: "pages_myqzone__id_team_index" */))
const _a1098b06 = () => interopDefault(import('..\\pages\\myqzone\\_id\\team\\_td.vue' /* webpackChunkName: "pages_myqzone__id_team__td" */))
const _2053a990 = () => interopDefault(import('..\\pages\\myqzone\\_id\\zonghe.vue' /* webpackChunkName: "pages_myqzone__id_zonghe" */))
const _8d55c514 = () => interopDefault(import('..\\pages\\myself\\_id.vue' /* webpackChunkName: "pages_myself__id" */))
const _22931234 = () => interopDefault(import('..\\pages\\myself\\_id\\helpcando.vue' /* webpackChunkName: "pages_myself__id_helpcando" */))
const _d14243b0 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive.vue' /* webpackChunkName: "pages_myself__id_myactive" */))
const _0f906318 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive\\canyu.vue' /* webpackChunkName: "pages_myself__id_myactive_canyu" */))
const _75d6d930 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive\\zuzhi.vue' /* webpackChunkName: "pages_myself__id_myactive_zuzhi" */))
const _dd83161e = () => interopDefault(import('..\\pages\\myself\\_id\\myjy.vue' /* webpackChunkName: "pages_myself__id_myjy" */))
const _0c3e3904 = () => interopDefault(import('..\\pages\\myself\\_id\\myjy\\fwwendang.vue' /* webpackChunkName: "pages_myself__id_myjy_fwwendang" */))
const _b96a6448 = () => interopDefault(import('..\\pages\\myself\\_id\\myjy\\xqwendang.vue' /* webpackChunkName: "pages_myself__id_myjy_xqwendang" */))
const _caafafc8 = () => interopDefault(import('..\\pages\\myself\\_id\\mypj.vue' /* webpackChunkName: "pages_myself__id_mypj" */))
const _712481dd = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish.vue' /* webpackChunkName: "pages_myself__id_mypublish" */))
const _337528cd = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\case.vue' /* webpackChunkName: "pages_myself__id_mypublish_case" */))
const _7b5397e9 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\myhead.vue' /* webpackChunkName: "pages_myself__id_mypublish_myhead" */))
const _6f1fd092 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\myinfo.vue' /* webpackChunkName: "pages_myself__id_mypublish_myinfo" */))
const _5fc4166e = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\wendang.vue' /* webpackChunkName: "pages_myself__id_mypublish_wendang" */))
const _23334973 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\xuqiu.vue' /* webpackChunkName: "pages_myself__id_mypublish_xuqiu" */))
const _0037c1ba = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\index.vue' /* webpackChunkName: "pages_myself__id_myteam_index" */))
const _0302bb83 = () => interopDefault(import('..\\pages\\myself\\_id\\safe.vue' /* webpackChunkName: "pages_myself__id_safe" */))
const _63cd820b = () => interopDefault(import('..\\pages\\myself\\_id\\zhsz.vue' /* webpackChunkName: "pages_myself__id_zhsz" */))
const _466784a1 = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid" */))
const _6da64809 = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\jianjie.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_jianjie" */))
const _45ccc4bb = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\member.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_member" */))
const _9bae0c20 = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\shenqing.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_shenqing" */))
const _166983c1 = () => interopDefault(import('..\\pages\\ruledetail\\_id.vue' /* webpackChunkName: "pages_ruledetail__id" */))
const _40968df4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: '',
    scrollBehavior,

    routes: [{
      path: "/authentication",
      component: _2e9ab1f4,
      name: "authentication"
    }, {
      path: "/callme",
      component: _77262cf2,
      name: "callme"
    }, {
      path: "/discont",
      component: _eeb42218,
      name: "discont",
      children: [{
        path: "active",
        component: _c813eb0c,
        name: "discont-active"
      }, {
        path: "help",
        component: _034312ad,
        name: "discont-help"
      }, {
        path: "helpcando",
        component: _423ecdcc,
        name: "discont-helpcando"
      }, {
        path: "help/:id?",
        component: _4bdfdc55,
        name: "discont-help-id"
      }, {
        path: "helpcando/:id?",
        component: _8b045998,
        name: "discont-helpcando-id"
      }]
    }, {
      path: "/help",
      component: _8ecdc186,
      name: "help",
      children: [{
        path: "cloudwisdom",
        component: _74c4f7c9,
        name: "help-cloudwisdom"
      }, {
        path: "fuwu",
        component: _7deb406a,
        name: "help-fuwu"
      }, {
        path: "show",
        component: _071eef7a,
        name: "help-show"
      }, {
        path: "wisdombank",
        component: _700d943a,
        name: "help-wisdombank"
      }]
    }, {
      path: "/login",
      component: _ad4747c6,
      name: "login"
    }, {
      path: "/messageComp",
      component: _7578e0ea,
      name: "messageComp"
    }, {
      path: "/register",
      component: _71546b9f,
      name: "register"
    }, {
      path: "/releaseDemand",
      component: _d0febd34,
      name: "releaseDemand"
    }, {
      path: "/reset",
      component: _ef11b1fa,
      name: "reset"
    }, {
      path: "/submitheads",
      component: _4d69ac2f,
      name: "submitheads"
    }, {
      path: "/submitMessage",
      component: _10967a83,
      name: "submitMessage"
    }, {
      path: "/submitnbhg",
      component: _d6821c72,
      name: "submitnbhg"
    }, {
      path: "/submitxq",
      component: _6485ff0d,
      name: "submitxq"
    }, {
      path: "/submitxx",
      component: _64e8a394,
      name: "submitxx"
    }, {
      path: "/cloud/cloudhead",
      component: _c083ac74,
      name: "cloud-cloudhead"
    }, {
      path: "/cloud/cloudinfo",
      component: _30d23390,
      name: "cloud-cloudinfo"
    }, {
      path: "/cloud/cloudhead/:id",
      component: _1e37e5ae,
      name: "cloud-cloudhead-id"
    }, {
      path: "/cloud/cloudinfo/:id",
      component: _8ccdd2c0,
      name: "cloud-cloudinfo-id"
    }, {
      path: "/myqzone/:id?",
      component: _55e0ab65,
      name: "myqzone-id",
      children: [{
        path: "active",
        component: _42e9c5eb,
        name: "myqzone-id-active"
      }, {
        path: "case",
        component: _d603e756,
        name: "myqzone-id-case"
      }, {
        path: "helpcando",
        component: _4fd26e36,
        name: "myqzone-id-helpcando"
      }, {
        path: "helpme",
        component: _3d5b55fe,
        name: "myqzone-id-helpme"
      }, {
        path: "myhead",
        component: _c39c8d1e,
        name: "myqzone-id-myhead"
      }, {
        path: "myinfo",
        component: _29638d82,
        name: "myqzone-id-myinfo"
      }, {
        path: "pingjia",
        component: _5a708d8a,
        name: "myqzone-id-pingjia"
      }, {
        path: "team",
        component: _30447502,
        children: [{
          path: "",
          component: _76d29940,
          name: "myqzone-id-team"
        }, {
          path: ":td",
          component: _a1098b06,
          name: "myqzone-id-team-td"
        }]
      }, {
        path: "zonghe",
        component: _2053a990,
        name: "myqzone-id-zonghe"
      }]
    }, {
      path: "/myself/:id?",
      component: _8d55c514,
      name: "myself-id",
      children: [{
        path: "helpcando",
        component: _22931234,
        name: "myself-id-helpcando"
      }, {
        path: "myactive",
        component: _d14243b0,
        name: "myself-id-myactive",
        children: [{
          path: "canyu",
          component: _0f906318,
          name: "myself-id-myactive-canyu"
        }, {
          path: "zuzhi",
          component: _75d6d930,
          name: "myself-id-myactive-zuzhi"
        }]
      }, {
        path: "myjy",
        component: _dd83161e,
        name: "myself-id-myjy",
        children: [{
          path: "fwwendang",
          component: _0c3e3904,
          name: "myself-id-myjy-fwwendang"
        }, {
          path: "xqwendang",
          component: _b96a6448,
          name: "myself-id-myjy-xqwendang"
        }]
      }, {
        path: "mypj",
        component: _caafafc8,
        name: "myself-id-mypj"
      }, {
        path: "mypublish",
        component: _712481dd,
        name: "myself-id-mypublish",
        children: [{
          path: "case",
          component: _337528cd,
          name: "myself-id-mypublish-case"
        }, {
          path: "myhead",
          component: _7b5397e9,
          name: "myself-id-mypublish-myhead"
        }, {
          path: "myinfo",
          component: _6f1fd092,
          name: "myself-id-mypublish-myinfo"
        }, {
          path: "wendang",
          component: _5fc4166e,
          name: "myself-id-mypublish-wendang"
        }, {
          path: "xuqiu",
          component: _23334973,
          name: "myself-id-mypublish-xuqiu"
        }]
      }, {
        path: "myteam",
        component: _0037c1ba,
        name: "myself-id-myteam"
      }, {
        path: "safe",
        component: _0302bb83,
        name: "myself-id-safe"
      }, {
        path: "zhsz",
        component: _63cd820b,
        name: "myself-id-zhsz"
      }, {
        path: "myteam/mt/:teamid?",
        component: _466784a1,
        name: "myself-id-myteam-mt-teamid",
        children: [{
          path: "jianjie",
          component: _6da64809,
          name: "myself-id-myteam-mt-teamid-jianjie"
        }, {
          path: "member",
          component: _45ccc4bb,
          name: "myself-id-myteam-mt-teamid-member"
        }, {
          path: "shenqing",
          component: _9bae0c20,
          name: "myself-id-myteam-mt-teamid-shenqing"
        }]
      }]
    }, {
      path: "/ruledetail/:id?",
      component: _166983c1,
      name: "ruledetail-id"
    }, {
      path: "/",
      component: _40968df4,
      name: "index"
    }],

    fallback: false
  })
}
