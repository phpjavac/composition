# useSize

监听DOM尺寸的变化。

## 代码演示

### 基础使用

<script setup lang='ts'>
import { useSize } from "@lib";
import { ref, onMounted, reactive, watch } from "vue";

const divRef = ref<HTMLElement | null>(null);
const size = ref<{ width: number, height: number }>({ width: 0, height: 0 })

onMounted(() => {
    size.value = useSize(divRef, () => console.log(1));
})

</script>

<div>
    <div ref="divRef" style="display: inline-block;">
        <textarea></textarea>
    </div>
    <div>
        <span>宽：</span>
        <span>{{ size.width }}</span>
        <span>高：</span>
        <span>{{ size.height }}</span>
    </div>
</div>


### 示例代码


```vue
<template>
    <div>
        <div ref="divRef" style="display: inline-block;">
            <textarea></textarea>
        </div>
        <div>
            <span>宽：</span>
            <span>{{ size.width }}</span>
            <span>高：</span>
            <span>{{ size.height }}</span>
        </div>
    </div>
</template>

<script setup lang='ts'>
import {useSize} from "zcomposition";
import { ref, onMounted, reactive, watch } from "vue";

const divRef = ref<HTMLElement | null>(null);

const size = ref<{ width: number, height: number }>({ width: 0, height: 0 })
size.value = useSize(divRef, () => console.log(1));
</script>
```

## 参数

| 参数      | 说明                      | 类型                   | s默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| target     | 目标对象           | `Ref<HTMLElement \| null>` | -                |
| callback     | 尺寸改变后的回调函数             | `Function` | -                |

## Result

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| size     | 返回值，对象当前尺寸             | `{width: number,height: number}` | -                |


