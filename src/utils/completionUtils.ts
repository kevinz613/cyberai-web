import {Message, Role} from "@/store/completions/completion.ts";
import {generateUUID} from "@/utils/generateUUID.ts";
import {AiModel} from "@/config/ChatConfig.ts";
import {dateTrans, dateTransMinute} from "@/utils/dateTrans.ts";
import {CompletionRequest, RequestMessage} from "@/api/completion/types.ts";


/*当字符串长度超过11，显示省略号*/
export const ellipsis = (value: string) => {
  if (value.length> 11){
    return value.slice(0,11).concat('...')
  }
  return value;
}

/*格式消息 如果历史消息超过5个，只取最新的3个*/
export const formatMessage = (messages: Message[]) => {
  const latestMessages = messages.length > 3 ? messages.slice(-3) : messages
  return latestMessages.map(({content, role}) => ({
    content, role
  }))
}

/*生成chatSession*/
export const generateChatSession = () => {
  const uuid = generateUUID();
  return {
    id: uuid,
    history: {
      id: uuid,
      title: '新的对话',
      time: dateTransMinute(new Date())
    },
    messages: [
      {
        id: uuid,
        avatar: 'src/assets/logo/logo.svg',
        role: Role.system,
        content: '你好，我是Cyber,有什么可以帮助您的?',
        time: dateTrans(new Date())
      }
    ],
    config:{
      model: AiModel.GLM_3_Turbo
    }
  }
}

/*创建消息*/
export const createNewMessage = (value: string, role?: Role):Message => {
  return{
    id: generateUUID(),
    avatar: role != Role.user ? 'src/assets/logo/logo.svg' : 'src/assets/icon/user.svg',
    content: value,
    role: role || Role.user,
    time: dateTrans(new Date())
  }
}

export const generateSession = (value: string, message:Message) => {
  const uuid = generateUUID();
  return {
    id: uuid,
    history: {
      id: uuid,
      title: ellipsis(value),
      time: dateTransMinute(new Date())
    },
    messages: [message],
    config:{
      model: AiModel.GLM_3_Turbo
    }
  }
}

export const combineCompletionRequest = (model: AiModel, messages: RequestMessage[]):CompletionRequest => {
  return {
    model: model,
    messages: messages
  }
}

