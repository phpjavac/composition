import { Ref } from 'vue';
/**
 *
 * @param target
 * @param callback
 * @returns
 */
declare const useSize: (target: Ref<HTMLElement | null> | HTMLElement, callback?: any) => {
    width: number;
    height: number;
};
export default useSize;
