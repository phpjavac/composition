var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { getCurrentInstance } from "vue";
import mitt from "mitt";
import { once } from "lodash";
function useEventBus() {
  const emitter = mitt();
  const style1 = "padding:4px;border-radius:2x 0 0 2px;background:#00ADB5;color:#EEEEEE;";
  const style2 = "padding:4px;border-radius:0 2px 2px 0;background:#393E46;color:white;";
  const cache = {
    instance: getCurrentInstance(),
    uid: void 0
  };
  cache.uid = cache.instance.uid;
  emitter.on("*", (type, ...rest) => {
    if (useEventBus.$config.debug && emitter.all.get(type).length) {
      console.log(rest);
      console.log(`%c${cache.instance.proxy.$options.name || cache.instance.uid}\u{1F4E5}: %c${String(type)}`, style1, style2);
    }
  });
  emitter.emit = new Proxy(emitter.emit, {
    apply(target, thisArg, argumentsList) {
      if (useEventBus.$config.debug) {
        console.log(`%c${cache.instance.proxy.$options.name || cache.instance.uid}\u{1F4E4}: %c${String(argumentsList[0])}`, style1, style2);
      }
      return target(argumentsList[0], [...argumentsList.splice(1, arguments.length - 1)]);
    }
  });
  return emitter;
}
useEventBus.$config = {
  debug: false
};
useEventBus.config = once((config) => {
  useEventBus.$config = config;
  if (config && config.debug) {
    console.warn("useEventBus: debug mode is open.");
  }
  Object.defineProperties(useEventBus, {
    $config: __spreadProps(__spreadValues({}, Object.getOwnPropertyDescriptors(useEventBus.config)), {
      writable: false
    })
  });
});
export { useEventBus };
