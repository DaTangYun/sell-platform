<template>
  <div class="submitMessage">
    <div class="w">
      <div class="submit-button">
        <div class="submit-anniu">
          <nuxt-link to="/messageComp" class="submit-head">
            发布头条
          </nuxt-link>
          <nuxt-link to="" class="submit-message">
            发布信息
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default'
}
</script>

<style lang='less' scoped>
.submitMessage {
  .submit-button {
    width: 100%;
    height: 537px;
    position: relative;
    .submit-anniu {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      .submit-head,
      .submit-message {
        display: block;
        width: 250px;
        height: 85px;
        background: rgba(9, 161, 231, 1);
        border-radius: 8px;
        line-height: 85px;
        color: #fefefe;
        text-align: center;
        font-size: 20px;
      }
      .submit-message {
        background: rgba(195, 15, 35, 1);
        margin-left: 87px;
      }
    }
  }
}
</style>
