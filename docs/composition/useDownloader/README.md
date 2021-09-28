# useDownloader

文件下载器

## 代码演示

### 基础使用

<button @click="handleDownload">点击下载文件</button>

<script setup lang="ts">
import { ref } from 'vue'
import { useDownloader } from "../../../../../../src";

const handleDownload = () => {
  useDownloader({url: "https://file-examples-com.github.io/uploads/2018/04/file_example_AVI_480_750kB.avi"})
}
</script>


## 示例代码

```typescript
import { useDownloader } from "@lib";

const handleDownload = () => {
  // 默认会从url中提取文件名
  useDownloader({url: "https://file-examples-com.github.io/uploads/2018/04/file_example_AVI_480_750kB.avi"})
}
```

### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| url        | 文件链接             | `string`    | -       |
| filename   | 要保存的文件名        | `string`   | -       |
