<template>
  <n-space>
    <n-el>
      <img class="logo" src="@/assets/logo/logo.svg" alt="" />
    </n-el>
    <n-el class="logo-content">
      <span class="logo-title">Cyber</span>
    </n-el>
  </n-space>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
}
.logo-content {
  padding-top: 15px;
}
.logo-content .logo-title {
  font-size: 24px;
}
</style>
