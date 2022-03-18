/* eslint-disable class-methods-use-this */
import { Ref } from 'vue'

const useFocus = (documentElement: Ref, fn: Function) => {
  const timer = setInterval(() => {
    if(documentElement.value !== undefined) {
      clearInterval(timer);
      documentElement.value.addEventListener('focus', fn);
      documentElement.value.addEventListener('blur', fn);
    } else {
      console.info('null')
    }
  }, 50)
}

export default useFocus;