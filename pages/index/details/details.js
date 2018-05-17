//index.js
//获取应用实例

const app = getApp()
var WxParse = require('../../../wxParse/wxParse.js');
Page({
  data: {
    itemDetails: {},
  },
  //事件处理函数
  onLoad: function (option) {
    var itemId = option.id;
    var urls = "https://cnodejs.org/api/v1/topic/" + itemId;
    this.getTopicdetails(urls);
  },

  getTopicdetails(urls) {
    var _this = this;
    wx.request({
      url: urls,
      data: {
        mdrender:false 
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var details = res.data.data;
        WxParse.wxParse('content', 'markdown', details.content, _this, 5);
        _this.setData({ itemDetails: details });
      }

    })
  },
 //查用户详情
  findUserDetails(event){
    var usernames = event.currentTarget.dataset.username;
    wx.navigateTo({
      url: "../userdetalis/userdetalis?user=" + usernames,
    })
  }
})
