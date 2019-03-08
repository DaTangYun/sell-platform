<!--  -->
<template>
  <div>
    <ul class="activity-ul">
      <li v-for="(item,index) in activelist" :key="index" class="activity-li">
        <div class="activity-li-left">
          <div class="top">
            <h4>
              {{ item.title }}
            </h4>
            <span>
              {{ item.nickname }}
            </span>
            <span>
              {{ item.start_time }}
            </span>
          </div>
          <div class="bottom">
            {{ item.desc }}
          </div>
        </div>
        <div class="activity-li-right" :class="item.status === 1 ? 'nowpage' : 'oldpage'">
          <div class="right-content">
            <div class="right-content-left">
              <h5>
                {{ item.coupon_name }}
              </h5>
              <div>
                {{ item.end_time }}过期
              </div>
            </div>
          </div>
          <div class="right-content-right">
            <div class="calc">
              满{{ item.min_amount }}减{{ item.prefer_acount }}
            </div>
            <span v-if="item.status === 2 ? '已领取' : '领取'">
              领取
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Activity',
  props: {
    activelist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      selectItem: 0
    }
  },
  computed: {
    ...mapGetters(['activelist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.activelists()
    })
  },
  methods: {
    async activelists() {
      const { page, limit } = this
      const info = await this.$store.dispatch('activelist', {
        page,
        limit,
        title: '',
        userId: ''
      })
      this.disactive = this.activelist.active
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.activelists()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.activity-ul {
  box-sizing: border-box;
  padding: 0 24px 0;
  margin-bottom: 40px;
  .activity-li {
    display: flex;
    height: 126px;
    border-bottom: 1px dashed #e6e6e6;
    padding-top: 24px;
    box-sizing: border-box;
    .activity-li-left {
      width: 599px;
      .top {
        margin-bottom: 20px;
        h4 {
          display: inline-block;
          width: 327px;
        }
        span {
          font-size: 14px;
          color: #616975;
          &:last-child {
            margin-left: 115px;
          }
        }
      }
      .bottom {
        color: #616975;
      }
    }
    .activity-li-right {
      width: 249px;
      margin-left: 55px;
      background-size: 100% 100%;
      box-sizing: border-box;
      display: flex;
      padding-top: 12px;
      padding-left: 12px;
      cursor: pointer;
      .right-content {
        padding: 6px 0 0 6px;
        box-sizing: border-box;
        .right-content-left {
          h5 {
            color: #282d38;
            margin-bottom: 13px;
            width: 123px;
            .ellipsis();
          }
          div {
            color: #747d8c;
            font-size: 14px;
          }
        }
      }
      .right-content-right {
        width: 77px;
        height: 66px;
        margin-left: 30px;
        box-sizing: border-box;
        padding-right: 3px;
        div {
          color: #fff;
          font-size: 14px;
        }
        span {
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
}
.nowpage {
  background-image: url('~assets/images/juan2.png');
}
.oldpage {
  background-image: url('~assets/images/juan.png');
}
</style>
