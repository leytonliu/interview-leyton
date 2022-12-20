<template>
  <Page>
    <Navbar title="统计" :showTitle="showNavbarTitle"></Navbar>
    <Content>
      <ContentTitle class="content-title">统计</ContentTitle>
      <view class="test"> Hello </view>
    </Content>
  </Page>
</template>

<script setup>
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
import useDisplayNavbarTitle from '@/utils/composition/useNavbarTitle';
import { reactive, ref } from 'vue';

useCustomTabBar();
const [showNavbarTitle] = useDisplayNavbarTitle();
</script>

<style lang="scss" scoped>
.test {
  background: var(--bg-color);
}
</style>
