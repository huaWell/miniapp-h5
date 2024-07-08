export default localId => {
  return new Promise((resolve, reject) => {
    wx.uploadImage({
      localId,
      isShowProgressTips: 0,
      success: function(res) {
        resolve(res.serverId)
      },
      fail(err) {
        reject(err)
      }
    });
  })
}
