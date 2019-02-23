<!--  -->
<template>
  <div class="case">
    <div class="send" @click="changeindex()">
      发布案例
    </div>
    <div v-if="noIndex===0">
      <mylist :demand="['标题','状态','操作']" :wid="'306'" :spans="['标题标题标题标题标题标题标题标题标题标题','待审核/已审核']" :wids="'306'" :caozuo="['详情','编辑','删除']"></mylist>
    </div>
    <div v-if="noIndex===1" class="mycase">
      <el-form :label-position="'left'" label-width="80px">
        <el-form-item label="所属地区">
          <no-ssr>
            <area-select id="specicalselect" v-model="selected" type="text" :data="pcaa" :level="2"></area-select>
          </no-ssr>
        </el-form-item>
        <el-form-item label="案例标题">
          <div class="input">
            <el-input></el-input>
          </div>
        </el-form-item>
        <el-form-item label="来源">
          <div class="input">
            <el-input></el-input>
          </div>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
          >
            <el-button size="small" type="primary">
              上传图片
            </el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容">
          <div class="inputtext">
            <el-input :autosize="{ minRows: 10, maxRows: 12}" type="textarea"></el-input>
          </div>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary">
          确定
        </el-button>
        <el-button type="info" @click="cancel">
          取消
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { pcaa } from 'area-data'
import mylist from 'components/myselfComponents/list'
export default {
  name: 'Mycase',
  components: {
    mylist
  },
  data() {
    return {
      cases: [0, 1, 2],
      noIndex: 0,
      selected: [],
      pcaa: pcaa
    }
  },
  methods: {
    changeindex() {
      this.noIndex = 1
    },
    cancel() {
      this.noIndex = 0
    }
  }
}
</script>
<style lang='less' scoped>
.case {
  .send {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 29px;
    color: #00a0e9;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 16px 16px 0;
    box-sizing: border-box;
    height: 950px;
    li {
      margin-right: 17px;
      height: 223px;
      &:last-child {
        margin-right: 0;
      }
      .img {
        width: 284px;
        height: 201px;
        background: rgba(179, 179, 179, 1);
        border-radius: 6px;
      }
    }
  }
  .mycase {
    box-sizing: border-box;
    padding: 50px 0 0 38px;
    .input {
      width: 347px;
    }
    span {
      padding: 0 25px;
      line-height: 30px;
      display: inline-block;
      height: 30px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px;
      margin-right: 10px;
    }
    .button {
      padding-left: 80px;
    }
    .inputtext {
      width: 730px;
      height: 301px;
    }
  }
}
</style>
