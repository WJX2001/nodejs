
// commonjs 模块
// ESModule
// 区分: commonjs 引入模块时是赋值，esmodule是静态导入
const { Socket } = require('node:dgram')
const net = require('node:net')
// console.log(net)


// server (需要监听端口号)
// 1.创建
const server = net.createServer((Socket) => {
    
    // 监听客户端数据，客户端发送数据后，立即回复客户端
    Socket.on('data',(dataFromClient) => {
        console.log(dataFromClient.toString('utf-8'))
        // 回复客户端
        Socket.write('你好客户端')
    })
})

// 2.启动 (监听1-65535)
server.listen(3000,'127.0.0.1', () => console.log('server is listening 3000 port!'))

// client