//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    topicsArrs: [],
  },
  //事件处理函数
  onLoad: function () {
    var url = "https://cnodejs.org/api/v1/topics";
    this.getTopics(url);
  },

  getTopics: function (url) {
    var _this = this;
    wx.request({
      url: url,
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var arrs = res.data.data;
        if (res.statusCode == 200){
          _this.setData({ topicsArrs: arrs });
        };
      }
    })
  },
  //跳转 
  tabTitles:function(event){
    var Ids = event.currentTarget.dataset.iditem;
    wx.navigateTo({
      url: "details/details?id=" + Ids,
    })
  },


})
