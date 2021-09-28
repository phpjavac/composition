# useClickAway

点击其他元素回调

## 代码演示

### 基础使用

1. 单元素
  
  <button ref="target">我是button</button>
<div>点击了button以外的元素 {{count}} 次</div>

2. 元素数组
  <div v-for="(item,index) in divs" :key="item" :ref="el => { if (el) targets[index] = el}">
第 {{item}} 个元素
</div>
<div>点击了除以上元素以外的元素 {{count2}} 次</div>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useClickAway } from "@lib";

const target = ref<HTMLSpanElement>(null);
const count = ref(0)
useClickAway({
  onClickAway: () => {
    count.value ++
  },
  target
})


const divs = ref([1,2,3])
const targets = ref<HTMLSpanElement[]>([])
const count2 = ref(0)

useClickAway({
  onClickAway: ()=> {
    count2.value ++
  },
  target: targets
})
</script>




## 示例代码
:::tip
该钩子必须在 `setup` 生命周期中运行
:::

```html
<span ref="target"></span>
```

```typescript
import { ref } from "vue";
import { useClickAway } from "zcomposition";

const target = ref<HTMLSpanElement>(null);
useClickAway({
  onClickAway: ()=> {
    console.log('click away')
  },
  target
})
```

### 参数

| 参数       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| onClickAway | 点击回调事件         | (event: MouseEvent \| TouchEvent) => void    | -       |
| target   | 要排除的元素或元素数组          |  HTMLElement \| HTMLElement[]   | -       |
