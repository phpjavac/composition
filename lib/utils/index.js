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
export * from "./lifeCircle";
export * from "./is";
export * from "./filters";
export * from "./types";
export function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
export function identity(arg) {
  return arg;
}
export function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = () => __async(this, null, function* () {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      yield _prev;
  });
  return wrapper;
}
export function invoke(fn) {
  return fn();
}
export function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
export function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
export function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || !obj[k] === void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}
