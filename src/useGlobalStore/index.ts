import { reactive } from 'vue';

class GlobalStore<T> {
  store: T;

  setStore(store: T) {
    this.store = store;
  }

  static instance: GlobalStore<unknown>;

  static getInstance() {
    if (!GlobalStore.instance) {
      GlobalStore.instance = reactive(new GlobalStore());
    }
    return GlobalStore.instance;
  }
}

/**
 * 初始化、使用全局仓库
 * @param option 需要初始化的数据
 * @returns 响应式的全局单例
 */
export default function useGlobalStore<T>(option?: T): T {
  const instance = GlobalStore.getInstance();
  if (option) {
    instance.setStore(option)
  } else {
    console.warn('Global store has been initialized');
  }
  return instance.store as T
}




