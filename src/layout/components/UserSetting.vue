<template>
  <div>
    <n-space size="large" style="padding-right: 20px">
      <n-el class="header-icon hover-color">
        <n-icon size="20"><NotificationsOutline /></n-icon>
      </n-el>
      <n-el class="header-icon hover-color">
        <n-icon size="20"><Language /></n-icon>
      </n-el>
      <n-el class="header-icon hover-color">
        <n-icon size="20"><SettingsOutline /></n-icon>
      </n-el>
      <n-el
        v-if="themeModel === 'dark'"
        class="header-icon hover-color"
        @click="switchLight"
      >
        <n-icon size="20"><SunnyOutline /></n-icon>
      </n-el>
      <n-el
        v-if="themeModel === 'light'"
        class="header-icon hover-color"
        @click="switchDark"
      >
        <n-icon size="20"><MoonOutline /></n-icon>
      </n-el>
      <n-el class="header-icon hover-color">
        <n-dropdown trigger="click" :options="options" @select="handleLogout">
          {{ name }}
        </n-dropdown>
      </n-el>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import {
  NotificationsOutline,
  Language,
  SettingsOutline,
  SunnyOutline,
  MoonOutline,
} from '@vicons/ionicons5';

import { useSettingStore } from '@/store/GlobalSetting.ts';
import { computed, h ,ref} from 'vue';
import {NAvatar, NText, useMessage} from "naive-ui";
import router from "@/router";
import useUserStore from "@/store/user";
import {removeToken} from "@/utils/token.ts";

const message = useMessage();
//获取setting store
const settingStore = useSettingStore();
const themeModel = computed(() => settingStore.globalSetting.themeModel);
const userStore = useUserStore();
//用户信息
const name = computed(() => userStore.name);
const avatar = computed(() => userStore.avatar);

function renderCustomHeader () {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;'
    },
    [
      h(NAvatar, {
        round: true,
        style: 'margin-right: 12px;',
        src: avatar.value
      }),
      h('div', null, [
        h('div', null, [h(NText, { depth: 2 }, { default: () => name.value })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => '毫无疑问，你是办公室里最亮的星' }
          )
        ])
      ])
    ]
  )
}

// 用户下拉
const options = ref([
    {
      key: 'header',
      type: 'render',
      render: renderCustomHeader
    },
    {
      key: 'header-divider',
      type: 'divider'
    },
    {
      label: '退出登录',
      key: 'logout'
    },
  ])

//处理退出登录
const handleLogout = (key: string | number) => {
  if (key === 'logout'){
    userStore.logout().then(()=>{
      removeToken();
      //重定向
      router.push('/login')
    }).catch(()=>{
      setTimeout(()=>{
        message.info('退出失败');
      },3100)
    });
  }
}
/*切换日间主题*/
const switchLight = () => {
  settingStore.switchToLight();
};
/*切换夜间主题*/
const switchDark = () => {
  settingStore.switchToDark();
};
</script>
<style scoped lang="less">
.header-icon {
  cursor: pointer;
  &.hover-color {
    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
