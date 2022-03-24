import { ref, watch } from "vue";
import { isString } from "../utils";
import { defaultDocument } from "../configurable";
const useTitle = (newTitle = null, options = {}) => {
  var _a;
  const {
    document = defaultDocument,
    observe = false
  } = options;
  const title = ref((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  watch(title, (t, o) => {
    if (isString(t) && t !== o && document)
      document.title = t;
  }, { immediate: true });
  if (observe && document) {
    if (document && document.title !== title.value)
      title.value = document.title;
  }
  return title;
};
export default useTitle;
