const fs = require('node:fs')


// 创建文件
// 1.通过参数控制文件是否创建
fs.writeFile(`${__dirname}/test.txt`,'hello world\n',{flag: 'a'},(err) =>{
    console.log('文件')
})
// fs.writeFile(process.stdout.fd,'hello world',(err) =>{
//     console.log('进程')
// })

// 2.删除文件、
// fs.unlink(`${__dirname}/test.txt`,(err) => {
//     if(!err) {
//         console.log('删除成功')
//     }
// })


// 3.读文件
// 每次要把整个文件读取了，会占用大量内存

fs.readFile(`${__dirname}/test.txt`,(err,data) =>{
    if(!err) {
        console.log(data.toString('utf-8'))
    }
})