import { Ref } from 'vue';
export interface UseClickAwayOption {
    onClickAway: (event: MouseEvent | TouchEvent) => void;
    target: Ref<HTMLElement | HTMLElement[]>;
}
/**
 * 点击目标元素之外的元素的回调
 * @param onClickAway: 点击回调函数
 * @param target: 目标元素|数组
 */
declare const useClickAway: ({ onClickAway, target }: UseClickAwayOption) => void;
export { useClickAway };
