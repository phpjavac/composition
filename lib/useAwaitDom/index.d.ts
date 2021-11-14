import { Ref } from 'vue';
interface IUseAwaitDomOptions {
    /**
     * dom 获取器
     */
    domSelector: (() => HTMLElement | null) | Ref<HTMLElement | null>;
    /**
     * 最大等待时间（单位：ms）
     */
    maxWait?: number;
}
/**
 * 等待dom出现然后执行...
 * @param param0 IUseAwaitDomOptions
 * @returns Promise
 */
declare const useAwaitDom: ({ domSelector, maxWait, }: IUseAwaitDomOptions) => Promise<HTMLElement | Ref<HTMLElement>>;
export default useAwaitDom;
