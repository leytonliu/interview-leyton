<template>
  <view class="content__title__wrapper">
    <view class="content__title">
      <slot />
    </view>
  </view>
</template>

<script setup>
defineProps({});
</script>

<style lang="scss" scoped>
@import '../../static/css/var.scss';

.content__title__wrapper {
  background: #fff;
  padding: 10px;
  .content__title {
    color: #000;
    font-size: 32px;
    position: relative;
    font-weight: 500;
    padding: 10px;
    &::after {
      width: 40px;
      height: 4px;
      content: ' ';
      background: #ff6d66;
      position: absolute;
      bottom: 0;
      left: 10px;
      border-radius: 2px;
    }
  }
}
</style>
