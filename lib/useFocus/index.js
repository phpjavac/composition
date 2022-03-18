const useFocus = (documentElement, fn) => {
  const timer = setInterval(() => {
    if (documentElement.value !== void 0) {
      clearInterval(timer);
      documentElement.value.addEventListener("focus", fn);
      documentElement.value.addEventListener("blur", fn);
    } else {
      console.info("null");
    }
  }, 50);
};
export default useFocus;
