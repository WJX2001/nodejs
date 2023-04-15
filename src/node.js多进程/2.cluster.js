// 通过cluster 创建多进程
const http  = require('http')
const cluster = require('cluster')  // nodejs 内置模块
const cpuMuns = require('os').cpus().length // cpu 核数

// cluster 基本原理，主线程取fork 子线程，然后管理他们
if(cluster.isMaster) {  // 如果你是主线程
    
    for(var i=0;i<cpuMuns;i++) {
        // 开启子进程
        cluster.fork();
    }
}else { // 子线程走下面
    http.createServer((req,res) => {
        res.end('hello')
    }).listen(8080, () => {
        console.log('server is listening ' +8080)
    })
}




