# useFocus

校验输入框聚焦及失焦事件

## 基本用法--页面挂载完毕后传入Dom元素(单Dom/Dom列表)

<script setup lang='ts'>
import { useFocus } from "@lib";
import { ref, onMounted } from "vue";   

const domRef = ref<HTMLElement>();
const domRef2 = ref<HTMLElement>();
const status = ref(false);

onMounted(() => {
  useFocus([domRef2.value, domRef.value], (event: FocusEvent) => {
    console.info(event.target)
    if(event.type === 'focus') {
      status.value = true;
    } else {
      status.value = false;
    }
  })
})
</script>

<div>
  <input type="text" ref="domRef" /><br /><br />
  <textarea type="text" ref="domRef2"></textarea>
  <span>状态：{{ status }} </span>
</div>

### 代码演示

```vue
<template>
  <div>
    <input type="text" ref="domRef" />
    <span>状态：{{ status }} </span>
  </div>
</template>

<script setup lang='ts'>
import { useFocus } from "@lib";
import { ref, onMounted } from "vue";   

const domRef = ref<HTMLElement>();
const domRef2 = ref<HTMLElement>();
const status = ref(false);

onMounted(() => {
  useFocus([domRef2.value, domRef.value], (event: FocusEvent) => {
    if(event.type === 'focus') {
      status.value = true;
    } else {
      status.value = false;
    }
  })
})
</script>

```

## 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| element   | 需要焦点事件的dom元素 | HTMLElement | null
| callback   | 回调函数 | Function | function() {}
