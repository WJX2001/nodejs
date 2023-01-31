// nodejs含有文件的自动查找
// 默认找当前文件夹下index开头的文件，依次为 index.js index.json
// 读流
const stream = require('node:stream')
const aimFile = require('node:path').join(__dirname,'./test.txt')
console.log(aimFile)

const fs= require('node:fs')
// createReadStream 塞入目标文件构成可读流机制
// 组合起来的机器，就是fileString
const fileStream = fs.createReadStream(aimFile)
console.log(fileStream)

// // 一、 如何获取Buffer：通过监听data事件
// // 监听状态, data -> paused=>flow
// fileStream.on('data',(chunk) => {
//     console.log(chunk)
// })

// fileStream.on('close',() =>{
//     console.log('结束了')
// })

// 2.通过读流中的pipe函数，将读流和写流连接
fileStream.pipe(process.stdout)