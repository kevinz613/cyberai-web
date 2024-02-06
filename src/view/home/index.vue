<template>
  <div class="home" style="height: calc(100vh - 60px)">
    <div class="home-1">
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <n-card class="card" hoverable>
            <div class="home-title">
              <n-icon size="17" color="#a0d911">
                <Chat48Regular />
              </n-icon>
              <span style="padding-left: 5px">AI 对话</span>
            </div>
            <div class="home-sub-title">
              <span>提供场景预设实现精准问答</span>
            </div>
            <img src="@/assets/home/completion.svg" width="60%" height="60%" alt="" />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card class="card" hoverable>
            <div class="home-title">
              <n-icon size="17" color="#ff7875">
                <ImagesOutline />
              </n-icon>
              <span style="padding-left: 5px">AI 绘画</span>
            </div>
            <div class="home-sub-title">
              <span>通过AI将你的想象变为现实</span>
            </div>
            <img src="@/assets/home/image.svg" width="60%" height="60%" alt="" />
          </n-card>
        </n-gi>
      </n-grid>
    </div>
    <div class="home-2">
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <n-card class="card" hoverable>
            <div class="home-title">
              <n-icon name="name" />
              <span>AI 对话</span>
            </div>
            <div class="home-sub-title">
              <span>集成GPT&GLM等模型聊天,提供场景预设实现精准问答</span>
            </div>
            <img src="@/assets/home/completion.svg" width="50%" height="50%" alt="" />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card class="card" hoverable>
            <div class="home-title">
              <n-icon name="name" />
              <span>AI 对话</span>
            </div>
            <div class="home-sub-title">
              <span>集成GPT&GLM等模型聊天,提供场景预设实现精准问答</span>
            </div>
            <img src="@/assets/home/completion.svg" width="50%" height="50%" alt="" />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card class="card" hoverable>
            <div class="home-title">
              <n-icon name="name" />
              <span>AI 对话</span>
            </div>
            <div class="home-sub-title">
              <span>集成GPT&GLM等模型聊天,提供场景预设实现精准问答</span>
            </div>
            <img src="@/assets/home/completion.svg" width="50%" height="50%" alt="" />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card class="card" hoverable>
            <div class="home-title">
              <n-icon name="name" />
              <span>AI 对话</span>
            </div>
            <div class="home-sub-title">
              <span>集成GPT&GLM等模型聊天,提供场景预设实现精准问答</span>
            </div>
            <img src="@/assets/home/completion.svg" width="51%" height="51%" alt="" />
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chat48Regular } from '@vicons/fluent';
import { ImagesOutline } from '@vicons/ionicons5';
</script>
<style scoped lang="less">
.card {
  background: transparent;
}

.home .home-1 .home-title {
  text-align: left;
  background: transparent;
  font-weight: bolder;
  font-size: 18px;
  color: gray;
}
.home .home-1 .home-sub-title {
  text-align: left;
  background: transparent;
  font-weight: bolder;
  font-size: 14px;
  color: grey;
}

.home .home-2 {
  margin-top: 10px;
}
.home .home-2 .home-title {
  text-align: left;
  background: transparent;
  font-weight: bolder;
  font-size: 18px;
  color: gray;
}
.home .home-2 .home-sub-title {
  text-align: left;
  background: transparent;
  font-weight: bolder;
  font-size: 14px;
  color: grey;
}
</style>
