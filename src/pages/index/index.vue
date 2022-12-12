<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" @tap="handleClick" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      {{ counter.count }}
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '../../stores/counter';

const counter = useCounterStore();
const title = ref('Hello');
const handleClick = () => {
  const res = uni.getSystemInfoSync();
  console.log(res);
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
