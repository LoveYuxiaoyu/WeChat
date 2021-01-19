// pages/list/list.js
let datas = require("../../datas/list-data");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data,
    });
  },

  handleTap(e) {
    const {index} = e.currentTarget.dataset;
    wx.navigateTo({
      url: "/pages/detail/detail?index=" + index
    });
  },

  handleSwiperTap(e) {
    const {index} = e.target.dataset;
    wx.navigateTo({
      url: "/pages/detail/detail?index=" + index
    });
  }
});
