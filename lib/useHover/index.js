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
  let inDelay, outDelay;
  if (Array.isArray(delay) && delay.length > 1) {
    inDelay = delay[0], outDelay = delay[1] || delay[0];
  } else {
    inDelay = outDelay = delay;
  }
  if (isDebounce) {
    fnF = debounce(fnF, inDelay);
    fnS = debounce(fnS, outDelay);
    target.addEventListener("mousemove", () => {
      fnF();
    });
    target.addEventListener("mouseleave", () => {
      fnS();
    });
  } else if (persistent) {
    target.addEventListener("mousemove", () => {
      fnF();
    });
    target.addEventListener("mouseleave", () => {
      fnS();
    });
  } else {
    target.addEventListener("mouseenter", () => {
      fnF();
    });
    target.addEventListener("mouseleave", () => {
      fnS();
    });
  }
};
export default useHover;
