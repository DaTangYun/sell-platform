<!--  -->
<template>
  <div class="toptabs">
    <ul>
      <nuxt-link v-for="(item,index) of toplist" :key="index" tag="li" :to="`/myself/id/mypublish${item.url}`">
        {{ item.name }}
      </nuxt-link>
      <!-- <div class="pub">
        {{ pub }}
      </div> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Toptabs',
  props: {
    pub: {
      type: String,
      default: '发布头条'
    }
  },
  data() {
    return {
      activeid: 0,
      toplist: [
        { name: '头条', url: '/myhead' },
        { name: '信息', url: '/myinfo' },
        { name: '文档', url: '/wendang' },
        { name: '需求 ', url: '/xuqiu' },
        { name: '案例', url: '/case' }
      ]
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
.toptabs {
  width: 950px;
  height: 62px;
  border-bottom: 2px solid #f1f2f6;
  background-color: #fff;
  ul {
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    position: relative;
    li {
      width: 77px;
      line-height: 62px;
      box-sizing: border-box;
      padding: 0 14px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #00a0e9;
        border-bottom: 1px solid #00a0e9;
      }
    }
    .pub {
      color: #00a0e9;
      position: absolute;
      top: 20px;
      right: 30px;
    }
  }
  .active-link {
    color: #00a0e9;
    border-bottom: 1px solid #00a0e9;
  }
}
</style>
