//历史消息
import {AiModel} from "@/config/ChatConfig.ts";

export interface History {
  //对话id
  id: string
  //对话标题
  title: string
  //对话时间
  time: string
}

//对话消息
export interface Message {
  //id
  id: string
  //头像
  avatar: string
  //角色
  role: Role
  //内容
  content: string
  //对话时间
  time: string
}

// AI模型
export interface ChatConfig {
  model: AiModel
}

//角色枚举
export enum Role {
  //系统
  system = "system",
  //用户
  user = "user",
  //助手
  assistant = "assistant",
}


//对话session
export interface ChatSession {
  //会话id
  id: string,
  //历史信息
  history: History,
  //对话消息
  messages: Message[],
  //会话配置
  config: ChatConfig,
}

