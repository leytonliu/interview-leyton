<template>
  <Page>
    <Navbar :showTitle="showNavbarTitle"> TOTO Wallet </Navbar>
    <Content>
      <ContentTitle class="content-title">TOTO Wallet</ContentTitle>
      <Loading ref="loadingRef" />
      <button @click="onTap1">loading1</button>
      <button @click="onTap2">loading2</button>
      <button @click="onTap3">hideLoading</button>
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

import { getCurrentInstance, onMounted, ref } from 'vue';

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
