<template>
  <div class="wrap">
    <div>
      <p>这是父组件：<button @click="store.counter++">counter++</button></p>
      <p>counter：{{ store.counter }}</p>
      <hr />
    </div>
    <div>
      <comp1 />
      <comp2 />
    </div>
  </div>
</template>
<script lang="ts" setup>
import comp1 from './useGlobalStore/demo1.vue'
import comp2 from './useGlobalStore/demo2.vue'
import { useGlobalStore } from '@/src'
/**
 * 初始化仓库数据
 */
const store = useGlobalStore({
  counter: 0,
})
</script>
<style scoped>
.wrap {
  margin-top: 20px;
  border: 1px solid var(--c-border);
  padding: 14px;
}
</style>
