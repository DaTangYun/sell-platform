<!--  -->
<template>
  <div class="toptabs">
    <ul>
      <nuxt-link v-for="(item,index) of toplist" :key="index" tag="li" :to="`/myself/${id}/${item.par}${item.url}`">
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
    },
    toplist: {
      type: Array,
      default() {
        return [
          { name: '头条', url: '/myhead', par: 'mypublish' },
          { name: '信息', url: '/myinfo', par: 'mypublish' },
          { name: '文档', url: '/wendang', par: 'mypublish' },
          { name: '需求 ', url: '/xuqiu', par: 'mypublish' },
          { name: '案例', url: '/case', par: 'mypublish' }
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
      width: 130px;
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
    .active-link {
      color: #00a0e9;
      border-bottom: 1px solid #00a0e9;
    }
  }
}
</style>
