export const validatePhone = phone => {
  const reg = /^1[3456789]\d{9}/
  return reg.test(phone)
}
export const validateSpace = telephone => {
  return telephone.trim() === ''
}
/**
 * 表单验证工具类
 */
export default class Validate {
  /**
   * 判断输入值是否为空
   */
  static required(value) {
    if (typeof value === 'number') {
      value = value.toString()
    } else if (typeof value === 'boolean') {
      return !0
    }
    return value && value.length > 0
  }

  /**
   * 重复验证
   */
  static noDuplicate(values) {
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (values[i] === values[j] && i !== j) {
          return false
        }
      }
    }
    return true
  }
  /**
   * 验证日期格式
   */
  static date(value) {
    return !/Invalid|NaN/.test(new Date(value).toString())
  }
  /**
   * 验证内容是否相同
   */
  static equalTo(value, param) {
    return value === param
  }
}
