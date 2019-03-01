<!--  -->
<template>
  <div class="lefttabs">
    <h3>
      个人中心
    </h3>
    <ul>
      <nuxt-link v-for="(item,index) of leftlist" :key="index" tag="li" :to="`/myself/${id}${item.url}`">
        {{ item.name }}
      </nuxt-link>
      <li>
        退出
      </li>
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
          { name: '我的发布', url: '/mypublish' },
          { name: '能帮会干', url: '/helpcando' },
          { name: '我的团队', url: '/myteam' },
          { name: '我的活动 ', url: '/myactive' },
          // { name: '我的交易', url: '/myjy' },
          { name: '我的评价', url: '/mypj' },
          { name: '安全设置', url: '/safe' },
          { name: '账号设置', url: '/zhsz' }
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
