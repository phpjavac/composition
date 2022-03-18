# useFocus

校验输入框聚焦及失焦事件

## 基本用法,传入Dom元素
<script setup lang='ts'>
import { useFocus } from "@lib";
import { ref } from "vue";   

const domRef = ref<HTMLElement>();
const status = ref(false);

useFocus(domRef, (event: FocusEvent) => {
  if(event.type === 'focus') {
    status.value = true;
  } else {
    status.value = false;
  }
})
</script>

<div>
  <input type="text" ref="domRef" />
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
import { ref } from "vue";   

const domRef = ref<HTMLElement>();
const status = ref(false);

useFocus(domRef, (event: FocusEvent) => {
  if(event.type === 'focus') {
    status.value = true;
  } else {
    status.value = false;
  }
})
</script>

```

## 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| element   | 需要焦点事件的dom元素 | HTMLElement | null
| callback   | 回调函数 | Function | function() {}
