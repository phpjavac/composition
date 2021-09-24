# useRequest

监听 DOM 元素是否出现在浏览器视窗中

## 代码演示

<div class="targetWrapper">
    <div ref="targetDom" class="targetDomS"></div>
    <div class="finalResultW">
        <span>finalResult:</span>
        <span class='testBlock'>{{finalResult}}</span>
    </div>
</div>

<script setup lang='ts'>
import {ref,watch,onMounted } from 'vue';
import { useObserver } from 'zcomposition';

const targetDom = ref(null);
const finalResult = useObserver(targetDom);

</script>

<style >
.targetWrapper{
        width: 100%;
        height: 300px;
        position:relative;
        }
.targetDomS{
        width: 100px; 
        height: 100px;
        border: 1px solid #000; 
}
.finalResultW{
        position: absolute;
        bottom:0;    
}
.finalResultW span{
        line-height:60px;
        font-size:30px;    
}
.testBlock{      
        height: 80px;
        width: 100px;
        color:red;
        text-align:center;
}
</style>

### 基础使用

```vue
<div class="targetWrapper">
    <div ref="targetDom" class="targetDomS"></div>
    <div class="finalResultW">
        <span>finalResult:</span>
        <span class='testBlock'>{{finalResult}}</span>
    </div>
</div>

<script setup lang='ts'>
import {ref,watch,onMounted } from 'vue';
import { useObserver } from 'zcomposition';

const targetDom = ref(null);
const finalResult = useObserver(targetDom);

</script>

<style >
.targetWrapper{
        width: 100%;
        height: 300px;
        position:relative;
        }
.targetDomS{
        width: 100px; 
        height: 100px;
        border: 1px solid #000; 
}
.finalResultW{
        position: absolute;
        bottom:0;    
}
.finalResultW span{
        line-height:60px;
        font-size:30px;    
}
.testBlock{      
        height: 80px;
        width: 100px;
        color:red;
        text-align:center;
}
</style>
```

## useSize OPTION

| 参数   | 说明     | 类型                       | 默认值 |
| ------ | -------- | -------------------------- | ------ |
| target | 目标对象 | `Ref<HTMLElement \| null>` | -      |

## 结果

| 参数        | 说明                             | 类型    | 默认值 |
| ----------- | -------------------------------- | ------- | ------ |
| finalResult | 返回值，是否出现在当前浏览器视窗 | boolean | false  |
