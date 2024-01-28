<template>
  <n-layout style="height: 100%">
    <n-layout-header class="header" bordered>
      <Logo />
      <div class="header-user">
        <UserSetting />
      </div>
    </n-layout-header>
    <n-layout has-sider style="height: calc(100vh - 60px)">
      <Sider />
      <n-layout style="height: 100%">
        <n-el tag="div" class="layout-main">
          <Main />
        </n-el>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Sider from '@/layout/components/Sider.vue';
import Logo from '@/layout/components/Logo.vue';
import Main from '@/layout/components/Main.vue';
import UserSetting from '@/layout/components/UserSetting.vue';
</script>
<style scoped></style>

<style lang="less" scoped>
.layout-main {
  background-color: var(--action-color);
  height: 100%;
}

.header {
  display: flex;
  height: 60px;

  &-user {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 10px;
  }
}
</style>
