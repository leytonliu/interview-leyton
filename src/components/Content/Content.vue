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
  background: #eee;
}
</style>
