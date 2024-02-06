<template>
  <n-config-provider :theme="theme === 'light' ? lightTheme : darkTheme">
    <n-notification-provider>
      <n-dialog-provider>
        <n-message-provider>
          <router-view></router-view>
        </n-message-provider>
      </n-dialog-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/store/GlobalSetting.ts'
import { computed } from 'vue'
import { darkTheme, lightTheme } from 'naive-ui'
const settingStore = useSettingStore()
const theme = computed(() => settingStore.globalSetting.themeModel)
</script>
