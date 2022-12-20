import { ref } from 'vue';
import { LoadingOptions } from '../../components/Loading/Loading.vue';

/**
 * 处理自定义TabBar重渲染
 */
const useLoading = () => {
  const loadingRef = ref(null);

  // 只能在mounted之后使用
  const showLoading = (options: LoadingOptions) => {
    loadingRef.value?.showLoading(options);
  };

  const hideLoading = () => {
    loadingRef.value?.hideLoading();
  };

  return [loadingRef, showLoading, hideLoading];
};

export default useLoading;
