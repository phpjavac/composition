---
category: Browser
---

# 使用剪贴板

响应式 [剪贴板 API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)，提供响应剪贴板命令（剪切、复制和粘贴）以及异步读取和写入系统剪贴板的能力。未经用户许可，对剪贴板内容的访问受 Permissions API 的限制，不允许读取或更改剪贴板内容。

## 基本用法

<script setup lang="ts">
import { ref } from 'vue'
import { usePermission } from '@lib'
import { useClipboard } from '@lib'
const input = ref('')

const { text, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')
</script>

  <div v-if="isSupported" style="margin-top:10px">
    <note>
      剪贴板权限: 读取 <b>{{ permissionRead }}</b> | 写
      <b>{{ permissionWrite }}</b>
    </note>
    <p>
      当前复制: <code>{{ text || 'none' }}</code>
    </p>
    <input v-model="input" type="text">
    <button @click="copy(input)">
      Copy
    </button>
  </div>
  <p v-else>
    Your browser does not support Clipboard API
  </p>

## 代码演示

```js
import { ref } from 'vue'
import { usePermission } from 'zcomposition'
import { useClipboard } from 'zcomposition'
const input = ref('')

const { text, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')
```

```html
  <div v-if="isSupported" style="margin-top:10px">
    <note>
      剪贴板权限: 读取 <b>{{ permissionRead }}</b> | 写
      <b>{{ permissionWrite }}</b>
    </note>
    <p>
      当前复制: <code>{{ text || 'none' }}</code>
    </p>
    <input v-model="input" type="text">
    <button @click="copy(input)">
      Copy
    </button>
  </div>
  <p v-else>
    Your browser does not support Clipboard API
  </p>
```
### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| text | 剪贴板中的文本	         | ComputedRef\<string\>  | 	    | -       |
| copied   | 复制状态          |  ComputedRef\<boolean\>   | -       |
| copy   | 复制事件          | (text)=>Promise\<void\>   | -       |
| isSupported   | 判断当前节点是否支持某个特性          | boolean   | -       |
