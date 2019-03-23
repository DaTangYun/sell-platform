<!--  -->
<template>
  <div>
    <div class="showMeContent" @click="handliMyqzne(showme.id)">
      <div class="showMe-left">
        <img :src="showme.avatar" alt="">
      </div>
      <div class="showMe-right">
        <div class="showMe-title">
          {{ showme.nickname }}
        </div>
        <div class="showMetext">
          {{ showme.bio }}
          <!-- {{ showmetext | ellipsis(showmetext) }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowMeContent',
  props: {
    showme: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handliMyqzne(id) {
      this.$router.push({ path: `/myqzone/${id}/zonghe` })
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
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
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .showMe-right {
    width: 98px;
    .showMe-title {
      line-height: 30px;
      color: rgba(40, 45, 56, 1);
      .ellipsis();
    }
    .showMetext {
      color: rgba(119, 128, 143, 1);
      font-size: 14px;
      width: 98px;
      height: 38px;
      overflow: hidden;
    }
  }
}
</style>
