<!--  -->
<template>
  <div>
    <div class="tuanduibo">
      <el-form :label-position="labelPosition" :model="form" label-width="80px">
        <el-form-item label="团队名称">
          <div class="input">
            {{ teamedit.team_name }}
          </div>
        </el-form-item>
        <el-form-item label="团队图片">
          <div class="inputimg">
            <img :src="teamedit.image" alt="">
          </div>
        </el-form-item>
        <el-form-item label="团队简介">
          <div class="inputtext">
            {{ teamedit.content }}
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Myteam',
  meta: {
    title: '团队简介'
  },
  data() {
    return {
      memid: 0,
      id: 0,
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
      total: 0
    }
  },
  computed: {
    ...mapGetters(['teamedit', 'teampro'])
  },
  mounted() {
    this.$nextTick(() => {
      this.dismyteamedit()
      this.memid = this.$route.params.teamid
      this.id = this.$route.params.id
    })
  },
  methods: {
    async dismyteamedit() {
      await this.$store.dispatch('dismyteamedit', {
        id: this.$route.params.teamid
      })
      // this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.dismyteamedit()
    }
  }
}
</script>
<style lang='less' scoped>
.tuanduibo {
  box-sizing: border-box;
  padding: 20px 20px;
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
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
