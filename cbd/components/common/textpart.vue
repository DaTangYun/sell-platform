<!--  -->
<template xmlns:v-quill="富文本编辑器">
  <div class="container">
    <div
      v-quill:myQuillEditor="editorOption"
      class="quill-editor"
      :content="content"
      :showcontent="showcontent"
      @change="onEditorChange($event)" 
    >
    </div>
  </div>
</template>
<script>
// import * as Quill from 'quill'
// const fonts = [
//   'SimSun',
//   'SimHei',
//   'Microsoft-YaHei',
//   'KaiTi',
//   'FangSong',
//   'Arial',
//   'Times-New-Roman',
//   'sans-serif'
// ]
// const Font = Quill.import('formats/font')
// Font.whitelist = fonts
// Quill.register(Font, true)
export default {
  name: 'Textpart',
  props: {
    showcontent: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      content: '',
      editorOption: {
        // some quill options
        placeholder: '请输入内容...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            ['image'], // 链接、图片、视频
            [{ color: [] }],
            // [{ font: fonts }],
            [{ size: ['small', false, 'large', 'huge'] }]
          ]
        }
      }
    }
  },
  mounted() {
    this.content = this.showcontent.trim()
    setTimeout(() => {
      this.content = this.showcontent.trim()
    }, 1000)
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html.trim()
      this.$emit('handletext', html)
    }
  }
}
</script>
<style lang='less' scoped>
.container {
  width: 100%;
  max-width: 700px;
  background-color: #fff;
  .quill-editor {
    min-height: 200px;
    // overflow-y: auto;
  }
}
</style>
