<template>
  <view class="narvbar__placeholder">
    <view class="navbar">
      <view class="navbar__left">
        <slot name="left" />
      </view>

      <view class="navbar__content navbar__title">
        <slot name="default">
          <text>{{ title }}</text>
        </slot>
      </view>

      <view class="navbar__right">
        <slot name="right" />
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
/**
 * @requirements
 * 1.刘海屏
 * 2.左、中、右插槽
 *
 */
import { computed } from 'vue';
import { useSystemInfoStore } from '../../stores/systemInfo';

const props = defineProps({
  title: String,
  fixed: Boolean,
  zIndex: [Number, String],
  border: {
    type: Boolean,
    default: true,
  },
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  placeholder: Boolean,
});

const systemInfoStore = useSystemInfoStore();
const { systemInfo } = systemInfoStore;

const statusBarHeight = computed(() => {
  return systemInfo.statusBarHeight ? `${systemInfo.statusBarHeight}px` : '0px';
});
</script>

<style lang="scss" scoped>
@import '../../static/css/var.scss';
.narvbar__placeholder {
  height: calc(v-bind(statusBarHeight) + $navbar-height);
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 1;
  line-height: 44rpx;
  text-align: center;
  background: $navbar-background;
  user-select: none;
  padding-top: v-bind(statusBarHeight);

  &__left,
  &__right {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 $padding-md;
    font-size: $font-size-md;
  }

  &__left {
    left: 0;
  }

  &__right {
    right: 0;
  }

  &__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: $font-size-md;
  }

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: $navbar-height;
  }
}
</style>
