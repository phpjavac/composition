# useFullscreen

将DOM进行全屏显示或关闭全屏显示

## 代码演示

```typescript

<script setup lang='ts'>
import {useFullscreen} from "zcomposition";
import { ref } from 'vue'

const divRef = ref<HTMLElement | null>(null);
const { setFull, exitFull, toggleFull, isFullscreen } = useFullscreen(divRef, { onExitFull: ()=> {console.log('关闭了')}, onFull: () => {console.log('打开了')} })
</script>


```

### 基础使用

  <div>
    <div ref='divRef' style="padding: 16px; background: #fff">
      <div style='width: 200px; height: 200px; background: pink'>
      </div>
        <div>
          是否全屏：{{isFullscreen}} 
        </div>
        <div>
          <button @click='setFull'>setFull</button>
          <button @click='exitFull'>exitFull</button>
          <button @click='toggleFull'>toggleFull</button>
        </div>
    </div>
  </div>

<script setup lang='ts'>
import {useFullscreen} from "zcomposition";
import { ref } from 'vue'

const divRef = ref<HTMLElement | null>(null);
const { setFull, exitFull, toggleFull, isFullscreen } = useFullscreen(divRef, { onExitFull: ()=> {console.log('关闭了')}, onFull: () => {console.log('打开了')} })
</script>


### Api

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| setFull     | 开启全屏           | `() => void` | -                |
| exitFull   | 退出全屏                |  `() => void` | -     |
| toggleFull   | 切换全屏/退出全屏             | `() => void` | -     |
|isFullscreen| 全屏状态| Ref(boolean)| false|

### 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| target     | 目标对象               | `Ref<HTMLElement | null> | HTMLElement` | -   |
| options   | 选项                  | `Object`                 | -     |


#### options

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| onExitFull| 退出全屏时回调函数               | `Function` |   `() => {}`  |
| onFull   | 开启全屏时回调函数                | `Function`                | `() => {}`      |
