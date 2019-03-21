<!--  -->
<template>
  <div>
    <div class="setting-top">
      <h4>基本资料</h4>
    </div>
    <div class="setting-bo">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item v-model="image" class="specicalimage">
          <el-upload
            class="avatar-uploader my-uploader"
            :action="`${action}/api/common/upload`"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <el-button size="small" type="info" plain>
              更换头像
            </el-button>
          </el-upload> 
        </el-form-item>
        <el-form-item label="用户昵称">
          <div class="nich">
            <el-input v-model="formLabelAlign.name" :placeholder="'请输入用户名'"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="个人签名">
          <div class="nich">
            <el-input v-model="formLabelAlign.qianming" type="textarea" :rows="7" :placeholder="'签名'"></el-input>
          </div>
        </el-form-item>
      </el-form>
      <div class="button" @click="changeuserinfo">
        保存
      </div> 
    </div>
  </div>
</template>
<script>
import base from '@/api/base'
import { mapGetters } from 'vuex'
export default {
  name: 'Setting',
  data() {
    return {
      formLabelAlign: {
        name: '',
        qianming: ''
      },
      image: '',
      action: '',
      imageUrl: '',
      user: {}
    }
  },
  computed: {
    ...mapGetters(['userinfo'])
  },
  mounted() {
    this.$nextTick(() => {
      this.getuser()
      this.initAction()
    })
  },
  methods: {
    async getuser() {
      const info = await this.$store.dispatch('userinfo')
      this.user = info.info
      this.formLabelAlign.name = info.info.nickname
      this.formLabelAlign.qianming = info.info.bio
      this.imageUrl = info.info.avatar
      this.image = info.info.avatar
    },
    async changeuserinfo() {
      if (this.formLabelAlign.name === '') {
        this.$message({
          type: 'warning',
          message: '请填写用户昵称'
        })
        return
      }
      if (this.formLabelAlign.qianming === '') {
        this.$message({
          type: 'warning',
          message: '请填写用户签名'
        })
        return
      }
      const info = await this.$store.dispatch('changeuserinfo', {
        avatar: this.image,
        nickname: this.formLabelAlign.name,
        bio: this.formLabelAlign.qianming
      })
      if (info.code === 1) {
        this.$message.success(info.msg)
      } else {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      }
    },
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.image = file.response.data.url
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    }
  }
}
</script>
<style lang='less' scoped>
.button {
  width: 376px;
  height: 47px;
  background: rgba(0, 160, 233, 1);
  border-radius: 6px;
  margin-left: 80px;
  text-align: center;
  line-height: 47px;
  color: #fff;
  cursor: pointer;
}
.nich {
  width: 376px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  width: 160px;
  height: 160px;
  background-color: #b3b3b3;
  box-sizing: border-box;
  margin: 24px 28px 24px 0;
  .avatar-uploader .el-upload {
    background-color: #f1f2f6;
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
  .el-icon-plus:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.specicalimage {
  width: 200px;
}
</style>
