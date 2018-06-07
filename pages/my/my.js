//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    counts:'',
    meeages:{},
  },
  //事件处理函数
  onLoad: function () {
    var url="https://cnodejs.org/api/v1/message/count";
    var urlMessage = "https://cnodejs.org/api/v1/messages";
    this.getmessageCount(url);
    this.getMessageList(urlMessage);
  },
  //获取信息列表
  getMessageList: function (urlMessage){
    var _this = this;
    wx.request({
      url: urlMessage,
      method: 'GET',
      data: {
        accesstoken: "d2b42e8f-0207-4bd5-a3f1-fa8d1c37e4d6",
        mdrender:false 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var arrs = res.data.data.has_read_messages.concat(res.data.data.hasnot_read_messages);
        _this.setData({
           meeages: arrs
        })
      },
      fail: function (res) {
        wx.showLoading({
          title: '数据加载失败！',
        })
      }
    })
  },

  //获取未读条数
  getmessageCount:function (url) {
    var _this = this;
    wx.request({
      url: url,
      method: 'GET',
      data: {
        accesstoken: "d2b42e8f-0207-4bd5-a3f1-fa8d1c37e4d6",
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
         _this.setData({
           counts: res.data.data
         })
      },
      fail: function (res) {
        wx.showLoading({
          title: '数据加载失败！',
        })
      }
    })
  },
 
})
