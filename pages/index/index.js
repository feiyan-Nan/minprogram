//index.js
//获取应用实例
const app = getApp()
const WXAPI = require('../../wxapi/main')
Page({
  data: {
    region: ['北京市', '北京市', '东城区'],
    now: ''
  },
  getMyInfo: function (e) {
    console.log(e.detail.userInfo)
    let info = e.detail.userInfo;
    this.setData({
      name: info.nickName,
      src: info.avatarUrl
    })
  },
  changeRegion: function (e) {
    this.setData({
      region: e.detail.value
    })
    this.getWeather();
  },
  getWeather() {
    console.log(this.data.region)
    console.log(this.data)
    // var that = this; //this不可以直接在wxAPI函数内部使用
    const params = {
      location: this.data.region[1],
      key: '913aa68b6d794573a53e5542e63d6de5'
    }
    WXAPI.getWeater(params).then(res => {
      this.setData({ now: res.HeWeather6[0].now })
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getWeather()
  }
})
