<template>
  <div>
    <p>comp1</p>
    <button @click="handleEmitClick">触发 test 事件</button>
    <button @click="handleOffClick">移除 test 事件监听</button>
    <button @click="handleRemoveAll">移除所有事件监听</button>
    <div>传递数据：{{ msg }}</div>
    <div>请打开控制台查看 debug 信息</div>
  </div>
  <hr />
</template>
<script lang="ts">
export default { name: 'Comp1' }
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useEventBus } from '@/src'

useEventBus.config({ debug: true }) // 只有首次调用生效
const msg = ref('')
const { emit, on, off, all } = useEventBus<Record<'test', string[]>>()

const handleEmitClick = () => {
  emit('test', ['a', 'b']) // 触发事件
}
const handleOffClick = () => {
  off('test') // 注销事件
}
const handleRemoveAll = () => {
  all.clear() // 移除所有监听事件
}

on('test', (data) => {
  msg.value = data.toString() + ' ' + new Date().valueOf()
})
</script>
