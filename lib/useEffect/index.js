import { onUnmounted } from "vue";
const isUseEffectFunVoid = (arg) => arg !== void 0;
const useEffect = (method, needWatch) => {
  const fn = method();
  if (isUseEffectFunVoid(fn)) {
    onUnmounted(fn);
  }
};
export default useEffect;
