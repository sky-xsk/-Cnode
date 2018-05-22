//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    users: {},
  },
  //事件处理函数
  onLoad: function (option) {
    var username = option.user;
    var userDetailsUrl = "https://cnodejs.org/api/v1/user/" + username;
    this.getuserdetails(userDetailsUrl);
  },
  //获取用户详情
  getuserdetails(userDetailsUrl) {
    var _this = this;
    wx.request({
      url: userDetailsUrl,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          var userObj = res.data.data;
          _this.setData({
            users: userObj,
          })
        }
      }

    })
  },

  //参与主题
  lastTopic(event){
    var Ids = event.currentTarget.dataset.topicid;
    wx.navigateTo({
       url: "../details/details?id=" + Ids,
    })
  }

})
