const  app = require('express')()
const http = require('https')
const server = http.createServer(app)
const { Server} = require('socket.io')
const io = new Server(server)

app.get('/',(req, res)=>{
    res.send("<h1>hello world<h1>")
})

io.on('connection', (socket) => {
    console.log('Client connected'+socket.id)
    socket.on('CHAT',(data)=>{
        console.log('========CHAT msg=======')
        console.log(data)
        socket.emit('CHAT',data)
    })
    socket.on('disconnect',()=>{
        console.log('Client disconnected: '+socket.id)
    })
})

server.listen(3200,function(){
    console.log('Listening on port 3200')
})


