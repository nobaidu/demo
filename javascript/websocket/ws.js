let express = require('express');
let app = express();
app.use(express.static(__dirname));

app.listen(3000);
let WebSocketServer = require('ws').Server;
let wsServer = new WebSocketServer({ port: 9999 });

// 监听连接
wsServer.on('connection', (socket)=>{
    // console.log(socket);
    console.log('客户端连接成功');
    
    // 监听消息
    socket.on('message', (message)=>{
        console.log('收到客户端消息:', message);
        socket.send('服务器回应:' + message);
    });
});