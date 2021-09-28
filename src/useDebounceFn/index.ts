import { ref, Ref, onUnmounted } from 'vue'
import debounce from 'lodash/debounce'

// eslint-disable-next-line no-unused-vars
type Fn = (...args: any) => any

interface DebounceOptions {
  wait: number
  leading: boolean
  traling: boolean
}

function useDebounceFn<T extends Fn>(
  Fnn: T,
  options?: DebounceOptions
): { run: () => void; cancel: () => void; flush: () => void } {
  if (!Fnn && typeof Fnn !== 'function') {
    return {
      run: ()=>{},
      cancel: ()=>{},
      flush: ()=>{},
    }
  }
  const fn: Ref<T> = ref(null)
  fn.value = Fnn
  const debounced = debounce<T>(
    fn.value,
    options?.wait ? options?.wait : 1000,
    options
  )
  onUnmounted(() => {
    debounced.cancel()
  })
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  }
}
// useDebounceFn(()=>{console.log('ddd');return 2}, {wait:1,leading:false,traling:false})

export default useDebounceFn
