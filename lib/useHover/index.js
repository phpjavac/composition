import { ref } from "vue";
const debounce = (fn, delay) => {
  let timer;
  return () => {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};
const useHover = (options, fnF, fnS) => {
  const { target, persistent = false, isDebounce = false, delay = 500 } = options;
  if (!target)
    return console.error("Can't find HTMLELEMENT");
  let inDelay;
  let outDelay;
  const flag = ref(false);
  if (Array.isArray(delay) && delay.length > 1) {
    inDelay = delay[0], outDelay = delay[1] || delay[0];
  } else {
    inDelay = outDelay = delay;
  }
  if (isDebounce) {
    fnF = debounce(fnF, inDelay);
    fnS = debounce(fnS, outDelay);
    target.addEventListener("mousemove", () => {
      flag.value = true;
      fnF();
    });
    target.addEventListener("mouseleave", () => {
      flag.value = false;
      fnS();
    });
  } else if (persistent) {
    target.addEventListener("mousemove", () => {
      flag.value = true;
      fnF();
    });
    target.addEventListener("mouseleave", () => {
      flag.value = false;
      fnS();
    });
  } else {
    target.addEventListener("mouseenter", () => {
      flag.value = true;
      fnF();
    });
    target.addEventListener("mouseleave", () => {
      flag.value = false;
      fnS();
    });
  }
  return flag;
};
export default useHover;
