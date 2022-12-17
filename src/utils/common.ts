/**
 * 防抖函数
 * @param func
 * @param wait
 * @returns
 * @desc 应用场景: 1.搜索框搜索输入。只需用户最后一次输入完，再发送请求 2.手机号、邮箱验证输入检测 3.窗口大小resize，只需窗口调整完成后，计算窗口大小。防止重复渲染
 */
export function debounce(func, wait = 50) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      console.log('防抖少许');
    }
    timer = setTimeout(() => {
      func.call(context, ...args);
    }, wait);
  };
}

/**
 * 节流函数
 * @param method
 * @param wait
 * @returns  应用场景: 1.滚动加载，加载更多或滚到底部监听 2.搜索框，搜索联想功能
 */
export function throttle(method, wait = 50) {
  let previous = 0;
  return function (...args) {
    const context = this;
    const now = new Date().getTime();
    if (now - previous > wait) {
      method.apply(context, args);
      previous = now;
    } else {
      console.log('节流少许');
    }
  };
}

/**
 * 格式化价格数额为字符串
 * 可对小数部分进行填充，默认不填充
 * @param price 价格数额，以分为单位!
 * @param fill 是否填充小数部分 0-不填充 1-填充第一位小数 2-填充两位小数
 */
function priceFormat(price, fill = 0) {
  if (isNaN(price) || price === null || price === Infinity) {
    return price;
  }

  let priceFormatValue: number | string = Math.round(parseFloat(`${price}`) * 10 ** 8) / 10 ** 8; // 恢复精度丢失
  priceFormatValue = `${Math.ceil(priceFormatValue) / 100}`; // 向上取整，单位转换为元，转换为字符串
  if (fill > 0) {
    // 补充小数位数
    if (priceFormatValue.indexOf('.') === -1) {
      priceFormatValue = `${priceFormatValue}.`;
    }
    const n = fill - priceFormatValue.split('.')[1]?.length;
    for (let i = 0; i < n; i++) {
      priceFormatValue = `${priceFormatValue}0`;
    }
  }
  return priceFormatValue;
}


export function filterNullValueObject(obj: any) {
  const params: any = {};
  if (obj && Object.keys(obj).length >= 1) {
    Object.keys(obj).forEach((key) => {
      if (key && obj[key] !== undefined && obj[key] !== '' && obj[key] !== null) {
        // 如果查询的条件不为空
        if (Array.isArray(obj[key]) && obj[key].length === 0) {
          return;
        }
        params[key] = obj[key];
      }
    });
  }
  return params; // 返回查询条件
}
