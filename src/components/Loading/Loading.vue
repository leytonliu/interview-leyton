<template>
  <view v-show="state.show">
    <!-- 遮罩 -->
    <view
      v-show="state.show"
      class="overlay"
      :style="{ backgroundColor: state.mask ? 'rgba(0, 0, 0, 0.7)' : 'transparent' }"
      @touchmove.stop.prevent="noop"
      @tap.stop.prevent="onOverlayTap"
    >
    </view>

    <view class="loading__wrapper">
      <view class="loading">
        <view class="loading__spinner loading__spinner--spinner">
          <view v-for="index in 12" :key="index" class="loading__dot" />
        </view>
        <view class="loading__text">{{ state.title }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

export type LoadingOptions = {
  show: boolean;
  title: string;
  mask: boolean;
  duration: number; // 持续时间
  zIndex: number;
};

const state = reactive({
  show: false, // 是否展示
  title: '加载中', // loading 文案
  mask: false, // 是否显示遮罩
  duration: 2000, // 持续时间  为0不自动关闭
});

const emit = defineEmits(['overlay-tap']);

const hideLoading = () => {
  state.show = false;
};
const showLoading = (options: LoadingOptions) => {
  console.log('options', options);
  Object.assign(state, options);
  state.show = true;
  if (state.duration) {
    setTimeout(() => {
      hideLoading();
    }, state.duration);
  }
};
// for prevent touchmove  模拟器无效果，真机可行
const noop = (e) => {
  e.preventDefault;
};
const onOverlayTap = () => {
  emit('overlay-tap');
};
defineExpose({
  showLoading,
  hideLoading,
});
</script>

<style lang="scss" scoped>
@import '../../static/css/var.module.scss';
.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 998;
}
.loading__wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  // hack for avoid max-width when use left & fixed
  width: fit-content;
  transform: translate(-50%, -50%);
  max-width: 160px;
  // width: 100%;
  z-index: 999;
}

.loading {
  min-height: 120px;
  min-width: 120px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
}
.loading__spinner {
  margin: 5px;
  animation: rotate 0.8s linear infinite;
  box-sizing: border-box;
  height: 30px;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  width: 30px;
}
.loading__spinner--spinner {
  animation-timing-function: steps(12);
}
.loading__spinner--circular {
  border: 1px solid transparent;
  border-radius: 100%;
  border-top-color: initial;
}
.loading__text {
  box-sizing: border-box;
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  word-wrap: break-word;
  word-break: normal;
  max-width: 160px;
  text-align: center;
}

.loading__dot {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.loading__dot:before {
  background-color: #fff;
  border-radius: 40%;
  content: ' ';
  display: block;
  height: 25%;
  margin: 0 auto;
  width: 2px;
}
.loading__dot:first-of-type {
  opacity: 1;
  transform: rotate(30deg);
}
.loading__dot:nth-of-type(2) {
  opacity: 0.9375;
  transform: rotate(60deg);
}
.loading__dot:nth-of-type(3) {
  opacity: 0.875;
  transform: rotate(90deg);
}
.loading__dot:nth-of-type(4) {
  opacity: 0.8125;
  transform: rotate(120deg);
}
.loading__dot:nth-of-type(5) {
  opacity: 0.75;
  transform: rotate(150deg);
}
.loading__dot:nth-of-type(6) {
  opacity: 0.6875;
  transform: rotate(180deg);
}
.loading__dot:nth-of-type(7) {
  opacity: 0.625;
  transform: rotate(210deg);
}
.loading__dot:nth-of-type(8) {
  opacity: 0.5625;
  transform: rotate(240deg);
}
.loading__dot:nth-of-type(9) {
  opacity: 0.5;
  transform: rotate(270deg);
}
.loading__dot:nth-of-type(10) {
  opacity: 0.4375;
  transform: rotate(300deg);
}
.loading__dot:nth-of-type(11) {
  opacity: 0.375;
  transform: rotate(330deg);
}
.loading__dot:nth-of-type(12) {
  opacity: 0.3125;
  transform: rotate(1turn);
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
