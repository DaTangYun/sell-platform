<!--  -->
<template>
  <div>
    <div class="showMeContent">
      <div class="showMe-left"></div>
      <div class="showMe-right">
        <div class="showMe-title">
          会员名称
        </div>
        <div class="showMetext">
          {{ showmetext | ellipsis(showmetext) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowMeContent',
  data() {
    return {
      showmetext: '会员会员会员会员会员会员'
    }
  }
}
</script>
<style lang='less' scoped>
.showMeContent {
  width: 187px;
  height: 80px;
  display: flex;
  .showMe-left {
    width: 80px;
    height: 80px;
    background: pink;
    border-radius: 50%;
    margin-right: 10px;
  }
  .showMe-right {
    width: 98px;
    .showMe-title {
      line-height: 30px;
      color: rgba(40, 45, 56, 1);
    }
    .showMetext {
      color: rgba(119, 128, 143, 1);
      font-size: 14px;
    }
  }
}
</style>
