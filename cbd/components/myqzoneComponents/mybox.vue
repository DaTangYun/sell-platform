<!--  -->
<template>
  <div>
    <div class="exh-head">
      <h5>
        {{ my }}
      </h5>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'My',
  props: {
    my: {
      type: String,
      default: '我的案例'
    }
  }
}
</script>
<style lang='less' scoped>
.exh-head {
  width: 248px;
  box-sizing: border-box;
  padding: 0 16px 16px 16px;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 20px;
  h5 {
    height: 46px;
    font-size: 16px;
    line-height: 46px;
  }
}
</style>
