<template>
  <div>
    <p>
      子组件1使用全局store： <button @click="store.counter++">counter++</button>
    </p>
    <p>counter:{{ store.counter }}</p>
    <hr />
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/src'
type S = {
  counter: number
}
const store = useGlobalStore<S>()
</script>
