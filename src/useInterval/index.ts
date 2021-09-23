import { ref, Ref } from "vue";
import { debounce  } from "lodash";

type Fn = (...args: any) => any

interface DebounceOptions{
    wait: number;
    leading: boolean;
    traling: boolean;
}

function useDebounceFn<T extends Fn>(Fn: T, options: DebounceOptions) {
    const fn:Ref<T> = ref(Fn)
};
// useDebounceFn(()=>{console.log('ddd');return 2}, {wait:1,leading:false,traling:false})

export default useDebounceFn;
