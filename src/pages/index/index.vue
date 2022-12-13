<template>
  <Page>
    <Navbar> 首页 </Navbar>
    <Content>
      <view v-for="(item, index) in 200" :key="index">
        {{ index + 1 }}
      </view>
    </Content>
  </Page>
</template>

<!-- <script setup lang="ts">
import { onShow } from '@dcloudio/uni-app';
import { getCurrentInstance } from 'vue';
onShow(() => {
  const app = getApp();

  console.log('app', app);
  console.log('app', app.getTabbar);
  // console.log('this', this);

  // if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
  //   this.$scope.getTabBar().init();
  // }
});
</script> -->

<script>
export default {
  onShow() {
    console.log(this.$scope);
    // https://www.cnblogs.com/memoyu/p/16227592.html
    if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
      this.$scope.getTabBar().init(0);
    }
  },
};
</script>
<style lang="scss" scoped></style>
