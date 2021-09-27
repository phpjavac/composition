import { ref, unref } from "vue";
export function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
export const bypassFilter = (invoke) => {
  return invoke();
};
export function debounceFilter(ms) {
  let timer;
  const filter = (invoke) => {
    const duration = unref(ms);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0)
      return invoke();
    timer = setTimeout(invoke, duration);
  };
  return filter;
}
export function throttleFilter(ms, trailing = true) {
  let lastExec = 0;
  let timer;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = unref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        clear();
        invoke();
      }, duration);
    }
  };
  return filter;
}
export function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}
