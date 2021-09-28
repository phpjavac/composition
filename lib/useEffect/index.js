import { onUnmounted } from "vue";
const isUseEffectFunVoid = (arg) => arg !== void 0;
const useEffect = (method, needWatch) => {
  const fn = method();
  console.log(fn, "1111111111111111111111111111111");
  if (isUseEffectFunVoid(fn)) {
    onUnmounted(fn);
  }
};
export default useEffect;
