<script setup lang="ts">
import useRequest from "../index";

const { error, loading, response } = useRequest<{ hitokoto: string }>({
  url: "https://v1.hitokoto.cn/",
  method: "post",
});
</script>
<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="loading">{{ loading }}</div>
  <div v-else>{{ response.hitokoto }}</div>
</template>
