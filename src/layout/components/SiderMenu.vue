<template>
  <n-menu :collapsed="{ collapsed }.collapsed" :collapsed-width="64" :collapsed-icon-size="28" :icon-size="26" :options="menus" key-field="key" label-field="label" />
</template>

<script lang="ts" setup>
import { menuOptions } from '@/config/SiderMenu.ts';
import { useSettingStore } from '@/store/GlobalSetting.ts';
import { computed } from 'vue';

const menus = menuOptions;
const settingStore = useSettingStore();
// 引入pinia中的storeToRefs
const collapsed = computed(() => settingStore.collapsed);
</script>
<style scoped></style>
