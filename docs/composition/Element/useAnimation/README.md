# useAnimation

动画

## 基本用法
<script setup lang='ts'>
import { useAnimation } from "@lib";
import { ref, onMounted } from "vue";
 const divRef = ref<null | HTMLElement>(null);
 const divRef2 = ref<null | HTMLElement>(null);
 const divRef3 = ref<null | HTMLElement>(null);
 const y = () =>{
    return 70;
 }
 const completeHandler = () =>{
     alert("动画已结束")
 }
 const tween = ref()
 const tween2 = ref()
 onMounted(()=>{
     tween.value=useAnimation(() =>[divRef.value,divRef2.value],{xMove:200,scale:0.5,rotation:180,repeat:0,duration:5,borderRadius:'50%',onComplete:completeHandler,alpha:0.5,paused:true});  
     tween2.value=useAnimation(() =>divRef3.value,{yMove:y,scale:0.5,rotation:180,repeat:1,duration:5,borderRadius:'50%',alpha:0.5,paused:true,backgroundColor:"#3FBFBF",yoyo:true});
 })
  const play = () =>{
    tween.value.play();
    tween2.value.play();
  }
  const pause = () =>{
    tween.value.pause();
    tween2.value.pause();
  }
  const resume = () =>{
    tween.value.resume();
    tween2.value.resume();
  }
  const restart = () =>{
    tween.value.restart();
    tween2.value.restart();
  }
</script>

<div>
    <div ref="divRef"
      style="width: 100px; height: 100px; background:pink"
    >
    </div>
    <div ref="divRef2"
      style="width: 100px; height: 100px; background:orange"
    >
    </div>
     <div ref="divRef3"
      style="width: 100px; height: 100px; background:#7A0CE8"
    >
    </div>
    <div style="margin-top:55px">
        <button @click="play">开始</button>
        <button @click="pause">暂停</button>
        <button @click="resume">继续</button>
        <button @click="restart">重新开始</button>
    </div>
    
</div>

### 代码演示
```vue
<template>
   <div ref="divRef" style="width: 100px; height: 100px; background:pink"></div>
   <div ref="divRef2" style="width: 100px; height: 100px; background:orange"></div>
   <div ref="divRef3" style="width: 100px; height: 100px; background:#7A0CE8"></div>
   <div style="margin-top:55px">
        <button @click="play">开始</button>
        <button @click="pause">暂停</button>
        <button @click="resume">继续</button>
        <button @click="restart">重新开始</button>
    </div>
</template>
<script setup lang='ts'>
import { useAnimation } from "zcomposition";
import { ref } from "vue";
    const divRef = ref<null | HTMLInputElement>(null);
    const divRef2 = ref<null | HTMLInputElement>(null);
    const divRef3 = ref<null | HTMLInputElement>(null);
    const tween = ref()
    const tween2 = ref()
    const y = () =>{
        return 70;
    }
    const completeHandler = () =>{
        alert("动画已结束")
    }
    onMounted(()=>{
     tween.value=useAnimation(() =>[divRef.value,divRef2.value],{xMove:200,scale:0.5,rotation:180,repeat:0,duration:5,borderRadius:'50%',onComplete:completeHandler,alpha:0.5,paused:true});    
     tween2.value=useAnimation(() =>divRef3.value,{yMove:y,scale:0.5,rotation:180,repeat:0,duration:5,borderRadius:'50%',alpha:0.5,paused:true,backgroundColor:"#C14242",yoyo:true});
})
    const play = () =>{
        tween.value.play();
        tween2.value.play();
    }
    const pause = () =>{
        tween.value.pause();
        tween2.value.pause();
    }
    const resume = () =>{
        tween.value.resume();
        tween2.value.resume();
    }
    const restart = () =>{
        tween.value.restart();
        tween2.value.restart();
    }
</script>

```
## useAnimation OPTION

| 参数       | 说明                      | 类型                   |
| -------    | ------------------------- | ---------------------- | 
| tween.play() |开始 | ()=>void |
| tween.pause() |暂停 | ()=>void |
| tween.resume() |继续播放 | ()=>void |
| tween.restart() |重新开始 | ()=>void |

## 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| target     |DOM 节点或者 Ref 数组| divRef.value - [divRef.value,divRef2.value] | -- |
| xMove | x轴移动| number或者()=>number |  -- |
| yMove | y轴移动 | number或者()=>number |  --|   
| rotation | 旋转| number|  -- |
| scale | 规模 | number |  --|   
| repeat | 动画次数| number |  0是执行一次动画,1是执行2次动画以此类推(-1是无限循环动画) |
| duration | 动画执行完的时间 | number|  1|   
| borderRadius | 动画变形 | string |  --|   
| onComplete | 动画执行后的回调 | ()=>void|  --|  
| alpha | 动画透明度 | number |  --|   
| paused | 动画是否暂停 | boolean| true|  
| backgroundColor | 动画变化颜色 | string| --| :true
| yoyo | 动画是否反复往返进行 | boolean| false(动画往返必须给repeat设置参数)| 
| startAt | 设置动画属性开始时的值 | Object| --| 