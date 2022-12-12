<template>
  <Page>
    <Navbar> 个人中心 </Navbar>
    <Content>
      <view v-for="(item, index) in 200" :key="index"> Hello {{ index }} </view>
    </Content>
  </Page>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/counter';
const counter = useCounterStore();

const add = () => {
  counter.count++;
};
// counter.count++;
// // 可以手动触发
// counter.$patch({ count: counter.count + 1 });
// // 或者使用 actions
// counter.increment();
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
