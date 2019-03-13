<!--  -->
<template>
  <div class="teamdetail">
    <h4>
      团队详情
    </h4>
    <span class="shenqing" @click="tan">
      申请加入团队
    </span>
    <nuxt-link class="back" tag="div" :to="{name:'myqzone-id-team',params: {id: backid}}">
      <img src="@/assets/images/back.png" alt="">
    </nuxt-link>
    <div class="team-form">
      <el-form label-width="80px">
        <el-form-item label="团队名称">
          {{ detail.team_name }}
        </el-form-item>
        <el-form-item label="团队图片">
          <div class="teamimg">
            <img :src="detail.image" alt="">
          </div>
        </el-form-item>
        <el-form-item label="团队简介">
          <p>
            {{ detail.content }}
          </p>
        </el-form-item>
      </el-form>
    </div>
    <div class="member">
      <span>
        团队成员
      </span>
    </div>
    <ul>
      <li v-for="(item,index) in myteamdetail.member" :key="index">
        <div class="li-top">
          <span>
            姓名：
          </span>
          <span>
            {{ item.name }}
          </span>
          <span>
            擅长领域：
          </span>
          <span>
            {{ item.excellence }}
          </span>
        </div>
        <div class="li-bottom">
          <span>
            简介：
          </span>
          <p>
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
    <div v-show="flag" class="tuandui">
      <div class="tuanc">
        <div class="tuantop">
          <h4>
            申请加入团队
          </h4>
          <div class="tuanimg" @click.stop="close">
            <img src="~assets/images/close.png" alt="">
          </div>
        </div>
        <el-form label-width="80px" class="tuanduiform">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="擅长">
            <el-input v-model="form.excellence" type="textarea"></el-input>
          </el-form-item>      
          <el-form-item label="描述">
            <el-input v-model="form.desc" type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <div class="button">
          <el-button type="primary" @click="submit">
            提交
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Myteamdetail',
  props: {
    detailid: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      help: [],
      teamlist: [],
      backid: 0,
      flag: false,
      form: {
        name: '',
        mobile: '',
        excellence: '',
        desc: ''
      },
      detail: []
    }
  },
  computed: {
    ...mapGetters(['myteamdetail', 'addnewteam'])
  },
  mounted() {
    this.$nextTick(() => {
      this.myteamdetai()
    })
  },
  methods: {
    async myteamdetai() {
      this.backid = this.$route.params.id
      const info = await this.$store.dispatch('dismyteamdetail', {
        id: this.$route.params.td
      })
      this.detail = info.detail
    },
    async addteam() {
      await this.$store.dispatch('addnewteam', {
        team_id: this.$route.params.td,
        name: this.form.name,
        mobile: this.form.mobile,
        excellence: this.form.excellence,
        desc: this.form.desc
      })
    },
    back() {
      this.$route.push('/')
    },
    close() {
      this.flag = !this.flag
    },
    tan() {
      this.flag = !this.flag
    },
    submit() {
      this.addteam()
      this.flag = !this.flag
    }
  }
}
</script>
<style lang='less' scoped>
.shenqing {
  position: absolute;
  top: 18px;
  right: 186px;
  color: #00a0e9;
  cursor: pointer;
}
.teamdetail {
  position: relative;
  // position: absolute;
  // top: 0;
  // left: 0;
  border-radius: 6px;
  width: 950px;
  min-height: 950px;
  background-color: #fff;
  .back {
    position: absolute;
    right: 100px;
    top: 10px;
    cursor: pointer;
  }
  h4 {
    line-height: 50px;
    padding-left: 30px;
    font-size: 20px;
  }
  .team-form {
    margin-bottom: 20px;
  }
  .teamimg {
    width: 284px;
    height: 201px;
    background: rgba(241, 242, 246, 1);
    border-radius: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .member {
    height: 40px;
    line-height: 40px;
    background: rgba(241, 242, 246, 1);
    margin-bottom: 10px;
    position: relative;
    width: 950px;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
    padding-left: 20px;
    span {
      position: absolute;
    }
  }
  ul {
    margin-top: 50px;
    li {
      border-bottom: 1px dashed #e1e2e6;
      box-sizing: border-box;
      padding-bottom: 10px;
      padding: 0 10px;
      span {
        display: inline-block;
        margin: 0 20px 20px 0;
      }
      p {
        display: inline-block;
      }
    }
  }
}
.tuandui {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 999;
  .tuanc {
    width: 806px;
    height: 741px;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 25px;
    .tuantop {
      height: 75px;
      border-bottom: 1px solid #e1e2e6;
    }
    .tuanimg {
      position: absolute;
      right: 30px;
      top: 25px;
    }
    .tuanduibo {
      box-sizing: border-box;
      padding-top: 20px;
      .inputtext {
        width: 580px;
        height: 218px;
      }
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
      .input {
        width: 284px;
      }
      .inputimg {
        width: 284px;
        height: 201px;
        border: 1px solid #e1e2e6;
      }
    }
    .button {
      width: 376px;
      height: 47px;
      margin-left: 85px;
      .el-button {
        width: 100%;
      }
    }
  }
}
.tuanduiform {
  width: 500px;
  margin-top: 20px;
  .img {
    width: 300px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
