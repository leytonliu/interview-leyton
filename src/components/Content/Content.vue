<template>
  <view class="page__content">
    <!-- Content -->
    <slot />
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../../static/css/var.scss';

.page__content {
  background: $background;
  /* #ifdef MP-WEIXIN || APP-PLUS */
  padding-bottom: calc(48px + env(safe-area-inset-bottom));
  /* #endif */
}
</style>
