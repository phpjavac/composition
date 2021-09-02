<script setup lang="ts">
import useRequest from '../index';

interface Hitokoto {
  from: string;
  hitokoto: string;
  id: number;
  uuid: string;
}

const { error, loading, response } = useRequest<Hitokoto>({
  url: "https://v1.hitokoto.cn/",
  method: "get",
});
</script>
<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="loading">{{ loading }}</div>
  <div v-else>
    <div class="hitokoto"> {{ response.hitokoto }} - {{ response.from }}</div>
  </div>
</template>
