import { Ref, ref } from "vue";
import { safeOnMounted } from "../utils";
import { debounce } from "loadsh";


/**
 * 
 * @param target 
 * @param callback 
 * @returns 
 */

const useSize = (target: Ref<HTMLElement | null>, callback?) => {
    const instance = ref(false);
    const size = ref({
        width: 0,
        height: 0
    })
    let callbackVar: Function|undefined = undefined
    const debounceCallback = debounce(() => { callbackVar && callbackVar() }, 300,{ maxWait: 400 })
    const resizeObserver = new ResizeObserver(() => {
        size.value.height = target.value.clientHeight
        size.value.width = target.value.clientWidth
        if (instance.value) {
            callbackVar = callback
            debounceCallback()
        }
        instance.value = true;
    });
    const hook = () => {
        if (target.value) {
            resizeObserver.observe(target.value);
        } else {
            console.error('元素未挂载')
        }

    }
    safeOnMounted(
        hook
    )

    return size.value;
}

export default useSize;