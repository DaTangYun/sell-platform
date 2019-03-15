import Vue from 'vue'
// 时间格式化
export function ellipsis(value) {
  if (!value) return ''
  if (value.length > 12) {
    return value.slice(0, 11) + '...'
  }
  return value
}
const filters = {
  ellipsis
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
export default filters
