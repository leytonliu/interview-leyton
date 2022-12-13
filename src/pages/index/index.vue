<template>
  <Page>
    <Navbar> 首页 </Navbar>
    <Content>
      <view v-for="(item, index) in 200" :key="index">
        {{ index + 1 }}
      </view>
      <button @tap="onTap">switchTab</button>
    </Content>
  </Page>
</template>

<script lang="ts" setup>
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
useCustomTabBar();

const onTap = () => {
  console.log('tap');
  uni.switchTab({
    url: '/pages/bill/index',
    fail: (e) => {
      console.log(e);
    },
  });
};
</script>

<style lang="scss" scoped></style>
