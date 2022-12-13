import { onShow } from '@dcloudio/uni-app';
/**
 * 处理自定义TabBar重渲染
 */
const useCustomTabBar = () => {
  // #ifdef MP-WEIXIN
  onShow(() => {
    const currentPage: any = getCurrentPages().pop();

    if (typeof currentPage.getTabBar === 'function' && currentPage.getTabBar()) {
      currentPage.getTabBar().init();
    }
  });
  // #endif
};

export default useCustomTabBar;
