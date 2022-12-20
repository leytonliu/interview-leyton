<template>
  <view class="page" :style="theme">
    <!-- Page -->
    <slot />
  </view>
</template>

<script setup>
import { ref } from 'vue';
const light = {
  '--purple': 'red',
  '--red': 'yellow',
};
Object.entries(light).forEach((ele, index) => {
  `${ele[0]}:${ele[1]}`;
});
// console.log(JSON.stringify(light));
const theme = ref(``);
</script>

<style lang="scss" scoped>
@import '@/static/css/var.module.scss';
.page {
  background: $background;
  min-height: 100%;
}
</style>
