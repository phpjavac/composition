import { onMounted, ref, onBeforeUnmount } from "vue";
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
export function useObserver(target) {
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
  return state;
}
