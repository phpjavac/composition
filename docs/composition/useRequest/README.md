# useRequest

axios 的封装 compositionApi

::: tip
向服务器请求数据时使用。
:::

## 代码演示

### 基础使用


<script setup lang="ts">
import { useRequest, Request } from "zcomposition";

interface Hitokoto {
  from: string;
  hitokoto: string;
  id: number;
  uuid: string;
}
// 设置baseUrl
Request.setOption({ baseURL: "https://v1.hitokoto.cn" });
// 设置请求拦截器
Request.setRequest((config) => {
  config.headers.common.token = sessionStorage.token;
  return config;
});
const { error, loading, response } = useRequest<Hitokoto>({
  url: "/",
  method: "get",
});
</script>

<div>
    <br/>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="loading"> 请求数据中... {{ loading }}</div>
    <div v-else>
        <div>{{ response.hitokoto }} - {{ response.from }}</div>
        <br/>
        <div>请求数据成功</div>
    </div>
</div>


## Request OPTION

:::tip
因为 useRequest 是一个全局单例, 所以你可以在任意一个地方自定义配置:
:::


```typescript
import { useRequest, Request } from "zcomposition";

// 设置baseUrl
Request.setOption({ baseURL: "https://v1.hitokoto.cn/" });

// 设置请求拦截器
Request.setRequest((config) => {
    console.log('请求前处理...')
    return config;
});

//  添加响应拦截器
Request.setResponse(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });


```

### Request Api

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| setOption     | 设置全局option            | `AxiosRequestConfig`对象 | -                |
| setRequest   | 设置请求拦截器                | `(arg0:AxiosRequestConfig)=>AxiosRequestConfig,(arg1)=>any` | -     |
| setResponse   | 设置响应拦截器                | `(arg0:AxiosResponse)=>AxiosResponse,(arg1)=>any` | -     |



## API

```typescript
interface Hitokoto {
  from: string;
  hitokoto: string;
  id: number;
  uuid: string;
}
Request.setOption({ baseURL: "https://v1.hitokoto.cn/" });
const { error, loading, response } = useRequest<Hitokoto>({
  url: "",
  method: "get",
});
```

### 参数

| 参数      | 说明                      | 类型                   | 默认值 |
| -------   | ------------------------- | ---------------------- | ------ |
| error     | 请求错误 对象             | string | -                |
| loading   | 请求状态                  | boolean                 | -     |
| response   | 返回的实体                | any                 | -     |
| Hitokoto   | 返回的实体类型(TS)         | 泛型                 | any     |
