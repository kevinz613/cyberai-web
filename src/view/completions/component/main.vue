<template>
  <div class="main">
    <div class="content">
      <n-scrollbar trigger="hover">
        <welcome v-if="selectedId === ''" />
        <message v-else />
      </n-scrollbar>
    </div>
    <div class="model-select">
      <n-space size="small">
        <n-tag round :bordered="false" type="warning" size="medium" style="margin-top: 5px">
          模型
          <template #icon>
            <n-icon :component="CubeOutline" />
          </template>
        </n-tag>
        <n-select
          size="medium"
          v-model:value="selectedModel"
          :options="options"
          placement="top"
          placeholder="请选择AI模型"
          class="input-select"
          @update:value="handleSelected"
        />
        <n-switch
          class="input-switch"
          :round="true"
          size="large"
          checked-value="stream"
          unchecked-value="sync"
          v-model:value="active"
          @update:value="handleStream"
        >
          <template #checked> 流式问答 </template>
          <template #unchecked> 同步问答 </template>
        </n-switch>
      </n-space>
    </div>
    <div class="input">
      <n-input
        class="input-text"
        v-model:value="chatVal"
        type="textarea"
        placeholder="请输入对话信息"
        clearable
        @input="handleInput"
        :autosize="{
          minRows: 5,
          maxRows: 5,
        }"
      />
      <!-- input text -->
      <div class="input-btn fix-btn">
        <n-space justify="end" style="padding-right: 10px">
          <n-button
            quaternary
            style="background: #85a5ff"
            round
            :disabled="sendBtnStatus"
            @click="sendMessage"
          >
            <template #icon>
              <n-icon size="24" color="#f0f5ff"><Send16Regular /></n-icon>
            </template>
          </n-button>
        </n-space>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Send16Regular } from '@vicons/fluent'
import { CubeOutline } from '@vicons/ionicons5'
import { computed, onMounted, ref } from 'vue'
import Welcome from '@/view/completions/component/welcome.vue'
import { useCompletionStore } from '@/store/completions'
import Message from '@/view/completions/component/message.vue'
import { createNewMessage } from '@/utils/completionUtils.ts'
import { Role } from '@/store/completions/completion.ts'
//默认选择AI模型
const selectedModel = ref('glm-3')
//输入默认对话信息
const chatVal = ref(null)
//send按钮状态
const sendBtnStatus = ref(true)
//获取对话信息
const completionStore = useCompletionStore()
const selectedId = computed(() => completionStore.selectChatId)
const active = ref('stream')
const stream = ref(true)
//初始加载
onMounted(() => {
  completionStore.initSelectedId()
})
//加载的AI模型列表
const options = ref([
  {
    label: 'ChatGLM-3',
    value: 'glm-3',
  },
  {
    label: 'ChatGLM-4',
    value: 'glm-4',
  },
  {
    label: 'ChatGLM-4v',
    value: 'glm-4v',
  },
])

/*处理 select 选择事件*/
const handleSelected = (value: string) => {
  selectedModel.value = value
}

/*处理是否流式问答*/
const handleStream = (value: string) => {
  if (value === 'stream') {
    active.value = 'stream'
    stream.value = true
  } else {
    active.value = 'sync'
    stream.value = false
  }
}

const handleInput = (v: string) => {
  chatVal.value = v
  sendBtnStatus.value = v.length <= 0
}

const sendMessage = async () => {
  const message = createNewMessage(chatVal.value || '', Role.user)
  chatVal.value = null
  await completionStore.sendMessage(message)
}
</script>
<style scoped>
.main {
  width: 100%;
  height: calc(100vh - 90px);
}
/*主要内容*/
.content {
  height: 75%;
  padding: 0 15px;
}

/*模型选择*/
.model-select {
  width: 100%;
  height: 5%;
  margin: 0 5%;
}
.model-select .input-select {
  width: 100%;
  min-width: 130px;
}
.model-select .input-switch {
  padding-top: 5px;
}

/*输入文本框*/
.input {
  height: 20%;
}

/*输入框 text*/
.input .input-text {
  border-radius: 25px;
  width: 90%;
  margin: 0 5%;
  position: absolute;
  bottom: 30px;
}

/*发送清除 定位*/
.input .fix-btn {
  position: absolute;
  right: 5%;
  bottom: 35px;
}
</style>
