<template>
  <Page>
    <Navbar> 首页 </Navbar>
    <Content>
      <Image :src="imgUrl" width="200rpx" height="200rpx"></Image>
      <button @tap="onTap">switchTab</button>
    </Content>
  </Page>
</template>

<script lang="ts" setup>
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
import { ref } from 'vue';
useCustomTabBar();
console.log('环境变量', import.meta.env);

const imgUrl = ref(
  'https://tvax2.sinaimg.cn/large/acd22bb7ly8h46ofhs0atj20u00u0ac3.jpg?KID=imgbed,tva&Expires=1670931637&ssig=89WC2BVCno&timestamp=1670920857223',
);

const onTap = () => {
  console.log('tap');
  imgUrl.value =
    'https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80';
};
</script>

<style lang="scss" scoped></style>
