
//对话信息
export interface chatsInfo{
  path: string
  id: string
  name: string
  time: string
  data: Array<ChatResponse>
}

// 对话响应
export interface ChatResponse{
  id: string
  role: string
  content: string
}
