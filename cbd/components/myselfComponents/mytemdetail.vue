<!--  -->
<template>
  <div class="myteam">
    <el-tabs v-model="activeName">
      <el-tab-pane label="团队简介" name="first">
        <el-form label-width="80px">
          <el-form-item label="团队名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="团队图片"></el-form-item>
          <el-form-item label="团队简介">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="团队成员" name="second">
        <ul class="member">
          <li v-for="(item,index) in member" :key="index">
            {{ item }}
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="申请加入人员" name="third">
        <ul class="shenqingtop">
          <li v-for="(item1,index1) in shenqingtop" :key="index1">
            {{ item1 }}
          </li>
        </ul>
        <ul class="shenqingbo">
          <li v-for="(item,index2) in shenqingbo" :key="index2">
            <span>
              小小
            </span>
            <span>
              科研
            </span>
            <span>
              11111111111
            </span>
            <span>
              2018-022-26
            </span>
            <span>
              已通过
            </span>
            <div class="mbutton">
              <div>
                详情
              </div>
              <div>
                删除
              </div>
            </div>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Myteamdetail',
  data() {
    return {
      activeName: 'first',
      member: ['队员姓名', '队员姓名', '队员姓名', '队员姓名', '队员姓名'],
      shenqingtop: ['姓名', '擅长服务类型', '电话', '申请时间', '状态', '操作'],
      shenqingbo: [0, 1]
    }
  }
}
</script>
<style lang='less' scoped>
.myteam {
  box-sizing: border-box;
  padding: 16px;
}
.member {
  display: flex;
  li {
    width: 159px;
    text-align: center;
  }
}
.shenqingtop {
  background-color: #f1f2f6;
  display: flex;
  li {
    width: 181px;
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
</style>
