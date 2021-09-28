import useEffect from "../useEffect/index";
const defaultEvent = ["keydown"];
const useKeyPress = (keyCode, method, option = {}) => {
  const { events: keyEvents = defaultEvent } = option;
  const codeMethod = (event) => {
    const getKeyBoolean = (e) => typeof e === "boolean";
    if (getKeyBoolean(keyCode)) {
      if (keyCode)
        method(event);
    } else {
      const keys = typeof keyCode === "string" ? [keyCode] : [...keyCode];
      if (keys.includes(event.code)) {
        method(event);
      }
    }
  };
  useEffect(() => {
    keyEvents.forEach((kEve) => {
      window.addEventListener(kEve, codeMethod);
    });
    return () => {
      keyEvents.forEach((kEve) => {
        window.removeEventListener(kEve, codeMethod);
      });
    };
  });
};
export default useKeyPress;
