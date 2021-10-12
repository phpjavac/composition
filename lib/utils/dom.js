import { unref, isRef } from "vue";
export function getTargetElement(target, defaultElement) {
  if (!target) {
    return defaultElement;
  }
  let targetElement;
  if (isRef(target)) {
    targetElement = unref(target);
  }
  if (typeof target === "function") {
    targetElement = target();
  }
  if (!targetElement) {
    console.error("target is not available!");
  }
  return targetElement;
}
