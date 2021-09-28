var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ref } from "vue";
import { createSingletonPromise } from "../utils";
import { useEventListener } from "../useEventListener";
import { defaultNavigator } from "../_configurable";
export function usePermission(permissionDesc, options = {}) {
  const { controls = false, navigator = defaultNavigator } = options;
  const isSupported = Boolean(navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = createSingletonPromise(() => __async(this, null, function* () {
    if (!isSupported)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = yield navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  }));
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  }
  return state;
}
