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
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: url,
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.data.topicsArrs = [];
        var arrs = res.data.data;
        if (res.statusCode == 200){
          _this.setData({ topicsArrs: arrs });
        };
        wx.hideLoading();
      },
      fail:function(res){
        wx.showLoading({
          title: '数据加载失败！',
        })
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
  //下拉刷新
  onPullDownRefresh : function(){
    var url = "https://cnodejs.org/api/v1/topics";
    this.getTopics(url);
  },
})
