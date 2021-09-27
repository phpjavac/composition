import { getTargetElement } from "../utils/dom";
import { onUnmounted, ref } from "vue";
import { safeOnMounted } from "../utils";
export function useHover(target, options) {
  const state = ref(false);
  const { onEnter, onLeave } = options != null ? options : {};
  function onMouseEnter() {
    state.value = true;
    onEnter && onEnter();
  }
  function onMouseLeave() {
    state.value = false;
    onLeave && onLeave();
  }
  safeOnMounted(() => {
    const targetElement = getTargetElement(target);
    if (!targetElement) {
      return;
    }
    targetElement.addEventListener("mouseenter", onMouseEnter);
    targetElement.addEventListener("mouseleave", onMouseLeave);
  });
  onUnmounted(() => {
    const targetElement = getTargetElement(target);
    if (targetElement) {
      targetElement.removeEventListener("mouseenter", onMouseEnter);
      targetElement.removeEventListener("mouseleave", onMouseLeave);
    }
  });
  return state;
}
