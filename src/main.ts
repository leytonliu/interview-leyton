import { createSSRApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(
  createPersistedState({
    storage: {
      getItem(key: string): string | null {
        return uni.getStorageSync(key);
      },
      setItem(key: string, data: string) {
        uni.setStorage({ key, data }); // 异步set
        // uni.setStorageSync(key, value);
      },
    },
  }),
);

export function createApp() {
  const app = createSSRApp(App);

  app.use(pinia);
  return {
    app,
    pinia,
  };
}
