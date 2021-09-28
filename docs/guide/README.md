## 介绍

Vue3的compositionApi库



## 特点

- 易于使用.
- 由 TS 编写，完整的类型推导.

## 安装

```
yarn add zcomposition
```

## 使用

```
import { useRequest } from 'zcomposition';
```

## 按需导入

#### 在babel环境中

1. 下载`babel-plugin-import`
```
npm install babel-plugin-import
```
2.在根目录新建`.babelrc`文件
``` js
// .babelrc
{
    "plugins": [
        ["import", {
            "libraryName": "zcomposition",
            "libraryDirectory": "lib",
            "camel2DashComponentName": false
        }
        ]
    ]
}
```

#### 在vite中

由于vite是默认按需引用的的，所以不需要特殊配置