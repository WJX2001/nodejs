const net = require('node:net')


const host = '127.0.0.1'
const port = 3000

const client = net.createConnection(port,host)



// 监听服务端数据
client.on('data',(data) => {
    console.log(data.toString('utf-8'))
})

// 当和服务端成功建立连接后，向服务端写数据
client.on('connect',() => {
    client.write('GET /username HTTP1.1\nhost:127.0.0.1\ncontent-type:utf-8')
})
