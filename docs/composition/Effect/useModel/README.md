# useVModel 


### 示例代码
```ts
// 需要处理副效应
type options = {
  eventName: string;
  passive: boolean;
  deep: boolean;
}

const data = useVmodel(props,"key",emit,options)

data.value = 'test' // emit -> (eventName,key)
