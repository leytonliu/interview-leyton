<template>
  <Page>
    <Navbar> 账单 </Navbar>
    <Content> </Content>
  </Page>
</template>

<!-- <script setup lang="ts"></script> -->
<script>
export default {
  onShow() {
    // https://www.cnblogs.com/memoyu/p/16227592.html

    if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
      this.$scope.getTabBar().init(2);
    }
  },

};
</script>
<style lang="scss" scoped></style>
