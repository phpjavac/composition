<!--
 * @Author: your name
 * @Date: 2021-09-23 10:13:49
 * @LastEditTime: 2021-09-23 13:58:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \zcomposition\src\useHover\demo\index.vue
-->
<template>
  <div>
    <div
      ref="divRef"
      style="width: 200px; height: 200px; background: rgba(0, 0, 0, 0.2)"
    ></div>

    isHovering: <span style="color: blue">{{ isHovering }}</span>
  </div>
</template>

<script lang="ts">
import { useHover } from '../index';
import {ref} from 'vue'
export default {
  setup() {
    const divRef = ref()
    const isHovering = useHover(() => divRef.value);
    return {
      isHovering,
      divRef
    };
  },
};
</script>