<template>
  <view class="narvbar__placeholder">
    <view class="navbar" :style="{ background: showBackground ? background : 'transparent' }">
      <view class="navbar__left">
        <slot name="left">
          <view @tap="onTapLeft">
            <Icon v-if="leftArrow" name="back-arrow" size="16px" weight="bold" />
            <text v-if="leftText" :style="{ color: textColor }" class="navbar__left-text">
              {{ leftText }}
            </text>
          </view>
        </slot>
      </view>

      <view class="navbar__content navbar__title" :style="{ color: textColor }">
        <slot name="default" v-if="showTitle">
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
  rightText: String,
  leftArrow: Boolean,
  leftText: String,
  placeholder: Boolean,
  showTitle: {
    type: Boolean,
    default: true,
  },
  showBackground: {
    type: Boolean,
    default: true,
  },
  background: {
    type: String,
    default: '#fff',
  },
  textColor: {
    type: String,
    default: '#323233',
  },
  customLeftTap: Boolean,
});

const emit = defineEmits(['tap-left']);

const onTapLeft = () => {
  if (props.customLeftTap) {
    emit('tap-left');
  } else {
    uni.navigateBack({
      delta: 1,
    });
  }
};

const systemInfoStore = useSystemInfoStore();
const { systemInfo } = systemInfoStore;

const statusBarHeight = computed(() => {
  return systemInfo.statusBarHeight ? `${systemInfo.statusBarHeight}px` : '0px';
});
</script>

<style lang="scss" scoped>
@import '../../static/css/var.module.scss';
.narvbar__placeholder {
  height: calc(v-bind(statusBarHeight) + $navbar-height);
  background: $background;
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
    padding: v-bind(statusBarHeight) $padding-md 0;
    font-size: $font-size-md;
  }

  &__left-text {
    margin-left: 5px;
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
