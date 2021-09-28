import { Ref, ref, onUnmounted } from 'vue'
import debounce from 'lodash/debounce'
import { safeOnMounted } from '../utils'
import { getTargetElement } from '../utils/dom'

/**
 *
 * @param target
 * @param callback
 * @returns
 */

const useSize = (target: Ref<HTMLElement | null> | HTMLElement, callback?) => {
  const instance = ref(false)
  const size = ref({
    width: 0,
    height: 0,
  })
  let callbackVar: Function | undefined
  const targetDom = getTargetElement(target)
  const debounceCallback = debounce(
    () => {
      callbackVar && callbackVar()
    },
    300,
    { maxWait: 400 }
  )
  const resizeObserver = new ResizeObserver(() => {
    size.value.height = targetDom.clientHeight
    size.value.width = targetDom.clientWidth
    if (instance.value) {
      callbackVar = callback
      debounceCallback()
    }
    instance.value = true
  })
  const hook = () => {
    if (targetDom) {
      resizeObserver.observe(targetDom)
    } else {
      // eslint-disable-next-line no-console
      console.error('元素未挂载')
    }
  }
  safeOnMounted(hook)
  onUnmounted(() => {
    resizeObserver.unobserve(targetDom)
  })

  return size.value
}

export default useSize
