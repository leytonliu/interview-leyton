# Vue3 + Ts 版 uni-app

# 预备环境

node 版本大于 ^14.18.0 || >=16.0.0

更新 uni-app 版本 `npx @dcloudio/uvm`
仅建议使用正式版，alpha 版本不稳定

## 新特性

- Vue3 + typescript
- 使用 pnpm 包管理器

  - preinstall 脚本 校验

- 使用 eslint 管理规范代码及格式化

  - 安装 eslint `npx eslint --init`
  - 生成 .eslintrc.js 配置文件

- 使用 pinia 状态管理

- 时间处理 dayjs 库

- 自定义 tabbar、navbar

  - https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html?search-key=%E8%87%AA%E5%AE%9A%E4%B9%89tabbar

- 自定义 loading、 toast

- 使用自定义字体

- 页面基础布局组件，方便统一处理页面

```vue
<template>
  <Page>
    <Navbar></Navbar>
    <Content></Content>
    <Footer></Footer>
  </Page>
</template>
```

- 封装分页器方法

https://juejin.cn/post/7046632389237293087
