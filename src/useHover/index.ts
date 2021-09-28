import { onUnmounted, ref } from 'vue'
import { BasicTarget, getTargetElement } from '../utils/dom'
import { safeOnMounted } from '../utils'

interface Options {
  onEnter?: () => void
  onLeave?: () => void
}

export default function useHover(target: BasicTarget, options?: Options) {
  const state = ref(false)
  const { onEnter, onLeave } = options ?? {}

  function onMouseEnter() {
    // setTrue();
    state.value = true
    onEnter && onEnter()
  }

  function onMouseLeave() {
    // setFalse && setFalse();
    state.value = false
    onLeave && onLeave()
  }

  safeOnMounted(() => {
    const targetElement = getTargetElement(target)
    if (!targetElement) {
      return
    }
    targetElement.addEventListener('mouseenter', onMouseEnter)
    targetElement.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    const targetElement = getTargetElement(target)
    if (targetElement) {
      targetElement.removeEventListener('mouseenter', onMouseEnter)
      targetElement.removeEventListener('mouseleave', onMouseLeave)
    }
  })

  return state
}
