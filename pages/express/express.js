// pages/express/express.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    hide: false,
    inputvalue: '',
    result: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindKeyInput: function(e){
    this.setData({
      inputvalue: e.detail.value
    })
    //console.log(this.data.inputvalue)
  },

  onFocus: function () {

    this.setData({focus:true})
  },

  expressIfno: function(){
    var _this = this
    this.setData({focus: false})
    // console.log(this.data.inputvalue)
    wx.request({
      url: 'https://apis.juhe.cn/ip/ip2addr', //查看ip地址
      method: 'GET',
      data: {
        ip: this.data.inputvalue,
        dtype: 'json',
        key: '6eb8bb017c613617de96dd109db6ee38'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({ focus: true })
        _this.setData({
          result: res.data.result,
          hide: true
        })
        // console.log(res.data.result)
      }
    })
  }
})