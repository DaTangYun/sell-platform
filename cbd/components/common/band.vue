<!--  -->
<template>
  <div v-if="!showPath">
    <div class="submit-mb">
      <div class="weizhi">
        当前位置:
      </div>
      <div class="band">
        <el-breadcrumb v-if="levelList.length" class="breadcrumb-container" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="index" :to="item.newpath">
            {{ item.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'Band',
  data() {
    return {
      levelList: [],
      showband: true,
      band: {
        path: '',
        flag: true
      }
    }
  },
  computed: {
    showPath() {
      const reg = /myqzone/
      const flag = reg.test(this.$route.path)
      return this.$route.path === '/' || flag
    },
    ...mapGetters(['meta'])
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb()
    },
    hideband: 'hideband'
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('beforeunload', this.getBread())
      this.getBreadcrumb()
    })
  },
  methods: {
    getMeta(arr) {
      let matched = this.$route.matched.filter((item, index) => {
        item = this.fixredirect(item)
        item.title = arr[index].title
        if (item.redirect) {
          item.newpath = this.pathCompile(item.redirect)
        } else {
          item.newpath = this.pathCompile(item.path)
        }
        return item
      })
      const first = matched[0]
      if (first && first.name !== '首页') {
        matched = [
          {
            newpath: '/',
            title: '首页'
          }
        ].concat(matched)
      }
      this.levelList = matched
      console.log(this.levelList)
    },
    fixredirect(item) {
      if (item.path === '/myself/:id?') {
        item.redirect = '/myself/:id/mypublish/myhead'
      }
      if (item.path === '/myself/:id?/myactive') {
        item.redirect = '/myself/:id?/myactive/zuzhi'
      }
      if (item.path === '/myself/:id?/myteam/mt/:teamid?') {
        item.redirect = '/myself/:id?/myteam'
      }
      if (item.path === '/myself/:id?/mypublish') {
        item.redirect = '/myself/:id?/mypublish/myhead'
      }
      return item
    },
    getBreadcrumb() {
      const history = JSON.parse(sessionStorage.getItem('HISTORY'))
      if (!Array.isArray(history)) return
      this.getMeta(history)
    },
    getBread() {
      this.getMeta(this.meta)
    },
    pathCompile(path) {
      const { params } = this.$route
      const toPath = pathToRegexp.compile(path)
      return toPath(params)
    }
  }
}
</script>
<style lang='less' scoped>
.submit-mb {
  width: 1210px;
  margin: 0 auto;
  display: flex;
  font-size: 12px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(119, 128, 143, 1);
  padding: 20px 0;
  .weizhi {
    margin-right: 5px;
  }
}
</style>
