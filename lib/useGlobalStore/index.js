import { reactive } from "vue";
class GlobalStore {
  setStore(store) {
    this.store = store;
  }
  static getInstance() {
    if (!GlobalStore.instance) {
      GlobalStore.instance = reactive(new GlobalStore());
    }
    return GlobalStore.instance;
  }
}
let hasInstance = false;
export default function useGlobalStore(option) {
  const instance = GlobalStore.getInstance();
  if (option !== void 0) {
    if (!hasInstance) {
      instance.setStore(option);
      hasInstance = true;
    } else {
      console.warn("Global store has been initialized");
    }
  }
  return instance.store;
}
