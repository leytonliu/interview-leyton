import { onReady, onUnload } from '@dcloudio/uni-app';
import { getCurrentInstance, ref } from 'vue';

const useDisplayNavbarTitle = () => {
  const showNavbarTitle = ref(false);
  let observer = null;
  onReady(() => {
    const _this = getCurrentInstance();
    const query = uni.createSelectorQuery().in(_this);

    query
      .select('.content-title')
      .boundingClientRect((data: any) => {
        const { top } = data;
        observer = uni.createIntersectionObserver(_this);
        observer.relativeToViewport({ top: -top }).observe('.content-title', (res) => {
          if (res.intersectionRatio > 0 && showNavbarTitle.value) {
            showNavbarTitle.value = false;
          } else if (res.intersectionRatio === 0 && !showNavbarTitle.value) {
            showNavbarTitle.value = true;
          }
          // console.log(res);
        });
      })
      .exec();
  });

  onUnload(() => {
    console.log('observer', observer);
    if (observer) {
      observer.disconnect();
    }
  });
  return [showNavbarTitle];
};

export default useDisplayNavbarTitle;
