<!--  -->
<template>
  <div>
    <div class="exh-head" :style="{ width: wid + 'px'}">
      <h4>
        {{ head }}
      </h4>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Help',
  props: {
    head: {
      type: String,
      default: '我的头条'
    },
    wid: {
      type: String,
      default: '690'
    }
  }
}
</script>
<style lang='less' scoped>
.exh-head {
  width: 690px;
  box-sizing: border-box;
  padding: 0 20px 24px 19px;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 20px;
  h4 {
    height: 60px;
    font-size: 24px;
    line-height: 60px;
  }
}
</style>
