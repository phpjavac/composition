import { ref, watch,unref,computed, UnwrapRef, effectScope, onUnmounted } from 'vue'
import{ VModelOptions } from './type'

export default function useVModel<O extends object, K extends keyof O, Name extends String> (
  props: O,
  key: K,
  emit: () => void,
  options: VModelOptions = {
    passive: true,
    deep: true
  }
) {
  let { eventName  } = options;
  const { passive, deep } = options;
  eventName = eventName ?? `update:${key}`

  if(passive) {
    const effect = effectScope()
    const model = ref<O[K]>(props[key])
    effect.run (() => {
      watch(
        () => props[key],
        (value) => {
          model.value = value as UnwrapRef<O[K]>;
        },
        { deep },
      )
      watch(
        () => unref(model),
        (value) => {
          if(value !== props[key] || deep) {
            emit(eventName as unknown as  Name, value)
          }
        } 
      )
    })
    onUnmounted(() => {
      effect.stop();
    });
    return model
  } 
  return computed<O[K]>({
    get() {
      return props[key]
    },
    set(value) {
      emit(eventName as unknown as Name, value)
    }
  })
    
}