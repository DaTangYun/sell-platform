<!--  -->
<template>
  <div class="wisdomBank">
    <div class="wisdomBank-title">
      <h4>{{ wis }}</h4>
      <nuxt-link to="" class="wisdomMore">
        更多
      </nuxt-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WisdomBank',
  props: {
    wis: {
      type: String,
      default: '智慧库'
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.wisdomBank {
  width: 240px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 0 15px 10px;
  box-sizing: border-box;
  .wisdomBank-title {
    height: 44px;
    box-sizing: border-box;
    position: relative;
    h4 {
      line-height: 44px;
      font-weight: 500;
      color: rgba(40, 45, 56, 1);
    }
    .wisdomMore {
      position: absolute;
      right: 16px;
      bottom: 12px;
      color: rgba(119, 128, 143, 1);
    }
  }
}
</style>
