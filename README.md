# CYBER AI WEB


onSendMessage(newMessage: Message,model:string,id: string,stream: boolean){
//获取当前的对话信息
const chats = this.chats.filter((c)=>c.id === id)
//获取之前的消息
const msgs = chats[0].data.map((item)=>{
item.content = item.content.concat(newMessage.message)
item.role = 'user'
this.chats[0].data.unshift({id: item.id,role: item.role,content:item.content})
return chats[0].data
})
//格式化消息
formatMessage(msgs)

    }