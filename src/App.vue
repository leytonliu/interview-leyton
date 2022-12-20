<script setup lang="ts">
import { onLaunch, onShow, onHide, onThemeChange, onReady } from '@dcloudio/uni-app';
import systemInfoManager from './utils/systemInfoManager';
import checkForUpdate from './utils/updateManager';

onLaunch(async () => {
  console.log('App Launch');
  // 检查更新
  checkForUpdate();

  if (await systemInfoManager.retrieveSystemInfo()) {
    console.log('已取到了系统信息');
  }

  // // # ifdef H5
  // document.body.style.setProperty(`--purple`, 'red');
  // // # endif
});

onReady(() => {
  const query = uni.createSelectorQuery();
});
onShow(() => {
  console.log('App Show');
});

onHide(() => {
  console.log('App Hide');
});

onThemeChange((options) => {
  console.log('theme change', options);
});
</script>

<style lang="scss">
@import './static/css';
</style>
