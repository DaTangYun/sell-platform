<!--  -->
<template>
  <div>
    <div class="submit-mb">
      当前位置：
      <ul>
        <li v-for="(item,index) in bands" :key="index">
          {{ item }}
          <span v-show="index !== bands.length-1">
            >
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Band',
  props: {
    bands: {
      type: Array,
      default() {
        return ['首页']
      }
    }
  }
}
</script>
<style lang='less' scoped>
.submit-mb {
  width: 1210px;
  margin-top: 20px;
  display: flex;
  font-size: 12px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(119, 128, 143, 1);
  ul {
    display: flex;
    li {
      cursor: not-allowed;
    }
  }
}
</style>
