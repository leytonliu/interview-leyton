import promisify from './promisify';
class SystemInfoManager {
  getSystemInfo() {
    return uni.getSystemInfoSync();
  }

  /** 获取菜单按钮（右上角胶囊按钮）的布局位置信息。 */
  getMenuButtonRect() {
    return uni.getMenuButtonBoundingClientRect();
  }

  getPixelRatio() {
    return uni.getSystemInfoSync().pixelRatio;
  }

  /** 获取状态栏的高度，单位px */
  getStatusBarHeight() {
    return uni.getSystemInfoSync().statusBarHeight;
  }

  getWindowWidth() {
    return uni.getSystemInfoSync().windowWidth;
  }

  /** 优先使用异步接口，统一拉取所有系统信息 */
  async retrieveSystemInfo() {
    const res = uni.canIUse('getSystemInfo')
      ? await promisify(uni.getSystemInfo)()
      : await promisify(uni.getSystemInfoSync)();
    if (res) {
      // 这里不能直接改变uni.getSystemInfoSync
      // TypeError: Cannot assign to read only property
      // uni.getSystemInfoSync = ()=> res
      Object.defineProperty(uni, 'getSystemInfoSync', {
        value: () => res,
        writable: true,
        configurable: true,
      });
      return true;
    }
    return false;
  }
}

export default new SystemInfoManager();
