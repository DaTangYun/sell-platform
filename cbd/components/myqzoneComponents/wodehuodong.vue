<!-- 
 -->
<template>
  <div>
    <div class="wode">
      <el-tabs v-model="activeName">
        <el-tab-pane label="我组织的活动" name="first">
          <activity></activity>
        </el-tab-pane>
        <el-tab-pane label="我参与的活动" name="second">
          <activity></activity>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import activity from 'components/discontComponents/activity.vue'
export default {
  name: 'Wodehuodong',
  components: {
    activity
  },
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>
<style lang='less' scoped>
.wode {
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 6px;
}
</style>
