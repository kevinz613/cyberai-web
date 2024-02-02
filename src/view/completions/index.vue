<template>
  <n-layout class="layout-sider">
    <n-layout has-sider style="height: 100%">
      <sider class="sider"/>
      <n-layout style="height: 100%" class="content">
        <n-el tag="div" class="layout-main">
          <Main/>
        </n-el>
      </n-layout>
    </n-layout>
  </n-layout>
  <n-layout-footer class="foot">
    2024 © Cyber AI By kevin Z.
  </n-layout-footer>
</template>

<script setup lang="ts">

import Sider from "@/view/completions/component/sider.vue";
import Main from "@/view/completions/component/main.vue";
</script>

<style scoped lang="less">
.layout-sider{
  height: calc(100vh - 90px);
  width: calc(100% - 40px);
  margin: 0 20px;
  border-radius: 25px;
}

.sider{
  background: var(--card-color);
}

.content{
  background: var(--divider-color);
}
.foot{
  background: transparent;
  text-align: center;
  padding-top: 5px;
  font-size: 12px;
  font-weight: bolder;
}

</style>
