<template>
  <Page>
    <Navbar> 添加 </Navbar>
    <Content> </Content>
  </Page>
</template>

<!-- <script setup lang="ts"></script> -->
<script>
export default {
  onShow() {
    // https://www.cnblogs.com/memoyu/p/16227592.html

    if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
      this.$scope.getTabBar().init(3);
    }
  },

};
</script>
<style lang="scss" scoped></style>
