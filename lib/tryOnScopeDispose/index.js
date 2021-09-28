import { getCurrentScope, onScopeDispose } from "vue";
export default function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
