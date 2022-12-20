<template>
  <Page>
    <Navbar :showTitle="showNavbarTitle"> My Wallet </Navbar>
    <Content :loading="rendering">
      <ContentTitle class="content-title">My Wallet</ContentTitle>
      <LSwiper @complete="onSwiperRenderComplete" />
      <Loading ref="loadingRef" />
      <LButton @tap="onTap1">loading1</LButton>
      <LButton @tap="onTap2">loading2</LButton>
      <LButton @tap="onTap3">hideLoading</LButton>
      <LButton @tap="onTap3">记一笔</LButton>
      <LImage
        src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1671469905067-9b15f9335d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
        width="200px"
        height="300px"
      />
      <view class="list">
        <view
          v-for="item in 300"
          :key="item"
          :class="`item-${item}`"
          style="height: 100px; margin: 10px; background: black"
        >
          盒子 {{ item }}</view
        >
      </view>
    </Content>
  </Page>
</template>

<script lang="ts" setup>
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
import useLoading from '@/utils/composition/useLoading';
import useDisplayNavbarTitle from '@/utils/composition/useNavbarTitle';
import { ref } from 'vue';

useCustomTabBar();

const [showNavbarTitle] = useDisplayNavbarTitle();

const rendering = ref(true);
const [loadingRef, showLoading, hideLoading] = useLoading();
const onTap1 = () => {
  showLoading({
    title: '差速的挥洒u的哈斯的哈隧道好似u空间',
  });
};
const onTap2 = () => {
  showLoading({
    title: 'loading2',
  });
};
const onTap3 = () => {
  hideLoading();
};
const onSwiperRenderComplete = () => {
  console.log('onSwiperRenderComplete');
  rendering.value = false;
};
</script>

<style lang="scss" scoped></style>
