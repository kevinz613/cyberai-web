<template>
  <n-layout-sider bordered width="200" :native-scrollbar="false">
    <div class="history-btn">
      <n-button color="#b37feb" strong block circle>
        <template #icon>
          <n-icon><ChatboxEllipsesOutline /></n-icon>
        </template>
        新建对话
      </n-button>
    </div>
    <div>
      <n-divider />
    </div>

  </n-layout-sider>
</template>

<script setup lang="ts">
import {ChatboxEllipsesOutline} from '@vicons/ionicons5'
</script>
<style scoped>
.history-btn{
  margin: 10px;
}
</style>
