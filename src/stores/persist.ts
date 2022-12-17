import { fetchWechatLoginToken } from '@/api';
import { defineStore } from 'pinia';

/**
 * 需持久化的状态
 * 例如：token refreshToken openId
 */
export const usePersistStore = defineStore('persistStore', {
  persist: true,
  state: () => ({
    openId: null,
    accessToken: null,
    refreshToken: null,
  }),

  actions: {
    async getAccessToken() {
      uni.login({
        provider: 'weixin',
        success: async (loginRes) => {
          const { code } = loginRes;
          console.log('code', code);
          const { openId, accessToken, refreshToken } = await fetchWechatLoginToken(code);
          this.openId = openId;
          this.accessToken = accessToken;
          this.refreshToken = refreshToken;
        },
      });
    },
  },
});
