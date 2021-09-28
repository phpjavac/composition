# useEffect 无副作用的执行某个函数
参考了React的[useEffect](https://zh-hans.reactjs.org/docs/hooks-effect.html)方法 

:::tip
原版React的useEffect有两个关键点
- 可以选择性的执行一个无副作用的函数
  - 如果不 ```return``` 则表示不需要清除副作用
- 调用函数的机制
  - 初始调用
  - 当依赖项的值发生了变化时，也去触发对应的函数
> 用vue实现该钩子，初版先能够实现第一个关键点: 能够无副作用的执行一个函数

:::

## 代码演示
<script setup lang="ts">
import useEffect from "../../../../../../src/useEffect";
// 需要处理副效应
useEffect(()=>{
    const i = setInterval(()=>{
        console.log('this is interval, when Unmounted I`m destroy');
    }, 2000);
    return () => {
        clearInterval(i);
    }
})
// 不需要处理副效应
useEffect(()=>{
    const ii = setInterval(()=>{
        console.log('I`m interavl, but always')
    }, 2000)
})
</script>
:::tip
请按F12看控制台
:::
### 示例代码
```ts
// 需要处理副效应
useEffect(()=>{
    const i = setInterval(()=>{
        console.log('this is interval, when Unmounted I`m destroy');
    }, 2000);
    return () => {
        clearInterval(i);
    }
})
// 不需要处理副效应
useEffect(()=>{
    const ii = setInterval(()=>{
        console.log('I`m interavl, but always')
    }, 2000)
})
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