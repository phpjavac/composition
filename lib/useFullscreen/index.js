import screenfull from "screenfull";
import { getTargetElement } from "../utils/dom";
import { safeOnMounted } from "../utils/lifeCircle";
import { ref, toRefs } from "vue";
function useFullscreen(target, options) {
  const { onExitFull, onFull } = options || {};
  const isScreenfull = (arg) => {
    return arg.isEnabled;
  };
  const result = {
    isFullscreen: isScreenfull(screenfull) ? ref(screenfull.isFullscreen) : ref(false),
    setFull: () => {
    },
    exitFull: () => {
    },
    toggleFull: () => {
    }
  };
  safeOnMounted(() => {
    const HtmlTarget = getTargetElement(target);
    if (HtmlTarget) {
      result.setFull = () => {
        if (screenfull.isEnabled && !result.isFullscreen.value) {
          result.isFullscreen.value = true;
          screenfull.request(HtmlTarget);
          onFull && onFull();
        }
      };
      result.exitFull = () => {
        if (screenfull.isEnabled) {
          if (result.isFullscreen.value) {
            result.isFullscreen.value = false;
            screenfull.exit();
            onExitFull && onExitFull();
          }
        }
      };
      result.toggleFull = () => {
        if (screenfull.isEnabled) {
          screenfull.toggle(HtmlTarget).then(() => {
            result.isFullscreen.value = !result.isFullscreen.value;
            if (result.isFullscreen.value) {
              onFull && onFull();
            } else {
              onExitFull && onExitFull();
            }
          });
        }
      };
    }
  });
  return toRefs(result);
}
export default useFullscreen;
