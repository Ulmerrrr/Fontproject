// 这里进行token过期处理
// token过多久过期,1000毫秒
const TOKEN_TIME_VALUE = 2 * 60 * 60 * 1000
// 把登陆时的时间存在本地
export const setTokenTime = () => {
  localStorage.setItem('tokenTime', Date.now())
}
// 获取登陆时间
export const getTokenTime = () => {
  return localStorage.getItem('tokenTime')
}
// 检查token是否过期
export const checkToken = () => {
  const tokenTime = getTokenTime()
  const nowTime = Date.now()
  return nowTime - tokenTime > TOKEN_TIME_VALUE
}
