<!--  -->
<template>
  <div class="teamdetail">
    <h4>
      团队详情
    </h4>
    <div class="back" @click="back">
      <img src="../../assets/images/back.png" alt="">
    </div>
    <div class="team-form">
      <el-form label-width="80px">
        <el-form-item label="团队名称">
          团队名称
        </el-form-item>
        <el-form-item label="团队图片">
          <div class="teamimg">
            <img src="" alt="">
          </div>
        </el-form-item>
        <el-form-item label="团队简介">
          <p>
            团队简介团队简介团队简介团队简介团队简介团队简介团队简介
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
      <li v-for="(item,index) in myteamdetail.team" :key="index">
        <div class="li-top">
          <span>
            姓名：
          </span>
          <span>
            XXXX
          </span>
          <span>
            擅长领域：
          </span>
          <span>
            XXXX
          </span>
        </div>
        <div class="li-bottom">
          <span>
            简介：
          </span>
          <p>
            简介简介简介简介简介简介简介简介简介简介简介
          </p>
        </div>
      </li>
    </ul>
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
      teamlist: []
    }
  },
  computed: {
    ...mapGetters(['myteamdetail'])
  },
  mounted() {
    this.$nextTick(() => {
      this.myteamdetai()
    })
  },
  methods: {
    async myteamdetai() {
      console.log(this.detailid)
      const info = await this.$store.dispatch('dismyteamdetail', {
        id: this.detailid
      })
      console.log(info)
    },
    back() {
      this.$emit('back')
    }
  }
}
</script>
<style lang='less' scoped>
.teamdetail {
  position: relative;
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
</style>
