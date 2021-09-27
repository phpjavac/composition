import { ref, onUnmounted } from "vue";
import { safeOnMounted } from "../utils";
import debounce from "lodash/debounce";
import { getTargetElement } from "../utils/dom";
const useSize = (target, callback) => {
  const instance = ref(false);
  const size = ref({
    width: 0,
    height: 0
  });
  let callbackVar = void 0;
  let targetDom = getTargetElement(target);
  const debounceCallback = debounce(() => {
    callbackVar && callbackVar();
  }, 300, { maxWait: 400 });
  const resizeObserver = new ResizeObserver(() => {
    size.value.height = targetDom.clientHeight;
    size.value.width = targetDom.clientWidth;
    if (instance.value) {
      callbackVar = callback;
      debounceCallback();
    }
    instance.value = true;
  });
  const hook = () => {
    if (targetDom) {
      resizeObserver.observe(targetDom);
    } else {
      console.error("\u5143\u7D20\u672A\u6302\u8F7D");
    }
  };
  safeOnMounted(hook);
  onUnmounted(() => {
    resizeObserver.unobserve(targetDom);
  });
  return size.value;
};
export default useSize;
