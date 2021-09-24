---
category: Browser
---

# 使用许可

响应式 [权限 API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)提供了一些工具，允许开发人员在权限方面实现更好的用户体验。

## 基本用法

<script setup lang="ts">
import { computed, reactive } from 'vue'
import YAML from 'js-yaml'
import { usePermission } from 'zcomposition'

const geolocation = usePermission('geolocation')
const microphone = usePermission('microphone')
const notifications = usePermission('notifications')
const camera = usePermission('camera')
// const midi = usePermission('midi')

const code = computed(() => YAML.dump(reactive({
  geolocation,
  microphone,
  notifications,
  camera,
  // midi,
})))
</script>


<pre>{{ code }}</pre>



## 代码演示

```js
import { computed, reactive } from 'vue'
import YAML from 'js-yaml'
import { usePermission } from 'zcomposition'

const geolocation = usePermission('geolocation')
const microphone = usePermission('microphone')
const notifications = usePermission('notifications')
const camera = usePermission('camera')
// const midi = usePermission('midi')

const code = computed(() => YAML.dump(reactive({
  geolocation,
  microphone,
  notifications,
  camera,
  // midi,
})))
```

### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| geolocation | 地理位置	         | Promise\<PermissionStatus or undefined\> 	    | -       |
| microphone   | 麦克风权限          | Promise\<PermissionStatus or undefined\>    | -       |
| notifications   | 通知权限          | Promise\<PermissionStatus or undefined\>    | -       |
| camera   | 相机权限          | Promise\<PermissionStatus or undefined\>    | -       |
| clipboard-read   | 剪贴板读取权限         | Promise\<PermissionStatus or undefined\>    | -       |
| speaker   | 扬声器权限          | Promise\<PermissionStatus or undefined\>   | -       |