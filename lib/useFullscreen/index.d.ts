import { Ref, ToRefs } from 'vue';
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
declare function useFullscreen(target: Ref<HTMLElement | null> | HTMLElement, options?: Options): ToRefs<Result>;
export default useFullscreen;
