# useEffect 无副作用的执行某个函数
参考了React的[useEffect](https://zh-hans.reactjs.org/docs/hooks-effect.html)方法 

:::tip
原版React的useEffect有两个关键点
- 可以选择性的执行一个无副作用的函数
  - 如果不 ```return``` 则表示不需要清除副作用
- 调用函数的机制
  - 初始调用
  - 当依赖项的值发生了变化时，也去触发对应的函数
:::

## 代码演示

<div>
    <div>
        <div>普通调用⬇️</div>
        <div>show: {{data.need}}</div>
        <div>show: {{data.dont}}</div>
        <p></p>
        <div>需要监听变量⬇️（打开控制台查看函数执行）</div>
        <div>
            <span>ref:<input type='number' :value='refData' @change='(e) => {refData=e.target.value}' /></span>
            <p></p>
            <span>reactive:<input type='number' :value='reactiveData.a' @change='(e) => {reactiveData.a=e.target.value}' /></span>
        </div>
    </div>
</div>

<script setup lang="ts">
// import { useEffect } from "@lib";
import { useEffect } from "@/src/index.ts";
import { isClient } from '@lib/../src/utils';
import { reactive, ref } from 'vue';
const data = reactive({
    need: 1,
    dont: 1
})
const refData = ref(1)
const reactiveData = reactive({a: 1})
if (isClient) {
    // 需要处理副效应
    useEffect(()=>{
        const i = setInterval(()=>{
            console.log('this is interval, when Unmounted I`m destroy');
            data.need += 1;
        }, 2000);
        return () => {
            clearInterval(i);
        }
    })
    // 不需要处理副效应
    useEffect(()=>{
        const ii = setInterval(()=>{
            console.log('I`m interavl, but always')
            data.dont += 1;
        }, 2000)
    })
    // 需要监听变量并重新执行函数
    useEffect(()=>{
        console.log('需要监听变量并重新执行函数', refData.value, reactiveData.a)
    }, [refData, reactiveData])
}
</script>

### 示例代码
```ts
// 需要处理副效应
useEffect(()=>{
    const i = setInterval(()=>{
        // console.log('this is interval, when Unmounted I`m destroy');
        data.need += 1;
    }, 2000);
    return () => {
        clearInterval(i);
    }
})
// 不需要处理副效应
useEffect(()=>{
    const ii = setInterval(()=>{
        console.log('I`m interavl, but always')
        data.dont += 1;
    }, 2000)
})
// 需要监听变量并重新执行函数
useEffect(()=>{
    console.log('需要监听变量并重新执行函数', refData.value, reactiveData.a)
}, [refData, reactiveData])
```

## Interface
```ts
type UseEffectVoid = () => void; // 不需要处理副效应
type UseEffectFunVoid = () => () => void; // 需要处理副效应
```

## Option
| 参数       | 说明                 | 类型         | 默认值  |
|------------|------------|------------|------------|
| method     | 需要执行的函数(如果需要清除副效应，则在要执行的函数中return一个函数，并在函数中清除副效应) | UseEffectVoid / UseEffectFunVoid | - |
| needWatch  | 需要监听变化的变量数组，发生变化时出发method函数 | ref或reactive包裹变量的Array | - |