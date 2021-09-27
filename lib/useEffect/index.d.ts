declare type UseEffectVoid = () => void;
declare type UseEffectFunVoid = () => () => void;
/**
 * 可以清楚副作用的函数
 * @param method 需要执行的函数
 * @param needWatch 需要监听的变量——当变量更新时，执行@method
 */
declare const useEffect: (method: UseEffectVoid | UseEffectFunVoid, needWatch?: any[]) => void;
export default useEffect;
