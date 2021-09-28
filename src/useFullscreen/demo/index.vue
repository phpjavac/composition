<template>
  <div>
    <div ref="divRef" style="padding: 16px; background: #fff">
      <div class="divStyle" ref="divRef1">111~</div>
      <button @click="setFull">setFull</button>
      <button @click="exitFull">exitFull</button>
      <button @click="toggleFull">toggleFull</button>
      <div>
        {{ isFullscreen }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useFullscreen from '../index'

const divRef = ref<HTMLElement | null>(null)
const { setFull, exitFull, toggleFull, isFullscreen } = useFullscreen(divRef)
</script>

<style scoped>
.divStyle {
  width: 200px;
  height: 200px;
  background-color: red;
  display: inline-block;
}
</style>
