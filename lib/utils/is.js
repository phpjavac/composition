export const isClient = typeof window !== "undefined";
export const isDef = (val) => typeof val !== "undefined";
export const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const toString = Object.prototype.toString;
export const isBoolean = (val) => typeof val === "boolean";
export const isFunction = (val) => typeof val === "function";
export const isNumber = (val) => typeof val === "number";
export const isString = (val) => typeof val === "string";
export const isObject = (val) => toString.call(val) === "[object Object]";
export const isWindow = (val) => typeof window !== "undefined" && toString.call(val) === "[object Window]";
export const now = () => Date.now();
export const timestamp = () => +Date.now();
export const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
export const noop = () => {
};
export const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
