/**
 * 将 uni-app API Promise 化
 * @param fn
 * @returns success 结果
 */
export default function promisify(fn: any) {
  return (args = {}) =>
    new Promise((resolve, reject) => {
      fn(
        Object.assign(args, {
          success: resolve,
          fail: reject,
        }),
      );
    });
}
