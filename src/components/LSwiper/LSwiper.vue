<template>
  <view class="swiper__wrapper" v-show="visible">
    <swiper
      class="swiper"
      circular
      :style="{
        height: swiperHeight,
      }"
      @change="onSwiperChange"
    >
      <swiper-item v-for="(img, index) in imgList" :key="index">
        <view class="swiper-item">
          <LImage
            :src="img.url"
            width="750rpx"
            mode="widthFix"
            @load="(e) => onImageLoad(e, index)"
          >
          </LImage>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';

const emit = defineEmits(['complete']);

defineProps({});
const imgList = ref([
  {
    url: 'https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1668343291760-88ddbb64fc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    url: 'https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1669666808012-3e120637a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3353&q=80',
  },
]);

const swiperHeight = ref('0px');
let arr = [];
const visible = ref(false);
const onImageLoad = (e, index) => {
  const { height, width } = e.detail;
  if (index === 0) {
    swiperHeight.value = `${Math.floor((height / width) * 750)}rpx`;
    visible.value = true;
    nextTick(() => {
      setTimeout(() => {
        emit('complete');
      }, 2000);
    });
  }
  arr[index] = `${Math.floor((height / width) * 750)}rpx`;
};

const onSwiperChange = (e) => {
  console.log('onSwiperChange', e);
  const { current } = e.detail;
  console.log(arr[current]);
  swiperHeight.value = arr[current];
};
</script>

<style lang="scss" scoped>
@import '@/static/css/var.module.scss';
.swiper__wrapper {
  height: 100%;
  .swiper {
    height: 100%;
    transition: height 0.3s cubic-bezier(0.3, 0, 0.45, 1);
  }
  .swiper-item {
    height: 100%;
  }
}
</style>
