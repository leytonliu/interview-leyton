<template>
  <Page>
    <Navbar :showTitle="showNavbarTitle"> My Wallet </Navbar>
    <Content>
      <ContentTitle class="content-title">My Wallet</ContentTitle>
      <Loading ref="loadingRef" />
      <LButton @tap="onTap1">loading1</LButton>
      <LButton @tap="onTap2">loading2</LButton>
      <LButton @tap="onTap3">hideLoading</LButton>
      <LButton @tap="onTap3">记一笔</LButton>
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
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
import useLoading from '@/utils/composition/useLoading';
import useDisplayNavbarTitle from '@/utils/composition/useNavbarTitle';

useCustomTabBar();

const [showNavbarTitle] = useDisplayNavbarTitle();

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
</script>

<style lang="scss" scoped></style>
