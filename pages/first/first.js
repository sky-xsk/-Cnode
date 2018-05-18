//index.js
//获取应用实例

const app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  onLoad: function (option) {
   
  },
  btns: function(){
    wx.switchTab({
      url: '../index/index',
    })
  },

})
