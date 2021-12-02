import { onUnmounted, watch, toRefs } from 'vue'

type UseEffectVoid = () => void // 不需要处理副效应
type UseEffectFunVoid = () => () => void // 需要处理副效应

/**
 * 判断函数的@arg 是否是箭头函数
 */
const isUseEffectFunVoid = (arg: void | (() => void)): arg is UseEffectVoid =>
  arg !== undefined

/**
 * 可以清楚副作用的函数
 * @param method 需要执行的函数
 * @param needWatch 需要监听的变量——当变量更新时，执行@method
 */
const useEffect = (
  method: UseEffectVoid | UseEffectFunVoid,
  needWatch?: any[]
) => {
  const fn = method()
  /** 处理watch */
  if (needWatch && needWatch.length > 0) {
    watch([...toRefs(needWatch)], () => {
      method()
    },{
      /** ref对象不需要深度监听，但是reactive需要 */
      deep: true
    })
  }
  /** 清除副作用 */
  if (isUseEffectFunVoid(fn)) {
    onUnmounted(fn)
  }
}

export default useEffect
