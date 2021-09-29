# useEventBus

事件总线

## 代码演示

### 基础使用


<div>
  <button @click="handleEmitClick">触发 test 事件</button>
  <button @click="handleOffClick">移除 test 事件监听</button>
  <button @click="handleRemoveAll">移除所有事件监听</button>
  <div>传递数据：{{ msg }}</div>
  <div>请打开控制台查看 debug 信息</div>
</div>

<script lang="ts">
export default {name: 'EventBusComp1'}
</script>

<script setup lang="ts">
import {ref} from 'vue'
import { useEventBus } from '../../../../../../../src'

useEventBus.config({ debug: true }) // 只有首次调用生效
const msg = ref('')
const { emit, on, off, all } = useEventBus<Record<'test', (a: string, b: string) =>void>>()

const handleEmitClick = () => {
  emit('test', 'a', 'b') // 触发事件
}
const handleOffClick = () => {
  off('test') // 注销事件
}
const handleRemoveAll = () => {
  all.clear() // 移除所有监听事件
}

on('test', (data) => {
  msg.value = data.toString() +' '+ new Date().valueOf()
})
</script>

### 示例代码

```typescript
import { ref } from 'vue'
import { useEventBus } from '@lib'

useEventBus.config({ debug: true }) // 只有首次调用生效
const msg = ref('')
const { emit, on, off, all } = useEventBus<Record<'test', (a: string, b: string) =>void>>()

const handleEmitClick = () => {
  emit('test', 'a', 'b') // 触发事件
}
const handleOffClick = () => {
  off('test') // 注销事件
}
const handleRemoveAll = () => {
  all.clear() // 移除所有监听事件
}

on('test', (data) => {
  msg.value = data.toString() +' '+ new Date().valueOf()
})
```

### 参数

| 接口       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| config()     | 配置函数             | { debug: boolean }    | -       |
|  on()  |       监听事件函数   | [string, () => void]       | - |
| emit() | 提交事件函数 | [string, unknow] | - |
| off() | 注销监听函数 | string | -|
| all | 全局的事件监听 Map 对象| Map | - |