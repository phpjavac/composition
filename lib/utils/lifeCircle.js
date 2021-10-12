import { getCurrentInstance, onMounted } from "vue";
export function safeOnMounted(hook) {
  const instance = getCurrentInstance();
  if (instance.isMounted) {
    hook();
  } else {
    onMounted(hook);
  }
}
export const t = "";
