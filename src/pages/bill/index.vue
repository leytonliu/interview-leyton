<template>
  <Page>
    <!-- <Navbar
      :showTitle="showNavbarTitle"
      showBackground
      left-arrow
      text-color="#fff"
      background="linear-gradient(to bottom, #ff6034, #ee0a24)"
      title="图表"
    /> -->
    <Navbar
      :showTitle="showNavbarTitle"
      :showBackground="showNavbarTitle"
      left-arrow
      title="账单"
      @click-left="back()"
    >
    </Navbar>

    <Content>
      <view class="list">
        <view
          v-for="item in 300"
          :key="item"
          :class="`item-${item}`"
          style="height: 100px; border: 1px solid #eee"
        >
          盒子 {{ item }}</view
        >
      </view>
    </Content>
  </Page>
</template>

<script lang="ts" setup>
import { debounce, throttle } from '@/utils/common';
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
import { onPageScroll, onReady, onUnload } from '@dcloudio/uni-app';
import { getCurrentInstance, ref } from 'vue';
useCustomTabBar();

const showNavbarTitle = ref(false);
let observer = null;
onReady(() => {
  const _this = getCurrentInstance();
  observer = uni.createIntersectionObserver(_this);

  observer.relativeToViewport({ top: 0 }).observe('.item-1', (res) => {
    if (res.intersectionRatio > 0 && showNavbarTitle.value) {
      showNavbarTitle.value = false;
    } else if (res.intersectionRatio === 0 && !showNavbarTitle.value) {
      showNavbarTitle.value = true;
    }
    console.log(res);
  });
});

const back = () => {
  console.log('back');
};
onUnload(() => {
  console.log('observer', observer);
  if (observer) {
    observer.disconnect();
  }
});
// onPageScroll(
//   // 方式1: scroll，缺点：惯性滚动期间不触发
//   throttle(({ scrollTop }) => {
//     console.log(scrollTop);
//     if (scrollTop > 50 && !showNavbarTitle.value) {
//       showNavbarTitle.value = true;
//     } else if (scrollTop < 50 && showNavbarTitle.value) {
//       showNavbarTitle.value = false;
//     }
//   }, 50),
// );
</script>

<style lang="scss" scoped></style>
