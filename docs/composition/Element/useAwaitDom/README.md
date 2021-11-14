# useAwaitDom

等待dom出现然后执行...

## 代码演示
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
const dynamicComponent = ref(null);
onMounted(()=>{
        import('@/src/useAwaitDom/demo.vue').then(module => {
      this.dynamicComponent = "useAwaitDomDemo"
    })
}) 
</script>

### 基础使用

<!-- @[code](@/src/useAwaitDom/demo.vue) -->

### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| domSelector | dom 选择器函数或ref         | () => HTMLElement\|Ref    | -       |
| maxWait   | 最大等待时间(单位:ms)         |  number   | -       |
