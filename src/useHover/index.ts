
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
      fnF()
    })
    target.addEventListener('mouseleave', () => {
      fnS()
    })
  }
  else if (persistent) {
    target.addEventListener('mousemove', () => {
      fnF()
    })
    target.addEventListener('mouseleave', () => {
      fnS()
    })
  } else {
    target.addEventListener('mouseenter', () => {
      fnF()
    })
    target.addEventListener('mouseleave', () => {
      fnS()
    })
  }

}

export default useHover