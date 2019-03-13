<!--  -->
<template>
  <div class="w">
    <div class="fuwu-top">
      <div class="fuwuimg">
        <img :src="details.image" alt="">
      </div>
      <div class="fuwutitle">
        <div class="fuwub">
          <h3>
            {{ details.title }}
          </h3>
          <span class="price">
            佣金范围：{{ details.commission }}
          </span>
        </div>
        <div class="center">
          分类：{{ details.cate_name }}
        </div>
        <div class="center">
          电话： {{ details.mobile }}
        </div>
        <div class="center">
          有效期：{{ details.start_time }} 至 {{ details.end_time }}
        </div>
      </div>
    </div>
    <div class="fuwu-bottom">
      <div class="fuwutab">
        <el-tabs v-model="activeName">
          <el-tab-pane label="服务介绍" name="first">
            {{ details.desc }}
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '帮帮我服务'
  },
  data() {
    return {
      activeName: 'first',
      login: true,
      reply: [0],
      details: []
    }
  },
  head() {
    return {
      title: this.helpmeDetailMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'helpmeDetailMetadesc',
          name: 'description',
          content: this.helpmeDetailMeta.seo_desc
        },
        {
          hid: 'helpmeDetailMetaKeyword',
          name: 'keyword',
          content: this.helpmeDetailMeta.seo_keyword
        },
        {
          hid: 'helpmeDetailMetaContent',
          name: 'content',
          content: this.helpmeDetailMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['helpdetail', 'helpmeDetailMeta'])
  },
  mounted() {
    this.$nextTick(() => {
      this.abdetails()
    })
  },
  methods: {
    async abdetails() {
      const info = await this.$store.dispatch('helpdetail', {
        id: this.$route.params.id
      })
      this.details = info.detail
    }
  }
}
</script>
<style lang='less' scoped>
.fuwu-top {
  height: 268px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  .fuwuimg {
    width: 284px;
    height: 201px;
    background-color: pink;
    border-radius: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .fuwutitle {
    margin-left: 23px;
    width: 919px;
    .fuwub {
      display: flex;
      background-color: #f1f2f6;
      margin-bottom: 40px;
      position: relative;
      h3 {
        line-height: 70px;
        height: 70px;
        padding-left: 16px;
        box-sizing: border-box;
        border-radius: 6px;
      }
      .price {
        color: #ff6348;
        font-size: 18px;
        line-height: 70px;
        height: 70px;
        position: absolute;
        right: 4px;
      }
    }
    .center {
      margin-bottom: 10px;
      font-size: 14px;
      color: #57606f;
      padding-left: 16px;
      box-sizing: border-box;
    }
    .resi {
      box-sizing: border-box;
      padding-left: 16px;
      font-size: 14px;
      color: #77808f;
      span {
        box-sizing: border-box;
        padding-right: 49px;
      }
    }
  }
}
.fuwu-bottom {
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 50px;
  padding: 24px;
  position: relative;
  button {
    width: 105px;
    height: 34px;
    background: rgba(9, 161, 231, 1);
    border-radius: 6px;
    margin: 24px 0;
    color: #fff;
    cursor: pointer;
  }
  .head {
    width: 50px;
    height: 50px;
    background-color: pink;
    margin-right: 30px;
  }
  .pj {
    margin-bottom: 50px;
    .pjli {
      width: 902px;
      border-bottom: 1px dashed #e6e6e6;
      box-sizing: border-box;
      padding-bottom: 24px;
      .pjtitle {
        margin-bottom: 14px;
        display: flex;
        h5 {
          padding-right: 68px;
        }
        span {
          font-size: 14px;
          color: #57606f;
        }
      }
      .pjcontent {
        font-size: 14px;
        color: #57606f;
      }
    }
  }
  .ask {
    margin-bottom: 24px;
    border-bottom: 1px dashed #e6e6e6;
    .askli {
      width: 902px;
      box-sizing: border-box;
      padding-bottom: 24px;
      display: flex;
      .asktitle {
        margin-bottom: 14px;
        display: flex;
        h5 {
          padding-right: 68px;
        }
        span {
          font-size: 14px;
          color: #57606f;
        }
      }
      .askcontent {
        font-size: 14px;
        color: #57606f;
      }
      .back {
        font-size: 14px;
        color: #9eaab8;
        margin-bottom: 24px;
        cursor: pointer;
      }
    }
  }
  .drop {
    width: 1158px;
    height: 132px;
    position: absolute;
    top: 1px;
    left: 1px;
    background-color: #fff;
    line-height: 136px;
    text-align: center;
    color: #747d8c;
    z-index: 999;
    opacity: 0.4;
  }
  .reply {
    box-sizing: border-box;
    background-color: #f1f2f6;
    margin-bottom: 24px;
    padding: 20px 0 0 20px;
    position: relative;
    li {
      padding-bottom: 24px;
      box-sizing: border-box;
      padding-left: 50px;
      .reply-title {
        color: #282d38;
        margin-bottom: 10px;
        span:last-child {
          font-size: 14px;
        }
      }
      .reply-content {
        font-size: 14px;
        color: #57606f;
      }
      img {
        position: absolute;
        background-color: pink;
        width: 50px;
        height: 50px;
        top: 24px;
        left: 10px;
      }
      span {
        font-size: 14px;
        color: #9eaab8;
        cursor: pointer;
      }
    }
  }
}
</style>
