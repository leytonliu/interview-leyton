<template>
  <view class="page__content">
    <!-- Content -->
    <view v-show="!loading">
      <slot />
    </view>
    <view v-if="loading" class="loading-wrapper">
      <!-- todo:页面loading -->
      加载中...
    </view>
  </view>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import '../../static/css/var.module.scss';

.page__content {
  height: 100%;
  // background: $background;
  /* #ifdef MP-WEIXIN || APP-PLUS */
  padding-bottom: calc(48px + env(safe-area-inset-bottom));
  /* #endif */

  .loading-wrapper {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-color;
    padding-top: 200rpx;
  }
}
</style>
