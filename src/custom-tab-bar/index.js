// eslint-disable-next-line no-undef
Component({
  data: {
    selected: 0,
    color: '#444444',
    selectedColor: '#fca853',
    list: [
      {
        pagePath: '/pages/index/index',
        iconPath: '/static/images/tabbar/index-0.png',
        selectedIconPath: '/static/images/tabbar/index-1.png',
        text: '首页',
      },
      {
        pagePath: '/pages/category/index',
        iconPath: '/static/images/tabbar/classify-0.png',
        selectedIconPath: '/static/images/tabbar/classify-1.png',
        text: '分类',
      },
      {
        pagePath: '/pages/cart/index',
        iconPath: '/static/images/tabbar/favorite-0.png',
        selectedIconPath: '/static/images/tabbar/favorite-1.png',
        text: '购物车',
      },
      {
        pagePath: '/pages/user/index',
        iconPath: '/static/images/tabbar/user-0.png',
        selectedIconPath: '/static/images/tabbar/user-1.png',
        text: '个人中心',
      },
    ],
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({url});
      this.setData({
        selected: data.index,
      });
    },
  },
});
