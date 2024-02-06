<template>
  <div v-for="item in chats">
    <div v-for="i in item.messages">
      <img :src="i.avatar" alt="" width="30px" height="30px" />
      <span>{{ i.role }}</span
      ><br />
      <span>{{ i.content }}</span
      ><br />
      <span>{{ i.time }}</span
      ><br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCompletionStore } from '@/store/completions';
import { computed } from 'vue';

const completionStore = useCompletionStore();
const selectedId = computed(() => completionStore.selectChatId);
const chats = computed(() => completionStore.sessions.filter((c) => c.id === selectedId.value));
</script>
<style scoped></style>
