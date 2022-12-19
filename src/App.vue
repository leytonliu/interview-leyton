<script setup lang="ts">
import { onLaunch, onShow, onHide, onThemeChange } from '@dcloudio/uni-app';
import systemInfoManager from './utils/systemInfoManager';
import checkForUpdate from './utils/updateManager';

onLaunch(async () => {
  console.log('App Launch');
  // 检查更新
  checkForUpdate();

  if (await systemInfoManager.retrieveSystemInfo()) {
    console.log('已取到了系统信息');
  }
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
@import './static/css/var.module.scss';
@import './static/css/overrides.scss';
@import './static/css/iconfont/iconfont.scss';
</style>
