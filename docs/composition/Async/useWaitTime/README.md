# useWaitTime

异步函数执行后，大于某个时间执行另一个函数

:::tip
常见场景
> 页面loading：接口请求时间太快，loading状态只显示了一瞬间，使用该函数可以设置一个最小时间，等待满足最小时间后，再关闭loading
:::

## 代码演示

### 基础使用

<script setup lang="ts">
import { useAsync, useWaitTime } from "@lib";
import { ref } from 'vue';
import axios from "axios";

const loading = ref(false);
const minTime = ref(1000);
const msg = ref('');

const handleClick = () => {
    useWaitTime(async () => {
        loading.value = true;
        const { data } = await axios.get("https://v1.hitokoto.cn");
        msg.value = data.hitokoto;
        console.log(data, 'data')
    },
    minTime.value,
    () => {
        loading.value = false;
    })
}

</script>

<div>
    <span>当满足最小执行时间：</span><input type='number' :value='minTime' @change='(e) => {minTime=e.target.value}' /><span>后，关闭loading</span>
    <br />
    <br />
    <div>当前loading状态：{{ loading }}</div>
    <br />
    <div>接口返回： {{ msg }}</div>
    <br />
    <button @click='handleClick'>执行函数</button>
</div>

### 示例代码

```ts
import { useWaitTime } from "zcomposition";
import { ref } from 'vue';
import axios from "axios";

const loading = ref(false);
const minTime = ref(1000);
const msg = ref('');
const handleClick = () => {
    useWaitTime(async () => {
        loading.value = true;
        const { data } = await axios.get("https://v1.hitokoto.cn");
        msg.value = data.hitokoto;
        console.log(data, 'data')
    },
    minTime.value,
    () => {
        loading.value = false;
    })
}
```
```html
<div>
    <span>当满足最小执行时间：</span><input type='number' v-model:value='minTime' /><span>后，关闭loading</span>
    <br />
    <br />
    <div>当前loading状态：{{ loading }}</div>
    <br />
    <div>接口返回： {{ msg }}</div>
    <br />
    <button @click='handleClick'>执行函数</button>
</div>
```

## Option
| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | -------                 | -------            | ------ |
| funAsync     | 异步函数             | () => void | -  |
| time   | 最小等待时间                  | number | -     |
| funThen   | 满足最小等待时间后执行的函数  | () => void | -     |