/*生成默认的对话信息*/

import {generateUUID} from "@/utils/generateUUID.ts";

export const generateChatInfo = () => {
  const uuid = generateUUID();
  return{
    path: uuid,
    id: uuid,
    name:'新的对话',
    data: [{
      id: uuid,
      role: 'assistant',
      content: '请问有什么可以帮助你的?'
    }],
    time: new Date()
  }
}
