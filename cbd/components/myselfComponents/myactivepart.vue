<!--  -->
<template>
  <div class="">
    <ul class="demand-bottom">
      <li v-for="(item1,index1) in useractiveprofile" :key="index1">
        <span>
          {{ item1.desc }}
        </span>
        <span>
          满{{ item1.min_amount }}减{{ item1.prefer_acount }}
        </span>
        <span>
          {{ item1.start_time }}至{{ item1.end_time }}
        </span>
        <span v-if="item1.status === '0'">
          已使用
        </span>
        <span v-else-if="item1.status === '1'">
          未使用
        </span>
        <div class="lidiv">
          <div v-if="item1.status === '1'" @click="shiyong(item1)">
            使用
          </div>
          <div @click="deleteinfolist(item1.id)">
            删除
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Myactivepart',
  props: {
    useractiveprofile: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    async deleteinfolist(vid) {
      await this.$store
        .dispatch('deleteuser', {
          id: vid
        })
        .then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
    },
    shiyong(i) {
      console.log(i)
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.demand-bottom {
  height: 904px;
  li {
    border-bottom: 1px dashed #e6e6e6;
    height: 96px;
    box-sizing: border-box;
    display: flex;
    span {
      padding: 0 23px;
      padding-right: 40px;
      line-height: 96px;
      width: 75px;
      text-align: center;
      &:first-child {
        width: 175px;
        display: inline-block;
        .ellipsis();
      }
      &:nth-child(2) {
        margin-right: 10px;
        color: #ff6b81;
        padding: 0;
        min-width: 135px;
        text-align: center;
        line-height: 20px;
        padding-top: 30px;
      }
      &:nth-child(3) {
        padding-right: 0;
        width: 135px;
        line-height: 30px;
        text-align: center;
        padding-top: 20px;
      }
      &:nth-child(5) {
        margin-right: 20px;
        color: #ff6b81;
      }
    }
    .lidiv {
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      box-sizing: border-box;
      padding-top: 38px;
      div {
        color: #ff6b81;
        &:first-child {
          color: #747d8c;
          margin-right: 10px;
          &:hover {
            color: #00a0e9;
          }
        }
      }
    }
  }
}
</style>
