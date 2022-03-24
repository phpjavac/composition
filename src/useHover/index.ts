import { ref } from "vue"

const debounce = (fn: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}
interface hoverOptionType {
  target: HTMLElement,
  persistent?: boolean,
  isDebounce?: boolean,
  delay?: number | number[] | undefined,
}
// eslint-disable-next-line consistent-return
const useHover = (options: hoverOptionType, fnF: () => void, fnS: () => void) => {

  // const body = document.getElementByI
  const { target, persistent = false, isDebounce = false, delay = 500 } = options
  if (!target) return console.error("Can't find HTMLELEMENT")
  let inDelay; let outDelay;
  const flag = ref(false);

  if (Array.isArray(delay) && delay.length > 1) {
    // eslint-disable-next-line prefer-destructuring,no-sequences
    inDelay = delay[0],
    outDelay = delay[1] || delay[0]
  } else {
    // eslint-disable-next-line no-multi-assign
    inDelay = outDelay = delay as number
  }

  if (isDebounce) {
    // eslint-disable-next-line no-param-reassign
    fnF = debounce(fnF, inDelay)
    // eslint-disable-next-line no-param-reassign
    fnS = debounce(fnS, outDelay)
    target.addEventListener('mousemove', () => {
      flag.value = true
      fnF()
    })
    target.addEventListener('mouseleave', () => {
      flag.value = false
      fnS()
    })
  }
  else if (persistent) {
    target.addEventListener('mousemove', () => {
      flag.value = true
      fnF()
    })
    target.addEventListener('mouseleave', () => {
      flag.value = false
      fnS()
    })
  } else {
    target.addEventListener('mouseenter', () => {
      flag.value = true
      fnF()
    })
    target.addEventListener('mouseleave', () => {
      flag.value = false
      fnS()
    })
  }
  return flag
}

export default useHover