<!--  -->
<template>
  <div class="jianjie">
    <div class="toptabs">
      <ul>
        <nuxt-link v-for="(item,index) of toplist" :key="index" tag="li" :to="`/myself/${id}/myteam/${memid}${item.url}`">
          {{ item.name }}
        </nuxt-link>
      </ul>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  meta: {
    title: '我的团队'
  },
  data() {
    return {
      toplist: [
        { name: '团队简介', url: '/jianjie', par: 'myteam' },
        { name: '团队成员', url: '/member', par: 'myteam' },
        { name: '申请加入人员', url: '/shenqing', par: 'myteam' }
      ],
      id: 0,
      memid: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.memid = this.$route.params.teamid
      this.id = this.$route.params.id
    })
  }
}
</script>
<style lang='less' scoped>
.jianjie {
  background-color: #fff;
  height: 711px;
  margin-left: 12px;
  margin-bottom: 20px;
}
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
  }
  .active-link {
    color: #00a0e9;
    border-bottom: 1px solid #00a0e9;
    &:hover {
      color: #00a0e9;
    }
  }
}
</style>
