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
            ￥{{ details.price }}
          </span>
        </div>
        <div class="center">
          擅长服务行业：{{ details.cate_name }}
        </div>
        <div class="resi">
          <span>
            身份认证
          </span>
          <span>
            个人认证
          </span>
          <span>
            {{ details.mobile }}
          </span>
        </div>
      </div>
    </div>
    <div class="fuwu-bottom">
      <div class="fuwutab">
        <el-tabs v-model="activeName">
          <el-tab-pane label="服务介绍" name="first">
            {{ details.desc }}
          </el-tab-pane>
          <el-tab-pane label="用户评价" name="second">
            <el-input v-model="contentyh" type="textarea" resize="none" rows="6" placeholder="发表回复"></el-input>
            <button @click="fbcomment">
              发布
            </button>
            <ul class="pj">
              <li v-for="(item,index) in pl" :key="index" class="pjli">
                <div class="pjtitle">
                  <h5>
                    {{ item.nickname }}
                  </h5>
                  <span>
                    {{ item.createtime }}
                  </span>
                </div>
                <div class="pjcontent">
                  {{ item.content }}
                </div>
              </li>
            </ul>
            <pagination
              :total="total"
              :length="pl.length"
              :pagesize="limit"
              @currentchange="handlecurrentchange"
              @prev="handlecurrentchange"
              @next="handlecurrentchange"
            ></pagination>
          </el-tab-pane>
          <el-tab-pane label="你问我答" name="third">
            <el-input v-model="content" type="textarea" resize="none" rows="6" placeholder="发表回复"></el-input>
            <el-button type="primary" @click="sendnbhgcomment">
              发布
            </el-button>
            <ul class="ask">
              <li v-for="(item,index) of abilitymessage" :key="index" class="askli">
                <div class="bigli">
                  <div class="head">
                    <img :src="item.avatar" alt="">
                  </div>
                  <div class="huifu">
                    <div class="asktitle">
                      <h5>
                        {{ item.nickname }}
                      </h5>
                      <span>
                        {{ item.createtime }}
                      </span>
                    </div>
                    <div class="askcontent">
                      {{ item.content }}
                    </div>
                    <span class="back" @click="firstly(index)">
                      评论
                    </span>
                    <el-input v-show="activeindex === index" v-model="replymsg" type="textarea"></el-input>
                    <el-button v-show="activeindex === index" type="primary" small @click="sendfirst(index)">
                      确定
                    </el-button>
                  </div>
                </div>
                <ul class="reply">
                  <li v-for="(item1,index1) in item.reply" :key="index1">
                    <div class="reply-title">
                      <span>
                        {{ item1.from_user_id.nickname }}
                      </span>
                      <span>
                        回复  
                      </span>
                      <span>
                        {{ item1.to_user_id.nickname }}
                      </span>
                    </div>
                    <div class="reply-content">
                      {{ item1.reply_msg }}
                    </div>
                    <span @click="showteaxtarea === true">
                      评论
                    </span>
                    <el-input v-show="showteaxtarea" type="textarea" @onblur="handleblur"></el-input>
                    <img :src="item1.from_user_id.avatar" alt="">
                  </li>
                </ul>
              </li>
            </ul> 
            <pagination></pagination>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    pagination
  },
  meta: {
    title: '能帮会干服务详情'
  },
  middleware: 'auth',
  data() {
    return {
      activeName: 'first',
      login: true,
      reply: [0],
      details: [],
      pl: [],
      page: 1,
      limit: 5,
      total: 0,
      userid: false,
      content: '',
      contentyh: '',
      activeindex: -1,
      showteaxtarea: false,
      commentid: '',
      replymsg: '',
      touserid: 0
    }
  },
  computed: {
    ...mapGetters(['abilitydetail', 'abilitylists', 'abilitymessage'])
  },
  mounted() {
    this.$nextTick(() => {
      this.abdetails()
      this.pinglun()
      this.liuyanlist()
    })
    console.log(this.abilitymessage)
  },
  methods: {
    async abdetails() {
      const info = await this.$store.dispatch('details', {
        id: this.$route.params.id
      })
      this.details = info.detail
      console.log(this.details)
    },
    async pinglun() {
      const { page, limit } = this
      const info = await this.$store.dispatch('abilityls', {
        page,
        limit,
        ability_id: this.$route.params.id
      })
      this.total = info.total
      this.pl = info.comment
    },
    async addmember() {
      if (!this.contentyh) {
        this.$message.error('请填写内容')
      }
      const info = await this.$store.dispatch('addcom', {
        content: this.contentyh,
        ability_id: this.$route.params.id
      })
      if (info) {
        this.$message.success('评论成功')
        this.pinglun()
      } else {
        this.$message.error('评论频繁，请稍后')
      }
    },
    handlecurrentchange(params) {
      this.page = params
      this.pinglun()
    },
    fbcomment() {
      this.addmember()
    },
    // 留言列表
    async liuyanlist() {
      const { page, limit } = this
      const info = await this.$store.dispatch('abilitymessagelist', {
        page,
        limit,
        ability_id: this.$route.params.id
      })
      console.log(info.total)
    },
    firstly(index) {
      this.activeindex = index
    },
    handleblur() {
      this.showteaxtarea = false
    },
    sendnbhgcomment() {
      this.sendliuyan()
    },
    // 发布留言
    async sendliuyan() {
      if (!this.content) {
        this.$message.error('请填写内容')
      }
      const info = await this.$store.dispatch('addnewnbhg', {
        content: this.content,
        ability_id: this.$route.params.id
      })
      if (info) {
        this.$message.success('评论成功')
        this.pinglun()
      } else {
        this.$message.error('评论频繁，请稍后')
      }
    },
    sendfirst(index) {
      console.log(index)
      this.addnewreply(index)
      this.replymsg = ''
    },
    // 回复留言
    async addnewreply(index) {
      const userinfo = JSON.parse(localStorage.getItem('USERINFO'))
      this.commentid = userinfo.user_id
      this.touserid = index
      if (!this.replymsg) {
        this.$message.error('请填写内容')
      }
      const info = await this.$store.dispatch('replyadd', {
        comment_id: this.commentid,
        reply_msg: this.replymsg,
        to_user_id: this.touserid
      })
      console.log(info)
      if (info) {
        this.$message.success('评论成功')
        this.abdetails()
        this.pinglun()
        this.liuyanlist()
      } else {
        this.$message.error('评论频繁，请稍后')
      }
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
    width: 220px;
    height: 220px;
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
      h3 {
        line-height: 70px;
        height: 70px;
        padding-left: 16px;
        box-sizing: border-box;
        border-radius: 6px;
        width: 760px;
      }
      .price {
        color: #ff6348;
        font-size: 28px;
        line-height: 70px;
        height: 70px;
      }
    }
    .center {
      line-height: 66px;
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
  .huifu {
    width: 100%;
  }
  .head {
    width: 50px;
    height: 50px;
    background-color: pink;
    margin-right: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pj {
    margin-bottom: 50px;
    .pjli {
      width: 902px;
      border-bottom: 1px dashed #e6e6e6;
      box-sizing: border-box;
      padding-bottom: 24px;
      padding-top: 10px;
      box-sizing: border-box;
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
      width: 100%;
      box-sizing: border-box;
      padding-bottom: 24px;
      .bigli {
        display: flex;
      }
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
    margin-top: 10px;
    margin-left: 50px;
    li {
      position: relative;
      padding-bottom: 24px;
      box-sizing: border-box;
      padding-left: 50px;
      padding-top: 10px;
      padding-left: 80px;
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
