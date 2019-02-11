<template>
  <div class="dialog">
    <div class="area">
      <div class="area-title">
        切换城市
      </div>
      <no-ssr>
        <area-select id="specicalselect" v-model="selected" type="text" :data="pcaa" :level="2"></area-select>
      </no-ssr>
      <div class="button">
        <button @click.stop="commit">
          确定
        </button>
        <button @click.stop="changesho">
          取消
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { pcaa } from 'area-data'
export default {
  name: 'Dialog',
  data() {
    return {
      selected: [],
      pcaa: pcaa
    }
  },
  mounted() {
    this.initArea()
  },
  methods: {
    changesho() {
      this.$emit('changeQQQ', false)
    },
    commit() {
      const selectedcity = this.selected[2]
      sessionStorage.setItem('LOCATION', selectedcity)
      this.$emit('sendXian', selectedcity)
    },
    initArea() {
      if (process.client) {
        require('vue-area-linkage')
      }
    }
  }
}
</script>
<style lang='less'>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 999;
  .area {
    position: absolute;
    top: 177px;
    left: 50%;
    transform: translateX(-50%);
    width: 575px;
    height: 265px;
    background: #fff;
    border-radius: 6px;
    .area-title {
      width: 575px;
      height: 47px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px 6px 0px 0px;
      color: #2f3542;
      text-align: center;
      line-height: 47px;
    }
    .area-select-wrap {
      margin: 40px 10px 50px;
      .area-selectable-list-wrap {
        margin-top: 0px;
      }
    }
    .button {
      text-align: center;
      button {
        width: 128px;
        height: 40px;
        background: #f1f2f6;
        border-radius: 8px;
        color: #747d8c;
        line-height: 40px;
        text-align: center;
        border: none;
        margin-right: 43px;
        cursor: pointer;
        &:hover {
          background-color: #00a0e9;
          color: #fff;
        }
      }
    }
  }
  #specicalselect {
    .area-select {
      .area-selected-trigger {
        padding: 0px 3px 19px 51px;
        line-height: 30px;
      }
    }
  }
}
</style>
