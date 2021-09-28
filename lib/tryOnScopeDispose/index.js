import { getCurrentScope, onScopeDispose } from "vue";
export function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
