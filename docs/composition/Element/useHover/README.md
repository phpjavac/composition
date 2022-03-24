# useHover

一个用于追踪 dom 元素是否有鼠标悬停的 Hook。

## 基本用法,传入Dom元素
<script setup lang='ts'>
import { useHover } from "@lib";
import { ref, onMounted } from "vue";   
 const divRef = ref()
 const isHovering = ref(false) as boolean
 onMounted(() => {
     isHovering.value = useHover( {target: divRef.value}, () => console.log('移入'), () =>console.log('移出'));
 })
</script>

<div>
    <div ref="divRef"
      style="width: 200px; height: 200px; background:pink"
    ></div>
    isHovering:<span style="color:red"> {{ isHovering }} </span>
</div>

### 代码演示

```vue
<template>
    <div>
        <div ref="divRef"
        style="width: 200px; height: 200px; background:pink"
        ></div>
        isHovering:<span style="color:red"> {{ isHovering }} </span>
    </div>
</template>

<script setup lang='ts'>
import { useHover } from "zcomposition";
import { ref, onMounted } from "vue";   
 const divRef = ref()
 const isHovering = ref(false) as boolean
 onMounted(() => {
     isHovering.value = useHover( {target: divRef.value}, () => console.log('移入'), () =>console.log('移出'));
 })
</script>

```

## useHover OPTION

| 参数       | 说明                      | 类型                   |
| -------    | ------------------------- | ---------------------- | 
| isHovering |判断鼠标元素是否处于 hover 元素 | boolean |

## 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| target     |DOM 节点或者 Ref 对象| (() => HTMLElement) HTMLElement React.RefObject | -- |
| onEnter | 监听进入 hover	| ()=>void |  -- |
| onLeave | 监听离开 hover  | ()=>void |  --|   
