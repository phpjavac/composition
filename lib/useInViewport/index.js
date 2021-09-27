import { onMounted, ref, onBeforeUnmount, watch } from "vue";
import { getTargetElement } from "../utils/dom";
function isInViewPort(el) {
  if (!el) {
    return false;
  }
  const viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const rect = el.getBoundingClientRect();
  if (rect) {
    const { top, bottom, left, right } = rect;
    return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0;
  }
  return false;
}
export function useInViewport(target, callback = null) {
  const state = ref(false);
  let observer;
  onMounted(() => {
    const targetElement = getTargetElement(target);
    if (!targetElement) {
      return;
    }
    const defaultInViewport = isInViewPort(targetElement);
    state.value = defaultInViewport;
    observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries.every((i) => i.isIntersecting);
      state.value = isIntersecting;
    });
    observer.observe(targetElement);
    onBeforeUnmount(() => {
      observer.disconnect();
    });
  });
  watch(() => state.value, () => {
    if (callback) {
      callback(state.value);
    }
  });
  return state;
}
