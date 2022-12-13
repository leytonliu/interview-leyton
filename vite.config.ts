import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  envDir: 'root',
  resolve: {
    alias: {
      // https://vitejs.dev/config/#resolve-alias
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 小程序端源码调试, 需要在 vite.config.js 中主动开启 sourcemap
  // build: {
  //   sourcemap: true,
  // },
});
