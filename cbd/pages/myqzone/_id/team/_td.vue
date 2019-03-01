<!--  -->
<template>
  <div class="teamdetail">
    <h4>
      团队详情
    </h4>
    <nuxt-link class="back" tag="div" :to="{name:'myqzone-id-team',params: {id: backid}}">
      <img src="@/assets/images/back.png" alt="">
    </nuxt-link>
    <div class="team-form">
      <el-form label-width="80px">
        <el-form-item label="团队名称">
          {{ myteamdetail.detail.team_name }}
        </el-form-item>
        <el-form-item label="团队图片">
          <div class="teamimg">
            <img :src="myteamdetail.detail.image" alt="">
          </div>
        </el-form-item>
        <el-form-item label="团队简介">
          <p>
            {{ myteamdetail.detail.content }}
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
      backid: 0
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
      this.backid = this.$route.params.td
      console.log(this.myteamdetail)
      await this.$store.dispatch('dismyteamdetail', {
        id: this.$route.params.td
      })
    },
    back() {
      this.$route.push('/')
    }
  }
}
</script>
<style lang='less' scoped>
.teamdetail {
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
</style>
