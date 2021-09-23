<!--
 * @Author: your name
 * @Date: 2021-09-23 10:29:06
 * @LastEditTime: 2021-09-23 11:30:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zcomposition\docs\composition\useHover\README.md
-->
# useHover

一个用于追踪 dom 元素是否有鼠标悬停的 Hook。

## 基本用法,传入Dom元素
<script setup lang='ts'>
import { useHover } from "zcomposition";
import { ref, onMounted } from "vue";
 const isHovering = useHover(() => document.getElementById('divRef'));
</script>

<div>
    <div id="divRef"
      style="width: 200px; height: 200px; background:pink"
    >
    </div>isHovering:<span style="color:red"> {{ isHovering }} </span>
</div>

### 代码演示

```vue
<template>
    <div>
    <div id="divRef"
         style="width: 200px; height: 200px; background:pink"
    >
    </div>isHovering:<span style="color: blue"> {{ isHovering }} </span>
</div>
</template>

<script setup lang='ts'>
import {useSize} from "zcomposition";
import { ref, onMounted, reactive, watch } from "vue";
    const isHovering = useHover(() => document.getElementById('divRef'));

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
