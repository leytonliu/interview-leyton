export interface IConfig {
  env: string; // 开发环境
  APP_ID: string; // 公众号appId  一般放在服务器端
  APP_SECRET: string; // 公众号appScript 一般放在服务器端
  nonceStr: string; // 生成签名的随机字符串
}

// 根据环境引入不同配置 process.env.NODE_ENV
// export const config: IConfig = require('./env.' + process.env.VUE_APP_ENV);
// console.log(process.env.VUE_APP_ENV);
