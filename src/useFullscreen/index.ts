import screenfull from "screenfull";
import { ref } from 'vue'
export interface Options {
    onExitFull?: () => void;
    onFull?: () => void;
  }
export interface Result{
    isFullscreen: boolean;
    setFull: () => void;
    exitFull: () => void;
    toggleFull: () => void;
}

function useFullscreen(target: HTMLElement, option?: Options) {
    const result = ref<Result>()
    if(!target) {
        return;
    }
    if (screenfull.isEnabled) {
		screenfull.request(target);
	}
    if(screenfull.isEnabled) {
        screenfull.on('change', () => {
            result.value.isFullscreen
        })
    }

}

export default useFullscreen