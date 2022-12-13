
// eslint-disable-next-line no-undef
Component({
  data: {
    active:0,
    selected: 0,
    color: '#8d92a3',
    selectedColor: '#6b5ffd',
    list: [
      {
        url: '/pages/index/index',
        iconPath: '../static/images/home.png',
        selectedIconPath: '../static/images/home-active.png',
        text: '首页'
      },
      {
        url: '/pages/chart/index',
        iconPath: '../static/images/chart.png',
        selectedIconPath: '../static/images/chart-active.png',
        text: '图表'
      },
      {
        url: '/pages/add/index',
        iconPath: '../static/images/add.png',
        selectedIconPath: '../static/images/add-active.png',
        text: '添加'
      },
      {
        url: '/pages/bill/index',
        iconPath: '../static/images/book.png',
        selectedIconPath: '../static/images/book-active.png',
        text: '账单'
      },
      {
        url: '/pages/setting/index',
        iconPath: '../static/images/setting.png',
        selectedIconPath: '../static/images/setting-active.png',
        text: '设置'
      }
    ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      if(data.index ===this.data.active){
        return false;
      }
      wx.switchTab({ url });
      this.setData({
        active: data.index,
      });
      // wx.vibrateShort({
      //   type:'light'
      // });
    },
    init(index) {
      this.setData({
        active: index
      });
    },

  }
});
