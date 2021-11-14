import { clearInterval, setInterval } from "timers-browserify";
import { isFunction } from "lodash";
import { isRef } from "vue";
const useAwaitDom = ({
  domSelector,
  maxWait = 1e3 * 8
}) => {
  let domWatch;
  return new Promise((resolve, reject) => {
    let count = 0;
    setInterval(() => {
      if (isRef(domSelector) && domSelector.value) {
        clearInterval(domWatch);
        resolve(domSelector);
      } else if (isFunction(domSelector) && domSelector()) {
        clearInterval(domWatch);
        resolve(domSelector());
      } else {
        count += 200;
        if (count >= maxWait) {
          clearInterval(domWatch);
          reject(new Error("Await Dom Timeout."));
        }
      }
    }, 200);
  });
};
export default useAwaitDom;
