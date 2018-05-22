//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    
  },
  //事件处理函数
  onLoad: function () {
   
  },
  
  formSubmit: function (e) {
    var titles = e.detail.value.input;
    var conts = e.detail.value.inputs;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics', 
      method: "POST",
      data: {
        accesstoken: "d2b42e8f-0207-4bd5-a3f1-fa8d1c37e4d6",
        title: titles,
        tab: "dev", 
        content: conts
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        console.log(res.data)
      }
    }) 
  },
})
