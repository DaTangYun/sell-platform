<!--  -->
<template>
  <div>
    <myteamdetail v-if="first.show"></myteamdetail>
    <div v-if="second.show" class="zeop" @click="childClick">
      <div class="secondpart-top">
        <div class="send" @click.stop="tan">
          组建团队
        </div>
        <h4>
          我的团队
        </h4>
      </div>
      <div class="demand-top">
        <span v-for="(item,index) in demand" :key="index">
          {{ item }}
        </span>
      </div>
      <ul class="demand-bottom">
        <li v-for="(item,index1) in teampro" :key="index1">
          <span>
            {{ item.team_name }}
          </span>
          <span>
            {{ item.apply_count }}
          </span>
          <span>
            {{ item.createtime }}
          </span>
          <div class="lidiv">
            <nuxt-link tag="div" :to="{name: 'myself-id-myteam-teamid-jianjie', params: {id: item.user_id,teamid: item.id}}">
              详情
            </nuxt-link>
            <div @click="tan">
              编辑
            </div>
            <div>
              删除
            </div>
          </div>
        </li>
      </ul>
      <div v-show="flag == true" class="tuandui">
        <div class="tuanc">
          <div class="tuantop">
            <h4>
              组建团队
            </h4>
            <div class="tuanimg" @click.stop="tan">
              <img src="~assets/images/close.png" alt="">
            </div>
          </div>

          <div class="button">
            <el-button type="primary" @click="remember">
              提交
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myteamdetail from 'components/myselfComponents/mytemdetail'
import { mapGetters } from 'vuex'
export default {
  name: 'Myteam',
  components: {
    myteamdetail
  },
  data() {
    return {
      demand: ['团队名称', '团队人数', '组建时间', '操作'],
      demands: [0],
      flag: false,
      imageUrl: '',
      labelPosition: 'left',
      first: {
        show: false
      },
      second: {
        show: true
      },
      form: {
        textarea: '',
        input: ''
      },
      page: 1,
      limit: 5
    }
  },
  computed: {
    ...mapGetters(['teampro'])
  },
  mounted() {
    this.$nextTick(() => {
      this.dismyteamp()
    })
  },
  created() {
    this.init()
  },
  methods: {
    async dismyteamp() {
      const { page, limit } = this
      const info = await this.$store.dispatch('dismyteampro', {
        page,
        limit
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.dismyteamp()
    },
    tan() {
      this.flag = !this.flag
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    remember() {},
    init() {
      this.first.show = false
      this.second.show = true
    },
    myteamevent() {
      this.first.show = true
      this.second.show = false
    },
    childClick() {
      this.$emit('childByValue', this.myteam)
    }
  }
}
</script>
<style lang='less' scoped>
.secondpart-top {
  position: relative;
  height: 73px;
  box-sizing: border-box;
  padding-left: 45px;
  padding-top: 10px;
  .send {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 29px;
    color: #00a0e9;
  }
}
.demand-top {
  background-color: #f1f2f6;
  color: #747d8c;
  height: 56px;
  line-height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 25px;
  span {
    width: 25%;
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
    padding: 0 25px;
    span {
      line-height: 96px;
      width: 25%;
      text-align: center;
    }
    .lidiv {
      cursor: pointer;
      display: flex;
      box-sizing: border-box;
      padding-top: 38px;
      margin-left: 40px;
      div {
        color: #747d8c;
        margin-right: 20px;
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
</style>
