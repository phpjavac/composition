<template>
  <p>
    子组件2使用全局store： <button @click="store.counter++">counter++</button>
  </p>
  <p>counter：{{ store.counter }}</p>
  <hr />
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/src'
type S = {
  counter: number
}
const store = useGlobalStore<S>()
</script>
