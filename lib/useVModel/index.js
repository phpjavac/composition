import { ref, watch, unref, computed, effectScope, onUnmounted } from "vue";
export default function useVModel(props, key, emit, options = {
  passive: true,
  deep: true
}) {
  let { eventName } = options;
  const { passive, deep } = options;
  eventName = eventName != null ? eventName : `update:${key}`;
  if (passive) {
    const effect = effectScope();
    const model = ref(props[key]);
    effect.run(() => {
      watch(() => props[key], (value) => {
        model.value = value;
      }, { deep });
      watch(() => unref(model), (value) => {
        if (value !== props[key] || deep) {
          emit(eventName, value);
        }
      });
    });
    onUnmounted(() => {
      effect.stop();
    });
    return model;
  }
  return computed({
    get() {
      return props[key];
    },
    set(value) {
      emit(eventName, value);
    }
  });
}
