<template>
  <view class="page" :style="themeStyle">
    <!-- Page -->
    <slot />
  </view>
</template>

<script setup>
import { computed } from 'vue';
import { mapThemeVarsToCSSVars } from '../../utils/theme';
import { useSystemInfoStore } from '@/stores/systemInfo';

const darkThemeVars = {
  backgroundColor: '#12141D',
  navbarBackground: '#000',
  textColor: '#fff',
};

const systemInfoStore = useSystemInfoStore();

const themeStyle = computed(
  () => systemInfoStore.systemInfo.theme === 'dark' && mapThemeVarsToCSSVars(darkThemeVars),
);
</script>

<style lang="scss" scoped>
@import '@/static/css/var.module.scss';
.page {
  background: $background;
  min-height: 100%;
}
</style>
