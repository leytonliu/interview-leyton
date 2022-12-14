<template>
  <view :style="{ color: color, fontSize: size, fontWeight: weight }" class="icon">
    <text class="iconfont" :class="`icon-${name}`"></text>
  </view>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  color: {
    type: String,
    default: '#6b5ffd',
  },
  size: {
    type: String,
    default: '16px',
  },
  weight: {
    type: null,
    default: 'normal',
  },
});
</script>

<style lang="scss" scoped>
.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  text {
    width: 100%;
    height: 100%;
  }
}
</style>
