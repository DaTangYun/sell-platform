<!--  -->
<template>
  <div>
    <helpbox :wid="'950'" :head="'我的团队'">
      <div class="team">
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
          <li v-for="(item,index) in teamlist" :key="index">
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
    </helpbox>  
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
export default {
  name: 'Myteam',
  components: {
    helpbox
  },
  data() {
    return {
      teamlist: [0, 1, 2]
    }
  }
}
</script>
<style lang='less' scoped>
.team {
  position: relative;
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
