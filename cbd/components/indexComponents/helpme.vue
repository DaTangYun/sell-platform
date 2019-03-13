<!--  -->
<template>
  <div class="wisdomBank">
    <div class="wisdomBank-title">
      <h4>
        帮帮我
      </h4>
      <nuxt-link :to="{name: 'discont-help'}" class="wisdomMore">
        更多
      </nuxt-link>
    </div>
    <div class="topimg">
      <img src="../../assets/images/small.png" alt="">
    </div>
    <p>
      帮帮我
    </p>
    <ul class="wisdom-ul">
      <nuxt-link v-for="(item,index) in helpmelist" :key="index" class="wisdom-li" :to="{name: 'discont-help-id',params: {id: item.id}}">
        <div class="wisdom-tri">
          <img src="../../assets/images/right.png" alt="">
        </div>
        <p>
          {{ item.title }}
        </p>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Helpme',
  props: {
    helpmelist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      title: '',
      image: ''
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.wisdomBank {
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
  .topimg {
    width: 216px;
    height: 111px;
    border-radius: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    line-height: 30px;
    color: #282d38;
    .ellipsis();
  }
  .wisdom-ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .wisdom-li {
      height: 31px;
      display: flex;
      line-height: 31px;
      cursor: pointer;
      &:hover p {
        color: #00a0e9;
      }
      .wisdom-tri {
        position: relative;
        width: 21px;
        img {
          position: absolute;
          top: 50%;
          left: -5px;
          transform: translateY(-50%);
        }
      }
      p {
        .ellipsis();
        width: 191px;
      }
    }
  }
}
</style>
