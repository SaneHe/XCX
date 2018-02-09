const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPage:true,
    mobile:'',
    password:'',
    verifycode:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userPage: app.globalData.bMobile
    })

    if( !this.data.userPage ){
      console.log('ok')
      if ( wx.hideTabBar ){
        wx.hideTabBar({
          aniamtion: true
        })
      }else{
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    }
    
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

  redirect: function(e){
    this.setData({
      mobile: e.detail.value.mobile,
      password: e.detail.value.password,
      verifycode: e.detail.value.verifycode
    })
    let regMobile = /^1\d{10}$/;
    app.globalData.bMobile = e.detail.value.mobile != '' ? true : false
    
    // var regMobile = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!regMobile.test(e.detail.value.mobile)) {
        wx.showToast({
          title: '请输入正确的手机号码！'
        })
        return false;
    } else if (e.detail.value.verifycode != 'snnv'){
        wx.showToast({
          title: '请输入正确的验证码！'
        })
        return false;
    }else{
      this.setData({
        userPage:false
      })
      
      wx.setStorageSync('mobile', e.detail.value.mobile)
        wx.switchTab({
          url: '../index/index'
        })
    }
  }
})