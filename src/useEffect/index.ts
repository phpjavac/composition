import { onUnmounted } from 'vue'

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
  // eslint-disable-next-line no-unused-vars
  needWatch?: any[]
) => {
  const fn = method()
  if (isUseEffectFunVoid(fn)) {
    onUnmounted(fn)
  }
}

export default useEffect
