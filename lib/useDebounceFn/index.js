import { ref, onUnmounted } from "vue";
import debounce from "lodash/debounce";
function useDebounceFn(Fnn, options) {
  if (!Fnn && typeof Fnn !== "function") {
    return {
      run: () => {
      },
      cancel: () => {
      },
      flush: () => {
      }
    };
  }
  const fn = ref(null);
  fn.value = Fnn;
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
export default useDebounceFn;
