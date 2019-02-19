<!--  -->
<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="需求文档" name="first">
        <mylist :demand="['交易名称','选择合作者','交易模式','成交时间','交易状态','操作']" :wid="'135'" :spans="['标题标题标题标题标题','6.0元','产品服务','2019-09-28','待审核']" :wids="'135'"></mylist>
      </el-tab-pane>
      <el-tab-pane label="服务交易" name="second">
        <mylist :demand="['交易名称','交易模式','成交时间','交易状态','操作']" :wid="'173'" :spans="['标题标题标题标题标题','6.0元','2019-09-28','待审核']" :wids="'173'"></mylist>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import mylist from 'components/myselfComponents/list'
export default {
  name: 'Transaction',
  components: {
    mylist
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>
<style lang='less' scoped>
</style>
