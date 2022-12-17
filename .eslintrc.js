// https://eslint.bootcss.com/docs/user-guide/getting-started
// https://my.oschina.net/u/3407699/blog/5517388
module.exports = {
  root: true,
  env: {
    // 加载环境中预定义的全局变量
    browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true, // fix <script setup/>
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  // parser: '@typescript-eslint/parser',
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 代码规范 可选值:['error' 'warn' 'off'] or [2,1,0]
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-empty-function':'off'

  },

  globals: {
    // 定义全局变量
    wx:'readonly',
    uni: 'readonly',
    process: 'readonly',
    plus: 'readonly',
    getApp: 'readonly',
    getCurrentPages: 'readonly',
  },
};

