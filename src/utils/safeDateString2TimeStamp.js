/*
iOS 情况下
不支持这种格式的日期 2022-01-01
new Date('2022-01-01') 会报错.
所以我们需要额外的进行一些处理
*/
export default dateString => {
  if (!dateString) {
    // throw new Error('dateString 传递进来的是空值')
    return  ''
  }
  let ts = +new Date(dateString);
  if (Number.isNaN(ts)) {
    let t = dateString.split(/[-\/]/)
    ts = +new Date(t[0] || '', t[1] || '', t[2] || '');
    if (Number.isNaN(ts)) {
      let t = dateString.slice(0, 4)
      ts = +new Date(t)
    }
  }
  if (Number.isNaN(ts)) {
    // throw new Error('dateString 传递进来的是个什么玩意')
    return ''
  }
  return ts;
}
