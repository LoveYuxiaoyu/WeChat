// pages/movies/movies.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    moviesArr: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://movie.douban.com/j/search_subjects",
      data: {
        tag: "热门",
      },
      header: {
        "Content-Type": "json",
      },
      success: (res) => {
        this.setData({
          moviesArr: res.data.subjects,
        });
      },
    });
  },
});
