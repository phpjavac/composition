import screenfull, { Screenfull } from "screenfull";
import { getTargetElement } from "../utils/dom";
import { safeOnMounted } from "../utils/lifeCircle";
import { ref, Ref, isRef, toRefs, ToRefs, watch } from 'vue'
export interface Options {
    onExitFull?: () => void;
    onFull?: () => void;
}
export interface Result {
    isFullscreen: Ref<boolean>;
    setFull: () => void;
    exitFull: () => void;
    toggleFull: () => void;
}

function useFullscreen(target: Ref<HTMLElement | null> | HTMLElement, options?: Options): ToRefs<Result> {
    const { onExitFull, onFull } = options || {};
    const isScreenfull = (arg: any): arg is Screenfull => {
        return arg.isEnabled;
    }
    const result: Result = {
        isFullscreen: isScreenfull(screenfull) ? ref(screenfull.isFullscreen) : ref(false),
        setFull: () => { },
        exitFull: () => { },
        toggleFull: () => { },
    }

    safeOnMounted(() => {
        const HtmlTarget = getTargetElement(target);
        if (HtmlTarget) {
            result.setFull = () => {
                if (screenfull.isEnabled && !result.isFullscreen.value) {
                        result.isFullscreen.value = true
                        screenfull.request(HtmlTarget);
                        onFull && onFull();
                }
            }
            result.exitFull = () => {
                if (screenfull.isEnabled) {
                    if (result.isFullscreen.value) {
                        result.isFullscreen.value = false
                        screenfull.exit();
                        onExitFull && onExitFull();
                    }
                }
            }
            result.toggleFull = () => {
                if (screenfull.isEnabled) { 
                    screenfull.toggle(HtmlTarget).then(()=>{
                        result.isFullscreen.value = !result.isFullscreen.value
                        if(result.isFullscreen.value){ 
                            onFull && onFull();
                        } else {
                            onExitFull && onExitFull();
                        }
                    })
                }
            }
        }
    })
    return toRefs(result)

}


export default useFullscreen