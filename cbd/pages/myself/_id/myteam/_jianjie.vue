<!--  -->
<template>
  <div>
    <div class="toptabs">
      <ul>
        <nuxt-link v-for="(item,index) of toplist" :key="index" tag="li" :to="`/myself/${id}/myteam/${memid}${item.url}`">
          {{ item.name }}
        </nuxt-link>
        <!-- <div class="pub">
          {{ pub }}
        </div> -->
      </ul>
    </div>
    <div class="tuanduibo">
      <el-form :label-position="labelPosition" :model="form" label-width="80px">
        <el-form-item label="团队名称">
          <div class="input">
            <el-input v-model="form.input"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="团队图片">
          <div class="inputimg">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="团队简介">
          <div class="inputtext">
            <el-input v-model="form.textarea" :autosize="{ minRows: 8, maxRows: 10}" type="textarea"></el-input>
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
      total: 0,
      toplist: [
        { name: '团队简介', url: '/jianjie', par: 'myteam' },
        { name: '团队成员', url: '/member', par: 'myteam' },
        { name: '申请加入人员', url: '/shenqing', par: 'myteam' }
      ]
    }
  },
  computed: {
    ...mapGetters(['teamedit', 'teampro'])
  },
  mounted() {
    this.$nextTick(() => {
      this.dismyteamedit()
      this.memid = this.$route.params.jianjie
      this.id = this.$route.params.id
    })
  },
  methods: {
    async dismyteamedit() {
      await this.$store.dispatch('dismyteamedit', {
        id: this.$route.params.jianjie
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
.toptabs {
  width: 950px;
  height: 62px;
  border-bottom: 2px solid #f1f2f6;
  background-color: #fff;
  ul {
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    position: relative;
    li {
      width: 130px;
      line-height: 62px;
      box-sizing: border-box;
      padding: 0 14px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #00a0e9;
        border-bottom: 1px solid #00a0e9;
      }
    }
    .pub {
      color: #00a0e9;
      position: absolute;
      top: 20px;
      right: 30px;
    }
  }
  .active-link {
    background-color: rgba(0, 160, 233, 1);
    color: #fff;
    &:hover {
      background-color: rgba(0, 160, 233, 1);
    }
  }
}
</style>
