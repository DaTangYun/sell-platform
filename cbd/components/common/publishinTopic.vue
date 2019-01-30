<!--  -->
<template>
  <div class="publishTopic">
    <button>{{ publish }}</button>
  </div>
</template>

<script>
export default {
  name: 'PublishinTopic',
  props: {
    publish: {
      type: String,
      default: '发表需求'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.publishTopic {
  width: 248px;
  height: 98px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  text-align: center;
  line-height: 98px;
  margin-bottom: 14px;
  button {
    width: 216px;
    height: 66px;
    background: rgba(0, 160, 233, 1);
    border-radius: 6px;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
