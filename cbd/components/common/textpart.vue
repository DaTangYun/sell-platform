<!--  -->
<template xmlns:v-quill="富文本编辑器">
  <div class="container">
    <div
      v-quill:myQuillEditor="editorOption"
      class="quill-editor"
      :content="content"
      :showcontent="showcontent"
      @change="onEditorChange($event)"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"   
    >
    </div>
  </div>
</template>
<script>
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
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            ['image'] // 链接、图片、视频
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
    onEditorBlur(editor) {
      // 失去焦点事件
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // 获得焦点事件
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      // 内容改变事件
      // console.log(text)
      this.content = html.trim()
      this.$emit('handletext', text)
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
