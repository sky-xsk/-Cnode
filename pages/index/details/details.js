//index.js
//获取应用实例

const app = getApp()
var WxParse = require('../../../wxParse/wxParse.js');
Page({
  data: {
    itemDetails: {},
    itemId:'',
  },
  //事件处理函数
  onLoad: function (option) {
    var itemId = option.id;
    this.data.itemId = itemId;
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
  //新建评论
  replays(urls){
    var _this = this;
    wx.request({
      url: urls,
      data: {
        accesstoken: "d2b42e8f-0207-4bd5-a3f1-fa8d1c37e4d6",
        content:"着实的厉害" 
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '评论成功',
          icon: 'success',
          duration: 2000
        }) 
      }

    })
  },

  //评论
  relayTest(){
    var urlsRepay = "https://cnodejs.org/api/v1/topic/" + this.data.itemId + "/replies";
    this.replays(urlsRepay);
   
  },

 //查用户详情
  findUserDetails(event){
    var usernames = event.currentTarget.dataset.username;
    wx.navigateTo({
      url: "../userdetalis/userdetalis?user=" + usernames,
    })
  }
})
