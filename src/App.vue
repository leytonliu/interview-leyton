<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
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
</script>
<style lang="scss">
@import './static/fonts/fonts.scss';
@import './static/css/var.scss';
@import './static/css/overrides.scss';


</style>
