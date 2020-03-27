const chatroom = new Chatroom('general', 'riyad');

chatroom.getChats((data)=>{
    console.log(data)
})