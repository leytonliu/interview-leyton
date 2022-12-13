import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  envDir: 'root',
  resolve: {
    alias: {
      '@': 'src',
    },
  },
  // 小程序端源码调试,需要在 vite.config.js 中主动开启 sourcemap
  build: {
    sourcemap: true,
  },
});
