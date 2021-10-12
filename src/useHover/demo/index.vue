<template>
  <div>
    <div
      ref="divRef"
      style="width: 200px; height: 200px; background: rgba(0, 0, 0, 0.2)"
    ></div>

    isHovering: <span style="color: blue">{{ isHovering }}</span>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import useHover from '../index'

export default {
  setup() {
    const divRef = ref()
    const isHovering = useHover(() => divRef.value)
    return {
      isHovering,
      divRef,
    }
  },
}
</script>
