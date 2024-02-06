<template>
  <n-layout class="layout-sider">
    <n-layout has-sider style="height: 100%">
      <sider class="sider" />
      <n-layout style="height: 100%" class="content">
        <n-el tag="div" class="layout-main"> images </n-el>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Sider from '@/view/images/component/sider.vue';
</script>

<style scoped lang="less">
.layout-sider {
  height: calc(100vh - 60px);
  width: calc(100% - 40px);
  margin: 0 20px;
  border-radius: 25px;
}

.sider {
  background: var(--divider-color);
}

.content {
  background: var(--border-color);
}
</style>
