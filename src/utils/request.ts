import { filterNullValueObject } from './common';

interface RequestSuccessCallbackResult {
  /**
   * 开发者服务器返回的数据
   */
  data: any;
  /**
   * 开发者服务器返回的 HTTP 状态码
   */
  statusCode: number;
  /**
   * 开发者服务器返回的 HTTP Response Header
   */
  header: any;
  /**
   * 开发者服务器返回的 cookies，格式为字符串数组
   */
  cookies: string[];
}

const request = (options: UniApp.RequestOptions) => {
  return new Promise<any>((resolve, reject) => {
    options.header = {
      ...options.header,
      apifoxToken: 'jlA6ulQaigXe5ULLR83wezUJRXpydAcX',
    };
    // 兼容完整API相对路径
    if (!/(http|https):\/\/([\w.]+\/?)\S*/.test(options.url)) {
      options.url = `${import.meta.env.VITE_API_HOST}${options.url}`;
    }

    //  过滤data中空对象
    options.data = {
      ...(filterNullValueObject(options.data as object) || {}),
    };

    uni.request({
      ...options,
      success: (response: RequestSuccessCallbackResult) => {
        console.log(response);
        const { data, statusCode } = response;
        if (statusCode === 200) {
          if (data && data.failed) {
            uni.showToast({
              title: data.message,
              icon: 'none',
            });
            reject(data.message);
          } else {
            resolve(data);
          }
        } else {
          reject(response);
        }
      },
      fail: (err: UniApp.GeneralCallbackResult) => {
        reject(err);
      },
    });
  });
};

export default request;
