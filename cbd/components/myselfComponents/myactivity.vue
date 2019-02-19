<!--  -->
<template>
  <div class="myactivity">
    <el-tabs>
      <el-tab-pane label="我组织的活动">
        <mylist></mylist>
      </el-tab-pane>
      <el-tab-pane label="我参与的活动">
        <mylist :demand="['标题','优惠金额','使用期限','状态','操作']" :wid="'180'" :spans="['标题标题标题标题标题','满68-78','2018-06-27至2018-06-27','已使用']" :wids="'180'" :caozuo="['使用','删除']"></mylist>
      </el-tab-pane>
    </el-tabs>
    <div class="add" @click="addform">
      新增
    </div>
    <el-dialog title="新增活动" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <div class="title">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="优惠名称" :label-width="formLabelWidth">
          <div class="title">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="优惠金额" :label-width="formLabelWidth" class="actiprice">
          满
          <div class="man">
            <el-input v-model="form.price"></el-input>
          </div>
          减
          <div class="man">
            <el-input v-model="form.jprice"></el-input>
          </div>
          <div class="tips">
            注：满数额须大于减数额
          </div>
        </el-form-item>
        <el-form-item label="活动时间" :label-width="formLabelWidth">
          开始
          <div class="man">
            <el-input v-model="form.time"></el-input>
          </div>
          结束
          <div class="man">
            <el-input v-model="form.jtime"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.describe" autocomplete="off" type="textarea"></el-input>
        </el-form-item>        
      </el-form>
      <button type="primary" class="button" @click="dialogFormVisible = false">
        确 定
      </button>
    </el-dialog>
  </div>
</template>
<script>
import mylist from 'components/myselfComponents/list'
export default {
  name: 'Myactivity',
  components: {
    mylist
  },
  data() {
    return {
      demand: ['标题', '优惠金额', '使用期限', '领取次数', '使用次数', '操作'],
      demands: [0],
      dialogFormVisible: false,
      formLabelWidth: '80px',
      form: {
        name: '',
        title: '',
        price: '',
        jprice: '',
        time: '',
        jtime: '',
        describe: ''
      }
    }
  },
  methods: {
    addform() {
      this.dialogFormVisible = true
    }
  }
}
</script>
<style lang='less' scoped>
.myactivity {
  position: relative;
  .add {
    position: absolute;
    top: 0;
    right: 80px;
    color: #00a0e9;
    cursor: pointer;
  }
  .man {
    width: 104px;
    display: inline-block;
    margin-right: 10px;
  }
  .title {
    width: 147px;
  }
  .button {
    width: 376px;
    height: 47px;
    background-color: #00a0e9;
    color: #fff;
    text-align: center;
    line-height: 47px;
    border-radius: 6px;
    margin-left: 76px;
    cursor: pointer;
  }
  .actiprice {
    .tips {
      font-size: 14px;
      display: inline-block;
      color: #ff4757;
    }
  }
}
</style>
