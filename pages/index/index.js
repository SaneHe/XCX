//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Sane',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    deviceInfo: '',
    show: false,
    currentTime:''
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    wx.showLoading({
      title: '加载中',
      mask:true,
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    
    var _this = this 
    setInterval(function () {
      var timestamp = Date.parse(new Date())
      timestamp = timestamp / 1000
      //获取当前时间  
      var n = timestamp * 1000
      var date = new Date(n)
      var Y = date.getFullYear()
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var h = date.getHours()
      var m = date.getMinutes()
      var s = date.getSeconds()
      _this.setData({
        currentTime: Y + ' ' + M + ' ' + D + ' ' + h + ":" + m + ":" + s
      })
    }, 1000)

    if (!wx.getStorageSync('mobile') || wx.getStorageSync('mobile') == "" ) {
        wx.switchTab({
          url: '../user/user',
          success: function(){
            wx.showToast({
              title: '请先登录',
              icon: 'success',
              duration: 2000
            })
          }
        })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getDeviceInfo: function(){
    this.setData({
      show: !this.data.show
    })
    if (this.data.show ){
      try {
        var res = wx.getSystemInfoSync()
        this.setData({ deviceInfo: res })

      } catch (e) {
        console.log("获取设备信息失败")
      }
    }
  }
})
