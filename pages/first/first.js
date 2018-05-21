//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    values:'',
  },
  //事件处理函数
  onLoad: function (option) {

  },

  formSubmit: function(e){
    var accessTokens = app.globalData.accessToken;
    if (e.detail.value.input==''){
      wx.showToast({
        title: '验证失败',
        icon: 'loading',
        duration: 2000
      })
    } else if (e.detail.value.input == accessTokens){
      wx.showToast({
        title: '用户验证中...',
        icon: 'loading',
        duration: 2000
      })
      setTimeout(()=>{
        wx.switchTab({
          url: '../index/index',
        })
      },2000)
    }else{
      wx.showToast({
        title: '登录失败',
        icon: 'none',
        duration: 2000
      })
    }
  },
  //一键复制
  oneCopy(){
    wx.setClipboardData({
      data: 'd2b42e8f-0207-4bd5-a3f1-fa8d1c37e4d6',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
    })
  }
  

})
