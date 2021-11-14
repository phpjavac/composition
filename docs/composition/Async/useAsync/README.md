# useAsync

讲异步函数转换为同步

::: tip
需要异步代码转同步时使用
:::

## 代码演示

### 基础使用


<script setup lang="ts">
import { useAsync } from "@lib";
import axios, { AxiosResponse } from "axios"

interface Hitokoto {
  from: string;
  hitokoto: string;
  id: number;
  uuid: string;
}

const getInfo = async () => {
    return await axios.get("https://v1.hitokoto.cn")
}

const { error, loading, response } = useAsync<AxiosResponse<Hitokoto>>(getInfo,()=>{ console.log('promise状态改变') });
console.log({ error, loading, response })
</script>

<div>
    <br/>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="loading"> 请求数据中... {{ loading }}</div>
    <div v-else>
        <div>{{ response.data.hitokoto }} - {{ response.data.from }}</div>
        <br/>
        <div>请求数据成功</div>
    </div>
</div>


## OPTION

```typescript

import { useAsync } from "@lib";
import axios, { AxiosResponse } from "axios"

interface Hitokoto {
  from: string;
  hitokoto: string;
  id: number;
  uuid: string;
}

const getInfo = async () => {
    return await axios.get("https://v1.hitokoto.cn")
}

const { error, loading, response } = useAsync<AxiosResponse<Hitokoto>>(getInfo,()=>{ console.log('promise状态改变') });
console.log({ error, loading, response })
</script>

<div>
    <br/>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="loading"> 请求数据中... {{ loading }}</div>
    <div v-else>
        <div>{{ response.data.hitokoto }} - {{ response.data.from }}</div>
        <br/>
        <div>请求数据成功</div>
    </div>
</div>


```


## API

```typescript
const getInfo = async () => {
    return await axios.get("https://v1.hitokoto.cn")
}

const { error, loading, response } = useAsync<AxiosResponse<Hitokoto>>(getInfo,()=>{ console.log('promise状态改变') });
```

### 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| error     | 请求错误 对象             | string | -                |
| loading   | 请求状态                  | boolean                 | -     |
| response   | 返回的实体                | any                 | -     |
| Hitokoto   | 返回的实体类型(TS)         | 泛型                 | any     |
