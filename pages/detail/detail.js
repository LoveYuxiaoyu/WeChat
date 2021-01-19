// pages/detail/detail.js
let datas = require("../../datas/list-data");
let app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    isCollected: false,
    isMusicPlay: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const index = options.index;
    let collectData = wx.getStorageSync("isCollected") || {};
    let isCollected = collectData[index] || false;
    this.setData({
      detailObj: datas.list_data[index],
      index,
      isCollected,
    });
  },

  handleCollect() {
    let { isCollected, index } = this.data;
    if (isCollected) {
      wx.showToast({
        title: "取消收藏",
        icon: "success",
      });
    } else {
      wx.showToast({
        title: "收藏成功",
        icon: "success",
      });
    }
    this.setData({
      isCollected: !isCollected,
    });
    let collectData = wx.getStorageSync("isCollected") || {};
    collectData[index] = !isCollected;
    wx.setStorageSync("isCollected", collectData);
  },

  handlePlayMusic() {
    const { isMusicPlay, detailObj, index } = this.data;
    let { dataUrl, title } = detailObj.music;
    this.setData({
      isMusicPlay: !isMusicPlay,
    });
    if (!isMusicPlay) {
      wx.playBackgroundAudio({
        dataUrl:
          "https://dl.stream.qqmusic.qq.com/M500001faIUs4M2zna.mp3?vkey=BBD62ECFAE5C72440292803FF0847CF78A59E26972B449F9FA02D8EBD1040F3DF1866411C9B7509CFA650C84A4ED47EBFDB2341D98F2C939&guid=4330162868&fromtag=64&uin=0",
        title,
      }),
        (app.data.isPlay = true);
      app.data.pageNum = index;
    } else {
      wx.pauseBackgroundAudio();
      app.data.isPlay = false;
    }
  },

  handleShare() {
    wx.showActionSheet({
      itemList: ["分享到朋友圈", "分享到QQ空间", "分享到微博"],
      fail(res) {
        console.log(res.errMsg);
      },
    });
  },
});
