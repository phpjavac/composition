import useEffect from "../useEffect";
const defaultEvent = ["keydown"];
const useKeyPress = (keyCode, method, option = {}) => {
  const { events: keyEvent = defaultEvent } = option;
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
      ;
    }
  };
  useEffect(() => {
    keyEvent.forEach((kEve) => {
      window.addEventListener(kEve, codeMethod);
    });
    return () => {
      keyEvent.forEach((kEve) => {
        window.removeEventListener(kEve, codeMethod);
      });
    };
  });
};
export default useKeyPress;
