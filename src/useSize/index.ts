import { ref } from "vue";

const useSize = (target: HTMLElement, callback?: () => void) => {
    const size = ref({
        width: target.clientWidth,
        height: target.clientHeight
    })
    const resizeObserver = new ResizeObserver(() => {
        size.value.height = target.clientHeight
        size.value.width = target.clientWidth
        callback && callback();
    });

    resizeObserver.observe(target);
    return size.value;
}

export default useSize;