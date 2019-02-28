<!--  -->
<template>
  <div class="lefttabs">
    <h3>
      个人空间
    </h3>
    <ul>
      <nuxt-link v-for="(item,index) of leftlist" :key="index" tag="li" :to="`/myqzone/${id}${item.url}`">
        {{ item.name }}
      </nuxt-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Lefttabs',
  props: {
    leftlist: {
      type: Array,
      default() {
        return [
          { name: '综合展示', url: '/zonghe' },
          { name: '他的头条', url: '/myhead' },
          { name: '他的信息', url: '/myinfo' },
          { name: '帮帮我', url: '/helpme' },
          { name: '能帮会干', url: '/helpcando' },
          { name: '案例展示', url: '/case' },
          { name: '团队展示', url: '/team' },
          { name: '优惠活动', url: '/active' },
          { name: '他的评价', url: '/pingjia' }
        ]
      }
    }
  },
  data() {
    return {
      activeid: 0
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
<style lang='less' scoped>
.lefttabs {
  width: 248px;
  height: 711px;
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0 23px 0 0;
  h3 {
    line-height: 60px;
    padding-left: 23px;
  }
  ul {
    li {
      width: 248px;
      height: 66px;
      line-height: 66px;
      box-sizing: border-box;
      padding-left: 23px;
      cursor: pointer;
      &:hover {
        background-color: #f1f2f6;
      }
      &:active {
        background: rgba(0, 160, 233, 1);
        color: #fff;
      }
    }
  }
  .active-link {
    background-color: rgba(0, 160, 233, 1);
    color: #fff;
    &:hover {
      background-color: rgba(0, 160, 233, 1);
    }
  }
}
</style>
