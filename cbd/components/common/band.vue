<!--  -->
<template>
  <div>
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
      levelList: []
    }
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb()
    }
  },
  created() {
    console.log(22222)
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      const history = JSON.parse(sessionStorage.getItem('HISTORY'))
      console.log(history)
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
      console.log(this.levelList)
    }
  }
}
</script>
<style lang='less' scoped>
.submit-mb {
  width: 1210px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  font-size: 12px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(119, 128, 143, 1);
  .weizhi {
    margin-right: 5px;
  }
}
</style>
