import { onUnmounted, watch, toRefs } from "vue";
const isUseEffectFunVoid = (arg) => arg !== void 0;
const useEffect = (method, needWatch) => {
  const fn = method();
  if (needWatch && needWatch.length > 0) {
    watch([...toRefs(needWatch)], () => {
      method();
    }, {
      deep: true
    });
  }
  if (isUseEffectFunVoid(fn)) {
    onUnmounted(fn);
  }
};
export default useEffect;
