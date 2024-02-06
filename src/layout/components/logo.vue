<template>
  <n-space>
    <n-el>
      <img class="logo" src="../../assets/logo/logo.svg" alt="" />
    </n-el>
    <n-el class="logo-content">
      <span class="color logo-title">Cyber</span>
      <span class="color"> AI</span>
    </n-el>
  </n-space>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  width: 40px;
  height: 60px;
  padding-left: 12px;
}
.logo-content {
  padding-top: 20px;
}
.logo-content .logo-title {
  font-size: 16px;
  font-family:
    v-sans,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
}

.color {
  color: #646cff;
  font-size: 14px;
}
</style>
