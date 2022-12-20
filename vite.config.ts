import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      // https://vitejs.dev/config/#resolve-alias
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局使用scss变量,不建议使用 //https://github.com/vitejs/vite/issues/5682#issuecomment-968713998
        // additionalData: '@import "@/static/css/var.module.scss";',
      },
    },
  },

  // 小程序端源码调试, 需要在 vite.config.js 中主动开启 sourcemap
  // build: {
  //   sourcemap: true,
  // },
});
