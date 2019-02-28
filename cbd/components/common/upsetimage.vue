<!--  -->
<template>
  <div>
    <div class="my-ploader1">
      <el-upload
        class="avatar-uploader my-uploader"
        :action="`${action}/api/common/upload`"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :on-change="handleonchange"
      >
        <img v-if="imageUrl.length" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <el-button size="small" type="info" plain>
          更换头像
        </el-button>
      </el-upload> 
    </div>
  </div>
</template>
<script>
import base from '@/api/base'
export default {
  name: 'Upsetimage',
  data() {
    return {
      imageUrl: '',
      action: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initAction()
    })
  },
  methods: {
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    handleonchange(file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.uploadimage(file)
    },
    async uploadimage(file) {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('uploadimages', {
        file
      })
      this.$nuxt.$loading.finish()
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    }
  }
}
</script>
<style lang='less'>
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
</style>
