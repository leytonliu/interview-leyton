import { defineStore } from 'pinia';

export const useSystemInfoStore = defineStore('systemInfo', {
  state: () => {
    return {
      systemInfo: {
        statusBarHeight: 0, // 状态栏高度
      },
    };
  },
  actions: {},
});
