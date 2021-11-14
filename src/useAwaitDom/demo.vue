<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import useAwaitDom from '.'

const father = ref(null as HTMLDivElement)
const showDom = ref(false)
const child2 = ref(null as HTMLDivElement)

onMounted(() => {
  setTimeout(() => {
    const child = document.createElement('div')
    child.setAttribute('class', 'border')
    child.setAttribute('id', 'use-await-dom-test')
    child.innerText = '我是dom1的异步子组件'
    father.value.appendChild(child)
    showDom.value = true
  }, 2000)
})

const msg = ref('dom1 加载中...')
const msg2 = ref('dom2 加载中...')

/**
 * 用法1：传入一个dom选择器函数
 */
useAwaitDom({
  // eslint-disable-next-line consistent-return
  domSelector: () => {
    if (document) {
      return document.querySelector('#use-await-dom-test')
    }
  },
}).then((dom) => {
  msg.value = 'dom1 加载完成'
  console.log('async dom1 loaded', dom)
})
/**
 * 用法2: 传入一个ref
 */
useAwaitDom({ domSelector: child2 }).then((dom) => {
  msg2.value = 'dom2 加载完成'
  console.log('async dom2 loaded', dom)
})
</script>
<template>
  <div>
    <div>请打开控制台查看dom</div>
    <div ref="father" class="border">
      <div>{{ msg }}</div>
    </div>
    <div class="border" v-if="showDom" ref="child2">{{ msg2 }}</div>
    <div class="border" v-else>{{ msg2 }}</div>
  </div>
</template>
<style lang="scss" scoped>
.border {
  border: 1px solid var(--c-border);
  padding: 14px;
  margin-top: 2px;
}
</style>
