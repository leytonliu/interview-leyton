import { defineStore } from 'pinia';
import promisify from '../utils/promisify';

export const useSystemInfoStore = defineStore('systemInfo', {
  state: () => {
    return {
      systemInfo: {
        statusBarHeight: 0, // 状态栏高度
        theme: 'light', // 主题
      },
    };
  },
  actions: {
    async getSystemInfo() {
      const res = uni.canIUse('getSystemInfo')
        ? await promisify(uni.getSystemInfo)()
        : await promisify(uni.getSystemInfoSync)();
      if (res) {
        console.log('系统信息', res);
        this.systemInfo = res;
      }
    },
  },
});
