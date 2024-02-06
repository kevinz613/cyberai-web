<template>
  <n-layout-sider bordered width="200" :native-scrollbar="false">
    <div class="history-btn">
      <n-button color="#b37feb" strong block circle @click="createNewChat">
        <template #icon>
          <n-icon><ChatboxEllipsesOutline /></n-icon>
        </template>
        新建对话
      </n-button>
    </div>
    <n-divider style="margin-top: 10px; margin-bottom: 10px" />
    <div class="history-search">
      <n-input placeholder="搜索" round>
        <template #prefix>
          <n-icon :component="FlashOutline" />
        </template>
      </n-input>
    </div>
    <n-divider style="margin-top: 10px; margin-bottom: 10px" />
    <div class="history-list">
      <n-list
        bordered
        clickable
        hoverable
        class="history-list-item"
        v-for="item in sessions"
        :key="item.id"
        style="margin-top: 5px"
        :class="[item.id == selectChatId ? 'selected' : 'default']"
        @click="switchSelectId(item.id)"
      >
        <n-list-item key="{{item.history.id}}}">
          <div class="title">
            <span>{{ item.history.title }}</span>
          </div>
          <div class="time">
            <span>{{ item.history.time }}</span>
          </div>
          <div class="btn">
            <n-popconfirm
              positive-text="删除"
              negative-text="取消"
              @positive-click="handleDeleteChat(item.id)"
            >
              <template #trigger>
                <n-icon color="#b37feb" size="18">
                  <Delete16Regular />
                </n-icon>
              </template>
              是否要删除历史对话
            </n-popconfirm>
          </div>
        </n-list-item>
      </n-list>
    </div>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ChatboxEllipsesOutline, FlashOutline } from '@vicons/ionicons5'
import { Delete16Regular } from '@vicons/fluent'
import { computed } from 'vue'
import { useCompletionStore } from '@/store/completions'

const completionStore = useCompletionStore()
const sessions = computed(() => completionStore.sessions)
const selectChatId = computed(() => completionStore.selectChatId)

//创建新对话
const createNewChat = () => {
  completionStore.addChat()
}

//删除历史对话
const handleDeleteChat = (id: string) => {
  completionStore.delChat(id)
}
//更新选择对话
const switchSelectId = (id: string) => {
  completionStore.switchSelectChatId(id)
}
</script>
<style scoped>
.history-btn {
  margin: 10px;
}
.history-search {
  margin: 0 10px;
}
.history-list {
  padding-left: 5px;
}
.history-list-item {
  width: 95%;
  border-radius: 15px;
  border-color: #efdbff;
}
.history-list-item .title {
  font-size: 14px;
  color: #515a6e;
}
.history-list-item .time {
  font-size: 10px;
  color: grey;
}
.history-list-item .btn {
  position: absolute;
  right: 2px;
  bottom: 18px;
}
.selected {
  background: #efdbff;
}
.default {
  background: transparent;
}
</style>
