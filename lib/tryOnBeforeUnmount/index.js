import { getCurrentInstance, onBeforeUnmount } from "vue";
export function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
    onBeforeUnmount(fn);
}
