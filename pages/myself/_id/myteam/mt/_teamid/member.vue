<!--  -->
<template>
  <div>
    <ul class="shenqingtop">
      <li v-for="(item1,index1) in shenqingtop" :key="index1">
        {{ item1 }}
      </li>
    </ul>
    <ul class="shenqingbo">
      <li v-for="(item,index2) in teamapply" :key="index2">
        <span>
          {{ item.name }}
        </span>
        <span>
          {{ item.excellence }}
        </span>
        <span>
          {{ item.mobile }}
        </span>
        <span>
          {{ item.createtime }}
        </span>
        <div class="mbutton">
          <div @click="tan(item.id)">
            详情
          </div>
          <div>
            删除
          </div>
        </div>
      </li>
    </ul>
    <div v-show="flag" class="tuandui">
      <div class="tuanc">
        <div class="tuantop">
          <h4>
            团队成员详情
          </h4>
          <div class="tuanimg" @click.stop="close">
            <img src="~assets/images/close.png" alt="">
          </div>
        </div>
        <el-form label-width="80px" class="tuanduiform">
          <el-form-item label="成员名称">
            {{ member.name }}
          </el-form-item>
          <el-form-item label="成员特长">
            {{ member.excellence }}
          </el-form-item>
          <el-form-item label="成员电话">
            {{ member.mobile }}
          </el-form-item>
          <el-form-item label="成员描述">
            {{ member.desc }}
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '团队成员'
  },
  data() {
    return {
      page: 1,
      limit: 6,
      total: 0,
      shenqingtop: ['姓名', '擅长服务类型', '电话', '申请时间', '操作'],
      form: {
        name: '',
        mobile: '',
        excellence: '',
        desc: ''
      },
      flag: false,
      member: {}
    }
  },
  computed: {
    ...mapGetters(['teamapply'])
  },
  mounted() {
    this.$nextTick(() => {
      this.fince()
    })
  },
  methods: {
    async fince() {
      const { page, limit } = this
      await this.$store.dispatch('dismyteamapply', {
        page,
        limit,
        id: this.$route.params.teamid
      })
    },
    tan(id) {
      this.flag = !this.flag
      this.teammerber(id)
    },
    async teammerber(id) {
      const ti = id
      const info = await this.$store.dispatch('cxmember', {
        id: ti
      })
      console.log(info)
      this.member = info.detail
    },
    close() {
      this.flag = !this.flag
    }
  }
}
</script>
<style lang='less' scoped>
.shenqingtop {
  background-color: #f1f2f6;
  display: flex;
  li {
    width: 153px;
    text-align: center;
    height: 56px;
    line-height: 56px;
  }
}
.shenqingbo {
  li {
    display: flex;
    height: 62px;
    border-bottom: 1px solid #e1e2e6;
    span {
      display: block;
      width: 153px;
      text-align: center;
      line-height: 62px;
    }
    .mbutton {
      display: flex;
      line-height: 56px;
      div {
        cursor: pointer;
        &:first-child {
          margin-left: 40px;
          margin-right: 10px;
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
