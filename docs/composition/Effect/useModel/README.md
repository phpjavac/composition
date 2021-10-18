# useVModel 
动态绑定 props  emit 

## 基础使用
```vue

<script setup lang='ts'>
import { useVmodel } from "@lib";

const props = defineProps({
  example: {
    type: String,
    default: () => "Choice Img",
    required: false,
  },
})
const emits = defineEmits(['exampleEmit'])

const exampleOptions = {
  eventName: 'exampleEmit',
  passive: false,
  deep: false
}

const bindData = useVmodel(props,'example',emit,exampleOptions)

bindData.value = 'test' // emit -> emit('exampleEmit', 'test)

</script>
```
### Type
```ts

type options = {
  eventName: string;  // 事件名称
  passive: boolean;  // 监听方式
  deep: boolean;    // 深度监听
}

export declare function useVModel<
  O extends object,
  K extends keyof P,
  Name extends string
>(
  props: O,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options?: options
): Ref<UnwrapRef<O[K]>> | WritableComputedRef<O[K]>
