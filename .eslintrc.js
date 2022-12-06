// https://eslint.bootcss.com/docs/user-guide/getting-started
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    // 加载环境中预定义的全局变量
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true, // fix <script setup/>
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 可选值:['error' 'warn' 'off'] or [2,1,0]
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
  },

  globals: {
    // 定义全局变量
    uni: 'readonly',
    process: 'readonly',
    plus: 'readonly',
  },
};

