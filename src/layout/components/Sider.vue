<template>
  <n-layout-sider bordered show-trigger collapse-mode="width" :collapsed-width="64" width="150" :native-scrollbar="false" :collapsed="{ collapsed }.collapsed" @update-collapsed="switchCollapse">
    <SiderMenu />
  </n-layout-sider>
</template>

<script setup lang="ts">
import SiderMenu from '@/layout/components/SiderMenu.vue';
import { useSettingStore } from '@/store/GlobalSetting.ts';
import { computed } from 'vue';

const settingStore = useSettingStore();
const collapsed = computed(() => settingStore.collapsed);

const switchCollapse = () => {
  if (collapsed.value) {
    settingStore.switchCollapse(false);
  } else {
    settingStore.switchCollapse(true);
  }
};
</script>
<style scoped></style>
