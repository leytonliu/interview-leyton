<template>
  <button :disabled="disabled" :loading="loading" open-type="openType" class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  openType: {
    type: String,
  },
  // background:{
  //   type: String,
  //   default:
  // }
});

// const emit = defineEmits(['tap']);

// const onTap = () => {
//   emit('tap');
// };
</script>

<style lang="scss" scoped>
@import '@/static/css/var.module.scss';

.button {
  background: $purple;
  color: #fff;
  border-radius: 8px;
  margin: 10px;
  font-size: 28rpx;
  line-height: 2.8;
  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit; /* inherit parent's border radius */
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
  }
  &:active::before {
    opacity: 0.1;
  }
}
</style>
