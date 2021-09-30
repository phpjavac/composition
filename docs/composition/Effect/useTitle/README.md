---
category: Browser
---

# 使用许可

响应式文档标题

## 基本用法

<script setup lang="ts">
import { useTitle } from '@lib'

const title = useTitle(null)
</script>

<div style="margin-top:10px">
  <div>Title</div>
  <input style="margin-left:10px" v-model="title" type="text" />
</div>



## 代码演示

```ts
<script setup lang="ts">
import { useTitle } from 'zcomposition'

const title = useTitle(null)
</script>
```

```html
<div>Title</div>
<input v-model="title" type="text">
```

### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| newTitle | 页面标题	         | MaybeRef<string｜null｜undefined> | -       |