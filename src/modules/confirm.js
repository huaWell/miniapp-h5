export default (options = {}) => {
    return new Promise((resolve, reject) => {
      wx.showModal({
        ...options,
        success(res) {
          if (res.confirm) {
            resolve()
          } else {
            reject();
          }
        },
        fail() {}
      })
    })
  }
  