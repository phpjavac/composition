import isArray from "lodash/isArray";
import { Ref, onMounted, onBeforeUnmount } from "vue";

export interface UseClickAwayOption {
  // eslint-disable-next-line no-unused-vars
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  target: Ref<HTMLElement | HTMLElement[]>;
}

/**
 * 点击目标元素之外的元素的回调
 * @param onClickAway: 点击回调函数
 * @param target: 目标元素|数组
 */
const useClickAway = ({ onClickAway, target }: UseClickAwayOption) => {
  const callback = (event: MouseEvent | TouchEvent) => {
    if (isArray(target.value)) {
      if (!target.value.length) {
        throw new Error("目标元素数组不能为空");
      }
      if (!target.value.includes(event.target as any)) {
        onClickAway(event);
      }
    } else if (target.value !== event.target) {
      if (onClickAway) {
        onClickAway(event);
      }
    }
  };
  onMounted(() => {
    window.addEventListener("click", callback);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", callback);
  });
};

export { useClickAway };
