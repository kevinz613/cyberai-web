/*格式消息 如果历史消息超过5个，只取最新的3个*/
import {ChatResponse} from "@/store/completions/completion.ts";

export const formatMessage = (messages: Array<ChatResponse>) => {
  const latestMsg = messages.length > 3 ? messages.slice(-3) : messages
  return latestMsg.map((msg)=>{
    msg.content
    msg.role
  })
}
