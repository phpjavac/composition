# 监听键盘事件
设置需要监听的键码，当按下对应键时，触发函数

::: tip
事件支持支持keyup、keydown、keypress事件

[KeyboardEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key)

[特殊键](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values)
:::

## 代码演示

<div>
    <br/>
    <span>这里是你按下的键盘——包含了白名单({{whiteKeys}})：{{keys.whiteKey}}</span>
    <br/>
    <span>无白名单：{{keys.allKey}}</span>
</div>

<script setup lang="ts">
import { reactive } from 'vue'
import { useKeyPress } from "@lib";
import { isClient } from '@lib/../src/utils';

const whiteKeys = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT'];
const keys = reactive({
    whiteKey: '',
    allKey: '',
})
if (isClient) {
    useKeyPress(
        whiteKeys, 
        (event: KeyboardEvent)=>{
            keys.whiteKey = event.key;
        }
    );
    useKeyPress(
        true,
        (event: KeyboardEvent) => {
            console.log('无白名单', event);
            keys.allKey = event.key;
        }
    )
}
</script>

## 示例代码
```html
<div>
    <br/>
    <span>这里是你按下的键盘——包含了白名单({{whiteKeys}})：{{keys.whiteKey}}</span>
    <br/>
    <span>无白名单：{{keys.allKey}}</span>
</div>
```

```ts

<script setup lang="ts">
import { reactive } from 'vue'
import { useKeyPress } from "zcomposition";

const whiteKeys = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT'];
const keys = reactive({
    whiteKey: '',
    allKey: '',
})
useKeyPress(
    whiteKeys, 
    (event: KeyboardEvent)=>{
        keys.whiteKey = event.key;
    }
);
useKeyPress(
    true,
    (event: KeyboardEvent) => {
        console.log('无白名单', event);
        keys.allKey = event.key;
    }
)
</script>
```

## Interface
```ts
// 键码
type KeyType = KeyboardEvent['key'] | KeyboardEvent['key'][];
// 触发类型
type keyEvent = 'keydown' | 'keyup' | 'keypress';
// 执行的函数类型
type EventMethod = (event?: KeyboardEvent) => void;
// option选项
interface EventOption {
    events?: Array<keyEvent>,
}

```
## Option
| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| keyCode  | 要监听的key/是否全部监听      | KeyType / true | -    |
| method   | 要执行的方法                  | EventMethod  | -     |
| option   | 配置项                       | EventOption | {event: ['keydown']}     |
