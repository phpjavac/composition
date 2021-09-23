---
category: Browser
---

# 使用剪贴板

反应式 [剪贴板 API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)，提供响应剪贴板命令（剪切、复制和粘贴）以及异步读取和写入系统剪贴板的能力。未经用户许可，对剪贴板内容的访问受 Permissions API 的限制，不允许读取或更改剪贴板内容。

## 基本用法

<script setup lang="ts">
import { ref } from 'vue'
import { usePermission } from '../../../../../../src/usePermission'
import { useClipboard } from '../../../../../../src/useClipboard'
const input = ref('')

const { text, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')
</script>

  <div v-if="isSupported" style="margin-top:10px">
    <note>
      剪贴板权限: 读取 <b>{{ permissionRead==='granted'?'已授权':'被拒绝' }}</b> | 写
      <b>{{ permissionWrite==='granted'?'已授权':'被拒绝' }}</b>
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
import { useClipboard } from 'zcomposition'
const target = ref()
const { text, copy, copied, isSupported } = useClipboard({ target })
```

```html
<button @click='copy'>
  <!-- by default, `copied` will be reset in 1.5s -->
  <span v-if='!copied'>Copy</span>
  <span v-else>Copied!</span>
</button>
```
### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| target | 目标对象	         | (() => HTMLElement) | HTMLElement | React.RefObject	    | -       |
| text   | 剪贴板中的文本          | string   | -       |
| copy   | 复制时的事件          | (text)=>Promise\<void\>   | -       |
