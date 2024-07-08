export default (count=1) => {
  console.log(count)
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: count,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        let localIds = res.localIds;
        resolve(localIds)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
