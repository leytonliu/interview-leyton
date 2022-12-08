<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import systemInfoManager from './utils/systemInfoManager';
import updateManager from './utils/updateManager';

onLaunch(async () => {
  console.log('App Launch');

  if (await systemInfoManager.retrieveSystemInfo()) {
    console.log('已取到了系统信息');
    // const statusBarHeight = systemInfoManager.getStatusBarHeight();
    // const systemInfo = systemInfoManager.getSystemInfo();
    //   console.log({ systemInfo, statusBarHeight });
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
<style></style>
