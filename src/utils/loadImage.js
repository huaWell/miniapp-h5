let loadImage = url => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    /* 这一句, 在加载之后, 绘制到 canvas 里面是必须的 */
    img.crossOrigin = 'anonymous'
    /* 这一句, 在微信里面好像是必须的, 可他吗的 */
    img.src = `${url}?t=${+new Date()}`
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function(err) {
      console.log('image load error', err)
      reject(err)
    }
  })
}
export default loadImage