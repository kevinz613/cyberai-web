import { AiModel } from '@/config/ChatConfig.ts'
import { Role } from '@/store/completions/completion.ts'

export interface RequestMessage {
  //角色
  role: Role
  //内容
  content: string
}

export interface CompletionRequest {
  //模型
  model: AiModel
  //消息
  messages: RequestMessage[]
}
