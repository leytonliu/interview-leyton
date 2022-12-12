import { useSystemInfoStore } from '../stores/systemInfo';
import promisify from './promisify';

class SystemInfoManager {
  /** 优先使用异步接口，统一拉取所有系统信息 */
  async retrieveSystemInfo() {
    const res = uni.canIUse('getSystemInfo')
      ? await promisify(uni.getSystemInfo)()
      : await promisify(uni.getSystemInfoSync)();
    if (res) {
      const systemInfoStore = useSystemInfoStore();
      systemInfoStore.$patch({
        systemInfo: res,
      });
      return true;
    }
    return false;
  }
}

export default new SystemInfoManager();
