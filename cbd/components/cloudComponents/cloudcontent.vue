<!--  -->
<template>
  <div>
    <ul class="headline-contentul">
      <li v-for="(item,index) in contentlis" :key="index">
        <div class="headlineimg">
          <img src="" alt="">
        </div>
        <div class="headlinelic">
          <h3>移动互联网架构开发</h3>
          <p>
            TO是多边机构，不是美国一家开的。WTO成员是平等的，不是美国一家说了算的权理事会
            虽然注定是痴人说梦，但它也充分暴露了美方强权霸凌的嘴脸和唯我独尊的心态。据不权理，
            了联合国教科文组织、联合国人权理事会。                       
          </p>
          <div class="headlispan">
            <span>
              生活服务
            </span>
            <span>
              2018-12-07
            </span>
            <span>
              <img src="../../assets/images/eye.png" alt="">
              6666
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Cloudcontent',
  props: {
    contentlis: {
      type: Array,
      default() {
        return [0, 1, 2, 3, 4]
      }
    }
  }
}
</script>
<style lang='less' scoped>
ul {
  margin-bottom: 20px;
  li {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding-top: 31px;
    height: 232px;
    border-bottom: 1px dashed #e6e6e6;
    .headlineimg {
      width: 226px;
      height: 170px;
      background-color: #ebebeb;
      margin-right: 19px;
    }
    .headlinelic {
      h3 {
        line-height: 40px;
      }
      p {
        line-height: 26px;
        width: 657px;
      }
      .headlispan {
        margin-top: 20px;
        display: flex;
        color: #616975;
        line-height: 30px;
        span {
          &:first-child {
            display: block;
            width: 78px;
            height: 30px;
            background: rgba(241, 242, 246, 1);
            border-radius: 6px;
            color: #747d8c;
            text-align: center;
            line-height: 30px;
            margin-right: 56px;
          }
          &:last-child {
            margin-left: 56px;
            img {
              margin-right: 7px;
            }
          }
        }
      }
    }
  }
}
</style>
