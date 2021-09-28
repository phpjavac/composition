import { getCurrentInstance, onBeforeUnmount } from "vue";
export default function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
    onBeforeUnmount(fn);
}
