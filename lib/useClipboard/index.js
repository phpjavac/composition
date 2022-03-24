var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ref, unref } from "vue";
import { useTimeoutFn } from "../useTimeoutFn";
import { useEventListener } from "../useEventListener";
import { defaultNavigator } from "../configurable";
export function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = true,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => {
    copied.value = false;
  }, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  function copy() {
    return __async(this, arguments, function* (value = unref(source)) {
      if (isSupported && value != null) {
        yield navigator.clipboard.writeText(value);
        text.value = value;
        copied.value = true;
        timeout.start();
      }
    });
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
