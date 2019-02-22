<!--  -->
<template>
  <div class="rules">
    <ul class="rules-span">
      <li v-for="(item,index) in rulesspan" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul class="rules-news">
      <nuxt-link v-for="(item,index) in rulesnew" :key="index" tag="li" to="/ruledetail">
        <div></div>
        <p>
          国家税务总局公告2018年第28号 国家税务总局关于发布《企业所得税税前扣除凭证管理管理...
        </p>
        <span>
          2018-12-07
        </span>
      </nuxt-link>
    </ul>
    <pagination></pagination>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Ruless',
  components: {
    pagination
  },
  data() {
    return {
      rulesspan: ['合同', '报表', '财经法规', '合同'],
      rulesnew: [0, 1, 2]
    }
  }
}
</script>
<style lang='less' scoped>
.rules {
  padding: 24px;
  box-sizing: border-box;
  .rules-span {
    box-sizing: border-box;
    display: flex;
    li {
      height: 30px;
      background-color: #f1f2f6;
      padding: 0 25px;
      margin-right: 10px;
      color: #747d8c;
      font-size: 14px;
      line-height: 30px;
    }
  }
  .rules-news {
    margin-top: 24px;
    border-bottom: 1px dashed #e6e6e6;
    height: 441px;
    margin-bottom: 30px;
    li {
      height: 20px;
      margin-bottom: 10px;
      display: flex;
      cursor: pointer;
      &:hover div {
        background-color: #00a0e9;
      }
      &:hover p,
      &:hover span {
        color: #00a0e9;
      }
      div {
        width: 6px;
        height: 6px;
        background: #ff4757;
        border-radius: 50%;
        margin-top: 12px;
        margin-right: 12px;
      }
      p {
        color: #282d38;
        width: 666px;
        display: block;
        margin-right: 140px;
        font-size: 16px;
      }
      span {
        font-size: 14px;
        color: #77808f;
      }
    }
  }
}
</style>
