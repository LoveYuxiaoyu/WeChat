// index.js
Page({
  data: {
    userInfo: {},
    isHidden: false,
  },

  /**
   * 生命周期函数--页面加载完成以后调用
   */
  onLoad: function () {
    let { userInfo } = this.data;
    if (userInfo.nickName) {
      this.setData({
        userInfo,
        isHidden: true,
      });
    }
  },

  handleUserInfo() {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          isHidden: true,
        });
      },
      fail: (res) => {
        this.setData({
          isHidden: false,
        });
      },
    });
  },
});
