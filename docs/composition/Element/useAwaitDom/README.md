# useAwaitDom

等待dom出现然后执行...

## 代码演示

<useAwaitDomDemo />

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useAwaitDomDemo from '@/src/useAwaitDom/demo.vue'
</script>

### 基础使用

@[code](@/src/useAwaitDom/demo.vue)

### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| domSelector | dom 选择器函数或ref         | () => HTMLElement\|Ref    | -       |
| maxWait   | 最大等待时间(单位:ms)         |  number   | -       |
