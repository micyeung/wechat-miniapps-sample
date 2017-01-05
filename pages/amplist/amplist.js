// pages/amplist/amplist.js
Page({
  data:{  
    articles:[],
  },
  articleTap: function(event) {
    console.log(event.currentTarget.dataset.articleurl);
  },
  previewImg: function(event) {
    console.log(event.currentTarget.dataset.imageurl)
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [event.currentTarget.dataset.imageurl],
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      articles: getApp().globalData.articles
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
