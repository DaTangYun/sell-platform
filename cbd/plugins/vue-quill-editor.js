import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor/dist/ssr'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import * as Quill from 'quill'
if (process.client) {
  require('vue-quill-editor')
}
Vue.use(VueQuillEditor)
