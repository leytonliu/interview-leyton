<template>
  <Page>
    <Navbar> 图表 </Navbar>
    <Content> </Content>
  </Page>
</template>

<!-- <script setup lang="ts">


</script> -->
<script>
export default {
  onShow() {

    console.log('this.$scope', this.$scope);
    console.log('this.$scope.getTabBar', this.$scope.getTabBar);
    if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
      this.$scope.getTabBar().init(1);
    }
  },

};
</script>
<style lang="scss" scoped></style>
