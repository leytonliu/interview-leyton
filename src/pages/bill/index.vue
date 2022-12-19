<template>
  <Page>
    <Navbar :showTitle="showNavbarTitle" title="账单" />

    <Content>
      <ContentTitle class="content-title">账单</ContentTitle>
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
import useDisplayNavbarTitle from '@/utils/composition/useNavbarTitle';

useCustomTabBar();
const [showNavbarTitle] = useDisplayNavbarTitle();
</script>

<style lang="scss" scoped></style>
