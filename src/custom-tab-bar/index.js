// const app = getApp();
// eslint-disable-next-line no-undef
Component({
  data: {
    selected: null,
    color: '#8d92a3',
    selectedColor: '#6b5ffd',
    list: [
      {
        pagePath: '/pages/index/index',
        iconPath: '../static/images/home.png',
        selectedIconPath: '../static/images/home-active.png',
        text: '首页'
      },
      {
        pagePath: '/pages/chart/index',
        iconPath: '../static/images/chart.png',
        selectedIconPath: '../static/images/chart-active.png',
        text: '图表'
      },
      {
        pagePath: '/pages/add/index',
        iconPath: '../static/images/add.png',
        selectedIconPath: '../static/images/add-active.png',
        text: '添加'
      },
      {
        pagePath: '/pages/bill/index',
        iconPath: '../static/images/book.png',
        selectedIconPath: '../static/images/book-active.png',
        text: '账单'
      },
      {
        pagePath: '/pages/setting/index',
        iconPath: '../static/images/setting.png',
        selectedIconPath: '../static/images/setting-active.png',
        text: '设置'
      }
    ]
  },
  attached() {
    console.log('attached',this.data.selected);
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;

      if(data.index ===this.data.selected){
        return false;
      }
      wx.switchTab({url});
      this.setData({
        selected: data.index
      });
      // wx.vibrateShort({
      //   type:'light'
      // });
    },
  }
});
