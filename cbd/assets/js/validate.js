export const validatePhone = phone => {
  const reg = /^1[3456789]\d{9}/
  return reg.test(phone)
}
export const validateSpace = telephone => {
  return telephone.trim() === ''
}
