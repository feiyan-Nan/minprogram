const CONFIG = require('../config.js')

const request = (url, method, data) => {
  let _url = CONFIG.API_BASE_URL + url
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/json' // 微信小程序默认
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

module.exports = {
  request,
  getWeater (data) {
    return request('/s6/weather/now', 'get', data)
  }
}

