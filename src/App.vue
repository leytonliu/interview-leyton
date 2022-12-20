<script setup lang="ts">
import { onLaunch, onShow, onHide, onThemeChange, onReady } from '@dcloudio/uni-app';
import { useSystemInfoStore } from './stores/systemInfo';
import checkForUpdate from './utils/updateManager';
const systemInfoStore = useSystemInfoStore();

onLaunch(async () => {
  console.log('App Launch');
  // 获取系统信息
  systemInfoStore.getSystemInfo();

  // #ifdef H5
  const mediaQueryList = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  // 判断是否匹配深色模式
  if (mediaQueryList && mediaQueryList.matches) {
    systemInfoStore.$patch({
      systemInfo: {
        theme: 'dark',
      },
    });
  } else {
    systemInfoStore.$patch({
      systemInfo: {
        theme: 'light',
      },
    });
  }

  // 监听主题切换事件
  mediaQueryList &&
    mediaQueryList.addEventListener('change', (e) => {
      console.log('=====>change mode:', e);
      if (e.matches) {
        console.log('=====>e.matches:dark');
        systemInfoStore.$patch({
          systemInfo: {
            theme: 'dark',
          },
        });
      } else {
        console.log('=====>e.matches:light');
        systemInfoStore.$patch({
          systemInfo: {
            theme: 'light',
          },
        });
      }
    });
  // #endif

  // 检查更新
  checkForUpdate();
});

onReady(() => {
  console.log('App onReady');
});
onShow(() => {
  console.log('App Show');
});

onHide(() => {
  console.log('App Hide');
});

onThemeChange((options) => {
  console.log('theme change', options);
  systemInfoStore.getSystemInfo();
});
</script>

<style lang="scss">
@import './static/css';
</style>
