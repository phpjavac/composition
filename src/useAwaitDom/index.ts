import { clearInterval, setInterval } from 'timers-browserify'
import { isFunction } from 'lodash'
import { Ref, isRef } from 'vue'

interface IUseAwaitDomOptions {
  /**
   * dom 获取器
   */
  domSelector: (() => HTMLElement | null) | Ref<HTMLElement | null>
  /**
   * 最大等待时间（单位：ms）
   */
  maxWait?: number
}

/**
 * 等待dom出现然后执行...
 * @param param0 IUseAwaitDomOptions
 * @returns Promise
 */
const useAwaitDom = ({
  domSelector,
  maxWait = 1000 * 8,
}: IUseAwaitDomOptions) => {
  let domWatch
  return new Promise<Ref<HTMLElement> | HTMLElement>((resolve, reject) => {
    let count = 0;
    setInterval(() => {
      if (isRef(domSelector) && domSelector.value) {
        clearInterval(domWatch)
        resolve(domSelector)
      } else if (isFunction(domSelector) && domSelector()) {
        clearInterval(domWatch)
        resolve(domSelector())
      } else {
        count += 200
        if (count >= maxWait) {
          clearInterval(domWatch)
          reject(new Error('Await Dom Timeout.'))
        }
      }
    }, 200)
  })
}

export default useAwaitDom
