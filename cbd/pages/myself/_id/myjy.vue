<!--  -->
<template>
  <div class="myjy">
    <!-- <transaction></transaction> -->
    <ul>
      <nuxt-link v-for="item of myjy" :key="item.id" tag="li" :to="`/myself/${id}/myjy${item.url}`">
        {{ item.name }}
      </nuxt-link>
    </ul>
    <nuxt-child></nuxt-child>
  </div>
</template>
 <script>
// import transaction from 'components/myselfComponents/transaction'
export default {
  // components: {
  //   transaction
  // },
  data() {
    return {
      myjy: [
        { name: '需求文档', url: '/xqwendang' },
        { name: '服务文档', url: '/fwwendang' }
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
.myjy {
  margin-left: 12px;
  background-color: #fff;
  width: 950px;
  box-sizing: border-box;
  padding: 20px;
  height: 671px;
  padding-bottom: 0px;
  margin-bottom: 80px;
  ul {
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    position: relative;
    border-bottom: 2px solid #f1f2f6;
    li {
      margin-right: 20px;
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
