// 过滤器的使用，这里是所有的过滤方法。
// https://juejin.cn/post/6917170634225090568
import dayjs from 'dayjs'
// 格式化用户管理表格中的时间
export const dateFormat = (val) => {
  return dayjs(val).format('YYYY-MM-DD')
}
