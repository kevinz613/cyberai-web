import {defineStore} from "pinia";
import {generateChatInfo} from "@/utils/generateChatInfo.ts";
import {ChatResponse, chatsInfo} from "@/store/completions/completion.ts";
import {dateTrans} from "@/utils/dateTrans.ts";
import {ellipsis} from "@/utils/ellipsis.ts";


export const useCompletionStore = defineStore('completion',{
  state:()=>({
    //对话信息
    chats: [] as chatsInfo[],
    //当前选择对话id
    selectChatId: '',
  }),
  actions:{
    //每次刷新都会重置selectedId
    initSelectedId(){
      this.selectChatId = ''
    },
    //新建对话
    addChat(){
      const chatInfo = generateChatInfo();
      const newChats = this.chats
      newChats.unshift({data: chatInfo.data, id: chatInfo.id, name: ellipsis(chatInfo.name), path: chatInfo.path, time: dateTrans(chatInfo.time)})
      this.chats = newChats
      this.selectChatId = chatInfo.id
    },
    //删除对话
    delChat(id: string){
      const newChats = this.chats.filter((c)=>c.id !== id)
      if (this.chats.length <= 1){
        const chatInfo = generateChatInfo();
        const newChats = this.chats
        newChats.unshift({data: chatInfo.data, id: chatInfo.id, name: ellipsis(chatInfo.name), path: chatInfo.path, time: dateTrans(chatInfo.time)})
        this.chats = newChats
        this.selectChatId = chatInfo.id
      }
      this.selectChatId = this.chats[1].id
      this.chats = newChats
    },
    //更新对话选择
    switchSelectChatId(id: string){
      this.selectChatId = id
    },
    //更新chatInfo
    setChatInfo(id:string,data:ChatResponse){
      this.chats = this.chats.map((item) => {
        if (item.id === id) {
          //更新数据
          item.name = item.data.length <= 0 && data?.content ? data.content : item.name
          item.data = data ? item.data.concat(data) : item.data
        }
        return item
      });
    },
    //发送对话消息


  },
})
