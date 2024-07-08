/*
给定一个值, 尝试对其进行 JSON.parse
如果给的是一个非法值, 也会有一层保护, 
*/
export default (v, defaultV={}) => {
  let t = defaultV
  try {
    t = JSON.parse(v) || defaultV
  } catch (err) {
    t = defaultV
  }
  return t;
}
