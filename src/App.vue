<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import systemInfoManager from './utils/systemInfoManager';
import updateManager from './utils/updateManager';

onLaunch(async () => {
  console.log('App Launch');

  if (await systemInfoManager.retrieveSystemInfo()) {
    console.log('已取到了系统信息');
  }
});
onShow(() => {
  console.log('App Show');
  updateManager();
});
onHide(() => {
  console.log('App Hide');
});
</script>
<style lang="scss">
@import './static/fonts/fonts.scss';

page {
  font-family: 'Alimama ShuHeiTi';
}
/* 解决小程序和app滚动条的问题 */
/* #ifdef MP-WEIXIN || APP-PLUS */
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}
/* #endif */

/* 解决H5 的问题 */
/* #ifdef H5 */
uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
  /* 隐藏滚动条，但依旧具备可以滚动的功能 */
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}
/* #endif */
</style>
