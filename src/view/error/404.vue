<template>
  <div>
    <img class="img" src="@/assets/error/404.svg" alt="404" />
  </div>
  <div class="content">
    <span>对不起，你访问的页面不存在</span>
  </div>
  <div class="btn">
    <n-button color="#002329" type="primary" @click="goBackHome"> 返回主页 </n-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBackHome = () => {
  router.push({ name: 'basic' });
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 600px;
}
.content {
  text-align: center;
  color: gray;
  font-size: 16px;
}
.btn {
  padding-top: 20px;
  text-align: center;
  font-size: 16px;
}
</style>
