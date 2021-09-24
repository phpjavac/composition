import { ref, Ref, onUnmounted } from "vue";
import { throttle } from "lodash";

type Fn = (...args: any) => any

interface DebounceOptions{
    wait: number;
    leading: boolean;
    traling: boolean;
}

function useThrottleFn<T extends Fn>(Fn: T, options?: DebounceOptions): {run: () => void; cancel: () => void;flush: () => void;} {
    if(!Fn && typeof Fn !== 'function') return;
    const fn:Ref<T> = ref(null)
    fn.value = Fn;
    const debounced = throttle<T>(fn.value, options?.wait ? options?.wait : 1000, options)
    onUnmounted(() => {
        debounced.cancel();
      });
    return {
        run: debounced,
        cancel: debounced.cancel,
        flush: debounced.flush,
    }
};
// useDebounceFn(()=>{console.log('ddd');return 2}, {wait:1,leading:false,traling:false})

export default useThrottleFn;
