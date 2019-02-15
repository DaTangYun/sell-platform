<!--  -->
<template>
  <div>
    <div class="w">
      <div class="help">
        <div class="help-content">
          <ul>
            <li v-for="(item,index) in help" :key="index">
              <div>
                <img src="" alt="">
              </div>
              <h5>                          
                《企业所得税税前扣除凭证管理办理办...
              </h5>
              <span>
                耿镇京东分拣150元一天 要求男要求男要求男
                女不限，年龄18-40岁，要求男要求男最少...          
              </span>
            </li>
          </ul>
          <pagination></pagination>
        </div>
        <RightComponent></RightComponent>
      </div>
    </div>
  </div>
</template>

<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    RightComponent,
    pagination
  },
  data() {
    return {
      help: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>
<style lang='less' scoped>
.help {
  display: flex;
  margin-bottom: 56px;
  .help-content {
    background-color: #fff;
    border-radius: 6px;
    width: 950px;
    height: 1283px;
    margin-right: 12px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-top: 24px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-bottom: 32px;
        width: 284px;
        margin-right: 20px;
        box-sizing: border-box;
        div {
          width: 284px;
          height: 201px;
          background: rgba(179, 179, 179, 1);
          border-radius: 6px;
        }
        h5 {
          color: #282d38;
          line-height: 20px;
        }
        span {
          color: #77808f;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
