<!--  -->
<template>
  <div>
    <div class="submit-mb">
      当前位置：
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Band'
}
</script>
<style lang='less' scoped>
.submit-mb {
  margin-top: 20px;
  display: flex;
  font-size: 12px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(119, 128, 143, 1);
}
</style>
