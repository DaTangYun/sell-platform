<!--  -->
<template>
  <div class="case">
    <ul>
      <li v-for="(item,index) in cases" :key="index">
        <div class="case-img">
          <img src="" alt="">
        </div>
        <p class="case-title">                            
          《企业所得税税前扣除凭证管理办...                  
        </p>
      </li>
    </ul>
    <pagination></pagination>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Cases',
  components: {
    pagination
  },
  data() {
    return {
      cases: [0, 1, 2, 3, 4, 5]
    }
  }
}
</script>
<style lang='less' scoped>
.case {
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 24px;
    li:nth-child(3n) {
      margin-right: 0px;
    }
    li {
      width: 284px;
      margin-right: 20px;
      margin-bottom: 10px;
      .case-img {
        width: 284px;
        height: 201px;
        background: rgba(179, 179, 179, 1);
        border-radius: 6px;
        margin-right: 24px;
      }
      .case-title {
        color: #282d38;
        line-height: 25px;
      }
    }
  }
}
</style>
