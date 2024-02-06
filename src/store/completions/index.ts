import {defineStore} from "pinia";
import {ChatSession, Message} from "@/store/completions/completion.ts";
import {
  combineCompletionRequest,
  formatMessage,
  generateChatSession,
  generateSession
} from "@/utils/completionUtils.ts";
import {stream_completion, sync_completion} from "@/api/completion";
import {AiModel} from "@/config/ChatConfig.ts";

;


export const useCompletionStore = defineStore('completion', {
  state: () => ({
    //当前选择对话id
    selectChatId: '',
    //对话信息
    sessions: [] as ChatSession[],
    //是否流式对话
    stream: false,
    //ai model
    model: AiModel.GLM_3_Turbo
  }),
  actions: {
    //每次刷新都会重置selectedId
    initSelectedId() {
      this.selectChatId = ''
    },
    //新建对话
    addChat() {
      const chatSession = generateChatSession();
      const newSessions = this.sessions;
      newSessions.unshift({
        id: chatSession.id,
        config: chatSession.config,
        history: chatSession.history,
        messages: chatSession.messages,
      });
      this.sessions = newSessions;
      this.selectChatId = chatSession.id;
    },
    addHistory(session:ChatSession) {
      const newSessions = this.sessions;
      newSessions.unshift({
        id: session.id,
        config: session.config,
        history: session.history,
        messages: session.messages,
      });
      this.sessions = newSessions;
      this.selectChatId = session.id;
    },
    //删除对话
    delChat(id: string) {
      const newSessions = this.sessions.filter((c) => c.id !== id)
      if (this.sessions.length <= 1) {
        //不存在，生成session
        const chatSession = generateChatSession();
        const newSessions = this.sessions;
        newSessions.unshift({
          id: chatSession.id,
          config: chatSession.config,
          history: chatSession.history,
          messages: chatSession.messages,
        });
        this.sessions = newSessions;
        this.selectChatId = chatSession.id;
      }
      this.selectChatId = this.sessions[1].id;
      this.sessions = newSessions;
    },
    //更新对话选择
    switchSelectChatId(id: string) {
      this.selectChatId = id;
    },
    //发送消息
    async sendMessage(newMessage: Message) {
      //如果selectChatId为''
      if (this.selectChatId=== ''){
        //生成session
        const session = generateSession(newMessage.content, newMessage);
        //新增历史记录
        this.addHistory(session);
        session.messages = session.messages.concat(newMessage);
        const message = formatMessage(session.messages);
        const completionRequest = combineCompletionRequest(this.model,message);
        //发送消息
        if (this.stream){
          //流式对话
          await stream_completion(completionRequest)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }else {
          //同步对话
          await sync_completion(completionRequest)
            .then(function (response) {
              console.log('response');
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }else {
        //获取当前会话
        let session: ChatSession = null;
        for (let i = 0; i < this.sessions.length; i++) {
          if (this.selectChatId === this.sessions[i].history.id){
            session = this.sessions[i]
          }
        }
        session.messages = session.messages.concat(newMessage);
        const message = formatMessage(session.messages);
        const completionRequest = combineCompletionRequest(this.model,message);
        //发送消息
        if (this.stream){
          //流式对话
          await stream_completion(completionRequest)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }else {
          //同步对话
          await sync_completion(completionRequest)
            .then(function (response) {
              console.log('response');
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }

      }
    }

  },

})


