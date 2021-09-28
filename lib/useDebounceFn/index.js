import { ref, onUnmounted } from "vue";
import debounce from "lodash/debounce";
function useDebounceFn(Fn, options) {
  if (!Fn && typeof Fn !== "function")
    return;
  const fn = ref(null);
  fn.value = Fn;
  const debounced = debounce(fn.value, (options == null ? void 0 : options.wait) ? options == null ? void 0 : options.wait : 1e3, options);
  onUnmounted(() => {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
;
export default useDebounceFn;
