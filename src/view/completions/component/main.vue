<template>
  <div class="main">
    <div class="content">
      <n-scrollbar trigger="hover">
        <welcome v-if="selectedId ==='' "/>
        <message v-else/>
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
        <n-select size="medium" v-model:value="selected" :options="options" placement="top" placeholder="请选择AI模型" class="input-select"  @update:value="handleSelected"/>
      </n-space>
    </div>
    <div class="input">
      <n-input
        class="input-text"
        v-model:value="chatVal"
        type="textarea"
        placeholder="请输入对话信息"
        clearable
        :autosize="{
        minRows: 5,
        maxRows: 5
      }"
      />
      <!-- input text -->
      <div class="input-btn fix-btn">
        <n-space justify="end" style="padding-right: 10px">
          <n-button strong secondary circle size="small" color="#fa8c16">
            <template #icon>
              <n-icon><Send16Regular /></n-icon>
            </template>
          </n-button>
        </n-space>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Send16Regular} from '@vicons/fluent'
import {CubeOutline} from '@vicons/ionicons5'
import {computed, ref,onMounted} from "vue";
import Welcome from "@/view/completions/component/welcome.vue";
import {useCompletionStore} from "@/store/completions";
import Message from "@/view/completions/component/message.vue";
//默认选择AI模型
const selected = ref('glm-3');
//输入默认对话信息
const chatVal = ref(null);
//获取对话信息
const completionStore = useCompletionStore();
const selectedId = computed(()=>completionStore.selectChatId);
//初始加载
onMounted(() => {
  completionStore.initSelectedId();
})
//加载的AI模型列表
const options = ref([
  {
    label: "ChatGLM-3",
    value: 'glm-3'
  },
  {
    label: 'ChatGLM-4',
    value: 'glm-4'
  },
  {
    label: 'ChatGLM-4v',
    value: 'glm-4v'
  },
])

/*处理 select 选择事件*/
const handleSelected = (value: string) => {
  selected.value = value;
}

</script>
<style scoped>
.main{
  width: 100%;
  height: calc(100vh - 90px);
}
/*主要内容*/
.content{
  height: 75%;
  padding: 0 15px;
}

/*模型选择*/
.model-select{
  width: 100%;
  height: 5%;
  margin: 0 5%;
}
.model-select .input-select{
  width: 100%;
  min-width: 130px;
}

/*输入文本框*/
.input{
  height: 20%;
}

/*输入框 text*/
.input .input-text{
  border-radius: 25px;
  width: 90%;
  margin: 0 5%;
  position: absolute;
  bottom: 30px;
}

/*发送清除 定位*/
.input .fix-btn{
  position: absolute;
  right: 5%;
  bottom: 35px;
}

</style>
