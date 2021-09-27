import isArray from "lodash/isArray";
import { onMounted, onBeforeUnmount } from "vue";
const useClickAway = ({ onClickAway, target }) => {
  const callback = (event) => {
    if (isArray(target.value)) {
      if (!target.value.length) {
        throw new Error("\u76EE\u6807\u5143\u7D20\u6570\u7EC4\u4E0D\u80FD\u4E3A\u7A7A");
      }
      if (!target.value.includes(event.target)) {
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
