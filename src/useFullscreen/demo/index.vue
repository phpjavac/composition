<template>
  <div>
    <div ref='divRef' class="divStyle">
      111~
    </div>
    <button @click='full'>点击</button>
  </div>
</template>

<script setup lang='ts'>
import useFullscreen from "../index";
import { ref } from 'vue'

const divRef = ref<HTMLElement | null>(null);

function full() {
  if(divRef.value) {
    useFullscreen(divRef.value)
  }
}

</script>

<style scoped>
.divStyle{
  width: 200px;
  height: 200px;
  background-color: red;
  display: inline-block;
}
</style>