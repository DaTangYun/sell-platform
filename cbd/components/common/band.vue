<!--  -->
<template>
  <div v-if="!showPath">
    <div class="submit-mb">
      <div class="weizhi">
        当前位置:
      </div>
      <div class="band">
        <el-breadcrumb v-if="levelList.length" class="breadcrumb-container" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="index" :to="item.path">
            {{ item.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
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
      return this.$route.path === '/' || this.$route.path === '/myqzone'
    }
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb()
      console.log(to.path)
      console.log(from.path)
    },
    hideband: 'hideband'
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    getMeta() {
      this.meat = this.$route.meta
    },
    getBreadcrumb() {
      const history = JSON.parse(sessionStorage.getItem('HISTORY'))
      if (!Array.isArray(history)) return
      let matched = this.$route.matched.filter((item, index) => {
        item.title = history[index].title
        return item
      })
      const first = matched[0]
      if (first && first.name !== '首页') {
        matched = [
          {
            path: '/',
            title: '首页'
          }
        ].concat(matched)
      }
      this.levelList = matched
    },
    hideband() {
      console.log(this.$route.path)
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
