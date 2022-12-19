<template>
  <view class="image__wrapper" :style="{ width: width, height: height }" @tap="onTap">
    <!-- 图片大小占位 也可当作骨架屏使用-->
    <view class="image__placeholder skeleton" :class="placeholderClass"></view>
    <image
      v-show="!loading"
      class="image"
      :class="imageClass"
      :src="src"
      @load="onImageLoad"
      @error="onImageError"
    />
  </view>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  src: {
    type: String,
  },
  width: {
    type: [Number, String],
  },
  height: {
    type: [Number, String],
  },
});

const loading = ref(true);
const imageClass = ref('');
const placeholderClass = ref('');

const emit = defineEmits(['load', 'error', 'tap']);

const reset = () => {
  loading.value = true;
  placeholderClass.value = '';
  imageClass.value = '';
};

const onImageLoad = (event) => {
  emit('load', event);
  loading.value = false;
  placeholderClass.value = 'fadeout';
  imageClass.value = 'fadein';
};

const onImageError = (event) => {
  emit('error', event);
  loading.value = false;
};

const onTap = (event) => {
  emit('tap', event);
};

// 当图片src改变时重置状态
watch(
  () => props.src,
  () => {
    reset();
  },
);
</script>

<style lang="scss" scoped>
.image__wrapper {
  position: relative;
}
.image__placeholder {
  background-color: #eceff1;
  position: absolute;
  width: 100%;
  height: 100%;
}
.skeleton {
  -webkit-animation: replay 0.9s cubic-bezier(0.3, 0, 0.45, 1) infinite alternate;
  animation: replay 0.9s cubic-bezier(0.3, 0, 0.45, 1) infinite alternate;
}
.image {
  opacity: 0;
  display: flex;
  width: 100%;
  height: 100%;
}
.fadeout {
  -webkit-animation: fadeout 0.3s cubic-bezier(0.3, 0, 1, 1) forwards;
  animation: fadeout 0.3s cubic-bezier(0.3, 0, 1, 1) forwards;
}
.fadein {
  -webkit-animation: fadein 0.3s cubic-bezier(0.3, 0, 1, 1) forwards;
  animation: fadein 0.3s cubic-bezier(0.3, 0, 1, 1) forwards;
}
@-webkit-keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes replay {
  from {
    background-color: #eceff1;
  }
  to {
    background-color: #c8cbcc;
  }
}
@keyframes replay {
  from {
    background-color: #eceff1;
  }
  to {
    background-color: #c8cbcc;
  }
}
</style>
