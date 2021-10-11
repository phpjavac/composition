# useEventBus

事件总线

## 代码演示

### 基础使用

<UseEventBus/>

### 示例代码

#### comp1
@[code](@/docs/.vuepress/components/useEventBus/demo1.vue)
#### comp2
@[code](@/docs/.vuepress/components/useEventBus/demo2.vue)
#### parent
@[code](@/docs/.vuepress/components/UseEventBus.vue)

### 参数

| 接口       | 说明                 | 类型         | 默认值  |
| -------    | ------------------- | ----------- | ------ |
| config()     | 配置函数             | { debug: boolean }    | -       |
|  on()  |       监听事件函数   | [string, () => void]       | - |
| emit() | 提交事件函数 | [string, unknow] | - |
| off() | 注销监听函数 | string | -|
| all | 全局的事件监听 Map 对象| Map | - |


### 源码展示

@[code](@/src/useEventBus/index.ts)