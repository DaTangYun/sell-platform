<!--  -->
<template>
  <div :addform="addform">
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index" :style="{ width: wid + 'px' }">
        {{ item }}
      </span>
    </div>
    <ul class="demand-bottom">
      <li v-for="(item,index) in demands" :key="index">
        <span v-for="(item1,index1) in spans" :key="index1" :style="{ width: wids + 'px' }">
          {{ item1 }}
        </span>
        <div class="lidiv">
          <div v-for="(item3,index3) in caozuo" :key="index3">
            {{ item3 }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    demand: {
      type: Array,
      default() {
        return ['标题', '优惠金额', '使用期限', '领取次数', '使用次数', '操作']
      }
    },
    caozuo: {
      type: Array,
      default() {
        return ['详情', '删除']
      }
    },
    spans: {
      type: Array,
      default() {
        return [
          '标题题题题题题题题题题',
          '满68-98',
          '2018-09-20至2016-06-28',
          '10',
          '10'
        ]
      }
    },
    wid: {
      type: String,
      default: '150'
    },
    wids: {
      type: String,
      default: '150'
    }
  },
  data() {
    return {
      demands: [0]
    }
  },
  created() {
    this.length()
  },
  methods: {
    length() {
      // console.log(this.demand.length)
    },
    addform() {
      // this.$emit('addform')
      // this.demands.push({
      // })
      // console.log()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.demand-top {
  background-color: #f1f2f6;
  color: #747d8c;
  height: 56px;
  line-height: 56px;
  width: 100%;
  box-sizing: border-box;
  span {
    display: inline-block;
    text-align: center;
  }
}
.demand-bottom {
  height: 904px;
  li {
    border-bottom: 1px dashed #e6e6e6;
    height: 96px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    span {
      display: block;
      width: 150px;
      text-align: center;
      box-sizing: border-box;
      padding: 30px 10px 0;
      .ellipsis();
      &:nth-child(2) {
        color: #ff6b81;
      }
    }
    .lidiv {
      cursor: pointer;
      display: flex;
      box-sizing: border-box;
      padding-top: 30px;
      div {
        color: #747d8c;
        margin-right: 20px;
        &:first-child {
          margin-left: 33px;
        }
        &:hover {
          color: #00a0e9;
        }
        &:last-child {
          color: #ff6b81;
        }
      }
    }
  }
}
.add {
  position: absolute;
  color: #00a0e9;
  top: 0;
  right: 0;
}
</style>
