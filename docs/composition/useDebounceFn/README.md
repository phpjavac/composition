# useDebounceFn

防抖

### 代码演示

## 基础使用

<script setup lang='ts'>
import { useDebounceFn } from "zcomposition";
import { ref, onMounted, reactive, watch } from "vue";

const count = ref(0)
const fn = () => {
    count.value++;
}

const {run, cancel, flush} = useDebounceFn(fn, {wait: 1000,})

</script>

<div>
    <div>
        count:{{count}}
    </div>
    <button @click='run'>点击</button>
    <button @click='flush'>立即执行</button>
    <button @click='cancel'>取消</button>
</div>

## 示例代码

```vue
<script setup lang='ts'>
import { useDebounceFn } from "zcomposition";
import { ref, onMounted, reactive, watch } from "vue";

const count = ref(0)
const fn = () => {
    count.value++;
}

const {run, cancel, flush} = useDebounceFn(fn, {wait: 1000})

</script>

<div>
    <div>
        count:{{count}}
    </div>
    <button @click='run'>点击</button>
    <button @click='flush'>立即执行</button>
    <button @click='cancel'>取消</button>
</div>
```

## 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| fn     | 目标函数           | `() => viod` | -                |
| options     | 选项             | `Function` | -                |

## options

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| wait    | 超时时间，单位为毫秒            | `number` | 1000     |
| leading    | 是否在上升沿触发副作用函数         | `boolean` | `false`     |
| trailing    | 是否在下降沿触发副作用函数        | `boolean` | `true`    |

## Result

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| run    | 触发执行 fn，函数参数将会传递给 fn     | `()=> viod)` | -    |
| cancel    | 取消当前防抖         | `() => void` | -     |
| flush    | 当前防抖立即调用        | `() => void` | -   |




