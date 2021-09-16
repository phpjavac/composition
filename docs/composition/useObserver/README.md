# useRequest

监听DOM元素是否出现在页面中


## 代码演示

### 基础使用

<template>
<div class="targetWrapper">
    <div ref="targetDom" class="targetDomS"></div>
    <div class='testBlock'>{{finalResult}}</div>
</div>
</template>

<script  lang="ts">
import { defineComponent,ref } from 'vue';
import {useObserver} from 'zcomposition';

export default defineComponent({
    setup() {
        const targetDom = ref();
        const finalResult = useObserver(targetDom);
        return {finalResult,targetDom}
    },
})
</script>
```vue
<template>
<div class="targetWrapper">
    <div ref="targetDom" class="targetDomS"></div>
    <div class='testBlock'>{{finalResult}}</div>
</div>
</template>

<script  lang="ts">
import { defineComponent,ref } from 'vue';
import {useObserver} from 'zcomposition';

export default defineComponent({
    setup() {
        const targetDom = ref();
        const finalResult = useObserver(targetDom);
        return {finalResult,targetDom}
    },
})
</script>

<style lang="stylus" scoped>
.targetWrapper
        width 200%
        height 1000px
    .targetDomS
        width 100px 
        height 100px
        border 1px solid #000 
    .testBlock
        position fixed
        height 100px
        width 100%
</style>
```

## useSize OPTION

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| target     | 目标对象           | `Ref<HTMLElement \| null>` | -                |


## 结果

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| finalResult     | 返回值，是否出现在当前浏览器视窗            | boolean | false