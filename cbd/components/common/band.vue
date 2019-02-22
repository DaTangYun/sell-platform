<!--  -->
<template>
  <div>
    <div class="submit-mb">
      <div class="weizhi">
        当前位置:
      </div>
      <div class="band">
        <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="index" :to="item.path">
            {{ item.name }}
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
      meat: []
    }
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getMeta()
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    getMeta() {
      this.meat = this.$route.meta
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item, index) => {
        if (item.name === 'cloud') {
          item.path = '/cloud/cloudInfo'
        }
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
